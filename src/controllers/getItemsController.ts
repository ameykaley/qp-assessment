export async function getItemsController(req: any, res: any) {
    try {
        const con = req.app.con;
  
      con.query("select * from groceryitems",(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send(result);
        }
    });
  
    }
    catch(error) {
      res.status(500).json({ error: error.toString() });
    }
  }