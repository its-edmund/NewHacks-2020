import React from 'react';
import { Message, Tab } from 'semantic-ui-react'

const java = [
    { id: '0', code: "int cupsOfWater = 9;" },
    { id: '1', code: "double price = 3.99;" },
    { id: '2', code: "bool monkeyHappy = true;" },
    { id: '3', code: "char grade = 'A';" },
    { id: '4', code: "String address = \"123 Sesame Street\";" },
    { id: '5', code: "if (bananas > 5) {\n\tmonkeyHappy = true;\n}" },
    { id: '6', code: "if (bananas > 5) {\n\tmonkeyHappy = true;\n} else if (bananas > 3) {\n\tmonkeyEat = true;\n}" },
    { id: '7', code: "if (bananas > 5) {\n\tmonkeyHappy = true;\n} else if (bananas > 3) {\n\tmonkeyEat = true;\n} else {\n\tmonkeyHappy = false;\n}" },
    { id: '8', code: "switch (bananas) {\n\tcase 0:\n\t\tmonkeyHappy = false;\n\t\tbreak;\n\tcase 1:\n\t\tmonkeyHappy = true;\n\t\tbreak;\n}" },
    { id: '9', code: "while (monkeyHappy) {\n\tbananasEaten = bananasEaten + 1;\n}" },
    { id: '10', code: "for (int monkeys = 10; monkeys > 0; monkeys--) {\n\tbananasTaken = bananasTaken + 1;\n}" },
    { id: '11', code: "System.out.println(\"Ooh Ooh Eee Eee Ahh Ahh\")" },
    { id: '12', code: "Scanner in = new Scanner(System.in);\nString monkeyCall = in.nextLine();" },
]

const python = [
    { id: '0', code: "cupsOfWater = 9" },
    { id: '1', code: "price = 3.99" },
    { id: '2', code: "monkeyHappy = True" },
    { id: '3', code: "grade = \"A\"" },
    { id: '4', code: "address = \"123 Sesame Street\"" },
    { id: '5', code: "if bananas > 5:\n\tmonkeyHappy = True\n" },
    { id: '6', code: "if bananas > 5:\n\tmonkeyHappy = True\n elif bananas > 3:\n\tmonkeyEat = True\n" },
    { id: '7', code: "if bananas > 5:\n\tmonkeyHappy = True\n elif bananas > 3:\n\tmonkeyEat = True\nelse \n\tmonkeyHappy = False\n}" },
    { id: '8', code: "def zero():\n\tmonkeyHappy = False\ndef one():\n\tmonkeyHappy = True;\noptions = {0 : zero,\n\t1 : one,\n}" },
    { id: '9', code: "while monkeyHappy:\n\tbananasEaten = bananasEaten + 1\n" },
    { id: '10', code: "for i in range(10,-1,-1):\n\tbananasTaken = bananasTaken + 1\n" },
    { id: '11', code: "print(\"Ooh Ooh Eee Eee Ahh Ahh\")" },
    { id: '12', code: "monkeyCall = input(\"\")" },
]

const cpp = [
    { id: '0', code: "int cupsOfWater = 9;" },
    { id: '1', code: "double price = 3.99;" },
    { id: '2', code: "bool monkeyHappy = true;" },
    { id: '3', code: "char grade = 'A';" },
    { id: '4', code: "string address = \"123 Sesame Street\";" },
    { id: '5', code: "if (bananas > 5) {\n\tmonkeyHappy = true;\n} " },
    { id: '6', code: "if (bananas > 5) {\n\tmonkeyHappy = true;\n} else if (bananas > 3) {\n\tmonkeyEat = true;\n} " },
    { id: '7', code: "if (bananas > 5) {\n\tmonkeyHappy = true;\n} else if (bananas > 3) {\n\tmonkeyEat = true;\n} else {\n\tmonkeyHappy = false;\n}" },
    { id: '8', code: "switch (bananas) {\n\tcase 0:\n\t\tmonkeyHappy = false;\n\t\tbreak;\n\tcase 1:\n\t\tmonkeyHappy = true;\n\t\tbreak;\n}" },
    { id: '9', code: "while (monkeyHappy) {\n\tbananasEaten = bananasEaten + 1;\n}" },
    { id: '10', code: "for (int monkeys = 10; monkeys > 0; monkeys--) {\n\tbananasTaken = bananasTaken + 1;\n}" },
    { id: '11', code: "cout << \"Ooh Ooh Eee Eee Ahh Ahh\";" },
    { id: '12', code: "cin >> monkeyCall;" },
]
const renderItem = (language, id) => {
    console.log(id);
    const result = language.find(obj => obj.id === id);
    console.log(result?.code)

    return result?.code
}



const CodeWindow = (props) => {
    const languages = [
        {
            menuItem: 'Java', render: () => <Tab.Pane style={{ height: 300 }}>
                {renderItem(java, props.display.toString()).split("\n").map((i, key) => {
                    if (i.includes("\t")) {
                        return <div key={key}>&emsp;{i}</div>;
                    }
                    return <div key={key}>{i}</div>;
                })}
            </Tab.Pane>
        },
        {
            menuItem: 'C++', render: () => <Tab.Pane style={{ height: 300 }}>
                {renderItem(cpp, props.display.toString()).split("\n").map((i, key) => {
                    if (i.includes("\t")) {
                        return <div key={key}>&emsp;{i}</div>;
                    }
                    return <div key={key}>{i}</div>;
                })}
            </Tab.Pane>
        },
        {
            menuItem: 'Python', render: () => <Tab.Pane style={{ height: 300 }}>
                {renderItem(python, props.display.toString()).split("\n").map((i, key) => {
                    if (i.includes("\t")) {
                        return <div key={key}>&emsp;{i}</div>;
                    }
                    return <div key={key}>{i}</div>;
                })}
            </Tab.Pane>
        },
    ]
    return (
        <div>
            <Tab panes={languages} />
        </div>
    )
}

export default CodeWindow;