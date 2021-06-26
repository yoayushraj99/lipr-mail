import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateTime from './Date';
import Frequency from './Frequency';

const useStyles = makeStyles(() => ({
  container: {
    marginLeft: '260px',
    marginTop: '80px',
  },
  image: {
    width: '60%',
    padding: '10px',
  },
  size: {
    height: '50px',
    width: '80px',
  },
}));

const Compose = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={8}>
            <form>
              <Grid container justify="center">
                <TextField
                  id="To"
                  label="To *"
                  variant="outlined"
                  fullWidth
                  style={{ margin: 8 }}
                  helperText="Enter Email to send"
                />
                <TextField
                  id="CC"
                  label="CC *"
                  variant="outlined"
                  fullWidth
                  style={{ margin: 8 }}
                  helperText="CC Emails"
                />
                <TextField
                  id="Subject"
                  label="Subject *"
                  variant="outlined"
                  fullWidth
                  style={{ margin: 8 }}
                  helperText="Enter the Subject"
                />
                <TextField
                  id="Body"
                  label="Mail Body *"
                  variant="outlined"
                  multiline
                  fullWidth
                  rows={5}
                  style={{ margin: 8 }}
                />
                <Grid container justify="space-between">
                  <Grid container>
                    <Grid item >
                      <DateTime />
                    </Grid>
                    <Grid item>
                      <Frequency />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    style={{ margin: 8 }}
                  >
                    Set/Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Compose;
