import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 120,
    justifyContent: "space-between",
    alignSelf:'center',
    borderWidth:1
  },
  textInput: {
    maxHeight: "100%",
    padding: 10,
    textAlign: "left",
    textAlignVertical: "top",
  },
  textInputContainer: {
    backgroundColor: "white",
    height: "70%",
  },
  buttonsContainer:{
    height:'30%',
    flexDirection:'row',
  },
  button:{
    width:'50%',
    alignItems:'center',
    justifyContent:'center',
    borderTopWidth:1
  },
  buttonDivisor:{
    borderLeftWidth:1
  }
});
