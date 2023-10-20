import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../actions/authenticateUser";

const Nav = ({ dispatch, authenticatedUserId, authenticatedUserAvatar }) => {
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
        to="/leader-board"
      >
        Leader Board
      </Link>
      <Link
        className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
        to="/new"
      >
        New Poll
      </Link>
      <div className="w-10 h-10">
        <img src={authenticatedUserAvatar} alt="Avatar"  className="w-full h-full object-cover rounded-full"/>
      </div>
      <button onClick={logout} className="text-gray-400">Logout</button>
    </nav>
  );
};

const mapStateToProps = ({ authenticatedUser }) => ({
  authenticatedUserId: authenticatedUser.id,
  authenticatedUserAvatar: authenticatedUser.avatarURL
});

export default connect(mapStateToProps)(Nav);
