import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";


const List = ({ searchPhrase, setClicked, data }) => {
  const renderItem = ({ item }) => {
    if (searchPhrase === "") {
      return (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      );
    }
    if (
      item
        .toLowerCase()
        .includes(searchPhrase.toLowerCase())
    ) {
      return (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
     
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
    
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
