(this["webpackJsonpavatar-expander"]=this["webpackJsonpavatar-expander"]||[]).push([[0],{112:function(e,t,a){e.exports=a(136)},117:function(e,t,a){},118:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),i=(a(117),a(17)),c=a(18),s=a(21),u=a(20),d=(a(118),a(185)),m=a(186),h=a(94),p=a(61),f=a(184),E=a(199),g=a(183),b=a(181),k=a(182),v=a(180),j=a(176),w=a(12),y=a(13);function C(){var e=r.a.useState(!1),t=Object(p.a)(e,2),a=t[0],n=t[1],o=function(){n(!1)};return r.a.createElement("div",null,r.a.createElement(j.a,{color:"inherit","aria-label":"help",component:"span",onClick:function(){n(!0)}},r.a.createElement(w.a,{icon:y.c,color:"white"})),r.a.createElement(E.a,{open:a,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(v.a,{id:"alert-dialog-title"},"How to Use"),r.a.createElement(b.a,null,r.a.createElement(k.a,{id:"alert-dialog-description"},r.a.createElement("p",null,"Enter id to search."),r.a.createElement("p",null,"Click on a node or on a friend in the friend list to search that node."),r.a.createElement("p",null,"Double click on a node to expand from that node."),r.a.createElement("p",null,"Scroll down/up to zoom in/out."),r.a.createElement("p",null,"Drag and drop on an empty space to move the graph."))),r.a.createElement(g.a,null,r.a.createElement(f.a,{onClick:o,color:"primary",autoFocus:!0},"OK"))))}function O(){var e=r.a.useState(!1),t=Object(p.a)(e,2),a=t[0],n=t[1],o=function(){n(!1)};return r.a.createElement("div",null,r.a.createElement(j.a,{color:"inherit","aria-label":"help",component:"span",onClick:function(){n(!0)}},r.a.createElement(w.a,{icon:y.b,color:"white"})),r.a.createElement(E.a,{open:a,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(v.a,{id:"alert-dialog-title"},"About AE"),r.a.createElement(b.a,null,r.a.createElement(k.a,{id:"alert-dialog-description"},r.a.createElement("p",null,"Avatar Expander v1.0"),r.a.createElement("p",null,"A simple graph visualization app."),r.a.createElement("p",null,"Made by Morgen Sudyanto - 13518093"))),r.a.createElement(g.a,null,r.a.createElement(f.a,{onClick:o,color:"primary",autoFocus:!0},"Noice"))))}var D=a(187),N=function(){return r.a.createElement(d.a,{position:"sticky"},r.a.createElement(m.a,null,r.a.createElement(D.a,{container:!0,alignItems:"flex-start",justify:"flex-start",direction:"row"},r.a.createElement(h.a,{variant:"h6",color:"inherit"},"Avatar Expander")),r.a.createElement(D.a,{container:!0,alignItems:"flex-start",justify:"flex-end",direction:"row"},r.a.createElement(C,null),r.a.createElement(O,null))))},x=a(5),S=a(197),T=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},r.a.createElement(S.a,{error:this.props.error,id:"filled-number",label:"Enter id to search",type:"number",InputLabelProps:{shrink:!0},variant:"filled",onChange:this.props.onChange,helperText:this.props.errorMessage}))}}]),a}(r.a.Component),L=Object(x.a)({root:{width:"100%",margin:"1% auto",display:"flex",justifyContent:"center"}})(T),I=a(91),M=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e={highlightDegree:0,node:{color:"lightgreen",size:120,highlightStrokeColor:"blue"},directed:!0,height:window.innerHeight,width:3*window.innerWidth/4};return r.a.createElement("div",null,this.props.graphData.nodes.length>0&&r.a.createElement(I.Graph,{id:"graph-id",data:this.props.graphData,config:e,onClickNode:this.props.onClickNode,onDoubleClickNode:this.props.onDoubleClickNode}))}}]),a}(r.a.Component),A=a(190),F=a(194),G=a(193),z=a(189),W=a(191),B=a(192),H=a(93),J=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"renderElement",value:function(e){switch(e){case"fire":return r.a.createElement(w.a,{icon:y.a,color:"red"});case"water":return r.a.createElement(w.a,{icon:y.a,color:"blue"});case"air":return r.a.createElement(w.a,{icon:y.a,color:"#79edfe"});case"earth":return r.a.createElement(w.a,{icon:y.a,color:"brown"});default:return r.a.createElement(w.a,{icon:y.a,color:"black"})}}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(z.a,{className:t.root,component:H.a,elevation:5},this.props.friendsList.length>0&&r.a.createElement(h.a,{className:t.title,variant:"h6"},"Friends"),this.props.friendsList.length>0&&r.a.createElement(A.a,{"aria-label":"friends table"},r.a.createElement(W.a,{className:t.head},r.a.createElement(B.a,null,r.a.createElement(G.a,{className:t.headText},"ID"),r.a.createElement(G.a,{className:t.headText},"Name"),r.a.createElement(G.a,{className:t.headText},"Element"))),r.a.createElement(F.a,null,this.props.friendsList.map((function(t){return r.a.createElement(B.a,{onClick:function(){return e.props.onClick(t.id)},key:t.id},r.a.createElement(G.a,null,t.id),r.a.createElement(G.a,null,t.name),r.a.createElement(G.a,null,e.renderElement(t.element)," ",t.element))})))))}}]),a}(r.a.Component),P=Object(x.a)({root:{margin:"3% 5%",width:"90%"},title:{padding:"1.5%"},head:{background:"black"},headText:{color:"white"}})(J),K=a(195),U=a(196),V=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"renderElement",value:function(e){switch(e){case"fire":return r.a.createElement(w.a,{icon:y.a,color:"red"});case"water":return r.a.createElement(w.a,{icon:y.a,color:"blue"});case"air":return r.a.createElement(w.a,{icon:y.a,color:"#79edfe"});case"earth":return r.a.createElement(w.a,{icon:y.a,color:"brown"});default:return r.a.createElement(w.a,{icon:y.a,color:"black"})}}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(K.a,{className:e.root,elevation:5},null!==this.props.targetData&&r.a.createElement(U.a,null,r.a.createElement(h.a,{className:e.title,variant:"h6"},"Suspect Profile"),r.a.createElement(h.a,{className:e.data},"ID - ",this.props.targetData.id,r.a.createElement("br",null),"Name - ",this.props.targetData.name,r.a.createElement("br",null),"Element - ",this.renderElement(this.props.targetData.element)," ",this.props.targetData.element)))}}]),a}(r.a.Component),$=Object(x.a)({root:{width:"80%",margin:"2% auto"},title:{padding:"1.5%"},data:{padding:"1.5%"}})(V),q=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleOnChange=function(e){n.setState({target:e.target.value,startEmpty:!0},n.fetchTarget)},n.updateFriendsList=function(){var e;e={id:n.state.json.id,name:n.state.json.name,element:n.state.json.element},n.setState({targetData:e});var t=[];n.state.json.friends.forEach((function(e){e.id!==n.state.json.id&&t.push({id:e.id,name:e.name,element:e.element})})),t.sort((function(e,t){return e.id-t.id})),t=t.filter((function(e,t,a){return t===a.findIndex((function(t){return t.id===e.id}))})),n.setState({friendsList:t})},n.updateGraphData=function(){var e,t;switch(e=!0===n.state.startEmpty?{nodes:[],links:[]}:n.state.graphData,n.state.json.element){case"fire":t="red";break;case"water":t="blue";break;case"air":t="#79edfe";break;case"earth":t="brown";break;default:t="black"}var a=n.state.json.id;e.nodes.push({id:n.state.json.id,name:n.state.json.name,color:t}),n.state.json.friends.forEach((function(a){switch(a.element){case"fire":t="red";break;case"water":t="blue";break;case"air":t="#79edfe";break;case"earth":t="brown";break;default:t="black"}e.nodes.push({id:a.id,name:a.name,color:t})})),e.nodes=e.nodes.filter((function(e,t,a){return t===a.findIndex((function(t){return t.id===e.id}))})),n.state.json.friends.forEach((function(t){e.links.push({source:a,target:t.id})})),e.links=e.links.filter((function(e,t,a){return t===a.findIndex((function(t){return t.source===e.source&&t.target===e.target||e.source===e.target}))})),n.setState({graphData:e})},n.fetchTarget=function(){fetch("https://avatar.labpro.dev/friends/"+n.state.target,{method:"GET"}).then((function(e){if(200===e.status)return e.json();throw new Error(e.statusText)})).then((function(e){return n.setState({error:!1,errorMessage:"",json:e.payload})})).then(n.updateFriendsList).then(n.updateGraphData).catch((function(e){return n.setState({error:!0,errorMessage:e.message})}))},n.handleOnClickNode=function(e){n.setState({target:e,startEmpty:!0},n.fetchTarget)},n.handleOnDoubleClickNode=function(e){n.setState({target:e,startEmpty:!1},n.fetchTarget)},n.state={target:"",json:null,targetData:null,friendsList:[],graphData:{nodes:[],links:[]},startEmpty:!1,error:!1,errorMessage:""},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(D.a,{container:!0},r.a.createElement(D.a,{item:!0,xs:12},r.a.createElement(L,{target:this.state.target,json:this.state.json,onChange:this.handleOnChange,error:this.state.error,errorMessage:this.state.errorMessage})),r.a.createElement(D.a,{item:!0,md:9},r.a.createElement(M,{target:this.state.target,graphData:this.state.graphData,onClickNode:this.handleOnClickNode,onDoubleClickNode:this.handleOnDoubleClickNode})),r.a.createElement(D.a,{item:!0,xs:12,md:3},r.a.createElement($,{targetData:this.state.targetData}),r.a.createElement(P,{friendsList:this.state.friendsList,onClick:this.handleOnClickNode}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[112,1,2]]]);
//# sourceMappingURL=main.b84fc772.chunk.js.map