# simple-react-stepper

> React stepper component

[![NPM](https://img.shields.io/npm/v/simple-react-stepper.svg)](https://www.npmjs.com/package/simple-react-stepper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save simple-react-stepper
```

## Usage

```jsx
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
```

## License

MIT © [ashpaqinamdar](https://github.com/ashpaqinamdar)
