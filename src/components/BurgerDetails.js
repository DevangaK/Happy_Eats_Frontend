import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link, useParams } from "react-router-dom";



export default function BurgerDetails() {

  const [ingredients, setIngredients] = useState([])
  const [totalPrice, setTotalPrice] = useState(0);
  const [burgerData, setBurgerData] = useState([]);


  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('http://localhost:8080/ingredients')
      .then(res => res.json())
      .then((result)=>{
        setIngredients(result);
      }
    ).catch((error) => {
      console.error('Error fetching ingredients:', error);
    });
  }, [])


  const { id } = useParams();
  console.log(id);

  // Step 3 and 4: Fetch burger data from the API based on the ID
  useEffect(() => {
    axios.get(`http://localhost:9191/api/find/${id}`)
      .then(response => {
        console.log(response);
        setBurgerData(response.data); // Update the state with fetched burger data
      })
      .catch(error => {
        console.log('Error fetching burger details:', error);
      });
  }, [id]);

  //checkboxes handling
  const [checked, setChecked] = React.useState([]); //array to store selected items

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // const burgerData = DummyBurgerData[0];

  //---------------------
  useEffect(() => {
    // Calculate the total price of the burger
    const ingredientPrices = checked.map((id) => {
      const ingredient = ingredients.find((item) => item.id === id);
      console.log('Ingredient:', ingredient);
      return ingredient.price;
    });
    const totalPrice = burgerData.price + ingredientPrices.reduce((a, b) => a + b, 0);
    setTotalPrice(totalPrice);
  }, [checked, ingredients, burgerData]);

  const handleAddToCart = () => {
    // Store burger name and total price in local storage
    localStorage.setItem('burgerId', burgerData.id);
    localStorage.setItem('burgerName', burgerData.pname);
    localStorage.setItem('totalPrice', totalPrice);
  };
  //--------------------

  return (
    <Grid
    sx={{
        display: 'flex',
        flexDirection: 'row',
        bgcolor: '#efebe9'
    }}
    >

    <Card
    sx={{
        width: '100%',
        minWidth: 700,
        maxWidth: 700,
        height:'auto',
        boxShadow: 0,
        borderRadius: 2,
        pb: 3,
        mx:2,
        my: 3,
        bgcolor: '#ffffff'
    }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height= "347px"
          image= {burgerData.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            {burgerData.pname}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2, mt: 2, textAlign: 'center', fontWeight: 'bold' }}>
            {burgerData.vegOrNon}
          </Typography>
          <Typography variant="body1" color="text.secondary"  sx={{ textAlign: 'center', fontWeight: 'medium' }}>
            {burgerData.description}
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, textAlign: 'center', fontWeight: 'bold' }}>
            Rs. {burgerData.price}
          </Typography>

          <Button variant="outlined" color="success" startIcon={<StarIcon />} sx={{ mt: 5, color: '#33691e'}}>
            Add A Review
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>


    <Container>
    <List
    sx={{
      width: '100%',
      maxWidth: 360,
      height:'auto',
      boxShadow: 0,
      borderRadius: 2,
      px: 3,
      py: 3,
      mx: 1,
      my: 3,
      bgcolor: '#ffffff'
      }}
    >

        <List>
          <ListItem>
            <ListItemText
              primary="Nutritional Information"
              secondary={
                <List>
                  <ListItem>
                    <ListItemText primary="Calories: 450 kcal"/>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Fat: 20g" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Cholesterol: 80mg" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Carbohydrates: 35g" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Protein: 30g" />
                  </ListItem>
                </List>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Ingredients"
              secondary={
                <List>
                  <ListItem>
                    <ListItemText primary="Beef Patty, Mayo, Lettuce, Tomato, Onion, Bun" />
                  </ListItem>
                </List>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Allergens"
              secondary={
                <List>
                  <ListItem>
                    <ListItemText primary="Wheat, Soy, Egg" />
                  </ListItem>
                </List>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Cooking Method"
              secondary={
                <List>
                  <ListItem>
                    <ListItemText primary="Grilled" />
                  </ListItem>
                </List>
              }
            />
          </ListItem>
        </List>
       
</List>
</Container>


<Container>
    <List
    sx={{
      width: '100%',
      maxWidth: 360,
      height: 743,
      boxShadow: 0,
      borderRadius: 2,
      px: 3,
      py: 3,
      mx: 1,
      my: 3,
      bgcolor: '#ffffff'
      }}
    >
    
    {ingredients.map(ingredient=>(
    <ListItem  key={ingredient.id}>

      <ListItemIcon>
        <Checkbox
          color="success"
          edge="end"
          value={ingredient.id}
          onClick={handleToggle(ingredient.id)}
        />
      </ListItemIcon>

      <ListItemText
        primary={
          <>
            <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
              {ingredient.name}
            </Typography>
          </>
        }
        secondary={ingredient.description}
      />

      <ListItemText
        primary ={
          <>
            <Typography variant="h6" sx={{color: 'success.dark', fontWeight: 'bold', textAlign: 'right'}}>
              Rs.{ingredient.price}
            </Typography>
          </>
        }
      />
    </ListItem>
  
  ))
}

<Button variant="contained" color="success" startIcon={<ShoppingCartIcon/>} sx={{ mt: 26.5, mb: 3, bgcolor: '#33691e'}} onClick={handleAddToCart}>
  Add To Cart
</Button>

</List>
</Container>

</Grid>
  );
}