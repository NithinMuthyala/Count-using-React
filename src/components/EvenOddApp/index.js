import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {numvalue: 0}

  Increment = () => {
    const value = Math.random() * 100
    const roundofnumer = Math.ceil(value)
    console.log(roundofnumer)
    this.setState(preval => ({numvalue: roundofnumer}))
  }

  render() {
    const {numvalue} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="count-val">Count {numvalue}</h1>
          {numvalue % 2 === 0 ? (
            <p className="check">Count is Even</p>
          ) : (
            <p className="check">Count is Odd</p>
          )}
          <button type="button" onClick={this.Increment}>
            increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
