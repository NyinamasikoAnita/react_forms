import MyForm from './forms/input';
import './App.css';
import MyTextarea from './forms/textarea';
import MySelect from './forms/select';

function App() {
  return (
    <div className='container'>
       <MyForm/> 
       <MyTextarea/>
       <MySelect/>
    </div>
    
  );

  
}

export default App;
