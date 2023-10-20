import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../actions/authenticateUser";

const Nav = ({ dispatch, authenticatedUserAvatar }) => {
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
        Leader Board
      </Link>
      <Link
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        to="/add"
      >
        New
      </Link>
      <div className="w-10 h-10">
        <img
          src={authenticatedUserAvatar}
          alt="Avatar"
          data-testid="user-avatar"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <button onClick={logout} className="text-gray-400 hover:text-red-900">
        Logout
      </button>
    </nav>
  );
};

const mapStateToProps = ({ authenticatedUser }) => ({
  authenticatedUserAvatar: authenticatedUser.avatarURL,
});

export default connect(mapStateToProps)(Nav);
