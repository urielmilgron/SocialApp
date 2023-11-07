import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        alignSelf:'center',
        flexDirection:'row',
    },
    messageInputContainer:{
        width:'80%',
    },
    messageInput:{
        textAlign:'left',
        textAlignVertical:'top',
        padding:5,
        borderRightWidth:1
    },
    buttonsContainer:{
        width:'20%',
        justifyContent:'center'
    },
    button:{
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
})