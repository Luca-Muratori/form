import React, {useState} from "react"
import "./Tab.css"

export default function Tab({onClick}){
  const [active, setActive] = useState(false);
  
  const btnBookCliked=()=>{
    setActive(false)
    onClick(active);
    console.log("active from tab " + active)
  }

  const btnRequestCliked=()=>{
    setActive(true)
    onClick(active);
    console.log("active from tab " + active)
  }

  return(
      <>
      {!active ?
        <div className="tab">
          <div className="bookAppointmentColor bookAppointment"  onClick={btnBookCliked}>
            <p>BOOK AN APPOINTMENT</p>
            <img
              src="https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-appointment-human-resource-itim2101-flat-itim2101.png"
            />
          </div>
          <div id="requestMoreInfoBtn" className="requestMoreInfoBtn notSelectedBtnChanging" onClick={btnRequestCliked} >
            <p>REQUEST MORE INFORMATION</p>
            <img src="https://img.icons8.com/dusk/64/000000/information.png" />
          </div>
        </div>
        : 
        <div className="tab">
          <div className="bookAppointment notSelectedBtnChanging"  onClick={btnBookCliked}>
            <p>BOOK AN APPOINTMENT</p>
            <img
              src="https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-appointment-human-resource-itim2101-flat-itim2101.png"
            />
          </div>
          <div id="requestMoreInfoBtn" className="requestMoreInfoBtn selectedBtnChanging" onClick={btnRequestCliked} >
            <p>REQUEST MORE INFORMATION</p>
            <img src="https://img.icons8.com/dusk/64/000000/information.png" />
          </div>
        </div>}
      </>
      
        
    )
}