/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    Linking,
    TextInput,
    Alert,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast, {DURATION} from 'react-native-easy-toast';
import ActiveButton from '../../components/common/ActiveButton';

type Props = {};

export default class ManageCertification extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            certificationList: [],
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        let certificationList = [];
        this.state.certificationList.map(value => {
            certificationList.push(
                <View style={styles.singleView}>
                    <Text style={styles.contacts}>{value.contacts}</Text>
                    <Text style={styles.idCard}>{value.idCard}</Text>
                    <View style={styles.operate}>
                        <TouchableHighlight
                            onPress={() => this.setDefaultCertification(value.id)}
                            underlayColor='#fff'>
                            <View style={styles.defaultView}>
                                {
                                    value.defaults ?
                                        (<Icon name="check-circle" size={16} color={activeColor}></Icon>) :
                                        (<Icon2 name="checkbox-blank-circle-outline" size={16}></Icon2>)
                                }


                                <Text style={styles.defaultOperate}>默认实名信息</Text>
                            </View>
                        </TouchableHighlight>

                        <View style={styles.editDeleteView}>
                            {/*<View style={styles.editView}>*/}
                            {/*<Icon name="edit" size={20}></Icon>*/}
                            {/*<Text style={styles.editText}>编辑</Text>*/}
                            {/*</View>*/}
                            <TouchableHighlight
                                onPress={() => this.deleteCertification(value.id)}
                                underlayColor='#fff'>
                                <View style={styles.editView}>
                                    <Icon name="trash" size={16}></Icon>
                                    <Text style={styles.editText}>删除</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            )
        });
        return (
            <View style={styles.container}>
                <View>
                    {certificationList}
                </View>
                <Toast ref='toast' position='center'></Toast>
                <View style={styles.bottomBtnView}>
                    <ActiveButton clickBtn={() => this.addAddress()} text='添加实名认证'
                                  style={styles.activeButton}></ActiveButton>
                </View>
            </View>
        );
    }

    async fetchData() {
        HttpUtils.get('/idCard/selectIdCardList', {}, data => {
            this.setState({certificationList: data.data});
        })
    }

    setDefaultCertification(id) {//设为默认
        HttpUtils.get('/idCard/setIdCardDefaultsById', {id: id}, data => {
            let defaultCrossAddress = this.state.certificationList.find(n => n.id === id);
            console.warn(defaultCrossAddress)
            storage.save({
                key: 'defaultCrossAddress',
                data: defaultCrossAddress
            });
            this.refs.toast.show('设置成功!', 10);
            this.fetchData();
        })
    }

    deleteCertification(id) {
        Alert.alert(null, '删除后将无法恢复，确认删除？',
            [
                {
                    text: "确定", onPress: () => {
                        HttpUtils.get('/idCard/deleteIdCardById', {id: id}, data => {
                            this.refs.toast.show('删除成功!', 10);
                            this.fetchData();
                        })
                    }
                },
                {
                    text: "取消", onPress: () => {}
                },
            ],
            { cancelable: false }
            )
    }

    addAddress() {
        this.props.navigation.navigate('AddCertification');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    singleView: {
        backgroundColor: whiteColor,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 8,
        width: screenWidth,
        marginBottom: 10
    },
    contacts: {},
    operate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
    defaultOperate: {
        color: activeColor,
        marginLeft: 5
    },
    defaultView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    editDeleteView: {
        flexDirection: 'row',
    },
    editView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    editText: {
        marginLeft: 5
    },
    idCard: {
        borderBottomColor: borderColor,
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5
    },

    bottomBtnView: {
        position: 'absolute',
        bottom: 0
    },
    activeButton: {
        backgroundColor: activeColor,
        alignItems: 'center',
        width: screenWidth,
        padding: 10,
    }

});
