import React from "react";

function FormField({ label, type, name, value, onChange }) {
    return (
        <div>
           {label} : 
           <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            />
      </div>
    )
}


export default FormField;