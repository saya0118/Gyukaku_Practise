import React from 'react'

const Map = (props) => {
    return (
        <div>
            {props.list.map((item,i) =>
                <li key={i}>
                    {item}
                    {
                        props.isEditing===i ? <button onClick={()=>props.onHandleUpdate(i)}>Update</button> : <button onClick={()=> props.onHandleEdit(i)}>Edit</button>
                    }
                    <button onClick={()=> props.onHandleDelete(i)}>Delete</button>
                </li>
            )}
        </div>
    )
}

export default Map;