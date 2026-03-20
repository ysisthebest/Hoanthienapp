import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  top: {
    flex: 1,
    padding: 24
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30
  },

  label: {
    fontSize: 16,
    fontWeight: '600'
  },

  desc: {
    fontSize: 13,
    color: '#666',
    marginBottom: 20
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
    paddingVertical: 8
  },

  bottom: {
    padding: 24
  },

  button: {
    backgroundColor: '#00bfa5',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center'
  },

  disabled: {
    backgroundColor: '#ccc'
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16
  },
  inputError: {
  borderBottomColor: 'red'
},

errorText: {
  color: 'red',
  marginTop: 6,
  fontSize: 12
},
successText: {
  color: 'green',
  marginTop: 6,
  fontSize: 12
},
homeContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: 20
},

homeTitle: {
  fontSize: 28,
  fontWeight: "bold",
  marginBottom: 10
},

homeDesc: {
  fontSize: 16,
  color: "#666",
  marginBottom: 30,
  textAlign: "center"
},

logoutButton: {
  backgroundColor: "#007bff",
  padding: 15,
  borderRadius: 8,
  width: 200,
  alignItems: "center"
},

});

export default styles;