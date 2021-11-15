// routes/auth.routes.js

const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const userSchema = require("../models/User");
const resettokenSchema = require("../models/token.model");
const authorize = require("../middlewares/auth");
const passwordResetToken = require("../models/token.model");
var nodemailer = require('nodemailer');
const { check, validationResult } = require('express-validator');
const crypto = require("crypto");
const reset = require("./Controllers/reset");
const db = require("../database/db");
const { Query } = require("mongoose");
const { query } = require("express");





clientURL = "localhost:/4000";


router.post("/testing"), (res,next) =>{
    return res.json({
        message: "what the fuck"
        });
}

router.post("/checksettoken", (req,res,next) => { 
    
    resettokenSchema.findOne({
        resettoken: req.body.token
    }).then(token => {
        if(token == null)
        {
            return res.json({
                message: false
                });
        }
    })
    
})

router.post("/checkemail", (req,res,next) => { 
    //console.log(req.body)
    userSchema.findOne({
        email: req.body.email
    }).then(user => {
        if (user != null )
        {
      //  console.log(user)
        return res.json({
        message: true
        });
        } else {return res.status(201).json({
            message: null
        })}
        
        
    })
    // return res.status(201).json({
    //     message: false,
        
    // });
})


router.post("/emailreset", (req,res,next) => { 
    //console.log(req.body)
    resettokenSchema.findOne({
        resettoken: req.body.resettoken
    }).then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }


        bcrypt.hash(req.body.newpass1, 10).then((hash) => {
            console.log(hash)
            const query = {_id: user.userId};
            userSchema.findOneAndUpdate(query,{password: hash}).then( user =>{
            console.log(user)
            })
         });

        //console.log(user)   
    })


    
    
    // if (!req.body.resettoken) {
    //     return res
    //     .status(500)
    //     .json({ message: 'Token is required' });
    //     }
    //     const user =  passwordResetToken.findOne({
    //     resettoken: req.body.resettoken
    //     });
    //     if (!user) {
    //     return res
    //     .status(409)
    //     .json({ message: 'Invalid URL' });
    //     }
    //     userSchema.findOneAndUpdate({ _id: user._userId }).then(() => {
    //     res.status(200).json({ message: 'Token verified successfully.' });
    //     }).catch((err) => {
    //     return res.status(500).send({ msg: err.message });
    //     });
})



// init Reset Process and send email link
router.post("/reset", (req, res, next) => {
    let getUser;
    //console.log(req.body);
    //find valild email
    userSchema.findOne({
        email: req.body.email
    }).then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }

        // add something to check to see if there is already a a reset token in the database if so delete it 
     resettokenSchema.findOne({ userId: user._id }).exec().then(token => {
           // console.log(token)
            if(token ){
                resettokenSchema.findOneAndDelete({ _id: token._id, resettoken: token.resettoken, userId: token.userId }).exec()
                
                
            } 
        })
        //console.log(user.email)
        // create new password reset record and send it over through email 
        var resettoken = new passwordResetToken({ userId: user._id, resettoken: crypto.randomBytes(16).toString('hex') });
        resettoken.save(function (err) {
            if (err) { 
                console.log(err)
                
                return res.status(500).send("this somehow stopped working doesnt make sense ");
            }
            
            res.status(200).json({message: 'Reset Password Successfully'});
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'TurboTerryTest@gmail.com',
                  pass: 'Test@@1234'
                }
              });
              var mailOptions = {
                from: 'TurboTerryTest@gmail.com',
                to: user.email,
                subject: 'Sending Email using Node.js',
                text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                'http://localhost:4200/response-reset-password/' + resettoken.resettoken + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
              };
              transporter.sendMail(mailOptions, (err, info) => {
            })
        })
    
    })
        
    


        
    
});

