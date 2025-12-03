import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
// Form Imports
import Alert from "./test/Alert";
import FormBtn from "./ui/FormBtn";
import FormInput from "./ui/FormInput";
import FormSelect from "./ui/FormSelect";
export default () => {
  const expectedSalaries = ["2000$", "3000$", "4000$", "5000$"];
  let [showAlert, setShowAlert] = useState(true);
  let [alertType, setAlertType] = useState("success");
  let [errors, setError] = useState([]);

  let [formData, setFormData] = useState({
    name: "",
    age: 0,
    phonenumber: 0,
    isEmployee: false,
    salary: null,
  });
  //validation
  const required = (value, fieldName) => {
    if (!value) {
      return `the ${fieldName} is required`;
    } else {
      return null;
    }
  };
  const ageBetween = (age) => {
    if (age >= 18 && age <= 40) {
      return null;
    } else {
      return "Age must be between 18 and 40";
    }
  };
  const phonenumber = (number) => {
    let digitCount = String(number).length;
    if (digitCount >= 9 && digitCount <= 12) {
      return null;
    } else {
      return "The Phone Number must be between 9 & 12";
    }
  };
  // Submet The Form
  const handelFormSubmit = () => {
    // تجميعع الأخطاء
    const validationErrors = [
      required(formData.name, "Name"),
      required(formData.age, "Age"),
      required(formData.phonenumber, "PhoneNumber"),
      ageBetween(formData.age),
      phonenumber(formData.phonenumber),
    ].filter((erroe) => erroe !== null);

    //
    if (validationErrors.length > 0) {
      setError(validationErrors);
      setShowAlert(true);
      setAlertType("error");
    } else {
      setShowAlert(true);
      setAlertType("success");
      setError(["Form sent Sucsessfuly"]);
    }
  };
  //

    let myUser = useContext(UserContext)
    console.log('my contexs we have are: ', myUser);
  return (
    <>
      <form className="form-app" action="">
        <h3>Holla {JSON.stringify(myUser)} </h3>
        <FormInput
          name="name"
          label="Name"
          placeholder="name"
          type="text"
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
        <FormInput
          name="phonenumber"
          label="Phonenumber"
          placeholder="Enter your phonenumber"
          type="number"
          onChange={(e) => {
            setFormData({ ...formData, phonenumber: e.target.value });
          }}
        />
        <FormInput
          name="age"
          label="Age"
          placeholder="Enter your age"
          type="number"
          onChange={(e) => {
            setFormData({ ...formData, age: e.target.value });
          }}
        />
        <FormInput
          name="employee"
          label="Are you employee?"
          type="checkbox"
          onChange={(e) => {
            setFormData({ ...formData, isEmployee: e.target.checked });
          }}
        />
        <FormSelect
          name="formSelect"
          label="Expected Salary"
          options={expectedSalaries}
          onChange={(e) => {
            setFormData({ ...formData, salary: e.target.value });
          }}
        />
        <FormBtn
          onClick={() => {
            handelFormSubmit();
          }}
          label="Submit"
          type="button"
        />
        {
          showAlert &&
            Array.isArray(errors) &&
            errors.length > 0 &&
            errors
              .map((textMsg, i) =>
                textMsg && textMsg.toString().trim() !== "" ? (
                  <Alert key={i} message={textMsg} type={alertType} />
                ) : null
              )
              .filter(Boolean) // إزالة العناصر null
        }
      </form>
    </>
  );
};
