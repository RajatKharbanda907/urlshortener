
const shortid = require("shortid");
const nanoid = require("nanoid");
const urlmodel = require("../models/urldata");
const shorturl = async (req,res)=>{
    try{
    const url = req.body.url;
 
    if(!url){
        return res.status(400).json(({
            success:false,
            message:"url is required"
        }))
    }
    
   
    const data = await urlmodel.create({
        longurl:url,
        shorturl:shortid.generate()
    })
   
    
   res.status(200).json({
    success:true,
    message:"shorturl created successfully",
    data:data.shorturl
   })

    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Error in creating shorturl"

        })
        
    }

}    

const redirecturl = async (req,res)=>{
    const shorturl = req.params.shorturl;
    if(!shorturl){
        return res.status(400).json({
            success:false,
            message:"shorturl is required  found" 
        })
    }
    const data = await urlmodel.findOne({shorturl});
    if(!data){
        return res.status(400).json({
            success:false,
            message:"shorturl not found"
        })
    }
    res.redirect(data.longurl);
}


module.exports= {shorturl,redirecturl};
