// only used on the nav + home button so far
export default function themeSwitchFunc(theme) {
  if (theme === "dark-theme") {
    return "dark";
  } else if (theme === "light-theme") {
    return "light";
  } else if (theme === "custom-theme") {
    // CHANGE THIS
    return "primary";
  }
}
