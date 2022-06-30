import React from 'react'
import ReactStepper from 'simple-react-stepper'
import 'simple-react-stepper/dist/index.css'

const App = () => {
  return (
    <div>
      <ReactStepper currenPage={2} noOfSteps={4} />
    </div>
  )
}

export default App
