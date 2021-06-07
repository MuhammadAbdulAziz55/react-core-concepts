import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const ourSalafs = ['Muhammad(saw)', 'Abu Bakr(Ra)', 'Omar(Ra)', 'Osman(Ra)', 'Ali(Ra)', 'Abu Huraira(Ra)']
  const products = [
    { name: 'Photoshop', price: '$55.44' },
    { name: 'Illastator', price: '$44.55' },
    { name: 'PDF Reader', price: '$5.44' }

  ]
  const allData = [
    { name: 'Abdullah', age: '21' },
    { name: 'Abdul Aziz', age: '20' },
    { name: 'Abdur Rahman', age: '18' }
  ]
  const friendsData = [
    { name: 'Ferdows', age: '26' },
    { name: 'Abdulalh', age: '21' },
    { name: 'Rasel', age: '22' }


  ]



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Counter></Counter>

        {
          friendsData.map(fn => <CloseFriend data={fn}></CloseFriend>)
        }
        <ul>
          {
            ourSalafs.map(ourSalaf => <li>{ourSalaf}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          {
            allData.map(ad => <li>{ad.name}</li>)
          }





        </ul>
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>

        <p>My first react paragraph</p>
        {
          products.map(pd => <Product product={pd} ></Product>)
        }
        {
          allData.map(ad => <AboutRelative Data={ad} ></AboutRelative>)
        }
        <Person name='Muhammad Abdul Aziz' profession='Web Developer'></Person>
        <Person name='Abdullah' profession='Student'></Person>
        <Users></Users>
        <Posts></Posts>



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function CloseFriend(props) {
  const friendStyle = {
    border: '7px solid white',
    borderRadius: '14px',
    backgroundColor: 'hotpink',
    color: 'black',
    height: '300px',
    width: '300px',
    float: 'left'
  }
  const { name, age } = props.data;
  return (
    <div style={friendStyle}>
      <h2>Name: {name}</h2>
      <h4>Age: {age}</h4>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '2px solid white',
    borderRadius: '5px',
    height: '200px',
    width: '200px',
    color: 'green',
    backgroundColor: 'white',

    float: 'left'

  }

  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h4> {price}</h4>
      <button> Buy now </button>

    </div>
  )
}

function AboutRelative(props) {
  const dataStyle = {
    border: '2px solid white',
    borderRadius: '14px',
    backgroundColor: 'yellow',
    color: 'white',
    height: '300px',
    width: '300px',
    float: 'left'

  }
  const { name, age } = props.Data;

  return (
    <div style={dataStyle}>
      <h1> Name: {name} </h1>
      <h3> Age: {age} </h3>

    </div>
  )
}



function Person(props) {
  return (
    <div style={{ border: '2px solid green', margin: '10px', width: '400px', height: '300px' }}>
      <h1>Name: {props.name}</h1>
      <h3>Profession: {props.profession}</h3>

    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Posts() {
  const [posts, setPost] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])
  return (
    <div>
      <h1>Dynamic Post: {posts.length}</h1>

      <ul>
        {
          console.log(posts)
        }
        {
          posts.map(post => <li>{post.title}</li>)
        }
      </ul>
    </div>
  )
}


export default App;
