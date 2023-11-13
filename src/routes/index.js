import { createStackNavigator } from "@react-navigation/stack";

import Meetings from "../screens/Meetings";
import AddMeeting from "../screens/AddMeeting";
import EditMeeting from "../screens/EditMeeting";
import Meeting from "../screens/Meeting";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Meetings" component={Meetings} />
      <Stack.Screen name="AddMeeting" component={AddMeeting} />
      <Stack.Screen name="EditMeeting" component={EditMeeting} />
      <Stack.Screen name="Meeting" component={Meeting} />
    </Stack.Navigator>
  );
}
