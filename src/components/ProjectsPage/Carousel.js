import React, { Component } from "react";

export class Carousel extends Component {
  state = {
    photos: this.props.photos,
    active: 0,
  };

  switchPhoto = (increment) => {
    this.setState((state) => {
      let newActive = state.active + increment;
      if (newActive === state.photos.length) {
        newActive = 0;
      }
      if (newActive === -1) {
        newActive = state.photos.length - 1;
      }
      return { active: newActive };
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img
          className="carousel__image"
          src={photos[active]}
          alt="Preview not available"
        />
        {photos.length > 1 && (
          <div className="carousel__buttons">
            <button
              className="carousel__previous"
              onClick={() => this.switchPhoto(-1)}
            >
              Prev
            </button>
            <button
              className="carousel__next"
              onClick={() => this.switchPhoto(1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Carousel;
