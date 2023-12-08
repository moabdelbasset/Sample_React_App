import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };

    }
 
    // handleClick() {
    //     this.setState(
    //         {
    //         introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello",
    //         buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
    //     }, 
    //     ()=> {
    //         console.log('new state', this.state.introduction);
    //         console.log('new state', this.state.buttonText);
    //         }
    //         );
    // }


    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State:', prevState)
            console.log('Previous Props', prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }

        })
    }


    incrementClick() {
        this.setState((prevState, prevProps) => {
            {
                // count: this.state.count + 1,
                console.log('Previous State:', prevState)
                console.log('Previous Props', prevProps)
                return {
                    count: prevState.count + 1
                }
            }
    })
        console.log(this.state.count)
    }

    incrementFive() {
        this.incrementClick()
        this.incrementClick()
        this.incrementClick()
        this.incrementClick()
        this.incrementClick() 
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementClick()}>Increment</button>
                <p>You've clicked {this.state.count} times</p>
            </div>
        
        )
    }

}  

export default StatefulGreetingWithPrevState