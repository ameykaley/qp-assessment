

export async function createItemController(req: any, res: any) {
  try {
    const con = req.app.con;

    const { Name, Price, inventory } = req.body;

    if (!Name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    if (!Price) {
      return res.status(400).json({ message: 'Price is required' });
    }

    if (!inventory) {
      return res.status(400).json({ message: 'Inventory Should be their' });
    }


    const data = req.body;
   con.query("INSERT INTO groceryitems SET ?",data,(err,result)=>{
    if(err){
        res.send (err);
    }else{
        res.send(result);
    }})

  }
  catch(error) {
    res.status(500).json({ error: error.toString() });
  }
}