import React, { Component } from 'react'

import axios from 'axios';

import '../css/IntroCard.css';


const convertToCommaString = (num) => {
    let numstring = num.toLocaleString('en-US');
    return numstring;
}

class IntroCard extends Component {

    state = {
        global_cases: 0,
        global_recovered: 0,
        global_deaths: 0
    }

    componentDidMount() {
        axios.get("https://covid19.mathdro.id/api")
            .then((res) => {
                let cases = res.data.confirmed.value;
                let recovered = res.data.recovered.value;
                let deaths = res.data.deaths.value;

                cases = convertToCommaString(cases);
                recovered = convertToCommaString(recovered);
                deaths = convertToCommaString(deaths);

                this.setState({
                    global_cases: cases,
                    global_recovered: recovered,
                    global_deaths: deaths
                })
            })
    }

    render() {
        return (
            <div className="intro-card">
                <h2>COVID-19 Tracker App</h2>
                <h3>Global Statistics</h3>
                <div className="global-data">
                    <div className="global-cases">
                        <p>Cases</p>
                        <p>{this.state.global_cases}</p>
                    </div>
                    <div className="global-recovered">
                        <p>Recovered</p>
                        <p>{this.state.global_recovered}</p>
                    </div>
                    <div className="global-deaths">
                        <p>Deaths</p>
                        <p>{this.state.global_deaths}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default IntroCard
