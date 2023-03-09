
import React,{useState} from "react";
import Arkaplan from "./Bilesenler/Arkaplan/Arkaplan";
import "./index.css";
import Arama from "./Bilesenler/Arama/Arama"
import Sonuc from "./Bilesenler/Sonuc/sonuc"





function App() {
  const [havadurumu,belirtHavaDurumu] = useState({});
  console.log(havadurumu)
  
  
  
  

  
  
  
  
  
  return (
    
   <section className="uygulama">
     <Arkaplan  />
    <div id="baslik">Hava Durumu</div>
    <Arama belirtHavaDurumu={belirtHavaDurumu} />
    <Sonuc hava={havadurumu}  />
    
    
     </section>
  );
}


export default App;
