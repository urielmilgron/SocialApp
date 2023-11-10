import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  postContainer: {
    width: "90%",
    maxHeight: 400,
    alignSelf: "center",
  
    justifyContent: "space-between",
    borderEndWidth: 1,
    borderStartWidth: 1,

  },
  userNamePostContainer: {
    width: "90%",
    height: 45,
    justifyContent: "start",
    flexDirection: "row",
    backgroundColor: "#88ACEB",
    alignSelf:'center',
    borderWidth:1
  },
  userNamePost: {
    marginLeft: 5,
    textAlignVertical: "center",
  },
  timePost: {
    marginLeft: 10,
    textAlignVertical: "center",
    fontSize: 12,
    color: "#EBD6AB",
  },
  contentPostContainer: {
    width: "96.5%",
    alignSelf: "center",
    paddingTop: 2,
    paddingBottom: 2,
    alignItems: "stretch",
    paddingBottom:10
  },
  contentPost: {
    height: "auto",
    textAlignVertical: "center",
  },
  bottonsContainer: {
    flexDirection: "row",
  },
  text: {
    flexWrap: "wrap",
    
  },
  imageProfile: {
    width: 35,
    height: 35,
    borderRadius: 100,
    alignSelf: "center",
    marginLeft: 5,
  },
});
