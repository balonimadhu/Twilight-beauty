import { Divider, Icon, List, ListItem, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";
import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
  return (
    <>
      <Box backgroundColor={"#EE66A6"} marginTop={"20px"}>
        <Grid container spacing={{xs:2, md:3}} columns={{xs:4 , sm:15, md:12}} sx = {{m:3}} color={"white"}>
          <Grid item xs={8}>
            <Typography variant="h6">Twilight <span style={{color:"#640D5F", fontFamily:"cursive", fontWeight:"bold"}}>Beauty</span></Typography>
            <List>
              <ListItem>Who are we</ListItem>
              <ListItem>Careers</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Responsible Disclosure</ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
             <Typography variant="h6">Comapny</Typography>
            <List>
              <ListItem>About Us</ListItem>
              <ListItem>Our Services</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Affiliate Program</ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">Online Shop</Typography>
            <List>
              <ListItem>Beauty Book</ListItem>
              <ListItem>Our Services</ListItem>
              <ListItem>Privacy Policy</ListItem>
              <ListItem>Affiliate Program</ListItem>
            </List>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">Follow Us</Typography>
            <Typography variant="h6">Show us some ❤️ on social media</Typography>
        
              <Icon><InstagramIcon/></Icon>
              <Icon><WhatsAppIcon/></Icon>
              <Icon><TwitterIcon/></Icon>
              <Icon><YouTubeIcon/> </Icon>
         
          </Grid>
        </Grid>
        <Divider >
          <Typography style={{color:"white", fontSize:"20px"}}>
          All Rights Reserved © Twilight Beauty
          </Typography>
          </Divider>
      </Box>
    </>
  );
};
