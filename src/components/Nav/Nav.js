import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {


    const [active, setActive] = useState({
        das: false,
        pay: false,
        his: false,
        cre: false,
    })

    const hr = window.location.href.split('/');
    const lastURL = hr[hr.length - 1]
    useEffect(() => {
        switch (lastURL) {
            case 'dashboard':
                setActive({
                    das: true
                })
                break;
            case 'history':
                setActive({
                    his: true
                })
                break;
            case 'payin':
                setActive({
                    pay: true
                })
                break;
            case 'create-user':
                setActive({
                    cre: true
                })
                break;
            default:
                break;
        }

    }, [lastURL])


    const handleClick = (id) => {
        setActive({
            // ...active,
            [id]: true
        });
    }

    // console.log(active)
    return (
        <>
            <div
                className="sidebar bg-img-svg"
                data-color="purple"
                data-background-color="black"
                data-image=""
            >
                <div className="logo">
                    {/* <Link to='/' className="simple-text logo-normal">EMPLOYEE</Link> */}
                    <div className="simple-text logo-normal" > EMPLOYEE</div>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className={active.das ? 'nav-item active' : 'nav-item'} onClick={() => handleClick('das')}>
                            <Link to='/dashboard' className="nav-link "><i className="material-icons">dashboard</i>Dashboard</Link>
                        </li>
                        <li className={active.pay ? 'nav-item active' : 'nav-item'} onClick={() => handleClick('pay')}>
                            <Link to='/payin' className="nav-link"><i className="material-icons">payment</i>Pay In User</Link>
                        </li>
                        <li className={active.his ? 'nav-item active' : 'nav-item'} onClick={() => handleClick('his')}>
                            <Link to='/history' className="nav-link" ><i className="material-icons">payment</i>History User</Link>
                        </li>
                        <li className={active.cre ? 'nav-item active' : 'nav-item'} onClick={() => handleClick('cre')}>
                            <Link to='/create-user' className="nav-link" ><i className="material-icons">person_add</i>Create User</Link>
                        </li>
                    </ul>
                </div>
            </div >
        </>
    );
};

export default Nav;
