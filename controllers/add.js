const handleadd = (req, res, Db) => {

    const Ent = req.body.ent;
    const Equi = req.body.equi;
    const date = req.body.date;
    const panne = req.body.titre;
    const remarque = req.body.remarque;
    
    console.log(Ent, Equi, date, panne);

    if (!Ent || !Equi || !date || !panne || !remarque) {
        return res.status(400).json('incorrect form submission');
    }
    Db.transaction(trx => {
      trx.insert({
        entite: Ent,
        equipement: Equi,
        Date: date,
        panne: panne,
        remarque: remarque
      })
      .into('registre')
      .then(user => {
            res.json(user);
          })
      .then(trx.commit)
      .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('unable to register'))
}


module.exports = {
    handleadd: handleadd
}