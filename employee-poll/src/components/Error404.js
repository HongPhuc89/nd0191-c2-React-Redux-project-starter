import { connect } from "react-redux";

const Error404 = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Error404);
