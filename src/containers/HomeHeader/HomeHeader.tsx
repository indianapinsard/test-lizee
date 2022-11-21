import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const homeImg = require('../../statics/home.jpeg');

const headerStyle = {
  position: 'relative',
  height: '550px',
  mb: '40px'
}

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
}

function HomeHeader(): JSX.Element {
  const [date, setDate] = useState<Dayjs | null>(
    dayjs(Date.now()),
  );

  const onChangeDate = (newValue: Dayjs | null) => {
    setDate(newValue);
  };

  return (
    <Container className="home-header" maxWidth="xl" sx={headerStyle} disableGutters>
      <Box component="img" src={homeImg} alt="See view" sx={imageStyle} />
      <Stack alignItems="center" sx={{position: 'absolute', p: {xs: '24px', sm: '80px'}}}>
        <Stack alignItems="flex-start" sx={{mb: {xs: '24px', md: '64px'}, color: '#fff'}}>
          <Typography variant="h1" component="h1" gutterBottom>
            The best of Lizee's T.Shirts
          </Typography>
          <Typography variant="h4" component="h2" sx={{mb: '40px'}}>
            Change the world by wearing T.Shirts
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            To order your T.shirt now, choose a delivery date :
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className="date-picker"
              inputFormat="DD/MM/YYYY"
              value={date}
              onChange={onChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Stack>
        <Button className="start-button" variant="contained">
          Start to shop
        </Button>
      </Stack>
    </Container>
  );
}

export default HomeHeader;
