import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import pollService from './pollService'
import PollCard from './components/PollCard';
import styled from 'styled-components';


class PollBee extends Component {
    state = {
        pollBank: [],
        responses: 0,
    };

    getPoll = () => {
        pollService().then(poll => {
            this.setState({
                pollBank: poll
            });
        });
    };

    computeAnswer = (answer, correctAnswer) => {
        if(answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            })
        }
            this.setState({
                responses: this.state.responses < 1 ? this.state.responses + 1 : 1
            })
    }
    componentDidMount() {
        this.getPoll();
    }

    render() {
        return (
            <div className="container">
                <div className="title"><center>PollSport</center></div>
                {this.state.pollBank.length > 0 &&
                this.state.responses < 1 &&
                this.state.pollBank.map(({name, country, state, sport, awayName, homeName, id}) => 
                <PollWrapper>
                <PollCard 
                    name={name} 
                    country={country}
                    state={state}
                    sport={sport}
                    homeName={homeName} 
                    awayName={awayName} 
                    key={id}/>
                </PollWrapper>    
                )}
            </div>
        );
    }
}

ReactDOM.render(<PollBee />, document.getElementById("root"));

    const PollWrapper = styled.a`
        padding: 0.5rem 0;
        margin: 0.5rem 1rem;
        width: 100rem;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        background: grey;
        text-align: center;
        `