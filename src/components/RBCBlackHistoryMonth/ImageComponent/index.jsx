import React from 'react';
import { Box, Modal, Typography, Grid } from '@material-ui/core';

import './style.css';

// eslint-disable-next-line react/prop-types
const ImageComponent = ({ image, imageName }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const typographyWidth = {
    width: '12rem',
  };

  return (
    <>
      <Box className="image-f-box" m={1}>
        <button type="button" onClick={handleOpen}>
          <img className="leader-image" src={image} alt={imageName} />
        </button>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Grid className="leader-info-grid">
          <Grid container alignItems="center" justify="flex-start">
            <Grid xs={4}>
              <img className="leader-image-info" src={image} alt={imageName} />
            </Grid>
            <Grid xs={8} justify="flex-start">
              <Typography variant="h4" style={typographyWidth}>
                {imageName}
              </Typography>
              <Typography variant="h7" style={typographyWidth}>
                {imageName}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default ImageComponent;
