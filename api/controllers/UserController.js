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

   test: function(req, res){
     console.log("ggg");
     return res.json({variable1: 'gg', variable2: 'opgg'});

   }


};

