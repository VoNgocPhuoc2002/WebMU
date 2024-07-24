import "./styles.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header__fix">
        <div className="header__groupleft">
          <img
            src="https://static.webzen.com/platform/common/v1/images/ico_webzen.png"
            alt="Webzen Icon"
            className="webzen-icon"
          />
          <span>GAMES</span>
          <span>TOP UP</span>
        </div>
        <div className="header__groupright">
        <a href="/Login" className="header__textlog">Log in</a>
        <div className="header__register">
            <a href="/register" className="header__textregister">REGISTER</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
