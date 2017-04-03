import React from 'react'

class Keypad extends React.Component {
  reminding() {
    console.log('Entering password...')
  }

  render() {
    return(
      <input type="password" onKeyUp={this.reminding}/>
    )
  }
}

module.exports = Keypad
