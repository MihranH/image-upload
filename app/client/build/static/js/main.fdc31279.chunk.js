(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{129:function(e,t,n){},180:function(e,t,n){},199:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},279:function(e,t,n){},281:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),i=n.n(c),s=(n(180),n(181),n(117)),o=n(26),l=n(35),u=n(36),d=n(38),p=n(37),h=n(50),j=n.n(h),b=n(75),g=n(76),m=n.n(g);function f(){return(f=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("/api/v1/images/upload-image",t);case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(){return(v=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post("/api/v1/images/add",{url:t,actions:n});case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function O(){return(O=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("/api/v1/images");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(){return(x=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.delete("/api/v1/images/".concat(t));case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var y=n(167),C=n(284),w=n(34),k=n(288),A=n(173),U=(n(199),n(7)),N=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleImgUpload=function(e){if("image/jpeg"!==e.type&&"image/png"!==e.type)return y.b.error("You should upload either jpeg or png");var t=new FormData;t.append("image",e),y.b.loading("Uploading..."),function(e){return f.apply(this,arguments)}(t).then((function(e){return y.b.destroy(),e?(a.setState({imgUrl:e}),y.b.success("Uploaded!")):y.b.error("Failed to upload")}))},a.copyURL=function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),y.b.destroy(),y.b.success("Image URL copied")},a.state={imgUrl:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state.imgUrl;return Object(U.jsxs)("div",{className:"upload-container",children:[Object(U.jsx)(C.a,{beforeUpload:this.handleImgUpload,showUploadList:!1,customRequest:function(){},children:Object(U.jsx)(w.a,{icon:Object(U.jsx)(k.a,{}),children:"Upload Image"})}),Boolean(t)&&Object(U.jsxs)("p",{children:[t,Object(U.jsx)(w.a,{type:"primary",shape:"circle",size:"small",icon:Object(U.jsx)(A.a,{}),onClick:function(){return e.copyURL(t)}})]})]})}}]),n}(a.Component),S=n(168),D=n(66),R=n(287),I=(n(202),n(129),n(286));function M(e){return!Object.keys(e).some((function(t){return""===e[t]}))}var P=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(D.a)({},e.target.name,e.target.value))},a.saveParams=function(){var e=a.state,t=e.width,n=e.height,r=e.top,c=e.left;if(!M(a.state))return y.b.error("Please provide all the fields");a.props.addAction({type:"crop",params:{width:t,height:n,top:r,left:c}}),y.b.success("Noted"),a.props.closeModal()},a.state={width:"",height:"",top:"",left:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.width,n=e.height,a=e.top,r=e.left;return Object(U.jsxs)(I.a,{visible:!0,onCancel:this.props.closeModal,onOk:this.saveParams,okText:"Done",children:[Object(U.jsxs)("div",{className:"action-inputs",children:[Object(U.jsx)("p",{children:"Width"}),Object(U.jsx)(R.a,{name:"width",value:t,onChange:this.handleChange,type:"number"})]}),Object(U.jsxs)("div",{className:"action-inputs",children:[Object(U.jsx)("p",{children:"Height"}),Object(U.jsx)(R.a,{name:"height",value:n,onChange:this.handleChange,type:"number"})]}),Object(U.jsxs)("div",{className:"action-inputs",children:[Object(U.jsx)("p",{children:"Top"}),Object(U.jsx)(R.a,{name:"top",value:a,onChange:this.handleChange,type:"number"})]}),Object(U.jsxs)("div",{className:"action-inputs",children:[Object(U.jsx)("p",{children:"Left"}),Object(U.jsx)(R.a,{name:"left",value:r,onChange:this.handleChange,type:"number"})]})]})}}]),n}(a.Component),L=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(D.a)({},e.target.name,e.target.value))},a.saveParams=function(){var e=a.state,t=e.width,n=e.height,r=e.aspectRatio;if(!M(a.state))return y.b.error("Please provide all the fields");a.props.addAction({type:"resize",params:{width:t,height:n,aspectRatio:r}}),y.b.success("Noted"),a.props.closeModal()},a.state={width:"",height:"",aspectRatio:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.width,n=e.height,a=e.aspectRatio;return Object(U.jsxs)(I.a,{visible:!0,onCancel:this.props.closeModal,onOk:this.saveParams,okText:"Done",children:[Object(U.jsxs)("div",{className:"action-inputs",children:[Object(U.jsx)("p",{children:"Width"}),Object(U.jsx)(R.a,{name:"width",value:t,onChange:this.handleChange,type:"number"})]}),Object(U.jsxs)("div",{className:"action-inputs",children:[Object(U.jsx)("p",{children:"Height"}),Object(U.jsx)(R.a,{name:"height",value:n,onChange:this.handleChange,type:"number"})]}),Object(U.jsxs)("div",{className:"action-inputs",children:[Object(U.jsx)("p",{children:"Aspect Ratio"}),Object(U.jsx)(R.a,{name:"aspectRatio",value:a,onChange:this.handleChange})]})]})}}]),n}(a.Component),F=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(D.a)({},e.target.name,e.target.value))},a.saveParams=function(){var e=a.state.percent;if(!M(a.state))return y.b.error("Please provide all the fields");a.props.addAction({type:"blur",params:{percent:e}}),y.b.success("Noted"),a.props.closeModal()},a.state={percent:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.percent;return Object(U.jsx)(I.a,{visible:!0,onCancel:this.props.closeModal,onOk:this.saveParams,okText:"Done",children:Object(U.jsxs)("div",{className:"action-inputs",children:[Object(U.jsx)("p",{children:"Percent"}),Object(U.jsx)(R.a,{name:"percent",value:e,onChange:this.handleChange,type:"number"})]})})}}]),n}(a.Component),T=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleAction=function(e){a.setState({type:e})},a.getAction=function(){switch(a.state.type){case"resize":return Object(U.jsx)(L,{closeModal:function(){return a.handleAction("")},addAction:a.props.addAction});case"crop":return Object(U.jsx)(P,{closeModal:function(){return a.handleAction("")},addAction:a.props.addAction});case"blur":return Object(U.jsx)(F,{closeModal:function(){return a.handleAction("")},addAction:a.props.addAction});default:return""}},a.state={type:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(U.jsxs)("div",{style:{margin:"15px"},children:[Object(U.jsx)(w.a,{style:{margin:"15px"},type:"primary",onClick:function(){return e.handleAction("resize")},children:"Resize"}),Object(U.jsx)(w.a,{style:{margin:"15px"},type:"primary",onClick:function(){return e.handleAction("crop")},children:"Crop"}),Object(U.jsx)(w.a,{style:{margin:"15px"},type:"primary",onClick:function(){return e.handleAction("blur")},children:"Blur"}),this.getAction()]})}}]),n}(a.Component),z=(n(203),n(283)),B=n(120),V=z.a.Column,J=I.a.confirm,E=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getData=function(){a.setState({loading:!0}),function(){return O.apply(this,arguments)}().then((function(e){a.setState({data:e,loading:!1})}))},a.deleteImage=function(e){J({title:"Are you sure you want to delete this image",okText:"Yes",cancelText:"No",onOk:function(){y.b.loading("Deleting..."),function(e){return x.apply(this,arguments)}(e).then((function(e){return y.b.destroy(),!0===e?(a.getData(),y.b.success("Deleted!")):y.b.error("Failed to delete")}))},onCancel:function(){}})},a.state={data:[],loading:!1},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,a=t.loading;return Object(U.jsx)("div",{className:"content",children:Object(U.jsxs)(z.a,{dataSource:n,loading:a,children:[Object(U.jsx)(V,{title:"Image URL",dataIndex:"url"},"url"),Object(U.jsx)(V,{title:"Log",render:function(e,t){return Object(U.jsx)(s.b,{to:"log/".concat(t.id),children:Object(U.jsx)(B.a,{className:"log-info-icon"})})}},"log"),Object(U.jsx)(V,{title:"Delete",render:function(t,n){return Object(U.jsx)(w.a,{type:"danger",onClick:function(){return e.deleteImage(n.id)},children:"Delete"})}},"delete")]})})}}]),n}(a.Component),H=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(D.a)({},e.target.name,e.target.value))},a.addImg=function(){var e=a.state,t=e.imgUrl,n=e.actions;if(!t)return y.b.error("Image url should not be empty");y.b.loading("Adding..."),a.setState({loading:!0}),function(e,t){return v.apply(this,arguments)}(t,n).then((function(e){return y.b.destroy(),a.setState({loading:!1,imgUrl:""}),!0===e?(a.list&&a.list.current&&a.list.current.getData(),y.b.success("Added!")):y.b.error("Failed to add")}))},a.addAction=function(e){var t=a.state.actions;a.setState({actions:[].concat(Object(S.a)(t),[e])})},a.state={imgUrl:"",actions:[],loading:!1},a.list=r.a.createRef(),a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.imgUrl,n=(e.actions,e.loading);return Object(U.jsxs)("div",{children:[Object(U.jsx)(R.a,{className:"url-input",placeholder:"Image URL",name:"imgUrl",value:t,onChange:this.handleChange}),Object(U.jsx)(w.a,{type:"primary",onClick:this.addImg,loading:n,children:"Add"}),Boolean(t)&&Object(U.jsx)(T,{addAction:this.addAction}),Object(U.jsx)(E,{ref:this.list})]})}}]),n}(a.Component);var W=function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(N,{}),Object(U.jsx)(H,{})]})};function Y(){return(Y=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("/api/v1/logs/".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var q=n(285),G=(n(279),z.a.Column),K=q.a.Title,Q=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getData=function(){var e=a.props.match.params.id;a.setState({loading:!0}),function(e){return Y.apply(this,arguments)}(e).then((function(e){a.setState({data:e,loading:!1})}))},a.review=function(e){a.setState({reviewVisible:!0,params:JSON.parse(e)})},a.closeReviewModal=function(){a.setState({reviewVisible:!1,params:{}})},a.state={data:[],loading:!1,reviewVisible:!1,params:{}},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,a=t.loading,r=t.reviewVisible,c=t.params;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(K,{className:"title-logs",children:"Logs"}),Object(U.jsx)("div",{className:"content-logs",children:Object(U.jsxs)(z.a,{dataSource:n,loading:a,children:[Object(U.jsx)(G,{title:"Type",dataIndex:"type"},"type"),Object(U.jsx)(G,{title:"Params",render:function(t,n){return Object(U.jsx)(w.a,{type:"primary",onClick:function(){return e.review(n.params)},children:"Review"})}},"params")]})}),Object(U.jsx)(I.a,{visible:r,footer:null,onCancel:this.closeReviewModal,width:300,children:Object(U.jsx)("div",{className:"modal-content-logs",children:Object.keys(c).map((function(e){return Object(U.jsxs)("p",{children:[Object(U.jsx)("strong",{children:e.charAt(0).toUpperCase()+e.substring(1)})," : ",c[e]]},e)}))})})]})}}]),n}(a.Component);var X=function(){return Object(U.jsx)(s.a,{children:Object(U.jsxs)(o.c,{children:[Object(U.jsx)(o.a,{path:"/",component:W,exact:!0}),Object(U.jsx)(o.a,{path:"/log/:id",component:Q})]})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,289)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(U.jsx)(r.a.StrictMode,{children:Object(U.jsx)(X,{})}),document.getElementById("root")),Z()}},[[281,1,2]]]);
//# sourceMappingURL=main.fdc31279.chunk.js.map