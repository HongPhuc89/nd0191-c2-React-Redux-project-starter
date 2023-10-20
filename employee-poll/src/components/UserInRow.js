import { connect } from "react-redux";

const UserInRow = ({ user }) => {
  return (
    <div className="flex">
      <div className="w-10 h-10">
        <img
          src={user.avatarURL}
          alt="Avatar"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className=" ml-4">
        <span className="font-bold">{user.name}</span>
        <br />
        {user.id}
      </div>
    </div>
  );
};

export default connect()(UserInRow);
