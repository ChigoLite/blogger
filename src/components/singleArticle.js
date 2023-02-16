import React from 'react';
import {useCustomHooks} from './context';
import {useParams} from 'react-router-dom'
import { Typography, Container, Box, Paper, 
  CardActionArea, CardMedia, Card, CardContent, CardActions, Button, Stack
} from '@mui/material';
  import { Firestore } from 'firebase/firestore';
import Logout from './logout';
import { FaClock } from 'react-icons/fa' 
import {FacebookIcon,LinkedinIcon,TwitterIcon,WhatsappIcon,PinterestIcon, FacebookShareButton, WhatsappShareButton, PinterestShareButton, LinkedinShareButton, TwitterShareButton} from 'react-share'
const SingleArticle = () => {
    const { post} = useCustomHooks()

    const { id } = useParams()
  const singleArticle = post.filter((newsDetails) => newsDetails.id === id)
  return (
    <div>
      <Logout/>
          {singleArticle.map((news,index) => {
            const { author, title, avater, date, article, id } = news  
            let dateitem = date.toDate()
              return (
                  <Container key={index}>
                      <Box mt='2'>
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
                            <Stack display='table-row' spacing={2}>
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
</Paper>
                      </Box>

               </Container>
           )   
          })}
    </div>
  );
}

export default SingleArticle;
