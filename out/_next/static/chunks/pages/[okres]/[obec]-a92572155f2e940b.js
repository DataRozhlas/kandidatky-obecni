(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{7612:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[okres]/[obec]",function(){return c(7063)}])},6326:function(a,b,c){"use strict";c.d(b,{Z:function(){return s}});var d,e=c(9452),f=c(3712),g=c(8316),h=c(5659),i=c.n(h),j=c(1527),k=c(1482),l=c(8738),m=c(3288),n=c(7678),o=c(1037),p=c(5107),q=c(4697),r=(d=(0,e.Z)(i().mark(function a(){var b;return i().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://data.irozhlas.cz/kandidatky-obecni-data/2022/zast-autocomplete.tsv").then(function(a){return a.text()}).then(function(a){return(0,q.tJ)(a)});case 2:return b=a.sent,a.abrupt("return",b);case 4:case"end":return a.stop()}},a)})),function(){return d.apply(this,arguments)});function s(){var a=(0,k.useRouter)(),b=(0,p.useQuery)("autocomplete",r,{staleTime:1/0}),c=b.isLoading,d=b.error,e=b.data;return c?(0,j.jsx)(l.Z,{maxWidth:"xs",children:(0,j.jsx)(m.Z,{})}):d?"Stala se chyba: "+d.message:(0,j.jsx)(l.Z,{maxWidth:"xs",sx:{ml:0},children:(0,j.jsx)(n.Z,{disablePortal:!0,autoHighlight:!0,options:e,getOptionLabel:function(a){return"".concat(a.label,", okr. ").concat(a.okres)},renderInput:function(a){return(0,j.jsx)(o.Z,(0,g.Z)((0,f.Z)({},a),{label:"Najdi obec"}))},noOptionsText:"Obec nenalezena",onChange:function(b,c){c&&a.push("/".concat(c.value))}})})}},6454:function(a,b,c){"use strict";c.d(b,{Z:function(){return v}});var d=c(1527),e=c(959),f=c(1350),g=c(8908),h=c(5110),i=c(4326),j=c(2778),k=c(4434),l=c(9267),m=c(1667),n=c.n(m),o=function(a){var b=a.src;return a.width,a.quality,"".concat(b)},p=o,q=c(4547),r=c(3561),s=c(1127),t=function(){return(0,d.jsxs)("div",{children:[(0,d.jsx)(k.Z,{}),(0,d.jsx)(r.Z,{children:(0,d.jsx)(s.ZP,{disablePadding:!0})}),(0,d.jsx)(q.Z,{}),(0,d.jsx)(r.Z,{children:(0,d.jsx)(s.ZP,{disablePadding:!0})})]})},u=t,v=function(a){var b=a.window,c=(0,e.useState)(!1),m=c[0],o=c[1],q=function(){o(!m)};return(0,d.jsxs)(g.Z,{sx:{display:"flex"},children:[(0,d.jsx)(f.Z,{position:"fixed",sx:{zIndex:function(a){return a.zIndex.drawer+1},backgroundColor:"#f4f4f4",color:"#d52834",opacity:{sm:.9}},children:(0,d.jsxs)(k.Z,{sx:{minHeight:{sm:"40px"}},children:[(0,d.jsx)(i.Z,{color:"inherit","aria-label":"filtrovat",edge:"start",onClick:q,sx:{mr:2,display:{sm:"none"}},children:(0,d.jsx)(j.Z,{})}),(0,d.jsx)(l.C,{href:"https://irozhlas.cz/",sx:{ml:"auto",mr:{sm:"auto"}},children:(0,d.jsx)(n(),{loader:p,alt:"iROZHLAS.cz",src:"https://data.irozhlas.cz/hrad-or-not/img/irozhlas.svg",height:40,width:120})})]})}),(0,d.jsxs)(g.Z,{component:"nav",sx:{width:{sm:200},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[(0,d.jsx)(h.ZP,{container:void 0!==b?function(){return b().document.body}:void 0,variant:"temporary",open:m,onClose:q,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:200}},children:(0,d.jsx)(u,{})}),(0,d.jsx)(h.ZP,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:200}},open:!0,children:(0,d.jsx)(u,{})})]}),(0,d.jsxs)(g.Z,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(200,"px)")}},children:[(0,d.jsx)(k.Z,{}),a.children]})]})}},7063:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return Z},default:function(){return $}});var d,e=c(1527),f=c(959),g=c(4219),h=c(8738),i=c(8968),j=c.n(i),k=c(6326),l=c(8251),m=c(9267),n=function(a){var b=a.okresData,c=a.obecData;return(0,e.jsxs)(g.ZP,{item:!0,children:[(0,e.jsx)(l.Z,{variant:"h1",children:c.NAZEVZAST}),(0,e.jsx)(l.Z,{variant:"h6",children:(0,e.jsxs)(m.C,{href:"/".concat(b.key),children:["okres ",b.NAZEVNUTS]})}),(0,e.jsxs)(l.Z,{variant:"h6",children:[Number(c.POCOBYV).toLocaleString("cs-CZ")," obyvatel |"," ",c.MANDATY," mand\xe1tů"]})]})},o=n,p=c(7070),q=c(4286),r=function(a){var b=a.rok,c=a.setRok,d=function(a){c(a.target.value)};return(0,e.jsx)(g.ZP,{item:!0,children:(0,e.jsxs)(p.Z,{value:b,exclusive:!0,onChange:d,"aria-label":"vyber rok",color:"primary",children:[(0,e.jsx)(q.Z,{value:"2006","aria-label":"2006",children:"2006"}),(0,e.jsx)(q.Z,{value:"2010","aria-label":"2010",children:"2010"}),(0,e.jsx)(q.Z,{value:"2014","aria-label":"2014",children:"2014"}),(0,e.jsx)(q.Z,{value:"2018","aria-label":"2018",children:"2018"}),(0,e.jsx)(q.Z,{value:"2022","aria-label":"2022",children:"2022"})]})})},s=r,t=c(9452),u=c(5659),v=c.n(u),w=c(5107),x=c(4697),y=c(3712),z=c(8316),A=c(1399),B=c(3931),C=JSON.parse('[{"nazev":"KDU-ČSL","barva":"#F4D63E","vstrana":"1","pocet":0},{"nazev":"Zelen\xed","barva":"#5DBF5A","vstrana":"5","pocet":0},{"nazev":"ČSSD","barva":"#FB9179","vstrana":"7","pocet":0},{"nazev":"KSČM","barva":"#D42B3C","vstrana":"47","pocet":0},{"nazev":"ODS","barva":"#287AD7","vstrana":"53","pocet":0},{"nazev":"Věci veřejn\xe9","barva":"#57B5DB","vstrana":"144","pocet":0},{"nazev":"STAN","barva":"#6A99AF","vstrana":"166","pocet":0},{"nazev":"Pir\xe1ti","barva":"#666666","vstrana":"720","pocet":0},{"nazev":"TOP09","barva":"#AC5DAC","vstrana":"721","pocet":0},{"nazev":"ANO","barva":"#5A4DB3","vstrana":"768","pocet":0},{"nazev":"SPD","barva":"#F1A713","vstrana":"1114","pocet":0},{"nazev":"\xdasvit","barva":"#bd842d","vstrana":"792","pocet":0},{"nazev":"KDU+ODS+TOP 09","barva":"#894a89","vstrana":"1327","pocet":0},{"nazev":"STAN+Pir\xe1ti","barva":"#68808B","vstrana":"1350,","pocet":0}]'),D=c(1468),E=c(4212),F=c(7280),G=c(6207),H=c(6617),I=c(4681),J=function(a,b,c){var d=a.getBoundingClientRect();d.height,d.width;var e=[-200,-200,400,400];if(b.length>1){var f=b.filter(function(a){return 0!==a.vstrana}),g=b.filter(function(a){return 0===a.vstrana}),h=f.map(function(a){return Object.assign({},a)}),i=g.map(function(a){return Object.assign({},a)}),j=(0,E.Z)(h).force("x",(0,F.Z)()).force("y",(0,G.Z)()).force("collision",(0,H.Z)().radius(function(a){return Math.sqrt(100*a.pocet)-(a.pocet<150?a.pocet/2:a.pocet/6)})).force("charge",(0,I.Z)().strength(2)).stop(),k=(0,D.Z)(a).append("div").attr("class","doubleChart").append("svg").attr("class","graf").attr("viewBox",e).attr("height","100%").attr("width","100%"),l=k.append("g").selectAll("circle").data(h).join("circle").attr("r",function(a){return a.pocet/2*Math.PI/5}).attr("fill","none");j.tick(300),l.attr("cx",function(a){return a.x}).attr("cy",function(a){return a.y}),h.forEach(function(a){var b=Array.from({length:a.pocet},function(b,c){return{id:c,barva:a.barva}}),c=(0,E.Z)(b).force("x",(0,F.Z)(a.x)).force("y",(0,G.Z)(a.y)).force("charge",(0,I.Z)().strength(-3)),d=k.append("g").selectAll("circle").data(b).join("circle").attr("r",4).attr("class","kand ".concat(a.vstrana)).attr("fill",function(a){return a.barva});c.on("tick",function(){d.attr("cx",function(a){return a.x}).attr("cy",function(a){return a.y})})});var m=Array.from({length:i[0].pocet},function(a,b){return{id:b,barva:i[0].barva}}),n=(0,E.Z)(m).force("x",(0,F.Z)()).force("y",(0,G.Z)()).force("charge",(0,I.Z)().strength(-3)),o=(0,D.Z)(a).append("div").attr("class","doubleChart").append("svg").attr("class","graf").attr("viewBox",e).attr("height","100%").attr("width","100%"),p=o.append("g").selectAll("circle").data(m).join("circle").attr("r",4).attr("class","kand ".concat(i[0].vstrana)).attr("fill",function(a){return a.barva});n.on("tick",function(){p.attr("cx",function(a){return a.x}).attr("cy",function(a){return a.y})})}else if(1===b.length){var q=Array.from({length:b[0].pocet},function(a,c){return{id:c,barva:b[0].barva,vstrana:b[0].vstrana}}),r=(0,E.Z)(q).force("x",(0,F.Z)()).force("y",(0,G.Z)()).force("charge",(0,I.Z)().strength(-3)),s=(0,D.Z)(a).append("div").attr("class","singleChart").append("svg").attr("class","graf").attr("viewBox",e).attr("height","100%").attr("width","100%").append("g").selectAll("circle").data(q).join("circle").attr("r",4).attr("class",function(a){return"kand ".concat(a.vstrana)}).attr("fill",function(a){return a.barva});r.on("tick",function(){s.attr("cx",function(a){return a.x}).attr("cy",function(a){return a.y})})}return{destroy:function(){return simulation.stop()},nodes:function(){return svg.node()}}},K=J,L=function(a){var b=a.kandidati,c=a.vybarveniKandidati,d=a.isMobile,g=a.vybraneStrany,h=a.setVybraneStrany,i=(0,f.useRef)(null),j=b.length>1849?10:1,k=function(a,b){var c=b.map(function(a){return Object.assign({},a)}),d=a.reduce(function(a,b){var c=a.filter(function(a){return a.vstrana===b.NSTRANA})[0],d=a.indexOf(c);if(-1!==d){var e=(0,z.Z)((0,y.Z)({},c),{pocet:c.pocet+1});a.splice(d,1,e)}return a},c).filter(function(a){return a.pocet>0}).map(function(a){var b=Math.floor(a.pocet/j);return(0,z.Z)((0,y.Z)({},a),{pocet:b})}),e=c.reduce(function(a,b){return a+b.pocet},0);return a.length>e?(0,A.Z)(d).concat([{nazev:"Ostatn\xed",barva:"#349DB2",vstrana:0,pocet:Math.floor((a.length-e)/j)},]):d};return(0,f.useEffect)(function(){var a=k(b,C);h(a)},[b]),(0,f.useEffect)(function(){if((0,B.Z)(".singleChart").remove(),(0,B.Z)(".doubleChart").remove(),i.current){var a=K(i.current,g,d);a.destroy,a.nodes}},[g]),(0,f.useEffect)(function(){var a=g.map(function(a){return 0!==a.vstrana?c.filter(function(b){return b.NSTRANA===a.vstrana}).length:0});(a.length>1||0===a[0])&&(a[a.length-1]=c.length-a.reduce(function(a,b){return a+b},0)),g.forEach(function(b,c){var d=b.pocet-Math.floor(a[c]/j),e=Array.from(document.getElementsByClassName("kand ".concat(b.vstrana)));for(e.sort(function(a,b){return a.__data__.y-b.__data__.y}),e.forEach(function(a){a.style.fill=b.barva}),c=0;c<d;c++)e[c].style.fill="#C8C8C8"})},[g,c]),(0,e.jsx)("div",{ref:i,className:"chartWrapper"})},M=L,N=c(2199),O=c(5180),P=c(4669),Q=function(a){var b=a.vybarveniKandidati,c=a.isMobile,d=a.strany,f=function(a){var b=a.row.TITULPRED;return(0,e.jsx)(P.Z,{arrow:!0,enterTouchDelay:0,title:"".concat(a.row.TITULPRED||""," ").concat(a.row.JMENO||""," ").concat(a.row.PRIJMENI||""," ").concat(a.row.TITULZA||""),children:(0,e.jsxs)(l.Z,{style:{cursor:"help",overflow:"hidden",textOverflow:"ellipsis"},children:[(0,e.jsx)("span",{style:{fontSize:"70%"},children:void 0===b?"":b+"\xa0"}),a.row.JMENO||"","\xa0",(0,e.jsx)("strong",{children:a.row.PRIJMENI||""}),"\xa0",(0,e.jsx)("span",{style:{fontSize:"70%"},children:a.row.TITULZA||""})]})})},g=function(a){var b=d.find(function(b){return b.OSTRANA===a.row.OSTRANA});return(0,e.jsx)(P.Z,{arrow:!0,enterTouchDelay:0,title:b.NAZEVCELK,children:(0,e.jsx)(l.Z,{style:{cursor:"help",overflow:"hidden",textOverflow:"ellipsis"},children:b.NAZEVCELK})})},h=function(a){return(0,e.jsx)(P.Z,{arrow:!0,enterTouchDelay:0,title:a.row.POVOLANI,children:(0,e.jsx)("span",{style:{overflow:"hidden",textOverflow:"ellipsis",cursor:"help"},children:a.row.POVOLANI})})};return(0,e.jsx)(N._,{autoHeight:!0,localeText:O.l.components.MuiDataGrid.defaultProps.localeText,density:"compact",rows:b.map(function(a){return(0,z.Z)((0,y.Z)({},a),{id:"".concat(a.KODZASTUP,"-").concat(a.COBVODU,"-").concat(a.POR_STR_HL,"-").concat(a.PORCISLO)})}),columns:[{field:"PORCISLO",headerName:"#",description:"pořad\xed na kandid\xe1tce",flex:1,minWidth:40,disableColumnMenu:!0,type:"number"},{field:"fullName",headerName:"Cel\xe9 jm\xe9no",renderCell:f,valueGetter:function(a){return a.row.JMENO+" "+a.row.PRIJMENI},sortComparator:function(a,b,c,d){return c.api.getCellValue(c.id,"PRIJMENI").localeCompare(c.api.getCellValue(d.id,"PRIJMENI"),"cs-CZ")},flex:3,minWidth:140},{field:"OSTRANA",headerName:"Strana",description:"volebn\xed strana",renderCell:g,valueGetter:function(a){var b=d.find(function(b){return b.OSTRANA===a.row.OSTRANA});return b.NAZEVCELK+" "+b.ZKRATKAO8},minWidth:100,flex:3},{field:"VEK",headerName:"Věk",flex:1,disableColumnMenu:!0,minWidth:50,type:"number"},{field:"POVOLANI",headerName:"Povol\xe1n\xed",flex:6,renderCell:h,minWidth:120},],rowsPerPageOptions:c?[10]:[20],pageSize:c?10:20,disableSelectionOnClick:!0})},R=Q,S=c(8908),T=function(a){var b=a.vybraneStrany;return(0,e.jsx)(S.Z,{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",gap:15},children:b.map(function(a){return(0,e.jsxs)(l.Z,{children:[(0,e.jsx)("span",{style:{color:a.barva},children:"●\xa0"}),a.nazev]},a.vstrana)})})},U=T,V=c(3288),W=(d=(0,t.Z)(v().mark(function a(b){var c,d;return v().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c="cvs"===b.queryKey[0]?"2022/cvs.tsv":"".concat(b.queryKey[1],"/").concat(b.queryKey[3].key,"/").concat(b.queryKey[2].key,"/").concat(b.queryKey[0],".tsv"),a.next=3,fetch("https://data.irozhlas.cz/kandidatky-obecni-data/".concat(c)).then(function(a){return a.text()}).then(function(a){return(0,x.tJ)(a)});case 3:return d=a.sent,a.abrupt("return",d);case 5:case"end":return a.stop()}},a)})),function(a){return d.apply(this,arguments)}),X=function(a){var b,c=a.rok,d=a.obecData,h=a.okresData,i=a.isMobile,j=(0,f.useState)([]),k=j[0],m=j[1],n=(0,w.useQuery)(["kandidati",c,d,h],W),o=(0,w.useQuery)(["strany",c,d,h],W);if((0,w.useQuery)(["cvs"],W,{staleTime:1/0}),n.isLoading||o.isLoading)return(0,e.jsx)(g.ZP,{item:!0,children:(0,e.jsx)(V.Z,{})});if(n.error||n.error)return(0,e.jsx)(g.ZP,{item:!0,children:"Stala se chyba: "+n.error.message+o.error.message});var p=n.data.reduce(function(a,b){return a+Number(b.VEK)},0)/n.data.length,q=n.data.reduce(function(a,b){return"F"===b.POHLAVI?a+1:a},0)/n.data.length;return isNaN(p)?(0,e.jsx)(g.ZP,{item:!0,children:"Data nejsou k dispozici. Zkuste jin\xfd rok nebo jinou obec."}):(0,e.jsxs)(g.ZP,{item:!0,children:[(0,e.jsx)(g.ZP,{item:!0,children:(0,e.jsxs)(l.Z,{variant:"body",children:[1===(b=o.data.length)?"1 strana":b>1&&b<5?"".concat(b," strany"):"".concat(b," stran")," | ",n.data.length," kandid\xe1tů | průměrn\xfd věk ",(Math.round(10*p)/10).toLocaleString("cs-CZ")," ","let | ",(Math.round(1e3*q)/10).toLocaleString("cs-CZ")," % žen"]})}),i&&(0,e.jsx)(g.ZP,{item:!0,mt:3,children:(0,e.jsx)(U,{vybraneStrany:k})}),(0,e.jsx)(g.ZP,{item:!0,children:(0,e.jsx)(M,{kandidati:n.data,vybarveniKandidati:n.data,isMobile:i,vybraneStrany:k,setVybraneStrany:m})}),!i&&(0,e.jsx)(g.ZP,{item:!0,mt:2,children:(0,e.jsx)(U,{vybraneStrany:k})}),(0,e.jsx)(g.ZP,{item:!0,mt:3,children:(0,e.jsx)(R,{vybarveniKandidati:n.data,isMobile:i,strany:o.data})})]})},Y=c(6454),Z=!0;function $(a){var b=a.obecData,c=a.okresData,d=(0,f.useState)("2022"),i=d[0],l=d[1],m=(0,f.useState)(window.innerWidth<=600),n=m[0],p=m[1];return(0,f.useEffect)(function(){var a=function(){return p(window.innerWidth<=600)};return window.addEventListener("DOMContentLoaded",a),window.addEventListener("resize",a),function(){window.removeEventListener("DOMContentLoaded",a),window.removeEventListener("resize",a)}},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(j(),{children:(0,e.jsx)("title",{children:"".concat(b.NAZEVZAST," – interaktivn\xed kandid\xe1tky pro komun\xe1ln\xed volby")})}),(0,e.jsx)(Y.Z,{children:(0,e.jsxs)(g.ZP,{container:!0,spacing:3,mt:-4,direction:"column",children:[(0,e.jsx)(g.ZP,{item:!0,children:(0,e.jsx)(k.Z,{})}),(0,e.jsx)(g.ZP,{item:!0,children:(0,e.jsx)(h.Z,{sx:{ml:0},children:(0,e.jsxs)(g.ZP,{container:!0,direction:"column",spacing:2,children:[(0,e.jsx)(o,{obecData:b,okresData:c}),(0,e.jsx)(s,{rok:i,setRok:l}),(0,e.jsx)(X,{rok:i,obecData:b,okresData:c,isMobile:n})]})})})]})})]})}},9267:function(a,b,c){"use strict";var d=c(8975),e=c(3712),f=c(4614),g=c(1527),h=c(959),i=c(507),j=c.n(i),k=c(5924),l=c(1482),m=c(1140),n=c.n(m),o=c(3968),p=c(3673),q=(0,p.ZP)("a")({}),r=h.forwardRef(function(a,b){var c=a.to,d=a.linkAs,h=a.replace,i=a.scroll,j=a.shallow,k=a.prefetch,l=a.locale,m=(0,f.Z)(a,["to","linkAs","replace","scroll","shallow","prefetch","locale"]);return(0,g.jsx)(n(),{href:c,prefetch:k,as:d,replace:h,scroll:i,shallow:j,passHref:!0,locale:l,children:(0,g.jsx)(q,(0,e.Z)({ref:b},m))})});r.propTypes={href:j().any,linkAs:j().oneOfType([j().object,j().string]),locale:j().string,passHref:j().bool,prefetch:j().bool,replace:j().bool,scroll:j().bool,shallow:j().bool,to:j().oneOfType([j().object,j().string]).isRequired};var s=h.forwardRef(function(a,b){var c=a.activeClassName,h=void 0===c?"active":c,i=a.as,j=a.className,m=a.href,n=a.linkAs,p=a.locale,s=a.noLinkStyle,t=a.prefetch,u=a.replace,v=(a.role,a.scroll),w=a.shallow,x=(0,f.Z)(a,["activeClassName","as","className","href","linkAs","locale","noLinkStyle","prefetch","replace","role","scroll","shallow"]),y=(0,l.useRouter)(),z="string"==typeof m?m:m.pathname,A=(0,k.Z)(j,(0,d.Z)({},h,y.pathname===z&&h)),B="string"==typeof m&&(0===m.indexOf("http")||0===m.indexOf("mailto:"));if(B)return s?(0,g.jsx)(q,(0,e.Z)({className:A,href:m,ref:b},x)):(0,g.jsx)(o.Z,(0,e.Z)({className:A,href:m,ref:b},x));var C={to:m,linkAs:n||i,replace:u,scroll:v,shallow:w,prefetch:t,locale:p};return s?(0,g.jsx)(r,(0,e.Z)({className:A,ref:b},C,x)):(0,g.jsx)(o.Z,(0,e.Z)({component:r,className:A,ref:b},C,x))});s.propTypes={activeClassName:j().string,as:j().oneOfType([j().object,j().string]),className:j().string,href:j().any,linkAs:j().oneOfType([j().object,j().string]),locale:j().string,noLinkStyle:j().bool,prefetch:j().bool,replace:j().bool,role:j().string,scroll:j().bool,shallow:j().bool},b.C=s}},function(a){a.O(0,[122,625,814,774,888,179],function(){var b;return a(a.s=7612)}),_N_E=a.O()}])