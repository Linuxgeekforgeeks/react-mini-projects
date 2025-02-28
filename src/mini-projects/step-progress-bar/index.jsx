import { useState } from "react"
import "./StepProgressiveBar.css"

function StepProgressiveBar() {

  const [progressiveData, setprogressiveData] = useState([
    "Information",

  ])
  return (
    <div className="steps">
      <div className="steps_top"></div>
      <div className="steps_middle"></div>
      <div className="steps_bottom">

        <button>Previous</button>
        <button className="next-btn">Next</button>
      </div>
    </div>
  )
}

export default StepProgressiveBar