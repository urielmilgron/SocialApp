import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    width:'90%',

    alignSelf:'center',
    flexDirection:'column',
    borderWidth:1,
    // width: "90%",
    // maxHeight: 200,
    // justifyContent: "space-between",
    // alignSelf:'center',
    // borderWidth:1,
    // alignItems:"stretch",
  },
 
  textInputContainer: {
    borderBottomWidth:1
    // maxHeight: 190,
    // backgroundColor: "white",
    // height: "70%",
  },
  textInput: {
    padding:5,
    textAlign:'left',
    textAlignVertical:'top',
    // padding: 10,
    // textAlign: "left",
    // textAlignVertical: "top",
  },
  buttonsContainer:{
    height:35,
    width:'100%'
    // height:40,
    // flexDirection:'row',
  },
  button:{
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
    // width:'50%',
    // alignItems:'center',
    // justifyContent:'center',
    // borderTopWidth:1,

  },
  textButton:{

  }
});