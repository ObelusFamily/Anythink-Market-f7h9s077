import ItemActions from "./ItemActions";
import { Link } from "react-router-dom";
import React from "react";
import imagePlaceholder from "../../imgs/placeholder.png"

const ItemMeta = (props) => {
  const item = props.item;
  const image = item.seller.image ? item.seller.image : imagePlaceholder;
  return (
    <div id="item-meta" className="d-flex flex-row align-items-center pt-2">
      <Link to={`/@${item.seller.username}`}>
        <img
          id="seller-image"
          src={image}
          alt={item.seller.username}
          className="user-pic mr-2"
        />
      </Link>

      <div className="flex-grow-1 d-flex flex-column py-2">
        <Link to={`/@${item.seller.username}`} className="seller">
          {item.seller.username}
        </Link>
        <span className="date">{new Date(item.createdAt).toDateString()}</span>
      </div>

      <ItemActions canModify={props.canModify} item={item} />
    </div>
  );
};

export default ItemMeta;
