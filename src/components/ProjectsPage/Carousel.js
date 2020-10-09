import React, { Component } from "react";
// TODO: add automatic switching of images
export class Carousel extends Component {
  state = {
    photos: this.props.photos,
    active: 0,
    showButtons: false,
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
    const { photos, active, showButtons } = this.state;
    return (
      <div
        className="project__carousel"
        onMouseEnter={() => this.setState({ showButtons: true })}
        onMouseLeave={() => this.setState({ showButtons: false })}
      >
        <img
          className="carousel__image"
          src={photos[active]}
          alt="Preview not available"
        />
        {photos.length > 1 && showButtons && (
          <div className="carousel__buttons">
            <button
              className="carousel__button carousel__button--previous"
              onClick={() => this.switchPhoto(-1)}
            >
              &lt;
            </button>
            <button
              className="carousel__button carousel__button--previous"
              onClick={() => this.switchPhoto(1)}
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Carousel;
