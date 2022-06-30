import React from 'react'
import './index.css'

function ReactStepper(props) {
  return (
    <div className='stepperFlex'>
      {[...Array(props.noOfSteps + 1)].map((e, i) =>
        i === 0 ? (
          ''
        ) : (
          <div
            className={
              props.currenPage <= i
                ? ' stepper'
                : props.noOfSteps === i
                ? 'activeStep marginRightZero'
                : 'activeStep'
            }
          >
            {i}{' '}
            <hr
              className={
                props.noOfSteps === i ? 'hideDivider' : 'stepperDivider'
              }
            ></hr>
          </div>
        )
      )}
    </div>
  )
}

export default ReactStepper
