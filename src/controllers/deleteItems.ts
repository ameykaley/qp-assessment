export async function deleteItems(req: any, res: any) {
    try {
        const con = req.app.con;
        let item_id = req.params.id;
        con.query("DELETE from groceryitems where itemid = "+item_id,(err,result)=>{
            if(err){
                res.send (err);
            }else{
                res.send(result);
            }
        });
  
    }
    catch(error) {
      res.status(500).json({ error: error.toString() });
    }
  }