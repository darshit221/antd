function useRegister(values) {
  const AllUsers = JSON.parse(localStorage.getItem("registerUsers"));

  if (!AllUsers) {
    return false;
  }
  const isRegister = Object.entries(AllUsers).some((user) => {
    return (
      user[1].username === values.username &&
      user[1].password === values.password
    );
  });

  return isRegister;
}

export default useRegister;
