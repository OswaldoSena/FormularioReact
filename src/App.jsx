import * as React from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Image from './Assets/estetoscopi.svg';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';



function App() {

  return (

    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>

          <div ><img

            src={Image}
            alt='logo'
            width='250'
            height='100'
            display='inline' /></div>
        </Grid>
        <Grid item xs={4}>
          <div>
            <Typography

              variant='h2'
              noWrap
              //alignRight='right'
              sx={{
                ml: 35,
                display: { xs: 'none', md: 'none', lg: 'flex' },
                fontWeight: 700,
                color: 'red',

              }}
            >
              OSBOR
            </Typography>

            <Typography

              variant='h2'
              alignRight='right'
              sx={{
                ml: 19,
                display: { xs: 'none', md: 'flex', lg: 'none' },
                fontWeight: 700,
                color: 'red',

              }}
            >
              OSBOR
            </Typography>

            <Typography
              variant="h4"
              sx={{
                mt: 1,
                display: { xs: 'flex', md: 'none' },
                fontWeight: 700,
                color: 'red',

              }}
            >
              OSBOR
            </Typography>

            <Typography
              variant='h5'
              textAlign='right'
              sx={{
                ml: 49,
                display: { xs: 'none', md: 'none', lg: 'flex' },
                fontWeight: 700,
              }}
            >
              Médica
            </Typography>

            <Typography
              variant='h5'
              textAlign='right'
              sx={{
                ml: 33,
                display: { xs: 'none', md: 'flex', lg: 'none' },
                fontWeight: 700,
              }}
            >
              Médica
            </Typography>


            <Typography
              variant="h6"
              sx={{
                ml: 5,
                display: { xs: 'flex', md: 'none' },
                fontWeight: 700,

              }}
            >
              Médica
            </Typography>
          </div>
        </Grid>
      </Grid>



      <Navbar />
      <Form />
    </ >
  );
}

export default App;
