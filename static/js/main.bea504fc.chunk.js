(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{32:function(e,t,a){e.exports=a(66)},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),s=a.n(c),o=a(7),i=a(1),l=a(15),m=a.n(l),u=a(29),p=a(10),v=a(11),d=a(13),E=a(12),f=a(30),y=a.n(f);a(55);var _=function(e){var t=e.id,a=e.year,n=e.title,c=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(o.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:c,poster:s,genres:i}}},r.a.createElement("img",{src:s,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},c.slice(0,180),"..."))))},h=(a(61),function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(_,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(62);var g=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\u201c\uc5ed\ub300 \ud3c9\uc810 \ub192\uc740 \uc601\ud654\ub97c \ubcf4\uc5ec\uc8fc\ub294 \ud398\uc774\uc9c0\u201d"),r.a.createElement("span",null,"\u2212 \ud604\uc7ac \uae30\uc900"))},b=(a(63),function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("div",{className:"detail__container"},r.a.createElement("img",{src:e.state.poster,alt:"poster",title:e.state.title}),r.a.createElement("div",null,e.state.title),r.a.createElement("span",null,e.state.year),r.a.createElement("span",null,e.state.summary)):null}}]),a}(r.a.Component));a(64);var N=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/about"},"About"))};a(65);var j=function(){return r.a.createElement(o.a,null,r.a.createElement(N,null),r.a.createElement(i.a,{path:"/",exact:!0,component:h}),r.a.createElement(i.a,{path:"/about",component:g}),r.a.createElement(i.a,{path:"/movie/:id",component:b}))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.bea504fc.chunk.js.map