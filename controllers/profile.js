const handleprofile = (req, res, Db) => {

    const id  = req.params.id;
    Db.select('*').from('registre')
        .then(user => {
            if (user.length) {
                res.json(user);   
            } else {
                res.status(400).json('Not Found');
            }
        })
        .catch(err => res.status(400).json('error getting user !!!'))
}


module.exports = { 
    handleprofile: handleprofile
}