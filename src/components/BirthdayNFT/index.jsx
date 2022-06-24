import { Grid, Link, Typography } from '@material-ui/core';
import React from 'react';

export const birthdayData = {
  klp: {
    name: 'kevin',
    nft: 'KLP',
    shareholders: ['Felix', 'Darius', 'Matthew', 'Chaniel', 'Jordan', 'Chu', 'William'],
  },
  vic: {
    name: 'victor',
    nft: 'VIC',
    shareholders: [
      'Felix',
      'Caitlin',
      'Amy',
      'Winnie',
      'Nasia',
      'John',
      'Nancy',
      'Nick',
      'Bryan',
      'Rachel',
      'Levina',
      'Brandon',
    ],
  },
  vrg: {
    name: 'varg',
    nft: 'VRG',
    shareholders: ['Felix', 'Caitlin', 'John', 'Nick', 'Levina'],
  },
  chu: {
    name: 'chu',
    nft: 'CHU',
    shareholders: ['Felix', 'Darius', 'Matthew', 'Chaniel', 'Jordan', 'Kevin', 'William'],
  },
};

export const BirthdayNFT = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      style={{ padding: '10px', backgroundColor: '#bea8c7', minHeight: '100vh', width: '100vw' }}
    >
      <Typography>happy birthday and i hope you have a great year c:</Typography>
      <ul>
        <Typography>nft archives</Typography>
        <li>
          <Link href="/BirthdayNFT/VRGNFT">Varg's Birthday (2022)</Link>
        </li>
        <li>
          <Link href="/BirthdayNFT/KLPNFT">Kevin's Birthday (2022)</Link>
        </li>
        <li>
          <Link href="/BirthdayNFT/VICNFT">Victor's Birthday (2022)</Link>
        </li>
        <li>
          <Link href="/BirthdayNFT/CHUNFT">Chu's Birthday (2022)</Link>
        </li>
      </ul>
    </Grid>
  );
};
