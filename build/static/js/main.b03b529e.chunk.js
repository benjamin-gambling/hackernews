(this["webpackJsonphackernew-clone"]=this["webpackJsonphackernew-clone"]||[]).push([[0],{54:function(e,n,t){e.exports=t(75)},59:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var a=t(41),r=t(1),i=t.n(r),o=t(45),c=t.n(o),s=(t(59),t(13)),l=t(14),u=t(16),p=t(15),d=t(8),m=t(51);function f(e){return function(e,n){var t=e-n;return t<2e4?"just now":t<6e4?"less than 1 min ago":t<36e5?Math.round(t/6e4)+" min ago":t<864e5?Math.round(t/36e5)+" h ago":t<2592e6?Math.round(t/864e5)+" days ago":t<31536e6?Math.round(t/2592e6)+" mo ago":Math.round(t/31536e6)+" years ago"}((new Date).getTime(),new Date(e).getTime())}var v=t(22),h=t(23),b=t.n(h);function k(){var e=Object(v.a)(["\n  subscription {\n    newVote {\n      id\n      link {\n        id\n        url\n        description\n        createdAt\n        postedBy {\n          id\n          name\n        }\n        votes {\n          id\n          user {\n            id\n          }\n        }\n      }\n      user {\n        id\n      }\n    }\n  }\n"]);return k=function(){return e},e}function g(){var e=Object(v.a)(["\n  subscription {\n    newLink {\n      id\n      url\n      description\n      createdAt\n      postedBy {\n        id\n        name\n      }\n      votes {\n        id\n        user {\n          id\n        }\n      }\n    }\n  }\n"]);return g=function(){return e},e}function y(){var e=Object(v.a)(["\n  mutation VoteMutation($linkId: ID!) {\n    vote(linkId: $linkId) {\n      id\n      link {\n        id\n        votes {\n          id\n          user {\n            id\n          }\n        }\n      }\n      user {\n        id\n      }\n    }\n  }\n"]);return y=function(){return e},e}function E(){var e=Object(v.a)(["\n  mutation LoginMutation($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n    }\n  }\n"]);return E=function(){return e},e}function w(){var e=Object(v.a)(["\n  mutation SignupMutation($email: String!, $password: String!, $name: String!) {\n    signup(email: $email, password: $password, name: $name) {\n      token\n    }\n  }\n"]);return w=function(){return e},e}function O(){var e=Object(v.a)(["\n  mutation PostMutation($description: String!, $url: String!) {\n    post(description: $description, url: $url) {\n      id\n      createdAt\n      url\n      description\n    }\n  }\n"]);return O=function(){return e},e}function j(){var e=Object(v.a)(["\n  query FeedSearchQuery($filter: String!) {\n    feed(filter: $filter) {\n      links {\n        id\n        url\n        description\n        createdAt\n        postedBy {\n          id\n          name\n        }\n        votes {\n          id\n          user {\n            id\n          }\n        }\n      }\n    }\n  }\n"]);return j=function(){return e},e}function N(){var e=Object(v.a)(["\n  query FeedQuery($take: Int, $skip: Int, $orderBy: LinkOrderByInput) {\n    feed(take: $take, skip: $skip, orderBy: $orderBy) {\n      links {\n        id\n        createdAt\n        url\n        description\n        postedBy {\n          id\n          name\n        }\n        votes {\n          id\n          user {\n            id\n          }\n        }\n      }\n      count\n    }\n  }\n"]);return N=function(){return e},e}var S=b()(N()),x=b()(j()),_=b()(O()),C=b()(w()),$=b()(E()),A=b()(y()),I=b()(g()),B=b()(k()),T=t(33),D=function(e){Object(u.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this,n=localStorage.getItem("auth-token");return i.a.createElement("div",{className:"flex mt2 items-start"},i.a.createElement("div",{className:"flex items-center"},i.a.createElement("span",{className:"gray"},this.props.index+1,"."),n&&i.a.createElement(T.a,{mutation:A,variables:{linkId:this.props.link.id},update:function(n,t){var a=t.data.vote;e.props.updateStoreAfterVote(n,a,e.props.link.id)}},(function(e){return i.a.createElement("div",{id:"upvote",className:"ml1 gray f11",onClick:e},"\u25b2")}))),i.a.createElement("div",{className:"ml1"},i.a.createElement("div",null,this.props.link.description," (",i.a.createElement("a",{href:this.props.link.url,target:"_blank",rel:"noopener noreferrer"},this.props.link.url),")"),i.a.createElement("div",{className:"f6 lh-copy gray"},this.props.link.votes.length," votes | by"," ",this.props.link.postedBy?this.props.link.postedBy.name:"Unknown"," ",f(this.props.link.createdAt))))}}]),t}(r.Component),q=function(e){Object(u.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r)))._updateCacheAfterVote=function(n,t,a){var r=e.props.location.pathname.includes("new"),i=parseInt(e.props.match.params.page,10),o=r?10*(i-1):0,c=r?10:100,s=r?{createdAt:"desc"}:null,l=n.readQuery({query:S,variables:{first:c,skip:o,orderBy:s}});l.feed.links.find((function(e){return e.id===a})).votes=t.link.votes,n.writeQuery({query:S,data:l})},e._subscribeToNewLinks=function(e){e({document:I,updateQuery:function(e,n){var t=n.subscriptionData;if(!t.data)return e;var a=t.data.newLink;return e.feed.links.find((function(e){return e.id===a.id}))?e:Object.assign({},e,{feed:{links:[a].concat(Object(m.a)(e.feed.links)),count:e.feed.links.length+1,__typename:e.feed.__typename}})}})},e._subscribeToNewVotes=function(e){e({document:B})},e._getQueryVariables=function(){var n=e.props.location.pathname.includes("new"),t=parseInt(e.props.match.params.page,10);return{take:n?10:100,skip:n?10*(t-1):0,orderBy:n?{createdAt:"desc"}:null}},e._getLinksToRender=function(n){if(e.props.location.pathname.includes("new"))return n.feed.links;var t=n.feed.links.slice();return t.sort((function(e,n){return n.votes.length-e.votes.length})),t},e._nextPage=function(n){var t=parseInt(e.props.match.params.page,10);if(t<=n.feed.count/10){var a=t+1;e.props.history.push("/new/".concat(a))}console.log(e.props)},e._previousPage=function(){var n=parseInt(e.props.match.params.page,10);if(n>1){var t=n-1;e.props.history.push("/new/".concat(t))}},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(T.b,{query:S,variables:this._getQueryVariables()},(function(n){var t=n.loading,a=n.error,o=n.data,c=n.subscribeToMore;if(t)return i.a.createElement("div",null,"Fetching");if(a)return i.a.createElement("div",null,"Error");e._subscribeToNewLinks(c),e._subscribeToNewVotes(c);var s=e._getLinksToRender(o),l=e.props.location.pathname.includes("new"),u=e.props.match.params.page?10*(e.props.match.params.page-1):0;return i.a.createElement(r.Fragment,null,s.map((function(n,t){return i.a.createElement(D,{key:n.id,link:n,index:t+u,updateStoreAfterVote:e._updateCacheAfterVote})})),l&&i.a.createElement("div",{className:"flex ml4 mv3 gray"},i.a.createElement("div",{className:"pointer mr2",onClick:e._previousPage},"Previous |"),i.a.createElement("div",{className:"pointer",onClick:function(){return e._nextPage(o)}},"Next")))}))}}]),t}(r.Component),L=function(e){Object(u.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={description:"",url:""},e._updateCacheAfterPost=function(e,n){var t=e.readQuery({query:S});t.feed.links.unshift(n),e.writeQuery({query:S,data:t})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,n=this.state,t=n.description,a=n.url;return i.a.createElement("div",null,i.a.createElement("div",{className:"flex flex-column mt3"},i.a.createElement("input",{className:"mb2",value:t,onChange:function(n){return e.setState({description:n.target.value})},type:"text",placeholder:"A description for the link"}),i.a.createElement("input",{className:"mb2",value:a,onChange:function(n){return e.setState({url:n.target.value})},type:"text",placeholder:"The URL for the link"})),i.a.createElement(T.a,{mutation:_,variables:{description:t,url:a},onCompleted:function(){return e.props.history.push("/new/1")},update:function(e,n){var t=n.data.post,a=e.readQuery({query:S,variables:{first:10,skip:0,orderBy:"createdAt_DESC"}});a.feed.links.unshift(t),e.writeQuery({query:S,data:a,variables:{first:10,skip:0,orderBy:"createdAt_DESC"}})}},(function(e){return i.a.createElement("button",{onClick:e},"Submit")})))}}]),t}(r.Component),P=t(21),Q=function(e){Object(u.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this,n=localStorage.getItem("auth-token");return i.a.createElement("div",{className:"flex pa1 justify-between nowrap orange"},i.a.createElement("div",{className:"flex flex-fixed black"},i.a.createElement("div",{className:"fw7 mr1"},"Hacker News"),i.a.createElement(P.b,{to:"/",className:"ml1 no-underline black"},"new"),i.a.createElement("div",{className:"ml1"},"|"),i.a.createElement(P.b,{to:"/top",className:"ml1 no-underline black"},"top"),i.a.createElement("div",{className:"ml1"},"|"),i.a.createElement(P.b,{to:"/search",className:"ml1 no-underline black"},"search"),n&&i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"ml1"},"|"),i.a.createElement(P.b,{to:"/create",className:"ml1 no-underline black"},"submit"))),i.a.createElement("div",{className:"flex flex-fixed"},n?i.a.createElement("div",{className:"ml1 pointer black",onClick:function(){localStorage.removeItem("auth-token"),e.props.history.push("/")}},"logout"):i.a.createElement(P.b,{to:"/login",className:"ml1 no-underline black"},"login")))}}]),t}(r.Component),V=Object(d.g)(Q),M=t(27),U=t.n(M),R=t(32),W=function(e){Object(u.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={login:!0,email:"",password:"",name:""},e._confirm=function(){var n=Object(R.a)(U.a.mark((function n(t){var a,r;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a=e.state.login?t.login:t.signup,r=a.token,e._saveUserData(r),e.props.history.push("/");case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),e._saveUserData=function(e){localStorage.setItem("auth-token",e)},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,n=this.state,t=n.login,a=n.email,r=n.password,o=n.name;return i.a.createElement("div",null,i.a.createElement("h4",{className:"mv3"},t?"Login":"Sign Up"),i.a.createElement("div",{className:"flex flex-column"},!t&&i.a.createElement("input",{value:o,onChange:function(n){return e.setState({name:n.target.value})},type:"text",placeholder:"Your name"}),i.a.createElement("input",{value:a,onChange:function(n){return e.setState({email:n.target.value})},type:"text",placeholder:"Your email address"}),i.a.createElement("input",{value:r,onChange:function(n){return e.setState({password:n.target.value})},type:"password",placeholder:"Choose a safe password"})),i.a.createElement("div",{className:"flex mt3"},i.a.createElement(T.a,{mutation:t?$:C,variables:{email:a,password:r,name:o},onCompleted:function(n){return e._confirm(n)}},(function(e){return i.a.createElement("div",{className:"pointer mr2 button",onClick:e},t?"login":"create account")})),i.a.createElement("div",{className:"pointer button",onClick:function(){return e.setState({login:!t})}},t?"need to create an account?":"already have an account?")))}}]),t}(r.Component),F=t(77),K=function(e){Object(u.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={links:[],filter:""},e._executeSearch=Object(R.a)(U.a.mark((function n(){var t,a,r;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.state.filter,n.next=3,e.props.client.query({query:x,variables:{filter:t}});case 3:a=n.sent,r=a.data.feed.links,e.setState({links:r});case 6:case"end":return n.stop()}}),n)}))),e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",null,"Search",i.a.createElement("input",{type:"text",onChange:function(n){return e.setState({filter:n.target.value})}}),i.a.createElement("button",{onClick:function(){return e._executeSearch()}},"OK")),this.state.links.map((function(e,n){return i.a.createElement(D,{key:e.id,link:e,index:n})})))}}]),t}(r.Component),H=Object(F.a)(K),J=function(e){Object(u.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"center w85"},i.a.createElement(V,null),i.a.createElement("div",{className:"ph3 pv1 background-gray"},i.a.createElement(d.d,null,i.a.createElement(d.b,{exact:!0,path:"/",render:function(){return i.a.createElement(d.a,{to:"/new/1"})}}),i.a.createElement(d.b,{exact:!0,path:"/create",component:L}),i.a.createElement(d.b,{exact:!0,path:"/login",component:W}),i.a.createElement(d.b,{exact:!0,path:"/search",component:H}),i.a.createElement(d.b,{exact:!0,path:"/top",component:q}),i.a.createElement(d.b,{exact:!0,path:"/new/:page",component:q}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=t(12),z=t(50),G=t(2),X=t(6),Z=t(24),ee=t(53),ne=t(52),te=t(49),ae=window.location.hostname,re=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PORT||4e3,ie=Object(ee.a)({uri:"http://".concat(ae,":").concat(re)}),oe=Object(te.a)((function(e,n){var t=n.headers,r=localStorage.getItem("auth-token");return{headers:Object(a.a)(Object(a.a)({},t),{},{authorization:r?"Bearer ".concat(r):""})}})),ce=new z.a({uri:"ws://".concat(ae,":").concat(re),options:{reconnect:!0,connectionParams:{authToken:localStorage.getItem("auth-token")}}}),se=Object(Y.d)((function(e){var n=e.query,t=Object(G.l)(n),a=t.kind,r=t.operation;return"OperationDefinition"===a&&"subscription"===r}),ce,oe.concat(ie)),le=new Z.a({link:se,cache:new ne.a});c.a.render(i.a.createElement(P.a,null,i.a.createElement(X.b,{client:le},i.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.b03b529e.chunk.js.map