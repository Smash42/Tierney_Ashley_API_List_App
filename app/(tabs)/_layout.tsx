import { Tabs } from "expo-router";
// Import your images directly as variables

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;
