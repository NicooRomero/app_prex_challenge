import './App.css';
import FormIp from './components/Form/FormIp';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <FormIp />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
