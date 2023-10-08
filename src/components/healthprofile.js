import React from 'react';
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Container,
  Grid,
  Avatar,
} from '@mui/material';

import './healthprofile.css';

function HealthProfile() {

  return (

    <Container
    style={{ textAlign: 'center', marginTop: '30px'}}>
      <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
      <Paper elevation={6} style={{ padding: '16px', marginBottom: '20px'}}>
        <Typography variant="h5" gutterBottom>
          Personal Details
        </Typography>
        <Avatar 
              alt="Customer Profile"
              src="customer-profile-image.jpg"
              sx={{ width: 180, height: 180, marginRight: '16px', marginLeft: '160px',  marginTop: '31px' }}
            />
        <List>
          <ListItem>
            <ListItemText primary="Name" secondary="Jane Mayor" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Address" secondary="138, Flower Road, USA" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Contact No" secondary="1234567890" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Weight" secondary="55 kg" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Height" secondary="165 cm" />
          </ListItem>
        </List>
      </Paper>
      </Grid>


      <Grid item xs={12} md={6}>
      <Paper elevation={6} style={{ padding: '16px', marginBottom: '20px' }} className="health-details-background">
        <Typography variant="h5" gutterBottom>
          Health Details
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Allergies and Intolerances"
              secondary={
                <List>
                  <ListItem>
                    <ListItemText primary="Pineapple" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Dairy" />
                  </ListItem>
                </List>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Dietary Requirements"
              secondary={
                <List>
                  <ListItem>
                    <ListItemText primary="Vegetarian" />
                  </ListItem>
                </List>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Cusine Preferences"
              secondary={
                <List>
                  <ListItem>
                    <ListItemText primary="Italian" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Mexican" />
                  </ListItem>
                </List>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Daily Caloric Intake Goal"
              secondary={
                <List>
                  <ListItem>
                    <ListItemText primary="100 calories" />
                  </ListItem>
                </List>
              }
            />
          </ListItem>
        </List>
      </Paper>
      </Grid>
      </Grid>
    </Container>

  );
}

export default HealthProfile;

/*import React from 'react';
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

function HealthProfile() {
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Health Profile
      </Typography>

      <Paper elevation={3} style={{ padding: '16px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Customer Personal Details
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Name" secondary="John Doe" />
          </ListItem>
        </List>
      </Paper>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography variant="h5" gutterBottom>
          Health Details
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Allergies" secondary="Peanuts, Dairy" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Dietary Requirements"
              secondary="Vegetarian"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Food Preferences"
              secondary="Italian, Mexican"
            />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
}

export default HealthProfile;*/