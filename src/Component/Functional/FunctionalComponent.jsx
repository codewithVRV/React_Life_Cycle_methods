import { useEffect } from "react";


const User = () => {

    useEffect (() => {
        console.log("useEffect called");
        return () => {
            console.log("CleanUp Function Called!")
        }
    }, [])


    console.log("Inside functional Component!")
    return (
        <>
            <h1>I am functional Component!</h1>
            <button>Click</button>
        </>
    )
}

export default User;