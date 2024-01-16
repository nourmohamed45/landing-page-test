import "./form.scss";
// Hooks
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// MUI Components
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';


function Form() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    Message: ''
  });
  const { t } = useTranslation();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  function submit(e) {
    e.preventDefault();
    console.log("submitted");
    setLoading(true);
  
    const formEle = document.querySelector("form");
    const formDataObj = new FormData(formEle);
  
    fetch("https://script.google.com/macros/s/AKfycbzN4PtNSBN1Fy4jHco7qb4eQYDAE1jaUEzwvHQ1JctJ7sN7SIJupNWRf24tIqnhB3qDGQ/exec", {
      method: "POST",
      body: formDataObj
    })
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        // Clear input fields after successful submission
        setFormData({
          Name: '',
          Email: '',
          Phone: '',
          Message: ''
        });
        // Show success alert
        setShowSuccessAlert(true);
        setLoading(false);
        // Hide success alert after 3 seconds (adjust as needed)
        setTimeout(() => setShowSuccessAlert(false), 3000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  return (
    <div className="form-container" id="formContainer">
      <div className="box">
        <form className="form" onSubmit={(e) => submit(e)}>
          <div>
            <div>
              <input
                type="text"
                name="Name"
                placeholder={t("yourName")}
                value={formData.Name}
                onChange={(e) => handleInputChange(e)}
              />
              <input
                type="email"
                name="Email"
                placeholder={t("yourEmail")}
                value={formData.Email}
                onChange={(e) => handleInputChange(e)}
              />
              <input
                type="text"
                name="Phone"
                placeholder={t("yourPhone")}
                value={formData.Phone}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div>
              <textarea
                name="Message"
                id="messageArea"
                cols={30}
                rows={10}
                type="text"
                placeholder={t("tellUsAboutYourNeeds")}
                value={formData.Message}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
          <button type="submit" disabled={loading}>{loading ? <CircularProgress color="inherit" size={20} /> : `${t("send")}`}</button>
        </form>
        {showSuccessAlert && (
          <Alert className='alert' severity="success">{t("formSubmittedSuccessfully")}</Alert>
        )}
      </div>
    </div>
  );
}

export default Form;
