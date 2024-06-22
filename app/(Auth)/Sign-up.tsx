import Auth from "@/components/Auth/Auth";
import React from "react";
import {   View } from "react-native";

const SignUp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor:"white" }}>
      <Auth Auth_Taype="Sign-up" />
    </View>
  );
};


export default SignUp;
