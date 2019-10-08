import React from 'react'
import styled from 'styled-components';
import propTypes from 'prop-types';

const PollInfo = ({name, country, state, sport}) => (
<div className="pollInfo">
  <div className="name">{name}</div>
  <div className="country">{country}</div>
  <div className="sport">{sport}</div><br/>
  <div className="state">{state}</div><br/>
</div>      
)

export default PollInfo;

