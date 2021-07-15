import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";
import axios from "axios";
import ButtonLoader from "../components/ButtonLoader";
import Sidebar from "../components/Sidebar";
import Topbar from '../components/Topbar'
import Input from '../components/Input'
import CkEditor from '../components/CkEditor'
import ImageSelection from "../components/ImageSelection";

const About = () => {
  const [urlImageExist1, setUrlImageExist1] = useState(false);
  const [urlImageExist2, setUrlImageExist2] = useState(false);
  const [image1, setImage1] = useState("");
  const [selectedImage1, setSelecteImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [selectedImage2, setSelecteImage2] = useState("");  
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);
  const [headingError, setHeadingError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/admin_app/about_us/`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        console.log(res.data);
        if (res.data && res.data.length > 0) {
          let data = res.data;
          setHeading(data[0].heading);
          setDescription(data[0].description);
          setId(data[0].id);

          if (data[0].image1 !== null && data[0].image1 !== undefined) {
            setUrlImageExist1(true);
            setImage1(process.env.REACT_APP_API_URL + "/" + data[0].image1);
          } else {
            setUrlImageExist1(false);
          }
          if (data[0].image2 !== null && data[0].image2 !== undefined) {
            setUrlImageExist2(true);
            setImage2(process.env.REACT_APP_API_URL + "/" + data[0].image2);
          } else {
            setUrlImageExist2(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);
  
  const updateData = (e) => {
    setHeading(e.e.target.value);
    setHeadingError(false);
  };
  const updateDataDescription = (e) => {
   
  setDescription(e.data)
  setDescriptionError(false)
  };

  const imageSelector1 = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setImage1(URL.createObjectURL(e.target.files[0]));
      setUrlImageExist1(true);
      setSelecteImage1(e.target.files[0]);
    }
  };
  const imageSelector2 = (e) => {
    if (e.target.files[0]) {
      setImage2(URL.createObjectURL(e.target.files[0]));
      setUrlImageExist2(true);
      setSelecteImage2(e.target.files[0]);
    }
  };
  const onsubmit = (e) => {
    e.preventDefault();

    if (heading === "") {
      setHeadingError(true);
    } else if (description === "") {
      setDescriptionError(true);
    } else {
      setIsLoading(true);
      var method = "PUT";
      var url = `manage_about_us/${id}`;
      if (id === 0) {
        method = "POST";
        url = "about_us";
      }
      e.preventDefault();
      var formdata = new FormData();
      formdata.append("heading", heading);
      formdata.append("description", description);
      if (selectedImage1 !== "") {
        formdata.append("image1", selectedImage1);
      }
      if (selectedImage2 !== "") {
        formdata.append("image2", selectedImage2);
      }
      axios({
        method: method,
        url: `${process.env.REACT_APP_API_URL}/admin_app/${url}/`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
        data: formdata,
      })
        .then((res) => {
          console.log(res);

          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err.response);
          setIsLoading(false);

          alert("Sorry your limit to upload data has been exceeded.");
        });
    }
  };

  return (
    <div className="">
      <div id="wrapper">
        <Sidebar />

        <div className="content-page">
        <Topbar link_to="/" current_page="About Us" />


          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card-box">
                    <form method="post">

                      <Input
                        updateData={(e) => updateData(e)}
                        value={heading}
                        headingError={headingError}
                        label={"Heading"}
                        name="heading"
                        error="headingError"
                      />
                      <CkEditor
                        label={"Description"}
                        descriptionError={descriptionError}
                        description={description}
                        descriptionErrorName="descriptionError"
                        name="description"
                        updateDataDescription={(e) => updateDataDescription(e)}
                      />

                  <div className="form-group m-b-20 row">
                        <div className="col-12">
                          <div className="row" style={{ marginTop: "30px" }}>
                            <ImageSelection
                            urlImageExist = {urlImageExist1}
                            image = {image1}
                            imageSelector = {e => imageSelector1(e)}

                            />

                          <ImageSelection
                            urlImageExist = {urlImageExist2}
                            image = {image2}
                            imageSelector = {e => imageSelector2(e)}

                            />
                          
                           </div>
                        </div>
                      </div>

                    <div style={{ marginTop: "20px" }}>
                        <ButtonLoader
                          submit={(e) => onsubmit(e)}
                          isLoad={isLoading}
                          title={"Submit"}
                          titleLoad={"Submitting"}
                        />
                      </div>
                     
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(About);
