import React from "react";

function useAuth() {
  const user = JSON.parse(localStorage.getItem("loginUser"));

  const isLogin = user ? true : false;
  return { isLogin, user };
}

export default useAuth;
