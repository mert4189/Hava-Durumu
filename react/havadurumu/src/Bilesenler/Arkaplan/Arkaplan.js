
import anaekran from "../../vidyo/anaekran.mp4"
import sonuc from "../Sonuc/sonuc"

function index () {

    return(
        <div className="arkaplan">
            <div className="overlay"></div>
            <video id="vidyo" autoPlay loop>
                <source src={anaekran}></source>
            </video>
          
            
           
            
           
        
                       
        </div>

    )
}

export default index;