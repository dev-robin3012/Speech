const formRegex = {
  name: /^[A-Z]+/,
  email: /^[A-Za-z0-9_.+-]+@[a-zA-Z]+\.[a-z]+/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
};

export default formRegex;
