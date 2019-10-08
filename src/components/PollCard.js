import React from 'react'
import styled from 'styled-components';
import propTypes from 'prop-types';

import PollInfo from './PollInfo';
import PollOptions from './PollOptions';

const PollCard = ({ name, country, state, sport, homeName, draw, awayName, id }) => {
    return (
        <Card className="pollBody">
            <PollInfo name={name} country={country} state={state}sport={sport}key={id}/>
            <PollOptions homeName={homeName} draw={draw} awayName={awayName}key={id}/>
        </Card>    
    )
}

export default PollCard;

PollCard.propTypes = {
  name: propTypes.string,
  country: propTypes.string,
  state: propTypes.string,
  sport: propTypes.string,
  homeName: propTypes.string,
  awayName: propTypes.string,
}

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(2,2,2,0.2);
  transition: 0.3s;
  width: 90%;
  border-radius: 10%;
}`



// localStorage.setItem('user', rememberMe ? user : '');