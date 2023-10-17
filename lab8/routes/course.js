var expressFunction = require("express");
const router = expressFunction.Router();
const authorization = require("../config/authorize");

let courses = require("../data/course_data");

router.route("/course").get(authorization, (req, res) => {
  res.status(200).json(courses);
});

const insertCourse = (dataCourse) => {
  return new Promise((resolve, reject) => {
    const course = {
      course_id: dataCourse.course_id,
      name: dataCourse.name,
      credit: dataCourse.credit,
      instructor: dataCourse.instructor,
    };
    courses.push(course);
    resolve({ message: "add course successfully" });
    console.log(courses);
  });
};
router.route("/course").post(authorization, (req, res) => {
    try{
        const playload = {
        course_id: req.body.course_id,
        name: req.body.name,
        credit: req.body.credit,
        instructor: req.body.instructor,
        }
        console.log(playload);
        insertCourse(playload)
            .then((result) => {
            console.log(result);
            res.status(200).json(result);
            })
            .catch((err) => {
            console.log(err);
            });
    }catch(error){
            res.status(404).send(error);
        }
});

module.exports = router;