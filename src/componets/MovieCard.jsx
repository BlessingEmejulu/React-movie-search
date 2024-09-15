import React from "react";

export default function MovieCard() {
    return (
        <div className="card"  >
        <img className="card--image"
        src= ""/>
        <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p><small>RELEASE DATE: {movie.release_date}</small></p>
        <p><small>RATING: {movie.vote_average}</small></p>
        <p className="card--desc">{movie.overview}</p>
        </div>
        </div>
)
}