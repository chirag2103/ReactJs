import { Link } from 'react-router-dom';

const showhide = () => {
  const pf = document.querySelector('.key');
  const showbtn = document.querySelector('.show');
  if (pf.type === 'password') {
    pf.type = 'text';
    showbtn.textContent = 'HIDE';
    showbtn.style.color = '#3498db';
  } else {
    pf.type = 'password';
    showbtn.textContent = 'SHOW';
    showbtn.style.color = '#222';
  }
};
function SignIn() {
  return (
    <div>
      <div className="img">
        <div className="signin-content">
          <header>Log In Page</header>
          <form action="#">
            <div className="field">
              <span className="fa fa-user"></span>
              <input type="email" required placeholder="Enter Email" />
            </div>
            <div className="field space">
              <span className="fa fa-lock"></span>
              <input
                type="password"
                required
                placeholder="Password"
                className="key"
              />
              <span className="show" onClick={showhide}>
                SHOW
              </span>
            </div>
            <div className="pass">
              <Link to="#">Forgot Password?</Link>
            </div>
            <div className="field">
              <input type="submit" value="LOG IN" />
            </div>
            <div className="signup">
              <Link to="#">Don't Have Account? Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
