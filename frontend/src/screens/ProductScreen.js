import { Link } from 'react-router-dom';

function ProductScreen() {
  return (
    <div>
      <div className="container">
        <div className="single-product">
          <div className="row">
            <div className="col-6">
              <div className="product-image">
                <div className="product-image-main">
                  <img src="/img/tshirt-1.png" alt="" id="product-main-image" />
                </div>
                <div className="product-image-slider">
                  <img src="/img/tshirt-1.png" alt="" className="image-list" />
                  <img src="/img/tshirt-2.png" alt="" className="image-list" />
                  <img src="/img/tshirt-3.png" alt="" className="image-list" />
                  <img
                    src="/img/tshirt-group.png"
                    alt=""
                    className="image-list"
                  />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="breadcrumb">
                <span>
                  <Link to="#">Home</Link>
                </span>
                <span>
                  <Link to="#">Product</Link>
                </span>
                <span>
                  <Link to="#">T-shirt</Link>
                </span>
              </div>

              <div className="product">
                <div className="product-title">
                  <h2>Half Sleve T-shirt for Men</h2>
                </div>

                <div className="product-rating">
                  <span>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <span>
                    <i class="fa-solid fa-star"></i>
                  </span>
                  <span className="review">(147 Review)</span>
                </div>

                <div className="product-price">
                  <span className="offer-price">$99.99</span>
                  <span className="sale-price">$129.99</span>
                </div>

                <div className="product-details">
                  <h3>Description</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur voluptate sunt blanditiis inventore nostrum commodi
                    explicabo neque modi cumque optio aliquam assumenda ratione
                    reiciendis, beatae quisquam illo labore ad sequi.
                  </p>
                </div>

                <div className="product-size">
                  <h4>Size</h4>
                  <div className="size-layout">
                    <input
                      type="radio"
                      name="size"
                      value="S"
                      id="1"
                      className="size-input"
                    />
                    <label for="1" className="size">
                      S
                    </label>

                    <input
                      type="radio"
                      name="size"
                      value="M"
                      id="2"
                      className="size-input"
                    />
                    <label for="2" className="size">
                      M
                    </label>

                    <input
                      type="radio"
                      name="size"
                      value="L"
                      id="3"
                      className="size-input"
                    />
                    <label for="3" className="size">
                      L
                    </label>

                    <input
                      type="radio"
                      name="size"
                      value="XL"
                      id="4"
                      className="size-input"
                    />
                    <label for="4" className="size">
                      XL
                    </label>

                    <input
                      type="radio"
                      name="size"
                      value="XXL"
                      id="5"
                      className="size-input"
                    />
                    <label for="5" className="size">
                      XXL
                    </label>
                  </div>
                </div>

                <div className="product-color">
                  <h4>Color</h4>
                  <div className="color-layout">
                    <input
                      type="radio"
                      name="color"
                      id="1"
                      value="black"
                      className="color-input"
                    />
                    <label for="black" className="black"></label>

                    <input
                      type="radio"
                      name="color"
                      id="2"
                      value="red"
                      className="color-input"
                    />
                    <label for="red" className="red"></label>

                    <input
                      type="radio"
                      name="color"
                      id="3"
                      value="blue"
                      className="color-input"
                    />
                    <label for="blue" className="blue"></label>
                  </div>
                </div>
                <span className="divider"></span>

                <div className="product-btn-group">
                  <div className="button buy-now">
                    <i className="bx bxs-shopping-bag-alt"></i> Buy Now
                  </div>

                  <div className="button add-cart">
                    <i className="bx bxs-cart-add"></i> Add to Cart
                  </div>

                  <div className="button heart">
                    <i className="bx bxs-heart"></i> Add to Wishlist
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductScreen;
