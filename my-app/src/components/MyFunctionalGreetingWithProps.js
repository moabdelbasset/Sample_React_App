import React from "react";

// function MyFunctionalGreeting() {
//     return <h1>Hello from React!</h1>
// }

const MyFunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h1>Hello {props.greeting}, My name is {props.name}. I am {props.age}</h1>; 
}

export default MyFunctionalGreetingWithProps