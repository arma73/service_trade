(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/a9y":function(e,t,n){"use strict";var l=n("KI45");t.__esModule=!0,t.default=void 0;var r=l(n("q1tI")),a=l(n("PgRs"));const i={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};class o extends r.default.Component{static getInitialProps(e){let t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}render(){const e=this.props.statusCode,t=this.props.title||i[e]||"An unexpected error has occurred";return r.default.createElement("div",{style:s.error},r.default.createElement(a.default,null,r.default.createElement("title",null,e,": ",t)),r.default.createElement("div",null,r.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?r.default.createElement("h1",{style:s.h1},e):null,r.default.createElement("div",{style:s.desc},r.default.createElement("h2",{style:s.h2},t,"."))))}}t.default=o,o.displayName="ErrorPage";const s={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"04ac":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){var e=n("/a9y");return{page:e.default||e}}])},PgRs:function(e,t,n){e.exports=n("m/Pd")}},[["04ac",1,0]]]);