(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(35)},25:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n.n(o),i=(n(25),n(1)),l=n(2),s=n(5),u=n(3),p=n(4),h=n(7),m=n(17),f=n(19),d="GET_FILM",E="LIST_FILMS",b="FETCHING_FILMS",y="FAIL_FILMS",O={films:[],isFetching:!1,hasErrors:!1};function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return{films:e.films,isFetching:!0,hasErrors:e.hasErrors};case E:case d:return console.log(t.payload),{films:t.payload,isFetching:!1,hasErrors:!1};case y:return{films:e.films,isFetching:!1,hasErrors:t.payload};default:return e}}var j=n(8),v=(n(30),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("img",{className:"banner-img",src:"https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"}),r.a.createElement("h1",{className:"banner-title"},"MAY THE FORCE BE WITH YOU!"))}}]),t}(a.Component)),w=(n(31),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={films:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.listFilms(),console.log(this.props.rootReducer.films)}},{key:"render",value:function(){return this.props.rootReducer.isFetching?"LOADING...":this.props.rootReducer.hasErrors?"SOMETHING WENT WRONG, TRY AGAIN LATER... ;(":this.props.rootReducer.films.length<1?"SEEMS THAT THERE ISN'T ANY STAR WARS MOVIE WITH THIS NAME, TRY AGAIN! :D":r.a.createElement("div",{className:"content"},this.props.rootReducer.films.map(function(e,t){return r.a.createElement("div",null,r.a.createElement("h2",null,"Episode: ",e.episode_id," - ",e.title),r.a.createElement("p",null,e.opening_crawl),r.a.createElement("p",{id:"sub"},e.director," - ",e.producer," - ",e.release_date))}))}}]),t}(a.Component)),T={listFilms:function(){return function(e){e({type:b,payload:null}),fetch("https://swapi.co/api/films",{method:"GET"}).then(function(e){return e.json()}).then(function(t){e({type:E,payload:t.results})}).catch(function(t){return e({type:y,payload:t})})}}},I=j.b(function(e){return{rootReducer:e}},T)(w),N=(n(32),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={film:""},n.onChange=function(e){return n.setState({film:e.target.value})},n.onClick=function(e){return n.props.getFilm(n.state.film)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{className:"searchbar",type:"text",placeholder:"Search for Star Wars movies!",onChange:this.onChange}),r.a.createElement("button",{className:"searchbutton",onClick:this.onClick},"Search"))}}]),t}(a.Component)),S={getFilm:function(e){return function(t){t({type:b,payload:null}),fetch("https://swapi.co/api/films/?search="+e,{method:"GET"}).then(function(e){return e.json()}).then(function(e){t({type:d,payload:e.results})}).catch(function(e){return t({type:y,payload:e})})}}},A=j.b(function(e){return{film:e.film}},S)(N),F=(n(33),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement(v,null),r.a.createElement(A,null),r.a.createElement(I,null))}}]),t}(a.Component)),R=(n(34),h.createStore(g,m.composeWithDevTools(h.applyMiddleware(f.a)))),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(j.a,{store:R},r.a.createElement("div",{className:"App"},r.a.createElement(F,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.d7e3adf8.chunk.js.map