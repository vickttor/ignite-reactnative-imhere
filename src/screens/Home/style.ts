import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#141016',
    padding: 24,
  },
  
  title: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 32,
  },

  subTitle: {
    color: '#6B6B6B',
    fontSize: 16,
  },

  formContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },

  input: {
    height: 56,
    padding: 16,
    borderRadius: 5,
    color: '#FFF',
    backgroundColor: '#1F1E25',
    fontSize: 18,
    marginTop: 16,
    flex: 1
  },

  button: {
    height: 56,
    width: 56,  
    borderRadius: 5, 
    backgroundColor: "#31Cf67",
    alignItems:'center',
    justifyContent:'center',
    marginTop: 16,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },

  listEmptyText: {
    color: '#FFF',
    fontSize: 18,
    textAlign:'center'
  }
});