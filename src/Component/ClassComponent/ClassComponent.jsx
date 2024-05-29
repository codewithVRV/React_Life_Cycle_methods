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

    componentDidUpdate(preProps, preState) {
        // console.log("preProps, preState", preProps, preState)
        console.log("componentDidUpdate Called");
    }




    render(){
        console.log("Inside Render")
        const {count} = this.state;
        return (
            <>
                <h1>I am Class Component</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count+10
                    })
                }}>Click: {count}</button>
            </>
        )
    }
}

export default Person;