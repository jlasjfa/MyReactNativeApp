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

type Props = {};

export default class FormCell extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.formCellView}>
                <Text style={{
                    marginLeft: 10,
                    lineHeight: 40,
                    height: 40,
                    width: this.props.labelWidth ? this.props.labelWidth : 60
                }}>{this.props.title}</Text>
                <TextInput
                    style={{
                        marginLeft: 10,
                        height: 40,
                        width: this.props.labelWidth ? (screenWidth - this.props.labelWidth - 20) : (screenWidth - 80)
                    }}
                    autoFocus={this.props.autoFocus}
                    keyboardType={this.props.keyboardType}
                    maxLength={this.props.maxLength}
                    underlineColorAndroid='transparent'
                    secureTextEntry={this.props.secureTextEntry}
                    onChangeText={(text) => this.props.onChange(text)}
                    defaultValue={this.props.defaultValue}
                    placeholder={this.props.placeholder}>
                </TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formCellView: {
        width: screenWidth,
        flexDirection: 'row',
        borderBottomColor: borderColor,
        borderBottomWidth: 1,
    },
    cellTitle: {},
    cellInput: {
        marginLeft: 10
    }
});
