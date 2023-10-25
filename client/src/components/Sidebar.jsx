function Sidebar() {
  return (
    <nav
      style={{ height: "100vh" }}
      className="absolute w-52 bg-background shadow-sm shadow-black flex flex-col"
    >
      <ul className="m-10">
        <li>
          <a href="#" className="cursor-pointer">
            Men
          </a>
        </li>
        <li className="mt-10">
          <a href="#" className="cursor-pointer">
            Women
          </a>
        </li>
        <li className="mt-10">
          <a href="#" className="cursor-pointer">
            Children
          </a>
        </li>
        <li className="mt-10">
          <a href="#" className="cursor-pointer">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
