import  React,{ useEffect,useState } from 'react';
import Box from '@mui/material/Box';
import { TextField ,Button, Backdrop} from '@mui/material';
import { Container,CircularProgress, } from '@mui/material';
import { useCustomHooks } from './context'
const Poster = () => {
   const[disable, setDisable]=useState(true)
  const { title, article, titlechange, articlechange, imgupload, uploading,imagePreview,backDroping} = useCustomHooks();
  
  useEffect(() => {
    if (article.length >= 100 && title && imagePreview) {
      setDisable(false)
    }
    if (article.length < 100) {
setDisable(true)
    }
  }, [article, title,imagePreview]);
  


  return (
      
    <Container>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '35ch' },
        display: 'grid',
          justifyContent:'center'
        }}
      noValidate
      autoComplete="on"
      >
      
      <div>
        <TextField
          id="outlined-size-small"
                  size="medium"
                  label="Article Title"
            variant='filled'
            value={title}
            onChange={titlechange}
        />
          </div>
      <div>
        <TextField
                  size="medium"
                                 variant='filled'
                  type='file'
                        helperText="Please upload some backup image"
                       onChange={imgupload} 
          />
        </div>
        <div>
          <img className={ imagePreview ? 'display' : 'none'} src={imagePreview} alt="preview" />


        </div>
        
          <div>
          <TextField
                     multiline   
                        id="outlined-size-small"
                        fullWidth  
                  size="medium"
                  variant='outlined'
            label="Article goes here...."
            value={article}
            onChange={articlechange}
                        helperText="word must be 100 characters or above."

                  
                  
        />
          </div>
     
        <Button disabled={disable} onClick={() => {
          uploading()
    }} variant='contained'>POST.</Button>
          
      </Box>
       <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backDroping}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      </Container>
  );
}
export default Poster;