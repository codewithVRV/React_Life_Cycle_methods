import React from "react";
class Person extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0,
            name: "Vishnu"
        }
        console.log("Inside Constructor")
    }

    componentDidMount() {
        console.log("componentDidMount Called")
    }


    render(){
        console.log("Inside Render")
        return (
            <h1>I am Class Component</h1>
        )
    }
}

export default Person;