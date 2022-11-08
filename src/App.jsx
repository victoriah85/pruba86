// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.


import { useState } from 'react';
import Cabecera from "./Components/Cabecera";
import Listado from "./Components/Listado";
import Formexample from './Components/Formexample'

function App() {

  const [total, setTotal] = useState(0) 

  const aumentar = () => {
    setTotal(total + 1)
    //setTotal((actual) => actual + 1)
  }

  return (
    <div className="App">
      <Cabecera total={total}/>
      <Listado aumentar={aumentar}/>
      <Formexample form={SubmitEvent}/>
    </div>
  );
}

export default App;