import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        width: '90%',
        alignSelf:'center',
        borderRadius:2,
        borderWidth:1,
        flexDirection:'row',
        alignItems:'stretch',
        marginTop:5,
        marginBottom:5
    },
    imageContainer:{
        width:30,
        height:30,
        marginLeft:4,
        marginRight:4,
        marginTop:5
    },
    imageProfile:{
        width:'100%',
        height:'100%',
        borderRadius:30/2,
    },
    nameCommentTimeContainer:{
        width:'85%'
    },
    nameContainer:{
        marginBottom:2,
        marginTop:2
    },
    userNameText:{
        fontWeight:"500"
    },
    timeText:{
        fontSize:10,
        color:'grey'
    }
    
})