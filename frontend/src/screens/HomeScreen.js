import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../Components/ImageSlider';
import { SliderData } from '../Components/SliderData';
// import data from '../data';
function HomeScreen() {
  const [products, SetProducts] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const result = await axios.get('/api/products');
      SetProducts(result.data);
    };
    fetchdata();
  }, []);
  return (
    <div>
      <ImageSlider slides={SliderData} />
      <h1>Featured Products</h1>
      <div className="products-area">
        {products.map((product) => (
          <div className="products">
            <Link to={`/product/${product._id}`}>
              <img src={product.image} alt="" key={product._id} />
            </Link>
            <p className="products-name">{product.name}</p>
            <p className="products-price">${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
