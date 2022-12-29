import { 
    Modal,
    Dimensions,
    ToucheblewithoutFeedback,
    StyleSheet,
    View,
    Text,
    FlatList,
    Alert,
 }
from "react-native";

import React from "react";
import { Button, CheckBox } from "react-native-elements";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000000AA",
      justifyContent: "flex-end",
    },
    Touched: {
        flex:1,
        width: "100%",
    },
    NotTouched: {
        // backgroundColor: "#FFFFFF",
        // width: "100%",
        // borderTopRightRadius: 10,
        // borderTopLeftRadius: 10,
        // paddingHorizontal: 10,
        // maxHeight: deviceHeight * 0.4
    },
    TouchedText: {
        // color: "#182E44",
        // fontSize: 20,
        // fontWeight: 500,
        // margin: 15,
    },
    NotTouchedText: {
        color: "#182E44",
        fontSize: 25,
        fontWeight: 500,
        marginTop: 15,
        marginBottom: 30,
    },
});

const deviceHeight = Dimensions.get("window").height

export class PopupPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    show = () => {
        this.setState({show: true})
    }

    close = () => {
        this.setState({show: false})
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{flex:1, width: "100%"}}/>

        if (!onTouch) return view

        return (
            <ToucheblewithoutFeedback onPress={onTouch} style={{flex:1, width: "100%"}}>
                {view}
            </ToucheblewithoutFeedback>
        )
    }

    renderTitle = () => {
        const {title} = this.props
        return (
            <View style={{alignItems: "flex-start"}}>
                <Text style={{
                    color: "#182E44",
                    fontSize: 25,
                    fontWeight: "500",
                    marginTop: 15,
                    marginBottom: 30
                    }}>
                        {title}
                </Text>
            </View>
        )
    }

    renderContent = () => {
        const {data} = this.props
        return (
            <View>
                <FlatList
                    style={{marginBottom: 20}}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={this.renderItem}
                    extraData={data}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={this.renderSeparator}
                    contentContainerStyle={{
                        paddingBottom: 40
                    }}
                />
            </View>
        )
    }

    renderItem = ({item}) => {
        return (
            //item list on popup
            <View style={{
                height:50,
                flex: 1,
                alignItems: "flex-start",
                justifyContent: "center",
                marginLeft: 20,

                }}>

                <Text style={{
                   fontSize: 18,
                   fontWeight: "normal",
                   color: "#182E44" 
                }}> {item.name} </Text>

            </View>
        )
    }

    renderSeparator = () => {
        <View
            style={{
                opacity: 0.1,
                backgroundColor: "#182E44",
                height: 1
            }}
        />
    }

    render() {
        let {show} = this.state

        const {onTouchOutside, title} = () => this.props

        return(
            
            <Modal
            animationType={'fade'}
            transparent={true}
            visible={show}
            onRequestClose={this.close}
            
            >
                {/* <View style={styles.container}> */}
                <View style={{
                    flex: 1,
                    backgroundColor: "#000000AA",
                    justifyContent: "flex-end",                    
                }}>
                    
                    {this.renderOutsideTouchable(onTouchOutside)}

                    <View style={{
                            flex: 1,
                            backgroundColor: "#FFFFFF",
                            width: "100%",
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            paddingHorizontal: 10,
                            maxHeight: deviceHeight * 0.4,
                        }}>

                        {this.renderTitle()}
                        {this.renderContent()}

                        <Button title="Done" onPress={this.close}/>
                    </View>
                </View>

            </Modal>
        )
    }
 }