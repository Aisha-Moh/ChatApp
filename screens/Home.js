import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "../config/firebase";
import ListItem from "../components/ListItem";
import { Button } from "react-native-elements";

export default function Home({ navigation }) {
  const [users, setUsers] = useState([]);
  const logoutUser = async () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  const getUsers = () => {
    const docsRef = collection(db, "users");
    const q = query(docsRef, where("userUID", "!=", auth?.currentUser?.uid));
    const docsSnap = onSnapshot(q, (onSnap) => {
      let data = [];
      onSnap.docs.forEach((user) => {
        data.push({ ...user.data() });
        setUsers(data);
        console.log(user.data());
      });
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <FlatList
        data={users}
        key={(user) => user.email}
        renderItem={({ item }) => (
          <ListItem
            title={item.username}
            subTitle={item.email}
            image={item.avatarUrl}
            onPress={() =>
              navigation.navigate("Chat", {
                name: item.username,
                uid: item.userUID,
              })
            }
          />
        )}
      />
      <Button title="Logout" onPress={logoutUser} />
    </>
  );
}

const styles = StyleSheet.create({});
