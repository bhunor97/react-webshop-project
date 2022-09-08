import Spinner from "react-bootstrap/Spinner";

const MySpinner = () => {
  return (
    <>
      <h3>Please wait ...</h3>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
};
export default MySpinner;

export const spinnerFunc = (loadingState) => {
  if (loadingState === true) {
    return (
      <div className="spinner-div">
        <MySpinner />
      </div>
    );
  }
};
