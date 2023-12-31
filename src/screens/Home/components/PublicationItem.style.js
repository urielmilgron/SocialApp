import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    maxHeight:300,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "space-between",
    borderWidth: 1,
  },
  userNamePostContainer: {
    height: 45,
    justifyContent: "start",
    flexDirection: "row",
    borderBottomWidth: 1,
    backgroundColor: "#88ACEB",

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
    minHeight: 40,
    maxHeight:180,
    width: "96.5%",
    alignSelf: "center",
    paddingTop: 2,
    paddingBottom: 2,
  },
  contentPost: {
    height: "auto",
    textAlignVertical: "center",
  },
  bottonsContainer: {
    flexDirection: "row",
  },
  text:{
    flexWrap:'wrap'
  },
  button: {
    width: "50%",
    height: 35,
    justifyContent: "center",
    borderTopWidth: 1,
  },
  buttonText: {
    textAlign: "center",
  },
  buttonDivisor: {
    borderLeftWidth: 1,
  },
  likesAndCommentsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 2,
  },
  likesTextButton: {
    width: "50%",
    alignItems: "center",
  },
  likesText: {
    color: "#A294EB",
    fontWeight: "400",
  },
  imageProfile: {
    width: 35,
    height: 35,
    borderRadius: 100,
    alignSelf: "center",
    marginLeft: 5,
  },
});
