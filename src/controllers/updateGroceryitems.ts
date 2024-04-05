export async function updateGroceryitems(req: any, res: any) {
    try {
        const con = req.app.con;
  
        const data = [req.body.Name,req.body.Price,req.body.inventory,req.params.id];
        con.query("UPDATE groceryitems SET Name = ?,Price=?, inventory=? where itemid = ?",data,(err,result)=>{
            if(err){
                res.send (err);
            }else{
                res.send(result);
            }
        })
  
    }
    catch(error) {
      res.status(500).json({ error: error.toString() });
    }
  }