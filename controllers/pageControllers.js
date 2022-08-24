const express = require('express');
const path = require('path');



// homepage controller
const showHomepage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
}

// menu page controller
const showMenupage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/menu.html'));
}

// location page controller
const showLocationpage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/location.html'));
}

// blog page controller
const showBlogpage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/archive.html'));
}

// Reservation page controller
const showReservationpage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/reservation.html'));
}

// staff page controller
const ShowStuffpage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/staff.html'));
}

// news page controller
const ShowNewspage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/news.html'));
}

// gallery page controller
const ShowGallerypage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/gallery.html'));
}



// module exports
module.exports = {
    showHomepage,
    showMenupage,
    ShowStuffpage,
    showLocationpage,
    showBlogpage,
    showReservationpage,
    ShowNewspage,
    ShowGallerypage
}