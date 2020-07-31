import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

export default class carousel extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".carousel");
      var instances = M.Carousel.init(elems, {});
    });
  }

  render() {
    return (
      <div>
        <div class="carousel">
          <a class="carousel-item" href="#one!">
            <img src="https://lorempixel.com/250/250/nature/1" />
          </a>
          <a class="carousel-item" href="#two!">
            <img src="https://lorempixel.com/250/250/nature/2" />
          </a>
          <a class="carousel-item" href="#three!">
            <img src="https://lorempixel.com/250/250/nature/3" />
          </a>
          <a class="carousel-item" href="#four!">
            <img src="https://lorempixel.com/250/250/nature/4" />
          </a>
          <a class="carousel-item" href="#five!">
            <img src="https://lorempixel.com/250/250/nature/5" />
          </a>
        </div>
      </div>
    );
  }
}
