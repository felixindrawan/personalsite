/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Grid, Typography, Box, Avatar, Snackbar, Icon } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinksComponent from './LinksComponent';
import PigeonIcon from '../../assets/ContactsAssets/bird.svg';
import MailIconPath from '../../assets/ContactsAssets/email.svg';
import GithubIconPath from '../../assets/ContactsAssets/github.svg';
import LinkedInIconPath from '../../assets/ContactsAssets/linkedin.svg';
import InstagramIconPath from '../../assets/ContactsAssets/insta.svg';

import './styles.css';

/**
 * Component to contact me
 *
 * @example
 * return(
 *   <ContactComponent />
 * )
 */

const ContactComponent = () => {
  const contactsData = [
    {
      key: 0,
      link: 'mailto:felixindrawan@mail.utoronto.ca?subject=[Website]%20',
      notificationMsg: 'felix.indrawan@mail.utoronto.ca',
      icon: MailIconPath,
      category: 'Email',
      iconComponent: <MailIcon fontSize="small" />,
    },
    {
      key: 1,
      link: 'https://www.github.com/felixindrawan',
      notificationMsg: '/felixindrawan',
      icon: GithubIconPath,
      category: 'Github',
      iconComponent: <GitHubIcon className="github-icon" fontSize="small" />,
    },
    {
      key: 2,
      link: 'https://www.linkedin.com/in/felixindrawan',
      notificationMsg: '/felixindrawan',
      icon: LinkedInIconPath,
      category: 'LinkedIn',
      iconComponent: <LinkedInIcon fontSize="small" />,
    },
    {
      key: 3,
      link: 'https://www.instagram.com/felfelfel.ind',
      notificationMsg: '@felfelfel.ind',
      icon: InstagramIconPath,
      category: 'Instagram',
      iconComponent: <InstagramIcon fontSize="small" />,
    },
    {
      key: 4,
      link: 'https://www.google.com/',
      notificationMsg: 'Under Construction',
      icon: PigeonIcon,
      category: 'PigeonMail',
      iconComponent: <img className="pigeon-icon" alt="Pigeon" src={PigeonIcon} />,
    },
  ];

  const [notificationMsgHook, setNotificationMsgHook] = useState('');
  const [iconHook, setIconHook] = useState(null);
  const [openNotification, setOpenNotification] = useState(false);

  const createIcon = (path) => (
    <Icon>
      <Avatar class="notif-icon" alt="icon" src={path} />
    </Icon>
  );

  const handleHover = (msg, alertIcon) => {
    setOpenNotification(false);
    setNotificationMsgHook(msg);
    setIconHook(alertIcon);
    setOpenNotification(true);
  };

  const handleClose = () => {
    setOpenNotification(false);
  };

  return (
    <Grid
      id="contacts"
      className="contact-page"
      container
      spacing={0}
      alignItems="center"
      justify="center"
    >
      <Grid container>
        <Grid item md={12} xs={12}>
          <Box mb={2}>
            <Typography className="text-title" align="center" variant="h4">
              Contact Me
            </Typography>
          </Box>
        </Grid>
        <Grid item container md={12} xs={12} justify="center" alignItems="center">
          {contactsData.map((contacts) => (
            <LinksComponent
              key={contacts.key}
              link={contacts.link}
              notificationMsg={contacts.notificationMsg}
              icon={contacts.icon}
              category={contacts.category}
              iconComponent={contacts.iconComponent}
              handleHover={() => handleHover(contacts.notificationMsg, createIcon(contacts.icon))}
            />
          ))}
        </Grid>
      </Grid>

      <Snackbar
        open={openNotification}
        autoHideDuration={4500}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert
          onClose={handleClose}
          icon={iconHook}
          style={{ backgroundColor: '#759EFF', color: 'white' }}
        >
          <Typography style={{ color: 'white' }}>
            <Box fontWeight="300">{notificationMsgHook}</Box>
          </Typography>
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default ContactComponent;
