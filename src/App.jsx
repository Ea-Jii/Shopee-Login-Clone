import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import FormLogo from './components/FormLogo';

function App() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className='wrapper flex'>
        <span className='left'>
          <FormLogo />
        </span>

        <span className='right'>
          <LoginForm />
        </span>
      </div>
    </>
  );
}

export default App;
