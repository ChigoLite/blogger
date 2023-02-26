import React,{useState,useEffect} from 'react';
import {useCustomHooks} from './context';
import { useParams } from 'react-router-dom'
import { Typography, Container, Box, Paper, 
  CardActionArea, CardMedia, Card, CardContent, CardActions, Button, Stack, TextField,Alert, ThemeProvider
} from '@mui/material';
  import { Firestore } from 'firebase/firestore';
import Logout from './logout';
import { FaClock } from 'react-icons/fa' 
import {FacebookIcon,LinkedinIcon,TwitterIcon,WhatsappIcon,PinterestIcon, FacebookShareButton, WhatsappShareButton, PinterestShareButton, LinkedinShareButton, TwitterShareButton} from 'react-share'
import Theme from './theme';
import Notification from './Notification';
import { auth } from '../config';
import Moment from 'react-moment';
import 'moment-timezone';

const SingleArticle = () => {
  const { post, text, handleText, commentHandle ,isAuth,getComments,comment,deltComment} = useCustomHooks()

  const { id:pID } = useParams()

  useEffect(() => {
    getComments(pID)
  }, [text])
 

 
    const singleArticle = post.filter((newsDetails) => newsDetails.id === pID)
 
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Notification />
      <Logout/>
          {singleArticle.map((news,index) => {
            const { author, title, avater, createdAt, article, id ,comment} = news  
              return (
                      <Box key={index} sx={{width:'100%'}} mt='2'>
                          <Paper elavation='6' sx={{textAlign:'center',margin:4}}>
                               <Card sx={{ textAlign:'center' }}>
        <CardContent>
          <Typography sx={{textTransform:'capitalize',fontFamily:'fantasy'}}  gutterBottom variant="body1" component="h4">
{title}
                                          </Typography>
                            <Stack sx={{textAlign:'start'}}>
                            <Typography gutterBottom  sx={{textAlign:'start',fontFamily:'cursive'}}>
                              Author : {author.name}
                              
                            </Typography>
                              
                              <FaClock /> 
                              <Moment date={createdAt.toDate()}/> 
                            </Stack>
                                      <CardMedia
                                        
              > <img className='singleimg' src={avater} alt="avater" /> </CardMedia> 

          <Typography gutterBottom variant="body1" color="text.secondary">
                              {article}
                    
          </Typography>
        </CardContent>
    
                        <CardActions>
                            <Stack direction='row' spacing={1}>
                              <FacebookShareButton >
                              <FacebookIcon size={30} />

                              </FacebookShareButton>
                              <WhatsappShareButton>
                              <WhatsappIcon size={30} />

                              </WhatsappShareButton>
                              <PinterestShareButton>

                              <PinterestIcon size={30} />
                              </PinterestShareButton>
                              <LinkedinShareButton>
                              <LinkedinIcon size={30} />
                              
                              </LinkedinShareButton>
                              <TwitterShareButton>

                              <TwitterIcon size={30} />
                              </TwitterShareButton>
  </Stack>
                                      
      </CardActions>
                      </Card>
                      <Stack direction='row' spacing={2}>

                         
                                        <TextField value={text} onChange={handleText} color='secondary' variant='outlined' size='medium' placeholder='comment here....' />
                           
                                                          
                                        <Button onClick={() => {
                                          commentHandle(id, comment);
                                        }
                                        } color='secondary' variant='contained'>Comment</Button>

                                    
                    </Stack>
</Paper>
                      </Box>
                     

                     )   
          })}
        <Paper>

                    <Typography variant='h4' sx={{ fontFamily: 'fantasy',textAlign:'center' }}>Comments...</Typography>
          {comment.map((msg, index) => {
            const { user, id, createdAt, text ,author} = msg
                      const{id : Aid}=author
            return (
              <Box key={id} sx={{marginBottom:'2rem'}}>
                <hr />
                <Stack direction='row' spacing={1}  >
                  <Typography variant='subtitle1' sx={{ fontFamily: 'revert', fontSize: '0.5rem', }}>{user} </Typography>
                  <Moment fromNow  >
                    {createdAt.toDate()}
                    </Moment >
                </Stack>
                
                 < button onClick={() => deltComment(pID, id,Aid)}>delete</button> 
                
                          
                            <Typography sx={{ textTransform: 'capitalize',marginLeft:'4rem',fontSize:'1.5rem',fontFamily:'monospace' }}>{text}</Typography>
                        </Box>
                      )
                    })}
        </Paper>
       
          
          </ThemeProvider>
    </div>
  );
}

export default SingleArticle;
