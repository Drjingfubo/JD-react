import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }
  toTab() {
    Taro.navigateTo({
        url:'/pages/todolist/todolist'
    })
}
  render () {
    return (
      <View className='index'>
        <View className='jump'>点击按钮跳转到todolist</View>
        <AtButton type='primary' onClick={this.toTab.bind(this)}>跳转</AtButton>
      </View>
    )
  }
}
