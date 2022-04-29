import {createStackNavigator} from '@react-navigation/stack'
import { Home } from '../screens';

const Stack = createStackNavigator()

const HomeStack = ()=>{
    return(
        <Stack.Navigator
            initialRouteName='Home'
        >
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='SchoolCarlendar' component={Home}/>
        </Stack.Navigator>
    )
}
export default HomeStack;