webpackJsonp([4],{364:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(395),l=a(r),u=n(78),p=a(u),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(397),n(79);var c=n(0),f=a(c),m=n(80),g=a(m),h=n(43),b=n(664),y=a(b),v=n(81),k=a(v),x=n(44),w=a(x),E=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={hasReadMeg:[],notReadMsg:[],loading:!1},n.getMessage=n.getMessage.bind(n),n.markAll=n.markAll.bind(n),n.markMsg=n.markMsg.bind(n),n}return s(t,e),d(t,[{key:"componentWillMount",value:function(){this.getMessage()}},{key:"getMessage",value:function(){var e=this,t=w.default.isLogin(),n=this.props,a=n.history,i=n.match;if(!t)return p.default.warn("您处于未登录状态，2秒后自动跳装至登录页面"),setTimeout(function(){a.push("/login",{preUrl:i.path})},2e3),!1;var o=k.default.USER_MESSAGE_ALL;this.setState({loading:!0}),g.default.get(o,{params:{accesstoken:localStorage.getItem("userToken"),mdrender:"false"}}).then(function(t){e.setState({hasReadMeg:t.data.data.has_read_messages,notReadMsg:t.data.data.hasnot_read_messages,loading:!1}),e.props.changeMsgCount(t.data.data.hasnot_read_messages.length)}).catch(function(t){e.setState({loading:!1}),p.default.error(t)})}},{key:"markAll",value:function(){var e=k.default.MARK_MESSAGE_ALL,t=this;g.default.post(e,{accesstoken:localStorage.getItem("userToken")}).then(function(e){t.getMessage()}).catch(function(e){p.default.error(e)})}},{key:"markMsg",value:function(e){var t=k.default.MARK_MESSAGE.replace("{msgId}",e),n=this;g.default.post(t,{accesstoken:localStorage.getItem("userToken")}).then(function(e){n.getMessage()}).catch(function(e){p.default.error(e)})}},{key:"render",value:function(){var e=this,t=this.state.hasReadMeg,n=this.state.notReadMsg;return this.state.loading?f.default.createElement(l.default,{tip:"正在加载...",size:"large"}):f.default.createElement("div",null,f.default.createElement("h3",{className:"block-title mt20"},f.default.createElement("a",{href:"javascript:;",onClick:this.markAll,className:"float-right"},"全部已读"),f.default.createElement(h.Link,{to:"/"},"首页"),f.default.createElement("span",{className:"bread-split"},"/"),"未读消息"),n.length?f.default.createElement("ul",null,n.map(function(t,n){return f.default.createElement(y.default,{message:t,key:t.id,mark:e.markMsg})})):f.default.createElement("div",{className:"item",style:{lineHeight:"34px"}},"暂无消息"),f.default.createElement("h3",{className:"block-title mt20"},"已读消息"),t.length?f.default.createElement("ul",null,t.map(function(e,t){return f.default.createElement(y.default,{message:e,key:t})})):f.default.createElement("div",{className:"item",style:{lineHeight:"34px"}},"暂无消息"))}}]),t}(f.default.Component);t.default=E},395:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(5),o=a(i),s=n(13),r=a(s),l=n(2),u=a(l),p=n(6),d=a(p),c=n(3),f=a(c),m=n(4),g=a(m),h=n(0),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(h),y=n(1),v=a(y),k=n(7),x=a(k),w=n(23),E=a(w),_=n(396),M=a(_),N=n(35),O=a(N),S=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&(n[a[i]]=e[a[i]]);return n},T=function(e){function t(e){(0,u.default)(this,t);var n=(0,f.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),a=e.spinning;return n.state={spinning:a},n}return(0,g.default)(t,e),(0,d.default)(t,[{key:"isNestedPattern",value:function(){return!(!this.props||!this.props.children)}},{key:"componentDidMount",value:function(){(0,M.default)()||this.setState({notCssAnimationSupported:!0})}},{key:"componentWillUnmount",value:function(){this.debounceTimeout&&clearTimeout(this.debounceTimeout),this.delayTimeout&&clearTimeout(this.delayTimeout)}},{key:"componentWillReceiveProps",value:function(e){var t=this,n=this.props.spinning,a=e.spinning,i=this.props.delay;this.debounceTimeout&&clearTimeout(this.debounceTimeout),n&&!a?(this.debounceTimeout=window.setTimeout(function(){return t.setState({spinning:a})},200),this.delayTimeout&&clearTimeout(this.delayTimeout)):a&&i&&!isNaN(Number(i))?(this.delayTimeout&&clearTimeout(this.delayTimeout),this.delayTimeout=window.setTimeout(function(){return t.setState({spinning:a})},i)):this.setState({spinning:a})}},{key:"renderIndicator",value:function(){var e=this.props,t=e.prefixCls,n=e.indicator,a=t+"-dot";return b.isValidElement(n)?b.cloneElement(n,{className:(0,x.default)(n.props.className,a)}):b.createElement("span",{className:(0,x.default)(a,t+"-dot-spin")},b.createElement("i",null),b.createElement("i",null),b.createElement("i",null),b.createElement("i",null))}},{key:"render",value:function(){var e,t=this.props,n=t.className,a=t.size,i=t.prefixCls,s=t.tip,l=t.wrapperClassName,u=S(t,["className","size","prefixCls","tip","wrapperClassName"]),p=this.state,d=p.spinning,c=p.notCssAnimationSupported,f=(0,x.default)(i,(e={},(0,r.default)(e,i+"-sm","small"===a),(0,r.default)(e,i+"-lg","large"===a),(0,r.default)(e,i+"-spinning",d),(0,r.default)(e,i+"-show-text",!!s||c),e),n),m=(0,O.default)(u,["spinning","delay","indicator"]),g=b.createElement("div",(0,o.default)({},m,{className:f}),this.renderIndicator(),s?b.createElement("div",{className:i+"-text"},s):null);if(this.isNestedPattern()){var h,y=i+"-nested-loading";l&&(y+=" "+l);var v=(0,x.default)((h={},(0,r.default)(h,i+"-container",!0),(0,r.default)(h,i+"-blur",d),h));return b.createElement(E.default,(0,o.default)({},m,{component:"div",className:y,style:null,transitionName:"fade"}),d&&b.createElement("div",{key:"loading"},g),b.createElement("div",{className:v,key:"container"},this.props.children))}return g}}]),t}(b.Component);t.default=T,T.defaultProps={prefixCls:"ant-spin",spinning:!0,size:"default",wrapperClassName:""},T.propTypes={prefixCls:v.default.string,className:v.default.string,spinning:v.default.bool,size:v.default.oneOf(["small","default","large"]),wrapperClassName:v.default.string,indicator:v.default.node},e.exports=t.default},396:function(e,t,n){"use strict";function a(){if(void 0!==i)return i;var e="Webkit Moz O ms Khtml".split(" "),t=document.createElement("div");if(void 0!==t.style.animationName&&(i=!0),void 0!==i)for(var n=0;n<e.length;n++)if(void 0!==t.style[e[n]+"AnimationName"]){i=!0;break}return i=i||!1}Object.defineProperty(t,"__esModule",{value:!0});var i=void 0;t.default=a,e.exports=t.default},397:function(e,t,n){"use strict";n(16),n(398)},398:function(e,t,n){var a=n(399);"string"==typeof a&&(a=[[e.i,a,""]]);var i={hmr:!0};i.transform=void 0,i.insertInto=void 0;n(12)(a,i);a.locals&&(e.exports=a.locals)},399:function(e,t,n){t=e.exports=n(11)(!1),t.push([e.i,'/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-spin {\n  font-family: "Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  color: #1890ff;\n  vertical-align: middle;\n  text-align: center;\n  opacity: 0;\n  position: absolute;\n  transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  display: none;\n}\n.ant-spin-spinning {\n  opacity: 1;\n  position: static;\n  display: inline-block;\n}\n.ant-spin-nested-loading {\n  position: relative;\n}\n.ant-spin-nested-loading > div > .ant-spin {\n  position: absolute;\n  height: 100%;\n  max-height: 320px;\n  width: 100%;\n  z-index: 4;\n}\n.ant-spin-nested-loading > div > .ant-spin .ant-spin-dot {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -10px;\n}\n.ant-spin-nested-loading > div > .ant-spin .ant-spin-text {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  padding-top: 5px;\n  text-shadow: 0 1px 2px #fff;\n}\n.ant-spin-nested-loading > div > .ant-spin.ant-spin-show-text .ant-spin-dot {\n  margin-top: -20px;\n}\n.ant-spin-nested-loading > div > .ant-spin-sm .ant-spin-dot {\n  margin: -7px;\n}\n.ant-spin-nested-loading > div > .ant-spin-sm .ant-spin-text {\n  padding-top: 2px;\n}\n.ant-spin-nested-loading > div > .ant-spin-sm.ant-spin-show-text .ant-spin-dot {\n  margin-top: -17px;\n}\n.ant-spin-nested-loading > div > .ant-spin-lg .ant-spin-dot {\n  margin: -16px;\n}\n.ant-spin-nested-loading > div > .ant-spin-lg .ant-spin-text {\n  padding-top: 11px;\n}\n.ant-spin-nested-loading > div > .ant-spin-lg.ant-spin-show-text .ant-spin-dot {\n  margin-top: -26px;\n}\n.ant-spin-container {\n  position: relative;\n  zoom: 1;\n}\n.ant-spin-container:before,\n.ant-spin-container:after {\n  content: " ";\n  display: table;\n}\n.ant-spin-container:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n.ant-spin-blur {\n  overflow: hidden;\n  opacity: 0.7;\n  -webkit-filter: blur(0.5px);\n  filter: blur(0.5px);\n  /* autoprefixer: off */\n  filter: progid\\:DXImageTransform\\.Microsoft\\.Blur(PixelRadius\\=1, MakeShadow\\=false);\n  -webkit-transform: translateZ(0);\n}\n.ant-spin-blur:after {\n  content: \'\';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #fff;\n  opacity: 0.3;\n  transition: all .3s;\n  z-index: 10;\n}\n.ant-spin-tip {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-spin-dot {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n}\n.ant-spin-dot i {\n  width: 9px;\n  height: 9px;\n  border-radius: 100%;\n  background-color: #1890ff;\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n  display: block;\n  position: absolute;\n  opacity: 0.3;\n  -webkit-animation: antSpinMove 1s infinite linear alternate;\n          animation: antSpinMove 1s infinite linear alternate;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n}\n.ant-spin-dot i:nth-child(1) {\n  left: 0;\n  top: 0;\n}\n.ant-spin-dot i:nth-child(2) {\n  right: 0;\n  top: 0;\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n.ant-spin-dot i:nth-child(3) {\n  right: 0;\n  bottom: 0;\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n.ant-spin-dot i:nth-child(4) {\n  left: 0;\n  bottom: 0;\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n.ant-spin-dot-spin {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-animation: antRotate 1.2s infinite linear;\n          animation: antRotate 1.2s infinite linear;\n}\n.ant-spin-sm .ant-spin-dot {\n  width: 14px;\n  height: 14px;\n}\n.ant-spin-sm .ant-spin-dot i {\n  width: 6px;\n  height: 6px;\n}\n.ant-spin-lg .ant-spin-dot {\n  width: 32px;\n  height: 32px;\n}\n.ant-spin-lg .ant-spin-dot i {\n  width: 14px;\n  height: 14px;\n}\n.ant-spin.ant-spin-show-text .ant-spin-text {\n  display: block;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /* IE10+ */\n  .ant-spin-blur {\n    background: #fff;\n    opacity: 0.5;\n  }\n}\n@-webkit-keyframes antSpinMove {\n  to {\n    opacity: 1;\n  }\n}\n@keyframes antSpinMove {\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes antRotate {\n  to {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n}\n@keyframes antRotate {\n  to {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n}\n',""])},664:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),u=a(l),p=n(43),d=n(88),c=a(d),f=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.markMsg=n.markMsg.bind(n),n}return s(t,e),r(t,[{key:"markMsg",value:function(){this.props.mark(this.props.message.id)}},{key:"render",value:function(){var e=this.props.message;return u.default.createElement("li",{className:"item",style:{lineHeight:"34px"}},u.default.createElement(p.Link,{title:e.author.loginname,className:"float-left",to:"/user/"+e.author.loginname},u.default.createElement("img",{src:e.author.avatar_url})),u.default.createElement("div",{className:"item-content"},u.default.createElement("div",{className:"item-content-title"},u.default.createElement(p.Link,{to:"/user/"+e.author.loginname},e.author.loginname),u.default.createElement("span",{style:{margin:"0px 10px"}},"在话题"),u.default.createElement(p.Link,{to:"/topic/"+e.topic.id},e.topic.title),u.default.createElement("span",{style:{margin:"0px 10px"}},c.default.messageType[e.type]+"了你"),!e.has_read&&u.default.createElement("a",{href:"javascript:;",onClick:this.markMsg,className:"float-right"},"已读"))))}}]),t}(u.default.Component);t.default=f}});