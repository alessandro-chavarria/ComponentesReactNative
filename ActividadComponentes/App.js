import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput, ScrollView, Switch, ActivityIndicator, FlatList, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const data = [
    { id: '1', text: 'Elemento 1' },
    { id: '2', text: 'Elemento 2' },
    { id: '3', text: 'Elemento 3' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* 1. Componente Text */}
      <Text style={styles.title}>¡Bienvenido a mi App!</Text>
      
      {/* 2. Componente Button */}
      <Button 
        title="Presióname" 
        onPress={() => Alert.alert('Botón presionado')} 
        color="#841584"
      />
      
      {/* 3. Componente Image */}
      <Image
        style={styles.image}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
      
      {/* 4. Componente TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
      />
      
      {/* 5. Componente Switch */}
      <View style={styles.switchContainer}>
        <Text>Modo oscuro:</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor="#f4f3f4"
          value={false}
        />
      </View>
      
      {/* 6. Componente ActivityIndicator */}
      <ActivityIndicator size="large" color="#0000ff" />
      
      {/* 7. Componente FlatList */}
      <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.listItem}>{item.text}</Text>}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      
      {/* 8. Componente TouchableOpacity */}
      <TouchableOpacity 
        style={styles.touchable}
        onPress={() => console.log('Área táctil presionada')}
      >
        <Text>Toque aquí</Text>
      </TouchableOpacity>
      
      {/* 9. Componente View con estilo especial */}
      <View style={styles.specialBox}>
        <Text>Este es un componente View personalizado</Text>
      </View>
      
      {/* 10. Componente personalizado (creado por nosotros) */}
      <Greeting name="Usuario" />
      
      <StatusBar style="auto" />
    </ScrollView>
  );
}

// Componente personalizado (número 10)
function Greeting({ name }) {
  return (
    <View>
      <Text style={styles.greetingText}>Hola, {name}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 10,
  },
  list: {
    marginTop: 10,
  },
  listItem: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 5,
    borderRadius: 5,
  },
  touchable: {
    padding: 15,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  specialBox: {
    padding: 15,
    backgroundColor: '#e3f2fd',
    borderColor: '#bbdefb',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
  greetingText: {
    fontSize: 18,
    color: '#1976d2',
    textAlign: 'center',
    marginVertical: 10,
  },
});