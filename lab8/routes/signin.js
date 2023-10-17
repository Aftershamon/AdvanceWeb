const expressFunction = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = expressFunction.Router();

const students = require("../data/students_data");

const key ="MY_KEY"

const compareHash = async(plainText, hashText) =>{
    return new Promise((resolve, reject) =>{
        console.log("compare")
        bcrypt.compare(plainText, hashText, (err, data)=>{
            if(err){
                console.log("Err")
                reject(new Error('Error bcrypt compare'))
            }else {
                console.log("pass brc")
                resolve({status: data})
            }
        })
    });
}

const findUser = (stdid) =>{
    return new Promise((resolve, reject) =>{
        console.log("find")
        if(stdid == 'B6000333'){
            console.log("pass")
            resolve(students[2])
        }else{
            console.log("error")
            reject(new Error('Cannot find username!'))
        }
    })
}

router.route('/signin').post( async (req, res) =>{
        const playload = {
            stdid: req.body.username,
            password: req.body.password
        };

        console.log(playload);
        //console.log(students[2])

        try {
            const result = await findUser(playload.stdid)
            //console.log("from try",result.password)
            const loginStatus = await compareHash(playload.password, result.password)//if compare success set status = true
            const status = loginStatus.status;
            console.log("from try",status)
            if (status){
                const token = jwt.sign(result, key, {expiresIn: 60*5});
                console.log("token",token)
                //create token with result , userkey
                res.status(200).json({result, token, status});
            } else {
                res.status(200).json({status})
            }
        } catch(error){
            res.status(404).send(error);
        }
    })

module.exports = router