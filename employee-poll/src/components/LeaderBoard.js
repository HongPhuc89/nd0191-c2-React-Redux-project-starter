import { connect } from "react-redux";

const LeaderBoard = ({ users }) => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold mt-9">LeaderBoard</h1>
      </div>

      <table className="border-collapse table-auto w-full mt-6">
        <thead className="h-16 bg-gray-100">
          <tr className="table-row font-large text-left text-slate-400">
            <th className="border pl-8">
              User
            </th>
            <th className="border pl-8">
              Answered
            </th>
            <th className="border pl-8">
              Created
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border p-4 pl-8 text-slate-500 dark:text-slate-400 flex">
              <div className="w-10 h-10">
                <img src={user.avatarURL} alt="Avatar"  className="w-full h-full object-cover rounded-full"/>
              </div>
              <div className=" ml-4">
              <span className="font-bold">{user.name}</span>
                <br />
                {user.id}
              </div>

              </td>
              <td className="border p-4 pl-8 text-slate-500 dark:text-slate-400">
                {Object.keys(user.answers).length}
              </td>
              <td className="border p-4 pl-8 text-slate-500 dark:text-slate-400">
                {user.questions.length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(
    (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
  ),
});

export default connect(mapStateToProps)(LeaderBoard);
