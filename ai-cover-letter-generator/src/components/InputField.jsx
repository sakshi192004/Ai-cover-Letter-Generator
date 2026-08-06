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
      <label className="flex items-center justify-center  gap-3 text-[23px] font-semibold text-slate-700 mb-3 pl-1">
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
h-16
bg-slate-50
border-2
border-slate-200
rounded-2xl
pl-8
pr-6
py-4
text-xl
text-center
font-medium
text-slate-800
placeholder:text-slate-400
placeholder:text-lg
shadow-sm
outline-none
transition-all
duration-300
focus:bg-white
focus:border-indigo-500
focus:ring-4
focus:ring-indigo-100
hover:border-indigo-300
"
      />
    </div>
  );
};

export default InputField;