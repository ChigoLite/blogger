import  React, { useEffect ,useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Box,Typography } from '@mui/material';
import { useCustomHooks } from './context';
import { Container,Grid ,Paper,Skeleton,styled} from '@mui/material';
import { Link } from 'react-router-dom';
import Deletemodal from './deletemodal';
import { auth } from '../config';
const Article = () => {

    const { post, skeleton,handleClickDelete,isAuth } = useCustomHooks()
    
   const[id,setId]=useState('')
    
   
    const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
    return (
      <Container>
      <Grid sx={{marginTop:'1rem',marginBottom:'1rem'}} container spacing={2}>
            
     {post.map((artcl, index) => {
                          const{avater,title,article,id,author}=artcl
                          return (
        <Grid item xs={12} md={6}  key={id}>
                  <Item>
                    <Card sx={{ maxWidth: 345, textAlign: 'center', borderRadius: '10px', margin: 'auto', }}>
                                  {
                                    skeleton ?
                                      (<Skeleton animation='wave' variant="rectangular" width={300} height={118} />):
                                      (

                          <CardMedia
                              sx={{ objectFit: 'cover', height: '30rem' }}
          image={avater}
          alt={title}
        />
                                          
                                      
                                    ) 
                                  }

                                  {skeleton ? (
                                         <Box sx={{ pt: 0.5 }}>
              <Skeleton variant='text'  animation='wave' />
              <Skeleton variant='rectangular'  animation='wave' />
            </Box>
                                  ) :
                                    
                                      (
                                        <CardContent>
                                        
       <Typography gutterBottom variant="body1"sx={{fontFamily:'fantasy',textTransform:'uppercase',fontSize:'2rem'}} component="h2">   {title}
        </Typography>
                         <Typography gutterBottom variant="h5" component="div">
                                      {article.substring(0, 50)}......<Link to={`single/${id}` }>read more</Link>
                                    </Typography>
      </CardContent>
                                      ) 
                                  }
                                  {
                                    skeleton ? 
                                      (<Skeleton variant='rectangular' animation='wave' />) : (
                                          <CardActions>
                                    {
                                      isAuth && author.id === auth.currentUser.uid && (
  
                                        <Button onClick={() => {
                                          handleClickDelete();
                                          setId(id)
                                        }} variant='contained' color='error'>Delete.</Button>                             
)
                                    }

      </CardActions>
                                  )
                                  }
                                
    </Card>
                              </Item>
                              
        </Grid>
                          )
                      })}

        </Grid>
        <Deletemodal id={ id} />
        </Container>
  );
}
export default Article;