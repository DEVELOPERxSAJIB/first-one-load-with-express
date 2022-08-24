const express = require('express');
const path = require('path');
const {showFormdetails} = require('../controllers/helperController')
const {showHomepage, showMenupage, ShowStuffpage, showLocationpage, showBlogpage, showReservationpage, ShowNewspage, ShowGallerypage} = require('../controllers/pageControllers')

// init router
const router = express.Router();

// route 
router.get('/', showHomepage);
router.get('/menu', showMenupage);
router.get('/location', showLocationpage)
router.get('/blog', showBlogpage)
router.get('/reservation', showReservationpage)
router.get('/staff', ShowStuffpage);
router.get('/news', ShowNewspage);
router.get('/gallery', ShowGallerypage);
router.post('/food-form', showFormdetails);

// export router
module.exports = router;
