(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[998],{6235:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[okres]",function(){return c(6447)}])},6326:function(a,b,c){"use strict";c.d(b,{Z:function(){return s}});var d,e=c(9452),f=c(3712),g=c(8316),h=c(5659),i=c.n(h),j=c(1527),k=c(1482),l=c(8738),m=c(3288),n=c(7678),o=c(1037),p=c(5107),q=c(4697),r=(d=(0,e.Z)(i().mark(function a(){var b;return i().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://data.irozhlas.cz/kandidatky-obecni-data/2022/zast-autocomplete.tsv").then(function(a){return a.text()}).then(function(a){return(0,q.tJ)(a)});case 2:return b=a.sent,a.abrupt("return",b);case 4:case"end":return a.stop()}},a)})),function(){return d.apply(this,arguments)});function s(){var a=(0,k.useRouter)(),b=(0,p.useQuery)("autocomplete",r,{staleTime:1/0}),c=b.isLoading,d=b.error,e=b.data;return c?(0,j.jsx)(l.Z,{maxWidth:"xs",children:(0,j.jsx)(m.Z,{})}):d?"Stala se chyba: "+d.message:(0,j.jsx)(l.Z,{maxWidth:"xs",sx:{ml:0},children:(0,j.jsx)(n.Z,{disablePortal:!0,autoHighlight:!0,options:e,getOptionLabel:function(a){return"".concat(a.label,", okr. ").concat(a.okres)},renderInput:function(a){return(0,j.jsx)(o.Z,(0,g.Z)((0,f.Z)({},a),{label:"Najdi obec"}))},noOptionsText:"Obec nenalezena",onChange:function(b,c){c&&a.push("/".concat(c.value))}})})}},6454:function(a,b,c){"use strict";c.d(b,{Z:function(){return v}});var d=c(1527),e=c(959),f=c(1350),g=c(8908),h=c(5110),i=c(4326),j=c(2778),k=c(4434),l=c(9267),m=c(1667),n=c.n(m),o=function(a){var b=a.src;return a.width,a.quality,"".concat(b)},p=o,q=c(4547),r=c(3561),s=c(1127),t=function(){return(0,d.jsxs)("div",{children:[(0,d.jsx)(k.Z,{}),(0,d.jsx)(r.Z,{children:(0,d.jsx)(s.ZP,{disablePadding:!0})}),(0,d.jsx)(q.Z,{}),(0,d.jsx)(r.Z,{children:(0,d.jsx)(s.ZP,{disablePadding:!0})})]})},u=t,v=function(a){var b=a.window,c=(0,e.useState)(!1),m=c[0],o=c[1],q=function(){o(!m)};return(0,d.jsxs)(g.Z,{sx:{display:"flex"},children:[(0,d.jsx)(f.Z,{position:"fixed",sx:{zIndex:function(a){return a.zIndex.drawer+1},backgroundColor:"#f4f4f4",color:"#d52834",opacity:{sm:.9}},children:(0,d.jsxs)(k.Z,{sx:{minHeight:{sm:"40px"}},children:[(0,d.jsx)(i.Z,{color:"inherit","aria-label":"filtrovat",edge:"start",onClick:q,sx:{mr:2,display:{sm:"none"}},children:(0,d.jsx)(j.Z,{})}),(0,d.jsx)(l.C,{href:"https://irozhlas.cz/",sx:{ml:"auto",mr:{sm:"auto"}},children:(0,d.jsx)(n(),{loader:p,alt:"iROZHLAS.cz",src:"https://data.irozhlas.cz/hrad-or-not/img/irozhlas.svg",height:40,width:120})})]})}),(0,d.jsxs)(g.Z,{component:"nav",sx:{width:{sm:200},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[(0,d.jsx)(h.ZP,{container:void 0!==b?function(){return b().document.body}:void 0,variant:"temporary",open:m,onClose:q,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:200}},children:(0,d.jsx)(u,{})}),(0,d.jsx)(h.ZP,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:200}},open:!0,children:(0,d.jsx)(u,{})})]}),(0,d.jsxs)(g.Z,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(200,"px)")}},children:[(0,d.jsx)(k.Z,{}),a.children]})]})}},6447:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return p},default:function(){return q}});var d=c(1527),e=c(9267),f=c(8968),g=c.n(f),h=c(6454),i=c(4219),j=c(8738),k=c(6326),l=c(8251),m=function(a){var b=a.okresData;return a.obecData,(0,d.jsxs)(i.ZP,{item:!0,children:[(0,d.jsxs)(l.Z,{variant:"h1",children:["Okres ",b.NAZEVNUTS]}),(0,d.jsx)(l.Z,{variant:"h6"})]})},n=m,o=function(a){var b=a.okresData,c=a.zastupitelstva;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g(),{children:(0,d.jsx)("title",{children:"Okres ".concat(b.NAZEVNUTS," – interaktivn\xed kandid\xe1tky pro komun\xe1ln\xed volby")})})," ",(0,d.jsx)(h.Z,{children:(0,d.jsxs)(i.ZP,{container:!0,spacing:3,mt:-4,direction:"column",children:[(0,d.jsx)(i.ZP,{item:!0,children:(0,d.jsx)(k.Z,{})}),(0,d.jsx)(i.ZP,{item:!0,children:(0,d.jsx)(j.Z,{sx:{ml:0},children:(0,d.jsxs)(i.ZP,{container:!0,direction:"column",spacing:2,children:[(0,d.jsx)(n,{okresData:b}),(0,d.jsx)("ul",{children:c.sort(function(a,b){return a.NAZEVZAST.localeCompare(b.NAZEVZAST,"cs")}).map(function(a){return(0,d.jsx)("li",{children:(0,d.jsx)(e.C,{href:"/".concat(b.key,"/").concat(a.key),children:a.NAZEVZAST})},a.KODZASTUP)})})]})})})]})})]})},p=!0,q=o},9267:function(a,b,c){"use strict";var d=c(8975),e=c(3712),f=c(4614),g=c(1527),h=c(959),i=c(507),j=c.n(i),k=c(5924),l=c(1482),m=c(1140),n=c.n(m),o=c(3968),p=c(3673),q=(0,p.ZP)("a")({}),r=h.forwardRef(function(a,b){var c=a.to,d=a.linkAs,h=a.replace,i=a.scroll,j=a.shallow,k=a.prefetch,l=a.locale,m=(0,f.Z)(a,["to","linkAs","replace","scroll","shallow","prefetch","locale"]);return(0,g.jsx)(n(),{href:c,prefetch:k,as:d,replace:h,scroll:i,shallow:j,passHref:!0,locale:l,children:(0,g.jsx)(q,(0,e.Z)({ref:b},m))})});r.propTypes={href:j().any,linkAs:j().oneOfType([j().object,j().string]),locale:j().string,passHref:j().bool,prefetch:j().bool,replace:j().bool,scroll:j().bool,shallow:j().bool,to:j().oneOfType([j().object,j().string]).isRequired};var s=h.forwardRef(function(a,b){var c=a.activeClassName,h=void 0===c?"active":c,i=a.as,j=a.className,m=a.href,n=a.linkAs,p=a.locale,s=a.noLinkStyle,t=a.prefetch,u=a.replace,v=(a.role,a.scroll),w=a.shallow,x=(0,f.Z)(a,["activeClassName","as","className","href","linkAs","locale","noLinkStyle","prefetch","replace","role","scroll","shallow"]),y=(0,l.useRouter)(),z="string"==typeof m?m:m.pathname,A=(0,k.Z)(j,(0,d.Z)({},h,y.pathname===z&&h)),B="string"==typeof m&&(0===m.indexOf("http")||0===m.indexOf("mailto:"));if(B)return s?(0,g.jsx)(q,(0,e.Z)({className:A,href:m,ref:b},x)):(0,g.jsx)(o.Z,(0,e.Z)({className:A,href:m,ref:b},x));var C={to:m,linkAs:n||i,replace:u,scroll:v,shallow:w,prefetch:t,locale:p};return s?(0,g.jsx)(r,(0,e.Z)({className:A,ref:b},C,x)):(0,g.jsx)(o.Z,(0,e.Z)({component:r,className:A,ref:b},C,x))});s.propTypes={activeClassName:j().string,as:j().oneOfType([j().object,j().string]),className:j().string,href:j().any,linkAs:j().oneOfType([j().object,j().string]),locale:j().string,noLinkStyle:j().bool,prefetch:j().bool,replace:j().bool,role:j().string,scroll:j().bool,shallow:j().bool},b.C=s}},function(a){a.O(0,[122,625,774,888,179],function(){var b;return a(a.s=6235)}),_N_E=a.O()}])