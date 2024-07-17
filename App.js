import {
  MultipleHorizontalBars,
  MultipleVerticalBars,
  PieChart,
} from "d3-graphic";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const initialData = [
  { nameProduct: "Apple", value: 100, id: 1 },
  { nameProduct: "Banana", value: 150, id: 2 },
  { nameProduct: "Cactus", value: 45, id: 3 },
  { nameProduct: "Daiquiri", value: 169.48, id: 4 },
  { nameProduct: "Element", value: 188.4, id: 5 },
  { nameProduct: "Fruits", value: 90, id: 6 },
  { nameProduct: "Games", value: 25, id: 7 },
];

export default function App() {
  const [data, setData] = useState(initialData);

  const changeData = () => {
    setData((prevState) =>
      prevState.map((row) => ({
        ...row,
        value: Math.floor(Math.random() * 500),
      }))
    );
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text style={styles.title}>
            Testing Library of chart created by JohnJLM 💻📊
          </Text>
          <Button
            onPress={() => changeData()}
            title="Change Data Values"
            color="#06bcee"
          />
          <View style={styles.containerCard}>
            {/* Without Scroll */}
            <Text style={styles.title}>Testing MultipleHorizontalBars 📈</Text>
            <View style={styles.containerHorizontalGraph}>
              <MultipleHorizontalBars
                data={data}
                keyLabel={"nameProduct"}
                keyValue={"value"}
                primaryKey={"id"}
                error={false}
                loading={false}
              />
            </View>
            {/* With Scroll */}
            <Text style={styles.title}>Testing internal scroll 📈</Text>
            <View style={[styles.containerHorizontalGraph, { height: 150 }]}>
              <MultipleHorizontalBars
                data={data}
                keyLabel={"nameProduct"}
                keyValue={"value"}
                primaryKey={"id"}
                error={false}
                loading={false}
              />
            </View>
          </View>
          <View style={styles.containerCard}>
            {/* Without Scroll */}
            <Text style={styles.title}>Testing MultipleVerticalBars 📈</Text>
            <View style={styles.containerVerticalGraph}>
              <MultipleVerticalBars
                data={data}
                keyLabel={"nameProduct"}
                keyValue={"value"}
                primaryKey={"id"}
                error={false}
                loading={false}
              />
            </View>
            {/* With Scroll */}
            <Text style={styles.title}>Testing internal scroll 📈</Text>
            <View style={[styles.containerVerticalGraph, { width: 180 }]}>
              <MultipleVerticalBars
                data={data}
                keyLabel={"nameProduct"}
                keyValue={"value"}
                primaryKey={"id"}
                error={false}
                loading={false}
              />
            </View>
          </View>
          <View style={styles.containerCard}>
            <Text style={styles.title}>Testing PieChart ⏺</Text>
            <View style={styles.containerVerticalGraph}>
              <PieChart
                data={data}
                keyLabel={"nameProduct"}
                keyValue={"value"}
                primaryKey={"id"}
                error={false}
                loading={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#ececec",
    alignItems: "center",
    paddingTop: 75,
    gap: 30,
    paddingHorizontal: 20,
    paddingBottom: 75,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  containerCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    borderColor: "#eaeaea",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 375,
    paddingBottom: 50,
  },
  containerHorizontalGraph: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 360,
    height: 275,
  },
  containerVerticalGraph: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 360,
    height: 275,
  },
});
