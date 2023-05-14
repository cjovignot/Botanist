"use client"
const NavBar = () => {

    return (
        <>
            <div className="navbar flex-1 justify-between glass">
                <div id="navbarTitle" className="flex pl-5">
                    <div className="flex text-4xl font-serif text-white">
                        <b>B</b>
                        <img src="/logo.png" className="w-6 h-6 self-center rounded-full"/>
                        <b>tanist</b>
                    </div>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control w-full">
                    <input type="search" placeholder="Search" className="input glass h-8 text-white" />
                    </div>
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="/logo.png" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;