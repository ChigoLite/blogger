import React, {  useContext,useEffect,useState } from 'react';
import{auth,googleAuth}from '../config'
import { signInWithPopup, signOut } from 'firebase/auth'
import { redirect } from 'react-router-dom'
import { addDoc, getDocs, deleteDoc, collection ,doc,updateDoc, query, orderBy, serverTimestamp, onSnapshot} from 'firebase/firestore';
import { getDownloadURL, uploadBytes,ref,listAll,deleteObject } from 'firebase/storage'
import{db,uploader} from '../config'
import { v4 as uuid4 } from 'uuid'

const Appcontext=React.createContext()

let postRef=collection(db,'user')
let newsLetterRef=collection(db,'newsletter')
const Context = ({ children }) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
    const [title, setTitle] = useState('')
    const [article, setArticle] = useState('')
    const [image, setImage] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)
    const [post, setPost] = useState([])
    const [open, setOpen] = useState(false);
    const [deleteArticle, setDeleteArticle] = useState(false);
    const [skeleton, setSkeleton] = useState(true);
  const [backDroping, setBackDroping] = useState(false)
  const[newsLet,setNewsLet]=useState('')
  const [text, setText] = useState('')
  const [comment,setComment]=useState([])
  const [notification, setNotification] = useState(false)
  const[sub,setSub]=useState(false)


  const imageList = ref(uploader, `avater/`)
const date= new Date()

  const handleNewsLet = (e) => {
      setNewsLet(e.target.value)
    }

    const Login = () => {
        signInWithPopup(auth, googleAuth).then((result) => {
            setIsAuth(true)
                    window.location.pathname = '/'
            localStorage.setItem("isAuth", true)
        })
    }
    const Logout = () => {
        signOut(auth).then(() => {
            setIsAuth(false)
            redirect('/')
            localStorage.clear()
        })
    }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickDelete = () => {
setDeleteArticle(true)
  };

  const handleCloseDelete = () => {
   setDeleteArticle(false)

  };


    const titlechange = (e) => {
        setTitle(e.target.value)
    }
    const articlechange = (e) => {
        setArticle(e.target.value)
    }

      const imgupload = (e) => {
          setImage(e.target.files[0])
          setImagePreview(URL.createObjectURL(e.target.files[0]))
    }
  const deletearticle = async (id, imageName) => {
         const imageRef = ref(uploader, `avater/${imageName} }`)
  
  const editCollectionRef = doc(db, "user",id)
  await deleteDoc(editCollectionRef)
  await deleteObject(imageRef)
    const newuser = post.filter(item => item.id !== id)
  setPost(newuser)
  }
    const uploading = () => {
        if (image === null) return;
         const imageRef = ref(uploader, `avater/${image.name} }`)
        uploadBytes(imageRef, image).then((snaphsot) => {
            setBackDroping(true) 
            getDownloadURL(snaphsot.ref).then((url) => {
                addDoc(postRef, {imageName:image.name, title, avater: url, article,date,createdAt:serverTimestamp(), author: { name: auth.currentUser.displayName, id: auth.currentUser.uid } }).then(() => {
                    
                    setArticle('')
                    setTitle('')
                    window.location.pathname = '/'
                }).then(() => {
                    setBackDroping(false)
                })
            })
        })
    }    
    
    
  const newsLetter = () => {
    addDoc(newsLetterRef, {email:newsLet,createdAt:serverTimestamp()})
    setNewsLet('')
    
    }
    
        const getArticle = async () => {
            
          try {
              const queryM=query(postRef,orderBy("createdAt","desc"))
                const data = await getDocs(queryM)
                setPost(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
                setSkeleton(false)
        } catch (error) {
               console.log(error);
            }
    }
    
    const handleText = (e) => {
      setText(e.target.value)
    }
    const commentHandle = async (id, comment) => {
      
      try {
        if (!text) return;
        if (isAuth ) {
          
          const commentref = collection(db, "user", id, "comments")
          const updateField = { text, createdAt: serverTimestamp(), author:{ user: auth.currentUser.displayName, id: auth.currentUser.uid } }
          await addDoc(commentref, updateField)
          setText('')
        } else {
                    window.location.pathname = '/login'

        }

      }

      catch (error) {
        console.error(error)
      }
        
  }
      const getComments = async (id) => {
        const commentref = collection(db, "user",id,"comments")

        try {
              const queryC=query(commentref,orderBy("createdAt","desc"))
                const data = await getDocs(queryC)
                setComment(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        } catch (error) {
               console.log(error);
            }
  }
  const deltComment = async (pID, id,Aid) => {
    if (auth.currentUser.uid === Aid) {
      const deleteCommentRef = doc(db, "user", pID, "comments", id)
      await deleteDoc(deleteCommentRef)
      const newComment = comment.filter(item => item.id !== id)
      setComment(newComment)
    }
    else {
      return;
    }
  }
    

 

    return (
        <Appcontext.Provider value={{isAuth,getArticle,post, Login,Logout,title,article,imagePreview,titlechange,articlechange,imgupload,imageList,uploading,skeleton,open,handleClickOpen,handleClose,deleteArticle,deletearticle,handleClickDelete,handleCloseDelete,backDroping,text,handleText,commentHandle,handleNewsLet,newsLet,newsLetter,getComments,comment,notification,setNotification,sub,deltComment}
}>
            {children}
    </Appcontext.Provider>
  );
}
export const useCustomHooks = () => {
    return useContext(Appcontext)
}
export default Context;
