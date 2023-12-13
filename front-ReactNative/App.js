// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListaPublicaciones from './components/ListaPublicaciones';

const App = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then(response => {
        setPublicaciones(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <ListaPublicaciones publicaciones={publicaciones} />
    </View>
  );
}
export default App;
