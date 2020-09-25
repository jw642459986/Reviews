const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useMongoClient: true});

let reviewSchema = mongoose.Schema({
  memberInfo: {
    memberId: Number,
    memberImg: String,
    memberUserName: String,
    memberContributions: Number,
    memberHelpful: Number
  },
  reviewInfo: {
    reviewDate: Number,
    reviewTitle: String,
    reviewText: String,
    reviewTripType: String,
    reviewPictures: {picture1: String, picture2: String},
    reviewRatings: Number,
    helpful: Number
  },
  responderInfo: {
    responderOrg: String,
    responderName: String,
    responderPosition: String,
    responderPicture: String,
    responderDate: Number,
    responderText: String,
    responderClose: String
  }
});

let Review = mongoose.model('Review', reviewSchema);

var save = (review) => {
  return new Promise((resolve, reject) => {
    Review.create(review, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  })
}

module.exports.save = save;