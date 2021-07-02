const express=require("express");
const mongoose=require('mongoose');
const app=express();

const nodemailer = require('nodemailer'); 

let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: 'influencerpoint@gmail.com', 
        pass: 'sahilsda1234'
    } 
}); 
let mailDetails = { 
    from: 'influencerpoint@gmail.com', 
    to: 'ss9913291875@gmail.com', 
    subject: 'Test mail', 
    text: 'Node.js testing mail for GeeksforGeeks'
}; 
mailTransporter.sendMail(mailDetails, function(err, data) { 
    if(err) { 
        console.log('Error Occurs'); 

    } else { 

        console.log('Email sent successfully'); 

    } 
});