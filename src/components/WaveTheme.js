const waveThemeFunc = (theme) => {
  if (theme === "dark-theme") {
    return "shape-fill-dark";
  } else if (theme === "custom-theme") {
    return "shape-fill-custom";
  } else if (theme == "light-theme") {
    return "shape-fill-light";
  }
};

export default waveThemeFunc;
