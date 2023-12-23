import React from "react"

export default function Card(props) {
    return(
        <div className="card">
            <div className="card--block">
            <img src={props.item.image} className="card--image" />
            </div>
            <img src ="" className ="card--pin" /> 
            <span className="card--locationName">{props.item.locationName}</span>
            <a className="gray" href={props.item.mapLink}>Google Maps Link</a>
            <h1 className="card--title">{props.item.title}</h1>
                <div>
                <p className="card--travel">{props.item.travelDate}</p>
                <p className="card--description">{props.item.description}</p>
                </div>
        </div>
    )
}
