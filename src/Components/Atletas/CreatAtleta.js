import "./Atleta.css";
import React from "react";

export default function CreatAtleta() { 
    
    function calcularEdad(event) {
        //let fechaNac = document.querySelector("edad");
        let fechaNac=event.target.value;
        if(fechaNac!=='' && fechaNac!=null){
            alert(fechaNac);
        }
    }
  
  return (
    <div className="contentAtleta">
      <form id="createAtleta" className="formAtleta">
        <label>Nombres</label>
        <input type="text" id="apellidos"></input>
        <label>Apellidos</label>
        <input type="text" id="nombres"></input>
        <hr></hr>
        <label>Fecha de Nac</label>
        <input
          id="fechanac"
          type="date"
          date-format="yyyy-mm-dd"
          onChange={calcularEdad}
        ></input>
        <label>Edad</label>
        <input className="edadAtleta" type="number"></input>
        <hr></hr>
        <label>Nivel</label>
        <select id="nivel">
          <option value="principiante">Principiante</option>
          <option value="intermedio">Intermedio</option>
          <option value="avanzado">Avanzado</option>
        </select>
        <label>Categoria</label>
        <select id="categoria">
          <option value="infantes">Infantes</option>
          <option value="cadetes">Cadetes</option>
          <option value="juniors">Juniors</option>
          <option value="sub23">Sub23</option>
        </select>
      </form>
    </div>
  );
  

}
