const { con } = require('./db')
const { getSignupQuery } = require('./queries')

const createUser = (req, res) => {
    //add base64 and encrypt later
    createUserWithPassword(res,req)
}
const createUserWithPassword = (res, req) => (password) => {
    con.query(getSignupQuery(req.body.username, password, req.body.firstName, req.body.lastName, req.body.phone), function(error, results, fields) {
        if (error) {
            res.status(400).send('Duplicate Record!');
            console.log(err)
            return;
        };
        if (results) {
            res.status(200).send('User created successfully!');
        }
    })
}

module.exports = { createUser }