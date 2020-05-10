const connection = require('../config/connection');
const userQuaries = require('../models/users/userQueries')
 
// connection.connect((err)=>{
//     if(err){
//         return err
//     }
// })

module.exports = {


    SELECT_ALL_USERS: (req, res) => {

        connection.query(userQuaries.SELECT_ALL_USERS, (err,users)=>{
            if(err){
                console.log(err)
            }
            return res.json(users)
        })
 
    },
    INSERT_USER: (req, res) => {
        const { userName,userEmail } = req.body;
        connection.query(userQuaries.INSERT_USER, [userName,userEmail], (err, dbRes) => {
            if (err) {
                throw err;
            }
            console.log(dbRes)
        });
    }

   }

