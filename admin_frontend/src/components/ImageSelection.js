import React from "react";
import placeholder from "../img/placeholder.png";

function ImageSelection() {
  return (
    <div>
      <div className="col-xs-12 col-sm-4">
        <div className="profile_holder">
          {props.urlImageExist ? (
            <img
              style={{
                width: "100%",
                height: "350px",
                borderRadius: "5px",
              }}
              src={`${props.image}`}
              className="mr-auto ml-auto"
              alt="image"
            />
          ) : (
            <img
              style={{
                width: "100%",
                height: "350px",
                borderRadius: "5px",
              }}
              src={placeholder}
              className="mr-auto ml-auto"
              alt="image"
            />
          )}
        </div>
        <div
          className="profile_name mb-4"
          style={{
            marginTop: "10px",
            textAlign: "center",
          }}
        >
          <div className="upload-btn-wrapper">
            <button className="btn">Choose picture</button>
            <input
              type="file"
              name="myfile"
              accept="image/*"
              onChange={(e) => props.imageSelector(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSelection;
