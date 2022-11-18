import { Suspense, useState, useRef } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AxiosPromise } from 'axios';
import { useLoaderData, Await } from 'react-router-dom';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ItemCard } from '../../components';
import styles from './HomePage.module.css';

const homeImg = require('../../statics/home.jpeg');

type ArticlesData = {
  data: AxiosPromise;
};

type ItemType = {
  slug: string;
  name: string;
  shortDescription: string;
  images: {
    cachedPath: string;
  }[];
}

function HomePage(): JSX.Element {
  const { data } = useLoaderData() as ArticlesData;
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<Dayjs | null>(
    dayjs('2022-11-25T21:11:54'),
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const onShopClick = () => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  }

  return (
    <div>
      <div className={styles.header}>
        <img className={styles.image} src={homeImg} alt="Lever de soleil" />
        <div className={styles.infosContainer}>
          <div className={styles.infos}>
            <h1 className={styles.title}>The best of Lizee's T.Shirts</h1>
            <h2 className={styles.subtitle}>Change the world by wearing T.Shirts</h2>
            <p>To order your T.shirt now, choose a delivery date :</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <Button variant="contained" size="large" sx={{borderRadius: '24px'}} onClick={onShopClick}>
            Start to shop
          </Button>
        </div>
      </div>
      <Suspense fallback={<Box sx={{width: '100%', textAlign: 'center'}}><CircularProgress /></Box>}>
        <Await resolve={data}>
          {(resolvedArticles) => (
            <Grid container spacing={3} justifyContent="center" sx={{marginBottom: '80px'}} ref={ref}>
              { resolvedArticles.data.items.map((e: ItemType) => (
                <Grid item key={e.slug}>
                  <ItemCard
                    name={e.name}
                    image={e.images[0].cachedPath}
                    description={e.shortDescription}
                    slug={e.slug} />
                </Grid>
              ))}
            </Grid>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export default HomePage;
