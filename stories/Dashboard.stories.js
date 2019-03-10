import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
// import {linkTo} from '@storybook/addon-links';

import {withKnobs, boolean} from '@storybook/addon-knobs';

import Dashboard, {AttackButtons} from '../src/components/Dashboard';

const dashboardState = {player: 1, pirates: 3, coco: 2, rhum: 2, wood: 10, telescope: false, canon: true, sail: false};
onTurn, onMove, onAttack, onExplore, onFish, onEnroll;

const onTurn = action('Turn');
const onMove = action('Move');
const onAttack = action('Attack');
const onExplore = action('Explore');
const onFish = action('Fish');
const onEnroll = action('Enroll');

const onAction = action('Action');
const actions = {onTurn, onMove, onAttack, onExplore, onFish, onEnroll, onAction};

storiesOf('Dashboard', module)
  .add('normal', () => <Dashboard state={dashboardState} actions={actions} round={{}} />)
  .add('turning', () => <Dashboard state={dashboardState} actions={actions} round={{action: 'turn'}} />)
  .add('moving', () => <Dashboard state={dashboardState} actions={actions} round={{action: 'move'}} />);

storiesOf('Dashboard/AttackButtons', module).add('normal', () => (
  <AttackButtons onAttack={action('attack')} player$={1} />
));
