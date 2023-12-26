import { StyleSheet } from "react-native";
import { colorsPallete } from "../../constants/colorsPallete";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    loginContainer:{
        justifyContent:'space-evenly',
        alignItems:'center',
        height:'70%',
        width:'80%',
        alignSelf:'center',
        borderColor:'black',
        borderWidth:0.4,
        shadowColor:'blue',
        borderRadius:2,
    },
    textInput:{
        borderColor:'black',
        borderWidth:1,
        borderRadius:2,
        width:'80%',
        height:'12%',
        paddingLeft:10,
        paddingRight:10
    },
    button:{
        backgroundColor:colorsPallete.primaryColor,
        width:'40%',
        height:'10%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2
    },
    buttonSign:{
        backgroundColor:colorsPallete.secondaryColor,
        height:'50%'
    },
    containerSignup:{
        height:'20%',
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'column'
    }
})