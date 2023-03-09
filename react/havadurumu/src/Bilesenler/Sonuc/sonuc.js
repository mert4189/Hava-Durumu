
import ibulutlu from "../../icons/ibulutlu.png"
import ikar from "../../icons/ikar.png"
import iyagmur from "../../icons/iyagmur.png"
import igunes from "../../icons/igunes.png"
import isis from "../../icons/isis.png"
import ifırtına from "../../icons/ifırtına.png"
import arkaplan from "../Arkaplan/Arkaplan"

function  index({hava}){
  
  return(
        
        <><>


      {typeof hava.main != "undefined" && (








        

















        <div className="sonuc">
          <div id="sehir">{hava.name},{hava.sys.country}</div>
          <div className="detay">
            <div className="derece">{Math.round(hava.main.temp)}°C</div>
          
            
            
          
          
          
            <div id="statu">{hava.weather[0].description}</div>
            
            <div>

            </div>

            <div id="hissedilen">  Hissedilen {Math.round(hava.main.feels_like)}°C </div>
            <div id="nem">Nem % {hava.main.humidity}</div>
            <div id="icons">
              {hava.weather[0].main === "Clouds" ?
               <img src={ibulutlu}></img>
               :
               hava.weather[0].main === "Snow" ?
               <img src={ikar}></img>
               :
                hava.weather[0].main === "Rain" ?
                <img  src={iyagmur}></img>
                :
                hava.weather[0].main === "Clear" ?
                <img src={igunes}></img>
                :
                hava.weather[0].main === "Drizzle" ?
                <img  src={iyagmur}></img>
                :
                hava.weather[0].main ===  "Mist" ?
                <img src={isis}></img>
                :
                hava.weather[0].main === "Thudnerstorm" ?
                <img src={ifırtına}></img>
                :
                ""
               
                

               
               
              
              
              
              
              }
               <div id="rüzgar"> Rüzgar Hızı {Math.round(hava.wind.speed)  } m/s
                
                <div id="rüzgar yönü">
                 Rüzgar Yönü {hava.wind.deg}




                </div>
               
               
               </div>

              
             




            </div>




          </div>
          <div id="bulutluluk">{hava.clouds.all} % Bulutlu </div>
        </div>
        
        













      )}
    </></>
   
    
    )
   
}

export default index;

