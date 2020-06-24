import Taro, { Component } from '@tarojs/taro'
import { View, Text,Input } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './todolist.scss'
export default class Tablist extends Component {
  constructor(props){
    super(props)
    this.state={
        arr:[],
        value:""
    }
}
  componentWillMount () { 
    var myList=window.localStorage.getItem("myList")
    console.log(myList);
    if(myList==null||myList==""){
        myList=[]
    }else{
        myList=myList.split(",")
    }
      this.state={
          arr:myList
      }
  } 

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }
  // 添加方法
  addTab() {
    var value = this.state.value
    this.setState({
        arr:[...this.state.arr,value]
    },()=>{
    window.localStorage.setItem("myList",this.state.arr)
    })
    this.setState({
        value:''
    })
  
   
}
// 删除方法
deleteTab(index) {
     // 将点击的那项数据从state中的数组通过splice方法删去，重新刷新数组中的数据
     this.state.arr.splice(index,1)
     console.log(this.state.arr)
     this.setState({
      arr:this.state.arr
     },()=>{
     window.localStorage.setItem("myList",this.state.arr)
     })
}
// 修改方法
updateTab(index) {
  // 获取修改的内容text
  var text=prompt("请输入修改的内容")
  //通过spilce方法的第三个参数替换原来的内容，实现修改的功能
   this.state.arr.splice(index,1,text)
   console.log(this.state.arr)
   this.setState({
    arr:this.state.arr
   })

}
// 取得input的值
inputChange(e){
	console.log(e.target.value)
	this.setState({
		value:e.target.value
    })
}
  render () {
    let {value} = this.state
    return (
      <View>
      <Input className='input' value={value} onChange={(e)=>this.inputChange(e)}>1</Input>
      <AtButton className='btn' circle size='small' type='primary' onClick={this.addTab.bind(this)}>添加</AtButton>
      <View className='list'>
        {
          this.state.arr.map((value,index)=>{
            return <View> <Text key={index}> {value}
            <AtButton className='btn' circle size='small' type='primary' onClick={this.updateTab.bind(this,index)}>修改</AtButton>
            <AtButton className='btn' circle size='small' type='primary' onClick={this.deleteTab.bind(this,index)}>删除</AtButton>
            </Text>
            </View>
             })
            }
      </View>
  </View>
    )
  }
}
