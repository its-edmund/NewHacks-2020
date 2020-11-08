import React from 'react';
import { Message, Tab } from 'semantic-ui-react'

const cpp = [
    {id: 0, code: "int cupsOfWater = 9;"},
    {id: 1, code: "double price = 3.50;"},
    {id: 2, code: "bool monkeyHappy = true;"},
    {id: 3, code: "char grade = 'A';"},
    {id: 4, code: "string address = \"123 Sesame Street\";"},
    {id: 5, code: "if (bananas > 5){\n\tmonkeyHappy = true;\n} "},
    {id: 6, code: "if (bananas > 5){\n\tmonkeyHappy = true;\n} else if (bananas > 3){\n\tmonkeyEat = true;\n} "},
    {id: 7, code: "if (bananas > 5){\n\tmonkeyHappy = true;\n} else if (bananas > 3){\n\tmonkeyEat = true;\n} else{\n\tmonkeyHappy = false;}"},
    {id: 8, code: "switch (bananas) {\n\tcase 0:\n\t\tmonkeyHappy = false;\n\t\tbreak;\n\tcase 1:\n\t\tmonkeyHappy = true;\n\t\tbreak;"},
    {id: 9, code: "while (monkeyHappy) {\n\tbananasEaten = bananasEaten + 1;\n}"},
    {id: 10, code: "for (int monkeys = 10; monkeys > 0; monkeys--) {\n\tbananasTaken = bananasTaken + 1;\n}"},
    {id: 11, code: "cout << \"Ooh Ooh Eee Eee Ahh Ahh\";"},
    {id: 12, code: "cin >> monkeyCall;"},
    {}


]

const languages = [
    { menuItem: 'Java', render: () => <Tab.Pane  style={{height: 300}}>
        public static void main(String args[]){'{'} <br/>
        &emsp; System.out.println(); <br/>
        {'{'} <br/>
    </Tab.Pane> },
    { menuItem: 'C++', render: () => <Tab.Pane  style={{height: 300}}>
        public static void main(String args[]){'{'} <br/>
        &emsp; System.out.println(); <br/>
        {'{'} <br/>
    </Tab.Pane> },
    { menuItem: 'Python', render: () => <Tab.Pane  style={{height: 300}}>
        public static void main(String args[]){'{'} <br/>
        &emsp; System.out.println(); <br/>
        {'{'} <br/>
    </Tab.Pane> },
]

const CodeWindow = () => {
    return(
        <div>
            <Tab panes={languages}/>
        </div>
    )
}

export default CodeWindow;