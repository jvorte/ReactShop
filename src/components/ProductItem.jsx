import React from "react";
import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className="w-full max-w-xs rounded-lg">
      <Card className="w-full">
        <CardHeader shadow={false} floated={false} className="h-48">
          <img
            className="p-4 rounded-t-lg"
            src={product.image}
            alt={product.title}
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography
              color="blue-gray"
              className="font-medium h-12 overflow-hidden"
            >
              {product.title}
            </Typography>
            <Typography color="blue-gray" className="font-large">
              €{product.price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {/* {product.description} */}
          </Typography>
        </CardBody>

        <CardFooter className="pt-0 flex justify-between gap-2">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 text-center text-black py-2 px-2 rounded-lg bg-gray-200 hover:bg-gray-400 transition duration-200"
          >
            View Product
          </Link>
          <Button
            onClick={handleAddToCart}
            className="flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductItem;
