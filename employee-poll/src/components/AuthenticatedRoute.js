import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const AuthenticatedRoute = ({ children, loggedIn }) => {
  const redirectUrl = window.location.href
    .toString()
    .split(window.location.host)[1];

  return loggedIn ? (
    children
  ) : (
    <Navigate to={`/login?redirectTo=${redirectUrl}`} />
  );
};

const mapStateToProps = ({ authenticatedUser }) => ({
  loggedIn: !!authenticatedUser,
});

export default connect(mapStateToProps)(AuthenticatedRoute);
