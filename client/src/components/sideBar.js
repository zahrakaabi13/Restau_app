import logo from '../images/logo.png'

export const SideBar = () => {

    return (
        <>
          <div className="sidebar">
            <div className="logo--content">
                <div className="logo">
                   <img className="logo" src={logo} alt=""/>
                   <box-icon name='menu' color='#ffffff' id="btn"></box-icon>
                </div>
            </div>

                <ul className="nav--list">
                    <li>
                        <a href="#"><box-icon name='search-alt-2' color='#ffffff' id="search"></box-icon>
                        <input type="text" placeholder="Search....."></input>
                        </a>
                    </li>
                    <li>
                        <a href="#"><box-icon name='user-plus' color='#ffffff'></box-icon>
                        <span className="links--name">Users</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"><box-icon name='food-menu' color='#ffffff'></box-icon>
                        <span className="links--name">Orders</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"><box-icon name='band-aid' color='#ffffff'></box-icon>
                        <span className="links--name">Food</span>
                        </a>
                    </li>
                </ul>


                <div className="profile--content">
                    <div className="profile">
                        <div className="profile--details">
                             {/* <img src="" alt="hhh"/> */}
                             <div className="name--job">
                                 <div className="name"> Zahra Kaabi </div>
                                 <div className="job"> Junior React Developper</div>
                             </div>
                        </div>
                        <box-icon name='log-out' id="log-out" color='#ffffff'></box-icon>
                    </div>
                </div>
          </div>
        </>
    )
}