(this["webpackJsonpcross-zero"]=this["webpackJsonpcross-zero"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={resetBtn:"ResetBtn_resetBtn__t_d5V"}},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(7),r=n.n(c),i=(n(13),n(2)),o=n(3),l=n(5),u=n(4),O=(n(14),n(15),n(0)),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("header",{className:"conteiner",children:"Header"})}}]),n}(a.a.Component),d=(n(17),function(e){return Object(O.jsxs)("label",{className:"b-lable",children:[Object(O.jsx)("input",{type:"radio",id:e.id,checked:e.checked,onChange:e.onChange}),Object(O.jsx)("span",{className:"radio-pulse"}),Object(O.jsx)("span",{className:"radio-button",children:Object(O.jsx)("span",{className:"radio-button-inner"})}),Object(O.jsx)("span",{className:"radio-lable",children:e.value})]})}),b=n(8),h=n.n(b),f=function(e){return Object(O.jsx)("button",{onClick:e.onClick,className:h.a.resetBtn,children:"RESET GAME"})},x=(n(18),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).clickHandler=function(e){var t=e.target.getAttribute("data"),n=s.state.squares;null===n[t]&&"X"===s.state.slectedXorO?(n[t]=s.state.count%2===0?"X":"O",s.setState({count:s.state.count+1}),s.setState({squares:n})):null===n[t]&&"O"===s.state.slectedXorO?(n[t]=s.state.count%2===0?"O":"X",s.setState({count:s.state.count+1}),s.setState({squares:n})):null===n[t]&&""===s.state.slectedXorO?alert("Selected yor first step X or O"):alert("NO NO Bro"),s.isWinner()},s.isWinner=function(){var e="";"X"===s.state.slectedXorO&&(e=s.state.count%2===0?"X":"O"),"O"===s.state.slectedXorO&&(e=s.state.count%2===0?"O":"X");for(var t=0;t<8;t++){var n=s.winnerLine[t];if(s.state.squares[n[0]]===e&&s.state.squares[n[1]]===e&&s.state.squares[n[2]]===e&&(setTimeout((function(){"X"===e&&s.setState({X:s.state.X+1}),"O"===e&&s.setState({O:s.state.O+1}),alert(e+" is Winner"),s.setState({squares:Array(9).fill(null)}),s.setState({count:0})}),100),8===s.state.count))return}8===s.state.count&&s.isNoWinner()},s.isNoWinner=function(){s.state.squares.includes(null)||setTimeout((function(){alert("No Winner"),s.setState({squares:Array(9).fill(null)}),s.setState({count:0})}),100)},s.resetGame=function(){s.setState({squares:Array(9).fill(null)}),s.setState({count:0}),s.setState({X:0}),s.setState({O:0}),s.setState({slectedXorO:""})},s.selectXO=function(e){s.setState({slectedXorO:e.target.getAttribute("id")})},s.state={squares:Array(9).fill(null),count:0,X:0,O:0,slectedXorO:""},s.winnerLine=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],s}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)("main",{children:Object(O.jsxs)("section",{className:"conteiner",children:[Object(O.jsxs)("div",{className:"score",children:[Object(O.jsxs)("div",{children:["X:",Object(O.jsx)("span",{children:this.state.X})]}),Object(O.jsx)("div",{children:"Score"}),Object(O.jsxs)("div",{children:["O:",Object(O.jsx)("span",{children:this.state.O})]})]}),Object(O.jsx)("div",{className:"game-field",children:this.state.squares.map((function(t,n){return Object(O.jsx)("div",{className:"t-grid",onClick:e.clickHandler,data:n,children:t},n)}))}),Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)(d,{id:"X",value:"X",checked:"X"===this.state.slectedXorO,onChange:this.selectXO}),Object(O.jsx)(d,{id:"O",value:"O",checked:"O"===this.state.slectedXorO,onChange:this.selectXO})]}),Object(O.jsx)(f,{onClick:this.resetGame})]})})}}]),n}(a.a.Component)),X=(n(19),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("footer",{className:"conteiner",children:"Footer"})}}]),n}(a.a.Component)),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={},s}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(j,{}),Object(O.jsx)(x,{}),Object(O.jsx)(X,{})]})}}]),n}(a.a.Component),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(p,{})}),document.getElementById("root")),v()}],[[20,1,2]]]);
//# sourceMappingURL=main.bd5d55d9.chunk.js.map