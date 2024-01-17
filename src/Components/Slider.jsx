import { Component } from "react";
import Slider from "react-slick";
// import Products from "./Products";
import ProductCards from "./ProductCards";

export default class Responsive extends Component {
  render() {

    const { Data } = this.props;
    console.log("Slider data",Data)

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          {
            Data &&
            Data.map(item =>
              {
                console.log("slider item",item),
                <ProductCards item={item}/>
              })
          }
        </Slider>
      </div>
    );
  }
}