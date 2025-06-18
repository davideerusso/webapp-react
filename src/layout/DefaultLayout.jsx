import { NavLink, Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <header>
        <div className="nav-bar">
          <ul className="nav-inline container">
            <li className="link">
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
