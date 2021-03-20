import React from "react";
import Carousel from "react-elastic-carousel";

const CarouselItem = () => {
  const feature = [
    {
      id: 1,
      image: "https://cf.shopee.co.id/file/13dc3fdf76e234c39ceb823650dfc68d",
      name: "Indoor",
      total: 510,
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs6OwyADsCGs16mwbCHHbk8Xw7FVkDOFMKVZz7P619D27b1FoPwW1UvDo9I_lWYiXG17A&usqp=CAU",
      name: "Outdoor",
      total: 530,
    },
    {
      id: 3,
      image:
        "https://www.tsunagujapan.com/wp-content/uploads/2017/04/33751431506_f511343558_z.jpg",
      name: "Japanese",
      total: 510,
    },
    {
      id: 4,
      image:
        "https://qph.fs.quoracdn.net/main-qimg-0c54f8e689c717c92a24a92c7ce9f726",
      name: "Local",
      total: 520,
    },
  ];

  return (
    <Carousel
      enableAutoPlay={true}
      pagination={false}
      itemsToShow={2}
      showArrows={false}
      className="carousel-container"
    >
      {feature.map((f) => (
        <div key={f.id} className="carousel-item">
          <img src={f.image} alt="carousel pict" />
          <h1>Yare</h1>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselItem;
