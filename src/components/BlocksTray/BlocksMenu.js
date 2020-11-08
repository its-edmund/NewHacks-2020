import React from 'react';
import { Tab } from 'semantic-ui-react';

const categories = [
  {
    menuItem: 'Actions', render: () => <div class="three basic ui buttons">
      <button class="ui button">Print</button>
      <button class="ui button">Input</button>
      <button class="ui button">Calculations</button>
    </div>
  },
  {
    menuItem: 'Variables', render: () => <div class="four basic ui buttons">
      <button class="ui button">Integer</button>
      <button class="ui button">Double</button>
      <button class="ui button">Boolean</button>
      <button class="ui button">Character</button>
    </div>
  },
  {
    menuItem: 'Conditionals', render: () => <div class="four basic ui buttons">
      <button class="ui button">if</button>
      <button class="ui button">if else</button>
      <button class="ui button">else</button>
      <button class="ui button">switch</button>
    </div>
  },
  {
    menuItem: 'Loops', render: () => <div class="three basic ui buttons">
      <button class="ui button">while</button>
      <button class="ui button">for</button>
      <button class="ui button">do while</button>
    </div>
  },
]

const BlocksMenu = () => {
  return (
    <Tab panes={categories} />
  )
}

export default BlocksMenu;