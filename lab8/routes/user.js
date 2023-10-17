var expressFunction = require("express");
const router = expressFunction.Router();
const bcrypt = require("bcryptjs");

const students = require("../data/students_data");

const makeHash = async(plainText) => {
    const result = await bcrypt.hash(plainText, 10);
    return result;
}

const insertUser = (dataUser) =>{
    return new Promise ((resolve, reject) =>{
       const student = {
            stdid: dataUser.stdid,
            password: dataUser.password,
            name: dataUser.name,
            sex: dataUser.sex,
            age: dataUser.age,
            major: dataUser.major,
            tel: dataUser.tel
        };
        students.push(student)
        resolve({message: 'Singn up successfully'});
        console.log(students)
    });
}


router.route('/signup').post((req, res) =>{
        makeHash(req.body.password)
        .then(hashText =>{
            const playload ={
                stdid: req.body.stdid,
                password: hashText,
                name: req.body.name,
                sex: req.body.sex,
                age: req.body.age,
                major: req.body.major,
                tel: req.body.tel
            }
            console.log(playload);
            insertUser(playload)
                .then(result =>{
                    console.log(result)
                    res.status(200).json(result);
                })
                .catch(err =>{
                    console.log(err);
                })
        })
        .catch(err =>{

        })
    })

module.exports = router