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
      <Link
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        to="/"
      >
        Home
      </Link>
      <Link
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        to="/leaderboard"
      >
        Leaderboard
      </Link>
      <Link
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        to="/new"
      >
        New Poll
      </Link>
      <span className="font-medium px-3 py-2 text-slate-700" data-testid="user-information">User: {authenticatedUserId}</span>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

const mapStateToProps = ({ authenticatedUser }) => ({
  authenticatedUserId: authenticatedUser.id,
});

export default connect(mapStateToProps)(Nav);
