import { Trash } from "phosphor-react-native";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { styles } from './styles';
import { CheckBox } from "react-native-btr";

import ImageEmptyList from '../../assets/clipboard.png'
import { useMemo, useState } from "react";

interface TaskProps {
  id: string;
  description: string;
  isChecked: boolean;
}

const tasksDefault = [
  {
    id: '1',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    isChecked: false
  },
  {
    id: '2',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    isChecked: true
  },
  {
    id: '3',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    isChecked: true
  },
  {
    id: '4',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    isChecked: false
  },
  {
    id: '5',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    isChecked: false
  },
  {
    id: '6',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    isChecked: true
  },
  {
    id: '7',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    isChecked: false
  },
]

export function Home() {
  const [tasks, setTasks] = useState<TaskProps[]>(tasksDefault);

  const totalTasksFinished = useMemo(() => {
    return tasks.reduce((totalTasks, task) => task.isChecked ? totalTasks + 1 : totalTasks, 0);
  }, [tasks]);

  function createNewTask(descriptionToInsert: string) {
    setTasks([...tasks, 
      {
        id: String(Math.random() * 1000),
        description: descriptionToInsert,
        isChecked: false
      }
    ]);
  }

  function handleDeleteTask(id: string) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function handleFinishedTask(id: string) {
    const taskChecked = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isChecked: !task.isChecked
        }
      }

      return task;
    });

    setTasks(taskChecked);
  }

  return (
    <>
      <Header
        onAddTask={createNewTask}
      />

      <View style={styles.container}>
        <View style={styles.totalContainer}>
          <View style={styles.createdTotal}>
            <Text style={styles.createdTotalText}>Criadas</Text>
            <View style={styles.totalQuantityBox}>
              <Text style={styles.totalQuantity}>{tasks.length}</Text>
            </View>
          </View>

          <View style={styles.finishedTotal}>
            <Text style={styles.finishedTotalText}>Concluídas</Text>
            <View style={styles.totalQuantityBox}>
              <Text style={styles.totalQuantity}>{totalTasksFinished}</Text>
            </View>
          </View>
        </View>

        <View style={styles.tasksList}>
          <FlatList 
            data={tasks}
            keyExtractor={(item: TaskProps) => item.id}
            renderItem={({ item }) => (
              <View style={styles.taskBox}>
                <CheckBox
                  checked={item.isChecked}
                  onPress={() => handleFinishedTask(item.id)}
                />
                
                <Text style={item.isChecked ? styles.taskchecked : styles.taskDescription}>{item.description}</Text>
                
                <TouchableOpacity
                  onPress={() => handleDeleteTask(item.id)}
                >
                  <Trash color='#808080' size={20} />
                </TouchableOpacity>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.listEmpty}>
                <Image source={ImageEmptyList} />

                <Text style={styles.listEmptyTextBold}>
                  Você ainda não tem tarefas cadastradas
                  
                </Text>
                <Text style={styles.listEmptyText}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </>
  )
}