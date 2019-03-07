import React from 'react';

const WeatherInfo = props => {

    console.log(props);

    return(
        <div>
            {
                props.error &&
                <div className="alert alert-danger mt-5 text-center">
                    <p className="m-0"> { props.error } </p>
                </div>
            }
            {
                props.temperature && props.description && props.humidity && props.wind_speed && props.city && props.country && 
                <div className="card card-body mt-5">
                    <h3>Weather Info</h3>
                    <p>Location: { props.city }, { props.country }</p>
                    <p>Temperature: { props.temperature } °C, { props.description }</p>
                    <p>Humidity: { props.humidity }</p>
                    <p>Wind Speed: { props.wind_speed }</p>
                </div>
            }        
        </div>    
    )
}

export default WeatherInfo;