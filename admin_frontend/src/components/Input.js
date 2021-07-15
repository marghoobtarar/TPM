import React, { useEffect } from 'react'

function Input(props) {

    return (
        <div className="form-group m-b-20 row">

            <div className="col-12">
                <label htmlFor={props.name}>{props.label}</label>
                <input
                    onChange={(e) => props.updateData({e : e, err : props.error})}
                    style={
                        props.headingError ? { border: "1px solid red" } : null
                    }
                    className="form-control"
                    type="text"
                    name={props.name}
                    id="heading1"
                    value={props.value}
                    placeholder="Enter the title"
                />
            </div>
            {props.headingError ? (
                <p
                    style={{
                        color: "red",
                        fontSize: "10px",
                        marginLeft: "15px",
                    }}
                >
                    This field cannot be empty
                </p>
            ) : null}
        </div>
    )
}

export default Input
