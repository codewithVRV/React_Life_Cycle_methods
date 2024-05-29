import React from "react";
class Person extends React.Component {
    constructor (props) {
        super(props)
        console.log("Inside Constructor")
    }


    componentWillUnmount(){
        console.log("componentWillUnmount Called")
    }

    render(){
        console.log("Inside Render")
        return (
            <>
                <h1>I am Class Component</h1>
                <button>Click</button>
            </>
        )
    }
}

export default Person;