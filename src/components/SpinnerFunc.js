import MySpinner from "./MySpinner";

export const spinnerFunc = (loadingState) => {
  if (loadingState === true) {
    return (
      <div className="spinner-div">
        <MySpinner />
      </div>
    );
  } else {
    return;
  }
};