// Sign-up
router.post("/register-user",
    [
        check('name')
            .not()
            .isEmpty()
            .isLength({ min: 3 })
            .withMessage('Name must be atleast 3 characters long'),
        check('email', 'Email is required')
            .not()
            .isEmpty(),
        check('password', 'Password should be between 5 to 20 characters long')
            .not()
            .isEmpty()
            .isLength({ min: 5, max: 20 })
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        //console.log(req.body);

        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
        }
        else {
            bcrypt.hash(req.body.password, 10).then((hash) => {
                const user = new userSchema({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                });
                user.save().then((response) => {
                    res.status(201).json({
                        message: "User successfully created!",
                        result: response
                    });
                }).catch(error => {
                    res.status(500).json({
                        error: error
                    });
                });
            });
        }
    });

// Sign-in
router.post("/signin", (req, res, next) => {
    let getUser;
    userSchema.findOne({
        email: req.body.email
    }).then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        getUser = user;
        return bcrypt.compare(req.body.password, user.password);
    }).then(response => {
        if (!response) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        let jwtToken = jwt.sign({
            email: getUser.email,
            userId: getUser._id
        }, "longer-secret-is-better", {
            expiresIn: "1h"
        });
        res.status(200).json({
            token: jwtToken,
            expiresIn: 3600,
            msg: getUser
        });
    }).catch(err => {
        return res.status(401).json({
            message: "Authentication failed"
        });
    });
});

// 

module.exports = router;





        // getUser = user;
        // //sign web token
        // let jwtToken = jwt.sign({
        //     email: getUser.email,
        //     userId: getUser._id
        // }, "longer-secret-is-better", {
        //     expiresIn: "1h"
        // });
        // res.status(200).json({
        //     token: jwtToken,
        //     expiresIn: 3600,
        //     msg: getUser
        // });
        //   console.log(jwtToken);
        //   const link = `${clientURL}/passwordReset?token=${jwtToken}&id=${user._id}`;
        //   console.log(link)









// Get Users
// router.route('/').get(authorize, (req, res) => {
//     userSchema.find((error, response) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.status(200).json(response)
//         }
//     })
// })

// // Get Single User
// router.route('/user-profile/:id').get((req, res, next) => {
//     userSchema.findById(req.params.id, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.status(200).json({
//                 msg: data
//             })
//         }
//     })
// })

// // Update User
// router.route('/update-user/:id').put((req, res, next) => {
//     userSchema.findByIdAndUpdate(req.params.id, {
//         $set: req.body
//     }, (error, data) => {
//         if (error) {
//             return next(error);
//             console.log(error)
//         } else {
//             res.json(data)
//             console.log('User successfully updated!')
//         }
//     })
// })


// // Delete User
// router.route('/delete-user/:id').delete((req, res, next) => {
//     userSchema.findByIdAndRemove(req.params.id, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.status(200).json({
//                 msg: data
//             })
//         }
//     })
// })

// // Get User Profile
// router.route('/user-profile/:id').get(authorize, (req, res, next) => {
//     userSchema.findById(req.params.id, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.status(200).json({
//                 msg: data
//             })
//         }
//     })
// })










// router.post("/NewPassword", (req,res,next) =>{
    //     passwordResetToken.findOne({ resettoken: req.body.resettoken }, function (err, userToken, next) {
    //         if (!userToken) {
    //           return res
    //             .status(409)
    //             .json({ message: 'Token has expired' });
    //         }
      
    //         User.findOne({
    //           _id: userToken._userId
    //         }, function (err, userEmail, next) {
    //           if (!userEmail) {
    //             return res
    //               .status(409)
    //               .json({ message: 'User does not exist' });
    //           }
    //           return bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
    //             if (err) {
    //               return res
    //                 .status(400)
    //                 .json({ message: 'Error hashing password' });
    //             }
    //             userEmail.password = hash;
    //             userEmail.save(function (err) {
    //               if (err) {
    //                 return res
    //                   .status(400)
    //                   .json({ message: 'Password can not reset.' });
    //               } else {
    //                 userToken.remove();
    //                 return res
    //                   .status(201)
    //                   .json({ message: 'Password reset successfully' });
    //               }
      
    //             });
    //           });
    //         });
      
    //       })
    // })



