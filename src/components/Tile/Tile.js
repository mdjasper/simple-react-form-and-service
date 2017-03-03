import React from 'react';
import './Tile.css'

export default ({
    img = "", 
    title = "TITLE MISSING",
    description, subTitle
}) => (
    <div className="tile">
        <figure>
            <img src={img} alt={title}/>
        </figure>
        <section>
            <h2>{title}</h2>
            {subTitle && <h3>{subTitle}</h3>}
            {description && <p>{description}</p>}
        </section>
    </div>
);