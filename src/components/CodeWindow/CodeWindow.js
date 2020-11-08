import React from 'react';
import { Message, Tab } from 'semantic-ui-react'

const languages = [
    { menuItem: 'Java', render: () => <Tab.Pane style={{height: 450}}>
        public static void main(String args[]){'{'} <br/>
        &emsp; System.out.println(); <br/>
        {'{'} <br/>
    </Tab.Pane> },
    { menuItem: 'C++', render: () => <Tab.Pane style={{height: 450}}>
        public static void main(String args[]){'{'} <br/>
        &emsp; System.out.println(); <br/>
        {'{'} <br/>
    </Tab.Pane> },
    { menuItem: 'Python', render: () => <Tab.Pane style={{height: 450}}>
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