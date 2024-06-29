import express from 'express';

const app = express();

const PORT = process.env.PORT ||3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

// const users = [
//     {id: 1, name: 'John', age: 30} , {name: 'Jane', age: 25} ,{name: 'Doe', age: 35}
// ]

// app.get('/', (req, res)=>{
//     res.send('Hello World');
// })

// app.get('/user', (req, res)=>{
//     res.send([{name: 'John', age: 30}, {name: 'Jane', age: 25}]);
// })

// app.get('/api/user', (req, res)=>{
//     res.send(users);
// })

// ROUTES PARAMETER

// Define a route with a parameter
app.get('/hello/:name', (req, res) => {
    // Extract the 'name' parameter from the request
    const name = req.params.name;
  
    // Send a response using the extracted parameter
    res.send(`Hello, ${name}!`);
  });

  app.get('/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
  });

  // User profile route
app.get('/user/:username', (req, res) => {
    const { username } = req.params;
    res.send(`Profile page for user: ${username}`);
  });
  
  // Product details route
  app.get('/product/:category/:productId', (req, res) => {
    const { category, productId } = req.params;
    res.send(`Details for product ID: ${productId} in category: ${category}`);
  });
  
  // Blog post route
  app.get('/blog/:year/:month/:slug', (req, res) => {
    const { year, month, slug } = req.params;
    res.send(`Blog post from ${month}/${year} titled: ${slug}`);
  });
  
  // Order details route
  app.get('/order/:orderId', (req, res) => {
    const { orderId } = req.params;
    res.send(`Order details for order ID: ${orderId}`);
  });
  
  // Event details route
  app.get('/event/:eventId', (req, res) => {
    const { eventId } = req.params;
    res.send(`Details for event ID: ${eventId}`);
  });
  
