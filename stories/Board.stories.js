import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */

import {storiesOf} from '@storybook/react';
// import {action} from '@storybook/addon-actions';
// import {linkTo} from '@storybook/addon-links';

import {withKnobs, boolean, select} from '@storybook/addon-knobs';

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

const optionsDirection = {
  North: 'north',
  South: 'south',
  East: 'east',
  West: 'west',
  None: null,
};
const optionsPlayer = {
  Player1: 1,
  Player2: 2,
  None: null,
};

storiesOf('Board', module).add('stuffed', () => <Board state={boardState} />);

storiesOf('Board/Cell', module)
  .addDecorator(withKnobs)
  .add('empty', () => <BoardCell />)
  .add('island', () => (
    <BoardCell
      type="island"
      hidden={boolean('Hidden', false)}
      direction={select('Direction', optionsDirection, null)}
      player={select('Player', optionsPlayer, null)}
    />
  ))
  .add('monster', () => (
    <BoardCell
      type="monster"
      hidden={boolean('Hidden', false)}
      direction={select('Direction', optionsDirection, null)}
      player={select('Player', optionsPlayer, null)}
    />
  ))
  .add('merchant', () => (
    <BoardCell
      type="merchant"
      hidden={boolean('Hidden', false)}
      direction={select('Direction', optionsDirection, null)}
      player={select('Player', optionsPlayer, null)}
    />
  ))
  .add('fortress', () => (
    <BoardCell
      type="fortress"
      hidden={boolean('Hidden', false)}
      direction={select('Direction', optionsDirection, null)}
      player={select('Player', optionsPlayer, null)}
    />
  ))
  .add('hidden', () => (
    <BoardCell
      hidden={boolean('Hidden', true)}
      direction={select('Direction', optionsDirection, null)}
      player={select('Player', optionsPlayer, null)}
    />
  ))
  .add('player1', () => (
    <BoardCell
      type="fortress"
      hidden={boolean('Hidden', false)}
      direction={select('Direction', optionsDirection, 'east')}
      player={select('Player', optionsPlayer, 1)}
    />
  ));
