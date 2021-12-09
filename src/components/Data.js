import React, { Component } from 'react'
import axios from 'axios';

import CountryData from './CountryData';

import '../css/Data.css';

export class Data extends Component {

    state = {
        covid_data: [],
        show_country: null
    }

    componentDidMount() {
        axios.get("https://covid19.mathdro.id/api/countries")
        .then((res) => {
            this.setState({
                covid_data: res.data.countries
            })
        })
    }

    handleClick = (name) => {
        window.scrollTo(0, 0);
        this.setState({
            show_country: name
        })
    }

    render() {

        let dataMockup = this.state.show_country ? (
            <CountryData country={this.state.show_country} />
        ) : (
            <div></div>
        )

        return (
            <div className="data-wrapper">
                {dataMockup}
                <div className="data-card-container">
                {this.state.covid_data && this.state.covid_data.map((data) => (
                    <div onClick={() => this.handleClick(data.name)} className="data-card" key={data.name} >
                        <h3>{data.name}</h3>
                        <p className="display-more-info">Click on a card to display more details</p>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}

export default Data
