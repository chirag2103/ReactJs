import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import BlogScreen from './screens/BlogScreen';
import SignIn from './screens/SignIn';
import Contact from './screens/Contact';
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav className="navbar">
            <div className="left-nav">
              <span>
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </span>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
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
              <Link to="/signin">Sign In</Link>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/blogs" element={<BlogScreen />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <div class="footer">
            <div class="box">
              <div class="cols">
                <h4>company</h4>
                <ul>
                  <li>
                    <Link to="#">about us</Link>
                  </li>
                  <li>
                    <Link to="#">our services</Link>
                  </li>
                  <li>
                    <Link to="#">privacy policy</Link>
                  </li>
                  <li>
                    <Link to="#">affiliate program</Link>
                  </li>
                </ul>
              </div>
              <div class="cols">
                <h4>get help</h4>
                <ul>
                  <li>
                    <Link to="#">FAQ</Link>
                  </li>
                  <li>
                    <Link to="#">shipping</Link>
                  </li>
                  <li>
                    <Link to="#">returns</Link>
                  </li>
                  <li>
                    <Link to="#">order status</Link>
                  </li>
                  <li>
                    <Link to="#">payment options</Link>
                  </li>
                </ul>
              </div>
              <div class="cols">
                <h4>online shop</h4>
                <ul>
                  <li>
                    <Link to="#">watch</Link>
                  </li>
                  <li>
                    <Link to="#">bag</Link>
                  </li>
                  <li>
                    <Link to="#">shoes</Link>
                  </li>
                  <li>
                    <Link to="#">dress</Link>
                  </li>
                </ul>
              </div>
              <div class="cols">
                <h4>follow us</h4>
                <div class="apps">
                  <Link to="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-github"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
