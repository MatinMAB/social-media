import "./App.css";

//Router
import Router from "./router/Router";

//Context
import AuthContextProvider from "./context/AuthContextProvider";


function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
