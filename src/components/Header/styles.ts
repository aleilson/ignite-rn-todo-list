import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0D0D',
    zIndex: 1,
  },
  containerLogo: {
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 20,
  },
  InputBox: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 48,
    top: 25,
  },
  buttonText: {
    color: '#F2F2F2',
    textAlign: 'center',
    border: 1,
    borderColor: '#F2F2F2',
    fontSize: 16
  },
  button: {
    backgroundColor: '#1E6F9F',
    width: 52,
    height: 52,
    borderRadius: 6,
    padding: 18,
    marginLeft: 4,
  },
  buttonDisabled: {
    backgroundColor: '#1E6F9F',
    width: 52,
    height: 52,
    borderRadius: 6,
    padding: 18,
    marginLeft: 4,
    opacity: 0.5
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#262626',
    padding: 16,
    borderColor: '#0D0D0D',
    color: '#F2F2F2',
    fontSize: 16
  }
})