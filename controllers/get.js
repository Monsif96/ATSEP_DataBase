
const handle = (req, res, Db) => {

    const { id }  = req.params;
    console.log('This is : ',id); 
    
    Db.select('*').from('registre').where({ id: id })
        .then(user => {
            //console.log(user); 
            if (user.length) {
                res.json(user);  
            } else {
                res.status(400).json('Not Found');
            }
        })
        .catch(err => res.status(400).json('error getting user !!!'))
}


module.exports = { 
    handle: handle
}