import React from "react";

const BestSeller = () => {
  const popular = [
    {
      id: 1,
      name: "Flora Flower",
      source: "Nelakurinji, India",
      price: 14.0,
      star: 4,
    },
    {
      id: 2,
      name: "Dandelion",
      source: "Nelakurinji, India",
      price: 14.0,
      star: 4,
    },
    {
      id: 3,
      name: "Mawar",
      source: "Nelakurinji, India",
      price: 14.0,
      star: 4,
    },
  ];
  return (
    <div>
      <div className="product-list">
        {popular.map((p) => (
          <div key={p.id}>
            <h1>{p.name}</h1>
            <p>{p.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
