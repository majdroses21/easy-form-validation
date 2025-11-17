import "./App.css";
import Alert from "./components/test/Alert";
import FormBtn from "./components/ui/FormBtn";
import FormInput from "./components/ui/FormInput";
import FormSelect from "./components/ui/FormSelect";
function App() {
  const expectedSalaries = ['2000$', '3000$', '4000$', '5000$']
  return (
    <div className="App">
      <form className="form-app" action="">
        <FormInput name='name' label="Name" placeholder="name" type="text" />
        <FormInput name='phonenumber' label="Phonenumber" placeholder="Enter your phonenumber" type="number" />
        <FormInput name='age' label="Age" placeholder="Enter your age" type="number" />
        <FormInput name='employee' label="Are you employee?" type="checkbox" />
        <FormSelect name='formSelect' label='Expected Salary' options={expectedSalaries} />
        <FormBtn label='Submit' type='button' />
        <Alert message="This is an error alert" type="error" />
        <Alert message="This is a success alert" type="success" />
      </form>
    </div>
  );
}

export default App;
