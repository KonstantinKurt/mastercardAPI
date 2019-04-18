//const User = require('../models/User.js');
const mongoose = require('mongoose');
const keyGen = require('../libs/keygen.js');
module.exports = {
    // addUser: function(req, res) {
    //     const user = new User({
    //         _id: new mongoose.Types.ObjectId(),
    //         ...req.body
    //     });
    //     //method save() uses Promise by default;
    //     user.save()
    //         .then(doc => {
    //             res.status(201).json(doc);
    //             fs.readFile("./seeders/users.json", "utf8", function(err, data) {
    //                 if (err) console.log(err);
    //                 let users = JSON.parse(data);
    //                 doc.password =
    //                 users.push(JSON.stringify(doc));
    //                 fs.writeFile("./seeders/users.json", JSON.stringify(users), function(err, data) {
    //                     if (err) console.log(err);
    //                 });
    //             });
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             res.status(500).json({
    //                 errors: err,
    //             });
    //         })
    // },
    payment: function(req, res) {
        const orderId = "order-" + keyGen(10);
        res.status(200).json(orderId);
    },
};