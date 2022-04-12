import { Component, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/auth";

export const Private = ({ component }: any) => {
  const { token } = useAuth();
  if (!!token == false) {
    return <Navigate to="/" />;
  }
  return component;
};
