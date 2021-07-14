import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonLoader from "../components/ButtonLoader";
import Sidebar from "../components/Sidebar";
import placeholder from "../img/placeholder.png";
import Input from "../components/Input";
import CkEditor from "../components/CkEditor";
import Topbar from "../components/Topbar";

const LandingPage = () => {
  const [data, setData] = useState({
    heading1: "",
    heading2: "",
    heading3: "",
    heading4: "",
    heading5: "",
    heading6: "",
    heading7: "",
    heading8: "",

    headingError1: false,
    headingError2: false,
    headingError3: false,
    headingError4: false,
    headingError5: false,
    headingError6: false,
    headingError7: false,
    headingError8: false,

    description1: "",
    description2: "",
    description3: "",
    description4: "",
    description5: "",
    description6: "",
    description7: "",
    description8: "",

    descriptionError1: false,
    descriptionError2: false,
    descriptionError3: false,
    descriptionError4: false,
    descriptionError5: false,
    descriptionError6: false,
    descriptionError7: false,
    descriptionError8: false,
  });
  const [heading1, setHeading1] = useState();
  const [description1, setDescription1] = useState();
  const [description2, setDescription2] = useState();

  const [id, setId] = useState("");
  const [heading1Error, setHeading1Error] = useState(false);
  const [descriptionError1, setDescriptionError1] = useState(false);
  const [descriptionError2, setDescriptionError2] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [urlImageExist, setUrlImageExist] = useState(false);
  const [urlImageExist2, setUrlImageExist2] = useState(false);
  const [urlImageExist3, setUrlImageExist3] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [image, setImage] = useState("");
  const [selectedImage, setSelecteImage] = useState("");

  const [image2, setImage2] = useState("");
  const [selectedImage2, setSelecteImage2] = useState("");

  const [image3, setImage3] = useState("");
  const [selectedImage3, setSelecteImage3] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/admin_app/data_methodology/`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then((res) => {
        return res.data;
      })
      .then((res) => {
        console.log("res data is", res.data);
        if (res.data && res.data.length > 0) {
          let data = res.data;
          setHeading1(data[0].heading1);
          setDescription1(data[0].description1);
          setDescription2(data[0].description2);
          setId(data[0].id);
          if (data[0].picture !== null && data[0].picture !== undefined) {
            setUrlImageExist(true);
            setImage(process.env.REACT_APP_API_URL + "/" + data[0].picture);
          } else {
            setUrlImageExist(false);
          }
          if (data[0].picture2 !== null && data[0].picture2 !== undefined) {
            setUrlImageExist2(true);
            setImage2(process.env.REACT_APP_API_URL + "/" + data[0].picture2);
          } else {
            setUrlImageExist2(false);
          }
          if (data[0].picture3 !== null && data[0].picture3 !== undefined) {
            setUrlImageExist3(true);
            setImage3(process.env.REACT_APP_API_URL + "/" + data[0].picture3);
          } else {
            setUrlImageExist3(false);
          }
        }
      })
      .catch((err) => {
        // console.log(e);
        //   alert(err)
      });
  }, []);

  const updateData = (e) => {
    const { name, value } = e.e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setData((prevState) => ({
      ...prevState,
      [e.err]: false,
    }));
  };
  const updateDataDescription = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.name]: e.data,
    }));

    setData((prevState) => ({
      ...prevState,
      [e.err]: false,
    }));
  };
  const setErrors = (name) => {
    setData((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };

  const conditionsChecking = (e) => {
    if (data.heading1 === "" || !data.heading1) {

      setErrors("headingError1");
    } else if (data.description1 === "" || !data.description1) {
      setErrors("descriptionError1");
    }
    else if (data.heading2 === "" || !data.heading2) {
      // setHeading1Error(true);
      setErrors("headingError2");
    } else if (data.description2 === "" || !data.description2) {
      setErrors("descriptionError2");
    }
    else if (data.heading3 === "" || !data.heading3) {
      // setHeading1Error(true);
      setErrors("headingError3");
    } else if (data.description3 === "" || !data.description3) {
      setErrors("descriptionError3");
    }
    else if (data.heading4 === "" || !data.heading4) {
      // setHeading1Error(true);
      setErrors("headingError4");
    } else if (data.description4 === "" || !data.description4) {
      setErrors("descriptionError4");
    }
    else if (data.heading5 === "" || !data.heading5) {
      // setHeading1Error(true);
      setErrors("headingError5");
    } else if (data.description5 === "" || !data.description5) {
      setErrors("descriptionError5");
    }
    else if (data.heading6 === "" || !data.heading6) {
      // setHeading1Error(true);
      setErrors("headingError6");
    } else if (data.description6 === "" || !data.description6) {
      setErrors("descriptionError6");
    }
    else if (data.heading7 === "" || !data.heading7) {
      // setHeading1Error(true);
      setErrors("headingError7");
    } else if (data.description7 === "" || !data.description7) {
      setErrors("descriptionError7");
    }

    else if (data.heading8 === "" || !data.heading8) {
      // setHeading1Error(true);
      setErrors("headingError8");
    } else if (data.description8 === "" || !data.description8) {
      setErrors("descriptionError8");
    } else {
      return true;
    }
  };

  const onsubmit = (e) => {
    console.log(data.heading1, data.description2, data.description1);
    e.preventDefault();
    console.log("submitting the form");

    if (conditionsChecking()) {
      setIsLoading(true);

      var method = "PUT";
      var url = `manage_data_methodology/${id}`;
      if (id === "") {
        method = "POST";
        url = "data_methodology";
      }
      e.preventDefault();
      var formdata = new FormData();
      formdata.append("heading1", data.heading1);
      formdata.append("description1", data.description1);
      formdata.append("description2", data.description2);
      if (selectedImage !== "") {
        console.log("check image", selectedImage);

        formdata.append("picture", selectedImage);
      }
      if (selectedImage2 !== "") {
        formdata.append("picture2", selectedImage2);
      }
      if (selectedImage3 !== "") {
        formdata.append("picture3", selectedImage3);
      }

      // var data = {
      //   heading1: data.heading1,
      //   description1: data.description1,
      //   description2: data.description2,
      // };
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
          console.log(" this is log", err.response);
          setIsLoading(false);
        });
    }
  };
  const imageSelector = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setUrlImageExist(true);
      setSelecteImage(e.target.files[0]);
    }
  };
  const imageSelector2 = (e) => {
    if (e.target.files[0]) {
      setImage2(URL.createObjectURL(e.target.files[0]));
      setUrlImageExist2(true);
      setSelecteImage2(e.target.files[0]);
    }
  };
  const imageSelector3 = (e) => {
    if (e.target.files[0]) {
      setImage3(URL.createObjectURL(e.target.files[0]));
      setUrlImageExist3(true);
      setSelecteImage3(e.target.files[0]);
    }
  };
  return (
    <div className="">
      {/* {redirect ? <Redirect to="/logout" /> : null} */}

      <div id="wrapper">
        <Sidebar />
        <div className="content-page">
          <Topbar link_to="/" current_page="Landing Page" />

          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card-box">
                    <form method="post">
                      <Input
                        updateData={(e) => updateData(e)}
                        value={data.heading1}
                        headingError={data.headingError1}
                        label={"Heading1"}
                        name="heading1"
                        error="headingError1"
                      />

                      <CkEditor
                        label={"Description1"}
                        descriptionError={data.descriptionError1}
                        description={data.description1}
                        // setDescription = {e=>setDescription1(e)}
                        setDescriptionError={(e) => setDescriptionError1(false)}
                        descriptionErrorName="descriptionError1"
                        name="description1"
                        updateDataDescription={(e) => updateDataDescription(e)}
                      />

                      <Input
                        updateData={(e) => updateData(e)}
                        value={data.heading2}
                        headingError={data.headingError2}
                        label={"Heading2"}
                        name="heading2"
                        error="headingError2"
                      />

                      <CkEditor
                        label={"Description2"}
                        descriptionError={data.descriptionError2}
                        description={data.description2}
                        descriptionErrorName="descriptionError2"
                        name="description2"
                        updateDataDescription={(e) => updateDataDescription(e)}
                      />

                      <Input
                        updateData={(e) => updateData(e)}
                        value={data.heading3}
                        headingError={data.headingError3}
                        label={"Heading3"}
                        name="heading3"
                        error="headingError3"
                      />

                      <CkEditor
                        label={"Description3"}
                        descriptionError={data.descriptionError3}
                        description={data.description3}
                        descriptionErrorName="descriptionError3"
                        name="description3"
                        updateDataDescription={(e) => updateDataDescription(e)}
                      />
                      <Input
                        updateData={(e) => updateData(e)}
                        value={data.heading4}
                        headingError={data.headingError4}
                        label={"Heading4"}
                        name="heading4"
                        error="headingError4"
                      />

                      <CkEditor
                        label={"Description4"}
                        descriptionError={data.descriptionError4}
                        description={data.description4}
                        descriptionErrorName="descriptionError4"
                        name="description4"
                        updateDataDescription={(e) => updateDataDescription(e)}
                      />     
                  <Input
                        updateData={(e) => updateData(e)}
                        value={data.heading5}
                        headingError={data.headingError5}
                        label={"Heading5"}
                        name="heading5"
                        error="headingError5"
                      />

                      <CkEditor
                        label={"Description5"}
                        descriptionError={data.descriptionError5}
                        description={data.description5}
                        descriptionErrorName="descriptionError5"
                        name="description5"
                        updateDataDescription={(e) => updateDataDescription(e)}
                      />

<Input
                        updateData={(e) => updateData(e)}
                        value={data.heading6}
                        headingError={data.headingError6}
                        label={"Heading6"}
                        name="heading6"
                        error="headingError6"
                      />

                      <CkEditor
                        label={"Description6"}
                        descriptionError={data.descriptionError6}
                        description={data.description6}
                        descriptionErrorName="descriptionError6"
                        name="description6"
                        updateDataDescription={(e) => updateDataDescription(e)}
                      />
                    <Input
                        updateData={(e) => updateData(e)}
                        value={data.heading7}
                        headingError={data.headingError7}
                        label={"Heading7"}
                        name="heading7"
                        error="headingError7"
                      />

                      <CkEditor
                        label={"Description7"}
                        descriptionError={data.descriptionError7}
                        description={data.description7}
                        descriptionErrorName="descriptionError7"
                        name="description7"
                        updateDataDescription={(e) => updateDataDescription(e)}
                      />

                      <Input
                        updateData={(e) => updateData(e)}
                        value={data.heading8}
                        headingError={data.headingError8}
                        label={"Heading8"}
                        name="heading8"
                        error="headingError8"
                      />

                      <CkEditor
                        label={"Description8"}
                        descriptionError={data.descriptionError8}
                        description={data.description8}
                        descriptionErrorName="descriptionError8"
                        name="description8"
                        updateDataDescription={(e) => updateDataDescription(e)}
                      />
                      <div className="col-xs-12 col-sm-4">
                              <div className="profile_holder">
                                {urlImageExist ? (
                                  <img
                                    style={{
                                      width: "100%",
                                      height: "350px",
                                      borderRadius: "5px",
                                    }}
                                    src={`${image}`}
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
                                  <button className="btn">
                                    Choose picture
                                  </button>
                                  <input
                                    type="file"
                                    name="myfile"
                                    accept="image/*"
                                    onChange={(e) => imageSelector(e)}
                                  />
                                </div>
                              </div>
                            </div>

                      <div className="form-group m-b-20 row">
                        <div className="col-12">
                          <div className="row" style={{ marginTop: "30px" }}>
                            <div className="col-xs-12 col-sm-4">
                              <div className="profile_holder">
                                {urlImageExist ? (
                                  <img
                                    style={{
                                      width: "100%",
                                      height: "350px",
                                      borderRadius: "5px",
                                    }}
                                    src={`${image}`}
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
                                  <button className="btn">
                                    Choose picture
                                  </button>
                                  <input
                                    type="file"
                                    name="myfile"
                                    accept="image/*"
                                    onChange={(e) => imageSelector(e)}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-xs-12 col-sm-4">
                              <div className="profile_holder">
                                {urlImageExist2 ? (
                                  <img
                                    style={{
                                      width: "100%",
                                      height: "350px",
                                      borderRadius: "5px",
                                    }}
                                    src={`${image2}`}
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
                                  <button className="btn">
                                    Choose picture
                                  </button>
                                  <input
                                    type="file"
                                    name="myfile"
                                    accept="image/*"
                                    onChange={(e) => imageSelector2(e)}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-xs-12 col-sm-4">
                              <div className="profile_holder">
                                {urlImageExist3 ? (
                                  <img
                                    style={{
                                      width: "100%",
                                      height: "350px",
                                      borderRadius: "5px",
                                    }}
                                    src={`${image3}`}
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
                                  <button className="btn">
                                    Choose picture
                                  </button>
                                  <input
                                    type="file"
                                    name="myfile"
                                    accept="image/*"
                                    onChange={(e) => imageSelector3(e)}
                                  />
                                </div>
                              </div>
                            </div>
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

          {/* <footer className="footer">
    2021 © Aptilion.
</footer> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
