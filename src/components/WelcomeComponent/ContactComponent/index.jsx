import { Avatar, Box, Icon, Snackbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';

import { Alert } from '@material-ui/lab';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinksComponent from './LinksComponent';
import MailIconPath from '../../../assets/ContactsAssets/email.svg';
import GithubIconPath from '../../../assets/ContactsAssets/github.svg';
import LinkedInIconPath from '../../../assets/ContactsAssets/linkedin.svg';

/**
 * Component to contact me
 *
 * @example
 * return(
 *   <ContactComponent />
 * )
 */

const ContactComponent = () => {
  const [notificationMsgHook, setNotificationMsgHook] = useState('');
  const [iconHook, setIconHook] = useState(null);
  const [openNotification, setOpenNotification] = useState(false);

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
      iconComponent: <GitHubIcon fontSize="small" style={{ marginRight: 3 }} />,
    },
    {
      key: 2,
      link: 'https://www.linkedin.com/in/felixindrawan',
      notificationMsg: '/felixindrawan',
      icon: LinkedInIconPath,
      category: 'LinkedIn',
      iconComponent: <LinkedInIcon fontSize="small" />,
    },
  ];

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
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
      </div>
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
    </>
  );
};

export default ContactComponent;
