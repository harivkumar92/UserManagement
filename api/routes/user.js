const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Users were fetched'
    });
});

router.post('/', (req, res, next) => {
    const user = {                              // Parse the POST data and store it into 'user'
        email: req.body.email,
        phone: req.body.phone
    };
    res.status(201).json({
        Message: 'Received'
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    if(id === 'special')  {
        res.status(200).json({
            message: 'special ID',
            userid: id
        });
    } else{
        res.status(200).json({
            message: 'Passed an ID'
        });
    }
});

router.patch('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product'
    })
});

router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product'
    })
});

module.exports = router;