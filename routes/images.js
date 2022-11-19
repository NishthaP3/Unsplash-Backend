const express = require('express');
const Image = require('../models/Image');

const router = express.Router();


router.get('/', async (req, res) => {
    const images = await Image.find({});
    res.send(images);
    //res.send('We are on images');
})

router.post('/add', (req, res) => {

    const image = Image({
        url: req.body.url,
        label: req.body.label
    })

    image.save().then(data => {
        res.json(data)
    }).catch(err => {
        res.json({ message: err });
    })
})

router.post('/delete', async (req, res) => {
    console.log(await Image.countDocuments({ _id: req.body._id }));
    await Image.deleteOne({ _id: req.body._id });

    console.log(await Image.countDocuments({ _id: req.body._id }));
    res.json({ message: 'Image deleted successfully' });
})


//router.post('/complete', async (req, res) => {
  //  await Task.findOneAndUpdate({_id: req.body._id}, {"status": "complete"});
   // res.json({ message: 'Task completed successfully' });
//})


router.post('/update', async (req, res) => {
    await Image.findOneAndUpdate({_id: req.body._id}, {"url": req.body.url, "label": req.body.label});
    res.json({ message: 'Image updated successfully' });
})

module.exports = router;
