// import React,{useState,useEffect} from 'react';
// import { db,uploader } from '../config'
// import {addDoc, collection,getDocs,doc, updateDoc, deleteDoc} from 'firebase/firestore'
// import {getDownloadURL, listAll, ref, uploadBytes}from 'firebase/storage'
// const Article = () => {
//   const[user,setUser]=useState([])
//   const[msg,setMsg]=useState('')
//   const[edit,setEdit]=useState('')
//   const[deletemsg,setDeletemsg]=useState('')
//   const[article,setArticle]=useState('')
//   const[fileUpload,setFileUpload]=useState(null)
//   const[imgList,setImgList]=useState([])
//   const userCollectionRef = collection(db, "user")
//   const imageList = ref(uploader, `avaters/`)
//   const [imagePreview, setImagePreview] = useState();
//   const preveiw = (e) => {
//     setFileUpload(e.target.files[0])
// setImagePreview(URL.createObjectURL(e.target.files[0]))

//   }
 

//   const handleImage = () => {
//     if (fileUpload === null) return;
//     const imageRef = ref(uploader, `avaters/${fileUpload.name }`)
//     uploadBytes(imageRef, fileUpload).then((snapShot) => {
//       getDownloadURL(snapShot.ref).then((url) => {
//   setImgList([...imgList,url])
// })
//     })
//   }
//   useEffect(() => {
//     listAll(imageList).then((resp) => {
//       resp.items.forEach((item) => {
//         getDownloadURL(item).then((url) => {
//     setImgList((prev)=>[...prev,url])
//   })
// })      
//     })
//   }, []);

  
//   const handlepost = async() => {
//     await addDoc(userCollectionRef, { name: article })
//     setMsg('done..')
//     setArticle('')
//   }
//   const editArt = async(id, name) => {
//   const editCollectionRef = doc(db, "user",id)
//     const newfield =  {name:edit}
//     await updateDoc(editCollectionRef, newfield)
//     setEdit('')
//   }
//   const deletearticle = async(id, name) => {
//   const editCollectionRef = doc(db, "user",id)
//     await deleteDoc(editCollectionRef)
//     console.log(user)
//     const newuser = user.filter(item => item.id !== id)
//     setUser(newuser)
//   }
//   useEffect(() => {
//    const getUser = async () => {
//       try {
//         const data = await getDocs(userCollectionRef)
//         setUser(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
//       } catch (error) {
//         console.log(error);
//       }
//     } 
//     getUser()

//   },[msg,edit])
//   return (
//     <div>
//       {user.map((pple) => {
//         const{name,id}=pple
//         return (
//           <div key={id}>

//           <h1>{ name}</h1>
//             <button onClick={ ()=>editArt(id,name)}>edit</button>
//       <input type="text" value={edit} onChange={(e)=>setEdit(e.target.value)} />
//             <button onClick={ ()=>deletearticle(id,name)}>delete</button>

//           </div>
//         )
//       })}
//       <input type="text" value={article} onChange={(e)=>setArticle(e.target.value)} />
// <button onClick={handlepost}>add user</button>
//       <input type="file" onChange={preveiw} />
//       <img src={imagePreview} alt="preveiw" />
//       <button onClick={handleImage}>post</button>
      
//       {imgList.map(img => {
//         return (

//           <div>

//             <img src={img} alt="mbaka" />
//           </div>
//         )
//       })}
//     </div>
//   );
// }

// export default Article;
