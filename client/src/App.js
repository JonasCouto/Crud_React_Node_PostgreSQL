import './App.css';
import React,{useState} from 'react';


function App() {

  const[value, setValue] = useState();
  // console.log(value);

  // pegando valores do INPUT em formado de OBJ
  const handleChangeValue = value =>{
    // console.log(value.target.value)
    setValue((prevValue)=>({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  const handleClickButton = ()=>{
    console.log(value);
  }


  return (
    <div className="app--container">

      <div className="registro--container">

        <h1 className="registro--title"> Cadastro Paciente </h1>

        <label for="nome">Nome</label>
        <input
        type="text" 
        name="nome" 
        placeholder="Nome"
        className="registro--input"
        onChange={handleChangeValue}/>
        <br></br>

        <label for="dtNascimento">Data Nascimento</label>
        <input
        type="text" 
        name="dtNascimento" 
        placeholder="Data Nascimento"
        className="registro--input"
        onChange={handleChangeValue}/>
        <br></br>

        <label for="endereco">Endereço</label>
        <input
        type="text" 
        name="endereco" 
        placeholder="Endereço"
        className="registro--input"
        onChange={handleChangeValue}/>
        <br></br>

        <label for="sexo">Sexo</label>
        <input
        type="text" 
        name="sexo" 
        placeholder="Sexo"
        className="registro--input"
        onChange={handleChangeValue}/>
        <br></br>

        <label for="telefone">Telefone</label>
        <input
        type="text" 
        name="telefone" 
        placeholder="telefone"
        className="registro--input"
        onChange={handleChangeValue}/>
        <br></br>

        <label for="email">E-mail</label>
        <input
        type="text" 
        name="email" 
        placeholder="email"
        className="registro--input"
        onChange={handleChangeValue}/>
        <br></br>

        {/* onclick com função para pegar os valores em formato de obj */}
        <button type="submit" className="registro--button" onClick={()=>{handleClickButton()}} >cadastrar</button>

      </div>
     
    </div>
  );
}

export default App;
