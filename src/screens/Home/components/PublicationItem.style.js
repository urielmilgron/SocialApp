import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container:{
        flex:1,
        width:'90%',
        height:120,
        alignSelf:'center',
        marginTop:10,
        marginBottom:10,
        justifyContent:'space-between',
        borderWidth:1
    },
    userNamePostContainer:{
        height:'30%',
        justifyContent:'start',
        flexDirection:'row',
        borderBottomWidth:1, 
        backgroundColor:'#F0DDCE'
    },
    userNamePost:{
        marginLeft:5,
        textAlignVertical:'center',
    },
    timePost:{
        marginLeft:10,
        textAlignVertical:'center',
        fontSize:12,
        color:'#817D96'
    },
    contentPostContainer:{
        minHeight:40,
        maxHeight:60,
        width:'96.5%',
        alignSelf:'center',
        paddingTop:2,
        paddingBottom:2,
    },
    contentPost:{
        height:'auto',
        textAlignVertical:'center',
    },
    bottonsContainer:{
        flexDirection:'row',
    },
    button:{
        width:'50%',
        height:35,
        justifyContent:'center',
        borderTopWidth:1,
    },
    buttonText:{
        textAlign:'center',
    },
    buttonDivisor:{
        borderLeftWidth:1
    },
})