import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */

import {storiesOf} from '@storybook/react';
// import {action} from '@storybook/addon-actions';
// import {linkTo} from '@storybook/addon-links';

import {withKnobs, boolean} from '@storybook/addon-knobs';

import Dashboard from '../src/components/Dashboard';

const dashboardState = {player: 1, pirates: 3, coco: 2, rhum: 2, wood: 10, telescope: false, canon: true, sail: false};

storiesOf('Dashboard', module).add('stuffed', () => <Dashboard {...dashboardState} />);
