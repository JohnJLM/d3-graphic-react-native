import {
  MultipleHorizontalBars,
  MultipleVerticalBars,
  PieChart,
} from "d3-graphic";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StatusBar } from "expo-status-bar";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
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
  { nameProduct: "Apples", value: 100, id: 1 },
  { nameProduct: "Banana", value: 150, id: 2 },
  { nameProduct: "Cactus", value: 45, id: 3 },
  { nameProduct: "Dades", value: 169.48, id: 4 },
  { nameProduct: "Guitar", value: 188.4, id: 5 },
  { nameProduct: "Fruit", value: 90, id: 6 },
  { nameProduct: "Games", value: 25, id: 7 },
];

export default function App() {
  const navigationRef = useNavigationContainerRef();

  return (
    <SafeAreaView>
      <ScrollView
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          marginTop: 20,
        }}
      >
        <NavigationContainer ref={navigationRef}>
          <TabNavigator
            tabs={[
              {
                title: "Horizontal Bars",
                component: <GenericTab type={"horizontalBars"} />,
              },
              {
                title: "Vertical Bars",
                component: <GenericTab type={"verticalBars"} />,
              },
              {
                title: "Pie Chart",
                component: <GenericTab type={"pieChart"} />,
              },
            ]}
            initialRouterName={"Horizontal Bars"}
          />
        </NavigationContainer>
      </ScrollView>
    </SafeAreaView>
  );
}

const Tab = createMaterialTopTabNavigator();
const TabNavigator = ({ tabs, initialRouterName }) => {
  return (
    <Tab.Navigator
      initialRouteName={initialRouterName}
      screenOptions={{
        swipeEnabled: true,
        tabBarItemStyle: { width: "auto" },
        tabBarActiveTintColor: "#06bcee",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "white" },
        tabBarIndicatorStyle: { backgroundColor: "#06bcee", height: 2 },
      }}
    >
      {tabs.map((tab, index) => (
        <Tab.Screen key={index} name={tab.title}>
          {() => tab.component}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};

const GenericTab = ({ type }) => {
  const [data, setData] = useState(initialData);

  const changeData = () => {
    setData((prevState) =>
      prevState.map((row) => ({
        ...row,
        value: Math.floor(Math.random() * 1500),
      }))
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Text style={styles.title}>
          Testing Library of chart created by JohnJLM 💻📊
        </Text>
        <Text style={styles.title}>Get a Dashboard in minuts ⌛</Text>
      </View>
      <Button
        onPress={() => changeData()}
        title="Change Data Values"
        color="#06bcee"
      />

      {/* MultipleHorizontalBars */}
      {type === "horizontalBars" && (
        <View style={styles.containerCard}>
          {/* Without Scroll */}
          <Text style={styles.title}>MultipleHorizontalBars 📈</Text>
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
          <Text style={styles.title}>Internal scroll 📈</Text>
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
      )}

      {/* MultipleVerticalBars */}
      {type === "verticalBars" && (
        <View style={styles.containerCard}>
          {/* Without Scroll */}
          <Text style={styles.title}>MultipleVerticalBars 📈</Text>
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
          <Text style={styles.title}>Internal scroll 📈</Text>
          <View style={[styles.containerVerticalGraph, { width: 200 }]}>
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
      )}

      {/* PIE CHART */}
      {type === "pieChart" && (
        <View style={styles.containerCard}>
          <Text style={styles.title}>Testing PieChart ⏺</Text>
          <View style={styles.containerPieGraph}>
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#ececec",
    alignItems: "center",
    paddingTop: 30,
    gap: 30,
    paddingHorizontal: 20,
    marginBottom: 75,
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
  containerPieGraph: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 350,
  },
});
