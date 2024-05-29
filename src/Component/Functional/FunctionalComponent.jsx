import { useEffect, useState } from "react";


const User = () => {
    const [count, setCount] = useState(0);

    useEffect (() => {
        console.log("useEffect called");
    }, [])
    console.log("Inside functional Component!")
    return (
        <>
            <h1>I am functional Component!</h1>
        </>
    )
}

export default User;