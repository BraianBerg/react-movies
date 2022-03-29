import React from "react";

export default function MovieCard(props){

return(

      <div className="gallery__item">
        <h4>{props.mName}</h4>
        <div className="gallery__item--image">
          <img
            src={props.imgsrc}
            alt={props.mName}
          />
        </div>
      </div>

);

}