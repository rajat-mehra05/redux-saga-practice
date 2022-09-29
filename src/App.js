import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "./actions";
import "./App.css";

function App() {
  const disptach = useDispatch();
  const users = useSelector((state) => state.myReducer.users);

  return (
    <div className="App">
      <div className="user-container">
        <h1> Users </h1>
        <button onClick={() => disptach(getUsersFetch())}> Get Users </button>

        {users.map((user) => (
          <p> {user.name} </p>
        ))}
      </div>
    </div>
  );
}

export default App;
