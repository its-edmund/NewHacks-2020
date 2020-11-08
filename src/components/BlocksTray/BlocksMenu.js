import React from 'react';
import { Tab } from 'semantic-ui-react';

const BlocksMenu = (props) => {
  const categories = [
    {
      menuItem: 'Variables', render: () => <div class="four basic ui buttons">
        <button class="ui button" value={0} onClick={props.handleClick}>Integer</button>
        <button class="ui button" value={1} onClick={props.handleClick}>Double</button>
        <button class="ui button" value={2} onClick={props.handleClick}>Boolean</button>
        <button class="ui button" value={3} onClick={props.handleClick}>Character</button>
      </div>
    },
    {
      menuItem: 'Conditionals', render: () => <div class="four basic ui buttons">
        <button class="ui button" value={4} onClick={props.handleClick}>if</button>
        <button class="ui button" value={5} onClick={props.handleClick}>if else</button>
        <button class="ui button" value={6} onClick={props.handleClick}>else</button>
        <button class="ui button" value={7} onClick={props.handleClick}>switch</button>
      </div>
    },
    {
      menuItem: 'Loops', render: () => <div class="three basic ui buttons">
        <button class="ui button" value={8} onClick={props.handleClick}>while</button>
        <button class="ui button" value={9} onClick={props.handleClick}>for</button>
        <button class="ui button" value={10} onClick={props.handleClick}>do while</button>
      </div>
    },
    {
      menuItem: 'Actions', render: () => <div class="three basic ui buttons">
        <button class="ui button" value={11} onClick={props.handleClick}>Print</button>
        <button class="ui button" value={12} onClick={props.handleClick}>Input</button>
        <button class="ui button" value={13} onClick={props.handleClick}>Calculations</button>
      </div>
    },
  ]
  return (
    <Tab panes={categories} />
  )
}

export default BlocksMenu;