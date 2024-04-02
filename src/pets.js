module.exports = (req, res) => {
    res.render('pets', { title: 'Pets page', user: req.session.user })
} 