function Card(props) {
    return (
        <div className="card--container">
            <img src={props.imageUrl} className="card--img" />
            <div className="card--main">
                <div className="card--location">
                    <img src="/assets/pin.svg" />
                    <p className="card--location-country">{(props.location).toUpperCase()}</p>
                    <a className="card--location-maps" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card