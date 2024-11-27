
import LastPart from "./LastPart"
import SecondPart from "./SecondPart"
import Thirdpart from "./ThirdPart"
import Welcome from "./Welcome"

function HomeScreen(){
    return(
        <>
        <div className="flex flex-col h-screen bg-cyanm">
          
          <div id="scroll" className="flex-1 overflow-y-scroll scroll-smooth">
            <Welcome/>
            <SecondPart/>
            <Thirdpart/>
            <LastPart/>
          </div>
        </div>
       
  
        
      </>
    )
}
export default HomeScreen