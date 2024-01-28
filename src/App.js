import './App.css';
import image from './HomeWork.jpg';
import imageTwo from './HomeSweetHome.jpg';
import { GroceryList } from './groceryList';



function App() {
  return (
    <div className='app'>
    <div className='container'>
    <img src={ image } width='200px' alt='shopping' />
    </div>
    <div className='container'>
    <h1>My ToDo List</h1>
    </div>
    <GroceryList />
    <div className='container'>
    <img src={ imageTwo } width='200px' alt='shopping man' />
    </div>
    </div>
  );
}

export default App;
