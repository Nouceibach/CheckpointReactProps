
import './App.css';
import Component from './Profile/Component';


function App() {
  return (
    <div className="App">
      <Component fullName="Clara" bio="bio" profession="Ingenieur">
        <img src="https://media.istockphoto.com/photos/the-text-my-story-appearing-behind-torn-brown-paper-picture-id850949186?b=1&k=20&m=850949186&s=170667a&w=0&h=VAVLE9y1vmdGwwOHF0g72BVTbxeS4_ybMUPHTkN3W7Y="alt="img1" />
      </Component>
      <Component>
        <button>Action</button>
      </Component>   
    </div>
  );
}

export default App;
