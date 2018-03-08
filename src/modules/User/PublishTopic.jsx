import React from "react";
import axios from "axios"
import { Input, message,Select  } from 'antd'
import service from "./../service.js"
import RichText from "./../Common/RichText.jsx"
import util from "./../util/util.js"
import { Link } from "react-router-dom"
const Option = Select.Option;

class PublishTopic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      tab: ""
    }
    this.publishRichText = this.publishRichText.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.getTitle = this.getTitle.bind(this)
  }
  publishRichText(html) {
    let url = service.POST_TOPIC
    axios.post(url,{
      accesstoken: localStorage.getItem('userToken'),
      title: this.state.title,
      tab: this.state.tab,
      content: html
    }).then((response) => {
      message.success('操作成功')
    })
    .catch((error) => {
      message.error(error.response.data.error_msg)
    })
  }

  handleChange(value) {
    this.setState({
      tab: value
    })
  }

  getTitle(e){
    this.setState({
      title: e.target.value
    })
  }
  

  render() {
    let richTextSet = {
      height: 400
    }
    return (
      <div>
        <h3 className="block-title mt20"><Link to={"/"}>首页</Link><span className="bread-split">/</span>发布话题</h3>
        <Select placeholder="请选择一个版块" style={{ width: 200 }} onChange={this.handleChange}>
          <Option value="share">分享</Option>
          <Option value="job">招聘</Option>
          <Option value="ask">问答</Option>
          <Option value="dev">测试</Option>
        </Select>
        <Input placeholder="请输入标题"  onBlur={this.getTitle}/>
        <RichText richTextSet={richTextSet} publishRichText={this.publishRichText}/>
      </div>
      
    )
  }
}

export default PublishTopic;