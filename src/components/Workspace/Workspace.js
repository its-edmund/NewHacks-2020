import React from 'react';
import { Message, Button, Header } from 'semantic-ui-react'

const Workspace = (props) => {
    const definitions = [

        { id: '0', name: "Integer", definition: "An integer is a whole number, meaning it cannot be a decimal. However, it can be a negative number, or zero. Integers are good for counting things, like the number of glasses of water you drank today." },
        { id: '1', name: "Double", definition: "A double is any number that has a decimal point. An integer can be written as a double by simply adding a \".0\" . Since doubles have a decimal point, they require more computer memory than an integer. Doubles are good for data with decimal values, like prices." },
        { id: '2', name: "Boolean", definition: "A boolean is a value of TRUE or FALSE. Comparison operators such as > (greater than), < (less than), == (equal to) && (and), || (or), and ~ (not) will give a boolean value. Booleans are usually used in if statements." },
        { id: '3', name: "Character", definition: "A character is a single letter or symbol. This can include single digits like 1 or 3, but they are not treated as numbers. A character is written with single quotes (' '). Each character is stored as a pre-determined number called an ASCII value." },
        { id: '4', name: "String", definition: "A string is a bunch of characters. It is usually used to represent words or phrases. Since strings contain letters and numbers, they are useful for storing text data, like a message you want to print to the screen." },

        { id: '5', name: "if", definition: "An if statement is a conditional that will run a section of code when a condition is met, usually a boolean. If the condition is not met, no code in the if statement will run. If statements are useful for changing the flow of the code so certain parts only run sometimes." },
        { id: '6', name: "if else", definition: "If else statements follow an if statement. If the if statement's conditon is not met, then the following if else condition will be checked. You can have multiple if else statements under an if statement to check multiple conditions, or none at all if you are only checking the if condition." },
        { id: '7', name: "else", definition: "Else is the last statement in an if statement. If no other conditions in the if statement are met, then the code in the else statement is run. The else acts as a \"catch all\"}, but like the if else, it is optional to include with an if statement." },
        { id: '8', name: "switch", definition: "A switch statement is an easier way to write if and if else. The switch compares a variable with multiple cases, and runs code for each case. Switch cases are handy when you know exactly what you are comparing a variable." },

        { id: '9', name: "while", definition: "A while loop repeats code until a certain condition is met. Like conditionals, this terminating condition is usually a boolean. Inside a while loop, there must be code that steps toward the terminating condition, otherwise the loop will run infinitely." },
        { id: '10', name: "for", definition: "A for loop repeats code a set amount of times, based on a range of numbers. You would use a for loop over a while loop when you know exactly how many times you want your code to repeat." },
        { id: '11', name: "Print", definition: "Print is a function that displays text to the screen." },
        { id: '12', name: "Input", definition: "Getting an input is a function in where you assign text to a variable. When you type something onto the screen and press enter, this is an example of a basic input." },
    ];

    const renderTitle = (id) => {
        const result = definitions.find(obj => obj.id === id);
        console.log(result?.title)

        return result?.name;
    }

    const renderDefinition = (id) => {
        const result = definitions.find(obj => obj.id === id);
        console.log(result?.title)

        return result?.definition;
    }

    return (
        <div>
            <Message style={{ height: 400 }}>
                <Header as='h3'>{renderTitle(props.display)}</Header>
                <br />
                <Header as='h5'>{renderDefinition(props.display)}</Header>
            </Message>
        </div>
    )
}

export default Workspace;