import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {


  const todos = useQuery(api.todos.getTodos);
  const addTodo =useMutation(api.todos.addTodo);


  return (
    <View style={styles.container}>
      <Text style={styles.content}> hay man happy to see you .... </Text>



        <TouchableOpacity onPress={()=> addTodo({text: "walk the dog"})}>
        <Text>Add a new todo</Text>
       </TouchableOpacity> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"red",
  },
  content:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
  }
});



