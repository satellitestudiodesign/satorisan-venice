/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-bgpositionxy-bgsizecover-boxsizing-cssall-cssanimations-csscalc-csschunit-cssfilters-cssgrid_cssgridlegacy-cssmask-cssremunit-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-flexbox-flexboxlegacy-fontface-lastchild-ligatures-mediaqueries-objectfit-overflowscrolling-videoautoplay-videocrossorigin-videoloop-videopreload-setclasses !*/
!function(A,e,t){function n(A,e){return typeof A===e}function o(){var A,e,t,o,i,r,s;for(var a in R)if(R.hasOwnProperty(a)){if(A=[],e=R[a],e.name&&(A.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(t=0;t<e.options.aliases.length;t++)A.push(e.options.aliases[t].toLowerCase());for(o=n(e.fn,"function")?e.fn():e.fn,i=0;i<A.length;i++)r=A[i],s=r.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),y.push((o?"":"no-")+s.join("-"))}}function i(A){var e=E.className,t=Modernizr._config.classPrefix||"";if(B&&(e=e.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");e=e.replace(n,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(e+=" "+t+A.join(" "+t),B?E.className.baseVal=e:E.className=e)}function r(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):B?e.createElementNS.call(e,"http://www.w3.org/2000/svg",arguments[0]):e.createElement.apply(e,arguments)}function s(e,t,n){var o;if("getComputedStyle"in A){o=getComputedStyle.call(A,e,t);var i=A.console;if(null!==o)n&&(o=o.getPropertyValue(n));else if(i){var r=i.error?"error":"log";i[r].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&e.currentStyle&&e.currentStyle[n];return o}function a(A,e){return A-1===e||A===e||A+1===e}function l(A){return A.replace(/([a-z])-([a-z])/g,function(A,e,t){return e+t.toUpperCase()}).replace(/^-/,"")}function d(A,e){if("object"==typeof A)for(var t in A)S(A,t)&&d(t,A[t]);else{A=A.toLowerCase();var n=A.split("."),o=Modernizr[n[0]];if(2==n.length&&(o=o[n[1]]),"undefined"!=typeof o)return Modernizr;e="function"==typeof e?e():e,1==n.length?Modernizr[n[0]]=e:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=e),i([(e&&0!=e?"":"no-")+n.join("-")]),Modernizr._trigger(A,e)}return Modernizr}function c(){var A=e.body;return A||(A=r(B?"svg":"body"),A.fake=!0),A}function u(A,t,n,o){var i,s,a,l,d="modernizr",u=r("div"),f=c();if(parseInt(n,10))for(;n--;)a=r("div"),a.id=o?o[n]:d+(n+1),u.appendChild(a);return i=r("style"),i.type="text/css",i.id="s"+d,(f.fake?f:u).appendChild(i),f.appendChild(u),i.styleSheet?i.styleSheet.cssText=A:i.appendChild(e.createTextNode(A)),u.id=d,f.fake&&(f.style.background="",f.style.overflow="hidden",l=E.style.overflow,E.style.overflow="hidden",E.appendChild(f)),s=t(u,A),f.fake?(f.parentNode.removeChild(f),E.style.overflow=l,E.offsetHeight):u.parentNode.removeChild(u),!!s}function f(A,e){return!!~(""+A).indexOf(e)}function p(A,e){return function(){return A.apply(e,arguments)}}function h(A,e,t){var o;for(var i in A)if(A[i]in e)return t===!1?A[i]:(o=e[A[i]],n(o,"function")?p(o,t||e):o);return!1}function m(A){return A.replace(/([A-Z])/g,function(A,e){return"-"+e.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(e,n){var o=e.length;if("CSS"in A&&"supports"in A.CSS){for(;o--;)if(A.CSS.supports(m(e[o]),n))return!0;return!1}if("CSSSupportsRule"in A){for(var i=[];o--;)i.push("("+m(e[o])+":"+n+")");return i=i.join(" or "),u("@supports ("+i+") { #modernizr { position: absolute; } }",function(A){return"absolute"==s(A,null,"position")})}return t}function v(A,e,o,i){function s(){d&&(delete V.style,delete V.modElem)}if(i=n(i,"undefined")?!1:i,!n(o,"undefined")){var a=g(A,o);if(!n(a,"undefined"))return a}for(var d,c,u,p,h,m=["modernizr","tspan","samp"];!V.style&&m.length;)d=!0,V.modElem=r(m.shift()),V.style=V.modElem.style;for(u=A.length,c=0;u>c;c++)if(p=A[c],h=V.style[p],f(p,"-")&&(p=l(p)),V.style[p]!==t){if(i||n(o,"undefined"))return s(),"pfx"==e?p:!0;try{V.style[p]=o}catch(v){}if(V.style[p]!=h)return s(),"pfx"==e?p:!0}return s(),!1}function w(A,e,t,o,i){var r=A.charAt(0).toUpperCase()+A.slice(1),s=(A+" "+I.join(r+" ")+r).split(" ");return n(e,"string")||n(e,"undefined")?v(s,e,o,i):(s=(A+" "+U.join(r+" ")+r).split(" "),h(s,e,t))}function T(A,e,n){return w(A,t,t,e,n)}var y=[],R=[],x={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(A,e){var t=this;setTimeout(function(){e(t[A])},0)},addTest:function(A,e,t){R.push({name:A,fn:e,options:t})},addAsyncTest:function(A){R.push({name:null,fn:A})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var E=e.documentElement;Modernizr.addTest("cssall","all"in E.style);var B="svg"===E.nodeName.toLowerCase();Modernizr.addTest("cssremunit",function(){var A=r("a").style;try{A.fontSize="3rem"}catch(e){}return/rem/.test(A.fontSize)}),Modernizr.addTest("videocrossorigin","crossOrigin"in r("video")),Modernizr.addTest("videoloop","loop"in r("video")),Modernizr.addTest("videopreload","preload"in r("video"));var F=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=F,Modernizr.addTest("csscalc",function(){var A="width:",e="calc(10px);",t=r("a");return t.style.cssText=A+F.join(e+A),!!t.style.length});var G={elem:r("modernizr")};Modernizr._q.push(function(){delete G.elem}),Modernizr.addTest("csschunit",function(){var A,e=G.elem.style;try{e.fontSize="3ch",A=-1!==e.fontSize.indexOf("ch")}catch(t){A=!1}return A});var C="CSS"in A&&"supports"in A.CSS,b="supportsCSS"in A;Modernizr.addTest("supports",C||b),Modernizr.addTest("video",function(){var A=r("video"),e=!1;try{e=!!A.canPlayType,e&&(e=new Boolean(e),e.ogg=A.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),e.h264=A.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),e.webm=A.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),e.vp9=A.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),e.hls=A.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return e});var S;!function(){var A={}.hasOwnProperty;S=n(A,"undefined")||n(A.call,"undefined")?function(A,e){return e in A&&n(A.constructor.prototype[e],"undefined")}:function(e,t){return A.call(e,t)}}(),x._l={},x.on=function(A,e){this._l[A]||(this._l[A]=[]),this._l[A].push(e),Modernizr.hasOwnProperty(A)&&setTimeout(function(){Modernizr._trigger(A,Modernizr[A])},0)},x._trigger=function(A,e){if(this._l[A]){var t=this._l[A];setTimeout(function(){var A,n;for(A=0;A<t.length;A++)(n=t[A])(e)},0),delete this._l[A]}},Modernizr._q.push(function(){x.addTest=d}),Modernizr.addAsyncTest(function(){function A(r){o++,clearTimeout(e);var s=r&&"playing"===r.type||0!==i.currentTime;return!s&&n>o?void(e=setTimeout(A,t)):(i.removeEventListener("playing",A,!1),d("videoautoplay",s),void(i.parentNode&&i.parentNode.removeChild(i)))}var e,t=200,n=5,o=0,i=r("video"),s=i.style;if(!(Modernizr.video&&"autoplay"in i))return void d("videoautoplay",!1);s.position="absolute",s.height=0,s.width=0;try{if(Modernizr.video.ogg)i.src="data:video/ogg;base64,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";else{if(!Modernizr.video.h264)return void d("videoautoplay",!1);i.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="}}catch(a){return void d("videoautoplay",!1)}i.setAttribute("autoplay",""),s.cssText="display:none",E.appendChild(i),setTimeout(function(){i.addEventListener("playing",A,!1),e=setTimeout(A,t)},0)});var Q=x.testStyles=u,M=function(){var A=navigator.userAgent,e=A.match(/w(eb)?osbrowser/gi),t=A.match(/windows phone/gi)&&A.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return e||t}();M?Modernizr.addTest("fontface",!1):Q('@font-face {font-family:"font";src:url("https://")}',function(A,t){var n=e.getElementById("smodernizr"),o=n.sheet||n.styleSheet,i=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",r=/src/i.test(i)&&0===i.indexOf(t.split(" ")[0]);Modernizr.addTest("fontface",r)}),Q("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(A){Modernizr.addTest("lastchild",A.lastChild.offsetWidth>A.firstChild.offsetWidth)},2),Q("#modernizr { height: 50vh; }",function(e){var t=parseInt(A.innerHeight/2,10),n=parseInt(s(e,null,"height"),10);Modernizr.addTest("cssvhunit",a(n,t))}),Q("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(A){var e=A.childNodes[2],t=A.childNodes[1],n=A.childNodes[0],o=parseInt((t.offsetWidth-t.clientWidth)/2,10),i=n.clientWidth/100,r=n.clientHeight/100,l=parseInt(50*Math.max(i,r),10),d=parseInt(s(e,null,"width"),10);Modernizr.addTest("cssvmaxunit",a(l,d)||a(l,d-o))},3),Q("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(A){var e=A.childNodes[2],t=A.childNodes[1],n=A.childNodes[0],o=parseInt((t.offsetWidth-t.clientWidth)/2,10),i=n.clientWidth/100,r=n.clientHeight/100,l=parseInt(50*Math.min(i,r),10),d=parseInt(s(e,null,"width"),10);Modernizr.addTest("cssvminunit",a(l,d)||a(l,d-o))},3),Q("#modernizr { width: 50vw; }",function(e){var t=parseInt(A.innerWidth/2,10),n=parseInt(s(e,null,"width"),10);Modernizr.addTest("cssvwunit",a(n,t))});var Z=function(){var e=A.matchMedia||A.msMatchMedia;return e?function(A){var t=e(A);return t&&t.matches||!1}:function(e){var t=!1;return u("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"==(A.getComputedStyle?A.getComputedStyle(e,null):e.currentStyle).position}),t}}();x.mq=Z,Modernizr.addTest("mediaqueries",Z("only all"));var Y="Moz O ms Webkit",I=x._config.usePrefixes?Y.split(" "):[];x._cssomPrefixes=I;var P=function(e){var n,o=F.length,i=A.CSSRule;if("undefined"==typeof i)return t;if(!e)return!1;if(e=e.replace(/^@/,""),n=e.replace(/-/g,"_").toUpperCase()+"_RULE",n in i)return"@"+e;for(var r=0;o>r;r++){var s=F[r],a=s.toUpperCase()+"_"+n;if(a in i)return"@-"+s.toLowerCase()+"-"+e}return!1};x.atRule=P;var U=x._config.usePrefixes?Y.toLowerCase().split(" "):[];x._domPrefixes=U;var V={style:G.elem.style};Modernizr._q.unshift(function(){delete V.style}),x.testAllProps=w,x.testAllProps=T,Modernizr.addTest("ligatures",T("fontFeatureSettings",'"liga" 1')),Modernizr.addTest("cssanimations",T("animationName","a",!0)),Modernizr.addTest("bgpositionxy",function(){return T("backgroundPositionX","3px",!0)&&T("backgroundPositionY","5px",!0)}),Modernizr.addTest("backgroundsize",T("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",T("backgroundSize","cover")),Modernizr.addTest("boxsizing",T("boxSizing","border-box",!0)&&(e.documentMode===t||e.documentMode>7)),Modernizr.addTest("cssgridlegacy",T("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",T("grid-template-rows","none",!0)),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return T("filter","blur(2px)");var A=r("a");return A.style.cssText=F.join("filter:blur(2px); "),!!A.style.length&&(e.documentMode===t||e.documentMode>9)}),Modernizr.addTest("flexbox",T("flexBasis","1px",!0)),Modernizr.addTest("cssmask",T("maskRepeat","repeat-x",!0)),Modernizr.addTest("overflowscrolling",T("overflowScrolling","touch",!0)),Modernizr.addTest("flexboxlegacy",T("boxDirection","reverse",!0));var N=x.prefixed=function(A,e,t){return 0===A.indexOf("@")?P(A):(-1!=A.indexOf("-")&&(A=l(A)),e?w(A,e,t):w(A,"pfx"))};Modernizr.addTest("objectfit",!!N("objectFit"),{aliases:["object-fit"]}),o(),i(y),delete x.addTest,delete x.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();A.Modernizr=Modernizr}(window,document);