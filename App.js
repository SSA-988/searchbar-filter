import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, SafeAreaView } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import SearchBar from "./SearchBar";
import List from "./List";
import { useEffect, useState } from "react";

export default function App() {
  // var randomWords = require('random-words');
  // console.log(randomWords());
  const words = [
    {
      name: "hello program",
      id: "1",
    },
    {
      name: "world",
      id: "2",
    },
    {
      name: "python",
      id: "3",
    },
    {
      name: "java",
      id: "4",
    },
    {
      name: "sql",
      id: "5",
    },
  ];
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  return (
    <SafeAreaView style={styles.root}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />

      <List searchPhrase={searchPhrase} data={words} setClicked={setClicked} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});
