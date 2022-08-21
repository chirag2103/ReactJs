import data from './data';
import logo from './logo.svg';
function App() {
  return (
    <div>
      <header>
        <nav className="navbar max-width-1">
          <div className="left-nav">
            <span>
              <a href="">
                <img src={logo} alt="" />
              </a>
            </span>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Blogs</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
            </ul>
          </div>
          <div className="right-nav">
            <input
              className="form-input"
              type="text"
              name="search"
              placeholder="Search Here"
            />
            <button className="btn" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </nav>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product">
              <a href={`/product/${product._id}`}>
                <img src={product.image} key={product._id} />
              </a>
              <p className="product-name">{product.name}</p>
              <p className="product-price">${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
