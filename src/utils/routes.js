import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AddressList from '../screens/AddressList/AddressList';
import Checkout from '../screens/Checkout/Checkout';
import CheckoutPayment from '../screens/CheckoutPayment/CheckoutPayment';
import EditingAddress from '../screens/EditingAddress/EditingAddress';
import EditingProfile from '../screens/EditingProfile/EditingProfile';
import MainLanding from '../screens/MainLanding/MainLanding';
import OrderDetail from '../screens/OrderDetail/OrderDetail';
import PreviousOrders from '../screens/PreviousOrders/PreviousOrders';
import ProductDescription from '../screens/ProductDescription/ProductDescription';
import ProductListing from '../screens/ProductsListing/ProductListing';
import ProfileDashboard from '../screens/ProfileDashboard/ProfileDashboard';
import Search from '../screens/Search/Search';
import SearchResult from '../screens/SearchResults/SearchResults';
import ShoppingCart from '../screens/ShoppingCart/ShoppingCart';
import SignIn from '../screens/SignIn/SignIn';
import SignUp from '../screens/SignUp/SignUp';
import TrackOrder from '../screens/TrackOrder/TrackOrder';
import MainMenu from '../components/MainMenu/MainMenu';
import AuthLoading from './authLoading';

const NavigationStack = createStackNavigator();
const AuthenticationStack = createStackNavigator();
const MainStack = createStackNavigator();
const SideDrawer = createDrawerNavigator();

function authenticationNavigator() {
    return (
        <AuthenticationStack.Navigator headerMode='none'>
            <AuthenticationStack.Screen name='SignIn' component={SignIn} />
            <AuthenticationStack.Screen name='SignUp' component={SignUp} />
        </AuthenticationStack.Navigator>
    )
}

function Drawer() {
    return (
        <SideDrawer.Navigator initialRouteName='MainLanding' drawerContent={props => <MainMenu {...props} />}>
            <SideDrawer.Screen name='MainLanding' component={MainLanding} />
            <SideDrawer.Screen name='ProfileDashboard' component={ProfileDashboard} />
        </SideDrawer.Navigator>
    )
}
function noDrawer() {
    return (
        <NavigationStack.Navigator headerMode='none'>
            <NavigationStack.Screen name='Drawer' component={Drawer} />
            <NavigationStack.Screen name='AddressList' component={AddressList} />
            <NavigationStack.Screen name='Checkout' component={Checkout} />
            <NavigationStack.Screen name='CheckoutPayment' component={CheckoutPayment} />
            <NavigationStack.Screen name='EditingAddress' component={EditingAddress} />
            <NavigationStack.Screen name='EditingProfile' component={EditingProfile} />
            <NavigationStack.Screen name='OrderDetail' component={OrderDetail} />
            <NavigationStack.Screen name='PreviousOrders' component={PreviousOrders} />
            <NavigationStack.Screen name='ProductDescription' component={ProductDescription} />
            <NavigationStack.Screen name='ProductListing' component={ProductListing} />
            <NavigationStack.Screen name='ProfileDashboard' component={ProfileDashboard} />
            <NavigationStack.Screen name='SearchResult' component={SearchResult} />
            <NavigationStack.Screen name='ShoppingCart' component={ShoppingCart} />
            <NavigationStack.Screen name='Search' component={Search} />
            <NavigationStack.Screen name='TrackOrder' component={TrackOrder} />
        </NavigationStack.Navigator>
    )

}

function AppContainer() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <MainStack.Navigator headerMode='none' initialRouteName='AuthLoading'>
                    <MainStack.Screen name='AuthLoading' component={AuthLoading} />
                    <MainStack.Screen name='Auth' component={authenticationNavigator} />
                    <MainStack.Screen name='noDrawer' component={noDrawer} />
                </MainStack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )

}

export default AppContainer;
