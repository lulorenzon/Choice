import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";




function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick} id="button-next">
        <img
          src="https://s3.glbimg.com/v1/AUTH_30f886c761034fe888c2ebb5d9703be4/PROD/images/next.png"
          alt="button-next"
        />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button className={className} onClick={onClick} id="button-prev">
        <img
          src="https://s3.glbimg.com/v1/AUTH_30f886c761034fe888c2ebb5d9703be4/PROD/images/prev.png"
          alt="button-prev"
        />
      </button>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 939,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div>
      <h2> Multiple items </h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );

