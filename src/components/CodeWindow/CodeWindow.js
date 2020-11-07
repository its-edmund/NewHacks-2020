import React from 'react';
import { Message } from 'semantic-ui-react'

const CodeWindow = () => {
    return(
        <div>
            <Message>
                public static void main(String args[]){'{'} <br/>
                &emsp; System.out.println(); <br/>
                {'{'} <br/>
            </Message>
        </div>
    )
}

export default CodeWindow;