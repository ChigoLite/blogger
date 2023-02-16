import React, {  useContext,useEffect,useState } from 'react';
import{auth,googleAuth}from '../config'
import { signInWithPopup, signOut } from 'firebase/auth'
import { redirect } from 'react-router-dom'
import { addDoc, getDocs, deleteDoc, collection ,doc,updateDoc, query, orderBy, serverTimestamp} from 'firebase/firestore';
import { getDownloadURL, uploadBytes,ref,listAll } from 'firebase/storage'
import{db,uploader} from '../config'
const Appcontext=React.createContext()

let postRef=collection(db,'user')
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
    const[backDroping,setBackDroping]=useState(false)


  const imageList = ref(uploader, `avater/`)
const date= new Date()

    

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
const deletearticle = async(id, name) => {
  const editCollectionRef = doc(db, "user",id)
    await deleteDoc(editCollectionRef)
    const newuser = post.filter(item => item.id !== id)
  setPost(newuser)
  }
    const uploading = () => {
        if (image === null) return;
         const imageRef = ref(uploader, `avater/${image.name}`)
        uploadBytes(imageRef, image).then((snaphsot) => {
            setBackDroping(true) 
            getDownloadURL(snaphsot.ref).then((url) => {
                addDoc(postRef, { title, avater: url, article,date,createdAt:serverTimestamp(), author: { name: auth.currentUser.displayName, id: auth.currentUser.uid } }).then(() => {
                    
                    setArticle('')
                    setTitle('')
                    window.location.pathname = '/'
                }).then(() => {
                    setBackDroping(false)
                })
            })
        })
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
  
   
    

 

    return (
        <Appcontext.Provider value={{isAuth,getArticle,post, Login,Logout,title,article,imagePreview,titlechange,articlechange,imgupload,imageList,uploading,skeleton,open,handleClickOpen,handleClose,deleteArticle,deletearticle,handleClickDelete,handleCloseDelete,backDroping}
}>
            {children}
    </Appcontext.Provider>
  );
}
export const useCustomHooks = () => {
    return useContext(Appcontext)
}
export default Context;
