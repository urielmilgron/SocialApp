import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:10,
        marginTop:10,
        width:'98%',
        alignSelf:'center',
        flexDirection:'row',
        borderWidth:1,
        borderRadius:3,
        alignItems: 'flex-start',
        minHeight:80,
        maxHeight:150,
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
        flex:1,
        width:'80%',
        justifyContent:'space-between',
        marginLeft:5,
    },
    userText:{
        fontWeight:'700',
    },
    text:{
        flex:1,
        flexWrap:'wrap'
    },
    timeText:{
        fontSize:9,
        marginBottom:2
    }
})