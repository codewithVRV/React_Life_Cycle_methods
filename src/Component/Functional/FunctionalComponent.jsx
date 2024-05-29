import { useEffect, useState } from "react";


const User = () => {
    const [count, setCount] = useState(0);

    useEffect (() => {
        console.log("useEffect called");
    }, [count])
    console.log("Inside functional Component!")
    return (
        <>
            <h1>I am functional Component!</h1>
            <button onClick={() => setCount(count+20)}>Click: {count}</button>
        </>
    )
}

export default User;