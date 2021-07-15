import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonLoader from "../components/ButtonLoader";
import Sidebar from "../components/Sidebar";
import placeholder from "../img/placeholder.png";
import Input from "../components/Input";
import CkEditor from "../components/CkEditor";
import Topbar from "../components/Topbar";
import ImageSelection from "../components/ImageSelection";

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

  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const [urlImageExist, setUrlImageExist] = useState(false);
  const [urlImageExist2, setUrlImageExist2] = useState(false);
  const [urlImageExist3, setUrlImageExist3] = useState(false);
  const [urlImageExist4, setUrlImageExist4] = useState(false);
  const [urlImageExist5, setUrlImageExist5] = useState(false);
  const [urlImageExist6, setUrlImageExist6] = useState(false);
  const [urlImageExist7, setUrlImageExist7] = useState(false);
  const [urlImageExist8, setUrlImageExist8] = useState(false);
  
  const [image, setImage] = useState("");
  const [selectedImage, setSelecteImage] = useState("");
  const [image2, setImage2] = useState("");
  const [selectedImage2, setSelecteImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [selectedImage3, setSelecteImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [selectedImage4, setSelecteImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [selectedImage5, setSelecteImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [selectedImage6, setSelecteImage6] = useState("");
  const [image7, setImage7] = useState("");
  const [selectedImage7, setSelecteImage7] = useState("");
  const [image8, setImage8] = useState("");
  const [selectedImage8, setSelecteImage8] = useState("");

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/admin_app/landing_page/`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
      .then((res) => {
        console.log("res data is", res.data);

        return res.data;

      })
      .then((res) => {

        
        if (res.data && res.data.length > 0) {
          let data = res.data;
          console.log("res data is", data);


          setData({
            heading1: data[0].heading1,
            heading2: data[0].heading2,
            heading3: data[0].heading3,
            heading4: data[0].heading4,
            heading5: data[0].heading5,
            heading6: data[0].heading6,
            heading7: data[0].heading7,
            heading8: data[0].heading8,
        
            headingError1: false,
            headingError2: false,
            headingError3: false,
            headingError4: false,
            headingError5: false,
            headingError6: false,
            headingError7: false,
            headingError8: false,
        
            description1: data[0].description1,
            description2: data[0].description2,
            description3: data[0].description3,
            description4: data[0].description4,
            description5: data[0].description5,
            description6: data[0].description6,
            description7: data[0].description7,
            description8: data[0].description8,
        
            descriptionError1: false,
            descriptionError2: false,
            descriptionError3: false,
            descriptionError4: false,
            descriptionError5: false,
            descriptionError6: false,
            descriptionError7: false,
            descriptionError8: false,
          })

          setId(data[0].id);
// **************** setting images ******************
          if (data[0].image1 !== null && data[0].image1 !== undefined) {
            setUrlImageExist(true);
            setImage(process.env.REACT_APP_API_URL + "/" + data[0].image1);
          } else {
            setUrlImageExist(false);
          }
          if (data[0].image2 !== null && data[0].image2 !== undefined) {
            setUrlImageExist2(true);
            setImage2(process.env.REACT_APP_API_URL + "/" + data[0].image2);
          } else {
            setUrlImageExist2(false);
          }
          if (data[0].image3 !== null && data[0].image3 !== undefined) {
            setUrlImageExist3(true);
            setImage3(process.env.REACT_APP_API_URL + "/" + data[0].image3);
          } else {
            setUrlImageExist3(false);
          }

          if (data[0].image4 !== null && data[0].image4 !== undefined) {
            setUrlImageExist4(true);
            setImage4(process.env.REACT_APP_API_URL + "/" + data[0].image4);
          } else {
            setUrlImageExist4(false);
          }
          if (data[0].image5 !== null && data[0].image5 !== undefined) {
            setUrlImageExist5(true);
            setImage5(process.env.REACT_APP_API_URL + "/" + data[0].image5);
          } else {
            setUrlImageExist5(false);
          }
          if (data[0].image6 !== null && data[0].image6 !== undefined) {
            setUrlImageExist6(true);
            setImage6(process.env.REACT_APP_API_URL + "/" + data[0].image6);
          } else {
            setUrlImageExist6(false);
          }

          if (data[0].image7 !== null && data[0].image7 !== undefined) {
            setUrlImageExist7(true);
            setImage7(process.env.REACT_APP_API_URL + "/" + data[0].image7);
          } else {
            setUrlImageExist7(false);
          }
          if (data[0].image8 !== null && data[0].image8 !== undefined) {
            setUrlImageExist8(true);
            setImage8(process.env.REACT_APP_API_URL + "/" + data[0].image8);
          } else {
            setUrlImageExist8(false);
          }

        }
      })
      .catch((err) => {
        console.log(err.response);
          alert(err.response)
      });
  }, []);

// *************** update input heading fields ***********
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
  // *************** update editor description fields ***********

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
  // *************** set errors ***********

  const setErrors = (name) => {
    setData((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };

  // *************** error handling if any field is empty ***********

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
// *************** submit the data ***********

  const onsubmit = (e) => {

    e.preventDefault();
    if (conditionsChecking()) {
      setIsLoading(true);

      var method = "PUT";
      var url = `manage_landing_page/${id}`;
      if (id === "") {
        method = "POST";
        url = "landing_page";
      }
      e.preventDefault();
      var formdata = new FormData();
      formdata.append("heading1", data.heading1);
      formdata.append("heading2", data.heading2);
      formdata.append("heading3", data.heading3);
      formdata.append("heading4", data.heading4);
      formdata.append("heading5", data.heading5);
      formdata.append("heading6", data.heading6);
      formdata.append("heading7", data.heading7);
      formdata.append("heading8", data.heading8);

      formdata.append("description1", data.description1);
      formdata.append("description2", data.description2);

      formdata.append("description3", data.description3);
      formdata.append("description4", data.description4);
      formdata.append("description5", data.description5);
      formdata.append("description6", data.description6);
      formdata.append("description7", data.description7);
      formdata.append("description8", data.description8);

      if (selectedImage !== "") {
        console.log("check image", selectedImage);

        formdata.append("image1", selectedImage);
      }
      if (selectedImage2 !== "") {
        formdata.append("image2", selectedImage2);
      }
      if (selectedImage3 !== "") {
        formdata.append("image3", selectedImage3);
      }

      if (selectedImage3 !== "") {
        formdata.append("image4", selectedImage4);
      }if (selectedImage3 !== "") {
        formdata.append("image5", selectedImage5);
      }if (selectedImage3 !== "") {
        formdata.append("image6", selectedImage6);
      }if (selectedImage3 !== "") {
        formdata.append("image7", selectedImage7);
      }if (selectedImage3 !== "") {
        formdata.append("image8", selectedImage8);
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
          console.log(" this is log", err.response);
          setIsLoading(false);
        });
    }
  };

  // *************** images selection ***********

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
  const imageSelector4 = (e) => {
    if (e.target.files[0]) {
      setImage4(URL.createObjectURL(e.target.files[0]));
      setUrlImageExist4(true);
      setSelecteImage4(e.target.files[0]);
    }
  };
  const imageSelector5 = (e) => {
    if (e.target.files[0]) {
      setImage5(URL.createObjectURL(e.target.files[0]));
      setUrlImageExist5(true);
      setSelecteImage5(e.target.files[0]);
    }
  };
  const imageSelector6 = (e) => {
    if (e.target.files[0]) {
      setImage6(URL.createObjectURL(e.target.files[0]));
      setUrlImageExist6(true);
      setSelecteImage6(e.target.files[0]);
    }
  };
  const imageSelector7 = (e) => {
    if (e.target.files[0]) {
      setImage7(URL.createObjectURL(e.target.files[0]));
      setUrlImageExist7(true);
      setSelecteImage7(e.target.files[0]);
    }
  };
  const imageSelector8 = (e) => {
    if (e.target.files[0]) {
      setImage8(URL.createObjectURL(e.target.files[0]));
      setUrlImageExist8(true);
      setSelecteImage8(e.target.files[0]);
    }
  };

  return (
    <div className="">
      {/* {redirect ? <Redirect to="/logout" /> : null} */}

      <div id="wrapper">
        <Sidebar />
        <div className="content-page">
          <Topbar link_to="/" current_page="Landing" />

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
                        descriptionErrorName="descriptionError1"
                        name="description1"
                        updateDataDescription={(e) => updateDataDescription(e)}
                      />
                       <div className="form-group m-b-20 row">
                        <div className="col-12">
                          <div className="row" style={{ marginTop: "30px" }}>
                            <ImageSelection
                            urlImageExist = {urlImageExist}
                            image = {image}
                            imageSelector = {e => imageSelector(e)}

                            />
                             <ImageSelection
                            urlImageExist = {urlImageExist2}
                            image = {image2}
                            imageSelector = {e => imageSelector2(e)}

                            />


                           </div>
                        </div>
                      </div>

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
                      
                      <div className="form-group m-b-20 row">
                        <div className="col-12">
                          <div className="row" style={{ marginTop: "30px" }}>
                            <ImageSelection
                            urlImageExist = {urlImageExist3}
                            image = {image3}
                            imageSelector = {e => imageSelector3(e)}

                            />
                          
                           </div>
                        </div>
                      </div>

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
                    <div className="form-group m-b-20 row">
                        <div className="col-12">
                          <div className="row" style={{ marginTop: "30px" }}>
                            <ImageSelection
                            urlImageExist = {urlImageExist4}
                            image = {image4}
                            imageSelector = {e => imageSelector4(e)}

                            />
                          
                           </div>
                        </div>
                      </div>

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

                       <div className="form-group m-b-20 row">
                        <div className="col-12">
                          <div className="row" style={{ marginTop: "30px" }}>
                            <ImageSelection
                            urlImageExist = {urlImageExist5}
                            image = {image5}
                            imageSelector = {e => imageSelector5(e)}

                            />
                          
                           </div>
                        </div>
                      </div>  
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
                       <div className="form-group m-b-20 row">
                        <div className="col-12">
                          <div className="row" style={{ marginTop: "30px" }}>
                            <ImageSelection
                            urlImageExist = {urlImageExist6}
                            image = {image6}
                            imageSelector = {e => imageSelector6(e)}

                            />
                          
                           </div>
                        </div>
                      </div>
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
                       <div className="form-group m-b-20 row">
                        <div className="col-12">
                          <div className="row" style={{ marginTop: "30px" }}>
                            <ImageSelection
                            urlImageExist = {urlImageExist7}
                            image = {image7}
                            imageSelector = {e => imageSelector7(e)}

                            />
                          
                           </div>
                        </div>
                      </div>

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
                     
                      <div className="form-group m-b-20 row">
                        <div className="col-12">
                          <div className="row" style={{ marginTop: "30px" }}>
                            <ImageSelection
                            urlImageExist = {urlImageExist8}
                            image = {image8}
                            imageSelector = {e => imageSelector8(e)}

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

          {/* <footer className="footer">
    2021 © Aptilion.
</footer> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
