import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../actions/authenticateUser";

const Nav = ({ dispatch, authenticatedUserId }) => {
  const logout = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
  };

  return (
    <nav className="flex justify-center space-x-4">
      <Link to="/">Home</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/new">New Poll</Link>
      <span
        data-testid="user-information"
      >
        User: {authenticatedUserId}
      </span>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

const mapStateToProps = ({ authenticatedUser }) => ({
  authenticatedUserId: authenticatedUser.id,
});

export default connect(mapStateToProps)(Nav);
