import React from "react";
import axios from "axios"
import service from "./../service.js"
import util from "./../util/util.js"
import CommentList from "./CommentList.jsx"
import RichText from "./../Common/RichText.jsx"
import { message,Button } from 'antd'
import "./topic.css"

class TopicDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        topicId: this.props.match.params.id,
        topicInfo: {}
    }
    this.getTopicDetail = this.getTopicDetail.bind(this)
    this.collectTopic = this.collectTopic.bind(this)
    this.publishRichText = this.publishRichText.bind(this)
  }

  //获取指定主题详情
  getTopicDetail(params) {
    let url =  service.GET_TOPIC_DETAIL.replace('{topicId}',this.state.topicId); 
    let that = this;
    axios.get(url, {params})
      .then((response) => {
        that.setState({
          topicInfo: response.data.data
        })
      })
      .catch((error) => {
        message.error(error);
      })
  }
  componentWillMount() {
    this.getTopicDetail({
        mdrender: "true",
        accesstoken: localStorage.getItem('user')
    });
  }
  //收藏与取消收藏话题
  collectTopic(){
    let isLogin = util.isLogin();
    if (!isLogin) {
      alert('请登录再进行操作');
      return false
    }
    let isCollect = this.state.topicInfo.is_collect ? 'DE_COLLECT_TOPIC' : 'COLLECT_TOPIC'
    let url = service[isCollect]
    let that = this
    axios.post(url,{
      topic_id: that.state.topicId,
      accesstoken: localStorage.getItem('userToken')
    }).then((response) => {
      message.success('操作成功')
    })
    .catch((error) => {
      message.error(error)
    })
  }
  publishRichText(html) {
    let isLogin = util.isLogin();
    if (!isLogin) {
      alert('请登录再进行操作');
      return false
    }
    let url = service.NEW_REPLY.replace('{topicId}',this.state.topicId)
    axios.post(url,{
      accesstoken: localStorage.getItem('userToken'),
      content:html
    }).then((response) => {
      message.success('操作成功')
      this.getTopicDetail({
        mdrender: "true",
        accesstoken: localStorage.getItem('user')
      });
    })
    .catch((error) => {
      message.error(error.response.data.error_msg)
    })

  }


  render() {
    let topicInfo = this.state.topicInfo
    let isCollect = this.state.topicInfo.is_collect
    let richTextSet = {
      height: 260
    }
    return (
    <div>
      <h3 className="block-title mt20">信息区</h3>
      {topicInfo.title && <div className="topic-detail-head">
        <h2>{topicInfo.title}</h2>
        <Button type="primary" style={{"position":"absolute","right":"10px","top":"10px"}} onClick={this.collectTopic}>{isCollect ? '取消收藏' : '收藏'}</Button>
        <p>
          <span>作者:{topicInfo.author.loginname}</span>
          <span>创建时间:{util.formatTime(topicInfo.create_at)}</span>
          <span>阅读数:{topicInfo.visit_count}</span>
          <span>最近回复时间:{util.formatTime(topicInfo.last_reply_at)}</span>
        </p>
      </div>}
      <h3 className="block-title mt20">内容区</h3>
      <div dangerouslySetInnerHTML={{__html: topicInfo.content}} className="md"></div>
      <h3 className="block-title mt20">回复区：共{topicInfo.reply_count}条回复</h3>
      <CommentList commentList={topicInfo.replies}/>
      <h3 className="block-title mt20">添加回复</h3>
      <RichText richTextSet={richTextSet} publishRichText={this.publishRichText}/>
    </div> 
    );
  }
}

export default TopicDetail;