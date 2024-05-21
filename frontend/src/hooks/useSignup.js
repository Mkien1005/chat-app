import React from "react";

export default function useSignup() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmpw: "",
    gender: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return {
    inputs,
    setInputs,
    handleSubmit,
  };
}
