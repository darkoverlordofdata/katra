/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);
// JQuery Console 1.0
// Sun Feb 21 20:28:47 GMT 2010
//
// Copyright 2010 Chris Done, Simon David Pratt. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//
//    1. Redistributions of source code must retain the above
//       copyright notice, this list of conditions and the following
//       disclaimer.
//
//    2. Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials
//       provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
// COPYRIGHT HOLDERS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
// ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

// TESTED ON
//   Internet Explorer 6
//   Opera 10.01
//   Chromium 4.0.237.0 (Ubuntu build 31094)
//   Firefox 3.5.8, 3.6.2 (Mac)
//   Safari 4.0.5 (6531.22.7) (Mac)
//   Google Chrome 5.0.375.55 (Mac)

(function($){
	var isWebkit = !!~navigator.userAgent.indexOf(' AppleWebKit/');

	$.fn.console = function(config){
		////////////////////////////////////////////////////////////////////////
		// Constants
		// Some are enums, data types, others just for optimisation
		var keyCodes = {
			// left
			37: moveBackward,
			// right
			39: moveForward,
			// up
			38: previousHistory,
			// down
			40: nextHistory,
			// backspace
			8:  backDelete,
			// delete
			46: forwardDelete,
				// end
			35: moveToEnd,
			// start
			36: moveToStart,
			// return
			13: commandTrigger,
			// tab
			18: doNothing,
			// tab
			9: doComplete
		};
		var ctrlCodes = {
			// C-a
			65: moveToStart,
			// C-e
			69: moveToEnd,
			// C-d
			68: forwardDelete,
			// C-n
			78: nextHistory,
			// C-p
			80: previousHistory,
			// C-b
			66: moveBackward,
			// C-f
			70: moveForward,
			// C-k
			75: deleteUntilEnd
		};
        if(config.ctrlCodes) {
            $.extend(ctrlCodes, config.ctrlCodes);
        }
		var altCodes = {
			// M-f
			70: moveToNextWord,
			// M-b
			66: moveToPreviousWord,
			// M-d
			68: deleteNextWord
		};
		var cursor = '<span class="jquery-console-cursor">&nbsp;</span>';

		////////////////////////////////////////////////////////////////////////
		// Globals
		var container = $(this);
		var inner = $('<div class="jquery-console-inner"></div>');
		// erjiang: changed this from a text input to a textarea so we
		// can get pasted newlines
//  	var typer = $('<textarea class="jquery-console-typer"></textarea>');
    var typer = $('<div contenteditable class="jquery-console-typer"></div>');
		// Prompt
		var promptBox;
		var prompt;
		var promptLabel = config && config.promptLabel? config.promptLabel : "> ";
    var promptRestore = promptLabel;
    var promptAlt = config && config.promptAlt? config.promptAlt : "? ";
		var continuedPromptLabel = config && config.continuedPromptLabel?
		config.continuedPromptLabel : "> ";
		var column = 0;
		var promptText = '';
		var restoreText = '';
		var continuedText = '';
		// Prompt history stack
		var history = [];
		var ringn = 0;
		// For reasons unknown to The Sword of Michael himself, Opera
		// triggers and sends a key character when you hit various
		// keys like PgUp, End, etc. So there is no way of knowing
		// when a user has typed '#' or End. My solution is in the
		// typer.keydown and typer.keypress functions; I use the
		// variable below to ignore the keypress event if the keydown
		// event succeeds.
		var cancelKeyPress = 0;
		// When this value is false, the prompt will not respond to input
		var acceptInput = true;
		// When this value is true, the command has been canceled
		var cancelCommand = false;

		// External exports object
		var extern = {};

		////////////////////////////////////////////////////////////////////////
		// Main entry point
		(function(exec){
			container.append(inner);
			inner.append(typer);
			typer.css({position:'absolute',top:0,left:'-9999px'});
			if (config.welcomeMessage)
				message(config.welcomeMessage,'jquery-console-welcome');
      if (exec !== true)
  			newPromptBox();
      if (config.autofocus) {
        inner.addClass('jquery-console-focus');
        typer.focus();
        setTimeout(function(){
          inner.addClass('jquery-console-focus');
          typer.focus();
        },100);
      }
			extern.inner = inner;
			extern.typer = typer;
			extern.scrollToBottom = scrollToBottom;
		})(config.exec);


    ////////////////////////////////////////////////////////////////////////
    // Toggle prompt betweet > and ?

    extern.setPrompt = function(prompt) {
      if (prompt) {                   // Set
        promptLabel = promptAlt;      // default: ?
      }
      else {                          // Reset
        promptLabel = promptRestore;  // default: >
      }
    }

		////////////////////////////////////////////////////////////////////////
		// Syncronize the cursor to the terminal

    extern.sync = function(dur){

      dur = dur || 1;

      inner.parent().fadeOut(dur, function(){

        inner.find('div span span.jquery-console-cursor').each(function(){
          //$(this).removeClass('jquery-console-cursor');
          $(this).html('');
        });
        newPromptBox();
        inner.parent().fadeIn(dur, function(){
          inner.addClass('jquery-console-focus');
          typer.focus();
        });
      });
    };
    ////////////////////////////////////////////////////////////////////////
    // Reset terminal
    extern.reset = function(){

      var welcome = (typeof config.welcomeMessage != 'undefined');
      inner.parent().fadeOut(function(){
        inner.find('div').each(function(){
          if (!welcome) {
            $(this).remove();
          } else {
            welcome = false;
          }
        });
        newPromptBox();
        inner.parent().fadeIn(function(){
          inner.addClass('jquery-console-focus');
          typer.focus();
        });
      });



    };
		////////////////////////////////////////////////////////////////////////
		// Reset terminal
		extern.notice = function(msg,style){
			var n = $('<div class="notice"></div>').append($('<div></div>').text(msg))
				.css({visibility:'hidden'});
			container.append(n);
			var focused = true;
			if (style=='fadeout')
				setTimeout(function(){
					n.fadeOut(function(){
						n.remove();
					});
				},4000);
			else if (style=='prompt') {
				var a = $('<br/><div class="action"><a href="javascript:">OK</a><div class="clear"></div></div>');
				n.append(a);
				focused = false;
				a.click(function(){ n.fadeOut(function(){ n.remove();inner.css({opacity:1}) }); });
			}
			var h = n.height();
			n.css({height:'0px',visibility:'visible'})
				. animate({height:h+'px'},function(){
					if (!focused) inner.css({opacity:0.5});
				});
			n.css('cursor','default');
			return n;
		};

		////////////////////////////////////////////////////////////////////////
		// Make a new prompt box
		function newPromptBox() {
			column = 0;
			promptText = '';
			ringn = 0; // Reset the position of the history ring
			enableInput();
			promptBox = $('<div class="jquery-console-prompt-box"></div>');
			var label = $('<span class="jquery-console-prompt-label"></span>');
			var labelText = extern.continuedPrompt? continuedPromptLabel : promptLabel;
			promptBox.append(label.text(labelText).show());
			label.html(label.html().replace(' ','&nbsp;'));
			prompt = $('<span class="jquery-console-prompt"></span>');
			promptBox.append(prompt);
			inner.append(promptBox);
			updatePromptDisplay();
		};

		////////////////////////////////////////////////////////////////////////
		// Handle setting focus
		container.click(function(){
			inner.addClass('jquery-console-focus');
			inner.removeClass('jquery-console-nofocus');
			if (isWebkit) {
				typer.focusWithoutScrolling();
			} else {
				typer.css('position', 'fixed').focus();
			}
			scrollToBottom();
			return false;
		});

		////////////////////////////////////////////////////////////////////////
		// Handle losing focus
		typer.blur(function(){
			inner.removeClass('jquery-console-focus');
			inner.addClass('jquery-console-nofocus');
		});

		////////////////////////////////////////////////////////////////////////
		// Bind to the paste event of the input box so we know when we
		// get pasted data
		typer.bind('paste', function(e) {
			// wipe typer input clean just in case
			typer.val("");
			// this timeout is required because the onpaste event is
			// fired *before* the text is actually pasted
			setTimeout(function() {
				typer.consoleInsert(typer.val());
				typer.val("");
			}, 0);
		});

		////////////////////////////////////////////////////////////////////////
		// Handle key hit before translation
		// For picking up control characters like up/left/down/right

		typer.keydown(function(e){
			cancelKeyPress = 0;
			var keyCode = e.keyCode;
			// C-c: cancel the execution
			if(e.ctrlKey && keyCode == 67) {
				cancelKeyPress = keyCode;
				cancelExecution();
				return false;
			}
			if (acceptInput) {
				if (keyCode in keyCodes) {
					cancelKeyPress = keyCode;
					(keyCodes[keyCode])();
					return false;
				} else if (e.ctrlKey && keyCode in ctrlCodes) {
					cancelKeyPress = keyCode;
					(ctrlCodes[keyCode])();
					return false;
				} else if (e.altKey  && keyCode in altCodes) {
					cancelKeyPress = keyCode;
					(altCodes[keyCode])();
					return false;
				}
			}
		});

		////////////////////////////////////////////////////////////////////////
		// Handle key press
		typer.keypress(function(e){
			var keyCode = e.keyCode || e.which;
			if (isIgnorableKey(e)) {
				return false;
			}
			// C-v: don't insert on paste event
			if ((e.ctrlKey || e.metaKey) && String.fromCharCode(keyCode).toLowerCase() == 'v') {
				return true;
			}
			if (acceptInput && cancelKeyPress != keyCode && keyCode >= 32){
				if (cancelKeyPress) return false;
				if (
					typeof config.charInsertTrigger == 'undefined' || (
						typeof config.charInsertTrigger == 'function' &&
						config.charInsertTrigger(keyCode,promptText)
					)
				){
					typer.consoleInsert(keyCode);
          /* d16a */
          scrollToBottom();
        }
			}
			if (isWebkit) return false;
		});

		function isIgnorableKey(e) {
			// for now just filter alt+tab that we receive on some platforms when
			// user switches windows (goes away from the browser)
			return ((e.keyCode == keyCodes.tab || e.keyCode == 192) && e.altKey);
		};

		////////////////////////////////////////////////////////////////////////
		// Rotate through the command history
		function rotateHistory(n){
			if (history.length == 0) return;
			ringn += n;
			if (ringn < 0) ringn = history.length;
			else if (ringn > history.length) ringn = 0;
			var prevText = promptText;
			if (ringn == 0) {
				promptText = restoreText;
			} else {
				promptText = history[ringn - 1];
			}
			if (config.historyPreserveColumn) {
				if (promptText.length < column + 1) {
					column = promptText.length;
				} else if (column == 0) {
					column = promptText.length;
				}
			} else {
				column = promptText.length;
			}
			updatePromptDisplay();
		};

		function previousHistory() {
			rotateHistory(-1);
		};

		function nextHistory() {
			rotateHistory(1);
		};

		// Add something to the history ring
		function addToHistory(line){
			history.push(line);
			restoreText = '';
		};

		// Delete the character at the current position
		function deleteCharAtPos(){
			if (column < promptText.length){
				promptText =
					promptText.substring(0,column) +
					promptText.substring(column+1);
				restoreText = promptText;
				return true;
			} else return false;
		};

		function backDelete() {
			if (moveColumn(-1)){
				deleteCharAtPos();
				updatePromptDisplay();
			}
		};

		function forwardDelete() {
			if (deleteCharAtPos()){
				updatePromptDisplay();
			}
		};

		function deleteUntilEnd() {
			while(deleteCharAtPos()) {
				updatePromptDisplay();
			}
		};

		function deleteNextWord() {
			// A word is defined within this context as a series of alphanumeric
			// characters.
			// Delete up to the next alphanumeric character
			while(
				column < promptText.length &&
				!isCharAlphanumeric(promptText[column])
			) {
				deleteCharAtPos();
				updatePromptDisplay();
			}
			// Then, delete until the next non-alphanumeric character
			while(
				column < promptText.length &&
				isCharAlphanumeric(promptText[column])
			) {
				deleteCharAtPos();
				updatePromptDisplay();
			}
		};

		////////////////////////////////////////////////////////////////////////
		// Validate command and trigger it if valid, or show a validation error
		function commandTrigger() {
			var line = promptText;
			if (typeof config.commandValidate == 'function') {
				var ret = config.commandValidate(line);
				if (ret == true || ret == false) {
					if (ret) {
						handleCommand();
					}
				} else {
					commandResult(ret,"jquery-console-message-error");
				}
			} else {
				handleCommand();
			}
		};

		// Scroll to the bottom of the view
		function scrollToBottom() {
			var version = jQuery.fn.jquery.split('.');
			var major = parseInt(version[0]);
			var minor = parseInt(version[1]);
			
			// check if we're using jquery > 1.6
			if ((major == 1 && minor > 6) || major > 1) {
				inner.prop({ scrollTop: inner.prop("scrollHeight") });
			}
			else {
				inner.attr({ scrollTop: inner.attr("scrollHeight") });
			}
		};

		function cancelExecution() {
			if(typeof config.cancelHandle == 'function') {
			config.cancelHandle();
			}
		}

		////////////////////////////////////////////////////////////////////////
		// Handle a command
		function handleCommand() {
			if (typeof config.commandHandle == 'function') {
				disableInput();
				addToHistory(promptText);
				var text = promptText;
				if (extern.continuedPrompt) {
					if (continuedText)
						continuedText += '\n' + promptText;
					else continuedText = promptText;
				} else continuedText = undefined;
				if (continuedText) text = continuedText;
				var ret = config.commandHandle(text,function(msgs){
					commandResult(msgs);
				});
				if (extern.continuedPrompt && !continuedText)
					continuedText = promptText;
				if (typeof ret == 'boolean') {
					if (ret) {
						// Command succeeded without a result.
						commandResult();
					} else {
						commandResult(
							'Command failed.',
							"jquery-console-message-error"
						);
					}
				} else if (typeof ret == "string") {
					commandResult(ret,"jquery-console-message-success");
				} else if (typeof ret == 'object' && ret.length) {
					commandResult(ret);
				} else if (extern.continuedPrompt) {
					commandResult();
				}
			}
		};

		////////////////////////////////////////////////////////////////////////
		// Disable input
		function disableInput() {
			acceptInput = false;
		};

		// Enable input
		function enableInput() {
			acceptInput = true;
		}

		////////////////////////////////////////////////////////////////////////
		// Reset the prompt in invalid command
		function commandResult(msg,className) {
			column = -1;
			updatePromptDisplay();
			if (typeof msg == 'string') {
				message(msg,className);
			} else if ($.isArray(msg)) {
				for (var x in msg) {
					var ret = msg[x];
					message(ret.msg,ret.className);
				}
			} else { // Assume it's a DOM node or jQuery object.
				inner.append(msg);
			}
			newPromptBox();
		};

		////////////////////////////////////////////////////////////////////////
		// Display a message
		function message(msg,className) {
			var mesg = $('<div class="jquery-console-message"></div>');
			if (className) mesg.addClass(className);
			mesg.filledText(msg).hide();
			inner.append(mesg);
			mesg.show();
		};

		////////////////////////////////////////////////////////////////////////
		// Handle normal character insertion
		// data can either be a number, which will be interpreted as the
		// numeric value of a single character, or a string
		typer.consoleInsert = function(data){
			// TODO: remove redundant indirection
			var text = isNaN(data) ? data : String.fromCharCode(data);
			var before = promptText.substring(0,column);
			var after = promptText.substring(column);
			promptText = before + text + after;
			moveColumn(text.length);
			restoreText = promptText;
			updatePromptDisplay();
		};

		////////////////////////////////////////////////////////////////////////
		// Move to another column relative to this one
		// Negative means go back, positive means go forward.
		function moveColumn(n){
			if (column + n >= 0 && column + n <= promptText.length){
				column += n;
				return true;
			} else return false;
		};

		function moveForward() {
			if(moveColumn(1)) {
				updatePromptDisplay();
				return true;
			}
			return false;
		};

		function moveBackward() {
			if(moveColumn(-1)) {
				updatePromptDisplay();
				return true;
			}
			return false;
		};

		function moveToStart() {
			if (moveColumn(-column))
				updatePromptDisplay();
		};

		function moveToEnd() {
			if (moveColumn(promptText.length-column))
				updatePromptDisplay();
		};

		function moveToNextWord() {
			while(
				column < promptText.length &&
				!isCharAlphanumeric(promptText[column]) &&
				moveForward()
			) {}
			while(
				column < promptText.length &&
				isCharAlphanumeric(promptText[column]) &&
				moveForward()
			) {}
		};

		function moveToPreviousWord() {
			// Move backward until we find the first alphanumeric
			while(
				column -1 >= 0 &&
				!isCharAlphanumeric(promptText[column-1]) &&
				moveBackward()
			) {}
			// Move until we find the first non-alphanumeric
			while(
				column -1 >= 0 &&
				isCharAlphanumeric(promptText[column-1]) &&
				moveBackward()
			) {}
		};

		function isCharAlphanumeric(charToTest) {
			if(typeof charToTest == 'string') {
				var code = charToTest.charCodeAt();
				return (code >= 'A'.charCodeAt() && code <= 'Z'.charCodeAt()) ||
					(code >= 'a'.charCodeAt() && code <= 'z'.charCodeAt()) ||
					(code >= '0'.charCodeAt() && code <= '9'.charCodeAt());
			}
			return false;
		};

		function doComplete() {
			if(typeof config.completeHandle == 'function') {
				var completions = config.completeHandle(promptText);
				var len = completions.length;
				if (len === 1) {
					extern.promptText(promptText + completions[0]);
				} else if (len > 1 && config.cols) {
					var prompt = promptText;
					// Compute the number of rows that will fit in the width
					var max = 0;
					for (var i = 0;i < len;i++) {
						max = Math.max(max, completions[i].length);
					}
					max += 2;
					var n = Math.floor(config.cols / max);
					var buffer = "";
					var col = 0;
					for (i = 0;i < len;i++) {
						var completion = completions[i];
						buffer += completions[i];
						for (var j = completion.length;j < max;j++) {
							buffer += " ";
						}
						if (++col >= n) {
							buffer += "\n";
							col = 0;
						}
					}
					commandResult(buffer,"jquery-console-message-value");
					extern.promptText(prompt);
				}
			}
		};

		function doNothing() {};

		extern.promptText = function(text){
			if (typeof text === 'string') {
				promptText = text;
				column = promptText.length;
				updatePromptDisplay();
			}
			return promptText;
		};

		////////////////////////////////////////////////////////////////////////
		// Update the prompt display
		function updatePromptDisplay(){
			var line = promptText;
			var html = '';
			if (column > 0 && line == ''){
				// When we have an empty line just display a cursor.
				html = cursor;
			} else if (column == promptText.length){
				// We're at the end of the line, so we need to display
				// the text *and* cursor.
				html = htmlEncode(line) + cursor;
			} else {
				// Grab the current character, if there is one, and
				// make it the current cursor.
				var before = line.substring(0, column);
				var current = line.substring(column,column+1);
				if (current){
					current =
						'<span class="jquery-console-cursor">' +
						htmlEncode(current) +
						'</span>';
				}
				var after = line.substring(column+1);
				html = htmlEncode(before) + current + htmlEncode(after);
			}
			prompt.html(html);
			scrollToBottom();
		};

		// Simple HTML encoding
		// Simply replace '<', '>' and '&'
		// TODO: Use jQuery's .html() trick, or grab a proper, fast
		// HTML encoder.
		function htmlEncode(text){
			return (
				text.replace(/&/g,'&amp;')
					.replace(/</g,'&lt;')
					.replace(/</g,'&lt;')
					.replace(/ /g,'&nbsp;')
					.replace(/\n/g,'<br />')
			);
		};

		return extern;
	};
	// Simple utility for printing messages
	$.fn.filledText = function(txt){
		$(this).text(txt);
		$(this).html($(this).html().replace(/\n/g,'<br/>'));
		return this;
	};

	// Alternative method for focus without scrolling
	$.fn.focusWithoutScrolling = function(){
		var x = window.scrollX, y = window.scrollY;
		$(this).focus();
		window.scrollTo(x, y);
	};
})(jQuery);
// Generated by CoffeeScript 1.6.3
(function() {
  var Console, FileSystem, MODE_REPL, MODE_RUN, rte, _ctrlCodes, _data, _fix, _get, _set_title;

  MODE_REPL = 0;

  MODE_RUN = 1;

  _ctrlCodes = {
    82: function() {
      return this.reset();
    }
  };

  _fix = function($text) {
    return $text.replace(/\ /g, "&nbsp;").replace(/\n/g, "<br />");
  };

  _get = function($name, $next) {
    if (localStorage[$name] != null) {
      return $next(localStorage[$name]);
    } else {
      return $next('');
    }
  };

  _set_title = function($filename) {
    var $name;
    $name = $filename.split('/').pop();
    if (/\[.*\]$/.test(document.title)) {
      return document.title.replace(/\[(.*)\]$/, $name);
    } else {
      return document.title += " - [" + $name + "]";
    }
  };

  window.rte = rte = {
    Console: Console = (function() {
      Console.prototype.mode = MODE_REPL;

      Console.prototype.element = '';

      Console.prototype.console = null;

      Console.prototype.buffer = null;

      Console.prototype.vars = null;

      Console.prototype.animateScroll = true;

      Console.prototype.autofocus = true;

      Console.prototype.promptLabel = '';

      Console.prototype.promptAlt = '?';

      Console.prototype.promptHistory = true;

      Console.prototype.welcomeMessage = '';

      function Console(element, prompt) {
        this.element = element != null ? element : '.console';
        this.prompt = prompt != null ? prompt : '> ';
        this.promptLabel = this.prompt;
        this.clear();
      }

      Console.prototype.commandValidate = function($line) {
        if ($line === "") {
          return false;
        } else {
          return true;
        }
      };

      Console.prototype.input = function($prompt, $vars) {
        if ($prompt != null) {
          this.print($prompt);
        }
        this.buffer = [];
        this.vars = $vars;
        return true;
      };

      Console.prototype.pause = function($set) {};

      Console.prototype.reset = function() {
        return this.console.sync();
      };

      Console.prototype.setPrompt = function($prompt) {
        return this.console.setPrompt($prompt);
      };

      Console.prototype.debug = function($text) {
        $text = $text != null ? String($text) : '';
        return this.console.inner.append(_fix("" + $text + "\n"));
      };

      Console.prototype.hilite = function($text) {
        $text = $text != null ? String($text) : '';
        return this.console.inner.append(_fix("" + $text + "\n"));
      };

      Console.prototype.print = function($text) {
        $text = $text != null ? String($text) : '';
        return this.console.inner.append(_fix($text));
      };

      Console.prototype.println = function($text) {
        $text = $text != null ? String($text) : '';
        return this.console.inner.append(_fix("" + $text + "\n"));
      };

      Console.prototype.clear = function() {
        $(this.element).html('');
        this.console = $(this.element).console(this);
        this.console.inner.offset({
          top: 0,
          left: 0
        });
        this.console.inner.width($(document).width() - 12);
        return this.console.inner.height($(document).height() - 12);
      };

      return Console;

    })(),
    FileSystem: FileSystem = (function() {
      var $root;

      function FileSystem() {}

      $root = '/';

      FileSystem.prototype.setRoot = function($path) {
        return $root = $path;
      };

      FileSystem.prototype.readFile = function($filename, $next) {
        if (localStorage[$filename] != null) {
          return _get($filename, function($data) {
            _set_title($filename);
            return $next(null, String($data));
          });
        } else {
          return $.get($root + $filename + '.bas', function($data) {
            _set_title($filename);
            return $next(null, String($data));
          });
        }
      };

      FileSystem.prototype.writeFile = function($filename, $data, $next) {
        localStorage[$filename] = $data;
        return $next(null);
      };

      FileSystem.prototype.deleteFile = function($filename, $next) {
        delete localStorage[$filename];
        return $next(null);
      };

      FileSystem.prototype.readDir = function($dir, $next) {
        var $name, $path, $value;
        return $next(((function() {
          var _ref, _results;
          _ref = _data[$dir];
          _results = [];
          for ($name in _ref) {
            $path = _ref[$name];
            _results.push($name + '.bas');
          }
          return _results;
        })()).concat($dir === 'CATALOG' ? (function() {
          var _results;
          _results = [];
          for ($name in localStorage) {
            $value = localStorage[$name];
            _results.push($name.split('/').pop() + '.bas');
          }
          return _results;
        })() : []));
      };

      return FileSystem;

    })()
  };

  _data = {
    ATARI: {
      SRTRK: 'bas/atari/SRTRK.bas',
      WUMPUS: 'bas/atari/WUMPUS.bas'
    },
    GWBASIC: {
      eliza: 'bas/gwbasic/eliza.bas',
      romulan: 'bas/gwbasic/romulan.bas'
    },
    GROUP: {
      TREK0: 'bas/hp2k/group/TREK0.bas',
      TREK1: 'bas/hp2k/group/TREK1.bas',
      TREK2: 'bas/hp2k/group/TREK2.bas',
      TREK3: 'bas/hp2k/group/TREK3.bas',
      TREK4: 'bas/hp2k/group/TREK4.bas',
      TREK73: 'bas/hp2k/group/TREK73.bas'
    },
    LIBRARY: {
      TRADER: 'bas/hp2k/system/TRADER.bas',
      TRADES: 'bas/hp2k/system/TRADES.bas'
    },
    TEST: {
      data: 'bas/hp2k/test/data.bas',
      def: 'bas/hp2k/test/def.bas',
      dim: 'bas/hp2k/test/dim.bas',
      "for": 'bas/hp2k/test/for.bas',
      gosub: 'bas/hp2k/test/gosub.bas',
      "if": 'bas/hp2k/test/if.bas',
      input: 'bas/hp2k/test/input.bas',
      "let": 'bas/hp2k/test/let.bas',
      numbers: 'bas/hp2k/test/numbers.bas',
      print: 'bas/hp2k/test/print.bas',
      test: 'bas/hp2k/test/test.bas',
      unary: 'bas/hp2k/test/unary.bas'
    },
    CATALOG: {
      OREGON: 'bas/hp2k/OREGON.bas',
      STRTR1: 'bas/hp2k/STRTR1.bas',
      STTR1: 'bas/hp2k/STTR1.bas'
    }
  };

}).call(this);
// Generated by CoffeeScript 1.6.3
(function() {
  var ABS, AND, ATN, Add, Base, BuiltIn, COS, Chain, Com, Comma, Con, Console, Const, Data, Def, Dim, Div, EQ, EXP, End, Enter, FN, FOR, For, GE, GOSUB, GT, Gosub, Goto, INT, If, Image, Input, Keyword, LCASE, LE, LEFT, LEN, LIN, LOG, LT, Let, MID, MODE_REPL, MODE_RUN, Mat, MatRead, Max, Min, Mul, NE, NOT, Next, OR, Operator, PHASE_EXEC, PHASE_SCAN, PRINTF, Pow, Print, RIGHT, RND, Randomize, Read, Rem, Restore, Return, SGN, SIN, SPA, SQR, SUBSTR, Semic, Statement, Stop, Sub, TAB, TAN, TIM, UCASE, Using, V_ATARI, V_GWBASIC, V_HP2000, Var, Zer, katra, rte, __con, __fs, _ary, _bind, _chain, _clean, _com, _dat, _dbg, _dim, _dp, _elapsed_time, _eop, _eval, _exec, _fixup_if, _fixup_print, _flatten, _fn, _format, _gw, _init, _load, _mark, _mrk, _nam, _ofs, _pad, _parse, _pc, _prg, _qualify, _raw, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref2, _ref20, _ref21, _ref22, _ref23, _ref24, _ref25, _ref26, _ref27, _ref28, _ref29, _ref3, _ref30, _ref31, _ref32, _ref33, _ref34, _ref35, _ref36, _ref37, _ref38, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _run, _save, _sprintf, _start, _stk, _str, _txt, _var, _ver, _wel, _xrf,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  rte = typeof window !== "undefined" && window !== null ? window.rte : require("./rte.node");

  V_HP2000 = 0;

  V_ATARI = 1;

  V_GWBASIC = 2;

  GOSUB = 1;

  FOR = 2;

  PHASE_SCAN = 0;

  PHASE_EXEC = 1;

  MODE_REPL = 0;

  MODE_RUN = 1;

  PRINTF = /(\%)([-])?([+])?([0])?(\d*)?(\.\d*)?([\%ds])/g;

  __con = null;

  __fs = null;

  _ary = {};

  _com = [];

  _dat = [];

  _dbg = false;

  _dp = 0;

  _eop = false;

  _fn = {};

  _gw = false;

  _mrk = {};

  _nam = '';

  _ofs = 0;

  _pc = 0;

  _prg = [];

  _raw = {};

  _stk = [];

  _str = {};

  _txt = '';

  _var = {};

  _ver = 0;

  _wel = '';

  _xrf = {};

  _bind = function() {
    return Object.defineProperties(this, {
      _con: {
        get: function() {
          if (__con == null) {
            return __con = new Console(_wel);
          } else {
            return __con;
          }
        }
      },
      _fs: {
        get: function() {
          if (__fs == null) {
            return __fs = new rte.FileSystem();
          } else {
            return __fs;
          }
        }
      }
    });
  };

  _init = function($all) {
    _ary = {};
    _com = [];
    _dat = [];
    _dp = 0;
    _eop = false;
    _fn = {};
    _mrk = {};
    _ofs = 0;
    _pc = 0;
    if ($all) {
      _raw = {};
    }
    _stk = [];
    _str = {};
    _var = {};
    return _xrf = {};
  };

  _eval = function($value) {
    if ($value["eval"] != null) {
      return $value["eval"]();
    } else {
      return $value;
    }
  };

  _qualify = function($name, $version) {
    if ($version == null) {
      $version = V_HP2000;
    }
    switch ($version) {
      case V_ATARI:
        return 'bas/atari/' + $name;
      case V_GWBASIC:
        return 'bas/gwbasic/' + $name;
      case V_HP2000:
        switch ($name[0]) {
          case "*":
            return 'bas/hp2k/group/' + $name.slice(1);
          case "$":
            return 'bas/hp2k/system/' + $name.slice(1);
          case "#":
            return 'bas/hp2k/test/' + $name.slice(1);
          default:
            return 'bas/hp2k/' + $name;
        }
    }
  };

  _clean = function($code) {
    if ($code.charCodeAt(0) === 0xfeff) {
      $code = $code.slice(1);
    }
    return $code = ($code + '\n').replace(/\r/g, '\n').replace(/\n+/g, '\n');
  };

  _save = function($version, $name, $data, $next) {
    $name = $name[0] === '"' ? $name.slice(1, -1) : $name;
    _con.pause(true);
    _fs.writeFile(_qualify($name, $version), $data, function() {
      if (typeof $next === "function") {
        $next();
      }
      return _con.pause(false);
    });
    return true;
  };

  _load = function($version, $name, $init, $next) {
    if ($init == null) {
      $init = true;
    }
    $name = $name[0] === '"' ? $name.slice(1, -1) : $name;
    _init($init);
    _con.pause(true);
    _fs.readFile(_qualify($name, $version), function($err, $data) {
      if ($err != null) {
        _con.println($err);
      } else {
        $data = _clean($data).split('\n');
        if (isNaN($data[0][0])) {
          $data.shift();
        }
        if ($data[0] === "") {
          $data.shift();
        }
        _nam = /^[A-Za-z]/.test($name) ? $name : $name.slice(1);
        _ver = $version;
        _gw = _ver === V_GWBASIC ? true : false;
        _txt = $data.join('\n');
        if (typeof $next === "function") {
          $next(_txt);
        }
        _parse(_txt);
      }
      return _con.pause(false);
    });
    return true;
  };

  _exec = function($version, $name, $init) {
    if ($init == null) {
      $init = true;
    }
    _init($init);
    _con.pause(true);
    _fs.readFile(_qualify($name, $version), function($err, $data) {
      if ($err != null) {
        _con.println($err);
      } else {
        $data = _clean($data).split('\n');
        if (isNaN($data[0][0])) {
          $data.shift();
        }
        if ($data[0] === "") {
          $data.shift();
        }
        _nam = /^[A-Za-z]/.test($name) ? $name : $name.slice(1);
        _ver = $version;
        _gw = _ver === V_GWBASIC ? true : false;
        _txt = $data.join('\n');
        _parse(_txt);
        _start();
        _run();
        _con.reset();
      }
      return _con.pause(false);
    });
    return true;
  };

  _start = function() {
    var $lineno, $statement, _i, _len, _ref;
    _prg = [];
    for ($lineno in _raw) {
      $statement = _raw[$lineno];
      while ($lineno.length < 4) {
        $lineno = '0' + $lineno;
      }
      _prg.push([$lineno, $statement]);
    }
    _prg.sort();
    _init(false);
    for (_i = 0, _len = _prg.length; _i < _len; _i++) {
      _ref = _prg[_i], $lineno = _ref[0], $statement = _ref[1];
      if ($statement.code.type === PHASE_SCAN) {
        $statement.code["eval"]();
      }
      _xrf[parseInt($lineno, 10)] = _pc++;
    }
    return _pc = 0;
  };

  _run = function() {
    var $code, $e, $lineno, $statement, $wait, _ref;
    $wait = false;
    _con.mode = MODE_RUN;
    try {
      while (!(_eop || $wait)) {
        _ref = _prg[_pc++], $lineno = _ref[0], $statement = _ref[1];
        $code = $statement.code;
        if ($statement.code.type === PHASE_EXEC) {
          if (_dbg) {
            _con.debug($lineno + ' ' + $code.toString());
          }
          $wait = $code["eval"]();
        }
        _con.setPrompt($wait);
        if (_pc >= _prg.length) {
          _eop = true;
        }
      }
    } catch (_error) {
      $e = _error;
      _con.println($e);
      $wait = false;
    }
    if (!$wait) {
      _con.mode = MODE_REPL;
      return _con.println('DONE');
    }
  };

  _chain = function($code) {
    var $ix, $save, $var, _i, _j, _len, _len1;
    $save = Array(_com.length);
    for ($ix = _i = 0, _len = _com.length; _i < _len; $ix = ++_i) {
      $var = _com[$ix];
      switch ($var.type) {
        case 0:
          $save[$ix] = _str[$var.name];
          break;
        case 1:
          $save[$ix] = _var[$var.name];
          break;
        case 2:
          $save[$ix] = _ary[$var.name];
      }
    }
    _init(true);
    _parse($code);
    _start();
    for ($ix = _j = 0, _len1 = _com.length; _j < _len1; $ix = ++_j) {
      $var = _com[$ix];
      switch ($var.type) {
        case 0:
          _str[$var.name] = $save[$ix];
          break;
        case 1:
          _var[$var.name] = $save[$ix];
          break;
        case 2:
          _ary[$var.name] = $save[$ix];
      }
    }
    return _run();
  };

  _parse = function($code) {
    var $e, $index, $line, kc, _i, _len;
    kc = typeof window !== "undefined" && window !== null ? window.kc : require("./kc");
    $code = $code.split('\n');
    for ($index = _i = 0, _len = $code.length; _i < _len; $index = ++_i) {
      $line = $code[$index];
      if (/^\d*\s*IF/i.test($line)) {
        $code[$index] = $line = _fixup_if($line);
      }
      if (/^\d*\s*PRINT/i.test($line)) {
        $code[$index] = $line = _fixup_print($line);
      }
      if (/\'(?=[^"]*(?:"[^"]*"[^"]*)*$)/.test($line)) {
        $code[$index] = $line = $line.replace(/(\'.*(?=[^"]*(?:"[^"]*"[^"]*)*$))/g, "");
      }
      if (/\*\*(?=[^"]*(?:"[^"]*"[^"]*)*$)/.test($line)) {
        $code[$index] = $line = $line.replace(/(\*\*(?=[^"]*(?:"[^"]*"[^"]*)*$))/g, "^");
      }
    }
    try {
      kc.parse($code.join('\n'));
    } catch (_error) {
      $e = _error;
      _con.debug(String($e));
    }
    return true;
  };

  _fixup_if = function($line) {
    $line = $line.split(/THEN/i);
    $line[0] = $line[0].replace(/\=/g, '==').replace(/\<\=\=/g, '<=').replace(/\>\=\=/g, '>=').replace(/\#/g, '<>');
    return $line.join(" THEN ");
  };

  _fixup_print = function($line) {
    var $chunk, $index, $is_string, $match, $sep, SEP, _i, _len, _ref, _ref1;
    SEP = ';:,';
    $is_string = false;
    $match = (function() {
      var _i, _len, _ref, _results;
      _ref = $line.match(/[^"]*(?!\\"[^"]*\")/g);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        $chunk = _ref[_i];
        if ($chunk !== '') {
          _results.push($chunk);
        }
      }
      return _results;
    })();
    for ($index = _i = 0, _len = $match.length; _i < _len; $index = ++_i) {
      $chunk = $match[$index];
      $sep = /^\d*\s*PRINT\s*$/i.test($chunk) || $index === $match.length - 1 ? '' : ';';
      if ($is_string) {
        $match[$index] = $chunk = '"' + $chunk + '"';
        if (SEP.indexOf((_ref = (_ref1 = $match[$index + 1]) != null ? _ref1[0] : void 0) != null ? _ref : '') === -1) {
          $match[$index] = $chunk + $sep;
        }
      } else {
        if (SEP.indexOf($chunk.substr(-1)) === -1) {
          $match[$index] = $chunk + $sep;
        }
      }
      $is_string = !$is_string;
    }
    return $match.join('');
  };

  _dim = function($init, $dim1, $dim2) {
    var $a, $i, $j, _i, _j, _k, _ref, _ref1, _ref2;
    $a = [];
    switch (arguments.length) {
      case 2:
        for ($i = _i = _ofs, _ref = $dim1 + 1; _ofs <= _ref ? _i < _ref : _i > _ref; $i = _ofs <= _ref ? ++_i : --_i) {
          $a[$i] = $init;
        }
        break;
      case 3:
        for ($i = _j = _ofs, _ref1 = $dim1 + 1; _ofs <= _ref1 ? _j < _ref1 : _j > _ref1; $i = _ofs <= _ref1 ? ++_j : --_j) {
          $a[$i] = [];
          for ($j = _k = _ofs, _ref2 = $dim2 + 1; _ofs <= _ref2 ? _k < _ref2 : _k > _ref2; $j = _ofs <= _ref2 ? ++_k : --_k) {
            $a[$i][$j] = $init;
          }
        }
    }
    return $a;
  };

  _flatten = function($list) {
    var $a, $item, _i, _len;
    if ($list == null) {
      return [];
    }
    $a = [];
    for (_i = 0, _len = $list.length; _i < _len; _i++) {
      $item = $list[_i];
      if (Array.isArray($item)) {
        $a = $a.concat(_flatten($item));
      } else {
        $a.push($item);
      }
    }
    return $a;
  };

  _sprintf = function($fmt, $list) {
    var $count, _foreach;
    $count = 0;
    _foreach = function($match, $pct, $just, $sign, $pad, $width, $prec, $spec, $ofset, $string) {
      var $value;
      if ($pad == null) {
        $pad = ' ';
      }
      $value = String($list[$count++]);
      switch ($spec) {
        case '%':
          return '%';
        case 's':
          if ($width != null) {
            $width = parseInt($width, 10);
            if ($value.length < $width) {
              if ($just != null) {
                return Array($width - $value.length + 1).join($pad) + $value;
              } else {
                return $value + Array($width - $value.length + 1).join($pad);
              }
            }
          }
          return $value;
        case 'd':
          if ($width != null) {
            $width = parseInt($width, 10);
            if ($value.length < $width) {
              if ($just != null) {
                return $value + Array($width - $value.length + 1).join($pad);
              } else {
                return Array($width - $value.length + 1).join($pad) + $value;
              }
            }
          }
          return $value;
      }
    };
    return $fmt.replace(PRINTF, _foreach);
  };

  _format = function($image) {
    var $count, $head, $out;
    if ($image == null) {
      $image = [];
    }
    $out = '';
    $count = 1;
    while ($image.length > 0) {
      $head = $image.shift();
      if (isNaN($head)) {
        switch ($head) {
          case ',':
            $count = 1;
            break;
          case 'D':
            $out += $count > 1 ? '%' + $count + 'd' : '%d';
            $count = 1;
            break;
          case 'A':
            $out += $count > 1 ? '%' + $count + 's' : '%s';
            $count = 1;
            break;
          case 'X':
            $out += Array($count + 1).join(' ');
            $count = 1;
            break;
          case '(':
            $out += Array($count + 1).join(_format($image));
            $count = 1;
            break;
          case ')':
            return $out;
          default:
            $out += $head.slice(1, -1);
            $count = 1;
        }
      } else {
        $count = $head;
      }
    }
    return $out;
  };

  _pad = function($value, $len, $pad) {
    var $right;
    if ($pad == null) {
      $pad = ' ';
    }
    $right = !isNaN($value);
    $value = String($value);
    if ($right) {
      if ($value.length < $len) {
        return Array($len - $value.length + 1, $pad) + $value;
      } else {
        return $value.substr(0, $len);
      }
    } else {
      if ($value.length < $len) {
        return $value + Array($len - $value.length + 1, $pad);
      } else {
        return $value.substr(0, $len);
      }
    }
  };

  _mark = function($name) {
    return _mrk[$name] = new Date();
  };

  _elapsed_time = function($point1, $point2) {
    if (_mrk[$point1] == null) {
      return 0;
    }
    if (_mrk[$point2] == null) {
      _mrk[$point2] = new Date();
    }
    return _mrk[$point2] - _mrk[$point1];
  };

  Zer = {
    "eval": function() {
      return 0;
    },
    toString: function() {
      return 'ZER';
    }
  };

  Con = {
    "eval": function() {
      return 1;
    },
    toString: function() {
      return 'CON';
    }
  };

  Semic = {
    "eval": function() {
      return '';
    },
    toString: function() {
      return ';';
    }
  };

  Comma = {
    "eval": function() {
      return '    ';
    },
    toString: function() {
      return ',';
    }
  };

  Operator = (function() {
    function Operator(left, right) {
      this.left = left;
      this.right = right;
    }

    return Operator;

  })();

  BuiltIn = (function() {
    function BuiltIn($0, $1, $2) {
      this.$0 = $0;
      this.$1 = $1;
      this.$2 = $2;
    }

    BuiltIn.prototype.toString = function() {
      return "" + (this.constructor.name.toUpperCase()) + "(" + this.$0 + ")";
    };

    return BuiltIn;

  })();

  Keyword = (function() {
    function Keyword() {}

    Keyword.prototype.type = PHASE_EXEC;

    Keyword.prototype["eval"] = function() {
      return false;
    };

    return Keyword;

  })();

  Console = (function(_super) {
    __extends(Console, _super);

    Console.prototype.mode = MODE_REPL;

    Console.prototype.exec = true;

    function Console($welcome) {
      this.commandHandle = __bind(this.commandHandle, this);
      this.welcomeMessage = $welcome;
      Console.__super__.constructor.call(this);
    }

    Console.prototype.cancelHandle = function() {
      _eop = true;
      _con.print('^C');
      _con.reset();
      _con.setPrompt(false);
      _run();
      return _con.console.scrollToBottom();
    };

    Console.prototype.commandHandle = function($line) {
      var $item, $ix, $name, _i, _j, _len, _len1, _ref, _ref1;
      switch (this.mode) {
        case MODE_RUN:
          _ref = $line.trim().split(",");
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            $item = _ref[_i];
            this.buffer.push(isNaN($item) ? String($item) : Number($item));
          }
          if (this.buffer.length < this.vars.length) {
            this.continuedPrompt = true;
          } else {
            _ref1 = this.vars;
            for ($ix = _j = 0, _len1 = _ref1.length; _j < _len1; $ix = ++_j) {
              $name = _ref1[$ix];
              if (/\$$/.test($name)) {
                _str[$name] = this.buffer[$ix];
              } else {
                _var[$name] = this.buffer[$ix];
              }
            }
            this.continuedPrompt = false;
            _run();
            return true;
          }
          break;
        case MODE_REPL:
          $line = /\n$/.test($line) ? $line : "" + $line + "\n";
          return _parse($line);
      }
    };

    return Console;

  })(rte.Console);

  _bind();

  katra = {
    main: function($args) {
      var _ref;
      _wel = (_ref = $args.title) != null ? _ref : _wel;
      switch ($args.basic) {
        case 'atari':
          return _exec(V_ATARI, $args.program);
        case 'gwbasic':
          return _exec(V_GWBASIC, $args.program);
        case 'hp2k':
          return _exec(V_HP2000, $args.program);
        default:
          return _con.reset();
      }
    },
    setRoot: function($root) {
      return _fs.setRoot($root);
    },
    getText: function() {
      return _txt;
    },
    command: {
      append: function($0) {
        return _load(V_HP2000, $0.split('-')[1], false);
      },
      atari: function($0, $next) {
        return _load(V_ATARI, $0, true, $next);
      },
      cat: function($dir) {
        var $cw, $hdr, $nc;
        $nc = 4;
        $cw = 20;
        $hdr = 'name                ';
        return _fs.readDir($dir, function($files) {
          var $col, $file, _i, _len;
          $col = 0;
          _con.hilite("\n" + $dir + "\n" + (Array($nc + 1).join($hdr)));
          for (_i = 0, _len = $files.length; _i < _len; _i++) {
            $file = $files[_i];
            $file = $file.split('.')[0];
            while ($file.length < $cw) {
              $file += " ";
            }
            _con.print($file);
            if (($col++) % $nc === $nc - 1) {
              _con.println();
            }
          }
          if (typeof window === "undefined" || window === null) {
            return _con.print("\n" + _con.prompt);
          }
        });
      },
      cls: function() {
        return _con.clear();
      },
      del: function($0) {
        var $end, $lineno, $start, _i, _ref, _results;
        _ref = $0.split('-')[1].split(','), $start = _ref[0], $end = _ref[1];
        if (!$end) {
          $end = $start;
        }
        _results = [];
        for ($lineno = _i = $start; $start <= $end ? _i < $end : _i > $end; $lineno = $start <= $end ? ++_i : --_i) {
          if (_raw[$lineno] != null) {
            _results.push(delete _raw[$lineno]);
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      },
      dir: function($0) {},
      exec: function($0) {
        return _exec(V_HP2000, $0.split('-')[1]);
      },
      files: function($0) {},
      get: function($0, $next) {
        return _load(V_HP2000, $0.split('-')[1], true, $next);
      },
      gwbasic: function($0, $next) {
        return _load(V_GWBASIC, $0, true, $next);
      },
      list: function($0) {
        var $1, $code, $end, $lineno, $lines, $start, $statement, _i, _len, _ref, _ref1, _results;
        $1 = $0.split('-')[1];
        if ($1 != null) {
          _ref = $1.split(','), $start = _ref[0], $end = _ref[1];
        }
        if ($start != null) {
          $end = $end != null ? $end : $start;
          $start = parseInt($start, 10);
          $end = parseInt($end, 10);
        } else {
          $start = 1;
          $end = 9999;
        }
        $lines = [];
        for ($lineno in _raw) {
          $statement = _raw[$lineno];
          while ($lineno.length < 5) {
            $lineno = '0' + $lineno;
          }
          $lines.push([$lineno, $statement]);
        }
        $lines.sort();
        _results = [];
        for (_i = 0, _len = $lines.length; _i < _len; _i++) {
          _ref1 = $lines[_i], $lineno = _ref1[0], $statement = _ref1[1];
          $lineno = parseInt($statement.lineno, 10);
          $code = $statement.code;
          if ($start != null) {
            if ($lineno >= parseInt($start, 10) && $lineno <= parseInt($end, 10)) {
              _results.push(_con.println($lineno + ' ' + $code));
            } else {
              _results.push(void 0);
            }
          } else {
            _results.push(_con.println($lineno + ' ' + $code));
          }
        }
        return _results;
      },
      name: function($0) {
        return _nam = $0.split('-')[1];
      },
      purge: function($0) {
        return _fs.deleteFile(_qualify($0.split('-')[1], _ver), function($err) {
          if ($err != null) {
            return _con.println($err);
          }
        });
      },
      quit: function() {
        return typeof process !== "undefined" && process !== null ? process.exit() : void 0;
      },
      renum: function($0) {
        return _con.println("Renumber Not Implemented");
      },
      run: function($0) {
        if (Object.keys(_raw).length > 0) {
          _start();
          return _run();
        }
      },
      save: function() {
        var $code, $lineno, $lines, $statement, $text, _i, _len, _ref;
        if (_nam === '') {
          return _con.println("Name not set");
        }
        $lines = [];
        $text = '';
        for ($lineno in _raw) {
          $statement = _raw[$lineno];
          $lines.push([$lineno, $statement.code]);
        }
        $lines.sort();
        for (_i = 0, _len = $lines.length; _i < _len; _i++) {
          _ref = $lines[_i], $lineno = _ref[0], $code = _ref[1];
          $text += $lineno + ' ' + $code + '\n';
        }
        return _save(_ver, _nam, $text.slice(0, -1), function($err) {
          if ($err != null) {
            return _con.println($err);
          }
        });
      },
      scr: function() {
        return _init(true);
      },
      troff: function() {
        return _dbg = false;
      },
      tron: function() {
        return _dbg = true;
      }
    },
    keyword: {
      Zer: Zer,
      Con: Con,
      Semic: Semic,
      Comma: Comma,
      Statement: Statement = (function() {
        function Statement($code, $lineno) {
          if ($lineno != null) {
            _raw[$lineno] = {
              lineno: $lineno,
              code: $code
            };
          } else {
            if ($code != null) {
              if (typeof $code["eval"] === "function") {
                $code["eval"]();
              }
            }
          }
        }

        return Statement;

      })(),
      Const: Const = (function() {
        function Const(value) {
          this.value = value;
          this.is_string = 'string' === typeof this.value ? true : false;
          if (this.is_string) {
            if (this.value.charAt(0) === '"') {
              this.value = this.value.slice(1, -1);
            }
          }
        }

        Const.prototype.value = function() {
          return this.value;
        };

        Const.prototype["eval"] = function() {
          return this.value;
        };

        Const.prototype.toString = function() {
          if (this.is_string) {
            return "\"" + this.value + "\"";
          } else {
            return "" + this.value;
          }
        };

        return Const;

      })(),
      Var: Var = (function() {
        function Var(name, $delim, $dims) {
          this.name = name;
          this.is_string = /\$$/.test(this.name);
          if ($delim != null) {
            this.is_array = true;
            this.dims = _flatten($dims);
            this.dim1 = this.dims[0];
            this.dim2 = this.dims[1];
          } else {
            this.is_array = false;
          }
        }

        Var.prototype["let"] = function($value) {
          var $dim1, $dim2, $end, $len, $start, $str;
          if (this.is_string) {
            if (_gw) {
              if (this.dim2 != null) {
                $dim1 = this.dim1["eval"]();
                $dim2 = this.dim2["eval"]();
                return _str[this.name][$dim1][$dim2] = $value;
              } else if (this.dim1 != null) {
                $dim1 = this.dim1["eval"]();
                return _str[this.name][$dim1] = $value;
              } else {
                return _str[this.name] = $value;
              }
            } else {
              if (this.dim2 != null) {
                $start = this.dim1["eval"]() - 1;
                $end = this.dim2["eval"]();
                if ($end < $start) {
                  throw 'Invalid String index: ' + this.toString();
                }
                $len = $end - $start;
                $value = $value.substr(0, $len);
                $value = _pad($value, $len);
                $str = _str[this.name];
                return _str[this.name] = $str.substr(0, $start) + $value + $str.substr($end);
              } else if (this.dim1 != null) {
                $start = this.dim1["eval"]() - 1;
                $str = _str[this.name];
                return _str[this.name] = $str.substr(0, $start) + $value + $str.substr($start + $value.length);
              } else {
                $len = _str[this.name].length;
                if ($value.length < $len) {
                  $value += Array($len - $value.length + 1).join(' ');
                }
                return _str[this.name] = $value;
              }
            }
          } else if (this.dim2 != null) {
            $dim1 = this.dim1["eval"]();
            $dim2 = this.dim2["eval"]();
            return _ary[this.name][$dim1][$dim2] = $value;
          } else if (this.dim1 != null) {
            $dim1 = this.dim1["eval"]();
            return _ary[this.name][$dim1] = $value;
          } else {
            return _var[this.name] = $value;
          }
        };

        Var.prototype["eval"] = function() {
          var $dim1, $dim2, $end, $start, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
          if (this.is_string) {
            if (_gw) {
              if (this.dim2 != null) {
                $dim1 = this.dim1["eval"]();
                $dim2 = this.dim2["eval"]();
                return (_ref = (_ref1 = _str[this.name]) != null ? (_ref2 = _ref1[$dim1]) != null ? _ref2[$dim2] : void 0 : void 0) != null ? _ref : '';
              } else if (this.dim1 != null) {
                $dim1 = this.dim1["eval"]();
                return (_ref3 = (_ref4 = _str[this.name]) != null ? _ref4[$dim1] : void 0) != null ? _ref3 : '';
              } else {
                return (_ref5 = _str[this.name]) != null ? _ref5 : '';
              }
            } else {
              if (this.dim2 != null) {
                $start = this.dim1["eval"]() - 1;
                $end = this.dim2["eval"]();
                if ($end < $start) {
                  throw 'Invalid String index: ' + this.toString();
                }
                return (_ref6 = (_ref7 = _str[this.name]) != null ? _ref7.slice($start, $end) : void 0) != null ? _ref6 : '';
              } else if (this.dim1 != null) {
                $start = this.dim1["eval"]() - 1;
                return (_ref8 = (_ref9 = _str[this.name]) != null ? _ref9.slice($start) : void 0) != null ? _ref8 : '';
              } else {
                return (_ref10 = _str[this.name]) != null ? _ref10 : '';
              }
            }
          } else if (this.dim2 != null) {
            $dim1 = this.dim1["eval"]();
            $dim2 = this.dim2["eval"]();
            return (_ref11 = (_ref12 = _ary[this.name]) != null ? (_ref13 = _ref12[$dim1]) != null ? _ref13[$dim2] : void 0 : void 0) != null ? _ref11 : 0;
          } else if (this.dim1 != null) {
            $dim1 = this.dim1["eval"]();
            return (_ref14 = (_ref15 = _ary[this.name]) != null ? _ref15[$dim1] : void 0) != null ? _ref14 : 0;
          } else {
            return (_ref16 = _var[this.name]) != null ? _ref16 : 0;
          }
        };

        Var.prototype.toString = function() {
          if (this.is_array) {
            return "" + this.name + "[" + (this.dims.join(',')) + "]";
          } else {
            return this.name;
          }
        };

        return Var;

      })(),
      Base: Base = (function(_super) {
        __extends(Base, _super);

        function Base(base) {
          this.base = base;
        }

        Base.prototype["eval"] = function() {
          _ofs = this.base;
          return false;
        };

        Base.prototype.toString = function() {
          return "BASE " + this.base;
        };

        return Base;

      })(Keyword),
      Chain: Chain = (function(_super) {
        __extends(Chain, _super);

        function Chain(program) {
          this.program = program;
        }

        Chain.prototype["eval"] = function() {
          _con.pause(true);
          return _fs.readFile(this.program, function($err, $data) {
            if ($err != null) {
              _con.println($err);
            } else {
              _ver = $data.type;
              _nam = $data.name;
              _gw = _ver === V_GWBASIC ? true : false;
              _chain($data.data);
            }
            return _con.pause(false);
          });
        };

        Chain.prototype.toString = function() {
          return "CHAIN \"" + this.program + "\"";
        };

        return Chain;

      })(Keyword),
      Com: Com = (function(_super) {
        __extends(Com, _super);

        Com.prototype.type = PHASE_SCAN;

        function Com($vars) {
          this.vars = _flatten($vars);
        }

        Com.prototype["eval"] = function() {
          var $var, _i, _len, _ref;
          _ref = this.vars;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            $var = _ref[_i];
            if (/\$$/.test($var.name)) {
              if (_gw) {
                if ($var.dims.length === 0) {
                  _str[$var.name] = '';
                } else {
                  _str[$var.name] = _dim.apply(null, [''].concat(__slice.call($var.dims)));
                }
              } else {
                _str[$var.name] = Array($var.dims[0] + 1).join(' ');
                _com.push({
                  type: 0,
                  name: $var.name
                });
              }
            } else {
              if ($var.dims.length === 0) {
                _var[$var.name] = 0;
                _com.push({
                  type: 1,
                  name: $var.name
                });
              } else {
                _ary[$var.name] = _dim.apply(null, [0].concat(__slice.call($var.dims)));
                _com.push({
                  type: 2,
                  name: $var.name
                });
              }
            }
          }
          return false;
        };

        Com.prototype.toString = function() {
          return "COM " + (this.vars.join(', '));
        };

        return Com;

      })(Keyword),
      Data: Data = (function(_super) {
        __extends(Data, _super);

        Data.prototype.type = PHASE_SCAN;

        function Data($data) {
          this.data = _flatten($data);
        }

        Data.prototype["eval"] = function() {
          if (_dat === null) {
            _dat = [];
          }
          _dat = _dat.concat(this.data);
          return false;
        };

        Data.prototype.toString = function() {
          return "DATA " + (this.data.join(', '));
        };

        return Data;

      })(Keyword),
      Def: Def = (function(_super) {
        __extends(Def, _super);

        Def.prototype.type = PHASE_SCAN;

        function Def(name, par, body) {
          this.name = name;
          this.par = par;
          this.body = body;
        }

        Def.prototype["eval"] = function() {
          var _this = this;
          _fn[this.name] = function($par) {
            var $ret, $tmp;
            $tmp = _var[_this.par];
            _var[_this.par] = $par;
            $ret = _this.body["eval"]();
            _var[_this.par] = $tmp;
            return $ret;
          };
          return false;
        };

        Def.prototype.toString = function() {
          return "DEF " + this.name + "(" + this.par + ") = " + this.body;
        };

        return Def;

      })(Keyword),
      Dim: Dim = (function(_super) {
        __extends(Dim, _super);

        Dim.prototype.type = PHASE_SCAN;

        function Dim($vars) {
          this.vars = _flatten($vars);
        }

        Dim.prototype["eval"] = function() {
          var $var, _i, _len, _ref;
          _ref = this.vars;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            $var = _ref[_i];
            if (/\$$/.test($var.name)) {
              if (_gw) {
                if ($var.dims.length === 0) {
                  _str[$var.name] = '';
                } else {
                  _str[$var.name] = _dim.apply(null, [''].concat(__slice.call($var.dims)));
                }
              } else {
                _str[$var.name] = Array($var.dims[0] + 1).join(' ');
              }
            } else {
              if ($var.dims.length === 0) {
                _var[$var.name] = 0;
              } else {
                _ary[$var.name] = _dim.apply(null, [0].concat(__slice.call($var.dims)));
              }
            }
          }
          return false;
        };

        Dim.prototype.toString = function() {
          return "DIM " + (this.vars.join(', '));
        };

        return Dim;

      })(Keyword),
      End: End = (function(_super) {
        __extends(End, _super);

        function End() {
          _ref = End.__super__.constructor.apply(this, arguments);
          return _ref;
        }

        End.prototype["eval"] = function() {
          _eop = true;
          return false;
        };

        End.prototype.toString = function() {
          return "END";
        };

        return End;

      })(Keyword),
      Enter: Enter = (function(_super) {
        __extends(Enter, _super);

        function Enter(port, time, status, _var1) {
          var _ref1;
          this.port = port;
          this.time = time;
          this.status = status;
          this["var"] = _var1;
          if (this["var"] == null) {
            _ref1 = [null, this.port, this.time, this.status], this.port = _ref1[0], this.time = _ref1[1], this.status = _ref1[2], this["var"] = _ref1[3];
          }
        }

        Enter.prototype["eval"] = function() {
          _con.input('', [this["var"]]);
          return true;
        };

        Enter.prototype.toString = function() {
          return "ENTER " + this.port + ", " + this.time + ", " + this.status + ", " + this["var"];
        };

        return Enter;

      })(Keyword),
      For: For = (function(_super) {
        __extends(For, _super);

        function For(_var1, start, end, step) {
          this["var"] = _var1;
          this.start = start;
          this.end = end;
          this.step = step != null ? step : new Const(1);
        }

        For.prototype["eval"] = function() {
          _var[this["var"]] = _eval(this.start);
          _stk.push({
            id: FOR,
            pc: _pc,
            name: this["var"],
            end: this.end,
            step: this.step
          });
          return false;
        };

        For.prototype.toString = function() {
          if (this.step === 1) {
            return "FOR " + this["var"] + " = " + this.start + " TO " + this.end;
          } else {
            return "FOR " + this["var"] + " = " + this.start + " TO " + this.end + " STEP " + this.step;
          }
        };

        return For;

      })(Keyword),
      Goto: Goto = (function(_super) {
        __extends(Goto, _super);

        function Goto(lineno, $of) {
          this.lineno = lineno;
          this.of = _flatten($of);
        }

        Goto.prototype["eval"] = function() {
          var $index;
          if (this.of.length > 0) {
            $index = _eval(this.lineno) - 1;
            if (this.of[$index] != null) {
              _pc = _xrf[this.of[$index]];
            }
          } else {
            _pc = _xrf[parseInt(this.lineno, 10)];
          }
          return false;
        };

        Goto.prototype.toString = function() {
          if (this.of.length > (0 != null)) {
            return "GOTO " + this.lineno + " OF " + (this.of.join(','));
          } else {
            return "GOTO " + this.lineno;
          }
        };

        return Goto;

      })(Keyword),
      Gosub: Gosub = (function(_super) {
        __extends(Gosub, _super);

        function Gosub(lineno, $of) {
          this.lineno = lineno;
          this.of = _flatten($of);
        }

        Gosub.prototype["eval"] = function() {
          _stk.push({
            id: GOSUB,
            pc: _pc
          });
          return Gosub.__super__["eval"].call(this);
        };

        Gosub.prototype.toString = function() {
          if (this.of.length > (0 != null)) {
            return "GOSUB " + this.lineno + " OF " + (this.of.join(','));
          } else {
            return "GOSUB " + this.lineno;
          }
        };

        return Gosub;

      })(Goto),
      If: If = (function(_super) {
        __extends(If, _super);

        function If(cond, then) {
          this.cond = cond;
          this.then = then;
        }

        If.prototype["eval"] = function() {
          if (this.cond["eval"]()) {
            if (this.then["eval"] != null) {
              this.then["eval"]();
            } else {
              _pc = _xrf[parseInt(this.then, 10)];
            }
          }
          return false;
        };

        If.prototype.toString = function() {
          return "IF " + this.cond + " THEN " + this.then;
        };

        return If;

      })(Keyword),
      Image: Image = (function(_super) {
        __extends(Image, _super);

        function Image($format) {
          if ($format == null) {
            $format = [];
          }
          this.source = _flatten($format);
          this.format = _format(this.source);
        }

        Image.prototype["eval"] = function() {
          return false;
        };

        Image.prototype.toString = function() {
          return "IMAGE " + (this.source.join(''));
        };

        return Image;

      })(Keyword),
      Input: Input = (function(_super) {
        __extends(Input, _super);

        function Input($vars, prompt) {
          this.prompt = prompt;
          this.vars = _flatten($vars);
        }

        Input.prototype["eval"] = function() {
          _con.input(this.prompt, this.vars);
          return true;
        };

        Input.prototype.toString = function() {
          if (this.prompt != null) {
            return "INPUT " + this.prompt + ", " + (this.vars.join(','));
          } else {
            return "INPUT " + (this.vars.join(','));
          }
        };

        return Input;

      })(Keyword),
      Let: Let = (function(_super) {
        __extends(Let, _super);

        function Let($vars, value) {
          var $var, _i, _len, _ref1;
          this.value = value;
          this.vars = [];
          _ref1 = _flatten($vars);
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            $var = _ref1[_i];
            if ('string' === typeof $var) {
              this.vars.push(new Var($var));
            } else {
              this.vars.push($var);
            }
          }
        }

        Let.prototype["eval"] = function() {
          var $value, $var, _i, _len, _ref1;
          $value = _eval(this.value);
          _ref1 = this.vars;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            $var = _ref1[_i];
            $var["let"]($value);
          }
          return false;
        };

        Let.prototype.toString = function() {
          var $s, $var, _i, _len, _ref1;
          $s = '';
          _ref1 = this.vars;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            $var = _ref1[_i];
            $s += $var + ' = ';
          }
          return "LET " + $s + this.value;
        };

        return Let;

      })(Keyword),
      Mat: Mat = (function(_super) {
        __extends(Mat, _super);

        function Mat(_var1, value) {
          this["var"] = _var1;
          this.value = value;
        }

        Mat.prototype["eval"] = function() {
          var $i, $j, $value;
          $value = this.value["eval"]();
          if (_ary[this["var"]] != null) {
            $i = _ary[this["var"]].length;
            $j = _ary[this["var"]][_ofs].length;
            _ary[this["var"]] = _dim($value, $i, $j);
          } else {
            _ary[this["var"]] = _dim($value, 10);
          }
          return false;
        };

        return Mat;

      })(Keyword),
      MatRead: MatRead = (function(_super) {
        __extends(MatRead, _super);

        function MatRead($vars) {
          this.vars = _flatten($vars);
        }

        MatRead.prototype["eval"] = function() {
          var $var, _i, _len, _ref1;
          _ref1 = this.vars;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            $var = _ref1[_i];
            if (_dp < _dat.length) {
              $var["let"](_dat[_dp++].value);
            } else {
              $var["let"](void 0);
            }
          }
          return false;
        };

        MatRead.prototype.toString = function() {
          return "MAT READ " + (this.vars.join(','));
        };

        return MatRead;

      })(Keyword),
      Next: Next = (function(_super) {
        __extends(Next, _super);

        function Next(_var1) {
          this["var"] = _var1;
        }

        Next.prototype["eval"] = function() {
          var $counter, $frame, $name, $step;
          $frame = _stk[_stk.length - 1];
          if ($frame.id !== FOR) {
            throw "Next without for";
          }
          $name = this["var"].name;
          if ($frame.name !== $name) {
            throw "Mismatched For/Next " + $name;
          }
          $step = _eval($frame.step);
          $counter = this["var"]["eval"]() + $step;
          this["var"]["let"]($counter);
          if ($step < 0) {
            if ($counter < _eval($frame.end)) {
              _stk.pop();
            } else {
              _pc = $frame.pc;
            }
          } else {
            if ($counter > _eval($frame.end)) {
              _stk.pop();
            } else {
              _pc = $frame.pc;
            }
          }
          return false;
        };

        Next.prototype.toString = function() {
          return "NEXT " + this["var"];
        };

        return Next;

      })(Keyword),
      Print: Print = (function(_super) {
        __extends(Print, _super);

        function Print() {
          var $items;
          $items = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          this.items = _flatten([$items]);
        }

        Print.prototype["eval"] = function() {
          var $item, $str, $val, _i, _len, _ref1;
          $str = '';
          _ref1 = this.items;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            $item = _ref1[_i];
            $str += isNaN($val = _eval($item)) ? $val : ' ' + $val;
          }
          if ($item === Semic || $item === Comma) {
            _con.print($str);
          } else {
            _con.println($str);
          }
          return false;
        };

        Print.prototype.toString = function() {
          var $item, $str, _i, _len, _ref1;
          $str = '';
          _ref1 = this.items;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            $item = _ref1[_i];
            $str += $item.toString();
          }
          return "PRINT " + $str;
        };

        return Print;

      })(Keyword),
      Using: Using = (function(_super) {
        __extends(Using, _super);

        function Using() {
          var $items, lineno;
          lineno = arguments[0], $items = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
          this.lineno = lineno;
          this.items = _flatten($items);
        }

        Using.prototype["eval"] = function() {
          var $args, $i, $item, $lineno, $statement, _i, _len, _ref1, _ref2;
          $i = _xrf[this.lineno];
          _ref1 = _prg[$i], $lineno = _ref1[0], $statement = _ref1[1];
          $args = [];
          _ref2 = this.items;
          for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
            $item = _ref2[_i];
            $args.push(_eval($item));
          }
          if ($item === Semic || $item === Comma) {
            _con.print(_sprintf($statement.code.format, $args));
          } else {
            _con.println(_sprintf($statement.code.format, $args));
          }
          return false;
        };

        Using.prototype.toString = function() {
          var $item, $str, _i, _len, _ref1;
          if (this.items.length === 0) {
            return "PRINT USING " + this.lineno;
          } else {
            $str = '';
            _ref1 = this.items;
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
              $item = _ref1[_i];
              $str += $item.toString() + ',';
            }
            $str = $str.slice(0, -1);
            return "PRINT USING " + this.lineno + ";" + $str;
          }
        };

        return Using;

      })(Keyword),
      Randomize: Randomize = (function(_super) {
        __extends(Randomize, _super);

        function Randomize() {}

        Randomize.prototype["eval"] = function() {
          return false;
        };

        Randomize.prototype.toString = function() {
          return "RANDOMIZE";
        };

        return Randomize;

      })(Keyword),
      Read: Read = (function(_super) {
        __extends(Read, _super);

        function Read($vars) {
          this.vars = _flatten($vars);
        }

        Read.prototype["eval"] = function() {
          var $var, _i, _len, _ref1;
          _ref1 = this.vars;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            $var = _ref1[_i];
            if (_dp < _dat.length) {
              $var["let"](_dat[_dp++].value);
            } else {
              $var["let"](void 0);
            }
          }
          return false;
        };

        Read.prototype.toString = function() {
          return "READ " + (this.vars.join(','));
        };

        return Read;

      })(Keyword),
      Restore: Restore = (function(_super) {
        __extends(Restore, _super);

        function Restore(lineno) {
          this.lineno = lineno;
        }

        Restore.prototype["eval"] = function() {
          _dp = 0;
          return false;
        };

        Restore.prototype.toString = function() {
          if (this.lineno != null) {
            return "RESTORE " + this.lineno;
          } else {
            return "RESTORE";
          }
        };

        return Restore;

      })(Keyword),
      Return: Return = (function(_super) {
        __extends(Return, _super);

        function Return() {}

        Return.prototype["eval"] = function() {
          var $frame;
          $frame = _stk.pop();
          while ($frame.id !== GOSUB) {
            $frame = _stk.pop();
          }
          _pc = $frame.pc;
          return false;
        };

        Return.prototype.toString = function() {
          return "RETURN";
        };

        return Return;

      })(Keyword),
      Rem: Rem = (function(_super) {
        __extends(Rem, _super);

        function Rem($text) {
          this.text = $text.replace(/^REM/i, '');
        }

        Rem.prototype["eval"] = function() {
          return false;
        };

        Rem.prototype.toString = function() {
          return "REM" + this.text;
        };

        return Rem;

      })(Keyword),
      Stop: Stop = (function(_super) {
        __extends(Stop, _super);

        function Stop() {}

        Stop.prototype["eval"] = function() {
          _eop = true;
          return false;
        };

        Stop.prototype.toString = function() {
          return "STOP";
        };

        return Stop;

      })(Keyword),
      Max: Max = (function(_super) {
        __extends(Max, _super);

        function Max() {
          _ref1 = Max.__super__.constructor.apply(this, arguments);
          return _ref1;
        }

        Max.prototype["eval"] = function() {
          return Math.max(_eval(this.left), _eval(this.right));
        };

        Max.prototype.toString = function() {
          return "" + this.left + " MAX " + this.right;
        };

        return Max;

      })(Operator),
      Min: Min = (function(_super) {
        __extends(Min, _super);

        function Min() {
          _ref2 = Min.__super__.constructor.apply(this, arguments);
          return _ref2;
        }

        Min.prototype["eval"] = function() {
          return Math.min(_eval(this.left), _eval(this.right));
        };

        Min.prototype.toString = function() {
          return "" + this.left + " MIN " + this.right;
        };

        return Min;

      })(Operator),
      Add: Add = (function(_super) {
        __extends(Add, _super);

        function Add() {
          _ref3 = Add.__super__.constructor.apply(this, arguments);
          return _ref3;
        }

        Add.prototype["eval"] = function() {
          return _eval(this.left) + _eval(this.right);
        };

        Add.prototype.toString = function() {
          return "" + this.left + " + " + this.right;
        };

        return Add;

      })(Operator),
      Sub: Sub = (function(_super) {
        __extends(Sub, _super);

        function Sub() {
          _ref4 = Sub.__super__.constructor.apply(this, arguments);
          return _ref4;
        }

        Sub.prototype["eval"] = function() {
          return _eval(this.left) - _eval(this.right);
        };

        Sub.prototype.toString = function() {
          return "" + this.left + " - " + this.right;
        };

        return Sub;

      })(Operator),
      Mul: Mul = (function(_super) {
        __extends(Mul, _super);

        function Mul() {
          _ref5 = Mul.__super__.constructor.apply(this, arguments);
          return _ref5;
        }

        Mul.prototype["eval"] = function() {
          return _eval(this.left) * _eval(this.right);
        };

        Mul.prototype.toString = function() {
          return "" + this.left + " * " + this.right;
        };

        return Mul;

      })(Operator),
      Div: Div = (function(_super) {
        __extends(Div, _super);

        function Div() {
          _ref6 = Div.__super__.constructor.apply(this, arguments);
          return _ref6;
        }

        Div.prototype["eval"] = function() {
          return _eval(this.left) / _eval(this.right);
        };

        Div.prototype.toString = function() {
          return "" + this.left + " / " + this.right;
        };

        return Div;

      })(Operator),
      Pow: Pow = (function(_super) {
        __extends(Pow, _super);

        function Pow() {
          _ref7 = Pow.__super__.constructor.apply(this, arguments);
          return _ref7;
        }

        Pow.prototype["eval"] = function() {
          return Math.pow(_eval(this.left), _eval(this.right));
        };

        Pow.prototype.toString = function() {
          return "" + this.left + " ^ " + this.right;
        };

        return Pow;

      })(Operator),
      OR: OR = (function(_super) {
        __extends(OR, _super);

        function OR() {
          _ref8 = OR.__super__.constructor.apply(this, arguments);
          return _ref8;
        }

        OR.prototype["eval"] = function() {
          return _eval(this.left) || _eval(this.right);
        };

        OR.prototype.toString = function() {
          return "" + this.left + " OR " + this.right;
        };

        return OR;

      })(Operator),
      AND: AND = (function(_super) {
        __extends(AND, _super);

        function AND() {
          _ref9 = AND.__super__.constructor.apply(this, arguments);
          return _ref9;
        }

        AND.prototype["eval"] = function() {
          return _eval(this.left) && _eval(this.right);
        };

        AND.prototype.toString = function() {
          return "" + this.left + " AND " + this.right;
        };

        return AND;

      })(Operator),
      NOT: NOT = (function(_super) {
        __extends(NOT, _super);

        function NOT() {
          _ref10 = NOT.__super__.constructor.apply(this, arguments);
          return _ref10;
        }

        NOT.prototype["eval"] = function() {
          return !_eval(this.left);
        };

        NOT.prototype.toString = function() {
          return "NOT " + this.left;
        };

        return NOT;

      })(Operator),
      LT: LT = (function(_super) {
        __extends(LT, _super);

        function LT() {
          _ref11 = LT.__super__.constructor.apply(this, arguments);
          return _ref11;
        }

        LT.prototype["eval"] = function() {
          return _eval(this.left) < _eval(this.right);
        };

        LT.prototype.toString = function() {
          return "" + this.left + " < " + this.right;
        };

        return LT;

      })(Operator),
      GT: GT = (function(_super) {
        __extends(GT, _super);

        function GT() {
          _ref12 = GT.__super__.constructor.apply(this, arguments);
          return _ref12;
        }

        GT.prototype["eval"] = function() {
          return _eval(this.left) > _eval(this.right);
        };

        GT.prototype.toString = function() {
          return "" + this.left + " > " + this.right;
        };

        return GT;

      })(Operator),
      LE: LE = (function(_super) {
        __extends(LE, _super);

        function LE() {
          _ref13 = LE.__super__.constructor.apply(this, arguments);
          return _ref13;
        }

        LE.prototype["eval"] = function() {
          return _eval(this.left) <= _eval(this.right);
        };

        LE.prototype.toString = function() {
          return "" + this.left + " <= " + this.right;
        };

        return LE;

      })(Operator),
      GE: GE = (function(_super) {
        __extends(GE, _super);

        function GE() {
          _ref14 = GE.__super__.constructor.apply(this, arguments);
          return _ref14;
        }

        GE.prototype["eval"] = function() {
          return _eval(this.left) >= _eval(this.right);
        };

        GE.prototype.toString = function() {
          return "" + this.left + " >= " + this.right;
        };

        return GE;

      })(Operator),
      EQ: EQ = (function(_super) {
        __extends(EQ, _super);

        function EQ() {
          _ref15 = EQ.__super__.constructor.apply(this, arguments);
          return _ref15;
        }

        EQ.prototype["eval"] = function() {
          if (_eval(this.left) === _eval(this.right)) {
            return true;
          } else {
            return false;
          }
        };

        EQ.prototype.toString = function() {
          return "" + this.left + " = " + this.right;
        };

        return EQ;

      })(Operator),
      NE: NE = (function(_super) {
        __extends(NE, _super);

        function NE() {
          _ref16 = NE.__super__.constructor.apply(this, arguments);
          return _ref16;
        }

        NE.prototype["eval"] = function() {
          if (_eval(this.left) !== _eval(this.right)) {
            return true;
          } else {
            return false;
          }
        };

        NE.prototype.toString = function() {
          return "" + this.left + " <> " + this.right;
        };

        return NE;

      })(Operator),
      FN: FN = (function() {
        function FN(name, parm) {
          this.name = name;
          this.parm = parm;
        }

        FN.prototype["eval"] = function() {
          return _fn[this.name](_eval(this.parm));
        };

        FN.prototype.toString = function() {
          return "" + this.name + "(" + this.parm + ")";
        };

        return FN;

      })(),
      ABS: ABS = (function(_super) {
        __extends(ABS, _super);

        function ABS() {
          _ref17 = ABS.__super__.constructor.apply(this, arguments);
          return _ref17;
        }

        ABS.prototype["eval"] = function() {
          return Math.abs(_eval(this.$0));
        };

        return ABS;

      })(BuiltIn),
      ATN: ATN = (function(_super) {
        __extends(ATN, _super);

        function ATN() {
          _ref18 = ATN.__super__.constructor.apply(this, arguments);
          return _ref18;
        }

        ATN.prototype["eval"] = function() {
          return Math.atan(_eval(this.$0));
        };

        return ATN;

      })(BuiltIn),
      COS: COS = (function(_super) {
        __extends(COS, _super);

        function COS() {
          _ref19 = COS.__super__.constructor.apply(this, arguments);
          return _ref19;
        }

        COS.prototype["eval"] = function() {
          return Math.cos(_eval(this.$0));
        };

        return COS;

      })(BuiltIn),
      EXP: EXP = (function(_super) {
        __extends(EXP, _super);

        function EXP() {
          _ref20 = EXP.__super__.constructor.apply(this, arguments);
          return _ref20;
        }

        EXP.prototype["eval"] = function() {
          return Math.exp(_eval(this.$0));
        };

        return EXP;

      })(BuiltIn),
      INT: INT = (function(_super) {
        __extends(INT, _super);

        function INT() {
          _ref21 = INT.__super__.constructor.apply(this, arguments);
          return _ref21;
        }

        INT.prototype["eval"] = function() {
          return Math.floor(_eval(this.$0));
        };

        return INT;

      })(BuiltIn),
      LEN: LEN = (function(_super) {
        __extends(LEN, _super);

        function LEN() {
          _ref22 = LEN.__super__.constructor.apply(this, arguments);
          return _ref22;
        }

        LEN.prototype["eval"] = function() {
          return _eval(this.$0).length;
        };

        return LEN;

      })(BuiltIn),
      LIN: LIN = (function(_super) {
        __extends(LIN, _super);

        function LIN() {
          _ref23 = LIN.__super__.constructor.apply(this, arguments);
          return _ref23;
        }

        LIN.prototype["eval"] = function() {
          return Array(Math.abs(_eval(this.$0)) + 1).join('\n');
        };

        return LIN;

      })(BuiltIn),
      LOG: LOG = (function(_super) {
        __extends(LOG, _super);

        function LOG() {
          _ref24 = LOG.__super__.constructor.apply(this, arguments);
          return _ref24;
        }

        LOG.prototype["eval"] = function() {
          return Math.log(_eval(this.$0));
        };

        return LOG;

      })(BuiltIn),
      RND: RND = (function(_super) {
        __extends(RND, _super);

        function RND() {
          _ref25 = RND.__super__.constructor.apply(this, arguments);
          return _ref25;
        }

        RND.prototype["eval"] = function() {
          return Math.random();
        };

        return RND;

      })(BuiltIn),
      SGN: SGN = (function(_super) {
        __extends(SGN, _super);

        function SGN() {
          _ref26 = SGN.__super__.constructor.apply(this, arguments);
          return _ref26;
        }

        SGN.prototype["eval"] = function() {
          var $0;
          $0 = _eval(this.$0);
          if ($0 < 0) {
            return -1;
          } else if ($0 > 0) {
            return 1;
          } else {
            return 0;
          }
        };

        return SGN;

      })(BuiltIn),
      SIN: SIN = (function(_super) {
        __extends(SIN, _super);

        function SIN() {
          _ref27 = SIN.__super__.constructor.apply(this, arguments);
          return _ref27;
        }

        SIN.prototype["eval"] = function() {
          return Math.sin(_eval(this.$0));
        };

        return SIN;

      })(BuiltIn),
      SPA: SPA = (function(_super) {
        __extends(SPA, _super);

        function SPA() {
          _ref28 = SPA.__super__.constructor.apply(this, arguments);
          return _ref28;
        }

        SPA.prototype["eval"] = function() {
          return Array(_eval(this.$0)).join(" ");
        };

        return SPA;

      })(BuiltIn),
      SQR: SQR = (function(_super) {
        __extends(SQR, _super);

        function SQR() {
          _ref29 = SQR.__super__.constructor.apply(this, arguments);
          return _ref29;
        }

        SQR.prototype["eval"] = function() {
          return Math.sqrt(_eval(this.$0));
        };

        return SQR;

      })(BuiltIn),
      TAB: TAB = (function(_super) {
        __extends(TAB, _super);

        function TAB() {
          _ref30 = TAB.__super__.constructor.apply(this, arguments);
          return _ref30;
        }

        TAB.prototype["eval"] = function() {
          return Array(Math.floor(_eval(this.$0))).join(" ");
        };

        return TAB;

      })(BuiltIn),
      TAN: TAN = (function(_super) {
        __extends(TAN, _super);

        function TAN() {
          _ref31 = TAN.__super__.constructor.apply(this, arguments);
          return _ref31;
        }

        TAN.prototype["eval"] = function() {
          return Math.tan(_eval(this.$0));
        };

        return TAN;

      })(BuiltIn),
      TIM: TIM = (function(_super) {
        __extends(TIM, _super);

        function TIM() {
          _ref32 = TIM.__super__.constructor.apply(this, arguments);
          return _ref32;
        }

        TIM.prototype["eval"] = function() {
          if (_eval(this.$0) === 0) {
            return (new Date()).getMinutes();
          } else {
            return (new Date()).getSeconds();
          }
        };

        return TIM;

      })(BuiltIn),
      LCASE: LCASE = (function(_super) {
        __extends(LCASE, _super);

        function LCASE() {
          _ref33 = LCASE.__super__.constructor.apply(this, arguments);
          return _ref33;
        }

        LCASE.prototype["eval"] = function() {
          return _eval(this.$0).toLowerCase();
        };

        LCASE.prototype.toString = function() {
          return "LCASE(" + this.$0 + ", " + this.$1 + ", " + this.$2 + ")";
        };

        return LCASE;

      })(BuiltIn),
      LEFT: LEFT = (function(_super) {
        __extends(LEFT, _super);

        function LEFT() {
          _ref34 = LEFT.__super__.constructor.apply(this, arguments);
          return _ref34;
        }

        LEFT.prototype["eval"] = function() {
          return _eval(this.$0).substr(0, _eval(this.$1) - 1);
        };

        LEFT.prototype.toString = function() {
          return "LEFT(" + this.$0 + ", " + this.$1 + ", " + this.$2 + ")";
        };

        return LEFT;

      })(BuiltIn),
      MID: MID = (function(_super) {
        __extends(MID, _super);

        function MID() {
          _ref35 = MID.__super__.constructor.apply(this, arguments);
          return _ref35;
        }

        MID.prototype["eval"] = function() {
          return _eval(this.$0).substring(_eval(this.$1), _eval(this.$2));
        };

        MID.prototype.toString = function() {
          return "MID(" + this.$0 + ", " + this.$1 + ", " + this.$2 + ")";
        };

        return MID;

      })(BuiltIn),
      RIGHT: RIGHT = (function(_super) {
        __extends(RIGHT, _super);

        function RIGHT() {
          _ref36 = RIGHT.__super__.constructor.apply(this, arguments);
          return _ref36;
        }

        RIGHT.prototype["eval"] = function() {
          return _eval(this.$0).substr(_eval(this.$1) - 1);
        };

        RIGHT.prototype.toString = function() {
          return "RIGHT(" + this.$0 + ", " + this.$1 + ", " + this.$2 + ")";
        };

        return RIGHT;

      })(BuiltIn),
      SUBSTR: SUBSTR = (function(_super) {
        __extends(SUBSTR, _super);

        function SUBSTR() {
          _ref37 = SUBSTR.__super__.constructor.apply(this, arguments);
          return _ref37;
        }

        SUBSTR.prototype["eval"] = function() {
          return _eval(this.$0).substr(_eval(this.$1) - 1, _eval(this.$2));
        };

        SUBSTR.prototype.toString = function() {
          return "SUBSTR(" + this.$0 + ", " + this.$1 + ", " + this.$2 + ")";
        };

        return SUBSTR;

      })(BuiltIn),
      UCASE: UCASE = (function(_super) {
        __extends(UCASE, _super);

        function UCASE() {
          _ref38 = UCASE.__super__.constructor.apply(this, arguments);
          return _ref38;
        }

        UCASE.prototype["eval"] = function() {
          return _eval(this.$0).toUpperCase();
        };

        UCASE.prototype.toString = function() {
          return "UCASE(" + this.$0 + ", " + this.$1 + ", " + this.$2 + ")";
        };

        return UCASE;

      })(BuiltIn)
    }
  };

  if (typeof window !== "undefined" && window !== null) {
    window.katra = katra;
  } else {
    module.exports = katra;
  }

}).call(this);
/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var kc = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"Program":3,"Command":4,"NEWLINE":5,"EOF":6,"Lines":7,"Line":8,"Statement":9,"INTEGER":10,"ATARI":11,"STRING":12,"CLS":13,"GWBASIC":14,"TRON":15,"TROFF":16,"APPEND":17,"CATALOG":18,"DELETE":19,"DIR":20,"EXECUTE":21,"FILES":22,"GET":23,"GROUP":24,"LIBRARY":25,"LIST":26,"NAME":27,"PURGE":28,"RENUMBER":29,"QUIT":30,"RUN":31,"SAVE":32,"SCRATCH":33,"TEST":34,"BASE":35,"(":36,")":37,"CHAIN":38,"COM":39,"DimList":40,"DATA":41,"ConstantList":42,"DEF":43,"FND":44,"VAR":45,"=":46,"Expression":47,"DIM":48,"END":49,"ENTER":50,"PORT":51,",":52,"FOR":53,"TO":54,"STEP":55,"GO":56,"GOTO":57,"OF":58,"IntegerList":59,"GOSUB":60,"IF":61,"THEN":62,"IMAGE":63,"ImageList":64,"INPUT":65,"VarList":66,"LET":67,"LetList":68,"MAT":69,"READ":70,"ZER":71,"CON":72,"NEXT":73,"PRINT":74,"PrintList":75,"PrintSep":76,"USING":77,";":78,"RANDOMIZE":79,"RESTORE":80,"RETURN":81,"REM":82,"STOP":83,"OR":84,"AND":85,"NOT":86,"EQ":87,"NE":88,">":89,"GE":90,"<":91,"LE":92,"MAX":93,"MIN":94,"+":95,"-":96,"*":97,"/":98,"^":99,"[":100,"ExpressionList":101,"]":102,"ABS":103,"ATN":104,"COS":105,"EXP":106,"INT":107,"LEN":108,"LIN":109,"LOG":110,"RND":111,"SGN":112,"SIN":113,"SPA":114,"SQR":115,"TAB":116,"TAN":117,"TIM":118,"LCASE":119,"LEFT":120,"MID":121,"RIGHT":122,"SUBSTR":123,"UCASE":124,"Constant":125,"NUMBER":126,"Dim":127,"VarItem":128,"ImageItem":129,"ImageMask":130,"ImageMaskItem":131,"$accept":0,"$end":1},
terminals_: {2:"error",5:"NEWLINE",6:"EOF",10:"INTEGER",11:"ATARI",12:"STRING",13:"CLS",14:"GWBASIC",15:"TRON",16:"TROFF",17:"APPEND",18:"CATALOG",19:"DELETE",20:"DIR",21:"EXECUTE",22:"FILES",23:"GET",24:"GROUP",25:"LIBRARY",26:"LIST",27:"NAME",28:"PURGE",29:"RENUMBER",30:"QUIT",31:"RUN",32:"SAVE",33:"SCRATCH",34:"TEST",35:"BASE",36:"(",37:")",38:"CHAIN",39:"COM",41:"DATA",43:"DEF",44:"FND",45:"VAR",46:"=",48:"DIM",49:"END",50:"ENTER",51:"PORT",52:",",53:"FOR",54:"TO",55:"STEP",56:"GO",57:"GOTO",58:"OF",60:"GOSUB",61:"IF",62:"THEN",63:"IMAGE",65:"INPUT",67:"LET",69:"MAT",70:"READ",71:"ZER",72:"CON",73:"NEXT",74:"PRINT",77:"USING",78:";",79:"RANDOMIZE",80:"RESTORE",81:"RETURN",82:"REM",83:"STOP",84:"OR",85:"AND",86:"NOT",87:"EQ",88:"NE",89:">",90:"GE",91:"<",92:"LE",93:"MAX",94:"MIN",95:"+",96:"-",97:"*",98:"/",99:"^",100:"[",102:"]",103:"ABS",104:"ATN",105:"COS",106:"EXP",107:"INT",108:"LEN",109:"LIN",110:"LOG",111:"RND",112:"SGN",113:"SIN",114:"SPA",115:"SQR",116:"TAB",117:"TAN",118:"TIM",119:"LCASE",120:"LEFT",121:"MID",122:"RIGHT",123:"SUBSTR",124:"UCASE",126:"NUMBER"},
productions_: [0,[3,3],[3,2],[7,3],[7,2],[7,1],[8,1],[8,2],[4,2],[4,1],[4,2],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[4,1],[9,4],[9,2],[9,2],[9,2],[9,7],[9,2],[9,1],[9,8],[9,6],[9,8],[9,6],[9,3],[9,2],[9,4],[9,2],[9,4],[9,4],[9,4],[9,4],[9,2],[9,2],[9,4],[9,3],[9,2],[9,3],[9,4],[9,4],[9,2],[9,3],[9,2],[9,1],[9,5],[9,3],[9,1],[9,2],[9,1],[9,2],[9,1],[9,1],[9,1],[47,3],[47,3],[47,2],[47,3],[47,3],[47,3],[47,3],[47,3],[47,3],[47,3],[47,3],[47,3],[47,3],[47,3],[47,3],[47,3],[47,2],[47,3],[47,1],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,4],[47,6],[47,8],[47,6],[47,8],[47,4],[47,1],[125,1],[125,1],[125,1],[40,1],[40,3],[127,1],[127,4],[127,4],[68,2],[68,5],[68,5],[68,3],[68,6],[68,6],[42,1],[42,3],[59,1],[59,3],[101,1],[101,3],[66,1],[66,3],[128,1],[128,4],[128,4],[75,1],[75,3],[76,1],[76,1],[64,1],[64,3],[129,1],[129,1],[130,1],[130,4],[131,1],[131,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:this.$ = new keyword.Statement($$[$0-2]);
break;
case 6:this.$ = new keyword.Statement($$[$0]);
break;
case 7:this.$ = new keyword.Statement($$[$0], $$[$0-1]);
break;
case 8: command.atari($$[$0]); return true;
break;
case 9: command.cls(); return true;
break;
case 10: command.gwbasic($$[$0]); return true;
break;
case 11: command.tron(); return true;
break;
case 12: command.troff(); return true;
break;
case 13: command.append($$[$0]); return true;
break;
case 14: command.cat('CATALOG'); return true;
break;
case 15: command.del($$[$0]); return true;
break;
case 16: command.cat('GWBASIC'); return true;
break;
case 17: command.exec($$[$0]); return true;
break;
case 18: command.cat('ATARI'); return true;
break;
case 19: command.get($$[$0]); return true;
break;
case 20: command.cat('GROUP'); return true;
break;
case 21: command.del("del-"+$$[$0]); return true;
break;
case 22: command.cat('LIBRARY'); return true;
break;
case 23: command.list($$[$0]); return true;
break;
case 24: command.name($$[$0]); return true;
break;
case 25: command.purge($$[$0]); return true;
break;
case 26: command.renum($$[$0]); return true;
break;
case 27: command.quit(); return true;
break;
case 28: command.run($$[$0]); return true;
break;
case 29: command.save(); return true;
break;
case 30: command.scr(); return true;
break;
case 31: command.cat('TEST'); return true;
break;
case 32:this.$ = new keyword.Base($$[$0-1]);
break;
case 33:this.$ = new keyword.Chain($$[$0]);
break;
case 34:this.$ = new keyword.Com($$[$0]);
break;
case 35:this.$ = new keyword.Data($$[$0]);
break;
case 36:this.$ = new keyword.Def($$[$0-5], $$[$0-3], $$[$0]);
break;
case 37:this.$ = new keyword.Dim($$[$0]);
break;
case 38:this.$ = new keyword.End();
break;
case 39:this.$ = new keyword.Enter($$[$0-6], $$[$0-4], $$[$0-2], $$[$0]);
break;
case 40:this.$ = new keyword.Enter($$[$0-4], $$[$0-2], $$[$0]);
break;
case 41:this.$ = new keyword.For($$[$0-6], $$[$0-4], $$[$0-2], $$[$0]);
break;
case 42:this.$ = new keyword.For($$[$0-4], $$[$0-2], $$[$0]);
break;
case 43:this.$ = new keyword.Goto($$[$0]);
break;
case 44:this.$ = new keyword.Goto($$[$0]);
break;
case 45:this.$ = new keyword.Goto($$[$0-2], $$[$0]);
break;
case 46:this.$ = new keyword.Gosub($$[$0]);
break;
case 47:this.$ = new keyword.Gosub($$[$0-2], $$[$0]);
break;
case 48:this.$ = new keyword.If($$[$0-2], $$[$0]);
break;
case 49:this.$ = new keyword.If($$[$0-2], $$[$0]);
break;
case 50:this.$ = new keyword.If($$[$0-2], $$[$0]);
break;
case 51:this.$ = new keyword.Image($$[$0]);
break;
case 52:this.$ = new keyword.Input($$[$0]);
break;
case 53:this.$ = new keyword.Input($$[$0], $$[$0-2]);
break;
case 54:this.$ = new keyword.Let($$[$0-1], $$[$0]);
break;
case 55:this.$ = new keyword.Let($$[$0-1], $$[$0]);
break;
case 56:this.$ = new keyword.MatRead($$[$0]);
break;
case 57:this.$ = new keyword.Mat(new keyword.Var($$[$0-2]), keyword.Zer);
break;
case 58:this.$ = new keyword.Mat(new keyword.Var($$[$0-2]), keyword.Con);
break;
case 59:this.$ = new keyword.Next(new keyword.Var($$[$0]));
break;
case 60:this.$ = new keyword.Print($$[$0-1], $$[$0]);
break;
case 61:this.$ = new keyword.Print($$[$0]);
break;
case 62:this.$ = new keyword.Print(new keyword.Const(''));
break;
case 63:this.$ = new keyword.Using($$[$0-2], $$[$0]);
break;
case 64:this.$ = new keyword.Using($$[$0]);
break;
case 65:this.$ = new keyword.Randomize();
break;
case 66:this.$ = new keyword.Read($$[$0]);
break;
case 67:this.$ = new keyword.Restore();
break;
case 68:this.$ = new keyword.Restore($$[$0]);
break;
case 69:this.$ = new keyword.Return();
break;
case 70:this.$ = new keyword.Rem($$[$0]);
break;
case 71:this.$ = new keyword.Stop();
break;
case 72:this.$ = new keyword.OR($$[$0-2], $$[$0]);
break;
case 73:this.$ = new keyword.AND($$[$0-2], $$[$0]);
break;
case 74:this.$ = new keyword.NOT($$[$0]);
break;
case 75:this.$ = new keyword.EQ($$[$0-2], $$[$0]);
break;
case 76:this.$ = new keyword.NE($$[$0-2], $$[$0]);
break;
case 77:this.$ = new keyword.GT($$[$0-2], $$[$0]);
break;
case 78:this.$ = new keyword.GE($$[$0-2], $$[$0]);
break;
case 79:this.$ = new keyword.LT($$[$0-2], $$[$0]);
break;
case 80:this.$ = new keyword.LE($$[$0-2], $$[$0]);
break;
case 81:this.$ = new keyword.Max($$[$0-2], $$[$0]);
break;
case 82:this.$ = new keyword.Min($$[$0-2], $$[$0]);
break;
case 83:this.$ = new keyword.Add($$[$0-2], $$[$0]);
break;
case 84:this.$ = new keyword.Sub($$[$0-2], $$[$0]);
break;
case 85:this.$ = new keyword.Mul($$[$0-2], $$[$0]);
break;
case 86:this.$ = new keyword.Div($$[$0-2], $$[$0]);
break;
case 87:this.$ = new keyword.Pow($$[$0-2], $$[$0]);
break;
case 88:this.$ = -$$[$0];
break;
case 89:this.$ = $$[$0-1];
break;
case 90:this.$ = new keyword.Var($$[$0]);
break;
case 91:this.$ = new keyword.Var($$[$0-3], $$[$0-2], $$[$0-1]);
break;
case 92:this.$ = new keyword.Var($$[$0-3], $$[$0-2], $$[$0-1]);
break;
case 93:this.$ = new keyword.FN($$[$0-3], $$[$0-1]);
break;
case 94:this.$ = new keyword.ABS($$[$0-1]);
break;
case 95:this.$ = new keyword.ATN($$[$0-1]);
break;
case 96:this.$ = new keyword.COS($$[$0-1]);
break;
case 97:this.$ = new keyword.EXP($$[$0-1]);
break;
case 98:this.$ = new keyword.INT($$[$0-1]);
break;
case 99:this.$ = new keyword.LEN($$[$0-1]);
break;
case 100:this.$ = new keyword.LIN($$[$0-1]);
break;
case 101:this.$ = new keyword.LOG($$[$0-1]);
break;
case 102:this.$ = new keyword.RND($$[$0-1]);
break;
case 103:this.$ = new keyword.SGN($$[$0-1]);
break;
case 104:this.$ = new keyword.SIN($$[$0-1]);
break;
case 105:this.$ = new keyword.SPA($$[$0-1]);
break;
case 106:this.$ = new keyword.SQR($$[$0-1]);
break;
case 107:this.$ = new keyword.TAB($$[$0-1]);
break;
case 108:this.$ = new keyword.TAN($$[$0-1]);
break;
case 109:this.$ = new keyword.TIM($$[$0-1]);
break;
case 110:this.$ = new keyword.LCASE($$[$0-1]);
break;
case 111:this.$ = new keyword.LEFT($$[$0-3], $$[$0-1]);
break;
case 112:this.$ = new keyword.MID($$[$0-5], $$[$0-3], $$[$0-1]);
break;
case 113:this.$ = new keyword.RIGHT($$[$0-3], $$[$0-1]);
break;
case 114:this.$ = new keyword.SUBSTR($$[$0-5], $$[$0-3], $$[$0-1]);
break;
case 115:this.$ = new keyword.UCASE($$[$0-1]);
break;
case 116:this.$ = $$[$0];
break;
case 117:this.$ = new keyword.Const(parseInt($$[$0], 10));
break;
case 118:this.$ = new keyword.Const($$[$0]);
break;
case 119:this.$ = new keyword.Const(Number($$[$0]));
break;
case 120:this.$ = [$$[$0]];
break;
case 121:this.$ = [$$[$0-2], $$[$0]];
break;
case 122:this.$ = new keyword.Var($$[$0]);
break;
case 123:this.$ = new keyword.Var($$[$0-3], $$[$0-2], $$[$0-1]);
break;
case 124:this.$ = new keyword.Var($$[$0-3], $$[$0-2], $$[$0-1]);
break;
case 125:this.$ = [$$[$0-1]];
break;
case 126:this.$ = [new keyword.Var($$[$0-4], $$[$0-3], $$[$0-2])];
break;
case 127:this.$ = [new keyword.Var($$[$0-4], $$[$0-3], $$[$0-2])];
break;
case 128:this.$ = [$$[$0-2], $$[$0-1]];
break;
case 129:this.$ = [$$[$0-5], new keyword.Var($$[$0-4], $$[$0-3], $$[$0-2])];
break;
case 130:this.$ = [$$[$0-5], new keyword.Var($$[$0-4], $$[$0-3], $$[$0-2])];
break;
case 131:this.$ = [$$[$0]];
break;
case 132:this.$ = [$$[$0-2], $$[$0]];
break;
case 133:this.$ = [parseInt($$[$0], 10)];
break;
case 134:this.$ = [$$[$0-2], parseInt($$[$0], 10)];
break;
case 135:this.$ = [$$[$0]];
break;
case 136:this.$ = [$$[$0-2], $$[$0]];
break;
case 137:this.$ = [$$[$0]];
break;
case 138:this.$ = [$$[$0-2], $$[$0]];
break;
case 139:this.$ = new keyword.Var($$[$0]);
break;
case 140:this.$ = new keyword.Var($$[$0-3], $$[$0-2], $$[$0-1]);
break;
case 141:this.$ = new keyword.Var($$[$0-3], $$[$0-2], $$[$0-1]);
break;
case 142:this.$ = [$$[$0]];
break;
case 143:this.$ = [$$[$0-2], $$[$0-1], $$[$0]];
break;
case 144:this.$ = keyword.Semic;
break;
case 145:this.$ = keyword.Comma;
break;
case 146:this.$ = [$$[$0]];
break;
case 147:this.$ = [$$[$0-2], $$[$0-1], $$[$0]];
break;
case 148:this.$ = $$[$0];
break;
case 149:this.$ = $$[$0];
break;
case 150:this.$ = [$$[$0]];
break;
case 151:this.$ = [parseInt($$[$0-3], 10), $$[$0-2], $$[$0-1], $$[$0]];
break;
case 152:this.$ = [$$[$0]];
break;
case 153:this.$ = [parseInt($$[$0-1], 10), $$[$0]];
break;
}
},
table: [{3:1,4:2,5:[1,29],7:3,8:28,9:30,10:[1,17],11:[1,4],13:[1,5],14:[1,6],15:[1,7],16:[1,8],17:[1,9],18:[1,10],19:[1,11],20:[1,12],21:[1,13],22:[1,14],23:[1,15],24:[1,16],25:[1,18],26:[1,19],27:[1,20],28:[1,21],29:[1,22],30:[1,23],31:[1,24],32:[1,25],33:[1,26],34:[1,27],35:[1,31],38:[1,32],39:[1,33],41:[1,34],43:[1,35],45:[1,57],48:[1,36],49:[1,37],50:[1,38],53:[1,39],56:[1,40],57:[1,41],60:[1,42],61:[1,43],63:[1,44],65:[1,45],67:[1,46],68:47,69:[1,48],70:[1,52],73:[1,49],74:[1,50],79:[1,51],80:[1,53],81:[1,54],82:[1,55],83:[1,56]},{1:[3]},{5:[1,58]},{6:[1,59],8:60,9:30,10:[1,61],35:[1,31],38:[1,32],39:[1,33],41:[1,34],43:[1,35],45:[1,57],48:[1,36],49:[1,37],50:[1,38],53:[1,39],56:[1,40],57:[1,41],60:[1,42],61:[1,43],63:[1,44],65:[1,45],67:[1,46],68:47,69:[1,48],70:[1,52],73:[1,49],74:[1,50],79:[1,51],80:[1,53],81:[1,54],82:[1,55],83:[1,56]},{12:[1,62]},{5:[2,9]},{12:[1,63]},{5:[2,11]},{5:[2,12]},{5:[2,13]},{5:[2,14]},{5:[2,15]},{5:[2,16]},{5:[2,17]},{5:[2,18]},{5:[2,19]},{5:[2,20]},{5:[2,21],9:64,35:[1,31],38:[1,32],39:[1,33],41:[1,34],43:[1,35],45:[1,57],48:[1,36],49:[1,37],50:[1,38],53:[1,39],56:[1,40],57:[1,41],60:[1,42],61:[1,43],63:[1,44],65:[1,45],67:[1,46],68:47,69:[1,48],70:[1,52],73:[1,49],74:[1,50],79:[1,51],80:[1,53],81:[1,54],82:[1,55],83:[1,56]},{5:[2,22]},{5:[2,23]},{5:[2,24]},{5:[2,25]},{5:[2,26]},{5:[2,27]},{5:[2,28]},{5:[2,29]},{5:[2,30]},{5:[2,31]},{5:[1,65]},{6:[2,5],10:[2,5],35:[2,5],38:[2,5],39:[2,5],41:[2,5],43:[2,5],45:[2,5],48:[2,5],49:[2,5],50:[2,5],53:[2,5],56:[2,5],57:[2,5],60:[2,5],61:[2,5],63:[2,5],65:[2,5],67:[2,5],69:[2,5],70:[2,5],73:[2,5],74:[2,5],79:[2,5],80:[2,5],81:[2,5],82:[2,5],83:[2,5]},{5:[2,6]},{36:[1,66]},{12:[1,67]},{40:68,45:[1,70],127:69},{10:[1,73],12:[1,74],42:71,125:72,126:[1,75]},{44:[1,76]},{40:77,45:[1,70],127:69},{5:[2,38]},{45:[1,79],51:[1,78]},{45:[1,80]},{54:[1,81]},{10:[1,82],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:83,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,112],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:113,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:114,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,120],12:[1,117],45:[1,121],64:115,129:116,130:118,131:119},{12:[1,123],45:[1,125],66:122,128:124},{45:[1,57],68:126},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,128],47:127,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{45:[1,130],70:[1,129]},{45:[1,131]},{5:[2,62],10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:134,75:132,77:[1,133],86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,65]},{45:[1,125],66:135,128:124},{5:[2,67],10:[1,136]},{5:[2,69]},{5:[2,70]},{5:[2,71]},{36:[1,139],46:[1,137],100:[1,138]},{6:[1,140]},{1:[2,2]},{5:[1,141]},{9:64,35:[1,31],38:[1,32],39:[1,33],41:[1,34],43:[1,35],45:[1,57],48:[1,36],49:[1,37],50:[1,38],53:[1,39],56:[1,40],57:[1,41],60:[1,42],61:[1,43],63:[1,44],65:[1,45],67:[1,46],68:47,69:[1,48],70:[1,52],73:[1,49],74:[1,50],79:[1,51],80:[1,53],81:[1,54],82:[1,55],83:[1,56]},{5:[2,8]},{5:[2,10]},{5:[2,7]},{6:[2,4],10:[2,4],35:[2,4],38:[2,4],39:[2,4],41:[2,4],43:[2,4],45:[2,4],48:[2,4],49:[2,4],50:[2,4],53:[2,4],56:[2,4],57:[2,4],60:[2,4],61:[2,4],63:[2,4],65:[2,4],67:[2,4],69:[2,4],70:[2,4],73:[2,4],74:[2,4],79:[2,4],80:[2,4],81:[2,4],82:[2,4],83:[2,4]},{10:[1,142]},{5:[2,33]},{5:[2,34],52:[1,143]},{5:[2,120],52:[2,120]},{5:[2,122],36:[1,145],52:[2,122],100:[1,144]},{5:[2,35],52:[1,146]},{5:[2,131],52:[2,131]},{5:[2,117],37:[2,117],52:[2,117],54:[2,117],55:[2,117],57:[2,117],58:[2,117],62:[2,117],78:[2,117],84:[2,117],85:[2,117],87:[2,117],88:[2,117],89:[2,117],90:[2,117],91:[2,117],92:[2,117],93:[2,117],94:[2,117],95:[2,117],96:[2,117],97:[2,117],98:[2,117],99:[2,117],102:[2,117]},{5:[2,118],37:[2,118],52:[2,118],54:[2,118],55:[2,118],57:[2,118],58:[2,118],62:[2,118],78:[2,118],84:[2,118],85:[2,118],87:[2,118],88:[2,118],89:[2,118],90:[2,118],91:[2,118],92:[2,118],93:[2,118],94:[2,118],95:[2,118],96:[2,118],97:[2,118],98:[2,118],99:[2,118],102:[2,118]},{5:[2,119],37:[2,119],52:[2,119],54:[2,119],55:[2,119],57:[2,119],58:[2,119],62:[2,119],78:[2,119],84:[2,119],85:[2,119],87:[2,119],88:[2,119],89:[2,119],90:[2,119],91:[2,119],92:[2,119],93:[2,119],94:[2,119],95:[2,119],96:[2,119],97:[2,119],98:[2,119],99:[2,119],102:[2,119]},{36:[1,147]},{5:[2,37],52:[1,143]},{52:[1,148]},{52:[1,149]},{46:[1,150]},{10:[1,151]},{5:[2,44],58:[2,117],84:[2,117],85:[2,117],87:[2,117],88:[2,117],89:[2,117],90:[2,117],91:[2,117],92:[2,117],93:[2,117],94:[2,117],95:[2,117],96:[2,117],97:[2,117],98:[2,117],99:[2,117]},{58:[1,152],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:168,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:169,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:170,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,90],36:[1,172],37:[2,90],52:[2,90],54:[2,90],55:[2,90],57:[2,90],58:[2,90],62:[2,90],78:[2,90],84:[2,90],85:[2,90],87:[2,90],88:[2,90],89:[2,90],90:[2,90],91:[2,90],92:[2,90],93:[2,90],94:[2,90],95:[2,90],96:[2,90],97:[2,90],98:[2,90],99:[2,90],100:[1,171],102:[2,90]},{36:[1,173]},{36:[1,174]},{36:[1,175]},{36:[1,176]},{36:[1,177]},{36:[1,178]},{36:[1,179]},{36:[1,180]},{36:[1,181]},{36:[1,182]},{36:[1,183]},{36:[1,184]},{36:[1,185]},{36:[1,186]},{36:[1,187]},{36:[1,188]},{36:[1,189]},{36:[1,190]},{36:[1,191]},{36:[1,192]},{36:[1,193]},{36:[1,194]},{36:[1,195]},{5:[2,116],37:[2,116],52:[2,116],54:[2,116],55:[2,116],57:[2,116],58:[2,116],62:[2,116],78:[2,116],84:[2,116],85:[2,116],87:[2,116],88:[2,116],89:[2,116],90:[2,116],91:[2,116],92:[2,116],93:[2,116],94:[2,116],95:[2,116],96:[2,116],97:[2,116],98:[2,116],99:[2,116],102:[2,116]},{5:[2,46],58:[2,117],84:[2,117],85:[2,117],87:[2,117],88:[2,117],89:[2,117],90:[2,117],91:[2,117],92:[2,117],93:[2,117],94:[2,117],95:[2,117],96:[2,117],97:[2,117],98:[2,117],99:[2,117]},{58:[1,196],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{57:[1,197],62:[1,198],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{5:[2,51],52:[1,199]},{5:[2,146],37:[2,146],52:[2,146]},{5:[2,148],37:[2,148],52:[2,148]},{5:[2,149],37:[2,149],52:[2,149]},{5:[2,150],37:[2,150],52:[2,150]},{36:[1,200],45:[1,201]},{5:[2,152],37:[2,152],52:[2,152]},{5:[2,52],52:[1,202]},{52:[1,203]},{5:[2,137],52:[2,137]},{5:[2,139],36:[1,205],52:[2,139],100:[1,204]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,128],47:206,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,55],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{5:[2,90],36:[1,209],46:[1,207],84:[2,90],85:[2,90],87:[2,90],88:[2,90],89:[2,90],90:[2,90],91:[2,90],92:[2,90],93:[2,90],94:[2,90],95:[2,90],96:[2,90],97:[2,90],98:[2,90],99:[2,90],100:[1,208]},{45:[1,125],66:210,128:124},{46:[1,211]},{5:[2,59]},{5:[2,61],52:[1,214],76:212,78:[1,213]},{10:[1,215]},{5:[2,142],52:[2,142],78:[2,142],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{5:[2,66],52:[1,202]},{5:[2,68]},{10:[2,125],12:[2,125],36:[2,125],44:[2,125],45:[2,125],86:[2,125],96:[2,125],103:[2,125],104:[2,125],105:[2,125],106:[2,125],107:[2,125],108:[2,125],109:[2,125],110:[2,125],111:[2,125],112:[2,125],113:[2,125],114:[2,125],115:[2,125],116:[2,125],117:[2,125],118:[2,125],119:[2,125],120:[2,125],121:[2,125],122:[2,125],123:[2,125],124:[2,125],126:[2,125]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:217,86:[1,84],96:[1,85],101:216,103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:217,86:[1,84],96:[1,85],101:218,103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{1:[2,1]},{6:[2,3],10:[2,3],35:[2,3],38:[2,3],39:[2,3],41:[2,3],43:[2,3],45:[2,3],48:[2,3],49:[2,3],50:[2,3],53:[2,3],56:[2,3],57:[2,3],60:[2,3],61:[2,3],63:[2,3],65:[2,3],67:[2,3],69:[2,3],70:[2,3],73:[2,3],74:[2,3],79:[2,3],80:[2,3],81:[2,3],82:[2,3],83:[2,3]},{37:[1,219]},{45:[1,70],127:220},{10:[1,222],59:221},{10:[1,222],59:223},{10:[1,73],12:[1,74],125:224,126:[1,75]},{45:[1,225]},{45:[1,226]},{45:[1,227]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:228,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,43]},{10:[1,222],59:229},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:230,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:231,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:232,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:233,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:234,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:235,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:236,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:237,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:238,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:239,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:240,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:241,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:242,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:243,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:244,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,74],37:[2,74],52:[2,74],54:[2,74],55:[2,74],57:[2,74],58:[2,74],62:[2,74],78:[2,74],84:[2,74],85:[2,74],87:[2,74],88:[2,74],89:[2,74],90:[2,74],91:[2,74],92:[2,74],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,74]},{5:[2,88],37:[2,88],52:[2,88],54:[2,88],55:[2,88],57:[2,88],58:[2,88],62:[2,88],78:[2,88],84:[2,88],85:[2,88],87:[2,88],88:[2,88],89:[2,88],90:[2,88],91:[2,88],92:[2,88],93:[2,88],94:[2,88],95:[2,88],96:[2,88],97:[2,88],98:[2,88],99:[2,88],102:[2,88]},{37:[1,245],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:217,86:[1,84],96:[1,85],101:246,103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:217,86:[1,84],96:[1,85],101:247,103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:248,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:249,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:250,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:251,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:252,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:253,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:254,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:255,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:256,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:257,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:258,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:259,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:260,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:261,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:262,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:263,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:264,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:265,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:266,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:267,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:268,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:269,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:270,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,222],59:271},{10:[1,272]},{9:274,10:[1,273],35:[1,31],38:[1,32],39:[1,33],41:[1,34],43:[1,35],45:[1,57],48:[1,36],49:[1,37],50:[1,38],53:[1,39],56:[1,40],57:[1,41],60:[1,42],61:[1,43],63:[1,44],65:[1,45],67:[1,46],68:47,69:[1,48],70:[1,52],73:[1,49],74:[1,50],79:[1,51],80:[1,53],81:[1,54],82:[1,55],83:[1,56]},{10:[1,120],12:[1,117],45:[1,121],129:275,130:118,131:119},{10:[1,120],12:[1,117],45:[1,121],64:276,129:116,130:118,131:119},{5:[2,153],37:[2,153],52:[2,153]},{45:[1,125],128:277},{45:[1,125],66:278,128:124},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:217,86:[1,84],96:[1,85],101:279,103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:217,86:[1,84],96:[1,85],101:280,103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,54],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{10:[2,128],12:[2,128],36:[2,128],44:[2,128],45:[2,128],86:[2,128],96:[2,128],103:[2,128],104:[2,128],105:[2,128],106:[2,128],107:[2,128],108:[2,128],109:[2,128],110:[2,128],111:[2,128],112:[2,128],113:[2,128],114:[2,128],115:[2,128],116:[2,128],117:[2,128],118:[2,128],119:[2,128],120:[2,128],121:[2,128],122:[2,128],123:[2,128],124:[2,128],126:[2,128]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:217,86:[1,84],96:[1,85],101:281,103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:217,86:[1,84],96:[1,85],101:282,103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,56],52:[1,202]},{71:[1,283],72:[1,284]},{5:[2,60],10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:285,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,144],10:[2,144],12:[2,144],36:[2,144],44:[2,144],45:[2,144],86:[2,144],96:[2,144],103:[2,144],104:[2,144],105:[2,144],106:[2,144],107:[2,144],108:[2,144],109:[2,144],110:[2,144],111:[2,144],112:[2,144],113:[2,144],114:[2,144],115:[2,144],116:[2,144],117:[2,144],118:[2,144],119:[2,144],120:[2,144],121:[2,144],122:[2,144],123:[2,144],124:[2,144],126:[2,144]},{5:[2,145],10:[2,145],12:[2,145],36:[2,145],44:[2,145],45:[2,145],86:[2,145],96:[2,145],103:[2,145],104:[2,145],105:[2,145],106:[2,145],107:[2,145],108:[2,145],109:[2,145],110:[2,145],111:[2,145],112:[2,145],113:[2,145],114:[2,145],115:[2,145],116:[2,145],117:[2,145],118:[2,145],119:[2,145],120:[2,145],121:[2,145],122:[2,145],123:[2,145],124:[2,145],126:[2,145]},{5:[2,64],78:[1,286]},{52:[1,288],102:[1,287]},{37:[2,135],52:[2,135],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,135]},{37:[1,289],52:[1,288]},{5:[2,32]},{5:[2,121],52:[2,121]},{52:[1,291],102:[1,290]},{5:[2,133],37:[2,133],52:[2,133],102:[2,133]},{37:[1,292],52:[1,291]},{5:[2,132],52:[2,132]},{37:[1,293]},{52:[1,294]},{52:[1,295]},{54:[1,296],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{5:[2,45],52:[1,291]},{5:[2,72],37:[2,72],52:[2,72],54:[2,72],55:[2,72],57:[2,72],58:[2,72],62:[2,72],78:[2,72],84:[2,72],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,72]},{5:[2,73],37:[2,73],52:[2,73],54:[2,73],55:[2,73],57:[2,73],58:[2,73],62:[2,73],78:[2,73],84:[2,73],85:[2,73],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,73]},{5:[2,75],37:[2,75],52:[2,75],54:[2,75],55:[2,75],57:[2,75],58:[2,75],62:[2,75],78:[2,75],84:[2,75],85:[2,75],87:[2,75],88:[2,75],89:[2,75],90:[2,75],91:[2,75],92:[2,75],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,75]},{5:[2,76],37:[2,76],52:[2,76],54:[2,76],55:[2,76],57:[2,76],58:[2,76],62:[2,76],78:[2,76],84:[2,76],85:[2,76],87:[2,76],88:[2,76],89:[2,76],90:[2,76],91:[2,76],92:[2,76],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,76]},{5:[2,77],37:[2,77],52:[2,77],54:[2,77],55:[2,77],57:[2,77],58:[2,77],62:[2,77],78:[2,77],84:[2,77],85:[2,77],87:[2,77],88:[2,77],89:[2,77],90:[2,77],91:[2,77],92:[2,77],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,77]},{5:[2,78],37:[2,78],52:[2,78],54:[2,78],55:[2,78],57:[2,78],58:[2,78],62:[2,78],78:[2,78],84:[2,78],85:[2,78],87:[2,78],88:[2,78],89:[2,78],90:[2,78],91:[2,78],92:[2,78],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,78]},{5:[2,79],37:[2,79],52:[2,79],54:[2,79],55:[2,79],57:[2,79],58:[2,79],62:[2,79],78:[2,79],84:[2,79],85:[2,79],87:[2,79],88:[2,79],89:[2,79],90:[2,79],91:[2,79],92:[2,79],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,79]},{5:[2,80],37:[2,80],52:[2,80],54:[2,80],55:[2,80],57:[2,80],58:[2,80],62:[2,80],78:[2,80],84:[2,80],85:[2,80],87:[2,80],88:[2,80],89:[2,80],90:[2,80],91:[2,80],92:[2,80],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,80]},{5:[2,81],37:[2,81],52:[2,81],54:[2,81],55:[2,81],57:[2,81],58:[2,81],62:[2,81],78:[2,81],84:[2,81],85:[2,81],87:[2,81],88:[2,81],89:[2,81],90:[2,81],91:[2,81],92:[2,81],93:[2,81],94:[2,81],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,81]},{5:[2,82],37:[2,82],52:[2,82],54:[2,82],55:[2,82],57:[2,82],58:[2,82],62:[2,82],78:[2,82],84:[2,82],85:[2,82],87:[2,82],88:[2,82],89:[2,82],90:[2,82],91:[2,82],92:[2,82],93:[2,82],94:[2,82],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,82]},{5:[2,83],37:[2,83],52:[2,83],54:[2,83],55:[2,83],57:[2,83],58:[2,83],62:[2,83],78:[2,83],84:[2,83],85:[2,83],87:[2,83],88:[2,83],89:[2,83],90:[2,83],91:[2,83],92:[2,83],93:[2,83],94:[2,83],95:[2,83],96:[2,83],97:[1,165],98:[1,166],99:[1,167],102:[2,83]},{5:[2,84],37:[2,84],52:[2,84],54:[2,84],55:[2,84],57:[2,84],58:[2,84],62:[2,84],78:[2,84],84:[2,84],85:[2,84],87:[2,84],88:[2,84],89:[2,84],90:[2,84],91:[2,84],92:[2,84],93:[2,84],94:[2,84],95:[2,84],96:[2,84],97:[1,165],98:[1,166],99:[1,167],102:[2,84]},{5:[2,85],37:[2,85],52:[2,85],54:[2,85],55:[2,85],57:[2,85],58:[2,85],62:[2,85],78:[2,85],84:[2,85],85:[2,85],87:[2,85],88:[2,85],89:[2,85],90:[2,85],91:[2,85],92:[2,85],93:[2,85],94:[2,85],95:[2,85],96:[2,85],97:[2,85],98:[2,85],99:[1,167],102:[2,85]},{5:[2,86],37:[2,86],52:[2,86],54:[2,86],55:[2,86],57:[2,86],58:[2,86],62:[2,86],78:[2,86],84:[2,86],85:[2,86],87:[2,86],88:[2,86],89:[2,86],90:[2,86],91:[2,86],92:[2,86],93:[2,86],94:[2,86],95:[2,86],96:[2,86],97:[2,86],98:[2,86],99:[1,167],102:[2,86]},{5:[2,87],37:[2,87],52:[2,87],54:[2,87],55:[2,87],57:[2,87],58:[2,87],62:[2,87],78:[2,87],84:[2,87],85:[2,87],87:[2,87],88:[2,87],89:[2,87],90:[2,87],91:[2,87],92:[2,87],93:[2,87],94:[2,87],95:[2,87],96:[2,87],97:[2,87],98:[2,87],99:[2,87],102:[2,87]},{5:[2,89],37:[2,89],52:[2,89],54:[2,89],55:[2,89],57:[2,89],58:[2,89],62:[2,89],78:[2,89],84:[2,89],85:[2,89],87:[2,89],88:[2,89],89:[2,89],90:[2,89],91:[2,89],92:[2,89],93:[2,89],94:[2,89],95:[2,89],96:[2,89],97:[2,89],98:[2,89],99:[2,89],102:[2,89]},{52:[1,288],102:[1,297]},{37:[1,298],52:[1,288]},{37:[1,299],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,300],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,301],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,302],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,303],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,304],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,305],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,306],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,307],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,308],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,309],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,310],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,311],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,312],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,313],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,314],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,315],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,316],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{52:[1,317],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{52:[1,318],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{52:[1,319],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{52:[1,320],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,321],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{5:[2,47],52:[1,291]},{5:[2,48]},{5:[2,49]},{5:[2,50]},{5:[2,147],37:[2,147],52:[2,147]},{37:[1,322],52:[1,199]},{5:[2,138],52:[2,138]},{5:[2,53],52:[1,202]},{52:[1,288],102:[1,323]},{37:[1,324],52:[1,288]},{52:[1,288],102:[1,325]},{37:[1,326],52:[1,288]},{5:[2,57]},{5:[2,58]},{5:[2,143],52:[2,143],78:[2,143],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{45:[1,125],66:327,128:124},{46:[1,328]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:329,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{46:[1,330]},{5:[2,123],52:[2,123]},{10:[1,331]},{5:[2,124],52:[2,124]},{46:[1,332]},{45:[1,333]},{45:[1,334]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:335,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,91],37:[2,91],52:[2,91],54:[2,91],55:[2,91],57:[2,91],58:[2,91],62:[2,91],78:[2,91],84:[2,91],85:[2,91],87:[2,91],88:[2,91],89:[2,91],90:[2,91],91:[2,91],92:[2,91],93:[2,91],94:[2,91],95:[2,91],96:[2,91],97:[2,91],98:[2,91],99:[2,91],102:[2,91]},{5:[2,92],37:[2,92],52:[2,92],54:[2,92],55:[2,92],57:[2,92],58:[2,92],62:[2,92],78:[2,92],84:[2,92],85:[2,92],87:[2,92],88:[2,92],89:[2,92],90:[2,92],91:[2,92],92:[2,92],93:[2,92],94:[2,92],95:[2,92],96:[2,92],97:[2,92],98:[2,92],99:[2,92],102:[2,92]},{5:[2,93],37:[2,93],52:[2,93],54:[2,93],55:[2,93],57:[2,93],58:[2,93],62:[2,93],78:[2,93],84:[2,93],85:[2,93],87:[2,93],88:[2,93],89:[2,93],90:[2,93],91:[2,93],92:[2,93],93:[2,93],94:[2,93],95:[2,93],96:[2,93],97:[2,93],98:[2,93],99:[2,93],102:[2,93]},{5:[2,94],37:[2,94],52:[2,94],54:[2,94],55:[2,94],57:[2,94],58:[2,94],62:[2,94],78:[2,94],84:[2,94],85:[2,94],87:[2,94],88:[2,94],89:[2,94],90:[2,94],91:[2,94],92:[2,94],93:[2,94],94:[2,94],95:[2,94],96:[2,94],97:[2,94],98:[2,94],99:[2,94],102:[2,94]},{5:[2,95],37:[2,95],52:[2,95],54:[2,95],55:[2,95],57:[2,95],58:[2,95],62:[2,95],78:[2,95],84:[2,95],85:[2,95],87:[2,95],88:[2,95],89:[2,95],90:[2,95],91:[2,95],92:[2,95],93:[2,95],94:[2,95],95:[2,95],96:[2,95],97:[2,95],98:[2,95],99:[2,95],102:[2,95]},{5:[2,96],37:[2,96],52:[2,96],54:[2,96],55:[2,96],57:[2,96],58:[2,96],62:[2,96],78:[2,96],84:[2,96],85:[2,96],87:[2,96],88:[2,96],89:[2,96],90:[2,96],91:[2,96],92:[2,96],93:[2,96],94:[2,96],95:[2,96],96:[2,96],97:[2,96],98:[2,96],99:[2,96],102:[2,96]},{5:[2,97],37:[2,97],52:[2,97],54:[2,97],55:[2,97],57:[2,97],58:[2,97],62:[2,97],78:[2,97],84:[2,97],85:[2,97],87:[2,97],88:[2,97],89:[2,97],90:[2,97],91:[2,97],92:[2,97],93:[2,97],94:[2,97],95:[2,97],96:[2,97],97:[2,97],98:[2,97],99:[2,97],102:[2,97]},{5:[2,98],37:[2,98],52:[2,98],54:[2,98],55:[2,98],57:[2,98],58:[2,98],62:[2,98],78:[2,98],84:[2,98],85:[2,98],87:[2,98],88:[2,98],89:[2,98],90:[2,98],91:[2,98],92:[2,98],93:[2,98],94:[2,98],95:[2,98],96:[2,98],97:[2,98],98:[2,98],99:[2,98],102:[2,98]},{5:[2,99],37:[2,99],52:[2,99],54:[2,99],55:[2,99],57:[2,99],58:[2,99],62:[2,99],78:[2,99],84:[2,99],85:[2,99],87:[2,99],88:[2,99],89:[2,99],90:[2,99],91:[2,99],92:[2,99],93:[2,99],94:[2,99],95:[2,99],96:[2,99],97:[2,99],98:[2,99],99:[2,99],102:[2,99]},{5:[2,100],37:[2,100],52:[2,100],54:[2,100],55:[2,100],57:[2,100],58:[2,100],62:[2,100],78:[2,100],84:[2,100],85:[2,100],87:[2,100],88:[2,100],89:[2,100],90:[2,100],91:[2,100],92:[2,100],93:[2,100],94:[2,100],95:[2,100],96:[2,100],97:[2,100],98:[2,100],99:[2,100],102:[2,100]},{5:[2,101],37:[2,101],52:[2,101],54:[2,101],55:[2,101],57:[2,101],58:[2,101],62:[2,101],78:[2,101],84:[2,101],85:[2,101],87:[2,101],88:[2,101],89:[2,101],90:[2,101],91:[2,101],92:[2,101],93:[2,101],94:[2,101],95:[2,101],96:[2,101],97:[2,101],98:[2,101],99:[2,101],102:[2,101]},{5:[2,102],37:[2,102],52:[2,102],54:[2,102],55:[2,102],57:[2,102],58:[2,102],62:[2,102],78:[2,102],84:[2,102],85:[2,102],87:[2,102],88:[2,102],89:[2,102],90:[2,102],91:[2,102],92:[2,102],93:[2,102],94:[2,102],95:[2,102],96:[2,102],97:[2,102],98:[2,102],99:[2,102],102:[2,102]},{5:[2,103],37:[2,103],52:[2,103],54:[2,103],55:[2,103],57:[2,103],58:[2,103],62:[2,103],78:[2,103],84:[2,103],85:[2,103],87:[2,103],88:[2,103],89:[2,103],90:[2,103],91:[2,103],92:[2,103],93:[2,103],94:[2,103],95:[2,103],96:[2,103],97:[2,103],98:[2,103],99:[2,103],102:[2,103]},{5:[2,104],37:[2,104],52:[2,104],54:[2,104],55:[2,104],57:[2,104],58:[2,104],62:[2,104],78:[2,104],84:[2,104],85:[2,104],87:[2,104],88:[2,104],89:[2,104],90:[2,104],91:[2,104],92:[2,104],93:[2,104],94:[2,104],95:[2,104],96:[2,104],97:[2,104],98:[2,104],99:[2,104],102:[2,104]},{5:[2,105],37:[2,105],52:[2,105],54:[2,105],55:[2,105],57:[2,105],58:[2,105],62:[2,105],78:[2,105],84:[2,105],85:[2,105],87:[2,105],88:[2,105],89:[2,105],90:[2,105],91:[2,105],92:[2,105],93:[2,105],94:[2,105],95:[2,105],96:[2,105],97:[2,105],98:[2,105],99:[2,105],102:[2,105]},{5:[2,106],37:[2,106],52:[2,106],54:[2,106],55:[2,106],57:[2,106],58:[2,106],62:[2,106],78:[2,106],84:[2,106],85:[2,106],87:[2,106],88:[2,106],89:[2,106],90:[2,106],91:[2,106],92:[2,106],93:[2,106],94:[2,106],95:[2,106],96:[2,106],97:[2,106],98:[2,106],99:[2,106],102:[2,106]},{5:[2,107],37:[2,107],52:[2,107],54:[2,107],55:[2,107],57:[2,107],58:[2,107],62:[2,107],78:[2,107],84:[2,107],85:[2,107],87:[2,107],88:[2,107],89:[2,107],90:[2,107],91:[2,107],92:[2,107],93:[2,107],94:[2,107],95:[2,107],96:[2,107],97:[2,107],98:[2,107],99:[2,107],102:[2,107]},{5:[2,108],37:[2,108],52:[2,108],54:[2,108],55:[2,108],57:[2,108],58:[2,108],62:[2,108],78:[2,108],84:[2,108],85:[2,108],87:[2,108],88:[2,108],89:[2,108],90:[2,108],91:[2,108],92:[2,108],93:[2,108],94:[2,108],95:[2,108],96:[2,108],97:[2,108],98:[2,108],99:[2,108],102:[2,108]},{5:[2,109],37:[2,109],52:[2,109],54:[2,109],55:[2,109],57:[2,109],58:[2,109],62:[2,109],78:[2,109],84:[2,109],85:[2,109],87:[2,109],88:[2,109],89:[2,109],90:[2,109],91:[2,109],92:[2,109],93:[2,109],94:[2,109],95:[2,109],96:[2,109],97:[2,109],98:[2,109],99:[2,109],102:[2,109]},{5:[2,110],37:[2,110],52:[2,110],54:[2,110],55:[2,110],57:[2,110],58:[2,110],62:[2,110],78:[2,110],84:[2,110],85:[2,110],87:[2,110],88:[2,110],89:[2,110],90:[2,110],91:[2,110],92:[2,110],93:[2,110],94:[2,110],95:[2,110],96:[2,110],97:[2,110],98:[2,110],99:[2,110],102:[2,110]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:336,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:337,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:338,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:339,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,115],37:[2,115],52:[2,115],54:[2,115],55:[2,115],57:[2,115],58:[2,115],62:[2,115],78:[2,115],84:[2,115],85:[2,115],87:[2,115],88:[2,115],89:[2,115],90:[2,115],91:[2,115],92:[2,115],93:[2,115],94:[2,115],95:[2,115],96:[2,115],97:[2,115],98:[2,115],99:[2,115],102:[2,115]},{5:[2,151],37:[2,151],52:[2,151]},{5:[2,140],52:[2,140]},{5:[2,141],52:[2,141]},{5:[2,91],46:[1,340],84:[2,91],85:[2,91],87:[2,91],88:[2,91],89:[2,91],90:[2,91],91:[2,91],92:[2,91],93:[2,91],94:[2,91],95:[2,91],96:[2,91],97:[2,91],98:[2,91],99:[2,91]},{5:[2,92],46:[1,341],84:[2,92],85:[2,92],87:[2,92],88:[2,92],89:[2,92],90:[2,92],91:[2,92],92:[2,92],93:[2,92],94:[2,92],95:[2,92],96:[2,92],97:[2,92],98:[2,92],99:[2,92]},{5:[2,63],52:[1,202]},{10:[2,126],12:[2,126],36:[2,126],44:[2,126],45:[2,126],86:[2,126],96:[2,126],103:[2,126],104:[2,126],105:[2,126],106:[2,126],107:[2,126],108:[2,126],109:[2,126],110:[2,126],111:[2,126],112:[2,126],113:[2,126],114:[2,126],115:[2,126],116:[2,126],117:[2,126],118:[2,126],119:[2,126],120:[2,126],121:[2,126],122:[2,126],123:[2,126],124:[2,126],126:[2,126]},{37:[2,136],52:[2,136],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167],102:[2,136]},{10:[2,127],12:[2,127],36:[2,127],44:[2,127],45:[2,127],86:[2,127],96:[2,127],103:[2,127],104:[2,127],105:[2,127],106:[2,127],107:[2,127],108:[2,127],109:[2,127],110:[2,127],111:[2,127],112:[2,127],113:[2,127],114:[2,127],115:[2,127],116:[2,127],117:[2,127],118:[2,127],119:[2,127],120:[2,127],121:[2,127],122:[2,127],123:[2,127],124:[2,127],126:[2,127]},{5:[2,134],37:[2,134],52:[2,134],102:[2,134]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:342,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{52:[1,343]},{5:[2,40]},{5:[2,42],55:[1,344],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,345],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{52:[1,346],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,347],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{52:[1,348],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{10:[2,129],12:[2,129],36:[2,129],44:[2,129],45:[2,129],86:[2,129],96:[2,129],103:[2,129],104:[2,129],105:[2,129],106:[2,129],107:[2,129],108:[2,129],109:[2,129],110:[2,129],111:[2,129],112:[2,129],113:[2,129],114:[2,129],115:[2,129],116:[2,129],117:[2,129],118:[2,129],119:[2,129],120:[2,129],121:[2,129],122:[2,129],123:[2,129],124:[2,129],126:[2,129]},{10:[2,130],12:[2,130],36:[2,130],44:[2,130],45:[2,130],86:[2,130],96:[2,130],103:[2,130],104:[2,130],105:[2,130],106:[2,130],107:[2,130],108:[2,130],109:[2,130],110:[2,130],111:[2,130],112:[2,130],113:[2,130],114:[2,130],115:[2,130],116:[2,130],117:[2,130],118:[2,130],119:[2,130],120:[2,130],121:[2,130],122:[2,130],123:[2,130],124:[2,130],126:[2,130]},{5:[2,36],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{45:[1,349]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:350,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,111],37:[2,111],52:[2,111],54:[2,111],55:[2,111],57:[2,111],58:[2,111],62:[2,111],78:[2,111],84:[2,111],85:[2,111],87:[2,111],88:[2,111],89:[2,111],90:[2,111],91:[2,111],92:[2,111],93:[2,111],94:[2,111],95:[2,111],96:[2,111],97:[2,111],98:[2,111],99:[2,111],102:[2,111]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:351,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,113],37:[2,113],52:[2,113],54:[2,113],55:[2,113],57:[2,113],58:[2,113],62:[2,113],78:[2,113],84:[2,113],85:[2,113],87:[2,113],88:[2,113],89:[2,113],90:[2,113],91:[2,113],92:[2,113],93:[2,113],94:[2,113],95:[2,113],96:[2,113],97:[2,113],98:[2,113],99:[2,113],102:[2,113]},{10:[1,73],12:[1,74],36:[1,86],44:[1,88],45:[1,87],47:352,86:[1,84],96:[1,85],103:[1,89],104:[1,90],105:[1,91],106:[1,92],107:[1,93],108:[1,94],109:[1,95],110:[1,96],111:[1,97],112:[1,98],113:[1,99],114:[1,100],115:[1,101],116:[1,102],117:[1,103],118:[1,104],119:[1,105],120:[1,106],121:[1,107],122:[1,108],123:[1,109],124:[1,110],125:111,126:[1,75]},{5:[2,39]},{5:[2,41],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,353],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{37:[1,354],84:[1,153],85:[1,154],87:[1,155],88:[1,156],89:[1,157],90:[1,158],91:[1,159],92:[1,160],93:[1,161],94:[1,162],95:[1,163],96:[1,164],97:[1,165],98:[1,166],99:[1,167]},{5:[2,112],37:[2,112],52:[2,112],54:[2,112],55:[2,112],57:[2,112],58:[2,112],62:[2,112],78:[2,112],84:[2,112],85:[2,112],87:[2,112],88:[2,112],89:[2,112],90:[2,112],91:[2,112],92:[2,112],93:[2,112],94:[2,112],95:[2,112],96:[2,112],97:[2,112],98:[2,112],99:[2,112],102:[2,112]},{5:[2,114],37:[2,114],52:[2,114],54:[2,114],55:[2,114],57:[2,114],58:[2,114],62:[2,114],78:[2,114],84:[2,114],85:[2,114],87:[2,114],88:[2,114],89:[2,114],90:[2,114],91:[2,114],92:[2,114],93:[2,114],94:[2,114],95:[2,114],96:[2,114],97:[2,114],98:[2,114],99:[2,114],102:[2,114]}],
defaultActions: {5:[2,9],7:[2,11],8:[2,12],9:[2,13],10:[2,14],11:[2,15],12:[2,16],13:[2,17],14:[2,18],15:[2,19],16:[2,20],18:[2,22],19:[2,23],20:[2,24],21:[2,25],22:[2,26],23:[2,27],24:[2,28],25:[2,29],26:[2,30],27:[2,31],30:[2,6],37:[2,38],51:[2,65],54:[2,69],55:[2,70],56:[2,71],59:[2,2],62:[2,8],63:[2,10],64:[2,7],67:[2,33],131:[2,59],136:[2,68],140:[2,1],151:[2,43],219:[2,32],272:[2,48],273:[2,49],274:[2,50],283:[2,57],284:[2,58],334:[2,40],349:[2,39]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


    katra = typeof window !== "undefined" && window !== null ? window.katra : require('./katra');
    command = katra.command;
    keyword = katra.keyword;


/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 5;
break;
case 1:/* skip whitespace */;
break;
case 2:return 97;
break;
case 3:return 98;
break;
case 4:return 96;
break;
case 5:return 95;
break;
case 6:return 99;
break;
case 7:return 87;
break;
case 8:return 46;
break;
case 9:return 88;
break;
case 10:return 92;
break;
case 11:return 90;
break;
case 12:return 91;
break;
case 13:return 89;
break;
case 14:return 93;
break;
case 15:return 94;
break;
case 16:return 85;
break;
case 17:return 84;
break;
case 18:return 86;
break;
case 19:return 36;
break;
case 20:return 37;
break;
case 21:return 100;
break;
case 22:return 102;
break;
case 23:return 52;
break;
case 24:return ':';
break;
case 25:return 78;
break;
case 26:return 15;
break;
case 27:return 16;
break;
case 28:return 17;
break;
case 29:return 11;
break;
case 30:return 18;
break;
case 31:return 19;
break;
case 32:return 20;
break;
case 33:return 21;
break;
case 34:return 22;
break;
case 35:return 23;
break;
case 36:return 24;
break;
case 37:return 14;
break;
case 38:return 25;
break;
case 39:return 26;
break;
case 40:return 27
break;
case 41:return 28;
break;
case 42:return 29;
break;
case 43:return 31;
break;
case 44:return 32;
break;
case 45:return 33;
break;
case 46:return 34;
break;
case 47:return 103;
break;
case 48:return 104;
break;
case 49:return 105;
break;
case 50:return 106;
break;
case 51:return 107;
break;
case 52:return 108;
break;
case 53:return 109;
break;
case 54:return 110;
break;
case 55:return 111;
break;
case 56:return 112;
break;
case 57:return 113;
break;
case 58:return 115;
break;
case 59:return 116;
break;
case 60:return 117;
break;
case 61:return 118;
break;
case 62:return 119;
break;
case 63:return 120;
break;
case 64:return 121;
break;
case 65:return 122;
break;
case 66:return 123;
break;
case 67:return 124;
break;
case 68:return 13;
break;
case 69:return 38;
break;
case 70:return 72;
break;
case 71:return 39;
break;
case 72:return 35;
break;
case 73:return 41;
break;
case 74:return 43;
break;
case 75:return 48;
break;
case 76:return 49;
break;
case 77:return 50;
break;
case 78:return 53;
break;
case 79:return 60;
break;
case 80:return 57;
break;
case 81:return 56;
break;
case 82:return 61;
break;
case 83:return 63;
break;
case 84:return 65;
break;
case 85:return 67;
break;
case 86:return 69
break;
case 87:return 73;
break;
case 88:return 'OFF';
break;
case 89:return 58;
break;
case 90:return 'ON';
break;
case 91:return 74;
break;
case 92:return 30;
break;
case 93:return 79;
break;
case 94:return 82;
break;
case 95:return 70;
break;
case 96:return 80;
break;
case 97:return 81
break;
case 98:return 55;
break;
case 99:return 83;
break;
case 100:return 62;
break;
case 101:return 54;
break;
case 102:return 77;
break;
case 103:return 71;
break;
case 104:return 126;
break;
case 105:return 10;
break;
case 106:return 12;
break;
case 107:return 44;
break;
case 108:return 45;
break;
case 109:return 51;
break;
case 110:return 6;
break;
case 111:return 'INVALID';
break;
}
},
rules: [/^(?:\n)/,/^(?:[\t ]+)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:==)/,/^(?:=)/,/^(?:<>)/,/^(?:<=)/,/^(?:>=)/,/^(?:<)/,/^(?:>)/,/^(?:([Mm][Aa][Xx]))/,/^(?:([Mm][Ii][Nn]))/,/^(?:([Aa][Nn][Dd]))/,/^(?:([Oo][Rr]))/,/^(?:([Nn][Oo][Tt]))/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:,)/,/^(?::)/,/^(?:;)/,/^(?:([Tt][Rr][Oo][Nn]))/,/^(?:([Tt][Rr][Oo][Ff][Ff]))/,/^(?:([Aa][Pp][Pp][Ee]?[Nn]?[Dd]?[\-]([\$\*\@\!\#]?[A-Za-z][A-Za-z0-9]+)))/,/^(?:([Aa][Tt][Aa][Rr][Ii]))/,/^(?:([Cc][Aa][Tt][Aa]?[Ll]?[Oo]?[Gg]?))/,/^(?:([Dd][Ee][Ll][Ee]?[Tt]?[Ee]?([\-]([0-9,]+))?))/,/^(?:([Dd][Ii][Rr]))/,/^(?:([Ee][Xx][Ee][Cc]?[Uu]?[Tt]?[Ee]?[\-]([\$\*\@\!\#]?[A-Za-z][A-Za-z0-9]+)))/,/^(?:([Ff][Ii][Ll][Ee][Ss]))/,/^(?:([Gg][Ee][Tt][\-]([\$\*\@\!\#]?[A-Za-z][A-Za-z0-9]+)))/,/^(?:([Gg][Rr][Oo][Uu]?[Pp]?))/,/^(?:([Gg][Ww][Bb]?[Aa]?[Ss]?[Ii]?[Cc]?))/,/^(?:([Ll][Ii][Bb][Rr]?[Aa]?[Rr]?[Yy]?))/,/^(?:([Ll][Ii][Ss][Tt]?([\-]([0-9,]+))?))/,/^(?:([Nn][Aa][Mm][Ee]?[\-]([\$\*\@\!\#]?[A-Za-z][A-Za-z0-9]+)))/,/^(?:([Pp][Uu][Rr][Gg]?[Ee]?[\-]([\$\*\@\!\#]?[A-Za-z][A-Za-z0-9]+)))/,/^(?:([Rr][Ee][Nn][Uu]?[Mm]?[Bb]?[Ee]?[Rr]?([\-]([0-9,]+))?))/,/^(?:([Rr][Uu][Nn]([\-]([0-9])+)?))/,/^(?:([Ss][Aa][Vv][Ee]?))/,/^(?:([Ss][Cc][Rr][Aa]?[Tt]?[Cc]?[Hh]?))/,/^(?:([Tt][Ee][Ss][Tt]?))/,/^(?:([Aa][Bb][Ss]))/,/^(?:([Aa][Tt][Nn]))/,/^(?:([Cc][Oo][Ss]))/,/^(?:([Ee][Xx][Pp]))/,/^(?:([Ii][Nn][Tt]))/,/^(?:([Ll][Ee][Nn]))/,/^(?:([Ll][Ii][Nn]))/,/^(?:([Ll][Oo][Gg]))/,/^(?:([Rr][Nn][Dd]))/,/^(?:([Ss][Gg][Nn]))/,/^(?:([Ss][Ii][Nn]))/,/^(?:([Ss][Qq][Rr]))/,/^(?:([Tt][Aa][Bb]))/,/^(?:([Tt][Aa][Nn]))/,/^(?:([Tt][Ii][Mm]))/,/^(?:([Ll][Cc][Aa][Ss][Ee][\$]))/,/^(?:([Ll][Ee][Ff][Tt][\$]))/,/^(?:([Mm][Ii][Dd][\$]))/,/^(?:([Rr][Ii][Gg][Hh][Tt][\$]))/,/^(?:([Ss][Uu][Bb][Ss][Tt][Rr]))/,/^(?:([Uu][Cc][Aa][Ss][Ee][\$]))/,/^(?:([Cc][Ll][Ss]))/,/^(?:([Cc][Hh][Aa][Ii][Nn]))/,/^(?:([Cc][Oo][Nn]))/,/^(?:([Cc][Oo][Mm]))/,/^(?:([Bb][Aa][Ss][Ee]))/,/^(?:([Dd][Aa][Tt][Aa]))/,/^(?:([Dd][Ee][Ff]))/,/^(?:([Dd][Ii][Mm]))/,/^(?:([Ee][Nn][Dd]))/,/^(?:([Ee][Nn][Tt][Ee][Rr]))/,/^(?:([Ff][Oo][Rr]))/,/^(?:([Gg][Oo][Ss][Uu][Bb]))/,/^(?:([Gg][Oo][Tt][Oo]))/,/^(?:([Gg][Oo]))/,/^(?:([Ii][Ff]))/,/^(?:([Ii][Mm][Aa][Gg][Ee]))/,/^(?:([Ii][Nn][Pp][Uu][Tt]))/,/^(?:([Ll][Ee][Tt]))/,/^(?:([Mm][Aa][Tt]))/,/^(?:([Nn][Ee][Xx][Tt]))/,/^(?:{OFF})/,/^(?:([Oo][Ff]))/,/^(?:{ON})/,/^(?:([Pp][Rr][Ii][Nn][Tt]))/,/^(?:([Qq][Uu][Ii][Tt]))/,/^(?:([Rr][Aa][Nn][Dd][Oo][Mm][Ii][Zz][Ee]))/,/^(?:([Rr][Ee][Mm]).*)/,/^(?:([Rr][Ee][Aa][Dd]))/,/^(?:([Rr][Ee][Ss][Tt][Oo][Rr][Ee]))/,/^(?:([Rr][Ee][Tt][Uu][Rr][Nn]))/,/^(?:([Ss][Tt][Ee][Pp]))/,/^(?:([Ss][Tt][Oo][Pp]))/,/^(?:([Tt][Hh][Ee][Nn]))/,/^(?:([Tt][Oo]))/,/^(?:([Uu][Ss][Ii][Nn][Gg]))/,/^(?:([Zz][Ee][Rr]))/,/^(?:(([0-9])*\.([0-9])+([eE][-+]?[0-9]+)?))/,/^(?:(([0-9])+))/,/^(?:("[^"]*"))/,/^(?:([Ff][Nn]([A-Za-z])))/,/^(?:((([A-Za-z])([A-Za-z0-9])?)[$%]?))/,/^(?:([\#]([A-Za-z])))/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = kc;
exports.Parser = kc.Parser;
exports.parse = function () { return kc.parse.apply(kc, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    var args, parseQuery, setSize;
    args = void 0;
    parseQuery = function() {
      var i, pair, pairs, result;
      result = {};
      pairs = window.location.search.substring(1).split("&");
      for (i in pairs) {
        if (pairs[i].length > 0) {
          pair = pairs[i].split("=");
          result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
      }
      return result;
    };
    setSize = function() {
      $("div.console div.jquery-console-inner").offset({
        top: 0,
        left: 0
      });
      $("div.console div.jquery-console-inner").width($(this).width() - 12);
      return $("div.console div.jquery-console-inner").height($(this).height() - 12);
    };
    $(window).resize(function() {
      if (this.resizeTO) {
        clearTimeout(this.resizeTO);
      }
      return this.resizeTO = setTimeout(function() {
        return $(this).trigger("resizeEnd");
      }, 500);
    });
    $(window).bind("resizeEnd", setSize);
    katra.setRoot("/katra/");
    args = parseQuery();
    if (Object.keys(args).length === 0) {
      args = {
        title: "Katra BASIC"
      };
      document.title = args.title;
    }
    katra.main(args);
    return setSize();
  });

}).call(this);
