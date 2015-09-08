/*! Hoopsworthy - v0.1.0
 * http://www.hoopsworthy.com
 * Copyright (c) 2015; */

!function(window,undefined){"use strict"}(this),window.Modernizr=function(window,document,undefined){function setCss(str){mStyle.cssText=str}function is(obj,type){return typeof obj===type}function contains(str,substr){return!!~(""+str).indexOf(substr)}function testProps(props,prefixed){for(var i in props){var prop=props[i];if(!contains(prop,"-")&&mStyle[prop]!==undefined)return"pfx"==prefixed?prop:!0}return!1}function testDOMProps(props,obj,elem){for(var i in props){var item=obj[props[i]];if(item!==undefined)return elem===!1?props[i]:is(item,"function")?item.bind(elem||obj):item}return!1}function testPropsAll(prop,prefixed,elem){var ucProp=prop.charAt(0).toUpperCase()+prop.slice(1),props=(prop+" "+cssomPrefixes.join(ucProp+" ")+ucProp).split(" ");return is(prefixed,"string")||is(prefixed,"undefined")?testProps(props,prefixed):(props=(prop+" "+domPrefixes.join(ucProp+" ")+ucProp).split(" "),testDOMProps(props,prefixed,elem))}var inputElem,featureName,hasOwnProp,version="2.8.3",Modernizr={},enableClasses=!0,docElement=document.documentElement,mod="modernizr",modElem=document.createElement(mod),mStyle=modElem.style,omPrefixes=({}.toString,"Webkit Moz O ms"),cssomPrefixes=omPrefixes.split(" "),domPrefixes=omPrefixes.toLowerCase().split(" "),ns={svg:"http://www.w3.org/2000/svg"},tests={},classes=[],slice=classes.slice,injectElementWithStyles=function(rule,callback,nodes,testnames){var style,ret,node,docOverflow,div=document.createElement("div"),body=document.body,fakeBody=body||document.createElement("body");if(parseInt(nodes,10))for(;nodes--;)node=document.createElement("div"),node.id=testnames?testnames[nodes]:mod+(nodes+1),div.appendChild(node);return style=["&#173;",'<style id="s',mod,'">',rule,"</style>"].join(""),div.id=mod,(body?div:fakeBody).innerHTML+=style,fakeBody.appendChild(div),body||(fakeBody.style.background="",fakeBody.style.overflow="hidden",docOverflow=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(fakeBody)),ret=callback(div,rule),body?div.parentNode.removeChild(div):(fakeBody.parentNode.removeChild(fakeBody),docElement.style.overflow=docOverflow),!!ret},testMediaQuery=function(mq){var matchMedia=window.matchMedia||window.msMatchMedia;if(matchMedia)return matchMedia(mq)&&matchMedia(mq).matches||!1;var bool;return injectElementWithStyles("@media "+mq+" { #"+mod+" { position: absolute; } }",function(node){bool="absolute"==(window.getComputedStyle?getComputedStyle(node,null):node.currentStyle).position}),bool},_hasOwnProperty={}.hasOwnProperty;hasOwnProp=is(_hasOwnProperty,"undefined")||is(_hasOwnProperty.call,"undefined")?function(object,property){return property in object&&is(object.constructor.prototype[property],"undefined")}:function(object,property){return _hasOwnProperty.call(object,property)},Function.prototype.bind||(Function.prototype.bind=function(that){var target=this;if("function"!=typeof target)throw new TypeError;var args=slice.call(arguments,1),bound=function(){if(this instanceof bound){var F=function(){};F.prototype=target.prototype;var self=new F,result=target.apply(self,args.concat(slice.call(arguments)));return Object(result)===result?result:self}return target.apply(that,args.concat(slice.call(arguments)))};return bound}),tests.csscolumns=function(){return testPropsAll("columnCount")},tests.svg=function(){return!!document.createElementNS&&!!document.createElementNS(ns.svg,"svg").createSVGRect};for(var feature in tests)hasOwnProp(tests,feature)&&(featureName=feature.toLowerCase(),Modernizr[featureName]=tests[feature](),classes.push((Modernizr[featureName]?"":"no-")+featureName));return Modernizr.addTest=function(feature,test){if("object"==typeof feature)for(var key in feature)hasOwnProp(feature,key)&&Modernizr.addTest(key,feature[key]);else{if(feature=feature.toLowerCase(),Modernizr[feature]!==undefined)return Modernizr;test="function"==typeof test?test():test,"undefined"!=typeof enableClasses&&enableClasses&&(docElement.className+=" "+(test?"":"no-")+feature),Modernizr[feature]=test}return Modernizr},setCss(""),modElem=inputElem=null,function(window,document){function addStyleSheet(ownerDocument,cssText){var p=ownerDocument.createElement("p"),parent=ownerDocument.getElementsByTagName("head")[0]||ownerDocument.documentElement;return p.innerHTML="x<style>"+cssText+"</style>",parent.insertBefore(p.lastChild,parent.firstChild)}function getElements(){var elements=html5.elements;return"string"==typeof elements?elements.split(" "):elements}function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];return data||(data={},expanID++,ownerDocument[expando]=expanID,expandoData[expanID]=data),data}function createElement(nodeName,ownerDocument,data){if(ownerDocument||(ownerDocument=document),supportsUnknownElements)return ownerDocument.createElement(nodeName);data||(data=getExpandoData(ownerDocument));var node;return node=data.cache[nodeName]?data.cache[nodeName].cloneNode():saveClones.test(nodeName)?(data.cache[nodeName]=data.createElem(nodeName)).cloneNode():data.createElem(nodeName),!node.canHaveChildren||reSkip.test(nodeName)||node.tagUrn?node:data.frag.appendChild(node)}function createDocumentFragment(ownerDocument,data){if(ownerDocument||(ownerDocument=document),supportsUnknownElements)return ownerDocument.createDocumentFragment();data=data||getExpandoData(ownerDocument);for(var clone=data.frag.cloneNode(),i=0,elems=getElements(),l=elems.length;l>i;i++)clone.createElement(elems[i]);return clone}function shivMethods(ownerDocument,data){data.cache||(data.cache={},data.createElem=ownerDocument.createElement,data.createFrag=ownerDocument.createDocumentFragment,data.frag=data.createFrag()),ownerDocument.createElement=function(nodeName){return html5.shivMethods?createElement(nodeName,ownerDocument,data):data.createElem(nodeName)},ownerDocument.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+getElements().join().replace(/[\w\-]+/g,function(nodeName){return data.createElem(nodeName),data.frag.createElement(nodeName),'c("'+nodeName+'")'})+");return n}")(html5,data.frag)}function shivDocument(ownerDocument){ownerDocument||(ownerDocument=document);var data=getExpandoData(ownerDocument);return!html5.shivCSS||supportsHtml5Styles||data.hasCSS||(data.hasCSS=!!addStyleSheet(ownerDocument,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),supportsUnknownElements||shivMethods(ownerDocument,data),ownerDocument}var supportsHtml5Styles,supportsUnknownElements,version="3.7.0",options=window.html5||{},reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,expando="_html5shiv",expanID=0,expandoData={};!function(){try{var a=document.createElement("a");a.innerHTML="<xyz></xyz>",supportsHtml5Styles="hidden"in a,supportsUnknownElements=1==a.childNodes.length||function(){document.createElement("a");var frag=document.createDocumentFragment();return"undefined"==typeof frag.cloneNode||"undefined"==typeof frag.createDocumentFragment||"undefined"==typeof frag.createElement}()}catch(e){supportsHtml5Styles=!0,supportsUnknownElements=!0}}();var html5={elements:options.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:version,shivCSS:options.shivCSS!==!1,supportsUnknownElements:supportsUnknownElements,shivMethods:options.shivMethods!==!1,type:"default",shivDocument:shivDocument,createElement:createElement,createDocumentFragment:createDocumentFragment};window.html5=html5,shivDocument(document)}(this,document),Modernizr._version=version,Modernizr._domPrefixes=domPrefixes,Modernizr._cssomPrefixes=cssomPrefixes,Modernizr.mq=testMediaQuery,Modernizr.testProp=function(prop){return testProps([prop])},Modernizr.testAllProps=testPropsAll,Modernizr.testStyles=injectElementWithStyles,docElement.className=docElement.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(enableClasses?" js "+classes.join(" "):""),Modernizr}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var A,B,l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};B=function(a){function b(a){var e,f,g,a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a};for(f=0;d>f;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;b>f;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var c,b=0;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var m,n,h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var l,o,k=b.createElement("script"),e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var j,e=b.createElement("link"),c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(window){var ua=navigator.userAgent;window.HTMLPictureElement&&/ecko/.test(ua)&&ua.match(/rv\:(\d+)/)&&RegExp.$1<41&&addEventListener("resize",function(){var timer,dummySrc=document.createElement("source"),fixRespimg=function(img){var source,sizes,picture=img.parentNode;"PICTURE"===picture.nodeName.toUpperCase()?(source=dummySrc.cloneNode(),picture.insertBefore(source,picture.firstElementChild),setTimeout(function(){picture.removeChild(source)})):(!img._pfLastSize||img.offsetWidth>img._pfLastSize)&&(img._pfLastSize=img.offsetWidth,sizes=img.sizes,img.sizes+=",100vw",setTimeout(function(){img.sizes=sizes}))},findPictureImgs=function(){var i,imgs=document.querySelectorAll("picture > img, img[srcset][sizes]");for(i=0;i<imgs.length;i++)fixRespimg(imgs[i])},onResize=function(){clearTimeout(timer),timer=setTimeout(findPictureImgs,99)},mq=window.matchMedia&&matchMedia("(orientation: landscape)"),init=function(){onResize(),mq&&mq.addListener&&mq.addListener(onResize)};return dummySrc.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?init():document.addEventListener("DOMContentLoaded",init),onResize}())}(window),function(window,document,undefined){"use strict";function isSpace(c){return" "===c||"	"===c||"\n"===c||"\f"===c||"\r"===c}function detectTypeSupport(type,typeUri){var image=new window.Image;return image.onerror=function(){types[type]=!1,picturefill()},image.onload=function(){types[type]=1===image.width,picturefill()},image.src=typeUri,"pending"}function updateMetrics(){isVwDirty=!1,DPR=window.devicePixelRatio,cssCache={},sizeLengthCache={},pf.DPR=DPR||1,units.width=Math.max(window.innerWidth||0,docElem.clientWidth),units.height=Math.max(window.innerHeight||0,docElem.clientHeight),units.vw=units.width/100,units.vh=units.height/100,evalId=[units.height,units.width,DPR].join("-"),units.em=pf.getEmValue(),units.rem=units.em}function chooseLowRes(lowerValue,higherValue,dprValue,isCached){var bonusFactor,tooMuch,bonus,meanDensity;return"saveData"===cfg.algorithm?lowerValue>2.7?meanDensity=dprValue+1:(tooMuch=higherValue-dprValue,bonusFactor=Math.pow(lowerValue-.6,1.5),bonus=tooMuch*bonusFactor,isCached&&(bonus+=.1*bonusFactor),meanDensity=lowerValue+bonus):meanDensity=dprValue>1?Math.sqrt(lowerValue*higherValue):lowerValue,meanDensity>dprValue}function applyBestCandidate(img){var srcSetCandidates,matchingSet=pf.getSet(img),evaluated=!1;"pending"!==matchingSet&&(evaluated=evalId,matchingSet&&(srcSetCandidates=pf.setRes(matchingSet),pf.applySetCandidate(srcSetCandidates,img))),img[pf.ns].evaled=evaluated}function ascendingSort(a,b){return a.res-b.res}function setSrcToCur(img,src,set){var candidate;return!set&&src&&(set=img[pf.ns].sets,set=set&&set[set.length-1]),candidate=getCandidateForSrc(src,set),candidate&&(src=pf.makeUrl(src),img[pf.ns].curSrc=src,img[pf.ns].curCan=candidate,candidate.res||setResolution(candidate,candidate.set.sizes)),candidate}function getCandidateForSrc(src,set){var i,candidate,candidates;if(src&&set)for(candidates=pf.parseSet(set),src=pf.makeUrl(src),i=0;i<candidates.length;i++)if(src===pf.makeUrl(candidates[i].url)){candidate=candidates[i];break}return candidate}function getAllSourceElements(picture,candidates){var i,len,source,srcset,sources=picture.getElementsByTagName("source");for(i=0,len=sources.length;len>i;i++)source=sources[i],source[pf.ns]=!0,srcset=source.getAttribute("srcset"),srcset&&candidates.push({srcset:srcset,media:source.getAttribute("media"),type:source.getAttribute("type"),sizes:source.getAttribute("sizes")})}function parseSrcset(input,set){function collectCharacters(regEx){var chars,match=regEx.exec(input.substring(pos));return match?(chars=match[0],pos+=chars.length,chars):void 0}function parseDescriptors(){var w,d,h,i,desc,lastChar,value,intVal,floatVal,pError=!1,candidate={};for(i=0;i<descriptors.length;i++)desc=descriptors[i],lastChar=desc[desc.length-1],value=desc.substring(0,desc.length-1),intVal=parseInt(value,10),floatVal=parseFloat(value),regexNonNegativeInteger.test(value)&&"w"===lastChar?((w||d)&&(pError=!0),0===intVal?pError=!0:w=intVal):regexFloatingPoint.test(value)&&"x"===lastChar?((w||d||h)&&(pError=!0),0>floatVal?pError=!0:d=floatVal):regexNonNegativeInteger.test(value)&&"h"===lastChar?((h||d)&&(pError=!0),0===intVal?pError=!0:h=intVal):pError=!0;pError||(candidate.url=url,w&&(candidate.w=w),d&&(candidate.d=d),h&&(candidate.h=h),h||d||w||(candidate.d=1),1===candidate.d&&(set.has1x=!0),candidate.set=set,candidates.push(candidate))}function tokenize(){for(collectCharacters(regexLeadingSpaces),currentDescriptor="",state="in descriptor";;){if(c=input.charAt(pos),"in descriptor"===state)if(isSpace(c))currentDescriptor&&(descriptors.push(currentDescriptor),currentDescriptor="",state="after descriptor");else{if(","===c)return pos+=1,currentDescriptor&&descriptors.push(currentDescriptor),void parseDescriptors();if("("===c)currentDescriptor+=c,state="in parens";else{if(""===c)return currentDescriptor&&descriptors.push(currentDescriptor),void parseDescriptors();currentDescriptor+=c}}else if("in parens"===state)if(")"===c)currentDescriptor+=c,state="in descriptor";else{if(""===c)return descriptors.push(currentDescriptor),void parseDescriptors();currentDescriptor+=c}else if("after descriptor"===state)if(isSpace(c));else{if(""===c)return void parseDescriptors();state="in descriptor",pos-=1}pos+=1}}for(var url,descriptors,currentDescriptor,state,c,inputLength=input.length,pos=0,candidates=[];;){if(collectCharacters(regexLeadingCommasOrSpaces),pos>=inputLength)return candidates;url=collectCharacters(regexLeadingNotSpaces),descriptors=[],","===url.slice(-1)?(url=url.replace(regexTrailingCommas,""),parseDescriptors()):tokenize()}}function parseSizes(strValue){function parseComponentValues(str){function pushComponent(){component&&(componentArray.push(component),component="")}function pushComponentArray(){componentArray[0]&&(listArray.push(componentArray),componentArray=[])}for(var chrctr,component="",componentArray=[],listArray=[],parenDepth=0,pos=0,inComment=!1;;){if(chrctr=str[pos],chrctr===undefined)return pushComponent(),pushComponentArray(),listArray;if(inComment){if("*"===chrctr&&"/"===str[pos+1]){inComment=!1,pos+=2,pushComponent();continue}pos+=1}else{if(isSpace(chrctr)){if(str[pos-1]&&isSpace(str[pos-1])||!component){pos+=1;continue}if(0===parenDepth){pushComponent(),pos+=1;continue}chrctr=" "}else if("("===chrctr)parenDepth+=1;else if(")"===chrctr)parenDepth-=1;else{if(","===chrctr){pushComponent(),pushComponentArray(),pos+=1;continue}if("/"===chrctr&&"*"===str[pos+1]){inComment=!0,pos+=2;continue}}component+=chrctr,pos+=1}}}function isValidNonNegativeSourceSizeValue(s){return regexCssLengthWithUnits.test(s)&&parseFloat(s)>=0?!0:regexCssCalc.test(s)?!0:"0"===s||"-0"===s||"+0"===s?!0:!1}var i,unparsedSizesList,unparsedSizesListLength,unparsedSize,lastComponentValue,size,regexCssLengthWithUnits=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,regexCssCalc=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(unparsedSizesList=parseComponentValues(strValue),unparsedSizesListLength=unparsedSizesList.length,i=0;unparsedSizesListLength>i;i++)if(unparsedSize=unparsedSizesList[i],lastComponentValue=unparsedSize[unparsedSize.length-1],isValidNonNegativeSourceSizeValue(lastComponentValue)){if(size=lastComponentValue,unparsedSize.pop(),0===unparsedSize.length)return size;if(unparsedSize=unparsedSize.join(" "),pf.matchesMedia(unparsedSize))return size}return"100vw"}document.createElement("picture");var warn,eminpx,alwaysCheckWDescriptor,evalId,pf={},noop=function(){},image=document.createElement("img"),getImgAttr=image.getAttribute,setImgAttr=image.setAttribute,removeImgAttr=image.removeAttribute,docElem=document.documentElement,types={},cfg={algorithm:""},srcAttr="data-pfsrc",srcsetAttr=srcAttr+"set",ua=navigator.userAgent,supportAbort=/rident/.test(ua)||/ecko/.test(ua)&&ua.match(/rv\:(\d+)/)&&RegExp.$1>35,curSrcProp="currentSrc",regWDesc=/\s+\+?\d+(e\d+)?w/,regSize=/(\([^)]+\))?\s*(.+)/,setOptions=window.picturefillCFG,baseStyle="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",fsCss="font-size:100%!important;",isVwDirty=!0,cssCache={},sizeLengthCache={},DPR=window.devicePixelRatio,units={px:1,in:96},anchor=document.createElement("a"),alreadyRun=!1,regexLeadingSpaces=/^[ \t\n\r\u000c]+/,regexLeadingCommasOrSpaces=/^[, \t\n\r\u000c]+/,regexLeadingNotSpaces=/^[^ \t\n\r\u000c]+/,regexTrailingCommas=/[,]+$/,regexNonNegativeInteger=/^\d+$/,regexFloatingPoint=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,on=function(obj,evt,fn,capture){obj.addEventListener?obj.addEventListener(evt,fn,capture||!1):obj.attachEvent&&obj.attachEvent("on"+evt,fn)},memoize=function(fn){var cache={};return function(input){return input in cache||(cache[input]=fn(input)),cache[input]}},evalCSS=function(){var regLength=/^([\d\.]+)(em|vw|px)$/,replace=function(){for(var args=arguments,index=0,string=args[0];++index in args;)string=string.replace(args[index],args[++index]);return string},buidlStr=memoize(function(css){return"return "+replace((css||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(css,length){var parsedLength;if(!(css in cssCache))if(cssCache[css]=!1,length&&(parsedLength=css.match(regLength)))cssCache[css]=parsedLength[1]*units[parsedLength[2]];else try{cssCache[css]=new Function("e",buidlStr(css))(units)}catch(e){}return cssCache[css]}}(),setResolution=function(candidate,sizesattr){return candidate.w?(candidate.cWidth=pf.calcListLength(sizesattr||"100vw"),candidate.res=candidate.w/candidate.cWidth):candidate.res=candidate.d,candidate},picturefill=function(opt){var elements,i,plen,options=opt||{};if(options.elements&&1===options.elements.nodeType&&("IMG"===options.elements.nodeName.toUpperCase()?options.elements=[options.elements]:(options.context=options.elements,options.elements=null)),elements=options.elements||pf.qsa(options.context||document,options.reevaluate||options.reselect?pf.sel:pf.selShort),plen=elements.length){for(pf.setupRun(options),alreadyRun=!0,i=0;plen>i;i++)pf.fillImg(elements[i],options);pf.teardownRun(options)}};warn=window.console&&console.warn?function(message){console.warn(message)}:noop,curSrcProp in image||(curSrcProp="src"),types["image/jpeg"]=!0,types["image/gif"]=!0,types["image/png"]=!0,types["image/svg+xml"]=document.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),pf.ns=("pf"+(new Date).getTime()).substr(0,9),pf.supSrcset="srcset"in image,pf.supSizes="sizes"in image,pf.selShort="picture>img,img[srcset]",pf.sel=pf.selShort,pf.cfg=cfg,pf.supSrcset&&(pf.sel+=",img["+srcsetAttr+"]"),pf.DPR=DPR||1,pf.u=units,pf.types=types,alwaysCheckWDescriptor=pf.supSrcset&&!pf.supSizes,pf.setSize=noop,pf.makeUrl=memoize(function(src){return anchor.href=src,anchor.href}),pf.qsa=function(context,sel){return context.querySelectorAll(sel)},pf.matchesMedia=function(){return window.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?pf.matchesMedia=function(media){return!media||matchMedia(media).matches}:pf.matchesMedia=pf.mMQ,pf.matchesMedia.apply(this,arguments)},pf.mMQ=function(media){return media?evalCSS(media):!0},pf.calcLength=function(sourceSizeValue){var value=evalCSS(sourceSizeValue,!0)||!1;return 0>value&&(value=!1),value},pf.supportsType=function(type){return type?types[type]:!0},pf.parseSize=memoize(function(sourceSizeStr){var match=(sourceSizeStr||"").match(regSize);return{media:match&&match[1],length:match&&match[2]}}),pf.parseSet=function(set){return set.cands||(set.cands=parseSrcset(set.srcset,set)),set.cands},pf.getEmValue=function(){var body;if(!eminpx&&(body=document.body)){var div=document.createElement("div"),originalHTMLCSS=docElem.style.cssText,originalBodyCSS=body.style.cssText;div.style.cssText=baseStyle,docElem.style.cssText=fsCss,body.style.cssText=fsCss,body.appendChild(div),eminpx=div.offsetWidth,body.removeChild(div),eminpx=parseFloat(eminpx,10),docElem.style.cssText=originalHTMLCSS,body.style.cssText=originalBodyCSS}return eminpx||16},pf.calcListLength=function(sourceSizeListStr){if(!(sourceSizeListStr in sizeLengthCache)||cfg.uT){var winningLength=pf.calcLength(parseSizes(sourceSizeListStr));sizeLengthCache[sourceSizeListStr]=winningLength?winningLength:units.width}return sizeLengthCache[sourceSizeListStr]},pf.setRes=function(set){var candidates;if(set){candidates=pf.parseSet(set);for(var i=0,len=candidates.length;len>i;i++)setResolution(candidates[i],set.sizes)}return candidates},pf.setRes.res=setResolution,pf.applySetCandidate=function(candidates,img){if(candidates.length){var candidate,i,j,length,bestCandidate,curSrc,curCan,isSameSet,candidateSrc,abortCurSrc,imageData=img[pf.ns],dpr=pf.DPR;if(curSrc=imageData.curSrc||img[curSrcProp],curCan=imageData.curCan||setSrcToCur(img,curSrc,candidates[0].set),curCan&&curCan.set===candidates[0].set&&(abortCurSrc=supportAbort&&!img.complete&&curCan.res-.1>dpr,abortCurSrc||(curCan.cached=!0,curCan&&isSameSet&&curCan.res>=dpr&&(bestCandidate=curCan))),!bestCandidate)for(candidates.sort(ascendingSort),length=candidates.length,bestCandidate=candidates[length-1],i=0;length>i;i++)if(candidate=candidates[i],candidate.res>=dpr){j=i-1,bestCandidate=candidates[j]&&(abortCurSrc||curSrc!==pf.makeUrl(candidate.url))&&chooseLowRes(candidates[j].res,candidate.res,dpr,candidates[j].cached)?candidates[j]:candidate;break}bestCandidate&&(candidateSrc=pf.makeUrl(bestCandidate.url),imageData.curSrc=candidateSrc,imageData.curCan=bestCandidate,candidateSrc!==curSrc&&pf.setSrc(img,bestCandidate),pf.setSize(img))}},pf.setSrc=function(img,bestCandidate){var origWidth;img.src=bestCandidate.url,"image/svg+xml"===bestCandidate.set.type&&(origWidth=img.style.width,img.style.width=img.offsetWidth+1+"px",img.offsetWidth+1&&(img.style.width=origWidth))},pf.getSet=function(img){var i,set,supportsType,match=!1,sets=img[pf.ns].sets;for(i=0;i<sets.length&&!match;i++)if(set=sets[i],set.srcset&&pf.matchesMedia(set.media)&&(supportsType=pf.supportsType(set.type))){"pending"===supportsType&&(set=supportsType),match=set;break}return match},pf.parseSets=function(element,parent,options){var srcsetAttribute,imageSet,isWDescripor,srcsetParsed,hasPicture=parent&&"PICTURE"===parent.nodeName.toUpperCase(),imageData=element[pf.ns];(imageData.src===undefined||options.src)&&(imageData.src=getImgAttr.call(element,"src"),imageData.src?setImgAttr.call(element,srcAttr,imageData.src):removeImgAttr.call(element,srcAttr)),(imageData.srcset===undefined||options.srcset||!pf.supSrcset||element.srcset)&&(srcsetAttribute=getImgAttr.call(element,"srcset"),imageData.srcset=srcsetAttribute,srcsetParsed=!0),imageData.sets=[],hasPicture&&(imageData.pic=!0,getAllSourceElements(parent,imageData.sets)),imageData.srcset?(imageSet={srcset:imageData.srcset,sizes:getImgAttr.call(element,"sizes")},imageData.sets.push(imageSet),isWDescripor=(alwaysCheckWDescriptor||imageData.src)&&regWDesc.test(imageData.srcset||""),isWDescripor||!imageData.src||getCandidateForSrc(imageData.src,imageSet)||imageSet.has1x||(imageSet.srcset+=", "+imageData.src,imageSet.cands.push({url:imageData.src,d:1,set:imageSet}))):imageData.src&&imageData.sets.push({srcset:imageData.src,sizes:null}),imageData.curCan=null,imageData.curSrc=undefined,imageData.supported=!(hasPicture||imageSet&&!pf.supSrcset||isWDescripor),srcsetParsed&&pf.supSrcset&&!imageData.supported&&(srcsetAttribute?(setImgAttr.call(element,srcsetAttr,srcsetAttribute),element.srcset=""):removeImgAttr.call(element,srcsetAttr)),imageData.supported&&!imageData.srcset&&(!imageData.src&&element.src||element.src!==pf.makeUrl(imageData.src))&&(null===imageData.src?element.removeAttribute("src"):element.src=imageData.src),imageData.parsed=!0},pf.fillImg=function(element,options){var imageData,extreme=options.reselect||options.reevaluate;element[pf.ns]||(element[pf.ns]={}),imageData=element[pf.ns],(extreme||imageData.evaled!==evalId)&&((!imageData.parsed||options.reevaluate)&&pf.parseSets(element,element.parentNode,options),imageData.supported?imageData.evaled=evalId:applyBestCandidate(element))},pf.setupRun=function(){(!alreadyRun||isVwDirty||DPR!==window.devicePixelRatio)&&updateMetrics()},window.HTMLPictureElement?(picturefill=noop,pf.fillImg=noop):!function(){var isDomReady,regReady=window.attachEvent?/d$|^c/:/d$|^c|^i/,run=function(){var readyState=document.readyState||"";timerId=setTimeout(run,"loading"===readyState?200:999),document.body&&(pf.fillImgs(),isDomReady=isDomReady||regReady.test(readyState),isDomReady&&clearTimeout(timerId))},timerId=setTimeout(run,document.body?9:99),debounce=function(func,wait){var timeout,timestamp,later=function(){var last=new Date-timestamp;wait>last?timeout=setTimeout(later,wait-last):(timeout=null,func())};return function(){timestamp=new Date,timeout||(timeout=setTimeout(later,wait))}},onResize=function(){isVwDirty=!0,pf.fillImgs()};on(window,"resize",debounce(onResize,99)),on(document,"readystatechange",run),types["image/webp"]=detectTypeSupport("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==")}(),pf.picturefill=picturefill,pf.fillImgs=picturefill,pf.teardownRun=noop,picturefill._=pf,window.picturefillCFG={pf:pf,push:function(args){var name=args.shift();"function"==typeof pf[name]?pf[name].apply(pf,args):(cfg[name]=args[0],alreadyRun&&pf.fillImgs({reselect:!0}))}};for(;setOptions&&setOptions.length;)window.picturefillCFG.push(setOptions.shift());window.picturefill=picturefill,"object"==typeof module&&"object"==typeof module.exports?module.exports=picturefill:"function"==typeof define&&define.amd&&define("picturefill",function(){return picturefill})}(window,document);
//# sourceMappingURL=../maps/head.js.map