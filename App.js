import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {StackNavigator} from "react-navigation";
import './src/utils/storage';
import './src/utils/globalVariables';
import MainScreen from './src/pages/screens/MainScreen';
import LoginScreen from './src/pages/screens/LoginScreen';
import RegisterScreen from './src/pages/screens/RegisterScreen';
import ForgetPwdScreen from './src/pages/screens/ForgetPwdScreen';

import GoodsList from './src/pages/goods/GoodsList';
import GoodsDetail from './src/pages/goods/GoodsDetail';

import Hotline from './src/pages/user/Hotline';
import Settings from './src/pages/user/Settings';
import Feedback from './src/pages/user/Feedback';

import ManageAddress from './src/pages/address/ManageAddress';
import AddAddress from './src/pages/address/AddAddress';
import ManageCrossAddress from './src/pages/address/ManageCrossAddress';
import AddCrossAddress from './src/pages/address/AddCrossAddress';

import ManageCertification from './src/pages/certification/ManageCertification';
import AddCertification from './src/pages/certification/AddCertification';
const styles = StyleSheet.create({
    headerStyles: {
        backgroundColor: '#fd4a70'
    },
    headerTitleStyle:{
        alignSelf:'center',
        textAlign:'center',
        flex:1
    }
});

const SimpleApp = StackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
           header:null
        }
    },
    Main: {screen: MainScreen},
    Register: {
        screen: RegisterScreen,
        navigationOptions: {
            title: '注册',
            headerStyle: styles.headerStyles,
            headerTintColor: '#fff',
            headerTitleStyle:styles.headerTitleStyle,
            headerBackTitle:null,
            headerRight:<View/>
        }
    },
    ForgetPwd: {
        screen: ForgetPwdScreen,
        navigationOptions: {
            title: '忘记密码',
            headerStyle: styles.headerStyles,
            headerTitleStyle:styles.headerTitleStyle,
            headerTintColor: '#fff',
            headerBackTitle:null,
            headerRight:<View/>
        }
    },
    Hotline:{
        screen: Hotline,
        navigationOptions: {
            title: '客服热线',
            headerStyle: styles.headerStyles,
            headerTintColor: '#fff',
            headerBackTitle:null,
            headerRight:<View/>,
            headerTitleStyle:styles.headerTitleStyle,
        }
    },
    Settings:{
        screen: Settings,
        navigationOptions: {
            title: '设置',
            headerStyle: styles.headerStyles,
            headerTintColor: '#fff',
            headerBackTitle:null,
            headerRight:<View/>,
            headerTitleStyle:styles.headerTitleStyle,
        }
    },
    Feedback:{
        screen: Feedback,
        navigationOptions: {
            title: '意见反馈',
            headerStyle: styles.headerStyles,
            headerTintColor: '#fff',
            headerBackTitle:null,
            headerRight:<View/>,
            headerTitleStyle:styles.headerTitleStyle,
        }
    },
    ManageAddress:{
        screen: ManageAddress,
        navigationOptions: {
            title: '大贸地址管理',
            headerStyle: styles.headerStyles,
            headerTintColor: '#fff',
            headerBackTitle:null,
            headerRight:<View/>,
            headerTitleStyle:styles.headerTitleStyle,
        }
    },
    AddAddress:{
        screen: AddAddress,
        navigationOptions: {
            title: '添加大贸地址',
            headerStyle: styles.headerStyles,
            headerTintColor: '#fff',
            headerBackTitle:null,
            headerRight:<View/>,
            headerTitleStyle:styles.headerTitleStyle,
        },

    },
    ManageCrossAddress:{
        screen: ManageCrossAddress,
        navigationOptions: {
            title: '跨境地址管理',
            headerStyle: styles.headerStyles,
            headerTintColor: '#fff',
            headerBackTitle:null,
            headerRight:<View/>,
            headerTitleStyle:styles.headerTitleStyle,
        }
    },
    AddCrossAddress:{
        screen: AddCrossAddress,
        navigationOptions: {
            title: '添加跨境地址',
            headerStyle: styles.headerStyles,
            headerTintColor: '#fff',
            headerBackTitle:null,
            headerRight:<View/>,
            headerTitleStyle:styles.headerTitleStyle,
        },

    },
    ManageCertification:{
        screen: ManageCertification,
        navigationOptions: {
            title: '实名认证管理',
            headerStyle: styles.headerStyles,
            headerTintColor: '#fff',
            headerBackTitle:null,
            headerRight:<View/>,
            headerTitleStyle:styles.headerTitleStyle,
        }
    },
    AddCertification:{
        screen: AddCertification,
        navigationOptions: {
            title: '添加实名认证',
            headerStyle: styles.headerStyles,
            headerTintColor: '#fff',
            headerBackTitle:null,
            headerRight:<View/>,
            headerTitleStyle:styles.headerTitleStyle,
        },
    },
    GoodsList:{
        screen: GoodsList,
        navigationOptions: {
            title: '商品列表',
            headerStyle: styles.headerStyles,
            headerTintColor: '#fff',
            headerBackTitle:null,
            headerRight:<View/>,
            headerTitleStyle:styles.headerTitleStyle,
        },
    },
    GoodsDetail:{
        screen: GoodsDetail,
        navigationOptions: {
            title: '商品详情',
            headerStyle: styles.headerStyles,
            headerTintColor: '#fff',
            headerBackTitle:null,
            headerRight:<View/>,
            headerTitleStyle:styles.headerTitleStyle,
        },
    },
});
module.exports = SimpleApp;