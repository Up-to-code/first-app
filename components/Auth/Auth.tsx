import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import Colors from "@/lib/Color";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "@/firebase/Firebase_Confing";

import { useRouter } from "expo-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
interface Props {
  Auth_Taype: "Sign-in" | "Sign-up";
}
const Auth = ({ Auth_Taype }: Props) => {
  const reouter = useRouter();
  const [isFocused, setIsFocused] = React.useState(false);
  const [isFocused1, setIsFocused1] = React.useState(false);

  const [isSignInLoading, setIsSignInLoading] = React.useState(false);
  const [isSignUpLoading, setIsSignUpLoading] = React.useState(false);
  const [inputEmail, setOtpy] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");

  const onSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail)) {
      Alert.alert("Invalid email address");
      return;
    }
    if (inputPassword.length < 6) {
      Alert.alert("Password must be at least 6 characters long");
      return;
    }

    if (Auth_Taype == "Sign-in") {
      try {
        setIsSignInLoading(true);
        await signInWithEmailAndPassword(auth, inputEmail, inputPassword);
      } catch (error) {
        setIsSignInLoading(false);
        alert("Invalid email or password");
        return;
      }
    } else if (Auth_Taype == "Sign-up") {
      try {
        setIsSignUpLoading(true);
        await createUserWithEmailAndPassword(
          auth,
          inputEmail,
          inputPassword
        ).then(() => {
          reouter.replace("/app");
        });
      } catch (error) {
        setIsSignUpLoading(false);
        alert("Invalid email or password");
        return;
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              maxWidth: 300,
              paddingHorizontal: 20,
            }}
          >
            <Text style={styles.Signin}>{Auth_Taype}</Text>

            <View style={styles.inputBox}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                placeholder="Email"
                placeholderTextColor={"gray"}
                style={[
                  styles.input,
                  {
                    borderBottomColor: isFocused1 ? Colors.main : "gray",
                  },
                ]}
                onChange={(e) => setOtpy(e.nativeEvent.text)}
                onFocus={() => {
                  setIsFocused1(true);
                }}
                onBlur={() => {
                  setIsFocused1(false);
                }}
                textContentType="emailAddress"
                keyboardType="email-address"
                cursorColor={Colors.main}
                blurOnSubmit
              />

              <Text style={styles.label}>Password</Text>
              <TextInput
                placeholder="Password"
                placeholderTextColor={"gray"}
                style={[
                  styles.input,
                  {
                    borderBottomColor: isFocused ? Colors.main : "gray",
                  },
                ]}
                onChange={(e) => setInputPassword(e.nativeEvent.text)}
                textContentType="password"
                secureTextEntry
                cursorColor={Colors.main}
                blurOnSubmit
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={() => {
                  setIsFocused(false);
                }}
              />

              <Text
                style={styles.bottn}
                onPress={() => onSubmit()}
                disabled={
                  Auth_Taype === "Sign-in" ? isSignInLoading : isSignUpLoading
                }
              >
                {Auth_Taype === "Sign-in" ? "Sign in" : "Create an account"}
              </Text>
            </View>

            <Text
              style={[
                styles.bottn,
                {
                  marginTop: 20,
                  color: Colors.main,
                  backgroundColor: Colors.light,
                },
              ]}
              onPress={() => {
                Auth_Taype === "Sign-in"
                  ? reouter.replace("/Sign-up")
                  : reouter.replace("/Sign-in");
              }}
            >
              {Auth_Taype === "Sign-in" ? "Create an account" : "Sign in"}
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Auth;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  Signin: {
    fontSize: 20,
    marginVertical: 20,
    color: Colors.main,
    fontWeight: "bold",
  },
  inputBox: {
    marginVertical: 20,
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: "gray",
    width: "100%",
    textAlign: "left",
  },
  input: {
    height: 40,
    width: 250,
    marginVertical: 10,
    padding: 10,
    backgroundColor: Colors.light,
    borderRadius: 10,
    borderColor: "#8080803e",
    borderWidth: 1,
  },
  bottn: {
    backgroundColor: Colors.main,
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
    width: 250,
    textAlign: "center",
    borderRadius: 5,
    elevation: 2,
    shadowColor: Colors.main + "33",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
});
