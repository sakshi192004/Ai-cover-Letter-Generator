const InputField = ({
  icon,
  label,
  name,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="mb-7 w-full">
      <label className="flex items-center gap-2 text-sm sm:text-base font-semibold text-slate-700 mb-2">
        <span className="text-indigo-600">{icon}</span>
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="
w-full
bg-slate-50
border-2
border-slate-200
rounded-2xl
px-5
py-3
sm:py-4
text-base
sm:text-lg
text-slate-800
placeholder:text-slate-400
outline-none
transition-all
duration-300
focus:bg-white
focus:border-indigo-500
focus:ring-4
focus:ring-indigo-100
hover:border-indigo-300
shadow-sm
"
      />
    </div>
  );
};

export default InputField;