import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import styled from 'styled-components';

import pollService from './pollService'
import PollCard from './components/PollCard';

class PollSport extends Component {

    state = {
        pollBank: [],
    };
    
    
    getPoll = () => {
        pollService().then(poll => {
            this.setState({
                pollBank: poll,
            });
        });
    };

    componentDidMount() {
        this.getPoll();
        this.setState((prevState, props) => {
            return {pollBank: prevState.pollBank}
        })
    }

    render() {
        return ( 
            <div className="container">
                <div className="title"><center>PollSport</center></div>
                {this.state.pollBank.length > 0 &&
                this.state.pollBank.map(({name, country, state, sport, homeName, awayName, draw, id}) => 
                <PollWrapper key={id}>
                    <PollCard name={name} country={country} state={state} sport={sport} 
                    homeName={homeName} draw={draw} awayName={awayName} key={id}
                    onClick={this.handleClick} src={""}
                    />
                </PollWrapper>
                )}
            </div>
        );
    }
}

ReactDOM.render(<PollSport />, document.getElementById("root"));

    const PollWrapper = styled.a`
        padding: 0.5rem 0;
        margin: 0.5rem 1rem;
        width: 100rem;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        text-align: center;
        height: 300px;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.3) 100%
          ),
          url('http://lorempixel.com/400/200/sport') no-repeat;
        background-size: cover;
        `;