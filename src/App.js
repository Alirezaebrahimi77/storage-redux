import Header from "./components/Header";
import StorageList from "./components/StorageList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={2000}/>
      <Header />
      <StorageList />

    
    </div>
  );
}

export default App;
