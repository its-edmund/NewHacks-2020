import React from 'react';
import { Message } from 'semantic-ui-react'

const CodeWindow = () => {
    return(
        <div>
            <Message style={{height: 400}}>
                public s    tatic void main(String args[]){'{'} <br/>
                &emsp; System.out.println(); <br/>
                {'{'} <br/>
            </Message>
        </div>
    )
}

export default CodeWindow;