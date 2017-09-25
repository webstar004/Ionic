
/*var functions = {
	authenticate: function(req, res) {
		User.findone({
			mobilenumber: req.body.number
		}, function(err, user){
			if(err) throw err;

			if(!user) {
				res.status(403).send({success: false, msg: 'authentication failed, User not found'});
			}

			else {
				user.comparePassword (req.body.password, function(err, isMatch){
					if(isMatch && !err){
						var token=jwt.encode(user, config.secret);
						res.json({success: true, token: token});
					}
					else {
						res.status(403).send({success:false, msg: 'authentication failed'});
					}
				})
			}
		})
	},
	addNew: function(req, res) {
		console.log(req.body + " rascal");
		if((!req.body.name) || (!req.body.email)){
			res.json({success:false, msg: 'Enter all values'});
		}
		else {
			var newUser = User({
				mobilenumber: req.body.number,
				email: req.body.email
			});

			newUser.save(function(err, newUser){
				if(err) {
					res.json({success:false, msg:'failed to save'});
				}

				else{
					res.json({success:true, msg:'successfully saved'});
				}
			})
		}
	}

}*/


var User = require('../model/user');
//var Session = require('../models/session');
var jwt  = require('jwt-simple');
var config = require('../config/database');

var functions = {
    authenticate: function(req, res) {
        User.findOne({
            mobilenumber: req.body.number
        }, function(err, user){
            if (err) throw err;
            if(!user){
                return res.status(403).send({success: false, msg: 'Authenticaton failed, user not found.'});
            } else {
               /* user.comparePassword(req.body.password, function(err, isMatch){
                    if(isMatch && !err) {
                        var token = jwt.encode(user, config.secret);
                        res.json({success: true, token: token});
                    } else {
                        return res.status(403).send({success: false, msg: 'Authenticaton failed, wrong password.'});
                    }
                })*/
                var token = jwt.encode(user, config.secret);
                res.json({success: true, token: token});
            }
        })
    },
    addNumber: function(req, res){
    	console.log(req.body.number + " name rascal");
    	if(!req.body.number){
    		res.json({success:false, msg: ''})
    	}
    	else{
    		console.log(req.body.number + " rascal number");
    		var newUser = User({
    			mobilenumber: req.body.number
    		});

    		newUser.save(function(err, newUser){
    			if (err){
    				console.log("failed");
    				res.json({success:false, msg:'failed to save'})
    			}
    			else {
    				console.log("success");
    				res.json({success:true, msg:'successfully saved'});
    			}
    		})
    	}
    }
    /*addNew: function(req, res){
    	console.log(req.body.name + " name rascal");
    	if((!req.body.name) || (!req.body.password)){
    		res.json({success:false, msg: ''})
    	}
    	else{
    		var newUser = User({
    			name: req.body.name,
    			password: req.body.password
    		});

    		newUser.save(function(err, newUser){
    			if (err){
    				res.json({success:false, msg:'failed to save'})
    			}

    			else {
    				res.json({success:true, msg:'successfully saved'});
    			}
    		})
    	}
    }*/
 
};
module.exports = functions;