import React, {Component} from 'react'

class EyesOnMe extends Component {
    focusEvent = () => {
        console.log("Good!")
    }

    blurEvent = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return(
            <button onFocus={this.focusEvent} onBlur={this.blurEvent}>Button</button>
        )
    }
}

export default EyesOnMe