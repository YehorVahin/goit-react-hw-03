import { React, useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm/LoginForm'
import SearchBar from './components/SearchBar/SearchBar';
import LangSwitcher from './components/LangSwitcher/LangSwitcher';
import FormLogin from './components/FormLogin/FormLogin';



function App() {
  
  // const handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   console.log(evt);
  // };
  const [lang, setLang] = useState("uk");
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked);
  };
  return (
    <div>
    <h1>Please login to your account!</h1>
      <LoginForm onLogin={handleLogin}/>
      <SearchBar/>
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang}/>
      <div>
      <h1>Select coffee size</h1>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="sm"
          checked={coffeeSize === "sm"}
          onChange={handleSizeChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="md"
          checked={coffeeSize === "md"}
          onChange={handleSizeChange}
        />
        Meduim
      </label>
      <label>
        <input
          type="radio"
          name="coffeeSize"
          value="lg"
          checked={coffeeSize === "lg"}
          onChange={handleSizeChange}
        />
        Large
      </label>
      </div>
      <p>
        <b>Selected size: </b>{coffeeSize}
      </p>
      <div>
      <label>
        <input type="checkbox" name="terms"  checked={hasAccepted} onChange={handleChange}/> 
				I accept terms and conditions
      </label>
      <button type="button" disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
    <FormLogin/>
    </div>
  )
}

export default App
