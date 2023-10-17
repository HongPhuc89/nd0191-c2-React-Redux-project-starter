import { connect } from "react-redux";

const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(HomePage);
