import React from 'react';
import { Tab } from 'semantic-ui-react';

import BlocksTray from './BlocksTray'

const categories = [
  { menuItem: 'Actions', render: () => <BlocksTray color={'#64D69D'} /> },
  { menuItem: 'Variables', render: () => <BlocksTray color={'#FFC544'} /> },
  { menuItem: 'Conditionals', render: () => <BlocksTray color={'#1BCDFD'} /> },
  { menuItem: 'Loops', render: () => <BlocksTray color={'#B91BFD'} /> },
]

const BlocksMenu = () => {
  return (
    <Tab panes={categories} />
  )
}

export default BlocksMenu;