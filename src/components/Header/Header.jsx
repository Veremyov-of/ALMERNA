import '../../css/header/header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="header_wrapp">
                <a className="header_logo" href="/">
                    <img className="header_logo-img" src="./img/header/logo.png" alt="logo"/>
                </a>

                <nav className="header_nav">
                    <a className="header_nav-link" href="/">NEW ARRIVALS</a>
                    <a className="header_nav-link" href="/">PLUS SIZE</a>
                    <a className="header_nav-link" href="/">LINGERIE</a>
                    <a className="header_nav-link" href="/">NIGHTWEAR</a>
                    <a className="header_nav-link" href="/">GIFTS</a>
                    <a className="header_nav-link" href="/">COLLECTIONS</a>
                </nav>

                <menu className="menu">
                    <button className="menu-item">
                        <img className="menu-item-img" src="./img/header/search.png" alt="search"/>
                    </button>
                    <button className="menu-item">
                        <img className="menu-item-img" src="./img/header/favorites.png" alt="favorites"/>
                    </button>
                    <button className="menu-item">
                        <img className="menu-item-img" src="./img/header/profile.png" alt="profile"/>
                    </button>
                    <button className="menu-item">
                        <img className="menu-item-img" src="./img/header/basket.png" alt="basket"/>
                    </button>
                </menu>
            </div>
        </div>
    );
} 