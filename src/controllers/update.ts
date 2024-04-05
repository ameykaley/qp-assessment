export async function updateInventory(req: any, res: any) {
    try {
        const con = req.app.con;
  
        const data = [req.query.inventory,req.params.id];
        con.query("UPDATE groceryitems SET  inventory=? where itemid = ?",data,(err,result)=>{
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