import React, { useState } from "react";
import { StyleSheet, View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import Task from "./components/Task";

function tuna() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null); 0
    }
    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }
    return (
        <View style={styles.container} >
            <View style={styles.taskSpiral}>
                <Text style={styles.title}>What To Do Today?</Text>
                <View style={styles.items}>
                    {
                        taskItems.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => completeTask(index)} >
                                    <Task text={item} />
                                </TouchableOpacity>
                            )
                        })
                    }
                    <Task text={'Take the Cat to the Vet.'} />
                    <Task text={'Go To Sports'} />
                    <Task text={'Do Homework'} />
                </View>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'android' ? 'padding' : 'height'}
                style={styles.writeTaskSpiral}>
                <TextInput style={styles.input} placeholder={'Write what you will do today '} value={task} onChangeText={text => setTask(text)} />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addSpiral}>
                        <Text style={styles.addText} >+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F1EBEB',
    },
    taskSpiral: {
        paddingTop: 40,
        paddingHorizontal: 25
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 28,
    },
    writeTaskSpiral: {
        position: 'absolute',
        bottom: 55,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 16,
        width: 230,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderRadius: 54,
        borderColor: '#C0C0C0',
        borderWidth: 1
    },
    addSpiral: {
        width: 56,
        height: 56,
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addText: {
    }
})
export default tuna;