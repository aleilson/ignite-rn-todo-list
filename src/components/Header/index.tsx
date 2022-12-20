import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

import LogoTodo from '../../assets/brand.png';

interface HeaderProps {
  onAddTask: (task: string) => void;
}

export function Header({ onAddTask }: HeaderProps) {
  const [descriptionTask, setDescriptionTask] = useState('');

  function onCreateTask() {
    onAddTask(descriptionTask);
    setDescriptionTask('');
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image source={LogoTodo} />
      </View>

      <View style={styles.InputBox}>
        <TextInput
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
          value={descriptionTask}
          onChangeText={setDescriptionTask}
        />

        <TouchableOpacity
          style={(descriptionTask.length >=2) ? styles.button : styles.buttonDisabled}
          onPress={onCreateTask}
          disabled={descriptionTask.length <= 1}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}