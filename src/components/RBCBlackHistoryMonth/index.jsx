/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ImageComponent from './ImageComponent';
import alanEmtage from '../../assets/BlackHistoryMonthAssets/Alan-emtage.png';
import eugeniaDoudu from '../../assets/BlackHistoryMonthAssets/eugeniadoudu.png';
import jessicaMatthews from '../../assets/BlackHistoryMonthAssets/jessicamatthew.png';
import jessiewoolley from '../../assets/BlackHistoryMonthAssets/jessiewoolley-wilson.png';
import kimberlyBryant from '../../assets/BlackHistoryMonthAssets/KimberlyBryant.png';
import markdean from '../../assets/BlackHistoryMonthAssets/markdean.png';
import Phaedra from '../../assets/BlackHistoryMonthAssets/Phaedra-ellis-lamkins.png';
import tamarhuggins from '../../assets/BlackHistoryMonthAssets/tamarhuggins.png';
import JoyBuolamwini from '../../assets/BlackHistoryMonthAssets/JoyBuolamwini.png';
import TopeAwotona from '../../assets/BlackHistoryMonthAssets/topeawotona.png';
import KathrynFinney from '../../assets/BlackHistoryMonthAssets/KathrynFinney.png';
import ShirleyAnnJackson from '../../assets/BlackHistoryMonthAssets/ShirleyAnnJackson.png';
import ChrisYoung from '../../assets/BlackHistoryMonthAssets/ChrisYoung.png';
import MelissaHanna from '../../assets/BlackHistoryMonthAssets/MelissaHanna.png';

import './styles.css';

/**
 * Component for BlackHistoryMonth
 *
 * @example
 * return(
 *   <WelcomeComponent />
 * )
 */

const gridInsideProps = {
  width: '98rem',
};

const RBCBHM = () => (
  <Grid
    id="home"
    className="bhm-grid"
    container
    spacing={0}
    alignItems="center"
    justify="center"
    direction="column"
  >
    <Grid container alignItems="center" justify="space-between" style={gridInsideProps}>
      <Typography variant="h4">INFLUENTIAL BLACK LEADERS IN STEM</Typography>
      <Typography variant="h5">THE FUTURE IS NOW</Typography>
    </Grid>
    <Grid container alignItems="center" justify="center" style={gridInsideProps}>
      <ImageComponent
        image={alanEmtage}
        imageName="Alan Emtage"
        imageDesc="Alan Emtage is a Canadian computer scientist who conceived and implemented the first version of Archie, a pre-Web Internet search engine for locating material in public FTP archives. It is widely considered the world's first Internet search engine."
      />
      <ImageComponent
        image={eugeniaDoudu}
        imageName="Eugenia Doudu"
        imageDesc="Eugenia Duodu is a Canadian chemist and the CEO of Visions of Science Network for Learning."
      />
      <ImageComponent
        image={jessicaMatthews}
        imageName="Jessica O. Matthews"
        imageDesc="Jessica O. Matthews is a Nigerian-American inventor, CEO and venture capitalist. She is the co-founder of Uncharted Power, which made Soccket, a soccer ball that can be used as a power generator. Matthews attended Harvard College and graduated from Harvard Business School."
      />
      <ImageComponent
        image={jessiewoolley}
        imageName="Jessie Woolley-Wilson"
        imageDesc="Jessie Woolley-Wilson is the President, CEO, and Board Chair of DreamBox. She has worked in K-12 educational technology for nearly 20 years, and she has worked at DreamBox, Netflix and Facebook since 2010."
      />
      <ImageComponent
        image={kimberlyBryant}
        imageName="Kimberly Bryant"
        imageDesc="Kimberly Bryant is an African American electrical engineer who worked in the biotechnology field at Genentech, Novartis Vaccines, Diagnostics, and Merck. In 2011, Bryant founded Black Girls Code, a nonprofit organization that focuses on providing technology and computer programming education to African-American girls."
      />
      <ImageComponent
        image={markdean}
        imageName="Mark Dean"
        imageDesc="Mark E. Dean is an inventor and computer engineer. He developed the ISA bus, and he led a design team for making a one-gigahertz computer processor chip. He holds three of nine PC patents for being the co-creator of the IBM personal computer released in 1981."
      />
      <ImageComponent
        image={Phaedra}
        imageName="Phaedra Ellis-Lamkins"
        imageDesc="Phaedra Ellis-Lamkins is an American social justice advocate and businesswoman. Ellis-Lamkins is the co-founder and CEO of Promise, a California-based company reworking the bail system."
      />
    </Grid>
    <Grid container alignItems="center" justify="center" style={gridInsideProps}>
      <ImageComponent
        image={tamarhuggins}
        imageName="Tamar Huggins"
        imageDesc="Tamar Huggins Grant is a multi award-winning tech entrepreneur, author and education trailblazer whose impact is featured exclusively on Blavity, BET, Black Enterprise, CBC, CP24, The Toronto Star, National Post, Globe and Mail and Canadian Living to name a few."
      />
      <ImageComponent
        image={JoyBuolamwini}
        imageName="Joy Boulamwini"
        imageDesc="Joy Adowaa Buolamwini is a Ghanaian-American computer scientist and digital activist based at the MIT Media Lab. She founded the Algorithmic Justice League, an organisation that looks to challenge bias in decision making software."
      />
      <ImageComponent
        image={TopeAwotona}
        imageName="Tope Awotona"
        imageDesc="Tope Awotona is the founder and CEO of Calendly, a simple and beautiful scheduling tool that helps you schedule meetings without all the back and forth emails"
      />
      <ImageComponent
        image={KathrynFinney}
        imageName="Kathryn Finney"
        imageDesc="Kathryn A. Finney is an American author, researcher, investor, entrepreneur, innovator and businesswoman. She is the founder and CEO of digitalundivided, a social enterprise that leads high potential Black and Latinx women founders through the startup pipeline from idea to exit."
      />
      <ImageComponent
        image={ShirleyAnnJackson}
        imageName="Shirley Ann Jackson"
        imageDesc="Shirley Ann Jackson, FREng is an American physicist, and the eighteenth president of Rensselaer Polytechnic Institute. She is the first African-American woman to have earned a doctorate at the Massachusetts Institute of Technology."
      />
      <ImageComponent
        image={ChrisYoung}
        imageName="Chris Young"
        imageDesc="Chris Young is an American business executive and former CEO of McAfee, LLC. In 2017 he led the initiative to spin McAfee out of Intel as a standalone company. He serves on the Board of Directors of American Express and Snap Inc. and he is also member of the National Security Telecommunications Advisory Committee (NSTAC)."
      />
      <ImageComponent
        image={MelissaHanna}
        imageName="Melissa Hanna"
        imageDesc="Melissa Hanna is cofounder/CEO of Mahmee, a comprehensive maternal and child healthcare platform offering personalized, ongoing education and support to new families. She received her Masters of Business Administration (MBA) from the Peter F."
      />
    </Grid>
    <Grid container alignItems="center" justify="flex-end" style={gridInsideProps}>
      <Typography variant="h5">
        "Racial justice requires algorithmic justice. Take a stand backed with action." - Joy
        Buolamwini
      </Typography>
    </Grid>
  </Grid>
);

export default RBCBHM;
