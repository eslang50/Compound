import './App.css';
import Input from './components/Input'
import Header from './components/Header';
import Button from './components/Button'

function App() {
  return (
    <div id='display'>
      <div id='login-container'>
          <Header text="Your start to financial literacy." ></Header>
        <div id="input-container">
          <Input label="Email address" placeholder="Enter email address" />
          <Input label="Password" placeholder="Enter password" />
        </div>
          <Button text="Sign up now" id="sign-up" ></Button>
      </div>
    </div>
  );
}

export default App;
