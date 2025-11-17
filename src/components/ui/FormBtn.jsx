export default function FormBtn({ label, type, onClick }) {
  return (
    <div className="form-btn">
      <button type={type} onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
