/**
 * webplate_engine.js
 *
 * Author:        Chris Modem
 * Last Edited:   16 August 2013
 * Edited By:   	Chris Modem
 *//**
 * LAB.js (LABjs :: Loading And Blocking JavaScript)
 * MIT License
 *
 * Author:        Kyle Simpson
 * Last Edited:   7 August 2013
 */(function(e){function m(e){return Object.prototype.toString.call(e)=="[object Function]"}function g(e){return Object.prototype.toString.call(e)=="[object Array]"}function y(e,t){var n=/^\w+\:\/\//;/^\/\/\/?/.test(e)?e=location.protocol+e:!n.test(e)&&e.charAt(0)!="/"&&(e=(t||"")+e);return n.test(e)?e:(e.charAt(0)=="/"?a:u)+e}function b(e,t){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function w(e){var t=!1;for(var n=0;n<e.scripts.length;n++)if(e.scripts[n].ready&&e.scripts[n].exec_trigger){t=!0;e.scripts[n].exec_trigger();e.scripts[n].exec_trigger=null}return t}function E(e,t,n,r){e.onload=e.onreadystatechange=function(){if(e.readyState&&e.readyState!="complete"&&e.readyState!="loaded"||t[n])return;e.onload=e.onreadystatechange=null;r()}}function S(e){e.ready=e.finished=!0;for(var t=0;t<e.finished_listeners.length;t++)e.finished_listeners[t]();e.ready_listeners=[];e.finished_listeners=[]}function x(e,t,r,i,s){setTimeout(function(){var o,u=t.real_src,l;if("item"in f){if(!f[0]){setTimeout(arguments.callee,25);return}f=f[0]}o=document.createElement("script");t.type&&(o.type=t.type);t.charset&&(o.charset=t.charset);if(s)if(p){r.elem=o;if(h){o.preload=!0;o.onpreload=i}else o.onreadystatechange=function(){o.readyState=="loaded"&&i()};o.src=u}else if(s&&u.indexOf(a)==0&&e[n]){l=new XMLHttpRequest;l.onreadystatechange=function(){if(l.readyState==4){l.onreadystatechange=function(){};r.text=l.responseText+"\n//@ sourceURL="+u;i()}};l.open("GET",u);l.send()}else{o.type="text/cache-script";E(o,r,"ready",function(){f.removeChild(o);i()});o.src=u;f.insertBefore(o,f.firstChild)}else if(d){o.async=!1;E(o,r,"finished",i);o.src=u;f.insertBefore(o,f.firstChild)}else{E(o,r,"finished",i);o.src=u;f.insertBefore(o,f.firstChild)}},0)}function T(){function d(e,t,n){function s(){if(r!=null){r=null;S(n)}}var r;if(c[t.src].finished)return;e[i]||(c[t.src].finished=!0);r=n.elem||document.createElement("script");t.type&&(r.type=t.type);t.charset&&(r.charset=t.charset);E(r,n,"finished",s);if(n.elem)n.elem=null;else if(n.text){r.onload=r.onreadystatechange=null;r.text=n.text}else r.src=t.real_src;f.insertBefore(r,f.firstChild);n.text&&s()}function C(e,t,n,r){var u,a,f=function(){t.ready_cb(t,function(){d(e,t,u)})},l=function(){t.finished_cb(t,n)};t.src=y(t.src,e[o]);t.real_src=t.src+(e[s]?(/\?.*$/.test(t.src)?"&_":"?_")+~~(Math.random()*1e9)+"=":"");c[t.src]||(c[t.src]={items:[],finished:!1});a=c[t.src].items;if(e[i]||a.length==0){u=a[a.length]={ready:!1,finished:!1,ready_listeners:[f],finished_listeners:[l]};x(e,t,u,r?function(){u.ready=!0;for(var e=0;e<u.ready_listeners.length;e++)u.ready_listeners[e]();u.ready_listeners=[]}:function(){S(u)},r)}else{u=a[0];u.finished?l():u.finished_listeners.push(l)}}function k(){function f(e,t){e.ready=!0;e.exec_trigger=t;c()}function l(e,t){e.ready=e.finished=!0;e.exec_trigger=null;for(var n=0;n<t.scripts.length;n++)if(!t.scripts[n].finished)return;t.finished=!0;c()}function c(){while(i<n.length){if(m(n[i])){try{n[i++]()}catch(e){}continue}if(!n[i].finished){if(w(n[i]))continue;break}i++}if(i==n.length){s=!1;o=!1}}function h(){(!o||!o.scripts)&&n.push(o={scripts:[],finished:!0})}var e,t=b(u,{}),n=[],i=0,s=!1,o;e={script:function(){for(var n=0;n<arguments.length;n++)(function(n,i){var u;g(n)||(i=[n]);for(var c=0;c<i.length;c++){h();n=i[c];m(n)&&(n=n());if(!n)continue;if(g(n)){u=[].slice.call(n);u.unshift(c,1);[].splice.apply(i,u);c--;continue}typeof n=="string"&&(n={src:n});n=b(n,{ready:!1,ready_cb:f,finished:!1,finished_cb:l});o.finished=!1;o.scripts.push(n);C(t,n,o,a&&s);s=!0;t[r]&&e.wait()}})(arguments[n],arguments[n]);return e},wait:function(){if(arguments.length>0){for(var t=0;t<arguments.length;t++)n.push(arguments[t]);o=n[n.length-1]}else o=!1;c();return e}};return{script:e.script,wait:e.wait,setOptions:function(n){b(n,t);return e}}}var u={},a=p||v,l=[],c={},h;u[n]=!0;u[r]=!1;u[i]=!1;u[s]=!1;u[o]="";h={setGlobalDefaults:function(e){b(e,u);return h},setOptions:function(){return k().setOptions.apply(null,arguments)},script:function(){return k().script.apply(null,arguments)},wait:function(){return k().wait.apply(null,arguments)},queueScript:function(){l[l.length]={type:"script",args:[].slice.call(arguments)};return h},queueWait:function(){l[l.length]={type:"wait",args:[].slice.call(arguments)};return h},runQueue:function(){var e=h,t=l.length,n=t,r;for(;--n>=0;){r=l.shift();e=e[r.type].apply(null,r.args)}return e},noConflict:function(){e.$LAB=t;return h},sandbox:function(){return T()}};return h}var t=e.$LAB,n="UseLocalXHR",r="AlwaysPreserveOrder",i="AllowDuplicates",s="CacheBust",o="BasePath",u=/^[^?#]*\//.exec(location.href)[0],a=/^\w+\:\/\/\/?[^\/]+/.exec(u)[0],f=document.head||document.getElementsByTagName("head"),l=e.opera&&Object.prototype.toString.call(e.opera)=="[object Opera]"||"MozAppearance"in document.documentElement.style,c=document.createElement("script"),h=typeof c.preload=="boolean",p=h||c.readyState&&c.readyState=="uninitialized",d=!p&&c.async===!0,v=!p&&!d&&!l;e.$LAB=T();(function(e,t,n){if(document.readyState==null&&document[e]){document.readyState="loading";document[e](t,n=function(){document.removeEventListener(t,n,!1);document.readyState="complete"},!1)}})("addEventListener","DOMContentLoaded")})(this);var $ar_path=window.location.href.split("/"),$protocol=$ar_path[0],$host=$ar_path[2],$base_url=$protocol+"//"+$host,$root="",$js_path=$root+"webplate/js/",$css_path=$root+"webplate/css/",$less_path=$root+"webplate/less/",$icomoon_path=$root+"webplate/icomoon/",$is_less=!1;$LAB.script($js_path+"min/webplate-jquery.min.js").wait().script($js_path+"min/webplate-modernizr.min.js").wait().script($js_path+"min/webplate-forms.min.js").wait().wait(function(){jQuery.web_lock_submit=function(e){$(e).live("keypress",function(e){if(e.keyCode==13)return!1})};jQuery.web_exists=function(e){return $(e).length>0?!0:!1};jQuery.web_get_extension=function(e){return e.split(".").pop().toLowerCase()};jQuery.web_crt_db_date=function(){$current_time=new Date;$year=$current_time.getFullYear();$month=$current_time.getMonth()+1;$month<10&&($month="0"+$month);$day=$current_time.getDate();$day<10&&($day="0"+$day);return $year+"-"+$month+"-"+$day};jQuery.web_check_date=function(e){return e.substr(4,1)=="-"&&e.substr(7,1)=="-"&&$.scrap_is_integer(e.substr(0,4))==1&&$.scrap_is_integer(e.substr(5,2))==1&&$.scrap_is_integer(e.substr(8,2))==1&&e.length==10?!0:!1};jQuery.web_is_time=function(e){if(e!=""){var t="0123456789.:",n=!0,r;for($i=0;$i<e.length&&n==1;$i++){r=e.charAt($i);t.indexOf(r)==-1&&(n=!1)}return n}return!1};jQuery.web_is_integer=function(e){if(e!=""){var t="0123456789.",n=!0,r;for($i=0;$i<e.length&&n==1;$i++){r=e.charAt($i);t.indexOf(r)==-1&&(n=!1)}return n}return!1};jQuery.web_is_full_integer=function(e){if(e!=""){var t="0123456789",n=!0,r;for($i=0;$i<e.length&&n==1;$i++){r=e.charAt($i);t.indexOf(r)==-1&&(n=!1)}return n}return!1};jQuery.web_has_white_space=function(e){return e.indexOf(" ")!=-1?!0:!1};jQuery.web_allowed_doc=function(e,t){t==null&&(t=["png","jpg","jpeg","gif","tif","tiff","bmp","doc","docx","xls","xlsx","pdf","txt","csv"]);$file_ext=e.split(".").pop().toLowerCase();return jQuery.inArray($file_ext,t)==-1?!1:!0};jQuery.web_input_mirror=function(e,t){$($selector).keyup(function(){$ref_input=$(this).val();$ref_value=$ref_input.replace(/ /g,"_").toLowerCase();$(t).text($ref_value)})};jQuery.web_is_email=function(e){return e.indexOf("@")!=-1&&e.indexOf(".")!=-1?!0:!1};jQuery.web_is_password=function(e){if(e.length>5){$num_check=/^[0-9]+$/;$letter_check=/^[a-zA-Z-]+$/;$error=!1;e.match($num_check)&&($error=!0);e.match($letter_check)&&($error=!0);return $error==1?!1:!0}return!1};jQuery.web_is_image=function(e,t){t==null&&(t=["jpg","jpeg","gif","tif","tiff","bmp","png"]);$file_ext=e.split(".").pop().toLowerCase();return jQuery.inArray($file_ext,t)==-1?!1:!0};jQuery.web_is_color=function(e){if(e.length!=7)return!1;if(e.substr(0,1)!="#")return!1};jQuery.web_random_string=function(e){$chars="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";e==null&&(e=5);$random_string="";for(var t=0;t<e;t++){$r_num=Math.floor(Math.random()*$chars.length);$random_string+=$chars.substring($r_num,$r_num+1)}return $random_string};jQuery.web_show_overlay=function(){$(".webplate-overlay").fadeIn()};jQuery.web_remove_overlay=function(){$(".webplate-overlay").fadeOut()};jQuery.web_show_modal=function(e){if($(e).is(":hidden")==1){e==""&&(e=".modal-basic");$modal_height=$(e).height();$(".webplate-overlay").fadeIn();$(e).css({top:-($modal_height+50)}).show();$(e).animate({top:0},"fast")}};jQuery.web_hide_modal=function(){$(".modal:visible .close").live("click",function(){$modal_height=$(".modal:visible").height();$(".webplate-overlay").fadeOut();$(".modal:visible").animate({top:-($modal_height+50)},"fast",function(){$(".modal:visible").hide()})})};jQuery.web_log=function(e){window.console&&console.log(e)};jQuery.web_navigation=function(){$(".webplate").prepend($(".navigation").clone().addClass("navigation-small").removeClass("navigation"));$(".navigation-trigger").on("click",function(){if($("html").hasClass("show-nav")){$("html").removeClass("show-nav").addClass("hide-nav");$(".webplate-inner").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){$(".webplate-inner").css("position")=="fixed"&&$(".webplate-inner").css({position:"relative"})})}else{$("html").addClass("show-nav").removeClass("hide-nav");$(".webplate-inner").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){$(".webplate-inner").css("position")=="relative"&&$(".webplate-inner").css({position:"fixed"})})}});$(".navigation-trigger").hasClass("small-show")==0&&$(".navigation-trigger").addClass("small-show");$(".navigation-small a").on("click",function(){$(".navigation-small a.active").removeClass("active");$(this).addClass("active");$("html").removeClass("show-nav").addClass("hide-nav")})};jQuery.web_window_type=function(){$.web_window_type_execute();$(window).resize(function(){$.web_window_type_execute()})};jQuery.web_window_type_execute=function(){$("html.no-touch.show-nav").removeClass("show-nav").addClass("hide-nav");$(".webplate-inner").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){$(".webplate-inner").css("position")=="fixed"&&$(".webplate-inner").css({position:"relative"})});if($(window).width()<=700){$("html").addClass("web-small-view");$("html").removeClass("web-large-view")}else{$("html").removeClass("web-small-view");$("html").addClass("web-large-view")}}}).wait(function(){(function(e,t,n,r){"use strict";function u(t,n){this.options=e.extend({},o,n);this._defaults=o;this._name=i;this.$element=e(t);this.init()}var i="menuButton",s=".button-dropdown",o={propertyName:"value"};u.prototype={constructor:u,init:function(){this.toggle()},toggle:function(e,t){this.$element.data("dropdown")==="show"?this.hideMenu():this.showMenu()},showMenu:function(){this.$element.data("dropdown","show");this.$element.find("ul").show();if(this.$overlay)this.$overlay.show();else{this.$overlay=e('<div class="button-overlay"></div>');this.$element.append(this.$overlay)}},hideMenu:function(){this.$element.data("dropdown","hide");this.$element.find("ul").hide();this.$overlay.hide()}};e.fn[i]=function(t){return this.each(function(){e.data(this,"plugin_"+i)?e.data(this,"plugin_"+i).toggle():e.data(this,"plugin_"+i,new u(this,t))})};e(n).on("click","[data-buttons=dropdown]",function(t){var n=e(t.currentTarget);n.menuButton()});e(n).on("click","[data-buttons=dropdown] > a",function(e){e.preventDefault()})})(jQuery,window,document)}).wait(function(){$(document).ready(function(){$("input").iCheck({checkboxClass:"icheckbox_square-blue",radioClass:"iradio_square-blue",increaseArea:"20%"})})}).wait(function(){$("head").append('<link rel="stylesheet" href="'+$icomoon_path+'style.css" type="text/css" />');$css_extras=$("body").data("css-extras");if($css_extras&&$css_extras.length>0){$split_css_extras=$css_extras.split(",");$.each($split_css_extras,function(e,t){t=jQuery.trim(t);$extension=$.web_get_extension(t);if($extension=="css")$("head").append('<link rel="stylesheet" href="'+$css_path+t+'" type="text/css" />');else if($extension=="less"){$("head").append('<link rel="stylesheet" href="'+$less_path+t+'" type="text/less" />');$is_less=!0}})}}).wait(function(){$is_less==1&&$LAB.script($js_path+"min/webplate-less.min.js")}).wait(function(){$("html").hasClass("touch")&&$LAB.script($js_path+"min/webplate-fastclick.min.js")}).wait(function(){$(document).ready(function(){$("body").wrapInner('<div class="webplate" />');$(".webplate").wrapInner('<div class="webplate-inner" />');$(".webplate").prepend('<div class="webplate-overlay" />');$(".navigation").wrapInner('<div class="navigation-inner" />');$.web_navigation();$.web_window_type();$("html").hasClass("touch")&&FastClick.attach(document.body)})}).wait(function(){$js_extras=$("body").data("js-extras");if($js_extras&&$js_extras.length>0){$split_js_extras=$js_extras.split(",");$.each($split_js_extras,function(e,t){t=jQuery.trim(t);$extension=$.web_get_extension(t);$extension=="js"&&$LAB.script($js_path+t)})}}).wait(function(){$("body").show()});