const functions = require('firebase-functions');

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IBywyEAjIG7X6ReN7Xk9I0tznJCmgOtQ1cqV0X744gtCFaYhUYI4FBUPdi8PmJ7fRN9bAaQnBA89yDzkFd7KuHj00ucejTMdS')

// api 

// app config 
const app = express();

// middlewarts
app.use(cors({origin:true}));
app.use(express.json());

// api routes 
app.get("/",(request,response) => response.status(200).send('hello chitvan'));
app.post("/payments/create", async (request,response) =>{
    const total = request.query.total;
    console.log('Payment Request Recieved BOOM for this amount >>>',total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, 
        // subunits of the currency
        currency:"usd",
    });
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    });
});

// listen command 
exports.api = functions.https.onRequest(app);

// example end point 
// http://localhost:5001/clone-9d4da/us-central1/api 