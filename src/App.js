import './App.css';
import Input from './components/Input'

function App() {
  return (
    <div>
      <div id="loginContainer">
        <Input label="Email address" placeholder="Enter email address" />
        <Input label="Password" placeholder="Enter password" />
      </div>
    </div>
  );
}

export default App;
