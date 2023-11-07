import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        width:'98%',
        alignSelf:'center',
        marginBottom:4,
        marginTop:4,
        flexDirection:'row',
        borderWidth:1,
        borderRadius:3,
        alignItems: 'flex-start', 
        maxHeight: 100,
    },
    imageContainer:{
        borderRightWidth:1,
        width:'18%',
        height:'100%',
        justifyContent:'center'
    },
    image:{
        overflow:'hidden',
        width:45,
        height:45,
        alignSelf:'center',
        borderRadius:150/2
    },
    timeTextContainer:{
        width:'80%',
        justifyContent:'space-between',
        marginLeft:5,
    },
    userText:{
        fontWeight:'700'
    },
    text:{
        flexWrap:'wrap'
    },
    timeText:{
        fontSize:9,
        marginBottom:2
    }
})