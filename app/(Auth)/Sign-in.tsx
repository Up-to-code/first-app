import Auth from "@/components/Auth/Auth";
import { View } from "react-native";

const SignIn = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Auth Auth_Taype="Sign-in" />
    </View>
  );
};

export default SignIn;
