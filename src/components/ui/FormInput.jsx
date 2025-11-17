export default function FormInput({ label, type, name, value, onChange, placeholder }) {
  return (
    <div className="form-input">
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
  );
}