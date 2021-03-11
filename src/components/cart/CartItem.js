import React, { useState } from "react";
import { Link } from "react-router-dom";
const CartItem = () => {
  const [isEmpty] = useState(true);

  return (
    <div>
      {isEmpty ? (
        <div>
          <h1>Don't have item yet</h1>
          <Link to="/">Buy</Link>
        </div>
      ) : (
        <div>
          <h1>Yes</h1>
        </div>
      )}
    </div>
  );
};

export default CartItem;
