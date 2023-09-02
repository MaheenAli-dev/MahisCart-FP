# MahisCart-FP
E-Commerce MERN App with Express API Welcome to the repository for our E-Commerce MERN (MongoDB, Express, React, Node.js) application. This project consists of an E-Commerce website built with a MERN stack and an accompanying Express API to manage various aspects of the application.

Features Browse products, organized by categories and brands. User authentication and registration system. Cart functionality for adding and managing products. Place orders and track order history. Admin panel for effective product and category management. Overview This project showcases the creation of a full-stack E-Commerce website using the MERN stack. The application includes a responsive front-end developed using React, state management using Redux, routing through React Router, and UI components from Material-UI. On the back-end, we've utilized Express to build a robust API that handles various functionalities of the app. MongoDB with Mongoose serves as the database, storing user data, products, categories, and more.

Usage Installation: Clone the repository and install dependencies for both the client and server.

Starting the Application: Start the server and client to run the application.

Accessing the App: Open the application in your web browser at https://teal-thoughtful-vulture.cyclic.app/ Thank You !.

API The Express API provides endpoints for various operations including product management, user authentication, order placement, and more. For more details, refer to the API documentation.

Technologies Used Front-end: React, React Router, Material-UI. Back-end: Express, MongoDB, Mongoose, JWT. Other Tools: Axios, bcrypt, dotenv, nodemon. Contributing We welcome contributions to enhance this project. Please refer to the contribution guidelines before submitting issues or pull requests.
USER ROUTES.................. 1- router.post('/signup', SignUp) 2- router.post('/login', loginUser) 3- router.get('/allusers', getAllUsers) 4- router.get('/userbyemail/:email', getUserbyEmail) 5- router.put('/updateuser/:id', updateUserById)

PRODUCT ROUTES............................... 1- router.post('/products', postProducts); 2- router.get('/getproduct', getProduct); 3- router.get('/getproductbycategory', getProductByCategory); 4- router.get('/getproductbybrand', getProductByBrand); 5- router.get('/allproducts',getAllProducts) 6- router.get('/getproductbyid/:_id', getProductById); 7- router.put('/updateproduct', updateProduct); 8- router.delete('/deleteproduct/:_id', deleteProductById);

BRANDS ROUTES....................................... 1- router.get('/getbrandbyname', getBrandByName); 2- router.get('/getallbrands', getAllBrands) 3- router.post('/brands', postBrands); 4- router.delete('/deleteproductsbybrand', deleteProductsByBrand); 5- router.put('/updatebrand/:id', updateBrandById); 6- router.get('/getbrandbyid', getBrandById);

CATEGORY ROUTES......................................... 1- router.post('/categories', postCategories); 2- router.get('/getallcategories', getAllCategories) 3- router.get('/getcategorybyid/:id', getCategoryById); 4- router.get('/getcategorybyname', getCategoryByName); 5- router.put('/updatecategory', updateCategoryById); 6- router.delete('/deleteproductsbycategory', deleteProductsByCategory);

Order ROUTES................................................... 1- router.post('/send-demo-mail', demoMail) 2- router.post('/create-order', addOrders) 3- router.get('/all-orders', allOrders) 4- router.get('/order-by-id/:_id', orderById)


License This project is licensed under the MIT License.

For any questions or further information, feel free to contact us. Thank you for checking out our E-Commerce MERN App with Express API!# Mahis-Hosted-Project# Mahis-Hosted-Project
