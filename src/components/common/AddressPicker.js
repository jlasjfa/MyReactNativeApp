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
    TextInput,

    View
} from 'react-native';
import HttpUtils from "../../utils/http";
type Props = {};

export default class AddressPicker extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            addressData:[]
        }
    }
    componentDidMount(){
        this.fetchAddress()
    }
    render() {
        return (
            <View style={styles.formCellView}>
                <Text style={{marginLeft:10,lineHeight:41,height: 41,width:this.props.labelWidth?this.props.labelWidth:60}}>{this.props.title}</Text>
                <View style={{height: 41,marginLeft:10,width:this.props.labelWidth?(screenWidth-this.props.labelWidth-20):(screenWidth-80)}}>
                    <TouchableHighlight onPress={()=>this.pickerShow()} underlayColor='#fff'>
                        <Text style={{color:'#c8c8c8',lineHeight:41}}>请选择地址</Text>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
    selectRegionList(){
        return new Promise((resolve,reject)=>{
            storage.load({key:'addressData'}).then(res =>{
                resolve(res)
            }).catch(e =>{
                HttpUtils.get('/region/selectRegionList',{},data=>{
                    storage.save({key:'addressData',data:data.data.list});
                    resolve(data.data.list)
                })
            })
        });

    }
    async fetchAddress() {
        let addressData = await this.selectRegionList()
        let data = [];
        for(var i=0;i<100;i++){
            data.push(i);
        }
        // Picker.init({
        //     pickerData: data,
        //     pickerTitleText:'请选择',
        //     pickerCancelBtnText:'取消',
        //     pickerConfirmBtnText:'确定',
        //     onPickerConfirm: data => {
        //         console.warn(data);
        //     },
        //     onPickerCancel: data => {
        //         console.warn(data);
        //     },
        //     onPickerSelect: data => {
        //         console.warn(data);
        //     }
        // });
    }
    pickerShow(){
        // Picker.show();
    }
}

const styles = StyleSheet.create({
    formCellView:{
        width:screenWidth,
        flexDirection:'row',
        borderBottomColor:borderColor,
        borderBottomWidth:StyleSheet.hairlineWidth,
    },
    addressView:{

    },
    cellTitle:{

    },
    cellInput:{
        marginLeft:10
    }
});
