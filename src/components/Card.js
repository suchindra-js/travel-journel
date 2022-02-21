export default function Card(props) {
    return (
        <div className="card-wrapper">
            <img className="cover-img" src={props.item.imageUrl}></img>
            <div className="content-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <h3>{props.item.location}</h3>
                <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                <h2>{props.item.title}</h2>
                <h4>{props.item.startDate} - {props.item.endDate}</h4>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}