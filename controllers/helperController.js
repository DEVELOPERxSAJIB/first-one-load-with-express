const path = require('path');

// show contact details
const showFormdetails = (req, res) => {
    res.status(200).json(req.body); 
}


// module exports
module.exports = {
    showFormdetails
}