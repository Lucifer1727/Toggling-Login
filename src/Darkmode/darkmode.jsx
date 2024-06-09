const DarkMode = () => {
  const ToggleTheme = () => {
    alert("hi");
  };
  return (
    <>
      <div>
        <button>
          <a href="#" onClick={() => ToggleTheme()}>
            Toggle Mode
          </a>
        </button>
      </div>
    </>
  );
};

export default DarkMode;
