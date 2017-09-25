var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');


var userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  mobilenumber: {
  	type: String
  },
  salt: {
    type: String
  },
  facebook: {
    id: String,
    name: String,
    token: String,
    refreshToken: String
  },
  profilePicture: {
    type: String
  },

  paypal_email: {
  	type: String
  },

  address: {
  	country:String,
  	city:String
  },

  rentnumber: {
  	type:Number
  },

	rentname: {
    type: [mongoose.Schema.Types.Mixed],
    default: []
  },

  ownernumber: {
  	type:Number
  },

	ownername: {
    type: [mongoose.Schema.Types.Mixed],
    default: []
  },

  postalcode:{
  	type: String
  },

  paypal_password: {
  	type: String
  },

  creditcard_number: {
  	type: String
  },

  creditcard_code: {
  	type:String
  },

  creditcard_name: {
  	type:String
  },

  creditcard_country: {
  	type:String
  },

  creditcard_expiredate: {
  	type:Date
  },

  notificationSettings: {
    facebookMessenger: {
      messengerID: Number,
      lastMessageDate: {
        type: Date,
        default: new Date(0)
      },
      tradeRequest: {
        type: Boolean,
        default: true
      },
      tradeAcceptance: {
        type: Boolean,
        default: true
      },
      trackRepost: {
        type: Boolean,
        default: false
      },
      trackUnrepost: {
        type: Boolean,
        default: false
      },
      failedRepost: {
        type: Boolean,
        default: true
      },
      accessToken: {
        type: Boolean,
        default: true
      }
    },
    email: {
      tradeRequest: {
        type: Boolean,
        default: true
      },
      tradeAcceptance: {
        type: Boolean,
        default: true
      },
      trackRepost: {
        type: Boolean,
        default: false
      },
      trackUnrepost: {
        type: Boolean,
        default: false
      },
      failedRepost: {
        type: Boolean,
        default: true
      },
      accessToken: {
        type: Boolean,
        default: true
      }
    }
  },

});

/*var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});*/
 
userSchema.pre('save', function (next) {
    var user = this;
    if (this.isNew) {
         next();
    } else {
        return next();
    }
});

userSchema.methods.comparePassword = function (passw, cb) {
  console.log("test rascal " + passw);
   bcrypt.compare(passw, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};
 
module.exports = mongoose.model('User', userSchema);