import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { faker } from "@faker-js/faker";
import { useState } from "react";
// CJS
//const { faker } = require("@faker-js/faker");

export default Register = () => {
  const [person, setPerson] = useState({
    fName: "",
    lName: "",
    age: "",
    email: "",
    gender: "",
  });
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#fff",
      padding: 50,
      margin: 10,
    },
    middle: {
      flex: 1,
      backgroundColor: "beige",
      borderWidth: 5,
    },
  });
  const randomVal = () => {
    setPerson({
      fName: "",
      lName: "",
      age: "",
      email: faker.internet.email(),
      gender: "",
    });
  };
  return (
    <View style={styles.container}>
      <Text>First Name</Text>
      <TextInput
        style={{ borderBottomWidth: 1.0 }}
        value={person.fName}
        onChange={(e) => setPerson({ ...person, fName: e.target.value })}
      ></TextInput>
      <Text>Last Name</Text>
      <TextInput
        style={{ borderBottomWidth: 1.0 }}
        value={person.lName}
        onChange={(e) => setPerson({ ...person, lName: e.target.value })}
      ></TextInput>
      <Text>Age</Text>
      <TextInput
        style={{ borderBottomWidth: 1.0 }}
        value={person.age}
        onChange={(e) => setPerson({ ...person, age: e.target.value })}
      ></TextInput>
      <Text>Gender</Text>
      <TextInput
        style={{ borderBottomWidth: 1.0 }}
        value={person.gender}
        onChange={(e) => setPerson({ ...person, gender: e.target.value })}
      ></TextInput>
      <Text>Email</Text>
      <TextInput
        style={{ borderBottomWidth: 1.0, padding: 2 }}
        value={person.email}
        onChange={(e) => setPerson({ ...person, email: e.target.value })}
      ></TextInput>
      <Button title="Register" color="#000000" style={{ padding: 4 }} />
      <Button title="Random Values" color="#000000" onPress={randomVal} />
    </View>
  );
};
