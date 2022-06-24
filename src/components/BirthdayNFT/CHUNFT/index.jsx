import { Grid, Typography } from '@material-ui/core';
import React, { Suspense, useEffect, useRef } from 'react';
import '../customNFTStyles.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import useScrollSnap from 'react-use-scroll-snap';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { birthdayData } from '..';
import Chunft from '../Models/Chunft';

const CustomNFT = ({
  name = birthdayData.chu.name,
  nftName = birthdayData.chu.nft,
  shareholders = birthdayData.chu.shareholders,
}) => {
  const containerRef = useRef();
  useScrollSnap({ ref: containerRef, duration: 100 });

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section ref={containerRef}>
      <Grid container className="nft-grid slide1" alignItems="center" justifyContent="center">
        <Typography className="comic-sans" align="center" variant="h2" data-aos="zoom-in-down">
          happy birthday {name}, and congratulations
        </Typography>
      </Grid>
      <Grid container className="nft-grid slide2" alignItems="center" justifyContent="center">
        <Typography className="comic-sans" align="center" variant="h2" data-aos="zoom-in-down">
          there are more than 5 people on the earth
        </Typography>
      </Grid>
      <Grid container className="nft-grid slide3" alignItems="center" justifyContent="center">
        <Typography className="comic-sans" align="center" variant="h2" data-aos="zoom-in-down">
          but the difference between you and them is that
        </Typography>
      </Grid>
      <Grid container className="nft-grid slide4" alignItems="center" justifyContent="center">
        <Typography className="comic-sans" align="center" variant="h2" data-aos="zoom-in-down">
          you are now the one and only proud owner of
        </Typography>
      </Grid>
      <Grid container className="nft-grid slide5" alignItems="center" justifyContent="center">
        <Typography className="comic-sans" align="center" variant="h2" data-aos="zoom-in-down">
          {nftName} NFT
        </Typography>
        <Canvas style={{ height: '400px' }}>
          <OrbitControls enableZoom={false} rotation autoRotate autoRotateSpeed={5} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-5, 5, 2]} intensity={6} />
          <Suspense fallback={null} r3f>
            <Chunft />
          </Suspense>
        </Canvas>
        <Grid direction="row">
          <Grid item>
            <Typography className="comic-sans collab" align="center" variant="h4">
              shareholders
            </Typography>
          </Grid>
          <Grid className="" item direction="column">
            <Typography className="comic-sans names" align="center">
              {shareholders.sort().join(` • `)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default CustomNFT;
