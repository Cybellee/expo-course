import { View } from "react-native";
import Card from "./src/type-weather/pages/search/dash/components/card";

export default function App() {
  return (
    <View style={{display: "flex", justifyContent: "center", alignItems: "center", height: 500}}>
          <Card />
    </View>
  )
}
