import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */

import {storiesOf} from '@storybook/react';
// import {action} from '@storybook/addon-actions';
// import {linkTo} from '@storybook/addon-links';

import {withKnobs, boolean} from '@storybook/addon-knobs';

import Board, {BoardCell} from '../src/components/Board';

const boardState = [
  [
    {type: 'island', hidden: false},
    {type: 'island', hidden: true},
    {type: 'empty', hidden: false},
    {type: 'merchant', hidden: true},
    {type: 'empty', hidden: false},
  ],
  [
    {type: 'fortress', hidden: true},
    {type: 'island', hidden: false},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: true},
    {type: 'empty', hidden: false},
  ],
  [
    {type: 'empty', hidden: true},
    {type: 'island', hidden: false},
    {type: 'empty', hidden: true},
    {type: 'merchant', hidden: false},
    {type: 'island', hidden: true},
  ],
  [
    {type: 'monster', hidden: true},
    {type: 'empty', hidden: false},
    {type: 'monster', hidden: false},
    {type: 'fortress', hidden: true},
    {type: 'empty', hidden: true},
  ],
  [
    {type: 'fortress', hidden: false},
    {type: 'island', hidden: true},
    {type: 'empty', hidden: false},
    {type: 'merchant', hidden: true},
    {type: 'empty', hidden: true},
  ],
];

storiesOf('Board', module).add('stuffed', () => <Board board={boardState} />);

storiesOf('Board/Cell', module)
  .addDecorator(withKnobs)
  .add('empty', () => <BoardCell />)
  .add('island', () => <BoardCell type="island" hidden={boolean('Hidden', false)} />)
  .add('monster', () => <BoardCell type="monster" hidden={boolean('Hidden', false)} />)
  .add('merchant', () => <BoardCell type="merchant" hidden={boolean('Hidden', false)} />)
  .add('fortress', () => <BoardCell type="fortress" hidden={boolean('Hidden', false)} />)
  .add('hidden', () => <BoardCell hidden={boolean('Hidden', true)} />);
