import "./App.css";
import { UserContext } from "./contexts/UserContext";
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={{userName: 'Majd', userPhone: '0994527408'}} >
        <Form/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
