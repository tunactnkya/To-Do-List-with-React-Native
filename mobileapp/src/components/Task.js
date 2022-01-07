import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

function Task(props) {
    return (
        <View style={styles.item} >
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.area} ></TouchableOpacity>
                <Text style={styles.itemText} >{props.text}</Text>
            </View>
            <View style={styles.button} ></View>
        </View>
    )
}
const styles = StyleSheet.create({
    item: {
      backgroundColor:'white',
      padding:16,
      borderRadius:14,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginBottom:25
    },
    itemLeft: {
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap'
    },
    area: {
    width:27,
    height:27,
    backgroundColor:'#8687D8',
    opacity:0.6,
    borderRadius:6,
    marginRight:16
    },
    itemText: {
     maxWidth:'80%',
    },
    button: {
    width:14,
    height:14,
    borderColor:'#1351C9',
    borderWidth:3,
    borderRadius:5
    }
})
export default Task;