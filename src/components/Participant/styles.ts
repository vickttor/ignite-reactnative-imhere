import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    elevation: 2,
    flexDirection: 'row',
    alignItems:'center',
    marginBottom: 10,
  },
  
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    marginLeft: 12.
  },

  button: {
    width: 56, 
    height: 56, 
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5, 
    backgroundColor: "#E23C44",
    alignItems:'center',
    justifyContent:'center',
  },

  buttonText: {
    color:'#FFf',
    fontSize: 24,
  },
});