export function Field({
  label = "",
  onChange,
  name = "",
  value = "",
  defaultValue = "",
}) {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <div className="form-group">
        <input
          defaultValue={defaultValue}
          name={name}
          onChange={onChange}
          // value={value}
          size="small"
          label={label}
          className="input-field"
        />
      </div>
    </div>
  );
}
