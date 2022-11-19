import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const homeImg = require('../../statics/home.jpeg');

const headerStyle = {
  position: 'relative',
  height: '550px',
  mb: '80px'
}

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
}

interface Props {
  onShopClick: () => void;
}

function HomeHeader(props: Props): JSX.Element {
  const { onShopClick } = props;

  const [date, setDate] = useState<Dayjs | null>(
    dayjs('2022-11-25T21:11:54'),
  );

  const onChangeDate = (newValue: Dayjs | null) => {
    setDate(newValue);
  };

  return (
    <Container maxWidth="xl" sx={headerStyle} disableGutters>
      <Box component="img" src={homeImg} alt="See view" sx={imageStyle} />
      <Stack alignItems="center" sx={{position: 'absolute', p: '80px'}}>
        <Stack alignItems="flex-start" sx={{mb: '64px'}}>
          <Typography variant="h1" component="h1">
            The best of Lizee's T.Shirts
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Change the world by wearing T.Shirts
          </Typography>
          <p>To order your T.shirt now, choose a delivery date :</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              inputFormat="MM/DD/YYYY"
              value={date}
              onChange={onChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Stack>
        <Button variant="contained" onClick={onShopClick}>
          Start to shop
        </Button>
      </Stack>
    </Container>
  );
}

export default HomeHeader;
