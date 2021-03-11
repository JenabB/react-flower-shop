import React from "react";
import ReactStars from "react-rating-stars-component";
const Popular = () => {
  const popular = [
    {
      id: 1,
      dateAdd: "2012-04-23T18:25:43.511Z",
      image:
        "https://ecs7.tokopedia.net/img/cache/700/product-1/2018/9/20/582595/582595_03daa1a5-7ab4-43e8-83f8-c2b9d659370e_736_736.jpg",
      name: "Aster",
      source: "Nelakurinji, India",
      price: 14.0,
      star: 5,
    },
    {
      id: 1,
      dateAdd: "2012-04-23T18:25:43.511Z",
      image: "https://s3.amazonaws.com/cdn.brecks.com/images/800/62811.jpg",
      name: "Dahlia",
      source: "Nelakurinji, India",
      price: 14.0,
      star: 5,
    },
    {
      id: 1,
      dateAdd: "2012-04-23T18:25:43.511Z",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7lHmnrAAQ0YlPZdcE1IMQVKmD-69kKh7LuHJ3dtizb0CGHNi6aqjXZbkMaA5JONzIdw0&usqp=CAU",
      name: "Anyelir",
      source: "Nelakurinji, India",
      price: 14.0,
      star: 5,
    },
    {
      id: 2,
      image:
        "https://www.gardeningknowhow.com/wp-content/uploads/2017/08/dandelion-seed-head.jpg",
      name: "Dandelion",
      source: "Nelakurinji, India",
      price: 14.0,
      star: 4.7,
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtznqvOLsTclboOXXXWizSXywRaefjzyBlIg&usqp=CAU",
      name: "Mawar",
      source: "Nelakurinji, India",
      price: 14.0,
      star: 4.5,
    },
    {
      id: 4,
      image:
        "https://cdns.klimg.com/merdeka.com/i/w/news/2020/05/16/1177806/540x270/10-macam-anggrek-tercantik-di-dunia-cocok-untuk-hiasi-taman-anda.jpg",
      name: "Anggrek",
      source: "Nelakurinji, India",
      price: 14.0,
      star: 4.1,
    },
  ];
  return (
    <div>
      <div className="product-list">
        {popular.map((p) => (
          <div key={p.id} className="card product-item-list">
            <img src={p.image} alt="bunga" />
            <div className="product-info">
              <h1>{p.name}</h1>
              <p>{p.source}</p>
              <ReactStars
                classNames="product-stars"
                count={5} // Jumlah bintangnya
                value={p.star} // Value stars yang aktif
                size={24} // Size dari stars nya
                color="black" // Color saat keadaan normal
                activeColor="#ffd700" // Color saat active nya
                edit={true} // bisa diubah value nya atau tidak
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
