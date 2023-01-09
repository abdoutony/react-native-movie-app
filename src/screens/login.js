import {
    View,
    Image,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import { useForm, Controller } from "react-hook-form";
  import { yupResolver } from "@hookform/resolvers/yup";
  import { loginSchema } from "../helper/validations";
  const LoginScreen = ({ navigation })=>{
  
     const {
      register,
      setValue,
      handleSubmit,
      control,
      reset,
      formState: { errors },
    } = useForm({ resolver: yupResolver(loginSchema) });
    const onSubmit = (data) => {
      const {email,password} = data
      console.log(data);
      navigation.navigate('main')
    };
  
    const onError = (errors, e) => {
      return errors;
    };
  
       return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/fakelogo.png")}
        />
        <Text style={styles.heading}>Login to your account </Text>
        <View style={{ width: "100%", marginTop: 20 }}>
          <SafeAreaView>
             <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                placeholder="Enter your email"
                  style={styles.inputStyle}
                  onBlur={onBlur }
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              name="email"
            />
            <Text style={{color:"red",marginLeft:25}}>{errors.email?.message}</Text>
              <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextInput
              placeholder="Enter your password"
              secureTextEntry={true}
                style={styles.inputStyle}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="password"
          
          />
          <Text style={{color:"red",marginLeft:25}}>{errors.password?.message}</Text>
            <TouchableOpacity
             style={styles.authLink}
             onPress={()=>navigation.navigate('Register')}>
            <Text style={{color:'#001f2b'}}>Don't have an account register </Text>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.loginBtn}>
              <Text style={{ color: "#fbfbfb" }}>Login</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </View>
    );
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#003D57",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    tinyLogo: {
      width: 200,
      height: 80,
    },
    heading: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 30,
      color: "#F1595B",
    },
    inputStyle: {
      width: "93%",
      height: 55,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: "#3E547A",
      borderColor: "#3E547A",
      borderRadius: 20,
      color: "#fbfbfb",
    },
    loginBtn: {
      height: 50,
      width: "92%",
      borderRadius: 10,
      backgroundColor: "#F1595B",
      marginLeft: 15,
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
    },
    authLink:{
      marginTop:10,
      alignItems:"center",
    }
  });
  
  export default LoginScreen