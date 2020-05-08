const getSignupQuery = (username, password, firstName, lastName, phone) => {
    `insert into users(username, password, first_name, last_name, phone, created_at) 
    values ('${username}', '${password}','${firstName}', '${lastName}','${phone}', now())`
}

module.exports = { getSignupQuery }