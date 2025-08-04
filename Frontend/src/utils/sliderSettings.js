export const getSliderSettings = (Book) => {
  const slidesToShow = Math.min(Book.length, 3);
  return {
    dots: true,
    infinite: Book.length > slidesToShow,
    speed: 500,
    slidesToShow,
    slidesToScroll: slidesToShow,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(Book.length, 3),
          slidesToScroll: Math.min(Book.length, 3),
          infinite: Book.length > 3,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(Book.length, 2),
          slidesToScroll: Math.min(Book.length, 2)
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
};
