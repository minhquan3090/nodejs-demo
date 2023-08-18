const Course = require('../models/Course')
const  { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
  // [GET] /news
  index(req, res,next) {
    Course.find({})
      .then((course) => {
        res.render('home',{ 
          course: mutipleMongooseToObject(course)
         })
      })
      .catch(next);  

    
  }
  search(req, res) {
    res.render('search')
  }
}

module.exports = new SiteController()
