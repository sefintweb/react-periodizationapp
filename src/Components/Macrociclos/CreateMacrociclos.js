import React from 'react'

export default function CreateMacrociclos() {
    return (
        <div>
            <h1>Nuevo Macro</h1>
            <div>
                <form>
                    <label>Nombre</label>
                    <input id="nombre" type="text"></input>
                    <label>Codigo</label>
                    <input id="codigo" type="text"></input>
                </form>
            </div>
        </div>
    )
}
