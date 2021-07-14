import React from 'react'
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


ClassicEditor.create(document.querySelector("#editor"), {
    image: {
      toolbar: ["imageTextAlternative"],
    },
  });

function CkEditor(props) {
    return (
            <div className="form-group m-b-20 row">
                        <div className="col-12">
                          <label for="Title">{props.label}</label>
                          <div id="editor">
                            <div
                              className="textbox"
                              style={{ marginTop: "20px" }}
                            >
                              <div
                                style={
                                  props.descriptionError
                                    ? { border: "1px solid red" }
                                    : null
                                }
                              >
                                <CKEditor
                                  
                                  editor={ClassicEditor}
                                  data={props.description}
                                  // onChange={ ( event, editor ) => console.log( { event, editor } ) }
                                  onReady={(editor) => {
                                    //initilize our application
                                  }}
                                  config={{
                                    ckfinder: {
                                      uploadUrl: `${process.env.REACT_APP_API_URL}/admin_app/ckeditor_image/`,
                                    },
                                  }}
                                  onChange={(event, editor) => {
                                    const data = editor.getData();
                                    props.updateDataDescription({name : props.name , data:data, err : props.descriptionErrorName})
                                  }}
                                />
                              </div>
                            </div>
                            {props.descriptionError ? (
                              <p
                                style={{
                                  color: "red",
                                  fontSize: "10px",
                                  marginLeft: "0px",
                                }}
                              >
                                This field cannot be empty
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>

            
    )
}

export default CkEditor
