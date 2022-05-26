import React from 'react';
import './Card.css';

function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"

    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card__badge">{badgeText}</div>}
            <img className="card__display" src={props.item.coverImg} alt="" />
            <div className="card__rating">
                <img className="card__star" src="https://pngimg.com/uploads/red_star/red_star_PNG31.png" alt="" />
                <small>{props.item.stats.rating} <span>({props.item.stats.reviewCount})</span><span>-</span> <span>{props.item.location}</span></small>
            </div>
            <h4>{props.item.title}</h4>
            <p className="card__price"><strong>From ${props.item.price}/</strong>person</p>
        </div>
    )
}

export default Card