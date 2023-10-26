import { StyleSheet } from "react-native";
import { colorsPallete } from "../../constants/colorsPallete";

export default styles = StyleSheet.create({
    container:{
        flex:1
    },
    loginContainer:{
        marginTop:'10%',
        justifyContent:'space-evenly',
        alignItems:'center',
        height:350,
        width:'80%',
        alignSelf:'center',
        borderColor:'black',
        borderWidth:0.4,
        shadowColor:'blue',
        borderRadius:2
    },
    textInput:{
        borderColor:'black',
        borderWidth:1,
        width:'80%',
        paddingLeft:10,
        paddingRight:10
    },
    button:{
        backgroundColor:colorsPallete.primaryColor,
        width:'40%',
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2
    },
    buttonSign:{
        backgroundColor:colorsPallete.secondaryColor
    }
})