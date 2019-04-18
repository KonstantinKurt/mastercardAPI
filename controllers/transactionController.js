//const User = require('../models/User.js');
const mongoose = require('mongoose');
const request = require('request');
const keyGen = require('../libs/keygen.js');
module.exports = {
    payment: async function (req, res) {
        const userId = req.body.userId;
        let requestObj = await {
            "apiOperation": "PAY",
            "order":
                {
                    "reference": " ",
                    "currency": process.env.CURRENCY_LABEL,
                    "amount": req.body.amount,
                },
            "transaction":
                {
                    "reference": " "
                },
            "sourceOfFunds":
                {
                    "provided":
                        {
                            "card":
                                {
                                    "expiry":
                                        {
                                            "month": req.body.month, // card expiry;
                                            "year": req.body.year
                                        },
                                    "securityCode": req.body.code, // card cvv code;
                                    "number": req.body.number // card number;
                                }
                        },
                    "type": "CARD"
                }
        };
        requestObj = JSON.stringify(requestObj);
        const orderId = "order-" + keyGen(10);
        const transactionID = "trans-" + keyGen(10);
        const encodedCredentials = Buffer.from(`merchant.${process.env.MERCHANT_ID}:${process.env.PASSWORD}`).toString('base64');
        const requestURL = `https://test-gateway.mastercard.com/api/rest/version/51/merchant/${process.env.MERCHANT_ID}/order/${orderId}/transaction/${transactionID}`;
        const headers = {
            'Authorization': `Basic ${encodedCredentials}`,
            'Content-Type': 'application/json'
        };
        let test = new Promise((resolve, reject) => {
            request.put({url: requestURL, form: requestObj, headers: headers},
                (error, res, body) => {
                    if (error) {
                        reject(error);
                        return
                    }
                    resolve(body);
                })
        });
        test
            .then(testres => {
                let data = JSON.parse(testres);
                data.message = 'Successfully payload';
                res.status(202).json(data);

            })
            .catch(err => res.status(403).json('invalid data'));
    },
};