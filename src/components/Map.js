import React from 'react'

const Map = (props) => {
    return (
        <div>
            {this.props.list.map((item,i) =>
                <li key={i}>
                    {item}
                    {
                        this.props.isEditing===i ? <button onClick={()=>this.props.onHandleUpdate(i)}>Update</button> : <button onClick={()=> this.props.onHandleEdit(i)}>Edit</button>
                    }
                    <button onClick={()=> this.props.onHandleDelete(i)}>Delete</button>
                </li>
            )}
        </div>
    )
}

export default Map;