const Button = ({ text, btn }) => {
  return (
    <button className={`${btn}  py-[0.7rem] rounded-full font-semibold`}>
      {text}
    </button>
  );
};

export default Button;
