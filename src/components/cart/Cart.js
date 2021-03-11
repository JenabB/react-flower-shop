import React, { useState } from "react";

const Cart = () => {
  const [isEmpty] = useState(true);

  return (
    <div>
      {isEmpty ? (
        <div>
          <h1>No</h1>
        </div>
      ) : (
        <div>
          <h1>Yes</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
