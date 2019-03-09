import React from 'react';
import styled from 'styled-components';

const DashboardDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 10px solid grey;
  padding: 10px;
  width: 100px;
`;

const Dashboard = ({player, pirates, coco, rhum, wood, telescope, canon, sail}) => {
  return (
    <DashboardDiv>
      <div>{`player: ${player}`}</div>
      <div>{`pirates: ${pirates}`}</div>
      <div>{`coco: ${coco}`}</div>
      <div>{`rhum: ${rhum}`}</div>
      <div>{`wood: ${wood}`}</div>
      <div>{`telescope: ${telescope}`}</div>
      <div>{`canon: ${canon}`}</div>
      <div>{`sail: ${sail}`}</div>
    </DashboardDiv>
  );
};

export default Dashboard;
