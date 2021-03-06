webpackJsonp([1],{"1bLg":function(n,t){},"9mYI":function(n,t){},AQrK:function(n,t){},MPzD:function(n,t){},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("VCXJ"),o=e("rVsN"),i=e.n(o),s=e("lC5x"),u=e.n(s),a=e("J0Oq"),l=e.n(a),c=e("OkKB"),d=e.n(c),h={name:"Editor",props:["code"],computed:{highlightedCode:function(){return d.a.highlight(this.code,d.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}},m={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:this._s(this.codeInStyleTag)}}),this._v(" "),t("pre",{domProps:{innerHTML:this._s(this.highlightedCode)}})])},staticRenderFns:[]};var f=e("Z0/y")(h,m,!1,function(n){e("b2vR")},"data-v-17e5246a",null).exports,p=e("O7X3"),g=e.n(p),w={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?g()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}},v={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:this.enableHtml}},[this.enableHtml?t("div",{domProps:{innerHTML:this._s(this.result)}}):t("pre",[this._v(this._s(this.result))])])},staticRenderFns:[]};var k=e("Z0/y")(w,v,!1,function(n){e("AQrK")},"data-v-45c6d8da",null).exports,b=(e("MPzD"),{name:"app",components:{StyleEditor:f,ResumeEditor:k},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* 大家好，我是方方\n* 二月了，好多公司都在招聘，你是不是也在准备简历呀。\n* 说做就做，我也来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"方应杭\n----\n\n资深前端工程师，资深前端讲师，现在在 [饥人谷](http://jirengu.com) 教前端课程。\n\n技能\n----\n\n* 前端开发\n* Rails 开发\n* Node.js 开发\n* 前端授课\n\n工作经历\n----\n\n1. [饥人谷](http://jirengu.com)\n2. 腾讯即时通讯平台部\n3. 阿里巴巴B2B部门\n4. 彩程知人项目组\n\n链接\n----\n\n* [GitHub](https://github.com/frankfang)\n* [我的文章](https://www.zhihu.com/people/zhihusucks/pins/posts)\n\n> 如果你喜欢这个效果，Fork [我的项目](https://github.com/jirengu-inc/animating-resume)，打造你自己的简历！\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){var n=l()(u.a.mark(function n(){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),showHtml:function(){var n=this;return new i.a(function(t,e){n.enableHtml=!0,t()})},progressivelyShowStyle:function(n){var t=this;return new i.a(function(e,r){var o=t.interval,i=l()(u.a.mark(function t(){var r,s,a,l,c,d=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:s=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),a=s-r.length,this.currentStyle.length<s?(l=this.currentStyle.length-a,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new i.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){n.currentMarkdown.length<r?(n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1),n.currentMarkdown[n.currentMarkdown.length-1],"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)):t()}()})}}}),y={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:this.currentStyle}}),this._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:this.currentMarkdown,enableHtml:this.enableHtml}})],1)},staticRenderFns:[]};var E=e("Z0/y")(b,y,!1,function(n){e("9mYI")},"data-v-647fbf48",null).exports,S={name:"app",components:{StyleEditor:f,ResumeEditor:k},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* 大家好，我是方方\n* 二月了，好多公司都在招聘\n* 你是不是也在准备简历呀。\n* 说做就做，我也来写一份简历！\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  transition: all .3s;\n}\n/* 白色背景太单调了，我们来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加点 3D 效果呗 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 好了，我开始写简历了 */\n\n\n","\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式\n * 简单，用开源工具翻译成 HTML 就行了\n */\n",'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"方应杭\n----\n\n资深前端工程师，资深前端讲师\n现在在 [饥人谷](http://jirengu.com) 教前端课程。\n\n技能\n----\n\n* 前端开发\n* Rails 开发\n* Node.js 开发\n* 前端授课\n\n工作经历\n----\n\n1. [饥人谷](http://jirengu.com)\n2. 腾讯即时通讯平台部\n3. 阿里巴巴B2B部门\n4. 彩程知人项目组\n\n链接\n----\n\n* [GitHub](https://github.com/frankfang)\n* [我的文章](https://www.zhihu.com/people/zhihusucks/pins/posts)\n\n> 如果你喜欢这个效果，\nFork [我的项目](https://github.com/jirengu-inc/animating-resume)，打造你自己的简历！\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){var n=l()(u.a.mark(function n(){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),showHtml:function(){var n=this;return new i.a(function(t,e){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),t()})},progressivelyShowStyle:function(n){var t=this;return new i.a(function(e,r){var o=t.interval,i=l()(u.a.mark(function t(){var r,s,a,l,c,d=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=this.fullStyle[n]){t.next=3;break}return t.abrupt("return");case 3:s=this.fullStyle.filter(function(t,e){return e<=n}).map(function(n){return n.length}).reduce(function(n,t){return n+t},0),a=s-r.length,this.currentStyle.length<s?(l=this.currentStyle.length-a,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):e();case 6:case"end":return t.stop()}},t,this)})).bind(t);i()})},progressivelyShowResume:function(){var n=this;return new i.a(function(t,e){var r=n.fullMarkdown.length,o=n.interval;!function e(){n.currentMarkdown.length<r?(n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1),n.currentMarkdown[n.currentMarkdown.length-1],"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(e,o)):t()}()})}}},x={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:this.currentStyle}}),this._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:this.currentMarkdown,enableHtml:this.enableHtml}})],1)},staticRenderFns:[]};var M=e("Z0/y")(S,x,!1,function(n){e("1bLg")},"data-v-6485c828",null).exports,H=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(H>500?E:M)}})},b2vR:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.fafa8f6dca98d0cf11ff.js.map