import "../styling/Nav.scss";

function Nav() {
  return (
    <>
      <div className="nav_bar">
        <h2>ToDo</h2>
        <div className="nav_links">
          <a href="#">Home</a>
          <a href="https://github.com/BikramdeepSingh/to_do.git">Git_Repo</a>
        </div>
      </div>
    </>
  );
}

export default Nav;
