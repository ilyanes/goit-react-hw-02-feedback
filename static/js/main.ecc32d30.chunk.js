(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a,c,r,i=n(0),o=n.n(i),s=n(5),l=n.n(s),d=(n(17),n(18),n(6)),u=n(7),b=n(8),j=n(11),p=n(10),h=n(2),x=n(3),g=x.a.div(a||(a=Object(h.a)(["\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 35%;\n  margin: auto;\n  margin-top: 10px;\n  background-color: yellow;\n  border-radius: 20px;\n  box-shadow: 4px 3px 6px 4px rgba(155, 155, 155, 0.75);\n  padding: 40px;\n"]))),O=x.a.section(c||(c=Object(h.a)(["\n  text-align: center;\n  margin-top: 10px;\n  font-size: 16px;\n  font-weight: 700;\n  width: 100%;\n"]))),f=x.a.p(r||(r=Object(h.a)(["\n  color: grey;\n"]))),v=n(1),k=function(e){var t=e.buttons,n=e.onClick;return Object(v.jsx)(v.Fragment,{children:t.map((function(e){return Object(v.jsx)("button",{onClick:n,name:e,children:e},e)}))})};var m=function(e){var t=e.message;return Object(v.jsx)(f,{children:t})};var w=function(e){var t=e.title,n=e.children;return Object(v.jsxs)(O,{children:[Object(v.jsx)("h2",{children:t}),n]})};var P=function(e){var t=e.total,n=e.positivePercentage,a=e.good,c=e.neutral,r=e.bad;return Object(v.jsxs)("div",{children:[Object(v.jsxs)("p",{children:["Good: ",a]}),Object(v.jsxs)("p",{children:["Neutral: ",c]}),Object(v.jsxs)("p",{children:["Bad: ",r]}),Object(v.jsxs)("p",{children:["Total: ",t]}),Object(v.jsxs)("p",{children:["Positive Feedback: ",n]})]})},y=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:e.props.initialValue,neutral:e.props.initialValue,bad:e.props.initialValue},e.handleClick=function(t){var n=t.target.name;e.setState((function(e){return Object(d.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return Math.floor(100*t/n)},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage();return Object(v.jsxs)(g,{children:[Object(v.jsx)(w,{title:"Please leave feedback",children:Object(v.jsx)(k,{buttons:["good","neutral","bad"],onClick:this.handleClick})}),0===e?Object(v.jsx)(m,{message:"No feedback given"}):Object(v.jsx)(w,{title:"Statistics",children:Object(v.jsx)(P,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:t})})]})}}]),n}(i.Component);y.defaultProps={initialValue:0};var F=y;var C=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(F,{})})};l.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(C,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.ecc32d30.chunk.js.map