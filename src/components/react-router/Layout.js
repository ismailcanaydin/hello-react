import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <div>
                {/* A "layout route" is a good place to put markup you want to
              share across all the pages on your site, like navigation. */}
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) =>
                                isActive && 'navLink'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) =>
                                isActive && 'navLink'}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) =>
                                isActive && 'navLink'}>Dashboard</NavLink>
                            {/* <a href='./Dashboard'>Dashboard</a> */}
                        </li>
                        <li>
                            <NavLink to="/users" className={({ isActive }) =>
                                isActive && 'navLink'}>Users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/nothing-here" className={({ isActive }) =>
                                isActive && 'navLink'}>Nothing Here</NavLink>
                        </li>
                    </ul>
                </nav>

                <hr />

                {/* An <Outlet> renders whatever child route is currently active,
              so you can think about this <Outlet> as a placeholder for
              the child routes we defined above. */}
                <Outlet />
            </div>
        </div>
    )
}

export default Layout