import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import Typed from 'typed.js';
import axios from 'axios'

function Firstpage() {
  const textref = useRef(null);
  const [url,seturl]= useState("");
  const [success,setsuccess]= useState(false);
  const [shorturl,setshorturl] = useState("");
  const [error,seterror]= useState(false)
  const [copied,setcopied] =useState(false)
  const copyfunction =()=>{
    navigator.clipboard.writeText(shorturl);
    navigator.vibrate(200)
    setcopied(true);
  }
  const generateurl = async ()=>{
   try{
    new URL(url);
    
   }catch(err){
    seterror(true)
    return
   }
    const response = await axios.post("http://localhost:2000/api/getshorturl",{
    url:url,
   })
   if(!response){
    console.log("error occured in response");
    setsuccess(false)
   }

   if(response.data.success==false){
    console.log(response.data.message);
   }
   if(response.data.success==true){
    setshorturl(`http://localhost:2000/api/${response.data.data}`)
     setsuccess(true);
   }
 
   
  }
  useEffect(() => {
    const typed = new Typed(textref.current, {
      strings: [
        "Shorten links instantly 🚀",
        
        "Simplify Your URLs",
"Fast & Reliable URL Shortening",
"Transform Long Links into Smart Links"
        
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true
    });

    return () => {
      typed.destroy(); // ✅ correct cleanup
    };
  }, []); // ✅ correct placement

  return (
    <>
      <div className='mainblock'>
        <h1>Url Shortener</h1>
      </div>

      <div className='heading'>
        <h1>
          <span ref={textref}></span>
        </h1>

        <input type="text" placeholder='Enter your Url'  value={url} onChange={(e)=>{seturl(e.target.value)}}/>
        <button onClick={generateurl} className='btn'>Get Shortened URL</button>
        {error && <span style={{borderRadius:"0px",backgroundColor:"red",color:"white",height:"25px",width:"80px",padding:"5px",position:"relative",left:"200px",top:"450px"}}>Invalid Url</span>}
      <div style={{position:"relative",top:"500px",left:"400px",height:"30px",fontSize:"20px",width:"fit-content",textAlign:"center",borderRadius:"5px",backgroundColor:"white",display:'flex',flexWrap:"nowrap"}}>
        {success && <span style={{color:"black"}}>{shorturl} </span> }
        {!success && <span >Short url will be displayed here</span>} </div>  
        {success && <button style={{position:"relative",top:"500px",left:"400px",height:"32px",width:"50px",borderRadius:"5px",marginLeft:"5px"}} onClick={copyfunction}>{copied ? "copied!" :"copy"}</button>}
      </div>
    </>
  );
}

export default Firstpage;