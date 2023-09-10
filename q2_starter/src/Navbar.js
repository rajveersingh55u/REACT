export const Navbar = () => {
  // get theme and lanauge contexts here

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button>Change theme</button>
        <span>{/* Show active language here */}</span>
      </div>
    </div>
  );
};
