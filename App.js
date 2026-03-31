import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Contato from "./src/screens/Contato";
import Produtos from "./src/screens/Produtos";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

       <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title:'Página inicial'
        }}

        />

        <Stack.Screen
        name='Contato'
        component={Contato}
        
        />

        <Stack.Screen
        name='Produtos'
        component={Produtos}
        options={{
          title:'Página inicial'
        }}

        />
      

      </Stack.Navigator>
    </NavigationContainer>
  );
}
