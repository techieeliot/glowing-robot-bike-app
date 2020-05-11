const { con } = require('./db')
const { getSignupQuery } = require('./queries')

const createUser = (res, req) => (password) => {

    console.log(`signup line 9: ${req.body}`);
    con.query(getSignupQuery(req.body.username, password, req.body.firstName, req.body.lastName, req.body.phone), function(error, results, fields) {
        if (error) {
            res.status(400).send('Duplicate Record!');
            console.log(err)
            return;
        };
        if (results) {
            res.status(200).send('User created successfully!');
        }
        else {
            res.send('error')
        }
    })
}

module.exports = { createUser }