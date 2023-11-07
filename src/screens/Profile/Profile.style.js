import { StyleSheet } from "react-native";
import { colorsPallete } from "../../constants/colorsPallete";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    imageAndButtons:{
        width:'50%',
        height:'60%',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    imageContainer:{
        width:135,
        height:135,
        justifyContent:'space-between',

    },
    userNameText:{
        alignSelf:'center'
    },
    image:{
        width:'80%',
        height:'80%',
        borderRadius:100,
        borderColor:'black',
        borderWidth:1,
        shadowColor:'blue',
        alignSelf:'center'
    },
    button:{
        backgroundColor:colorsPallete.primaryColor,
        width:'75%',
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:2,
    },
    buttonOff:{
        backgroundColor:'red',
        width:'30%',
    },
    error:{
        color:'red',
        width:'100%',
        textAlign:'center',
    }
})