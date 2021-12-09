import React, { Component } from 'react'
import axios from 'axios';

import '../css/CountryData.css'

class CountryData extends Component {

    state = {
        country_data: []
    }

    componentDidUpdate() {
        const {country} = this.props;
        axios.get(`https://covid19.mathdro.id/api/countries/${country}/confirmed`)
            .then((res) => {
                this.setState({
                    country_data: res.data
                })
            })
    }

    componentDidMount() {
        const {country} = this.props;
        axios.get(`https://covid19.mathdro.id/api/countries/${country}/confirmed`)
            .then((res) => {
                this.setState({
                    country_data: res.data
                })
                console.log(res.data);
            })
    }

    render() {
        const { country } = this.props;
        return (
            <div className="country-data-wrapper">
                <h2>{country}</h2>
                <div className="country-card-wrapper">
                    {this.state.country_data && this.state.country_data.map((data) => (
                        <div className="country-card">
                            <h3>{data.provinceState}</h3>
                            <p className="cc">Cases: {data.confirmed}</p>
                            <p className="rc">Recovered: {data.recovered}</p>
                            <p className="dc">Deaths: {data.deaths}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default CountryData
