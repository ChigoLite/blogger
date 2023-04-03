import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useCustomHooks } from './context';
import{auth}from '../config'

const Deletemodal=({id,imageName})=> {

    const {deleteArticle, deletearticle ,handleCloseDelete,post} = useCustomHooks()
  return (
    <div>
   
          <Dialog
        open={deleteArticle}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are Sure You Want To Delete This Article?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='success' onClick={handleCloseDelete}>Cancel</Button>
                  <Button variant='contained' color='error'  onClick={() => {
                      handleCloseDelete()
                      deletearticle(id,imageName)
                  }
                  } autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

       
      
    </div>
  );
}
export default Deletemodal;