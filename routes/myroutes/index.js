const router = require('express').Router();

const usersController = require('../../controllers/userController');

router.post('/users', usersController.INSERT_USER)

router.get('/users', usersController.SELECT_ALL_USERS)
router.get('/', (req,res)=>{
    res.send(`<h1> Hello World </h1>`)
})

// router.get("/products", (req,res) => {
//     res.send("this is the products page")
// })
// router.get('/',(req,res)=>{
//     res.send("go to your cart")
// })


module.exports = router;
