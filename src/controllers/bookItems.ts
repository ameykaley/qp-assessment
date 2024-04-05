import { getItemsController } from "./getItemsController";


export  async function bookItems(req: any, res: any) {
    try {
        const con = req.app.con;
        let data = req.body;
        data.orderdetails= JSON.stringify(req.body.orderdetails)
        con.query("INSERT INTO orders SET ?",data,(err,result)=>{
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