(this["webpackJsonpvscode-tutorial"]=this["webpackJsonpvscode-tutorial"]||[]).push([[0],{35:function(e,t,n){e.exports=n(72)},46:function(e,t,n){},50:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(28),i=n.n(r),c=(n(46),n(6)),l=n(7),s=n(9),u=n(8),m=n(4);n(50),n(51);function d(){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{id:"title"},o.a.createElement("h1",null,"Text ",o.a.createElement("span",{id:"title-vanish"},"Vanish")),o.a.createElement("h5",null,"for writers")),o.a.createElement("div",{id:"logo"},o.a.createElement("img",{id:"img-smoke",src:"./text-vnsh.png",alt:"vanish"})))}var h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"welcome"},o.a.createElement(d,null),o.a.createElement("h1",null," Get your thoughts out "),o.a.createElement("h2",null,"One. Word. At. A. Time."),o.a.createElement("h2",null," Forget the ",o.a.createElement("span",{id:"strike-out"},"mitsakes")," mistakes"),o.a.createElement(m.b,{to:"/write"},o.a.createElement("button",{className:"btn-warning"},"Start writing now")))}}]),n}(a.Component),v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"navbar-nav",id:"navbar"},o.a.createElement("ul",null,o.a.createElement("li",{className:"link-nav"},o.a.createElement(m.b,{to:"/write"},"Write")),o.a.createElement("li",{className:"link-nav"},o.a.createElement(m.b,{to:"/about"},"About"))))}}]),n}(a.Component),p=n(10),f=n(34),E=n.n(f),b=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={letters:[],editor:{}},e.onAlphaNumeric=e.onAlphaNumeric.bind(Object(p.a)(e)),e.onAnyKey=e.onAnyKey.bind(Object(p.a)(e)),e.save=e.save.bind(Object(p.a)(e)),e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({editor:E.a.create(document.querySelector("#editor"))})}},{key:"render",value:function(){return o.a.createElement("div",{className:"app-containter"},o.a.createElement("div",{id:"app",onKeyDown:this.onAnyKey,onKeyPress:this.onAlphaNumeric},o.a.createElement("input",{type:"text",id:"editor"})),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{className:"btn btn-block",id:"save",onClick:this.save},"REVEAL")),o.a.createElement("div",{id:"typed-content"}))}},{key:"onAlphaNumeric",value:function(e){this.state.letters.push(e.key)}},{key:"onAnyKey",value:function(e){var t=this,n=this.state.editor,a=this.state.letters,o=e.key;n.then((function(e){" "===o&&e.setData("<p></p>"),"Backspace"===o&&" "!==a[a.length-1]&&a.pop(),"Enter"===o&&(e.setData("<p></p>"),a.push("\n"),t.save())})).catch(console.log)}},{key:"save",value:function(){var e=this,t=this.state.editor,n=this.state.letters;t.then((function(t){t.setData("<p></p>");var a=document.createElement("div");a.id="content",a.innerText=n.join(""),document.getElementById("typed-content").appendChild(a),e.setState({letters:[]})})).catch(console.log)}}]),n}(a.Component),y=function(){return o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement(d,null),o.a.createElement(b,null))};function w(){return o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement("div",{className:"about"},o.a.createElement("p",null,"The reason for this app is simple.",o.a.createElement("br",null),"Your workflow: You write some words, make some typos, and type some more letters before realizing an error... Now you're mashing the left arrow key or worse - backspace - to correct the mistake. Now you're heading back to the end of your sentence, or retyping the whole thing ... aaaaannd ... you've lost your train of thought."),o.a.createElement("p",null," Text Vanish was made to allow you to keep typing, without the ability to fix or even see the errors, so you don't miss your train of thought.")))}var g=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement(m.d,null,o.a.createElement(m.c,{exact:!0,path:"/",component:h}),o.a.createElement(m.c,{path:"/write",component:y}),o.a.createElement(m.c,{path:"/about",component:w})))}}]),n}(a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(g,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/devondacoda/text-vanish",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/devondacoda/text-vanish","/service-worker.js");k?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):j(e)}))}}()}},[[35,1,2]]]);
//# sourceMappingURL=main.1b0f59d6.chunk.js.map