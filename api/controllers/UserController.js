/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

        var paths = require('path');
module.exports = {
  perso: function (req, res)
   {
     return res.view('monCompte');
   },

   moncompte: function(req, res) {
     var data = {};
     var where = {id: req.user.id};
     data.mesdata = {
       title: "title",
       content: "content",
     };

     User.findOne(where)
     .populate('adresse')
     .exec(function(error, user) {
           console.log(user);
           data.user = user;
           return res.view('monCompte', data);
     })
   },

   upload: function  (req, res) {
    req.file('avatar').upload({
      dirname: require(paths).resolve(sails.config.appPath, 'assets/images')
    },function (err, uploadedFiles) {
      if (err) return res.negotiate(err);

      return res.json({
        message: uploadedFiles.length + ' file(s) uploaded successfully!'
      });
    });
}

};

