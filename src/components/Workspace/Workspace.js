import React from 'react';
import { Message, Button } from 'semantic-ui-react'

const Workspace = (props) => {
    const definitions = [
        { title: "Integer", id: "0" },
        { title: "Double", id: "1" },
        { title: "test", id: "4" }
    ]

    const renderItem = (id) => {
        const result = definitions.find(obj => obj.id === id);
        console.log(result?.title)

        return result?.title
    }

    return (
        <div>
            <Message style={{ height: 400 }}>
                {renderItem(props.display)}
            </Message>
        </div>
    )
}

export default Workspace;