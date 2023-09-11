import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Routing from "./routes/Routing";
import { Provider } from "react-redux";

// import { QueryClientProvider, QueryClient } from "react-query";

// const queryClient = new QueryClient()


function App() {
  return (
   

    
    
    <Router>
      <div>
        {/* <LandingPage/> */}
        <Routing />
      </div>
    </Router>
  
  
  )
}

export default App;
