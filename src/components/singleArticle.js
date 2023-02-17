import React,{useState} from 'react';
import {useCustomHooks} from './context';
import {useParams} from 'react-router-dom'
import { Typography, Container, Box, Paper, 
  CardActionArea, CardMedia, Card, CardContent, CardActions, Button, Stack, TextField, ThemeProvider
} from '@mui/material';
  import { Firestore } from 'firebase/firestore';
import Logout from './logout';
import { FaClock } from 'react-icons/fa' 
import {FacebookIcon,LinkedinIcon,TwitterIcon,WhatsappIcon,PinterestIcon, FacebookShareButton, WhatsappShareButton, PinterestShareButton, LinkedinShareButton, TwitterShareButton} from 'react-share'
import Theme from './theme';
const SingleArticle = () => {
  const { post, text, handleText, commentHandle } = useCustomHooks()
  const[commentId,setCommentId]=useState('')

    const { id } = useParams()
  const singleArticle = post.filter((newsDetails) => newsDetails.id === id)
  return (
    <div>
      <ThemeProvider theme={Theme}>

                  <Container >
      <Logout/>
          {singleArticle.map((news,index) => {
            const { author, title, avater, date, article, id ,comment} = news  
            let dateitem = date.toDate()
              return (
                      <Box key={index} mt='2'>
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
                              <div style={{marginTop:'3px',font:'5px'}}>{dateitem.toLocaleDateString() }</div>
                            </Stack>
                                      <CardMedia
                                        
            sx={{ height:'30rem',objectFit:'cover',textAlign:'center' }}
                                        image={avater}                      />   

          <Typography gutterBottom variant="body1" color="text.secondary">
                              {article}
                    
          </Typography>
        </CardContent>
      <CardActionArea>
    
                        <CardActions>
                            <Stack direction='row' spacing={2}>
                              <FacebookShareButton >
                              <FacebookIcon />

                              </FacebookShareButton>
                              <WhatsappShareButton>
                              <WhatsappIcon />

                              </WhatsappShareButton>
                              <PinterestShareButton>

                              <PinterestIcon />
                              </PinterestShareButton>
                              <LinkedinShareButton>
                              <LinkedinIcon />
                              
                              </LinkedinShareButton>
                              <TwitterShareButton>

                              <TwitterIcon/>
                              </TwitterShareButton>
  </Stack>
                                      
      </CardActions>
      </CardActionArea>
                      </Card>
                      <Stack direction='row' spacing={2}>

                      <TextField value={text} onChange={handleText} color='secondary' variant='outlined' size='medium' placeholder='comment here....' />
                      <Button onClick={() => {
                        commentHandle(id, comment);
                        setCommentId(id)
                      }
                      } color='secondary' variant='contained'>Comment</Button>
                    </Stack>
                    <Typography variant='h4'  sx={{fontFamily:'fantasy'}}>Comments...</Typography>
                    {comment.map((msg) => {
                      const { user, id, createdAt, text } = msg
                      return (
                        <Stack direction='row' spacing={1}>
                          <Typography variant='subtitle1' sx={{fontFamily:'revert',fontSize:'0.5rem'}}>{user } </Typography>
                          <Typography sx={{textTransform:'capitalize',}}>{text}</Typography>
                        </Stack>
                      )
                    })}
</Paper>
                      </Box>
                     

                     )   
          })}
          
                    </Container>
          </ThemeProvider>
    </div>
  );
}

export default SingleArticle;
