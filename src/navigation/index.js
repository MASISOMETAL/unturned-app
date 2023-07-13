import { NavigationContainer } from "@react-navigation/native";
import HomeNav from "./HomeNav";

const AppNavigation = () =>{
    return(
        <NavigationContainer>
            <HomeNav />
        </NavigationContainer>
    )
}

export default AppNavigation;