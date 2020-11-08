import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const initial = Array.from({ length: 10 }, (v, k) => k).map(k => {
  const custom = {
    id: `id-${k}`,
    content: `Code ${k}`
  };

  return custom;
});

const grid = 8;

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItems = (count) => Array.from({ length: count }, (v, k) => k).map(k => {
  const u = window.unique = (window.unique || 0) + 1
  return {
    id: `item-${u}`,
    content: `item ${u}`
  }
});

const CodeItem = styled.div`
  width: 200px;
  margin-top: ${grid}px;
  margin-left: ${grid}px;
  margin-bottom: ${grid}px;
  background-color: ${props => props.color};
  padding: ${grid}px;
`;

function Code({ color, code, index }) {
  return (
    <Draggable draggableId={code.id} index={index}>
      {provided => (
        <CodeItem
          color={color}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {code.content}
        </CodeItem>
      )}
    </Draggable>
  );
}

const BlocksTray = (props) => {
  const [code, setCode] = useState({
    codes: initial
  });

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const codes = reorder(
      code.codes,
      result.source.index,
      result.destination.index
    );

    setCode({ codes });
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {code.codes?.map((code, index) => (
                <Code color={props.color} code={code} index={index} key={code.id} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}

export default BlocksTray;