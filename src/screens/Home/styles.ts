import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  totalContainer: {
    marginTop: 33,
    marginBottom: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  createdTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  createdTotalText: {
    color: '#4EA8DE',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: 'bold',
  },
  finishedTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  finishedTotalText: {
    color: '#8284FA',
    fontSize: 14,
    lineHeight: 17,
    fontWeight: 'bold',
  },
  totalQuantityBox: {
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    textAlign: 'center',
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  totalQuantity: {
    color: '#D9D9D9',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 15
  },
  tasksList: {
    flex: 1,
    width: '100%',
  },
  taskBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  taskDescription: {
    width: '75%',
    color: '#F2F2F2',
    fontSize: 14,
    lineHeight: 20,
  },
  taskchecked: {
    width: '75%',
    color: '#808080',
    fontSize: 14,
    lineHeight: 20,
    textDecorationLine: "line-through"
  },
  trashButton: {
    color: '#808080',
  },
  listEmpty: {
    borderTopWidth: 1,
    borderTopColor: '#808080',
    paddingTop: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listEmptyTextBold: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#808080'
  },
  listEmptyText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#808080'
  }
})