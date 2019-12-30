import React, { Component } from 'react'
import spinner from './components/home/spinner.png'
 class Spinner extends Component {
    render() {
        return (
            <div>
                <img
                src={spinner}
                style={{size:20,width:200,height:200}}
                />
            </div>
        )
    }
}

export default Spinner
