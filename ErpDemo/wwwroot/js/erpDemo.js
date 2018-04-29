/*! AdminLTE app.js
* ================
* Main JS application file for AdminLTE v2. This file
* should be included in all pages. It controls some layout
* options and implements exclusive AdminLTE plugins.
*
* @Author  Almsaeed Studio
* @Support <https://www.almsaeedstudio.com>
* @Email   <abdullah@almsaeedstudio.com>
* @version 2.4.2
* @repository git://github.com/almasaeed2010/AdminLTE.git
* @license MIT <http://opensource.org/licenses/MIT>
*/
if(typeof jQuery=="undefined")throw new Error("AdminLTE requires jQuery");+function(n){"use strict";function u(r){return this.each(function(){var f=n(this),u=f.data(i),o;if(u||(o=n.extend({},e,f.data(),typeof r=="object"&&r),f.data(i,u=new t(f,o))),typeof u=="string"){if(typeof u[r]=="undefined")throw new Error("No method named "+r);u[r]()}})}var i="lte.boxrefresh",e={source:"",params:{},trigger:".refresh-btn",content:".box-body",loadInContent:!0,responseType:"",overlayTemplate:'<div class="overlay"><div class="fa fa-refresh fa-spin"><\/div><\/div>',onLoadStart:function(){},onLoadDone:function(n){return n}},r={data:'[data-widget="box-refresh"]'},t=function(t,i){if(this.element=t,this.options=i,this.$overlay=n(i.overlay),i.source==="")throw new Error("Source url was not defined. Please specify a url in your BoxRefresh source option.");this._setUpListeners();this.load()},f;t.prototype.load=function(){this._addOverlay();this.options.onLoadStart.call(n(this));n.get(this.options.source,this.options.params,function(t){this.options.loadInContent&&n(this.options.content).html(t);this.options.onLoadDone.call(n(this),t);this._removeOverlay()}.bind(this),this.options.responseType!==""&&this.options.responseType)};t.prototype._setUpListeners=function(){n(this.element).on("click",r.trigger,function(n){n&&n.preventDefault();this.load()}.bind(this))};t.prototype._addOverlay=function(){n(this.element).append(this.$overlay)};t.prototype._removeOverlay=function(){n(this.element).remove(this.$overlay)};f=n.fn.boxRefresh;n.fn.boxRefresh=u;n.fn.boxRefresh.Constructor=t;n.fn.boxRefresh.noConflict=function(){return n.fn.boxRefresh=f,this};n(window).on("load",function(){n(r.data).each(function(){u.call(n(this))})})}(jQuery);+function(n){"use strict";function e(t){return this.each(function(){var r=n(this),f=r.data(u),e;if(f||(e=n.extend({},s,r.data(),typeof t=="object"&&t),r.data(u,f=new i(r,e))),typeof t=="string"){if(typeof f[t]=="undefined")throw new Error("No method named "+t);f[t]()}})}var u="lte.boxwidget",s={animationSpeed:500,collapseTrigger:'[data-widget="collapse"]',removeTrigger:'[data-widget="remove"]',collapseIcon:"fa-minus",expandIcon:"fa-plus",removeIcon:"fa-times"},t={data:".box",collapsed:".collapsed-box",header:".box-header",body:".box-body",footer:".box-footer",tools:".box-tools"},f={collapsed:"collapsed-box"},r={collapsed:"collapsed.boxwidget",expanded:"expanded.boxwidget",removed:"removed.boxwidget"},i=function(n,t){this.element=n;this.options=t;this._setUpListeners()},o;i.prototype.toggle=function(){var i=!n(this.element).is(t.collapsed);i?this.collapse():this.expand()};i.prototype.expand=function(){var u=n.Event(r.expanded),e=this.options.collapseIcon,i=this.options.expandIcon;n(this.element).removeClass(f.collapsed);n(this.element).children(t.header+", "+t.body+", "+t.footer).children(t.tools).find("."+i).removeClass(i).addClass(e);n(this.element).children(t.body+", "+t.footer).slideDown(this.options.animationSpeed,function(){n(this.element).trigger(u)}.bind(this))};i.prototype.collapse=function(){var u=n.Event(r.collapsed),i=this.options.collapseIcon,e=this.options.expandIcon;n(this.element).children(t.header+", "+t.body+", "+t.footer).children(t.tools).find("."+i).removeClass(i).addClass(e);n(this.element).children(t.body+", "+t.footer).slideUp(this.options.animationSpeed,function(){n(this.element).addClass(f.collapsed);n(this.element).trigger(u)}.bind(this))};i.prototype.remove=function(){var t=n.Event(r.removed);n(this.element).slideUp(this.options.animationSpeed,function(){n(this.element).trigger(t);n(this.element).remove()}.bind(this))};i.prototype._setUpListeners=function(){var t=this;n(this.element).on("click",this.options.collapseTrigger,function(i){return i&&i.preventDefault(),t.toggle(n(this)),!1});n(this.element).on("click",this.options.removeTrigger,function(i){return i&&i.preventDefault(),t.remove(n(this)),!1})};o=n.fn.boxWidget;n.fn.boxWidget=e;n.fn.boxWidget.Constructor=i;n.fn.boxWidget.noConflict=function(){return n.fn.boxWidget=o,this};n(window).on("load",function(){n(t.data).each(function(){e.call(n(this))})})}(jQuery);+function(n){"use strict";function e(t){return this.each(function(){var r=n(this),f=r.data(u),e;f||(e=n.extend({},s,r.data(),typeof t=="object"&&t),r.data(u,f=new i(r,e)));typeof t=="string"&&f.toggle()})}var u="lte.controlsidebar",s={slide:!0},t={sidebar:".control-sidebar",data:'[data-toggle="control-sidebar"]',open:".control-sidebar-open",bg:".control-sidebar-bg",wrapper:".wrapper",content:".content-wrapper",boxed:".layout-boxed"},r={open:"control-sidebar-open",fixed:"fixed"},f={collapsed:"collapsed.controlsidebar",expanded:"expanded.controlsidebar"},i=function(n,t){this.element=n;this.options=t;this.hasBindedResize=!1;this.init()},o;i.prototype.init=function(){if(!n(this.element).is(t.data))n(this).on("click",this.toggle);this.fix();n(window).resize(function(){this.fix()}.bind(this))};i.prototype.toggle=function(i){i&&i.preventDefault();this.fix();n(t.sidebar).is(t.open)||n("body").is(t.open)?this.collapse():this.expand()};i.prototype.expand=function(){this.options.slide?n(t.sidebar).addClass(r.open):n("body").addClass(r.open);n(this.element).trigger(n.Event(f.expanded))};i.prototype.collapse=function(){n("body, "+t.sidebar).removeClass(r.open);n(this.element).trigger(n.Event(f.collapsed))};i.prototype.fix=function(){n("body").is(t.boxed)&&this._fixForBoxed(n(t.bg))};i.prototype._fixForBoxed=function(i){i.css({position:"absolute",height:n(t.wrapper).height()})};o=n.fn.controlSidebar;n.fn.controlSidebar=e;n.fn.controlSidebar.Constructor=i;n.fn.controlSidebar.noConflict=function(){return n.fn.controlSidebar=o,this};n(document).on("click",t.data,function(t){t&&t.preventDefault();e.call(n(this),"toggle")})}(jQuery);+function(n){"use strict";function u(r){return this.each(function(){var u=n(this),f=u.data(i);f||u.data(i,f=new t(u));typeof r=="string"&&f.toggle(u)})}var i="lte.directchat",r={data:'[data-widget="chat-pane-toggle"]',box:".direct-chat"},e={open:"direct-chat-contacts-open"},t=function(n){this.element=n},f;t.prototype.toggle=function(n){n.parents(r.box).first().toggleClass(e.open)};f=n.fn.directChat;n.fn.directChat=u;n.fn.directChat.Constructor=t;n.fn.directChat.noConflict=function(){return n.fn.directChat=f,this};n(document).on("click",r.data,function(t){t&&t.preventDefault();u.call(n(this),"toggle")})}(jQuery);+function(n){"use strict";function f(t){return this.each(function(){var f=n(this),r=f.data(u),e;if(r||(e=n.extend({},o,f.data(),typeof t=="object"&&t),f.data(u,r=new i(e))),typeof t=="string"){if(typeof r[t]=="undefined")throw new Error("No method named "+t);r[t]()}})}var u="lte.layout",o={slimscroll:!0,resetHeight:!0},t={wrapper:".wrapper",contentWrapper:".content-wrapper",layoutBoxed:".layout-boxed",mainFooter:".main-footer",mainHeader:".main-header",sidebar:".sidebar",controlSidebar:".control-sidebar",fixed:".fixed",sidebarMenu:".sidebar-menu",logo:".main-header .logo"},r={fixed:"fixed",holdTransition:"hold-transition"},i=function(n){this.options=n;this.bindedResize=!1;this.activate()},e;i.prototype.activate=function(){this.fix();this.fixSidebar();n("body").removeClass(r.holdTransition);this.options.resetHeight&&n("body, html, "+t.wrapper).css({height:"auto","min-height":"100%"});this.bindedResize||(n(window).resize(function(){this.fix();this.fixSidebar();n(t.logo+", "+t.sidebar).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){this.fix();this.fixSidebar()}.bind(this))}.bind(this)),this.bindedResize=!0);n(t.sidebarMenu).on("expanded.tree",function(){this.fix();this.fixSidebar()}.bind(this));n(t.sidebarMenu).on("collapsed.tree",function(){this.fix();this.fixSidebar()}.bind(this))};i.prototype.fix=function(){var e,u;n(t.layoutBoxed+" > "+t.wrapper).css("overflow","hidden");var o=n(t.mainFooter).outerHeight()||0,s=n(t.mainHeader).outerHeight()+o,i=n(window).height(),f=n(t.sidebar).height()||0;n("body").hasClass(r.fixed)?n(t.contentWrapper).css("min-height",i-o):(i>=f?(n(t.contentWrapper).css("min-height",i-s),e=i-s):(n(t.contentWrapper).css("min-height",f),e=f),u=n(t.controlSidebar),typeof u!="undefined"&&u.height()>e&&n(t.contentWrapper).css("min-height",u.height()))};i.prototype.fixSidebar=function(){if(!n("body").hasClass(r.fixed)){typeof n.fn.slimScroll!="undefined"&&n(t.sidebar).slimScroll({destroy:!0}).height("auto");return}this.options.slimscroll&&typeof n.fn.slimScroll!="undefined"&&n(t.sidebar).slimScroll({height:n(window).height()-n(t.mainHeader).height()+"px"})};e=n.fn.layout;n.fn.layout=f;n.fn.layout.Constuctor=i;n.fn.layout.noConflict=function(){return n.fn.layout=e,this};n(window).on("load",function(){f.call(n("body"))})}(jQuery);+function(n){"use strict";function f(t){return this.each(function(){var i=n(this),u=i.data(e),f;u||(f=n.extend({},s,i.data(),typeof t=="object"&&t),i.data(e,u=new r(f)));t==="toggle"&&u.toggle()})}var e="lte.pushmenu",s={collapseScreenSize:767,expandOnHover:!1,expandTransitionDelay:200},i={collapsed:".sidebar-collapse",open:".sidebar-open",mainSidebar:".main-sidebar",contentWrapper:".content-wrapper",searchInput:".sidebar-form .form-control",button:'[data-toggle="push-menu"]',mini:".sidebar-mini",expanded:".sidebar-expanded-on-hover",layoutFixed:".fixed"},t={collapsed:"sidebar-collapse",open:"sidebar-open",mini:"sidebar-mini",expanded:"sidebar-expanded-on-hover",expandFeature:"sidebar-mini-expand-feature",layoutFixed:"fixed"},u={expanded:"expanded.pushMenu",collapsed:"collapsed.pushMenu"},r=function(n){this.options=n;this.init()},o;r.prototype.init=function(){(this.options.expandOnHover||n("body").is(i.mini+i.layoutFixed))&&(this.expandOnHover(),n("body").addClass(t.expandFeature));n(i.contentWrapper).click(function(){n(window).width()<=this.options.collapseScreenSize&&n("body").hasClass(t.open)&&this.close()}.bind(this));n(i.searchInput).click(function(n){n.stopPropagation()})};r.prototype.toggle=function(){var r=n(window).width(),i=!n("body").hasClass(t.collapsed);r<=this.options.collapseScreenSize&&(i=n("body").hasClass(t.open));i?this.close():this.open()};r.prototype.open=function(){var i=n(window).width();i>this.options.collapseScreenSize?n("body").removeClass(t.collapsed).trigger(n.Event(u.expanded)):n("body").addClass(t.open).trigger(n.Event(u.expanded))};r.prototype.close=function(){var i=n(window).width();i>this.options.collapseScreenSize?n("body").addClass(t.collapsed).trigger(n.Event(u.collapsed)):n("body").removeClass(t.open+" "+t.collapsed).trigger(n.Event(u.collapsed))};r.prototype.expandOnHover=function(){n(i.mainSidebar).hover(function(){n("body").is(i.mini+i.collapsed)&&n(window).width()>this.options.collapseScreenSize&&this.expand()}.bind(this),function(){n("body").is(i.expanded)&&this.collapse()}.bind(this))};r.prototype.expand=function(){setTimeout(function(){n("body").removeClass(t.collapsed).addClass(t.expanded)},this.options.expandTransitionDelay)};r.prototype.collapse=function(){setTimeout(function(){n("body").removeClass(t.expanded).addClass(t.collapsed)},this.options.expandTransitionDelay)};o=n.fn.pushMenu;n.fn.pushMenu=f;n.fn.pushMenu.Constructor=r;n.fn.pushMenu.noConflict=function(){return n.fn.pushMenu=o,this};n(document).on("click",i.button,function(t){t.preventDefault();f.call(n(this),"toggle")});n(window).on("load",function(){f.call(n(i.button))})}(jQuery);+function(n){"use strict";function u(r){return this.each(function(){var f=n(this),u=f.data(i),o;if(u||(o=n.extend({},e,f.data(),typeof r=="object"&&r),f.data(i,u=new t(f,o))),typeof u=="string"){if(typeof u[r]=="undefined")throw new Error("No method named "+r);u[r]()}})}var i="lte.todolist",e={onCheck:function(n){return n},onUnCheck:function(n){return n}},r={data:'[data-widget="todo-list"]'},o={done:"done"},t=function(n,t){this.element=n;this.options=t;this._setUpListeners()},f;t.prototype.toggle=function(n){if(n.parents(r.li).first().toggleClass(o.done),!n.prop("checked")){this.unCheck(n);return}this.check(n)};t.prototype.check=function(n){this.options.onCheck.call(n)};t.prototype.unCheck=function(n){this.options.onUnCheck.call(n)};t.prototype._setUpListeners=function(){var t=this;n(this.element).on("change ifChanged","input:checkbox",function(){t.toggle(n(this))})};f=n.fn.todoList;n.fn.todoList=u;n.fn.todoList.Constructor=t;n.fn.todoList.noConflict=function(){return n.fn.todoList=f,this};n(window).on("load",function(){n(r.data).each(function(){u.call(n(this))})})}(jQuery);+function(n){"use strict";function e(t){return this.each(function(){var i=n(this),e=i.data(u),f;e||(f=n.extend({},s,i.data(),typeof t=="object"&&t),i.data(u,new r(i,f)))})}var u="lte.tree",s={animationSpeed:500,accordion:!0,followLink:!1,trigger:".treeview a"},t={tree:".tree",treeview:".treeview",treeviewMenu:".treeview-menu",open:".menu-open, .active",li:"li",data:'[data-widget="tree"]',active:".active"},i={open:"menu-open",tree:"tree"},f={collapsed:"collapsed.tree",expanded:"expanded.tree"},r=function(r,u){this.element=r;this.options=u;n(this.element).addClass(i.tree);n(t.treeview+t.active,this.element).addClass(i.open);this._setUpListeners()},o;r.prototype.toggle=function(n,r){var f=n.next(t.treeviewMenu),u=n.parent(),e=u.hasClass(i.open);u.is(t.treeview)&&(this.options.followLink&&n.attr("href")!=="#"||r.preventDefault(),e?this.collapse(f,u):this.expand(f,u))};r.prototype.expand=function(r,u){var s=n.Event(f.expanded),e,o;this.options.accordion&&(e=u.siblings(t.open),o=e.children(t.treeviewMenu),this.collapse(o,e));u.addClass(i.open);r.slideDown(this.options.animationSpeed,function(){n(this.element).trigger(s)}.bind(this))};r.prototype.collapse=function(r,u){var e=n.Event(f.collapsed);r.find(t.open).removeClass(i.open);u.removeClass(i.open);r.slideUp(this.options.animationSpeed,function(){r.find(t.open+" > "+t.treeview).slideUp();n(this.element).trigger(e)}.bind(this))};r.prototype._setUpListeners=function(){var t=this;n(this.element).on("click",this.options.trigger,function(i){t.toggle(n(this),i)})};o=n.fn.tree;n.fn.tree=e;n.fn.tree.Constructor=r;n.fn.tree.noConflict=function(){return n.fn.tree=o,this};n(window).on("load",function(){n(t.data).each(function(){e.call(n(this))})})}(jQuery);
/*!
 * Datepicker for Bootstrap v1.8.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
(function(n){typeof define=="function"&&define.amd?define(["jquery"],n):typeof exports=="object"?n(require("jquery")):n(jQuery)})(function(n,t){function f(){return new Date(Date.UTC.apply(Date,arguments))}function s(){var n=new Date;return f(n.getFullYear(),n.getMonth(),n.getDate())}function l(n,t){return n.getUTCFullYear()===t.getUTCFullYear()&&n.getUTCMonth()===t.getUTCMonth()&&n.getUTCDate()===t.getUTCDate()}function h(i,r){return function(){return r!==t&&n.fn.datepicker.deprecated(r),this[i].apply(this,arguments)}}function p(n){return n&&!isNaN(n.getTime())}function w(t,i){function s(n,t){return t.toLowerCase()}var u=n(t).data(),f={},e,o=new RegExp("^"+i.toLowerCase()+"([A-Z])"),r;i=new RegExp("^"+i.toLowerCase());for(r in u)i.test(r)&&(e=r.replace(o,s),f[e]=u[r]);return f}function b(t){var u={},i;if(r[t]||(t=t.split("-")[0],r[t]))return i=r[t],n.each(y,function(n,t){t in i&&(u[t]=i[t])}),u}var a=function(){var t={get:function(n){return this.slice(n)[0]},contains:function(n){for(var i=n&&n.valueOf(),t=0,r=this.length;t<r;t++)if(0<=this[t].valueOf()-i&&this[t].valueOf()-i<864e5)return t;return-1},remove:function(n){this.splice(n,1)},replace:function(t){t&&(n.isArray(t)||(t=[t]),this.clear(),this.push.apply(this,t))},clear:function(){this.length=0},copy:function(){var n=new a;return n.replace(this),n}};return function(){var i=[];return i.push.apply(i,arguments),n.extend(i,t),i}}(),u=function(t,r){n.data(t,"datepicker",this);this._process_options(r);this.dates=new a;this.viewDate=this.o.defaultViewDate;this.focusDate=null;this.element=n(t);this.isInput=this.element.is("input");this.inputField=this.isInput?this.element:this.element.find("input");this.component=this.element.hasClass("date")?this.element.find(".add-on, .input-group-addon, .btn"):!1;this.component&&this.component.length===0&&(this.component=!1);this.isInline=!this.component&&this.element.is("div");this.picker=n(i.template);this._check_template(this.o.templates.leftArrow)&&this.picker.find(".prev").html(this.o.templates.leftArrow);this._check_template(this.o.templates.rightArrow)&&this.picker.find(".next").html(this.o.templates.rightArrow);this._buildEvents();this._attachEvents();this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu");this.o.rtl&&this.picker.addClass("datepicker-rtl");this.o.calendarWeeks&&this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(n,t){return Number(t)+1});this._process_options({startDate:this._o.startDate,endDate:this._o.endDate,daysOfWeekDisabled:this.o.daysOfWeekDisabled,daysOfWeekHighlighted:this.o.daysOfWeekHighlighted,datesDisabled:this.o.datesDisabled});this._allow_update=!1;this.setViewMode(this.o.startView);this._allow_update=!0;this.fillDow();this.fillMonths();this.update();this.isInline&&this.show()},c,v,o,e,y,r,i;u.prototype={constructor:u,_resolveViewName:function(t){return n.each(i.viewModes,function(i,r){if(t===i||n.inArray(t,r.names)!==-1)return t=i,!1}),t},_resolveDaysOfWeek:function(t){return n.isArray(t)||(t=t.split(/[,\s]*/)),n.map(t,Number)},_check_template:function(i){try{if(i===t||i==="")return!1;if((i.match(/[<>]/g)||[]).length<=0)return!0;var r=n(i);return r.length>0}catch(u){return!1}},_process_options:function(t){var u,h,l,o,c;if(this._o=n.extend({},this._o,t),u=this.o=n.extend({},this._o),h=u.language,r[h]||(h=h.split("-")[0],r[h]||(h=e.language)),u.language=h,u.startView=this._resolveViewName(u.startView),u.minViewMode=this._resolveViewName(u.minViewMode),u.maxViewMode=this._resolveViewName(u.maxViewMode),u.startView=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,u.startView)),u.multidate!==!0&&(u.multidate=Number(u.multidate)||!1,u.multidate!==!1&&(u.multidate=Math.max(0,u.multidate))),u.multidateSeparator=String(u.multidateSeparator),u.weekStart%=7,u.weekEnd=(u.weekStart+6)%7,l=i.parseFormat(u.format),u.startDate!==-Infinity&&(u.startDate=u.startDate?u.startDate instanceof Date?this._local_to_utc(this._zero_time(u.startDate)):i.parseDate(u.startDate,l,u.language,u.assumeNearbyYear):-Infinity),u.endDate!==Infinity&&(u.endDate=u.endDate?u.endDate instanceof Date?this._local_to_utc(this._zero_time(u.endDate)):i.parseDate(u.endDate,l,u.language,u.assumeNearbyYear):Infinity),u.daysOfWeekDisabled=this._resolveDaysOfWeek(u.daysOfWeekDisabled||[]),u.daysOfWeekHighlighted=this._resolveDaysOfWeek(u.daysOfWeekHighlighted||[]),u.datesDisabled=u.datesDisabled||[],n.isArray(u.datesDisabled)||(u.datesDisabled=u.datesDisabled.split(",")),u.datesDisabled=n.map(u.datesDisabled,function(n){return i.parseDate(n,l,u.language,u.assumeNearbyYear)}),o=String(u.orientation).toLowerCase().split(/\s+/g),c=u.orientation.toLowerCase(),o=n.grep(o,function(n){return/^auto|left|right|top|bottom$/.test(n)}),u.orientation={x:"auto",y:"auto"},c&&c!=="auto")if(o.length===1)switch(o[0]){case"top":case"bottom":u.orientation.y=o[0];break;case"left":case"right":u.orientation.x=o[0]}else c=n.grep(o,function(n){return/^left|right$/.test(n)}),u.orientation.x=c[0]||"auto",c=n.grep(o,function(n){return/^top|bottom$/.test(n)}),u.orientation.y=c[0]||"auto";if(u.defaultViewDate instanceof Date||typeof u.defaultViewDate=="string")u.defaultViewDate=i.parseDate(u.defaultViewDate,l,u.language,u.assumeNearbyYear);else if(u.defaultViewDate){var a=u.defaultViewDate.year||(new Date).getFullYear(),v=u.defaultViewDate.month||0,y=u.defaultViewDate.day||1;u.defaultViewDate=f(a,v,y)}else u.defaultViewDate=s()},_events:[],_secondaryEvents:[],_applyEvents:function(n){for(var i=0,f,r,u;i<n.length;i++){f=n[i][0];n[i].length===2?(r=t,u=n[i][1]):n[i].length===3&&(r=n[i][1],u=n[i][2]);f.on(u,r)}},_unapplyEvents:function(n){for(var i=0,f,r,u;i<n.length;i++)f=n[i][0],n[i].length===2?(u=t,r=n[i][1]):n[i].length===3&&(u=n[i][1],r=n[i][2]),f.off(r,u)},_buildEvents:function(){var t={keyup:n.proxy(function(t){n.inArray(t.keyCode,[27,37,39,38,40,32,13,9])===-1&&this.update()},this),keydown:n.proxy(this.keydown,this),paste:n.proxy(this.paste,this)};this.o.showOnFocus===!0&&(t.focus=n.proxy(this.show,this));this._events=this.isInput?[[this.element,t]]:this.component&&this.inputField.length?[[this.inputField,t],[this.component,{click:n.proxy(this.show,this)}]]:[[this.element,{click:n.proxy(this.show,this),keydown:n.proxy(this.keydown,this)}]];this._events.push([this.element,"*",{blur:n.proxy(function(n){this._focused_from=n.target},this)}],[this.element,{blur:n.proxy(function(n){this._focused_from=n.target},this)}]);this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":n.proxy(function(n){this.update(n.date)},this)}]);this._secondaryEvents=[[this.picker,{click:n.proxy(this.click,this)}],[this.picker,".prev, .next",{click:n.proxy(this.navArrowsClick,this)}],[this.picker,".day:not(.disabled)",{click:n.proxy(this.dayCellClick,this)}],[n(window),{resize:n.proxy(this.place,this)}],[n(document),{"mousedown touchstart":n.proxy(function(n){this.element.is(n.target)||this.element.find(n.target).length||this.picker.is(n.target)||this.picker.find(n.target).length||this.isInline||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents();this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents();this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(t,r){var u=r||this.dates.get(-1),f=this._utc_to_local(u);this.element.trigger({type:t,date:f,viewMode:this.viewMode,dates:n.map(this.dates,this._utc_to_local),format:n.proxy(function(n,t){arguments.length===0?(n=this.dates.length-1,t=this.o.format):typeof n=="string"&&(t=n,n=this.dates.length-1);t=t||this.o.format;var r=this.dates.get(n);return i.formatDate(r,t,this.o.language)},this)})},show:function(){if(!this.inputField.prop("disabled")&&(!this.inputField.prop("readonly")||this.o.enableOnReadonly!==!1))return this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&n(this.element).blur(),this},hide:function(){return this.isInline||!this.picker.is(":visible")?this:(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.setViewMode(this.o.startView),this.o.forceParse&&this.inputField.val()&&this.setValue(),this._trigger("hide"),this)},destroy:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(t){var i;if(t.originalEvent.clipboardData&&t.originalEvent.clipboardData.types&&n.inArray("text/plain",t.originalEvent.clipboardData.types)!==-1)i=t.originalEvent.clipboardData.getData("text/plain");else if(window.clipboardData)i=window.clipboardData.getData("Text");else return;this.setDate(i);this.update();t.preventDefault()},_utc_to_local:function(n){if(!n)return n;var t=new Date(n.getTime()+n.getTimezoneOffset()*6e4);return t.getTimezoneOffset()!==n.getTimezoneOffset()&&(t=new Date(n.getTime()+t.getTimezoneOffset()*6e4)),t},_local_to_utc:function(n){return n&&new Date(n.getTime()-n.getTimezoneOffset()*6e4)},_zero_time:function(n){return n&&new Date(n.getFullYear(),n.getMonth(),n.getDate())},_zero_utc_time:function(n){return n&&f(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate())},getDates:function(){return n.map(this.dates,this._utc_to_local)},getUTCDates:function(){return n.map(this.dates,function(n){return new Date(n)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var n=this.dates.get(-1);return n!==t?new Date(n):null},clearDates:function(){this.inputField.val("");this.update();this._trigger("changeDate");this.o.autoclose&&this.hide()},setDates:function(){var t=n.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,t),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var t=n.isArray(arguments[0])?arguments[0]:arguments;return this.setDates.apply(this,n.map(t,this._utc_to_local)),this},setDate:h("setDates"),setUTCDate:h("setUTCDates"),remove:h("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),setValue:function(){var n=this.getFormattedDate();return this.inputField.val(n),this},getFormattedDate:function(r){r===t&&(r=this.o.format);var u=this.o.language;return n.map(this.dates,function(n){return i.formatDate(n,r,u)}).join(this.o.multidateSeparator)},getStartDate:function(){return this.o.startDate},setStartDate:function(n){return this._process_options({startDate:n}),this.update(),this.updateNavArrows(),this},getEndDate:function(){return this.o.endDate},setEndDate:function(n){return this._process_options({endDate:n}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(n){return this._process_options({daysOfWeekDisabled:n}),this.update(),this},setDaysOfWeekHighlighted:function(n){return this._process_options({daysOfWeekHighlighted:n}),this.update(),this},setDatesDisabled:function(n){return this._process_options({datesDisabled:n}),this.update(),this},place:function(){var r,y,p;if(this.isInline)return this;var f=this.picker.outerWidth(),s=this.picker.outerHeight(),e=n(this.o.container),h=e.width(),c=this.o.container==="body"?n(document).scrollTop():e.scrollTop(),l=e.offset(),a=[0];this.element.parents().each(function(){var t=n(this).css("z-index");t!=="auto"&&Number(t)!==0&&a.push(Number(t))});var v=Math.max.apply(Math,a)+this.o.zIndexOffset,u=this.component?this.component.parent().offset():this.element.offset(),w=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),o=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),t=u.left-l.left,i=u.top-l.top;return this.o.container!=="body"&&(i+=c),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),this.o.orientation.x!=="auto"?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),this.o.orientation.x==="right"&&(t-=f-o)):u.left<0?(this.picker.addClass("datepicker-orient-left"),t-=u.left-10):t+f>h?(this.picker.addClass("datepicker-orient-right"),t+=o-f):this.o.rtl?this.picker.addClass("datepicker-orient-right"):this.picker.addClass("datepicker-orient-left"),r=this.o.orientation.y,r==="auto"&&(y=-c+i-s,r=y<0?"bottom":"top"),this.picker.addClass("datepicker-orient-"+r),r==="top"?i-=s+parseInt(this.picker.css("padding-top")):i+=w,this.o.rtl?(p=h-(t+o),this.picker.css({top:i,right:p,zIndex:v})):this.picker.css({top:i,left:t,zIndex:v}),this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var u=this.dates.copy(),t=[],r=!1;return arguments.length?(n.each(arguments,n.proxy(function(n,i){i instanceof Date&&(i=this._local_to_utc(i));t.push(i)},this)),r=!0):(t=this.isInput?this.element.val():this.element.data("date")||this.inputField.val(),t=t&&this.o.multidate?t.split(this.o.multidateSeparator):[t],delete this.element.data().date),t=n.map(t,n.proxy(function(n){return i.parseDate(n,this.o.format,this.o.language,this.o.assumeNearbyYear)},this)),t=n.grep(t,n.proxy(function(n){return!this.dateWithinRange(n)||!n},this),!0),this.dates.replace(t),this.o.updateViewDate&&(this.viewDate=this.dates.length?new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?new Date(this.o.startDate):this.viewDate>this.o.endDate?new Date(this.o.endDate):this.o.defaultViewDate),r?(this.setValue(),this.element.change()):this.dates.length&&String(u)!==String(this.dates)&&r&&(this._trigger("changeDate"),this.element.change()),!this.dates.length&&u.length&&(this._trigger("clearDate"),this.element.change()),this.fill(),this},fillDow:function(){if(this.o.showWeekDays){var i=this.o.weekStart,t="<tr>";for(this.o.calendarWeeks&&(t+='<th class="cw">&#160;<\/th>');i<this.o.weekStart+7;)t+='<th class="dow',n.inArray(i,this.o.daysOfWeekDisabled)!==-1&&(t+=" disabled"),t+='">'+r[this.o.language].daysMin[i++%7]+"<\/th>";t+="<\/tr>";this.picker.find(".datepicker-days thead").append(t)}},fillMonths:function(){for(var t=this._utc_to_local(this.viewDate),i="",u,n=0;n<12;n++)u=t&&t.getMonth()===n?" focused":"",i+='<span class="month'+u+'">'+r[this.o.language].monthsShort[n]+"<\/span>";this.picker.find(".datepicker-months td").html(i)},setRange:function(t){t&&t.length?this.range=n.map(t,function(n){return n.valueOf()}):delete this.range;this.fill()},getClassNames:function(t){var i=[],r=this.viewDate.getUTCFullYear(),u=this.viewDate.getUTCMonth(),f=s();return t.getUTCFullYear()<r||t.getUTCFullYear()===r&&t.getUTCMonth()<u?i.push("old"):(t.getUTCFullYear()>r||t.getUTCFullYear()===r&&t.getUTCMonth()>u)&&i.push("new"),this.focusDate&&t.valueOf()===this.focusDate.valueOf()&&i.push("focused"),this.o.todayHighlight&&l(t,f)&&i.push("today"),this.dates.contains(t)!==-1&&i.push("active"),this.dateWithinRange(t)||i.push("disabled"),this.dateIsDisabled(t)&&i.push("disabled","disabled-date"),n.inArray(t.getUTCDay(),this.o.daysOfWeekHighlighted)!==-1&&i.push("highlighted"),this.range&&(t>this.range[0]&&t<this.range[this.range.length-1]&&i.push("range"),n.inArray(t.valueOf(),this.range)!==-1&&i.push("selected"),t.valueOf()===this.range[0]&&i.push("range-start"),t.valueOf()===this.range[this.range.length-1]&&i.push("range-end")),i},_fill_yearsView:function(i,r,u,f,e,o,s){for(var w="",c=u/10,b=this.picker.find(i),v=Math.floor(f/u)*u,p=v+c*9,k=Math.floor(this.viewDate.getFullYear()/c)*c,d=n.map(this.dates,function(n){return Math.floor(n.getUTCFullYear()/c)*c}),l,y,h,a=v-c;a<=p+c;a+=c)l=[r],y=null,a===v-c?l.push("old"):a===p+c&&l.push("new"),n.inArray(a,d)!==-1&&l.push("active"),(a<e||a>o)&&l.push("disabled"),a===k&&l.push("focused"),s!==n.noop&&(h=s(new Date(a,0,1)),h===t?h={}:typeof h=="boolean"?h={enabled:h}:typeof h=="string"&&(h={classes:h}),h.enabled===!1&&l.push("disabled"),h.classes&&(l=l.concat(h.classes.split(/\s+/))),h.tooltip&&(y=h.tooltip)),w+='<span class="'+l.join(" ")+'"'+(y?' title="'+y+'"':"")+">"+a+"<\/span>";b.find(".datepicker-switch").text(v+"-"+p);b.find("td").html(w)},fill:function(){var w=new Date(this.viewDate),o=w.getUTCFullYear(),d=w.getUTCMonth(),a=this.o.startDate!==-Infinity?this.o.startDate.getUTCFullYear():-Infinity,ut=this.o.startDate!==-Infinity?this.o.startDate.getUTCMonth():-Infinity,v=this.o.endDate!==Infinity?this.o.endDate.getUTCFullYear():Infinity,ft=this.o.endDate!==Infinity?this.o.endDate.getUTCMonth():Infinity,et=r[this.o.language].today||r.en.today||"",ot=r[this.o.language].clear||r.en.clear||"",st=r[this.o.language].titleFormat||r.en.titleFormat,y,u,e,g,h,c,p,s,k,it,l,rt;if(!isNaN(o)&&!isNaN(d)){for(this.picker.find(".datepicker-days .datepicker-switch").text(i.formatDate(w,st,this.o.language)),this.picker.find("tfoot .today").text(et).css("display",this.o.todayBtn===!0||this.o.todayBtn==="linked"?"table-cell":"none"),this.picker.find("tfoot .clear").text(ot).css("display",this.o.clearBtn===!0?"table-cell":"none"),this.picker.find("thead .datepicker-title").text(this.o.title).css("display",typeof this.o.title=="string"&&this.o.title!==""?"table-cell":"none"),this.updateNavArrows(),this.fillMonths(),e=f(o,d,0),g=e.getUTCDate(),e.setUTCDate(g-(e.getUTCDay()-this.o.weekStart+7)%7),h=new Date(e),e.getUTCFullYear()<100&&h.setUTCFullYear(e.getUTCFullYear()),h.setUTCDate(h.getUTCDate()+42),h=h.valueOf(),c=[];e.valueOf()<h;){if(p=e.getUTCDay(),p===this.o.weekStart&&(c.push("<tr>"),this.o.calendarWeeks)){var nt=new Date(+e+(this.o.weekStart-p-7)%7*864e5),tt=new Date(Number(nt)+(11-nt.getUTCDay())%7*864e5),b=new Date(Number(b=f(tt.getUTCFullYear(),0,1))+(11-b.getUTCDay())%7*864e5),ht=(tt-b)/6048e5+1;c.push('<td class="cw">'+ht+"<\/td>")}s=this.getClassNames(e);s.push("day");k=e.getUTCDate();this.o.beforeShowDay!==n.noop&&(u=this.o.beforeShowDay(this._utc_to_local(e)),u===t?u={}:typeof u=="boolean"?u={enabled:u}:typeof u=="string"&&(u={classes:u}),u.enabled===!1&&s.push("disabled"),u.classes&&(s=s.concat(u.classes.split(/\s+/))),u.tooltip&&(y=u.tooltip),u.content&&(k=u.content));s=n.isFunction(n.uniqueSort)?n.uniqueSort(s):n.unique(s);c.push('<td class="'+s.join(" ")+'"'+(y?' title="'+y+'"':"")+' data-date="'+e.getTime().toString()+'">'+k+"<\/td>");y=null;p===this.o.weekEnd&&c.push("<\/tr>");e.setUTCDate(e.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").html(c.join(""));it=r[this.o.language].monthsTitle||r.en.monthsTitle||"Months";l=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?it:o).end().find("tbody span").removeClass("active");n.each(this.dates,function(n,t){t.getUTCFullYear()===o&&l.eq(t.getUTCMonth()).addClass("active")});(o<a||o>v)&&l.addClass("disabled");o===a&&l.slice(0,ut).addClass("disabled");o===v&&l.slice(ft+1).addClass("disabled");this.o.beforeShowMonth!==n.noop&&(rt=this,n.each(l,function(i,r){var f=new Date(o,i,1),u=rt.o.beforeShowMonth(f);u===t?u={}:typeof u=="boolean"?u={enabled:u}:typeof u=="string"&&(u={classes:u});u.enabled!==!1||n(r).hasClass("disabled")||n(r).addClass("disabled");u.classes&&n(r).addClass(u.classes);u.tooltip&&n(r).prop("title",u.tooltip)}));this._fill_yearsView(".datepicker-years","year",10,o,a,v,this.o.beforeShowYear);this._fill_yearsView(".datepicker-decades","decade",100,o,a,v,this.o.beforeShowDecade);this._fill_yearsView(".datepicker-centuries","century",1e3,o,a,v,this.o.beforeShowCentury)}},updateNavArrows:function(){if(this._allow_update){var u=new Date(this.viewDate),t=u.getUTCFullYear(),f=u.getUTCMonth(),e=this.o.startDate!==-Infinity?this.o.startDate.getUTCFullYear():-Infinity,s=this.o.startDate!==-Infinity?this.o.startDate.getUTCMonth():-Infinity,o=this.o.endDate!==Infinity?this.o.endDate.getUTCFullYear():Infinity,h=this.o.endDate!==Infinity?this.o.endDate.getUTCMonth():Infinity,i,r,n=1;switch(this.viewMode){case 4:n*=10;case 3:n*=10;case 2:n*=10;case 1:i=Math.floor(t/n)*n<e;r=Math.floor(t/n)*n+n>o;break;case 0:i=t<=e&&f<s;r=t>=o&&f>h}this.picker.find(".prev").toggleClass("disabled",i);this.picker.find(".next").toggleClass("disabled",r)}},click:function(t){t.preventDefault();t.stopPropagation();var r,o,u,e;r=n(t.target);r.hasClass("datepicker-switch")&&this.viewMode!==this.o.maxViewMode&&this.setViewMode(this.viewMode+1);r.hasClass("today")&&!r.hasClass("day")&&(this.setViewMode(0),this._setDate(s(),this.o.todayBtn==="linked"?null:"view"));r.hasClass("clear")&&this.clearDates();r.hasClass("disabled")||(r.hasClass("month")||r.hasClass("year")||r.hasClass("decade")||r.hasClass("century"))&&(this.viewDate.setUTCDate(1),o=1,this.viewMode===1?(e=r.parent().find("span").index(r),u=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(e)):(e=0,u=Number(r.text()),this.viewDate.setUTCFullYear(u)),this._trigger(i.viewModes[this.viewMode-1].e,this.viewDate),this.viewMode===this.o.minViewMode?this._setDate(f(u,e,o)):(this.setViewMode(this.viewMode-1),this.fill()));this.picker.is(":visible")&&this._focused_from&&this._focused_from.focus();delete this._focused_from},dayCellClick:function(t){var r=n(t.currentTarget),u=r.data("date"),i=new Date(u);this.o.updateViewDate&&(i.getUTCFullYear()!==this.viewDate.getUTCFullYear()&&this._trigger("changeYear",this.viewDate),i.getUTCMonth()!==this.viewDate.getUTCMonth()&&this._trigger("changeMonth",this.viewDate));this._setDate(i)},navArrowsClick:function(t){var u=n(t.currentTarget),r=u.hasClass("prev")?-1:1;this.viewMode!==0&&(r*=i.viewModes[this.viewMode].navStep*12);this.viewDate=this.moveMonth(this.viewDate,r);this._trigger(i.viewModes[this.viewMode].e,this.viewDate);this.fill()},_toggle_multidate:function(n){var t=this.dates.contains(n);if(n||this.dates.clear(),t!==-1?(this.o.multidate===!0||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(t):this.o.multidate===!1?(this.dates.clear(),this.dates.push(n)):this.dates.push(n),typeof this.o.multidate=="number")while(this.dates.length>this.o.multidate)this.dates.remove(0)},_setDate:function(n,t){t&&t!=="date"||this._toggle_multidate(n&&new Date(n));(!t&&this.o.updateViewDate||t==="view")&&(this.viewDate=n&&new Date(n));this.fill();this.setValue();t&&t==="view"||this._trigger("changeDate");this.inputField.trigger("change");this.o.autoclose&&(!t||t==="date")&&this.hide()},moveDay:function(n,t){var i=new Date(n);return i.setUTCDate(n.getUTCDate()+t),i},moveWeek:function(n,t){return this.moveDay(n,t*7)},moveMonth:function(n,t){var f;if(!p(n))return this.o.defaultViewDate;if(!t)return n;var i=new Date(n.valueOf()),e=i.getUTCDate(),o=i.getUTCMonth(),s=Math.abs(t),r,u;if(t=t>0?1:-1,s===1)u=t===-1?function(){return i.getUTCMonth()===o}:function(){return i.getUTCMonth()!==r},r=o+t,i.setUTCMonth(r),r=(r+12)%12;else{for(f=0;f<s;f++)i=this.moveMonth(i,t);r=i.getUTCMonth();i.setUTCDate(e);u=function(){return r!==i.getUTCMonth()}}while(u())i.setUTCDate(--e),i.setUTCMonth(r);return i},moveYear:function(n,t){return this.moveMonth(n,t*12)},moveAvailableDate:function(n,t,i){do{if(n=this[i](n,t),!this.dateWithinRange(n))return!1;i="moveDay"}while(this.dateIsDisabled(n));return n},weekOfDateIsDisabled:function(t){return n.inArray(t.getUTCDay(),this.o.daysOfWeekDisabled)!==-1},dateIsDisabled:function(t){return this.weekOfDateIsDisabled(t)||n.grep(this.o.datesDisabled,function(n){return l(t,n)}).length>0},dateWithinRange:function(n){return n>=this.o.startDate&&n<=this.o.endDate},keydown:function(n){if(!this.picker.is(":visible")){(n.keyCode===40||n.keyCode===27)&&(this.show(),n.stopPropagation());return}var u=!1,t,i,r=this.focusDate||this.viewDate;switch(n.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide();n.preventDefault();n.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||this.o.daysOfWeekDisabled.length===7)break;t=n.keyCode===37||n.keyCode===38?-1:1;this.viewMode===0?n.ctrlKey?(i=this.moveAvailableDate(r,t,"moveYear"),i&&this._trigger("changeYear",this.viewDate)):n.shiftKey?(i=this.moveAvailableDate(r,t,"moveMonth"),i&&this._trigger("changeMonth",this.viewDate)):n.keyCode===37||n.keyCode===39?i=this.moveAvailableDate(r,t,"moveDay"):this.weekOfDateIsDisabled(r)||(i=this.moveAvailableDate(r,t,"moveWeek")):this.viewMode===1?((n.keyCode===38||n.keyCode===40)&&(t=t*4),i=this.moveAvailableDate(r,t,"moveMonth")):this.viewMode===2&&((n.keyCode===38||n.keyCode===40)&&(t=t*4),i=this.moveAvailableDate(r,t,"moveYear"));i&&(this.focusDate=this.viewDate=i,this.setValue(),this.fill(),n.preventDefault());break;case 13:if(!this.o.forceParse)break;r=this.focusDate||this.dates.get(-1)||this.viewDate;this.o.keyboardNavigation&&(this._toggle_multidate(r),u=!0);this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.setValue();this.fill();this.picker.is(":visible")&&(n.preventDefault(),n.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null;this.viewDate=this.dates.get(-1)||this.viewDate;this.fill();this.hide()}u&&(this.dates.length?this._trigger("changeDate"):this._trigger("clearDate"),this.inputField.trigger("change"))},setViewMode:function(n){this.viewMode=n;this.picker.children("div").hide().filter(".datepicker-"+i.viewModes[this.viewMode].clsName).show();this.updateNavArrows();this._trigger("changeViewMode",new Date(this.viewDate))}};c=function(t,i){n.data(t,"datepicker",this);this.element=n(t);this.inputs=n.map(i.inputs,function(n){return n.jquery?n[0]:n});delete i.inputs;this.keepEmptyValues=i.keepEmptyValues;delete i.keepEmptyValues;o.call(n(this.inputs),i).on("changeDate",n.proxy(this.dateUpdated,this));this.pickers=n.map(this.inputs,function(t){return n.data(t,"datepicker")});this.updateDates()};c.prototype={updateDates:function(){this.dates=n.map(this.pickers,function(n){return n.getUTCDate()});this.updateRanges()},updateRanges:function(){var t=n.map(this.dates,function(n){return n.valueOf()});n.each(this.pickers,function(n,i){i.setRange(t)})},clearDates:function(){n.each(this.pickers,function(n,t){t.clearDates()})},dateUpdated:function(i){var u;if(!this.updating&&(this.updating=!0,u=n.data(i.target,"datepicker"),u!==t)){var r=u.getUTCDate(),s=this.keepEmptyValues,o=n.inArray(i.target,this.inputs),f=o-1,e=o+1,h=this.inputs.length;if(o!==-1){if(n.each(this.pickers,function(n,t){t.getUTCDate()||t!==u&&s||t.setUTCDate(r)}),r<this.dates[f])while(f>=0&&r<this.dates[f])this.pickers[f--].setUTCDate(r);else if(r>this.dates[e])while(e<h&&r>this.dates[e])this.pickers[e++].setUTCDate(r);this.updateDates();delete this.updating}}},destroy:function(){n.map(this.pickers,function(n){n.destroy()});n(this.inputs).off("changeDate",this.dateUpdated);delete this.element.data().datepicker},remove:h("destroy","Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")};v=n.fn.datepicker;o=function(i){var f=Array.apply(null,arguments),r;if(f.shift(),this.each(function(){var s=n(this),t=s.data("datepicker"),h=typeof i=="object"&&i;if(!t){var l=w(this,"date"),a=n.extend({},e,l,h),v=b(a.language),o=n.extend({},e,v,l,h);s.hasClass("input-daterange")||o.inputs?(n.extend(o,{inputs:o.inputs||s.find("input").toArray()}),t=new c(this,o)):t=new u(this,o);s.data("datepicker",t)}typeof i=="string"&&typeof t[i]=="function"&&(r=t[i].apply(t,f))}),r===t||r instanceof u||r instanceof c)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+i+" function)");else return r};n.fn.datepicker=o;e=n.fn.datepicker.defaults={assumeNearbyYear:!1,autoclose:!1,beforeShowDay:n.noop,beforeShowMonth:n.noop,beforeShowYear:n.noop,beforeShowDecade:n.noop,beforeShowCentury:n.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:Infinity,forceParse:!0,format:"mm/dd/yyyy",keepEmptyValues:!1,keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:4,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-Infinity,startView:0,todayBtn:!1,todayHighlight:!1,updateViewDate:!0,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:"",templates:{leftArrow:"&#x00AB;",rightArrow:"&#x00BB;"},showWeekDays:!0};y=n.fn.datepicker.locale_opts=["format","rtl","weekStart"];n.fn.datepicker.Constructor=u;r=n.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}};i={viewModes:[{names:["days","month"],clsName:"days",e:"changeMonth"},{names:["months","year"],clsName:"months",e:"changeYear",navStep:1},{names:["years","decade"],clsName:"years",e:"changeDecade",navStep:10},{names:["decades","century"],clsName:"decades",e:"changeCentury",navStep:100},{names:["centuries","millennium"],clsName:"centuries",e:"changeMillennium",navStep:1e3}],validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,parseFormat:function(n){if(typeof n.toValue=="function"&&typeof n.toDisplay=="function")return n;var t=n.replace(this.validParts,'\0').split('\0'),i=n.match(this.validParts);if(!t||!t.length||!i||i.length===0)throw new Error("Invalid date format.");return{separators:t,parts:i}},parseDate:function(f,e,o,h){function et(n,t){return t===!0&&(t=10),n<100&&(n+=2e3,n>(new Date).getFullYear()+t&&(n-=100)),n}function ut(){var n=this.slice(0,l[c].length),t=l[c].slice(0,n.length);return n.toLowerCase()===t.toLowerCase()}var tt,g,l,y,it,c,rt,v,ft,d,w;if(!f)return t;if(f instanceof Date)return f;if(typeof e=="string"&&(e=i.parseFormat(e)),e.toValue)return e.toValue(f,e,o);if(tt={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"},g={yesterday:"-1d",today:"+0d",tomorrow:"+1d"},f in g&&(f=g[f]),/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(f)){for(l=f.match(/([\-+]\d+)([dmwy])/gi),f=new Date,c=0;c<l.length;c++)y=l[c].match(/([\-+]\d+)([dmwy])/i),it=Number(y[1]),rt=tt[y[2].toLowerCase()],f=u.prototype[rt](f,it);return u.prototype._zero_utc_time(f)}l=f&&f.match(this.nonpunctuation)||[];var b={},nt=["yyyy","yy","M","MM","m","mm","d","dd"],a={yyyy:function(n,t){return n.setUTCFullYear(h?et(t,h):t)},m:function(n,t){if(isNaN(n))return n;for(t-=1;t<0;)t+=12;for(t%=12,n.setUTCMonth(t);n.getUTCMonth()!==t;)n.setUTCDate(n.getUTCDate()-1);return n},d:function(n,t){return n.setUTCDate(t)}},p,k;if(a.yy=a.yyyy,a.M=a.MM=a.mm=a.m,a.dd=a.d,f=s(),v=e.parts.slice(),l.length!==v.length&&(v=n(v).filter(function(t,i){return n.inArray(i,nt)!==-1}).toArray()),l.length===v.length){for(c=0,ft=v.length;c<ft;c++){if(p=parseInt(l[c],10),y=v[c],isNaN(p))switch(y){case"MM":k=n(r[o].months).filter(ut);p=n.inArray(k[0],r[o].months)+1;break;case"M":k=n(r[o].monthsShort).filter(ut);p=n.inArray(k[0],r[o].monthsShort)+1}b[y]=p}for(c=0;c<nt.length;c++)w=nt[c],w in b&&!isNaN(b[w])&&(d=new Date(f),a[w](d,b[w]),isNaN(d)||(f=d))}return f},formatDate:function(t,u,f){var e,s,o,h;if(!t)return"";if(typeof u=="string"&&(u=i.parseFormat(u)),u.toDisplay)return u.toDisplay(t,u,f);for(e={d:t.getUTCDate(),D:r[f].daysShort[t.getUTCDay()],DD:r[f].days[t.getUTCDay()],m:t.getUTCMonth()+1,M:r[f].monthsShort[t.getUTCMonth()],MM:r[f].months[t.getUTCMonth()],yy:t.getUTCFullYear().toString().substring(2),yyyy:t.getUTCFullYear()},e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,t=[],s=n.extend([],u.separators),o=0,h=u.parts.length;o<=h;o++)s.length&&t.push(s.shift()),t.push(e[u.parts[o]]);return t.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"><\/th><\/tr><tr><th class="prev">'+e.templates.leftArrow+'<\/th><th colspan="5" class="datepicker-switch"><\/th><th class="next">'+e.templates.rightArrow+"<\/th><\/tr><\/thead>",contTemplate:'<tbody><tr><td colspan="7"><\/td><\/tr><\/tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"><\/th><\/tr><tr><th colspan="7" class="clear"><\/th><\/tr><\/tfoot>'};i.template='<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">'+i.headTemplate+"<tbody><\/tbody>"+i.footTemplate+'<\/table><\/div><div class="datepicker-months"><table class="table-condensed">'+i.headTemplate+i.contTemplate+i.footTemplate+'<\/table><\/div><div class="datepicker-years"><table class="table-condensed">'+i.headTemplate+i.contTemplate+i.footTemplate+'<\/table><\/div><div class="datepicker-decades"><table class="table-condensed">'+i.headTemplate+i.contTemplate+i.footTemplate+'<\/table><\/div><div class="datepicker-centuries"><table class="table-condensed">'+i.headTemplate+i.contTemplate+i.footTemplate+"<\/table><\/div><\/div>";n.fn.datepicker.DPGlobal=i;n.fn.datepicker.noConflict=function(){return n.fn.datepicker=v,this};n.fn.datepicker.version="1.8.0";n.fn.datepicker.deprecated=function(n){var t=window.console;t&&t.warn&&t.warn("DEPRECATED: "+n)};n(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(t){var i=n(this);i.data("datepicker")||(t.preventDefault(),o.call(i,"show"))});n(function(){o.call(n('[data-provide="datepicker-inline"]'))})});
/**
 * bootstrap-paginator.js v0.5
 * --
 * Copyright 2013 Yun Lai <lyonlai1984@gmail.com>
 * --
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function ($) {

    "use strict"; // jshint ;_;


    /* Paginator PUBLIC CLASS DEFINITION
     * ================================= */

    /**
     * Boostrap Paginator Constructor
     *
     * @param element element of the paginator
     * @param options the options to config the paginator
     *
     * */
    var BootstrapPaginator = function (element, options) {
        this.init(element, options);
    },
        old = null;

    BootstrapPaginator.prototype = {

        /**
         * Initialization function of the paginator, accepting an element and the options as parameters
         *
         * @param element element of the paginator
         * @param options the options to config the paginator
         *
         * */
        init: function (element, options) {

            this.$element = $(element);

            this.currentPage = 1;

            this.lastPage = 1;

            this.setOptions(options);

            this.initialized = true;
        },

        /**
         * Update the properties of the paginator element
         *
         * @param options options to config the paginator
         * */
        setOptions: function (options) {

            this.options = $.extend({}, (this.options || $.fn.bootstrapPaginator.defaults), options);

            if (options && typeof (options.currentPage)  !== 'undefined') {

                this.setCurrentPage(options.currentPage);
            }

            this.totalPages = parseInt(this.options.totalPages, 10);  //setup the total pages property.
            this.numberOfPages = parseInt(this.options.numberOfPages, 10); //setup the numberOfPages to be shown

            this.listen();

            //render the paginator
            this.render();

            if (!this.initialized && this.lastPage !== this.currentPage) {
                this.$element.trigger("page-changed", [this.lastPage, this.currentPage]);
            }

        },

        /**
         * Sets up the events listeners. Currently the pageclicked and pagechanged events are linked if available.
         *
         * */
        listen: function () {

            this.$element.off("page-clicked");

            this.$element.off("page-changed");// unload the events for the element

            if (typeof (this.options.onPageClicked) === "function") {
                this.$element.bind("page-clicked", this.options.onPageClicked);
            }

            if (typeof (this.options.onPageChanged) === "function") {
                this.$element.on("page-changed", this.options.onPageChanged);
            }

        },


        /**
         *
         *  Destroys the paginator element, it unload the event first, then empty the content inside.
         *
         * */
        destroy: function () {

            this.$element.off("page-clicked");

            this.$element.off("page-changed");

            $.removeData(this.$element, 'bootstrapPaginator');

            this.$element.empty();

        },

        /**
         * Shows the page
         *
         * */
        show: function (page) {

            this.setCurrentPage(page);

            this.render();

            if (this.lastPage !== this.currentPage) {
                this.$element.trigger("page-changed", [this.lastPage, this.currentPage]);
            }
        },

        /**
         * Shows the next page
         *
         * */
        showNext: function () {
            var pages = this.getPages();

            if (pages.next) {
                this.show(pages.next);
            }

        },

        /**
         * Shows the previous page
         *
         * */
        showPrevious: function () {
            var pages = this.getPages();

            if (pages.prev) {
                this.show(pages.prev);
            }

        },

        /**
         * Shows the first page
         *
         * */
        showFirst: function () {
            var pages = this.getPages();

            if (pages.first) {
                this.show(pages.first);
            }

        },

        /**
         * Shows the last page
         *
         * */
        showLast: function () {
            var pages = this.getPages();

            if (pages.last) {
                this.show(pages.last);
            }

        },

        /**
         * Internal on page item click handler, when the page item is clicked, change the current page to the corresponding page and
         * trigger the pageclick event for the listeners.
         *
         *
         * */
        onPageItemClicked: function (event) {

            var type = event.data.type,
                page = event.data.page;

            this.$element.trigger("page-clicked", [event, type, page]);

            //show the corresponding page and retrieve the newly built item related to the page clicked before for the event return
            switch (type) {

            case "first":
                this.showFirst();
                break;
            case "prev":
                this.showPrevious();
                break;
            case "next":
                this.showNext();
                break;
            case "last":
                this.showLast();
                break;
            case "page":
                this.show(page);
                break;
            }

        },

        /**
         * Renders the paginator according to the internal properties and the settings.
         *
         *
         * */
        render: function () {

            //fetch the container class and add them to the container
            var containerClass = this.getValueFromOption(this.options.containerClass, this.$element),
                size = this.options.size || "normal",
                alignment = this.options.alignment || "left",
                pages = this.getPages(),
                //listContainer = $("<ul></ul>"),
                listContainer = $("<ul class='pagination'></ul>"),
                listContainerClass =  this.getValueFromOption(this.options.listContainerClass, listContainer),
                first = null,
                prev = null,
                next = null,
                last = null,
                p = null,
                i = 0;


            this.$element.prop("class", "");

            this.$element.addClass("pagination");

            switch (size.toLowerCase()) {
            case "large":
                this.$element.addClass("pagination-large");
                break;
            case "small":
                this.$element.addClass("pagination-small");
                break;
            case "mini":
                this.$element.addClass("pagination-mini");
                break;
            default:
                break;
            }

            switch (alignment.toLowerCase()) {

            case "center":
                this.$element.addClass("pagination-centered");
                break;
            case "right":
                this.$element.addClass("pagination-right");
                break;
            default:
                break;

            }

            this.$element.addClass(containerClass);

            //empty the outter most container then add the listContainer inside.
            this.$element.empty();

            this.$element.append(listContainer);

            listContainer.addClass(listContainerClass);

            //update the page element reference
            this.pageRef = [];

            if (pages.first) {//if the there is first page element
                first = this.buildPageItem("first", pages.first);

                if (first) {
                    listContainer.append(first);
                }

            }

            if (pages.prev) {//if the there is previous page element

                prev = this.buildPageItem("prev", pages.prev);

                if (prev) {
                    listContainer.append(prev);
                }

            }


            for (i = 0; i < pages.length; i = i + 1) {//fill the numeric pages.

                p = this.buildPageItem("page", pages[i]);

                if (p) {
                    listContainer.append(p);
                }
            }

            if (pages.next) {//if there is next page

                next = this.buildPageItem("next", pages.next);

                if (next) {
                    listContainer.append(next);
                }
            }

            if (pages.last) {//if there is last page

                last = this.buildPageItem("last", pages.last);

                if (last) {
                    listContainer.append(last);
                }
            }
        },

        /**
         *
         * Creates a page item base on the type and page number given.
         *
         * @param page page number
         * @param type type of the page, whether it is the first, prev, page, next, last
         *
         * @return Object the constructed page element
         * */
        buildPageItem: function (type, page) {

            var itemContainer = $("<li></li>"),//creates the item container
                itemContent = $("<a></a>"),//creates the item content
                text = "",
                title = "",
                itemContainerClass = this.options.itemContainerClass(type, page, this.currentPage),
                itemContentClass = this.getValueFromOption(this.options.itemContentClass, type, page, this.currentPage),
                tooltipOpts = null;


            switch (type) {

            case "first":
                if (!this.getValueFromOption(this.options.shouldShowPage, type, page, this.currentPage)) { return; }
                text = this.options.itemTexts(type, page, this.currentPage);
                title = this.options.tooltipTitles(type, page, this.currentPage);
                break;
            case "last":
                if (!this.getValueFromOption(this.options.shouldShowPage, type, page, this.currentPage)) { return; }
                text = this.options.itemTexts(type, page, this.currentPage);
                title = this.options.tooltipTitles(type, page, this.currentPage);
                break;
            case "prev":
                if (!this.getValueFromOption(this.options.shouldShowPage, type, page, this.currentPage)) { return; }
                text = this.options.itemTexts(type, page, this.currentPage);
                title = this.options.tooltipTitles(type, page, this.currentPage);
                break;
            case "next":
                if (!this.getValueFromOption(this.options.shouldShowPage, type, page, this.currentPage)) { return; }
                text = this.options.itemTexts(type, page, this.currentPage);
                title = this.options.tooltipTitles(type, page, this.currentPage);
                break;
            case "page":
                if (!this.getValueFromOption(this.options.shouldShowPage, type, page, this.currentPage)) { return; }
                text = this.options.itemTexts(type, page, this.currentPage);
                title = this.options.tooltipTitles(type, page, this.currentPage);
                break;
            }

            itemContainer.addClass(itemContainerClass).append(itemContent);

            itemContent.addClass(itemContentClass).html(text).on("click", null, {type: type, page: page}, $.proxy(this.onPageItemClicked, this));

            if (this.options.pageUrl) {
                itemContent.attr("href", this.getValueFromOption(this.options.pageUrl, type, page, this.currentPage));
            }

            if (this.options.useBootstrapTooltip) {
                tooltipOpts = $.extend({}, this.options.bootstrapTooltipOptions, {title: title});

                itemContent.tooltip(tooltipOpts);
            } else {
                itemContent.attr("title", title);
            }

            return itemContainer;

        },

        setCurrentPage: function (page) {
            if (page > this.totalPages || page < 1) {// if the current page is out of range, throw exception.

                throw "Page out of range";

            }

            this.lastPage = this.currentPage;

            this.currentPage = parseInt(page, 10);

        },

        /**
         * Gets an array that represents the current status of the page object. Numeric pages can be access via array mode. length attributes describes how many numeric pages are there. First, previous, next and last page can be accessed via attributes first, prev, next and last. Current attribute marks the current page within the pages.
         *
         * @return object output objects that has first, prev, next, last and also the number of pages in between.
         * */
        getPages: function () {

            var totalPages = this.totalPages,// get or calculate the total pages via the total records
                pageStart = (this.currentPage % this.numberOfPages === 0) ? (parseInt(this.currentPage / this.numberOfPages, 10) - 1) * this.numberOfPages + 1 : parseInt(this.currentPage / this.numberOfPages, 10) * this.numberOfPages + 1,//calculates the start page.
                output = [],
                i = 0,
                counter = 0;

            pageStart = pageStart < 1 ? 1 : pageStart;//check the range of the page start to see if its less than 1.

            for (i = pageStart, counter = 0; counter < this.numberOfPages && i <= totalPages; i = i + 1, counter = counter + 1) {//fill the pages
                output.push(i);
            }

            if (this.currentPage > 1) {//add the first when the current page leaves the 1st page.
                output.first = 1;
            } else {
                output.first = null;
            }

            if (this.currentPage > 1) {// add the previous when the current page leaves the 1st page
                output.prev = this.currentPage - 1;
            } else {
                output.prev = null;
            }

            if (this.currentPage < totalPages) {// add the next page when the current page doesn't reach the last page
                output.next = this.currentPage + 1;
            } else {
                output.next = null;
            }

            if (this.currentPage < totalPages) {// add the last page when the current page doesn't reach the last page
                output.last = totalPages;
            } else {
                output.last = null;
            }

            output.current = this.currentPage;//mark the current page.

            output.total = totalPages;

            output.numberOfPages = this.options.numberOfPages;

            return output;

        },

        /**
         * Gets the value from the options, this is made to handle the situation where value is the return value of a function.
         *
         * @return mixed value that depends on the type of parameters, if the given parameter is a function, then the evaluated result is returned. Otherwise the parameter itself will get returned.
         * */
        getValueFromOption: function (value) {

            var output = null,
                args = Array.prototype.slice.call(arguments, 1);

            if (typeof value === 'function') {
                output = value.apply(this, args);
            } else {
                output = value;
            }

            return output;

        }

    };


    /* TYPEAHEAD PLUGIN DEFINITION
     * =========================== */

    old = $.fn.bootstrapPaginator;

    $.fn.bootstrapPaginator = function (option) {

        var args = arguments,
            result = null;

        $(this).each(function (index, item) {
            var $this = $(item),
                data = $this.data('bootstrapPaginator'),
                options = (typeof option !== 'object') ? null : option;

            if (!data) {
                $this.data('bootstrapPaginator', (data = new BootstrapPaginator(this, options)));
                return;
            }

            if (typeof option === 'string') {

                if (data[option]) {
                    result = data[option].apply(data, Array.prototype.slice.call(args, 1));
                } else {
                    throw "Method " + option + " does not exist";
                }

            } else {
                result = data.setOptions(option);
            }
        });

        return result;

    };

    $.fn.bootstrapPaginator.defaults = {
        containerClass: "",
        size: "normal",
        alignment: "left",
        listContainerClass: "",
        itemContainerClass: function (type, page, current) {
            return (page === current) ? "active" : "";
        },
        itemContentClass: function (type, page, current) {
            return "";
        },
        currentPage: 1,
        numberOfPages: 5,
        totalPages: 1,
        pageUrl: function (type, page, current) {
            return null;
        },
        onPageClicked: null,
        onPageChanged: null,
        useBootstrapTooltip: false,
        shouldShowPage: true,
        itemTexts: function (type, page, current) {
            switch (type) {
            case "first":
                return "&lt;&lt;";
            case "prev":
                return "&lt;";
            case "next":
                return "&gt;";
            case "last":
                return "&gt;&gt;";
            case "page":
                return page;
            }
        },
        tooltipTitles: function (type, page, current) {

            switch (type) {
            case "first":
                return "Go to first page";
            case "prev":
                return "Go to previous page";
            case "next":
                return "Go to next page";
            case "last":
                return "Go to last page";
            case "page":
                return (page === current) ? "Current page is " + page : "Go to page " + page;
            }
        },
        bootstrapTooltipOptions: {
            animation: true,
            html: true,
            placement: 'top',
            selector: false,
            title: "",
            container: false
        }
    };

    $.fn.bootstrapPaginator.Constructor = BootstrapPaginator;



}(window.jQuery));

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if(typeof jQuery=="undefined")throw new Error("Bootstrap's JavaScript requires jQuery");+function(n){"use strict";var t=n.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||t[0]==1&&t[1]==9&&t[2]<1||t[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");}(jQuery);+function(n){"use strict";function t(){var i=document.createElement("bootstrap"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var t in n)if(i.style[t]!==undefined)return{end:n[t]};return!1}n.fn.emulateTransitionEnd=function(t){var i=!1,u=this,r;n(this).one("bsTransitionEnd",function(){i=!0});return r=function(){i||n(u).trigger(n.support.transition.end)},setTimeout(r,t),this};n(function(){(n.support.transition=t(),n.support.transition)&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery);+function(n){"use strict";function u(i){return this.each(function(){var r=n(this),u=r.data("bs.alert");u||r.data("bs.alert",u=new t(this));typeof i=="string"&&u[i].call(r)})}var i='[data-dismiss="alert"]',t=function(t){n(t).on("click",i,this.close)},r;t.VERSION="3.3.7";t.TRANSITION_DURATION=150;t.prototype.close=function(i){function e(){r.detach().trigger("closed.bs.alert").remove()}var f=n(this),u=f.attr("data-target"),r;(u||(u=f.attr("href"),u=u&&u.replace(/.*(?=#[^\s]*$)/,"")),r=n(u==="#"?[]:u),i&&i.preventDefault(),r.length||(r=f.closest(".alert")),r.trigger(i=n.Event("close.bs.alert")),i.isDefaultPrevented())||(r.removeClass("in"),n.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",e).emulateTransitionEnd(t.TRANSITION_DURATION):e())};r=n.fn.alert;n.fn.alert=u;n.fn.alert.Constructor=t;n.fn.alert.noConflict=function(){return n.fn.alert=r,this};n(document).on("click.bs.alert.data-api",i,t.prototype.close)}(jQuery);+function(n){"use strict";function i(i){return this.each(function(){var u=n(this),r=u.data("bs.button"),f=typeof i=="object"&&i;r||u.data("bs.button",r=new t(this,f));i=="toggle"?r.toggle():i&&r.setState(i)})}var t=function(i,r){this.$element=n(i);this.options=n.extend({},t.DEFAULTS,r);this.isLoading=!1},r;t.VERSION="3.3.7";t.DEFAULTS={loadingText:"loading..."};t.prototype.setState=function(t){var i="disabled",r=this.$element,f=r.is("input")?"val":"html",u=r.data();t+="Text";u.resetText==null&&r.data("resetText",r[f]());setTimeout(n.proxy(function(){r[f](u[t]==null?this.options[t]:u[t]);t=="loadingText"?(this.isLoading=!0,r.addClass(i).attr(i,i).prop(i,!0)):this.isLoading&&(this.isLoading=!1,r.removeClass(i).removeAttr(i).prop(i,!1))},this),0)};t.prototype.toggle=function(){var t=!0,i=this.$element.closest('[data-toggle="buttons"]'),n;i.length?(n=this.$element.find("input"),n.prop("type")=="radio"?(n.prop("checked")&&(t=!1),i.find(".active").removeClass("active"),this.$element.addClass("active")):n.prop("type")=="checkbox"&&(n.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),n.prop("checked",this.$element.hasClass("active")),t&&n.trigger("change")):(this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active"))};r=n.fn.button;n.fn.button=i;n.fn.button.Constructor=t;n.fn.button.noConflict=function(){return n.fn.button=r,this};n(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var r=n(t.target).closest(".btn");i.call(r,"toggle");n(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),r.is("input,button")?r.trigger("focus"):r.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){n(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery);+function(n){"use strict";function i(i){return this.each(function(){var u=n(this),r=u.data("bs.carousel"),f=n.extend({},t.DEFAULTS,u.data(),typeof i=="object"&&i),e=typeof i=="string"?i:f.slide;r||u.data("bs.carousel",r=new t(this,f));typeof i=="number"?r.to(i):e?r[e]():f.interval&&r.pause().cycle()})}var t=function(t,i){this.$element=n(t);this.$indicators=this.$element.find(".carousel-indicators");this.options=i;this.paused=null;this.sliding=null;this.interval=null;this.$active=null;this.$items=null;this.options.keyboard&&this.$element.on("keydown.bs.carousel",n.proxy(this.keydown,this));this.options.pause!="hover"||"ontouchstart"in document.documentElement||this.$element.on("mouseenter.bs.carousel",n.proxy(this.pause,this)).on("mouseleave.bs.carousel",n.proxy(this.cycle,this))},u,r;t.VERSION="3.3.7";t.TRANSITION_DURATION=600;t.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0};t.prototype.keydown=function(n){if(!/input|textarea/i.test(n.target.tagName)){switch(n.which){case 37:this.prev();break;case 39:this.next();break;default:return}n.preventDefault()}};t.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(n.proxy(this.next,this),this.options.interval)),this};t.prototype.getItemIndex=function(n){return this.$items=n.parent().children(".item"),this.$items.index(n||this.$active)};t.prototype.getItemForDirection=function(n,t){var i=this.getItemIndex(t),f=n=="prev"&&i===0||n=="next"&&i==this.$items.length-1,r,u;return f&&!this.options.wrap?t:(r=n=="prev"?-1:1,u=(i+r)%this.$items.length,this.$items.eq(u))};t.prototype.to=function(n){var i=this,t=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(n>this.$items.length-1)&&!(n<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){i.to(n)}):t==n?this.pause().cycle():this.slide(n>t?"next":"prev",this.$items.eq(n))};t.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&n.support.transition&&(this.$element.trigger(n.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this};t.prototype.next=function(){if(!this.sliding)return this.slide("next")};t.prototype.prev=function(){if(!this.sliding)return this.slide("prev")};t.prototype.slide=function(i,r){var e=this.$element.find(".item.active"),u=r||this.getItemForDirection(i,e),l=this.interval,f=i=="next"?"left":"right",a=this,o,s,h,c;return u.hasClass("active")?this.sliding=!1:(o=u[0],s=n.Event("slide.bs.carousel",{relatedTarget:o,direction:f}),this.$element.trigger(s),s.isDefaultPrevented())?void 0:(this.sliding=!0,l&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),h=n(this.$indicators.children()[this.getItemIndex(u)]),h&&h.addClass("active")),c=n.Event("slid.bs.carousel",{relatedTarget:o,direction:f}),n.support.transition&&this.$element.hasClass("slide")?(u.addClass(i),u[0].offsetWidth,e.addClass(f),u.addClass(f),e.one("bsTransitionEnd",function(){u.removeClass([i,f].join(" ")).addClass("active");e.removeClass(["active",f].join(" "));a.sliding=!1;setTimeout(function(){a.$element.trigger(c)},0)}).emulateTransitionEnd(t.TRANSITION_DURATION)):(e.removeClass("active"),u.addClass("active"),this.sliding=!1,this.$element.trigger(c)),l&&this.cycle(),this)};u=n.fn.carousel;n.fn.carousel=i;n.fn.carousel.Constructor=t;n.fn.carousel.noConflict=function(){return n.fn.carousel=u,this};r=function(t){var o,r=n(this),u=n(r.attr("data-target")||(o=r.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,"")),e,f;u.hasClass("carousel")&&(e=n.extend({},u.data(),r.data()),f=r.attr("data-slide-to"),f&&(e.interval=!1),i.call(u,e),f&&u.data("bs.carousel").to(f),t.preventDefault())};n(document).on("click.bs.carousel.data-api","[data-slide]",r).on("click.bs.carousel.data-api","[data-slide-to]",r);n(window).on("load",function(){n('[data-ride="carousel"]').each(function(){var t=n(this);i.call(t,t.data())})})}(jQuery);+function(n){"use strict";function r(t){var i,r=t.attr("data-target")||(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return n(r)}function i(i){return this.each(function(){var u=n(this),r=u.data("bs.collapse"),f=n.extend({},t.DEFAULTS,u.data(),typeof i=="object"&&i);!r&&f.toggle&&/show|hide/.test(i)&&(f.toggle=!1);r||u.data("bs.collapse",r=new t(this,f));typeof i=="string"&&r[i]()})}var t=function(i,r){this.$element=n(i);this.options=n.extend({},t.DEFAULTS,r);this.$trigger=n('[data-toggle="collapse"][href="#'+i.id+'"],[data-toggle="collapse"][data-target="#'+i.id+'"]');this.transitioning=null;this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger);this.options.toggle&&this.toggle()},u;t.VERSION="3.3.7";t.TRANSITION_DURATION=350;t.DEFAULTS={toggle:!0};t.prototype.dimension=function(){var n=this.$element.hasClass("width");return n?"width":"height"};t.prototype.show=function(){var f,r,e,u,o,s;if(!this.transitioning&&!this.$element.hasClass("in")&&(r=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing"),!r||!r.length||(f=r.data("bs.collapse"),!f||!f.transitioning))&&(e=n.Event("show.bs.collapse"),this.$element.trigger(e),!e.isDefaultPrevented())){if(r&&r.length&&(i.call(r,"hide"),f||r.data("bs.collapse",null)),u=this.dimension(),this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1,o=function(){this.$element.removeClass("collapsing").addClass("collapse in")[u]("");this.transitioning=0;this.$element.trigger("shown.bs.collapse")},!n.support.transition)return o.call(this);s=n.camelCase(["scroll",u].join("-"));this.$element.one("bsTransitionEnd",n.proxy(o,this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])}};t.prototype.hide=function(){var r,i,u;if(!this.transitioning&&this.$element.hasClass("in")&&(r=n.Event("hide.bs.collapse"),this.$element.trigger(r),!r.isDefaultPrevented())){if(i=this.dimension(),this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1,u=function(){this.transitioning=0;this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")},!n.support.transition)return u.call(this);this.$element[i](0).one("bsTransitionEnd",n.proxy(u,this)).emulateTransitionEnd(t.TRANSITION_DURATION)}};t.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};t.prototype.getParent=function(){return n(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(n.proxy(function(t,i){var u=n(i);this.addAriaAndCollapsedClass(r(u),u)},this)).end()};t.prototype.addAriaAndCollapsedClass=function(n,t){var i=n.hasClass("in");n.attr("aria-expanded",i);t.toggleClass("collapsed",!i).attr("aria-expanded",i)};u=n.fn.collapse;n.fn.collapse=i;n.fn.collapse.Constructor=t;n.fn.collapse.noConflict=function(){return n.fn.collapse=u,this};n(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var u=n(this);u.attr("data-target")||t.preventDefault();var f=r(u),e=f.data("bs.collapse"),o=e?"toggle":u.data();i.call(f,o)})}(jQuery);+function(n){"use strict";function r(t){var i=t.attr("data-target"),r;return i||(i=t.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,"")),r=i&&n(i),r&&r.length?r:t.parent()}function u(t){t&&t.which===3||(n(e).remove(),n(i).each(function(){var u=n(this),i=r(u),f={relatedTarget:this};i.hasClass("open")&&(t&&t.type=="click"&&/input|textarea/i.test(t.target.tagName)&&n.contains(i[0],t.target)||(i.trigger(t=n.Event("hide.bs.dropdown",f)),t.isDefaultPrevented())||(u.attr("aria-expanded","false"),i.removeClass("open").trigger(n.Event("hidden.bs.dropdown",f))))}))}function o(i){return this.each(function(){var r=n(this),u=r.data("bs.dropdown");u||r.data("bs.dropdown",u=new t(this));typeof i=="string"&&u[i].call(r)})}var e=".dropdown-backdrop",i='[data-toggle="dropdown"]',t=function(t){n(t).on("click.bs.dropdown",this.toggle)},f;t.VERSION="3.3.7";t.prototype.toggle=function(t){var f=n(this),i,o,e;if(!f.is(".disabled, :disabled")){if(i=r(f),o=i.hasClass("open"),u(),!o){if("ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length)n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click",u);if(e={relatedTarget:this},i.trigger(t=n.Event("show.bs.dropdown",e)),t.isDefaultPrevented())return;f.trigger("focus").attr("aria-expanded","true");i.toggleClass("open").trigger(n.Event("shown.bs.dropdown",e))}return!1}};t.prototype.keydown=function(t){var e,o,s,h,f,u;if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)&&(e=n(this),t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled"))){if(o=r(e),s=o.hasClass("open"),!s&&t.which!=27||s&&t.which==27)return t.which==27&&o.find(i).trigger("focus"),e.trigger("click");(h=" li:not(.disabled):visible a",f=o.find(".dropdown-menu"+h),f.length)&&(u=f.index(t.target),t.which==38&&u>0&&u--,t.which==40&&u<f.length-1&&u++,~u||(u=0),f.eq(u).trigger("focus"))}};f=n.fn.dropdown;n.fn.dropdown=o;n.fn.dropdown.Constructor=t;n.fn.dropdown.noConflict=function(){return n.fn.dropdown=f,this};n(document).on("click.bs.dropdown.data-api",u).on("click.bs.dropdown.data-api",".dropdown form",function(n){n.stopPropagation()}).on("click.bs.dropdown.data-api",i,t.prototype.toggle).on("keydown.bs.dropdown.data-api",i,t.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",t.prototype.keydown)}(jQuery);+function(n){"use strict";function i(i,r){return this.each(function(){var f=n(this),u=f.data("bs.modal"),e=n.extend({},t.DEFAULTS,f.data(),typeof i=="object"&&i);u||f.data("bs.modal",u=new t(this,e));typeof i=="string"?u[i](r):e.show&&u.show(r)})}var t=function(t,i){this.options=i;this.$body=n(document.body);this.$element=n(t);this.$dialog=this.$element.find(".modal-dialog");this.$backdrop=null;this.isShown=null;this.originalBodyPad=null;this.scrollbarWidth=0;this.ignoreBackdropClick=!1;this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,n.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))},r;t.VERSION="3.3.7";t.TRANSITION_DURATION=300;t.BACKDROP_TRANSITION_DURATION=150;t.DEFAULTS={backdrop:!0,keyboard:!0,show:!0};t.prototype.toggle=function(n){return this.isShown?this.hide():this.show(n)};t.prototype.show=function(i){var r=this,u=n.Event("show.bs.modal",{relatedTarget:i});if(this.$element.trigger(u),!this.isShown&&!u.isDefaultPrevented()){this.isShown=!0;this.checkScrollbar();this.setScrollbar();this.$body.addClass("modal-open");this.escape();this.resize();this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',n.proxy(this.hide,this));this.$dialog.on("mousedown.dismiss.bs.modal",function(){r.$element.one("mouseup.dismiss.bs.modal",function(t){n(t.target).is(r.$element)&&(r.ignoreBackdropClick=!0)})});this.backdrop(function(){var f=n.support.transition&&r.$element.hasClass("fade"),u;r.$element.parent().length||r.$element.appendTo(r.$body);r.$element.show().scrollTop(0);r.adjustDialog();f&&r.$element[0].offsetWidth;r.$element.addClass("in");r.enforceFocus();u=n.Event("shown.bs.modal",{relatedTarget:i});f?r.$dialog.one("bsTransitionEnd",function(){r.$element.trigger("focus").trigger(u)}).emulateTransitionEnd(t.TRANSITION_DURATION):r.$element.trigger("focus").trigger(u)})}};t.prototype.hide=function(i){(i&&i.preventDefault(),i=n.Event("hide.bs.modal"),this.$element.trigger(i),this.isShown&&!i.isDefaultPrevented())&&(this.isShown=!1,this.escape(),this.resize(),n(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),n.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",n.proxy(this.hideModal,this)).emulateTransitionEnd(t.TRANSITION_DURATION):this.hideModal())};t.prototype.enforceFocus=function(){n(document).off("focusin.bs.modal").on("focusin.bs.modal",n.proxy(function(n){document===n.target||this.$element[0]===n.target||this.$element.has(n.target).length||this.$element.trigger("focus")},this))};t.prototype.escape=function(){if(this.isShown&&this.options.keyboard)this.$element.on("keydown.dismiss.bs.modal",n.proxy(function(n){n.which==27&&this.hide()},this));else this.isShown||this.$element.off("keydown.dismiss.bs.modal")};t.prototype.resize=function(){if(this.isShown)n(window).on("resize.bs.modal",n.proxy(this.handleUpdate,this));else n(window).off("resize.bs.modal")};t.prototype.hideModal=function(){var n=this;this.$element.hide();this.backdrop(function(){n.$body.removeClass("modal-open");n.resetAdjustments();n.resetScrollbar();n.$element.trigger("hidden.bs.modal")})};t.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};t.prototype.backdrop=function(i){var e=this,f=this.$element.hasClass("fade")?"fade":"",r,u;if(this.isShown&&this.options.backdrop){r=n.support.transition&&f;this.$backdrop=n(document.createElement("div")).addClass("modal-backdrop "+f).appendTo(this.$body);this.$element.on("click.dismiss.bs.modal",n.proxy(function(n){if(this.ignoreBackdropClick){this.ignoreBackdropClick=!1;return}n.target===n.currentTarget&&(this.options.backdrop=="static"?this.$element[0].focus():this.hide())},this));if(r&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!i)return;r?this.$backdrop.one("bsTransitionEnd",i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION):i()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),u=function(){e.removeBackdrop();i&&i()},n.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION):u()):i&&i()};t.prototype.handleUpdate=function(){this.adjustDialog()};t.prototype.adjustDialog=function(){var n=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&n?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!n?this.scrollbarWidth:""})};t.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})};t.prototype.checkScrollbar=function(){var n=window.innerWidth,t;n||(t=document.documentElement.getBoundingClientRect(),n=t.right-Math.abs(t.left));this.bodyIsOverflowing=document.body.clientWidth<n;this.scrollbarWidth=this.measureScrollbar()};t.prototype.setScrollbar=function(){var n=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";this.bodyIsOverflowing&&this.$body.css("padding-right",n+this.scrollbarWidth)};t.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)};t.prototype.measureScrollbar=function(){var n=document.createElement("div"),t;return n.className="modal-scrollbar-measure",this.$body.append(n),t=n.offsetWidth-n.clientWidth,this.$body[0].removeChild(n),t};r=n.fn.modal;n.fn.modal=i;n.fn.modal.Constructor=t;n.fn.modal.noConflict=function(){return n.fn.modal=r,this};n(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var r=n(this),f=r.attr("href"),u=n(r.attr("data-target")||f&&f.replace(/.*(?=#[^\s]+$)/,"")),e=u.data("bs.modal")?"toggle":n.extend({remote:!/#/.test(f)&&f},u.data(),r.data());r.is("a")&&t.preventDefault();u.one("show.bs.modal",function(n){if(!n.isDefaultPrevented())u.one("hidden.bs.modal",function(){r.is(":visible")&&r.trigger("focus")})});i.call(u,e,this)})}(jQuery);+function(n){"use strict";function r(i){return this.each(function(){var u=n(this),r=u.data("bs.tooltip"),f=typeof i=="object"&&i;(r||!/destroy|hide/.test(i))&&(r||u.data("bs.tooltip",r=new t(this,f)),typeof i=="string"&&r[i]())})}var t=function(n,t){this.type=null;this.options=null;this.enabled=null;this.timeout=null;this.hoverState=null;this.$element=null;this.inState=null;this.init("tooltip",n,t)},i;t.VERSION="3.3.7";t.TRANSITION_DURATION=150;t.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}};t.prototype.init=function(t,i,r){var f,e,u,o,s;if(this.enabled=!0,this.type=t,this.$element=n(i),this.options=this.getOptions(r),this.$viewport=this.options.viewport&&n(n.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(f=this.options.trigger.split(" "),e=f.length;e--;)if(u=f[e],u=="click")this.$element.on("click."+this.type,this.options.selector,n.proxy(this.toggle,this));else if(u!="manual"){o=u=="hover"?"mouseenter":"focusin";s=u=="hover"?"mouseleave":"focusout";this.$element.on(o+"."+this.type,this.options.selector,n.proxy(this.enter,this));this.$element.on(s+"."+this.type,this.options.selector,n.proxy(this.leave,this))}this.options.selector?this._options=n.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()};t.prototype.getDefaults=function(){return t.DEFAULTS};t.prototype.getOptions=function(t){return t=n.extend({},this.getDefaults(),this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t};t.prototype.getDelegateOptions=function(){var t={},i=this.getDefaults();return this._options&&n.each(this._options,function(n,r){i[n]!=r&&(t[n]=r)}),t};t.prototype.enter=function(t){var i=t instanceof this.constructor?t:n(t.currentTarget).data("bs."+this.type);if(i||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),n(t.currentTarget).data("bs."+this.type,i)),t instanceof n.Event&&(i.inState[t.type=="focusin"?"focus":"hover"]=!0),i.tip().hasClass("in")||i.hoverState=="in"){i.hoverState="in";return}if(clearTimeout(i.timeout),i.hoverState="in",!i.options.delay||!i.options.delay.show)return i.show();i.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)};t.prototype.isInStateTrue=function(){for(var n in this.inState)if(this.inState[n])return!0;return!1};t.prototype.leave=function(t){var i=t instanceof this.constructor?t:n(t.currentTarget).data("bs."+this.type);if(i||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),n(t.currentTarget).data("bs."+this.type,i)),t instanceof n.Event&&(i.inState[t.type=="focusout"?"focus":"hover"]=!1),!i.isInStateTrue()){if(clearTimeout(i.timeout),i.hoverState="out",!i.options.delay||!i.options.delay.hide)return i.hide();i.timeout=setTimeout(function(){i.hoverState=="out"&&i.hide()},i.options.delay.hide)}};t.prototype.show=function(){var c=n.Event("show.bs."+this.type),l,p,e,w,h;if(this.hasContent()&&this.enabled){if(this.$element.trigger(c),l=n.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]),c.isDefaultPrevented()||!l)return;var u=this,r=this.tip(),a=this.getUID(this.type);this.setContent();r.attr("id",a);this.$element.attr("aria-describedby",a);this.options.animation&&r.addClass("fade");var i=typeof this.options.placement=="function"?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,v=/\s?auto?\s?/i,y=v.test(i);y&&(i=i.replace(v,"")||"top");r.detach().css({top:0,left:0,display:"block"}).addClass(i).data("bs."+this.type,this);this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element);this.$element.trigger("inserted.bs."+this.type);var f=this.getPosition(),o=r[0].offsetWidth,s=r[0].offsetHeight;y&&(p=i,e=this.getPosition(this.$viewport),i=i=="bottom"&&f.bottom+s>e.bottom?"top":i=="top"&&f.top-s<e.top?"bottom":i=="right"&&f.right+o>e.width?"left":i=="left"&&f.left-o<e.left?"right":i,r.removeClass(p).addClass(i));w=this.getCalculatedOffset(i,f,o,s);this.applyPlacement(w,i);h=function(){var n=u.hoverState;u.$element.trigger("shown.bs."+u.type);u.hoverState=null;n=="out"&&u.leave(u)};n.support.transition&&this.$tip.hasClass("fade")?r.one("bsTransitionEnd",h).emulateTransitionEnd(t.TRANSITION_DURATION):h()}};t.prototype.applyPlacement=function(t,i){var r=this.tip(),l=r[0].offsetWidth,e=r[0].offsetHeight,o=parseInt(r.css("margin-top"),10),s=parseInt(r.css("margin-left"),10),h,f,u;isNaN(o)&&(o=0);isNaN(s)&&(s=0);t.top+=o;t.left+=s;n.offset.setOffset(r[0],n.extend({using:function(n){r.css({top:Math.round(n.top),left:Math.round(n.left)})}},t),0);r.addClass("in");h=r[0].offsetWidth;f=r[0].offsetHeight;i=="top"&&f!=e&&(t.top=t.top+e-f);u=this.getViewportAdjustedDelta(i,t,h,f);u.left?t.left+=u.left:t.top+=u.top;var c=/top|bottom/.test(i),a=c?u.left*2-l+h:u.top*2-e+f,v=c?"offsetWidth":"offsetHeight";r.offset(t);this.replaceArrow(a,r[0][v],c)};t.prototype.replaceArrow=function(n,t,i){this.arrow().css(i?"left":"top",50*(1-n/t)+"%").css(i?"top":"left","")};t.prototype.setContent=function(){var n=this.tip(),t=this.getTitle();n.find(".tooltip-inner")[this.options.html?"html":"text"](t);n.removeClass("fade in top bottom left right")};t.prototype.hide=function(i){function e(){r.hoverState!="in"&&u.detach();r.$element&&r.$element.removeAttr("aria-describedby").trigger("hidden.bs."+r.type);i&&i()}var r=this,u=n(this.$tip),f=n.Event("hide.bs."+this.type);if(this.$element.trigger(f),!f.isDefaultPrevented())return u.removeClass("in"),n.support.transition&&u.hasClass("fade")?u.one("bsTransitionEnd",e).emulateTransitionEnd(t.TRANSITION_DURATION):e(),this.hoverState=null,this};t.prototype.fixTitle=function(){var n=this.$element;(n.attr("title")||typeof n.attr("data-original-title")!="string")&&n.attr("data-original-title",n.attr("title")||"").attr("title","")};t.prototype.hasContent=function(){return this.getTitle()};t.prototype.getPosition=function(t){t=t||this.$element;var r=t[0],u=r.tagName=="BODY",i=r.getBoundingClientRect();i.width==null&&(i=n.extend({},i,{width:i.right-i.left,height:i.bottom-i.top}));var f=window.SVGElement&&r instanceof window.SVGElement,e=u?{top:0,left:0}:f?null:t.offset(),o={scroll:u?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},s=u?{width:n(window).width(),height:n(window).height()}:null;return n.extend({},i,o,s,e)};t.prototype.getCalculatedOffset=function(n,t,i,r){return n=="bottom"?{top:t.top+t.height,left:t.left+t.width/2-i/2}:n=="top"?{top:t.top-r,left:t.left+t.width/2-i/2}:n=="left"?{top:t.top+t.height/2-r/2,left:t.left-i}:{top:t.top+t.height/2-r/2,left:t.left+t.width}};t.prototype.getViewportAdjustedDelta=function(n,t,i,r){var f={top:0,left:0},e,u,o,s,h,c;return this.$viewport?(e=this.options.viewport&&this.options.viewport.padding||0,u=this.getPosition(this.$viewport),/right|left/.test(n)?(o=t.top-e-u.scroll,s=t.top+e-u.scroll+r,o<u.top?f.top=u.top-o:s>u.top+u.height&&(f.top=u.top+u.height-s)):(h=t.left-e,c=t.left+e+i,h<u.left?f.left=u.left-h:c>u.right&&(f.left=u.left+u.width-c)),f):f};t.prototype.getTitle=function(){var t=this.$element,n=this.options;return t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title)};t.prototype.getUID=function(n){do n+=~~(Math.random()*1e6);while(document.getElementById(n));return n};t.prototype.tip=function(){if(!this.$tip&&(this.$tip=n(this.options.template),this.$tip.length!=1))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip};t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")};t.prototype.enable=function(){this.enabled=!0};t.prototype.disable=function(){this.enabled=!1};t.prototype.toggleEnabled=function(){this.enabled=!this.enabled};t.prototype.toggle=function(t){var i=this;t&&(i=n(t.currentTarget).data("bs."+this.type),i||(i=new this.constructor(t.currentTarget,this.getDelegateOptions()),n(t.currentTarget).data("bs."+this.type,i)));t?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)};t.prototype.destroy=function(){var n=this;clearTimeout(this.timeout);this.hide(function(){n.$element.off("."+n.type).removeData("bs."+n.type);n.$tip&&n.$tip.detach();n.$tip=null;n.$arrow=null;n.$viewport=null;n.$element=null})};i=n.fn.tooltip;n.fn.tooltip=r;n.fn.tooltip.Constructor=t;n.fn.tooltip.noConflict=function(){return n.fn.tooltip=i,this}}(jQuery);+function(n){"use strict";function r(i){return this.each(function(){var u=n(this),r=u.data("bs.popover"),f=typeof i=="object"&&i;(r||!/destroy|hide/.test(i))&&(r||u.data("bs.popover",r=new t(this,f)),typeof i=="string"&&r[i]())})}var t=function(n,t){this.init("popover",n,t)},i;if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");t.VERSION="3.3.7";t.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'});t.prototype=n.extend({},n.fn.tooltip.Constructor.prototype);t.prototype.constructor=t;t.prototype.getDefaults=function(){return t.DEFAULTS};t.prototype.setContent=function(){var n=this.tip(),i=this.getTitle(),t=this.getContent();n.find(".popover-title")[this.options.html?"html":"text"](i);n.find(".popover-content").children().detach().end()[this.options.html?typeof t=="string"?"html":"append":"text"](t);n.removeClass("fade top bottom left right in");n.find(".popover-title").html()||n.find(".popover-title").hide()};t.prototype.hasContent=function(){return this.getTitle()||this.getContent()};t.prototype.getContent=function(){var t=this.$element,n=this.options;return t.attr("data-content")||(typeof n.content=="function"?n.content.call(t[0]):n.content)};t.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};i=n.fn.popover;n.fn.popover=r;n.fn.popover.Constructor=t;n.fn.popover.noConflict=function(){return n.fn.popover=i,this}}(jQuery);+function(n){"use strict";function t(i,r){this.$body=n(document.body);this.$scrollElement=n(i).is(document.body)?n(window):n(i);this.options=n.extend({},t.DEFAULTS,r);this.selector=(this.options.target||"")+" .nav li > a";this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on("scroll.bs.scrollspy",n.proxy(this.process,this));this.refresh();this.process()}function i(i){return this.each(function(){var u=n(this),r=u.data("bs.scrollspy"),f=typeof i=="object"&&i;r||u.data("bs.scrollspy",r=new t(this,f));typeof i=="string"&&r[i]()})}t.VERSION="3.3.7";t.DEFAULTS={offset:10};t.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)};t.prototype.refresh=function(){var t=this,i="offset",r=0;this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();n.isWindow(this.$scrollElement[0])||(i="position",r=this.$scrollElement.scrollTop());this.$body.find(this.selector).map(function(){var f=n(this),u=f.data("target")||f.attr("href"),t=/^#./.test(u)&&n(u);return t&&t.length&&t.is(":visible")&&[[t[i]().top+r,u]]||null}).sort(function(n,t){return n[0]-t[0]}).each(function(){t.offsets.push(this[0]);t.targets.push(this[1])})};t.prototype.process=function(){var i=this.$scrollElement.scrollTop()+this.options.offset,f=this.getScrollHeight(),e=this.options.offset+f-this.$scrollElement.height(),t=this.offsets,r=this.targets,u=this.activeTarget,n;if(this.scrollHeight!=f&&this.refresh(),i>=e)return u!=(n=r[r.length-1])&&this.activate(n);if(u&&i<t[0])return this.activeTarget=null,this.clear();for(n=t.length;n--;)u!=r[n]&&i>=t[n]&&(t[n+1]===undefined||i<t[n+1])&&this.activate(r[n])};t.prototype.activate=function(t){this.activeTarget=t;this.clear();var r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=n(r).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active"));i.trigger("activate.bs.scrollspy")};t.prototype.clear=function(){n(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var r=n.fn.scrollspy;n.fn.scrollspy=i;n.fn.scrollspy.Constructor=t;n.fn.scrollspy.noConflict=function(){return n.fn.scrollspy=r,this};n(window).on("load.bs.scrollspy.data-api",function(){n('[data-spy="scroll"]').each(function(){var t=n(this);i.call(t,t.data())})})}(jQuery);+function(n){"use strict";function r(i){return this.each(function(){var u=n(this),r=u.data("bs.tab");r||u.data("bs.tab",r=new t(this));typeof i=="string"&&r[i]()})}var t=function(t){this.element=n(t)},u,i;t.VERSION="3.3.7";t.TRANSITION_DURATION=150;t.prototype.show=function(){var t=this.element,f=t.closest("ul:not(.dropdown-menu)"),i=t.data("target"),u;if(i||(i=t.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var r=f.find(".active:last a"),e=n.Event("hide.bs.tab",{relatedTarget:t[0]}),o=n.Event("show.bs.tab",{relatedTarget:r[0]});(r.trigger(e),t.trigger(o),o.isDefaultPrevented()||e.isDefaultPrevented())||(u=n(i),this.activate(t.closest("li"),f),this.activate(u,u.parent(),function(){r.trigger({type:"hidden.bs.tab",relatedTarget:t[0]});t.trigger({type:"shown.bs.tab",relatedTarget:r[0]})}))}};t.prototype.activate=function(i,r,u){function o(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1);i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0);e?(i[0].offsetWidth,i.addClass("in")):i.removeClass("fade");i.parent(".dropdown-menu").length&&i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0);u&&u()}var f=r.find("> .active"),e=u&&n.support.transition&&(f.length&&f.hasClass("fade")||!!r.find("> .fade").length);f.length&&e?f.one("bsTransitionEnd",o).emulateTransitionEnd(t.TRANSITION_DURATION):o();f.removeClass("in")};u=n.fn.tab;n.fn.tab=r;n.fn.tab.Constructor=t;n.fn.tab.noConflict=function(){return n.fn.tab=u,this};i=function(t){t.preventDefault();r.call(n(this),"show")};n(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery);+function(n){"use strict";function i(i){return this.each(function(){var u=n(this),r=u.data("bs.affix"),f=typeof i=="object"&&i;r||u.data("bs.affix",r=new t(this,f));typeof i=="string"&&r[i]()})}var t=function(i,r){this.options=n.extend({},t.DEFAULTS,r);this.$target=n(this.options.target).on("scroll.bs.affix.data-api",n.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",n.proxy(this.checkPositionWithEventLoop,this));this.$element=n(i);this.affixed=null;this.unpin=null;this.pinnedOffset=null;this.checkPosition()},r;t.VERSION="3.3.7";t.RESET="affix affix-top affix-bottom";t.DEFAULTS={offset:0,target:window};t.prototype.getState=function(n,t,i,r){var u=this.$target.scrollTop(),f=this.$element.offset(),e=this.$target.height();if(i!=null&&this.affixed=="top")return u<i?"top":!1;if(this.affixed=="bottom")return i!=null?u+this.unpin<=f.top?!1:"bottom":u+e<=n-r?!1:"bottom";var o=this.affixed==null,s=o?u:f.top,h=o?e:t;return i!=null&&u<=i?"top":r!=null&&s+h>=n-r?"bottom":!1};t.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(t.RESET).addClass("affix");var n=this.$target.scrollTop(),i=this.$element.offset();return this.pinnedOffset=i.top-n};t.prototype.checkPositionWithEventLoop=function(){setTimeout(n.proxy(this.checkPosition,this),1)};t.prototype.checkPosition=function(){var i,e,o;if(this.$element.is(":visible")){var s=this.$element.height(),r=this.options.offset,f=r.top,u=r.bottom,h=Math.max(n(document).height(),n(document.body).height());if(typeof r!="object"&&(u=f=r),typeof f=="function"&&(f=r.top(this.$element)),typeof u=="function"&&(u=r.bottom(this.$element)),i=this.getState(h,s,f,u),this.affixed!=i){if(this.unpin!=null&&this.$element.css("top",""),e="affix"+(i?"-"+i:""),o=n.Event(e+".bs.affix"),this.$element.trigger(o),o.isDefaultPrevented())return;this.affixed=i;this.unpin=i=="bottom"?this.getPinnedOffset():null;this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix","affixed")+".bs.affix")}i=="bottom"&&this.$element.offset({top:h-s-u})}};r=n.fn.affix;n.fn.affix=i;n.fn.affix.Constructor=t;n.fn.affix.noConflict=function(){return n.fn.affix=r,this};n(window).on("load",function(){n('[data-spy="affix"]').each(function(){var r=n(this),t=r.data();t.offset=t.offset||{};t.offsetBottom!=null&&(t.offset.bottom=t.offsetBottom);t.offsetTop!=null&&(t.offset.top=t.offsetTop);i.call(r,t)})})}(jQuery);
/*! DataTables Bootstrap 3 integration
 * ©2011-2015 SpryMedia Ltd - datatables.net/license
 */
(function(n){typeof define=="function"&&define.amd?define(["jquery","datatables.net"],function(t){return n(t,window,document)}):typeof exports=="object"?module.exports=function(t,i){return t||(t=window),i&&i.fn.dataTable||(i=require("datatables.net")(t,i).$),n(i,t,t.document)}:n(jQuery,window,document)})(function(n,t,i,r){"use strict";var u=n.fn.dataTable;return n.extend(!0,u.defaults,{dom:"<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",renderer:"bootstrap"}),n.extend(u.ext.classes,{sWrapper:"dataTables_wrapper form-inline dt-bootstrap",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm",sProcessing:"dataTables_processing panel panel-default"}),u.ext.renderer.pageButton.bootstrap=function(t,f,e,o,s,h){var y=new u.Api(t),b=t.oClasses,a=t.oLanguage.oPaginate,k=t.oLanguage.oAria.paginate||{},c,l,p=0,w=function(i,r){for(var v,u,d=function(t){t.preventDefault();n(t.currentTarget).hasClass("disabled")||y.page()==t.data.action||y.page(t.data.action).draw("page")},f=0,o=r.length;f<o;f++)if(u=r[f],n.isArray(u))w(i,u);else{c="";l="";switch(u){case"ellipsis":c="&#x2026;";l="disabled";break;case"first":c=a.sFirst;l=u+(s>0?"":" disabled");break;case"previous":c=a.sPrevious;l=u+(s>0?"":" disabled");break;case"next":c=a.sNext;l=u+(s<h-1?"":" disabled");break;case"last":c=a.sLast;l=u+(s<h-1?"":" disabled");break;default:c=u+1;l=s===u?"active":""}c&&(v=n("<li>",{"class":b.sPageButton+" "+l,id:e===0&&typeof u=="string"?t.sTableId+"_"+u:null}).append(n("<a>",{href:"#","aria-controls":t.sTableId,"aria-label":k[u],"data-dt-idx":p,tabindex:t.iTabIndex}).html(c)).appendTo(i),t.oApi._fnBindAction(v,{action:u},d),p++)}},v;try{v=n(f).find(i.activeElement).data("dt-idx")}catch(d){}w(n(f).empty().html('<ul class="pagination"/>').children("ul"),o);v!==r&&n(f).find("[data-dt-idx="+v+"]").focus()},u});
/*!
 * iCheck v1.0.1, http://git.io/arlzeA
 * =================================
 * Powerful jQuery and Zepto plugin for checkboxes and radio buttons customization
 *
 * (c) 2013 Damir Sultanov, http://fronteed.com
 * MIT Licensed
 */
(function(n){function d(n,r,u){var l=n[0],e=/er/.test(u)?s:/bl/.test(u)?f:t,h=u==nt?{checked:l[t],disabled:l[f],indeterminate:n.attr(s)=="true"||n.attr(w)=="false"}:l[e];if(/^(ch|di|in)/.test(u)&&!h)v(n,e);else if(/^(un|en|de)/.test(u)&&h)c(n,e);else if(u==nt)for(e in h)h[e]?v(n,e,!0):c(n,e,!0);else r&&u!="toggle"||(r||n[a]("ifClicked"),h?l[i]!==o&&c(n,e):v(n,e))}function v(l,a,v){var p=l[0],b=l.parent(),nt=a==t,tt=a==s,et=a==f,ut=tt?w:nt?it:"enabled",ot=u(l,ut+y(p[i])),st=u(l,a+y(p[i])),rt,d;p[a]!==!0&&(!v&&a==t&&p[i]==o&&p.name&&(rt=l.closest("form"),d='input[name="'+p.name+'"]',d=rt.length?rt.find(d):n(d),d.each(function(){this!==p&&n(this).data(r)&&c(n(this),a)})),tt?(p[a]=!0,p[t]&&c(l,t,"force")):(v||(p[a]=!0),nt&&p[s]&&c(l,s,!1)),ft(l,nt,a,v));p[f]&&!!u(l,k,!0)&&b.find("."+g).css(k,"default");b[e](st||u(l,a)||"");et?b.attr("aria-disabled","true"):b.attr("aria-checked",tt?"mixed":"true");b[h](ot||u(l,ut)||"")}function c(n,r,o){var c=n[0],l=n.parent(),v=r==t,p=r==s,b=r==f,a=p?w:v?it:"enabled",d=u(n,a+y(c[i])),nt=u(n,r+y(c[i]));c[r]!==!1&&((p||!o||o=="force")&&(c[r]=!1),ft(n,v,a,o));c[f]||!u(n,k,!0)||l.find("."+g).css(k,"pointer");l[h](nt||u(n,r)||"");b?l.attr("aria-disabled","false"):l.attr("aria-checked","false");l[e](d||u(n,a)||"")}function ut(t,i){t.data(r)&&(t.parent().html(t.attr("style",t.data(r).s||"")),i&&t[a](i),t.off(".i").unwrap(),n(b+'[for="'+t[0].id+'"]').add(t.closest(b)).off(".i"))}function u(n,t,i){if(n.data(r))return n.data(r).o[t+(i?"":"Class")]}function y(n){return n.charAt(0).toUpperCase()+n.slice(1)}function ft(n,t,i,r){r||(t&&n[a]("ifToggled"),n[a]("ifChanged")[a]("if"+y(i)))}var r="iCheck",g=r+"-helper",p="checkbox",o="radio",t="checked",it="un"+t,f="disabled",w="determinate",s="in"+w,nt="update",i="type",l="click",rt="touchbegin.i touchend.i",e="addClass",h="removeClass",a="trigger",b="label",k="cursor",tt=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);n.fn[r]=function(u,y){var et='input[type="'+p+'"], input[type="'+o+'"]',k=n(),ht=function(t){t.each(function(){var t=n(this);k=t.is(et)?k.add(t):k.add(t.find(et))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(u))return u=u.toLowerCase(),ht(this),k.each(function(){var t=n(this);u=="destroy"?ut(t,"ifDestroyed"):d(t,!0,u);n.isFunction(y)&&y()});if(typeof u!="object"&&u)return this;var w=n.extend({checkedClass:t,disabledClass:f,indeterminateClass:s,labelHover:!0,aria:!1},u),ot=w.handle,ft=w.hoverClass||"hover",at=w.focusClass||"focus",ct=w.activeClass||"active",lt=!!w.labelHover,st=w.labelHoverClass||"hover",it=(""+w.increaseArea).replace("%","")|0;return(ot==p||ot==o)&&(et='input[type="'+ot+'"]'),it<-50&&(it=-50),ht(this),k.each(function(){var s=n(this);ut(s);var y=this,et=y.id,ot=-it+"%",ht=100+it*2+"%",vt={position:"absolute",top:ot,left:ot,display:"block",width:ht,height:ht,margin:0,padding:0,background:"#fff",border:0,opacity:0},bt=tt?{position:"absolute",visibility:"hidden"}:it?vt:{position:"absolute",opacity:0},kt=y[i]==p?w.checkboxClass||"i"+p:w.radioClass||"i"+o,k=n(b+'[for="'+et+'"]').add(s.closest(b)),yt=!!w.aria,pt=r+"-"+Math.random().toString(36).replace("0.",""),u='<div class="'+kt+'" '+(yt?'role="'+y[i]+'" ':""),wt;if(k.length&&yt&&k.each(function(){u+='aria-labelledby="';this.id?u+=this.id:(this.id=pt,u+=pt);u+='"'}),u=s.wrap(u+"/>")[a]("ifCreated").parent().append(w.insert),wt=n('<ins class="'+g+'"/>').css(vt).appendTo(u),s.data(r,{o:w,s:s.attr("style")}).css(bt),!w.inheritClass||u[e](y.className||""),!!w.inheritID&&et&&u.attr("id",r+"-"+et),u.css("position")=="static"&&u.css("position","relative"),d(s,!0,nt),k.length)k.on(l+".i mouseover.i mouseout.i "+rt,function(t){var r=t[i],o=n(this);if(!y[f]){if(r==l){if(n(t.target).is("a"))return;d(s,!1,!0)}else lt&&(/ut|nd/.test(r)?(u[h](ft),o[h](st)):(u[e](ft),o[e](st)));if(tt)t.stopPropagation();else return!1}});s.on(l+".i focus.i blur.i keyup.i keydown.i keypress.i",function(n){var r=n[i],f=n.keyCode;if(r==l)return!1;if(r=="keydown"&&f==32)return y[i]==o&&y[t]||(y[t]?c(s,t):v(s,t)),!1;r=="keyup"&&y[i]==o?y[t]||v(s,t):/us|ur/.test(r)&&u[r=="blur"?h:e](at)});wt.on(l+" mousedown mouseup mouseover mouseout "+rt,function(n){var t=n[i],r=/wn|up/.test(t)?ct:ft;if(!y[f])if(t==l?d(s,!1,!0):(/wn|er|in/.test(t)?u[e](r):u[h](r+" "+ct),k.length&&lt&&r==ft&&k[/ut|nd/.test(t)?h:e](st)),tt)n.stopPropagation();else return!1})})}})(window.jQuery||window.Zepto);
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/*! DataTables 1.10.16
 * ©2008-2017 SpryMedia Ltd - datatables.net/license
 */
(function(n){"use strict";typeof define=="function"&&define.amd?define(["jquery"],function(t){return n(t,window,document)}):typeof exports=="object"?module.exports=function(t,i){return t||(t=window),i||(i=typeof window!="undefined"?require("jquery"):require("jquery")(t)),n(i,t,t.document)}:n(jQuery,window,document)})(function(n,t,i,r){"use strict";function at(t){var f="a aa ai ao as b fn i m o s ",i,r,u={};n.each(t,function(n){i=n.match(/^([^A-Z]+?)([A-Z])/);i&&f.indexOf(i[1]+" ")!==-1&&(r=n.replace(i[0],i[2].toLowerCase()),u[r]=n,i[1]==="o"&&at(t[n]))});t._hungarianMap=u}function nt(t,i,u){t._hungarianMap||at(t);var f;n.each(i,function(e){f=t._hungarianMap[e];f!==r&&(u||i[f]===r)&&(f.charAt(0)==="o"?(i[f]||(i[f]={}),n.extend(!0,i[f],i[e]),nt(t[f],i[f],u)):i[f]=i[e])})}function fr(n){var i=u.defaults.oLanguage,r=n.sZeroRecords,t;!n.sEmptyTable&&r&&i.sEmptyTable==="No data available in table"&&k(n,n,"sZeroRecords","sEmptyTable");!n.sLoadingRecords&&r&&i.sLoadingRecords==="Loading..."&&k(n,n,"sZeroRecords","sLoadingRecords");n.sInfoThousands&&(n.sThousands=n.sInfoThousands);t=n.sDecimal;t&&ae(t)}function yu(n){var t,i,r;if(a(n,"ordering","bSort"),a(n,"orderMulti","bSortMulti"),a(n,"orderClasses","bSortClasses"),a(n,"orderCellsTop","bSortCellsTop"),a(n,"order","aaSorting"),a(n,"orderFixed","aaSortingFixed"),a(n,"paging","bPaginate"),a(n,"pagingType","sPaginationType"),a(n,"pageLength","iDisplayLength"),a(n,"searching","bFilter"),typeof n.sScrollX=="boolean"&&(n.sScrollX=n.sScrollX?"100%":""),typeof n.scrollX=="boolean"&&(n.scrollX=n.scrollX?"100%":""),t=n.aoSearchCols,t)for(i=0,r=t.length;i<r;i++)t[i]&&nt(u.models.oSearch,t[i])}function pu(t){a(t,"orderable","bSortable");a(t,"orderData","aDataSort");a(t,"orderSequence","asSorting");a(t,"orderDataType","sortDataType");var i=t.aDataSort;typeof i!="number"||n.isArray(i)||(t.aDataSort=[i])}function wu(i){var r;if(!u.__browser){r={};u.__browser=r;var e=n("<div/>").css({position:"fixed",top:0,left:n(t).scrollLeft()*-1,height:1,width:1,overflow:"hidden"}).append(n("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(n("<div/>").css({width:"100%",height:10}))).appendTo("body"),f=e.children(),o=f.children();r.barWidth=f[0].offsetWidth-f[0].clientWidth;r.bScrollOversize=o[0].offsetWidth===100&&f[0].clientWidth!==100;r.bScrollbarLeft=Math.round(o.offset().left)!==1;r.bBounding=e[0].getBoundingClientRect().width?!0:!1;e.remove()}n.extend(i.oBrowser,u.__browser);i.oScroll.iBarWidth=u.__browser.barWidth}function bu(n,t,i,u,f,e){var o=u,s,h=!1;for(i!==r&&(s=i,h=!0);o!==f;)n.hasOwnProperty(o)&&(s=h?t(s,n[o],o,n):n[o],h=!0,o+=e);return s}function er(t,r){var f=u.defaults.column,e=t.aoColumns.length,s=n.extend({},u.models.oColumn,f,{nTh:r?r:i.createElement("th"),sTitle:f.sTitle?f.sTitle:r?r.innerHTML:"",aDataSort:f.aDataSort?f.aDataSort:[e],mData:f.mData?f.mData:e,idx:e}),o;t.aoColumns.push(s);o=t.aoPreSearchCols;o[e]=n.extend({},u.models.oSearch,o[e]);ei(t,e,n(r).data())}function ei(t,i,f){var e=t.aoColumns[i],o=t.oClasses,h=n(e.nTh),a,c,l;e.sWidthOrig||(e.sWidthOrig=h.attr("width")||null,a=(h.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/),a&&(e.sWidthOrig=a[1]));f!==r&&f!==null&&(pu(f),nt(u.defaults.column,f),f.mDataProp===r||f.mData||(f.mData=f.mDataProp),f.sType&&(e._sManualType=f.sType),f.className&&!f.sClass&&(f.sClass=f.className),f.sClass&&h.addClass(f.sClass),n.extend(e,f),k(e,f,"sWidth","sWidthOrig"),f.iDataSort!==r&&(e.aDataSort=[f.iDataSort]),k(e,f,"aDataSort"));var s=e.mData,p=ft(s),y=e.mRender?ft(e.mRender):null,v=function(n){return typeof n=="string"&&n.indexOf("@")!==-1};e._bAttrSrc=n.isPlainObject(s)&&(v(s.sort)||v(s.type)||v(s.filter));e._setter=null;e.fnGetData=function(n,t,i){var u=p(n,t,r,i);return y&&t?y(u,t,n,i):u};e.fnSetData=function(n,t,i){return et(s)(n,t,i)};typeof s!="number"&&(t._rowReadObject=!0);t.oFeatures.bSort||(e.bSortable=!1,h.addClass(o.sSortableNone));c=n.inArray("asc",e.asSorting)!==-1;l=n.inArray("desc",e.asSorting)!==-1;e.bSortable&&(c||l)?c&&!l?(e.sSortingClass=o.sSortableAsc,e.sSortingClassJUI=o.sSortJUIAscAllowed):!c&&l?(e.sSortingClass=o.sSortableDesc,e.sSortingClassJUI=o.sSortJUIDescAllowed):(e.sSortingClass=o.sSortable,e.sSortingClassJUI=o.sSortJUI):(e.sSortingClass=o.sSortableNone,e.sSortingClassJUI="")}function vt(n){var i,t,u,r;if(n.oFeatures.bAutoWidth!==!1)for(i=n.aoColumns,br(n),t=0,u=i.length;t<u;t++)i[t].nTh.style.width=i[t].sWidth;r=n.oScroll;(r.sY!==""||r.sX!=="")&&wi(n);o(n,null,"column-sizing",[n])}function yt(n,t){var i=oi(n,"bVisible");return typeof i[t]=="number"?i[t]:null}function pt(t,i){var u=oi(t,"bVisible"),r=n.inArray(i,u);return r!==-1?r:null}function wt(t){var i=0;return n.each(t.aoColumns,function(t,r){r.bVisible&&n(r.nTh).css("display")!=="none"&&i++}),i}function oi(t,i){var r=[];return n.map(t.aoColumns,function(n,t){n[i]&&r.push(t)}),r}function or(n){for(var c=n.aoColumns,y=n.aoData,h=u.ext.type.detect,e,a,i,v,t,o,s,f=0,l=c.length;f<l;f++)if(t=c[f],s=[],!t.sType&&t._sManualType)t.sType=t._sManualType;else if(!t.sType){for(e=0,a=h.length;e<a;e++){for(i=0,v=y.length;i<v;i++){if(s[i]===r&&(s[i]=p(n,i,f,"type")),o=h[e](s[i],n),!o&&e!==h.length-1)break;if(o==="html")break}if(o){t.sType=o;break}}t.sType||(t.sType="string")}}function ku(t,i,u,f){var s,a,o,v,c,y,h,l=t.aoColumns,e;if(i)for(s=i.length-1;s>=0;s--)for(h=i[s],e=h.targets!==r?h.targets:h.aTargets,n.isArray(e)||(e=[e]),o=0,v=e.length;o<v;o++)if(typeof e[o]=="number"&&e[o]>=0){while(l.length<=e[o])er(t);f(e[o],h)}else if(typeof e[o]=="number"&&e[o]<0)f(l.length+e[o],h);else if(typeof e[o]=="string")for(c=0,y=l.length;c<y;c++)(e[o]=="_all"||n(l[c].nTh).hasClass(e[o]))&&f(c,h);if(u)for(s=0,a=u.length;s<a;s++)f(s,u[s])}function it(t,i,f,e){var o=t.aoData.length,h=n.extend(!0,{},u.models.oRow,{src:f?"dom":"data",idx:o}),c,s,a,l;for(h._aData=i,t.aoData.push(h),c=t.aoColumns,s=0,a=c.length;s<a;s++)c[s].sType=null;return t.aiDisplayMaster.push(o),l=t.rowIdFn(i),l!==r&&(t.aIds[l]=h),(f||!t.oFeatures.bDeferRender)&&lr(t,o,f,e),o}function si(t,i){var r;return i instanceof n||(i=n(i)),i.map(function(n,i){return r=cr(t,i),it(t,r.data,i,r.cells)})}function de(n,t){return t._DT_RowIndex!==r?t._DT_RowIndex:null}function ge(t,i,r){return n.inArray(r,t.aoData[i].anCells)}function p(n,t,i,u){var h=n.iDraw,e=n.aoColumns[i],s=n.aoData[t]._aData,o=e.sDefaultContent,f=e.fnGetData(s,u,{settings:n,row:t,col:i});if(f===r)return n.iDrawError!=h&&o===null&&(tt(n,0,"Requested unknown parameter "+(typeof e.mData=="function"?"{function}":"'"+e.mData+"'")+" for row "+t+", column "+i,4),n.iDrawError=h),o;if((f===s||f===null)&&o!==null&&u!==r)f=o;else if(typeof f=="function")return f.call(s);return f===null&&u=="display"?"":f}function du(n,t,i,r){var u=n.aoColumns[i],f=n.aoData[t]._aData;u.fnSetData(f,r,{settings:n,row:t,col:i})}function sr(t){return n.map(t.match(/(\\.|[^\.])+/g)||[""],function(n){return n.replace(/\\\./g,".")})}function ft(t){var i,u;return n.isPlainObject(t)?(i={},n.each(t,function(n,t){t&&(i[n]=ft(t))}),function(n,t,u,f){var e=i[t]||i._;return e!==r?e(n,t,u,f):n}):t===null?function(n){return n}:typeof t=="function"?function(n,i,r,u){return t(n,i,r,u)}:typeof t=="string"&&(t.indexOf(".")!==-1||t.indexOf("[")!==-1||t.indexOf("(")!==-1)?(u=function(t,i,f){var s,a,h,v,e,o,y,c,p,l;if(f!=="")for(e=sr(f),o=0,y=e.length;o<y;o++){if(s=e[o].match(ht),a=e[o].match(ut),s){if(e[o]=e[o].replace(ht,""),e[o]!==""&&(t=t[e[o]]),h=[],e.splice(0,o+1),v=e.join("."),n.isArray(t))for(c=0,p=t.length;c<p;c++)h.push(u(t[c],i,v));l=s[0].substring(1,s[0].length-1);t=l===""?h:h.join(l);break}else if(a){e[o]=e[o].replace(ut,"");t=t[e[o]]();continue}if(t===null||t[e[o]]===r)return r;t=t[e[o]]}return t},function(n,i){return u(n,i,t)}):function(n){return n[t]}}function et(t){if(n.isPlainObject(t))return et(t._);if(t===null)return function(){};if(typeof t=="function")return function(n,i,r){t(n,"set",i,r)};if(typeof t=="string"&&(t.indexOf(".")!==-1||t.indexOf("[")!==-1||t.indexOf("(")!==-1)){var i=function(t,u,f){for(var s,p,e=sr(f),h,c=e[e.length-1],a,v,l,y,o=0,w=e.length-1;o<w;o++){if(a=e[o].match(ht),v=e[o].match(ut),a){if(e[o]=e[o].replace(ht,""),t[e[o]]=[],h=e.slice(),h.splice(0,o+1),y=h.join("."),n.isArray(u))for(s=0,p=u.length;s<p;s++)l={},i(l,u[s],y),t[e[o]].push(l);else t[e[o]]=u;return}v&&(e[o]=e[o].replace(ut,""),t=t[e[o]](u));(t[e[o]]===null||t[e[o]]===r)&&(t[e[o]]={});t=t[e[o]]}c.match(ut)?t=t[c.replace(ut,"")](u):t[c.replace(ht,"")]=u};return function(n,r){return i(n,r,t)}}return function(n,i){n[t]=i}}function hr(n){return w(n.aoData,"_aData")}function hi(n){n.aoData.length=0;n.aiDisplayMaster.length=0;n.aiDisplay.length=0;n.aIds={}}function ci(n,t,i){for(var f=-1,u=0,e=n.length;u<e;u++)n[u]==t?f=u:n[u]>t&&n[u]--;f!=-1&&i===r&&n.splice(f,1)}function bt(n,t,i,u){var e=n.aoData[t],f,s,c=function(i,r){while(i.childNodes.length)i.removeChild(i.firstChild);i.innerHTML=p(n,t,r,"display")},o,h;if(i!=="dom"&&(i&&i!=="auto"||e.src!=="dom")){if(o=e.anCells,o)if(u!==r)c(o[u],u);else for(f=0,s=o.length;f<s;f++)c(o[f],f)}else e._aData=cr(n,e,u,u===r?r:e._aData).data;if(e._aSortData=null,e._aFilterData=null,h=n.aoColumns,u!==r)h[u].sType=null;else{for(f=0,s=h.length;f<s;f++)h[f].sType=null;ar(n,e)}}function cr(t,i,u,f){var s=[],o=i.firstChild,v,e,h=0,c,d=t.aoColumns,b=t._rowReadObject,l,y,a,k,p,w;if(f=f!==r?f:b?{}:[],l=function(n,t){var i,r,u;typeof n=="string"&&(i=n.indexOf("@"),i!==-1&&(r=n.substring(i+1),u=et(n),u(f,t.getAttribute(r))))},y=function(t){if(u===r||u===h)if(e=d[h],c=n.trim(t.innerHTML),e&&e._bAttrSrc){var i=et(e.mData._);i(f,c);l(e.mData.sort,t);l(e.mData.type,t);l(e.mData.filter,t)}else b?(e._setter||(e._setter=et(e.mData)),e._setter(f,c)):f[h]=c;h++},o)while(o)v=o.nodeName.toUpperCase(),(v=="TD"||v=="TH")&&(y(o),s.push(o)),o=o.nextSibling;else for(s=i.anCells,a=0,k=s.length;a<k;a++)y(s[a]);return p=i.firstChild?i:i.nTr,p&&(w=p.getAttribute("id"),w&&et(t.rowId)(f,w)),{data:f,cells:s}}function lr(t,r,u,f){var c=t.aoData[r],a=c._aData,v=[],l,h,e,s,y;if(c.nTr===null){for(l=u||i.createElement("tr"),c.nTr=l,c.anCells=v,l._DT_RowIndex=r,ar(t,c),s=0,y=t.aoColumns.length;s<y;s++)e=t.aoColumns[s],h=u?f[s]:i.createElement(e.sCellType),h._DT_CellIndex={row:r,column:s},v.push(h),u&&!e.mRender&&e.mData===s||n.isPlainObject(e.mData)&&e.mData._===s+".display"||(h.innerHTML=p(t,r,s,"display")),e.sClass&&(h.className+=" "+e.sClass),e.bVisible&&!u?l.appendChild(h):!e.bVisible&&u&&h.parentNode.removeChild(h),e.fnCreatedCell&&e.fnCreatedCell.call(t.oInstance,h,p(t,r,s),a,r,s);o(t,"aoRowCreatedCallback",null,[l,a,r])}c.nTr.setAttribute("role","row")}function ar(t,i){var u=i.nTr,r=i._aData,f,e;u&&(f=t.rowIdFn(r),f&&(u.id=f),r.DT_RowClass&&(e=r.DT_RowClass.split(" "),i.__rowc=i.__rowc?fi(i.__rowc.concat(e)):e,n(u).removeClass(i.__rowc.join(" ")).addClass(r.DT_RowClass)),r.DT_RowAttr&&n(u).attr(r.DT_RowAttr),r.DT_RowData&&n(u).data(r.DT_RowData))}function gu(t){var r,e,u,l,i,f=t.nTHead,a=t.nTFoot,o=n("th, td",f).length===0,s=t.oClasses,h=t.aoColumns,c;for(o&&(l=n("<tr/>").appendTo(f)),r=0,e=h.length;r<e;r++)i=h[r],u=n(i.nTh).addClass(i.sClass),o&&u.appendTo(l),t.oFeatures.bSort&&(u.addClass(i.sSortingClass),i.bSortable!==!1&&(u.attr("tabindex",t.iTabIndex).attr("aria-controls",t.sTableId),dr(t,i.nTh,r))),i.sTitle!=u[0].innerHTML&&u.html(i.sTitle),tu(t,"header")(t,u,i,s);if(o&&dt(t.aoHeader,f),n(f).find(">tr").attr("role","row"),n(f).find(">tr>th, >tr>td").addClass(s.sHeaderTH),n(a).find(">tr>th, >tr>td").addClass(s.sFooterTH),a!==null)for(c=t.aoFooter[0],r=0,e=c.length;r<e;r++)i=h[r],i.nTf=c[r].cell,i.sClass&&n(i.nTf).addClass(i.sClass)}function kt(t,i,u){var f,a,e,y,v,p,c,o=[],l=[],w=t.aoColumns.length,s,h;if(i){for(u===r&&(u=!1),f=0,a=i.length;f<a;f++){for(o[f]=i[f].slice(),o[f].nTr=i[f].nTr,e=w-1;e>=0;e--)t.aoColumns[e].bVisible||u||o[f].splice(e,1);l.push([])}for(f=0,a=o.length;f<a;f++){if(c=o[f].nTr,c)while(p=c.firstChild)c.removeChild(p);for(e=0,y=o[f].length;e<y;e++)if(s=1,h=1,l[f][e]===r){for(c.appendChild(o[f][e].cell),l[f][e]=1;o[f+s]!==r&&o[f][e].cell==o[f+s][e].cell;)l[f+s][e]=1,s++;while(o[f][e+h]!==r&&o[f][e].cell==o[f][e+h].cell){for(v=0;v<s;v++)l[f+v][e+h]=1;h++}n(o[f][e].cell).attr("rowspan",s).attr("colspan",h)}}}}function rt(t){var ut=o(t,"aoPreDrawCallback","preDraw",[t]),c,l,it,rt,f,nt,i,a,v,p,tt;if(n.inArray(!1,ut)!==-1){b(t,!1);return}var w=[],k=0,d=t.asStripeClasses,g=d.length,ft=t.aoOpenRows.length,e=t.oLanguage,u=t.iInitDisplayStart,s=y(t)=="ssp",h=t.aiDisplay;if(t.bDrawing=!0,u!==r&&u!==-1&&(t._iDisplayStart=s?u:u>=t.fnRecordsDisplay()?0:u,t.iInitDisplayStart=-1),c=t._iDisplayStart,l=t.fnDisplayEnd(),t.bDeferLoading)t.bDeferLoading=!1,t.iDraw++,b(t,!1);else if(s){if(!t.bDestroying&&!tf(t))return}else t.iDraw++;if(h.length!==0)for(it=s?0:c,rt=s?t.aoData.length:l,f=it;f<rt;f++)nt=h[f],i=t.aoData[nt],i.nTr===null&&lr(t,nt),a=i.nTr,g!==0&&(v=d[k%g],i._sRowStripe!=v&&(n(a).removeClass(i._sRowStripe).addClass(v),i._sRowStripe=v)),o(t,"aoRowCallback",null,[a,i._aData,k,f]),w.push(a),k++;else p=e.sZeroRecords,t.iDraw==1&&y(t)=="ajax"?p=e.sLoadingRecords:e.sEmptyTable&&t.fnRecordsTotal()===0&&(p=e.sEmptyTable),w[0]=n("<tr/>",{"class":g?d[0]:""}).append(n("<td />",{valign:"top",colSpan:wt(t),"class":t.oClasses.sRowEmpty}).html(p))[0];o(t,"aoHeaderCallback","header",[n(t.nTHead).children("tr")[0],hr(t),c,l,h]);o(t,"aoFooterCallback","footer",[n(t.nTFoot).children("tr")[0],hr(t),c,l,h]);tt=n(t.nTBody);tt.children().detach();tt.append(n(w));o(t,"aoDrawCallback","draw",[t]);t.bSorted=!1;t.bFiltered=!1;t.bDrawing=!1}function ot(n,t){var i=n.oFeatures,r=i.bSort,u=i.bFilter;r&&ie(n);u?gt(n,n.oPreviousSearch):n.aiDisplay=n.aiDisplayMaster.slice();t!==!0&&(n._iDisplayStart=0);n._drawHold=t;rt(n);n._drawHold=!1}function nf(t){var v=t.oClasses,g=n(t.nTable),k=n("<div/>").insertBefore(g),h=t.oFeatures,o=n("<div/>",{id:t.sTableId+"_wrapper","class":v.sWrapper+(t.nTFoot?"":" "+v.sNoFooter)}),c,f,i,s,y,r,l,e,p,w,a,d,b;for(t.nHolding=k[0],t.nTableWrapper=o[0],t.nTableReinsertBefore=t.nTable.nextSibling,c=t.sDom.split(""),e=0;e<c.length;e++){if(f=null,i=c[e],i=="<"){if(s=n("<div/>")[0],y=c[e+1],y=="'"||y=='"'){for(r="",l=2;c[e+l]!=y;)r+=c[e+l],l++;r=="H"?r=v.sJUIHeader:r=="F"&&(r=v.sJUIFooter);r.indexOf(".")!=-1?(p=r.split("."),s.id=p[0].substr(1,p[0].length-1),s.className=p[1]):r.charAt(0)=="#"?s.id=r.substr(1,r.length-1):s.className=r;e+=l}o.append(s);o=n(s)}else if(i==">")o=o.parent();else if(i=="l"&&h.bPaginate&&h.bLengthChange)f=pf(t);else if(i=="f"&&h.bFilter)f=ff(t);else if(i=="r"&&h.bProcessing)f=bf(t);else if(i=="t")f=kf(t);else if(i=="i"&&h.bInfo)f=af(t);else if(i=="p"&&h.bPaginate)f=wf(t);else if(u.ext.feature.length!==0)for(w=u.ext.feature,a=0,d=w.length;a<d;a++)if(i==w[a].cFeature){f=w[a].fnInit(t);break}f&&(b=t.aanFeatures,b[i]||(b[i]=[]),b[i].push(f),o.append(f))}k.replaceWith(o);t.nHolding=null}function dt(t,i){var c=n(i).children("tr"),l,u,r,o,s,h,a,v,f,e,y,p=function(n,t,i){for(var r=n[t];r[i];)i++;return i};for(t.splice(0,t.length),r=0,h=c.length;r<h;r++)t.push([]);for(r=0,h=c.length;r<h;r++)for(l=c[r],v=0,u=l.firstChild;u;){if(u.nodeName.toUpperCase()=="TD"||u.nodeName.toUpperCase()=="TH")for(f=u.getAttribute("colspan")*1,e=u.getAttribute("rowspan")*1,f=!f||f===0||f===1?1:f,e=!e||e===0||e===1?1:e,a=p(t,r,v),y=f===1?!0:!1,s=0;s<f;s++)for(o=0;o<e;o++)t[r+o][a+s]={cell:u,unique:y},t[r+o].nTr=l;u=u.nextSibling}}function li(n,t,i){var f=[],u,e,r,o;for(i||(i=n.aoHeader,t&&(i=[],dt(i,t))),u=0,e=i.length;u<e;u++)for(r=0,o=i[u].length;r<o;r++)!i[u][r].unique||f[r]&&n.bSortCellsTop||(f[r]=i[u][r].cell);return f}function ai(t,i,r){var f,l,s,c;o(t,"aoServerParams","serverParams",[i]);i&&n.isArray(i)&&(f={},l=/(.*?)\[\]$/,n.each(i,function(n,t){var r=t.name.match(l),i;r?(i=r[0],f[i]||(f[i]=[]),f[i].push(t.value)):f[t.name]=t.value}),i=f);var e,u=t.ajax,a=t.oInstance,h=function(n){o(t,null,"xhr",[t,n,t.jqXHR]);r(n)};n.isPlainObject(u)&&u.data&&(e=u.data,s=n.isFunction(e)?e(i,t):e,i=n.isFunction(e)&&s?s:n.extend(!0,i,s),delete u.data);c={data:i,success:function(n){var i=n.error||n.sError;i&&tt(t,0,i);t.json=n;h(n)},dataType:"json",cache:!1,type:t.sServerMethod,error:function(i,r){var u=o(t,null,"xhr",[t,null,t.jqXHR]);n.inArray(!0,u)===-1&&(r=="parsererror"?tt(t,0,"Invalid JSON response",1):i.readyState===4&&tt(t,0,"Ajax error",7));b(t,!1)}};t.oAjaxData=i;o(t,null,"preXhr",[t,i]);t.fnServerData?t.fnServerData.call(a,t.sAjaxSource,n.map(i,function(n,t){return{name:t,value:n}}),h,t):t.sAjaxSource||typeof u=="string"?t.jqXHR=n.ajax(n.extend(c,{url:u||t.sAjaxSource})):n.isFunction(u)?t.jqXHR=u.call(a,i,h,t):(t.jqXHR=n.ajax(n.extend(c,u)),u.data=e)}function tf(n){return n.bAjaxDataGet?(n.iDraw++,b(n,!0),ai(n,rf(n),function(t){uf(n,t)}),!1):!0}function rf(t){var c=t.aoColumns,y=c.length,e=t.oFeatures,h=t.oPreviousSearch,d=t.aoPreSearchCols,r,l=[],a,f,o,p=ct(t),b=t._iDisplayStart,k=e.bPaginate!==!1?t._iDisplayLength:-1,i=function(n,t){l.push({name:n,value:t})},s,v;for(i("sEcho",t.iDraw),i("iColumns",y),i("sColumns",w(c,"sName").join(",")),i("iDisplayStart",b),i("iDisplayLength",k),s={draw:t.iDraw,columns:[],order:[],start:b,length:k,search:{value:h.sSearch,regex:h.bRegex}},r=0;r<y;r++)f=c[r],o=d[r],a=typeof f.mData=="function"?"function":f.mData,s.columns.push({data:a,name:f.sName,searchable:f.bSearchable,orderable:f.bSortable,search:{value:o.sSearch,regex:o.bRegex}}),i("mDataProp_"+r,a),e.bFilter&&(i("sSearch_"+r,o.sSearch),i("bRegex_"+r,o.bRegex),i("bSearchable_"+r,f.bSearchable)),e.bSort&&i("bSortable_"+r,f.bSortable);return(e.bFilter&&(i("sSearch",h.sSearch),i("bRegex",h.bRegex)),e.bSort&&(n.each(p,function(n,t){s.order.push({column:t.col,dir:t.dir});i("iSortCol_"+n,t.col);i("sSortDir_"+n,t.dir)}),i("iSortingCols",p.length)),v=u.ext.legacy.ajax,v===null)?t.sAjaxSource?l:s:v?l:s}function uf(n,t){var u=function(n,i){return t[n]!==r?t[n]:t[i]},e=vi(n,t),f=u("sEcho","draw"),s=u("iTotalRecords","recordsTotal"),h=u("iTotalDisplayRecords","recordsFiltered"),i,o;if(f){if(f*1<n.iDraw)return;n.iDraw=f*1}for(hi(n),n._iRecordsTotal=parseInt(s,10),n._iRecordsDisplay=parseInt(h,10),i=0,o=e.length;i<o;i++)it(n,e[i]);n.aiDisplay=n.aiDisplayMaster.slice();n.bAjaxDataGet=!1;rt(n);n._bInitComplete||pi(n,t);n.bAjaxDataGet=!0;b(n,!1)}function vi(t,i){var u=n.isPlainObject(t.ajax)&&t.ajax.dataSrc!==r?t.ajax.dataSrc:t.sAjaxDataProp;return u==="data"?i.aaData||i[u]:u!==""?ft(u)(i):i}function ff(t){var f=t.oClasses,e=t.sTableId,o=t.oLanguage,r=t.oPreviousSearch,s=t.aanFeatures,h='<input type="search" class="'+f.sFilterInput+'"/>',u=o.sSearch;u=u.match(/_INPUT_/)?u.replace("_INPUT_",h):u+h;var c=n("<div/>",{id:s.f?null:e+"_filter","class":f.sFilter}).append(n("<label/>").append(u)),l=function(){var i=s.f,n=this.value?this.value:"";n!=r.sSearch&&(gt(t,{sSearch:n,bRegex:r.bRegex,bSmart:r.bSmart,bCaseInsensitive:r.bCaseInsensitive}),t._iDisplayStart=0,rt(t))},a=t.searchDelay!==null?t.searchDelay:y(t)==="ssp"?400:0,v=n("input",c).val(r.sSearch).attr("placeholder",o.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",a?bi(l,a):l).on("keypress.DT",function(n){if(n.keyCode==13)return!1}).attr("aria-controls",e);n(t.nTable).on("search.dt.DT",function(n,u){if(t===u)try{v[0]!==i.activeElement&&v.val(r.sSearch)}catch(f){}});return c[0]}function gt(n,t,i){var e=n.oPreviousSearch,f=n.aoPreSearchCols,s=function(n){e.sSearch=n.sSearch;e.bRegex=n.bRegex;e.bSmart=n.bSmart;e.bCaseInsensitive=n.bCaseInsensitive},h=function(n){return n.bEscapeRegex!==r?!n.bEscapeRegex:n.bRegex},u;if(or(n),y(n)!="ssp"){for(sf(n,t.sSearch,i,h(t),t.bSmart,t.bCaseInsensitive),s(t),u=0;u<f.length;u++)of(n,f[u].sSearch,u,h(f[u]),f[u].bSmart,f[u].bCaseInsensitive);ef(n)}else s(t);n.bFiltered=!0;o(n,null,"search",[n])}function ef(t){for(var s,i,c,h=u.ext.search,r=t.aiDisplay,e,f,o=0,l=h.length;o<l;o++){for(s=[],i=0,c=r.length;i<c;i++)f=r[i],e=t.aoData[f],h[o](t,e._aFilterData,f,e._aData,i)&&s.push(f);r.length=0;n.merge(r,s)}}function of(n,t,i,r,u,f){var e;if(t!==""){var s,h=[],o=n.aiDisplay,c=vr(t,r,u,f);for(e=0;e<o.length;e++)s=n.aoData[o[e]]._aFilterData[i],c.test(s)&&h.push(o[e]);n.aiDisplay=h}}function sf(n,t,i,r,f,e){var v=vr(t,r,f,e),h=n.oPreviousSearch.sSearch,c=n.aiDisplayMaster,s,l,o,a=[];if(u.ext.search.length!==0&&(i=!0),l=hf(n),t.length<=0)n.aiDisplay=c.slice();else{for((l||i||h.length>t.length||t.indexOf(h)!==0||n.bSorted)&&(n.aiDisplay=c.slice()),s=n.aiDisplay,o=0;o<s.length;o++)v.test(n.aoData[s[o]]._sFilterRow)&&a.push(s[o]);n.aiDisplay=a}}function vr(t,i,r,u){if(t=i?t:yr(t),r){var f=n.map(t.match(/"[^"]+"|[^ ]+/g)||[""],function(n){if(n.charAt(0)==='"'){var t=n.match(/^"(.*)"$/);n=t?t[1]:n}return n.replace('"',"")});t="^(?=.*?"+f.join(")(?=.*?")+").*$"}return new RegExp(t,u?"i":"")}function hf(n){for(var s=n.aoColumns,f,r,c,e,t,o,l=u.ext.type.search,a=!1,i=0,h=n.aoData.length;i<h;i++)if(o=n.aoData[i],!o._aFilterData){for(e=[],r=0,c=s.length;r<c;r++)f=s[r],f.bSearchable?(t=p(n,i,r,"filter"),l[f.sType]&&(t=l[f.sType](t)),t===null&&(t=""),typeof t!="string"&&t.toString&&(t=t.toString())):t="",t.indexOf&&t.indexOf("&")!==-1&&(yi.innerHTML=t,t=no?yi.textContent:yi.innerText),t.replace&&(t=t.replace(/[\r\n]/g,"")),e.push(t);o._aFilterData=e;o._sFilterRow=e.join("  ");a=!0}return a}function cf(n){return{search:n.sSearch,smart:n.bSmart,regex:n.bRegex,caseInsensitive:n.bCaseInsensitive}}function lf(n){return{sSearch:n.search,bSmart:n.smart,bRegex:n.regex,bCaseInsensitive:n.caseInsensitive}}function af(t){var i=t.sTableId,r=t.aanFeatures.i,u=n("<div/>",{"class":t.oClasses.sInfo,id:r?null:i+"_info"});return r||(t.aoDrawCallback.push({fn:vf,sName:"information"}),u.attr("role","status").attr("aria-live","polite"),n(t.nTable).attr("aria-describedby",i+"_info")),u[0]}function vf(t){var e=t.aanFeatures.i,f;if(e.length!==0){var r=t.oLanguage,s=t._iDisplayStart+1,h=t.fnDisplayEnd(),o=t.fnRecordsTotal(),u=t.fnRecordsDisplay(),i=u?r.sInfo:r.sInfoEmpty;u!==o&&(i+=" "+r.sInfoFiltered);i+=r.sInfoPostFix;i=yf(t,i);f=r.fnInfoCallback;f!==null&&(i=f.call(t.oInstance,t,s,h,o,u,i));n(e).html(i)}}function yf(n,t){var i=n.fnFormatNumber,u=n._iDisplayStart+1,r=n._iDisplayLength,f=n.fnRecordsDisplay(),e=r===-1;return t.replace(/_START_/g,i.call(n,u)).replace(/_END_/g,i.call(n,n.fnDisplayEnd())).replace(/_MAX_/g,i.call(n,n.fnRecordsTotal())).replace(/_TOTAL_/g,i.call(n,f)).replace(/_PAGE_/g,i.call(n,e?1:Math.ceil(u/r))).replace(/_PAGES_/g,i.call(n,e?1:Math.ceil(f/r)))}function ni(n){var t,u,e=n.iInitDisplayStart,f=n.aoColumns,i,s=n.oFeatures,c=n.bDeferLoading,r;if(!n.bInitialised){setTimeout(function(){ni(n)},200);return}for(nf(n),gu(n),kt(n,n.aoHeader),kt(n,n.aoFooter),b(n,!0),s.bAutoWidth&&br(n),t=0,u=f.length;t<u;t++)i=f[t],i.sWidth&&(i.nTh.style.width=h(i.sWidth));o(n,null,"preInit",[n]);ot(n);r=y(n);(r!="ssp"||c)&&(r=="ajax"?ai(n,[],function(i){var r=vi(n,i);for(t=0;t<r.length;t++)it(n,r[t]);n.iInitDisplayStart=e;ot(n);b(n,!1);pi(n,i)},n):(b(n,!1),pi(n)))}function pi(n,t){n._bInitComplete=!0;(t||n.oInit.aaData)&&vt(n);o(n,null,"plugin-init",[n,t]);o(n,"aoInitComplete","init",[n,t])}function pr(n,t){var i=parseInt(t,10);n._iDisplayLength=i;nu(n);o(n,null,"length",[n,i])}function pf(t){for(var r,o=t.oClasses,f=t.sTableId,u=t.aLengthMenu,s=n.isArray(u[0]),h=s?u[0]:u,e=s?u[1]:u,c=n("<select/>",{name:f+"_length","aria-controls":f,"class":o.sLengthSelect}),i=0,l=h.length;i<l;i++)c[0][i]=new Option(typeof e[i]=="number"?t.fnFormatNumber(e[i]):e[i],h[i]);r=n("<div><label/><\/div>").addClass(o.sLength);t.aanFeatures.l||(r[0].id=f+"_length");r.children().append(t.oLanguage.sLengthMenu.replace("_MENU_",c[0].outerHTML));n("select",r).val(t._iDisplayLength).on("change.DT",function(){pr(t,n(this).val());rt(t)});n(t.nTable).on("length.dt.DT",function(i,u,f){t===u&&n("select",r).val(f)});return r[0]}function wf(t){var e=t.sPaginationType,i=u.ext.pager[e],o=typeof i=="function",s=function(n){rt(n)},r=n("<div/>").addClass(t.oClasses.sPaging+e)[0],f=t.aanFeatures;return o||i.fnInit(t,r,s),f.p||(r.id=t.sTableId+"_paginate",t.aoDrawCallback.push({fn:function(n){if(o)for(var l=n._iDisplayStart,r=n._iDisplayLength,a=n.fnRecordsDisplay(),u=r===-1,e=u?0:Math.ceil(l/r),h=u?1:Math.ceil(a/r),v=i(e,h),t=0,c=f.p.length;t<c;t++)tu(n,"pageButton")(n,f.p[t],t,v,e,h);else i.fnUpdate(n,s)},sName:"pagination"})),r}function wr(n,t,i){var r=n._iDisplayStart,u=n._iDisplayLength,f=n.fnRecordsDisplay(),e;return f===0||u===-1?r=0:typeof t=="number"?(r=t*u,r>f&&(r=0)):t=="first"?r=0:t=="previous"?(r=u>=0?r-u:0,r<0&&(r=0)):t=="next"?r+u<f&&(r+=u):t=="last"?r=Math.floor((f-1)/u)*u:tt(n,0,"Unknown paging action: "+t,5),e=n._iDisplayStart!==r,n._iDisplayStart=r,e&&(o(n,null,"page",[n]),i&&rt(n)),e}function bf(t){return n("<div/>",{id:t.aanFeatures.r?null:t.sTableId+"_processing","class":t.oClasses.sProcessing}).html(t.oLanguage.sProcessing).insertBefore(t.nTable)[0]}function b(t,i){t.oFeatures.bProcessing&&n(t.aanFeatures.r).css("display",i?"block":"none");o(t,null,"processing",[t,i])}function kf(t){var i=n(t.nTable),r,c;if(i.attr("role","grid"),r=t.oScroll,r.sX===""&&r.sY==="")return t.nTable;var u=r.sX,y=r.sY,f=t.oClasses,s=i.children("caption"),p=s.length?s[0]._captionSide:null,k=n(i[0].cloneNode(!1)),d=n(i[0].cloneNode(!1)),o=i.children("tfoot"),e="<div/>",l=function(n){return n?h(n):null};o.length||(o=null);c=n(e,{"class":f.sScrollWrapper}).append(n(e,{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:u?l(u):"100%"}).append(n(e,{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:r.sXInner||"100%"}).append(k.removeAttr("id").css("margin-left",0).append(p==="top"?s:null).append(i.children("thead"))))).append(n(e,{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:l(u)}).append(i));o&&c.append(n(e,{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:u?l(u):"100%"}).append(n(e,{"class":f.sScrollFootInner}).append(d.removeAttr("id").css("margin-left",0).append(p==="bottom"?s:null).append(i.children("tfoot")))));var a=c.children(),w=a[0],v=a[1],b=o?a[2]:null;if(u)n(v).on("scroll.DT",function(){var n=this.scrollLeft;w.scrollLeft=n;o&&(b.scrollLeft=n)});return n(v).css(y&&r.bCollapse?"max-height":"height",y),t.nScrollHead=w,t.nScrollBody=v,t.nScrollFoot=b,t.aoDrawCallback.push({fn:wi,sName:"scrolling"}),c[0]}function wi(t){var y=t.oScroll,k=y.sX,g=y.sXInner,ri=y.sY,e=y.iBarWidth,nt=n(t.nScrollHead),ui=nt[0].style,ct=nt.children("div"),lt=ct[0].style,fi=ct.children("table"),u=t.nScrollBody,l=n(u),it=u.style,ei=n(t.nScrollFoot),rt=ei.children("div"),oi=rt.children("table"),at=n(t.nTHead),i=n(t.nTable),pt=i[0],p=pt.style,f=t.nTFoot?n(t.nTFoot):null,wt=t.oBrowser,ut=wt.bScrollOversize,si=w(t.aoColumns,"nTh"),bt,kt,a,o,b,dt,ft=[],et=[],gt=[],ni=[],ti,s,c,ii=function(n){var t=n.style;t.paddingTop="0";t.paddingBottom="0";t.borderTopWidth="0";t.borderBottomWidth="0";t.height=0},ot=u.scrollHeight>u.clientHeight,v,st,ht;if(t.scrollBarVis!==ot&&t.scrollBarVis!==r){t.scrollBarVis=ot;vt(t);return}t.scrollBarVis=ot;i.children("thead, tfoot").remove();f&&(dt=f.clone().prependTo(i),kt=f.find("tr"),o=dt.find("tr"));b=at.clone().prependTo(i);bt=at.find("tr");a=b.find("tr");b.find("th, td").removeAttr("tabindex");k||(it.width="100%",nt[0].style.width="100%");n.each(li(t,b),function(n,i){ti=yt(t,n);i.style.width=t.aoColumns[ti].sWidth});f&&d(function(n){n.style.width=""},o);c=i.outerWidth();k===""?(p.width="100%",ut&&(i.find("tbody").height()>u.offsetHeight||l.css("overflow-y")=="scroll")&&(p.width=h(i.outerWidth()-e)),c=i.outerWidth()):g!==""&&(p.width=h(g),c=i.outerWidth());d(ii,a);d(function(t){gt.push(t.innerHTML);ft.push(h(n(t).css("width")))},a);d(function(t,i){n.inArray(t,si)!==-1&&(t.style.width=ft[i])},bt);n(a).height(0);f&&(d(ii,o),d(function(t){ni.push(t.innerHTML);et.push(h(n(t).css("width")))},o),d(function(n,t){n.style.width=et[t]},kt),n(o).height(0));d(function(n,t){n.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+gt[t]+"<\/div>";n.style.width=ft[t]},a);f&&d(function(n,t){n.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+ni[t]+"<\/div>";n.style.width=et[t]},o);i.outerWidth()<c?(s=u.scrollHeight>u.offsetHeight||l.css("overflow-y")=="scroll"?c+e:c,ut&&(u.scrollHeight>u.offsetHeight||l.css("overflow-y")=="scroll")&&(p.width=h(s-e)),(k===""||g!=="")&&tt(t,1,"Possible column misalignment",6)):s="100%";it.width=h(s);ui.width=h(s);f&&(t.nScrollFoot.style.width=h(s));ri||ut&&(it.height=h(pt.offsetHeight+e));v=i.outerWidth();fi[0].style.width=h(v);lt.width=h(v);st=i.height()>u.clientHeight||l.css("overflow-y")=="scroll";ht="padding"+(wt.bScrollbarLeft?"Left":"Right");lt[ht]=st?e+"px":"0px";f&&(oi[0].style.width=h(v),rt[0].style.width=h(v),rt[0].style[ht]=st?e+"px":"0px");i.children("colgroup").insertBefore(i.children("thead"));l.scroll();(t.bSorted||t.bFiltered)&&!t._drawHold&&(u.scrollTop=0)}function d(n,t,i){for(var e=0,u=0,o=t.length,r,f;u<o;){for(r=t[u].firstChild,f=i?i[u].firstChild:null;r;)r.nodeType===1&&(i?n(r,f,e):n(r,e),e++),r=r.nextSibling,f=i?f.nextSibling:null;u++}}function br(i){var c=i.nTable,l=i.aoColumns,y=i.oScroll,p=y.sY,a=y.sX,it=y.sXInner,w=l.length,e=oi(i,"bVisible"),o=n("th",i.nTHead),s=c.getAttribute("width"),v=c.parentNode,rt=!1,r,f,b,ut=i.oBrowser,ft=ut.bScrollOversize,k=c.style.width,d,u,et,ot,g,tt;for(k&&k.indexOf("%")!==-1&&(s=k),r=0;r<e.length;r++)f=l[e[r]],f.sWidth!==null&&(f.sWidth=gf(f.sWidthOrig,v),rt=!0);if(!ft&&(rt||a||p||w!=wt(i)||w!=o.length)){for(u=n(c).clone().css("visibility","hidden").removeAttr("id"),u.find("tbody tr").remove(),et=n("<tr/>").appendTo(u.find("tbody")),u.find("thead, tfoot").remove(),u.append(n(i.nTHead).clone()).append(n(i.nTFoot).clone()),u.find("tfoot th, tfoot td").css("width",""),o=li(i,u.find("thead")[0]),r=0;r<e.length;r++)f=l[e[r]],o[r].style.width=f.sWidthOrig!==null&&f.sWidthOrig!==""?h(f.sWidthOrig):"",f.sWidthOrig&&a&&n(o[r]).append(n("<div/>").css({width:f.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(i.aoData.length)for(r=0;r<e.length;r++)b=e[r],f=l[b],n(ne(i,b)).clone(!1).append(f.sContentPadding).appendTo(et);for(n("[name]",u).removeAttr("name"),ot=n("<div/>").css(a||p?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(u).appendTo(v),a&&it?u.width(it):a?(u.css("width","auto"),u.removeAttr("width"),u.width()<v.clientWidth&&s&&u.width(v.clientWidth)):p?u.width(v.clientWidth):s&&u.width(s),g=0,r=0;r<e.length;r++){var nt=n(o[r]),ht=nt.outerWidth()-nt.width(),st=ut.bBounding?Math.ceil(o[r].getBoundingClientRect().width):nt.outerWidth();g+=st;l[e[r]].sWidth=h(st-ht)}c.style.width=h(g);ot.remove()}else for(r=0;r<w;r++)d=yt(i,r),d!==null&&(l[d].sWidth=h(o.eq(r).width()));s&&(c.style.width=h(s));(s||a)&&!i._reszEvt&&(tt=function(){n(t).on("resize.DT-"+i.sInstance,bi(function(){vt(i)}))},ft?setTimeout(tt,1e3):tt(),i._reszEvt=!0)}function gf(t,r){if(!t)return 0;var u=n("<div/>").css("width",h(t)).appendTo(r||i.body),f=u[0].offsetWidth;return u.remove(),f}function ne(t,i){var r=te(t,i),u;return r<0?null:(u=t.aoData[r],u.nTr?u.anCells[i]:n("<td/>").html(p(t,r,i,"display"))[0])}function te(n,t){for(var i,u=-1,f=-1,r=0,e=n.aoData.length;r<e;r++)i=p(n,r,t,"display")+"",i=i.replace(df,""),i=i.replace(/&nbsp;/g," "),i.length>u&&(u=i.length,f=r);return f}function h(n){return n===null?"0px":typeof n=="number"?n<0?"0px":n+"px":n.match(/\d$/)?n+"px":n}function ct(t){var i,o,y,p=[],c=t.aoColumns,l,s,a,v,e=t.aaSortingFixed,w=n.isPlainObject(e),f=[],h=function(t){t.length&&!n.isArray(t[0])?f.push(t):n.merge(f,t)};for(n.isArray(e)&&h(e),w&&e.pre&&h(e.pre),h(t.aaSorting),w&&e.post&&h(e.post),i=0;i<f.length;i++)for(v=f[i][0],l=c[v].aDataSort,o=0,y=l.length;o<y;o++)s=l[o],a=c[s].sType||"string",f[i]._idx===r&&(f[i]._idx=n.inArray(f[i][1],c[s].asSorting)),p.push({src:v,col:s,dir:f[i][1],index:f[i]._idx,type:a,formatter:u.ext.type.order[a+"-pre"]});return p}function ie(n){var t,s,h,r=[],c=u.ext.type.order,f=n.aoData,a=n.aoColumns,l=0,o,e=n.aiDisplayMaster,i;for(or(n),i=ct(n),t=0,s=i.length;t<s;t++)o=i[t],o.formatter&&l++,ue(n,o.col);if(y(n)!="ssp"&&i.length!==0){for(t=0,h=e.length;t<h;t++)r[e[t]]=t;l===i.length?e.sort(function(n,t){for(var u,e,s,h,c=i.length,l=f[n]._aSortData,a=f[t]._aSortData,o=0;o<c;o++)if(h=i[o],u=l[h.col],e=a[h.col],s=u<e?-1:u>e?1:0,s!==0)return h.dir==="asc"?s:-s;return u=r[n],e=r[t],u<e?-1:u>e?1:0}):e.sort(function(n,t){for(var e,o,h,u,l,a=i.length,v=f[n]._aSortData,y=f[t]._aSortData,s=0;s<a;s++)if(u=i[s],e=v[u.col],o=y[u.col],l=c[u.type+"-"+u.dir]||c["string-"+u.dir],h=l(e,o),h!==0)return h;return e=r[n],o=r[t],e<o?-1:e>o?1:0})}n.bSorted=!0}function re(n){for(var u,f,s=n.aoColumns,t=ct(n),h=n.oLanguage.oAria,i=0,l=s.length;i<l;i++){var r=s[i],e=r.asSorting,c=r.sTitle.replace(/<.*?>/g,""),o=r.nTh;o.removeAttribute("aria-sort");r.bSortable?(t.length>0&&t[0].col==i?(o.setAttribute("aria-sort",t[0].dir=="asc"?"ascending":"descending"),f=e[t[0].index+1]||e[0]):f=e[0],u=c+(f==="asc"?h.sSortAscending:h.sSortDescending)):u=c;o.setAttribute("aria-label",u)}}function kr(t,i,u,f){var l=t.aoColumns[i],e=t.aaSorting,s=l.asSorting,o,c=function(t,i){var u=t._idx;return u===r&&(u=n.inArray(t[1],s)),u+1<s.length?u+1:i?null:0},h;typeof e[0]=="number"&&(e=t.aaSorting=[e]);u&&t.oFeatures.bSortMulti?(h=n.inArray(i,w(e,"0")),h!==-1?(o=c(e[h],!0),o===null&&e.length===1&&(o=0),o===null?e.splice(h,1):(e[h][1]=s[o],e[h]._idx=o)):(e.push([i,s[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==i?(o=c(e[0]),e.length=1,e[0][1]=s[o],e[0]._idx=o):(e.length=0,e.push([i,s[0]]),e[0]._idx=0);ot(t);typeof f=="function"&&f(t)}function dr(n,t,i,r){var u=n.aoColumns[i];gr(t,{},function(t){u.bSortable!==!1&&(n.oFeatures.bProcessing?(b(n,!0),setTimeout(function(){kr(n,i,t.shiftKey,r);y(n)!=="ssp"&&b(n,!1)},0)):kr(n,i,t.shiftKey,r))})}function ki(t){var e=t.aLastSort,o=t.oClasses.sSortColumn,f=ct(t),s=t.oFeatures,i,r,u;if(s.bSort&&s.bSortClasses){for(i=0,r=e.length;i<r;i++)u=e[i].src,n(w(t.aoData,"anCells",u)).removeClass(o+(i<2?i+1:3));for(i=0,r=f.length;i<r;i++)u=f[i].src,n(w(t.aoData,"anCells",u)).addClass(o+(i<2?i+1:3))}t.aLastSort=f}function ue(n,t){var s=n.aoColumns[t],f=u.ext.order[s.sSortDataType],h,r,e,o,i,c;for(f&&(h=f.call(n.oInstance,n,t,pt(n,t))),o=u.ext.type.order[s.sType+"-pre"],i=0,c=n.aoData.length;i<c;i++)r=n.aoData[i],r._aSortData||(r._aSortData=[]),(!r._aSortData[t]||f)&&(e=f?h[i]:p(n,i,t,"sort"),r._aSortData[t]=o?o(e):e)}function di(t){if(t.oFeatures.bStateSave&&!t.bDestroying){var i={time:+new Date,start:t._iDisplayStart,length:t._iDisplayLength,order:n.extend(!0,[],t.aaSorting),search:cf(t.oPreviousSearch),columns:n.map(t.aoColumns,function(n,i){return{visible:n.bVisible,search:cf(t.aoPreSearchCols[i])}})};o(t,"aoStateSaveParams","stateSaveParams",[t,i]);t.oSavedState=i;t.fnStateSaveCallback.call(t.oInstance,t,i)}}function fe(t,i,u){var f,h,e=t.aoColumns,c=function(i){var l,c,s;if(!i||!i.time){u();return}if(l=o(t,"aoStateLoadParams","stateLoadParams",[t,i]),n.inArray(!1,l)!==-1){u();return}if(c=t.iStateDuration,c>0&&i.time<+new Date-c*1e3){u();return}if(i.columns&&e.length!==i.columns.length){u();return}if(t.oLoadedState=n.extend(!0,{},i),i.start!==r&&(t._iDisplayStart=i.start,t.iInitDisplayStart=i.start),i.length!==r&&(t._iDisplayLength=i.length),i.order!==r&&(t.aaSorting=[],n.each(i.order,function(n,i){t.aaSorting.push(i[0]>=e.length?[0,i[1]]:i)})),i.search!==r&&n.extend(t.oPreviousSearch,lf(i.search)),i.columns)for(f=0,h=i.columns.length;f<h;f++)s=i.columns[f],s.visible!==r&&(e[f].bVisible=s.visible),s.search!==r&&n.extend(t.aoPreSearchCols[f],lf(s.search));o(t,"aoStateLoaded","stateLoaded",[t,i]);u()},s;if(!t.oFeatures.bStateSave){u();return}s=t.fnStateLoadCallback.call(t.oInstance,t,c);s!==r&&c(s)}function gi(t){var i=u.settings,r=n.inArray(t,w(i,"nTable"));return r!==-1?i[r]:null}function tt(n,i,r,f){if(r="DataTables warning: "+(n?"table id="+n.sTableId+" - ":"")+r,f&&(r+=". For more information about this error, please see http://datatables.net/tn/"+f),i)t.console&&console.log&&console.log(r);else{var s=u.ext,e=s.sErrMode||s.errMode;if(n&&o(n,null,"error",[n,f,r]),e=="alert")alert(r);else if(e=="throw")throw new Error(r);else typeof e=="function"&&e(n,f,r)}}function k(t,i,u,f){if(n.isArray(u)){n.each(u,function(r,u){n.isArray(u)?k(t,i,u[0],u[1]):k(t,i,u)});return}f===r&&(f=u);i[u]!==r&&(t[f]=i[u])}function ee(t,i,r){var f;for(var u in i)i.hasOwnProperty(u)&&(f=i[u],n.isPlainObject(f)?(n.isPlainObject(t[u])||(t[u]={}),n.extend(!0,t[u],f)):t[u]=r&&u!=="data"&&u!=="aaData"&&n.isArray(f)?f.slice():f);return t}function gr(t,i,r){n(t).on("click.DT",i,function(n){t.blur();r(n)}).on("keypress.DT",i,function(n){n.which===13&&(n.preventDefault(),r(n))}).on("selectstart.DT",function(){return!1})}function v(n,t,i,r){i&&n[t].push({fn:i,sName:r})}function o(t,i,r,u){var f=[],e;return i&&(f=n.map(t[i].slice().reverse(),function(n){return n.fn.apply(t.oInstance,u)})),r!==null&&(e=n.Event(r+".dt"),n(t.nTable).trigger(e,u),f.push(e.result)),f}function nu(n){var t=n._iDisplayStart,r=n.fnDisplayEnd(),i=n._iDisplayLength;t>=r&&(t=r-i);t-=t%i;(i===-1||t<0)&&(t=0);n._iDisplayStart=t}function tu(t,i){var r=t.renderer,f=u.ext.renderer[i];return n.isPlainObject(r)&&r[i]?f[r[i]]||f._:typeof r=="string"?f[r]||f._:f._}function y(n){return n.oFeatures.bServerSide?"ssp":n.ajax||n.sAjaxSource?"ajax":"dom"}function ii(n,t){var i=[],r=ou.numbers_length,u=Math.floor(r/2);return t<=r?i=st(0,t):n<=u?(i=st(0,r-2),i.push("ellipsis"),i.push(t-1)):n>=t-1-u?(i=st(t-(r-2),t),i.splice(0,0,"ellipsis"),i.splice(0,0,0)):(i=st(n-u+2,n+u-1),i.push("ellipsis"),i.push(t-1),i.splice(0,0,"ellipsis"),i.splice(0,0,0)),i.DT_el="span",i}function ae(t){n.each({num:function(n){return ri(n,t)},"num-fmt":function(n){return ri(n,t,rr)},"html-num":function(n){return ri(n,t,ui)},"html-num-fmt":function(n){return ri(n,t,ui,rr)}},function(n,i){c.type.order[n+t+"-pre"]=i;n.match(/^html\-/)&&(c.type.search[n+t]=c.type.search.html)})}function ve(n){return function(){var t=[gi(this[u.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return u.ext.internal[n].apply(this,t)}}var u=function(t){var f;this.$=function(n,t){return this.api(!0).$(n,t)};this._=function(n,t){return this.api(!0).rows(n,t).data()};this.api=function(n){return n?new e(gi(this[c.iApiIndex])):new e(this)};this.fnAddData=function(t,i){var u=this.api(!0),f=n.isArray(t)&&(n.isArray(t[0])||n.isPlainObject(t[0]))?u.rows.add(t):u.row.add(t);return(i===r||i)&&u.draw(),f.flatten().toArray()};this.fnAdjustColumnSizing=function(n){var t=this.api(!0).columns.adjust(),i=t.settings()[0],u=i.oScroll;n===r||n?t.draw(!1):(u.sX!==""||u.sY!=="")&&wi(i)};this.fnClearTable=function(n){var t=this.api(!0).clear();(n===r||n)&&t.draw()};this.fnClose=function(n){this.api(!0).row(n).child.hide()};this.fnDeleteRow=function(n,t,i){var f=this.api(!0),u=f.rows(n),e=u.settings()[0],o=e.aoData[u[0][0]];return u.remove(),t&&t.call(this,e,o),(i===r||i)&&f.draw(),o};this.fnDestroy=function(n){this.api(!0).destroy(n)};this.fnDraw=function(n){this.api(!0).draw(n)};this.fnFilter=function(n,t,i,u,f,e){var o=this.api(!0);t===null||t===r?o.search(n,i,u,e):o.column(t).search(n,i,u,e);o.draw()};this.fnGetData=function(n,t){var i=this.api(!0),u;return n!==r?(u=n.nodeName?n.nodeName.toLowerCase():"",t!==r||u=="td"||u=="th"?i.cell(n,t).data():i.row(n).data()||null):i.data().toArray()};this.fnGetNodes=function(n){var t=this.api(!0);return n!==r?t.row(n).node():t.rows().nodes().flatten().toArray()};this.fnGetPosition=function(n){var r=this.api(!0),i=n.nodeName.toUpperCase(),t;return i=="TR"?r.row(n).index():i=="TD"||i=="TH"?(t=r.cell(n).index(),[t.row,t.columnVisible,t.column]):null};this.fnIsOpen=function(n){return this.api(!0).row(n).child.isShown()};this.fnOpen=function(n,t,i){return this.api(!0).row(n).child(t,i).show().child()[0]};this.fnPageChange=function(n,t){var i=this.api(!0).page(n);(t===r||t)&&i.draw(!1)};this.fnSetColumnVis=function(n,t,i){var u=this.api(!0).column(n).visible(t);(i===r||i)&&u.columns.adjust().draw()};this.fnSettings=function(){return gi(this[c.iApiIndex])};this.fnSort=function(n){this.api(!0).order(n).draw()};this.fnSortListener=function(n,t,i){this.api(!0).order.listener(n,t,i)};this.fnUpdate=function(n,t,i,u,f){var e=this.api(!0);return i===r||i===null?e.row(t).data(n):e.cell(t,i).data(n),(f===r||f)&&e.columns.adjust(),(u===r||u)&&e.draw(),0};this.fnVersionCheck=c.fnVersionCheck;var i=this,s=t===r,h=this.length;s&&(t={});this.oApi=this.internal=c.internal;for(f in u.ext.internal)f&&(this[f]=ve(f));return this.each(function(){var e=h>1?ee({},t,!0):t,c=0,w,b=this.getAttribute("id"),pt=!1,a=u.defaults,l=n(this),g,p,wt,bt,f,d,at,rt,st,ht,ut,et,vt,ot,lt,yt;if(this.nodeName.toLowerCase()!="table"){tt(null,0,"Non-table node initialisation ("+this.nodeName+")",2);return}for(yu(a),pu(a.column),nt(a,a,!0),nt(a.column,a.column,!0),nt(a,n.extend(e,l.data())),g=u.settings,c=0,w=g.length;c<w;c++){if(p=g[c],p.nTable==this||p.nTHead.parentNode==this||p.nTFoot&&p.nTFoot.parentNode==this){if(wt=e.bRetrieve!==r?e.bRetrieve:a.bRetrieve,bt=e.bDestroy!==r?e.bDestroy:a.bDestroy,s||wt)return p.oInstance;if(bt){p.oInstance.fnDestroy();break}else{tt(p,0,"Cannot reinitialise DataTable",3);return}}if(p.sTableId==this.id){g.splice(c,1);break}}if((b===null||b==="")&&(b="DataTables_Table_"+u.ext._unique++,this.id=b),f=n.extend(!0,{},u.models.oSettings,{sDestroyWidth:l[0].style.width,sInstance:b,sTableId:b}),f.nTable=this,f.oApi=i.internal,f.oInit=e,g.push(f),f.oInstance=i.length===1?i:l.dataTable(),yu(e),e.oLanguage&&fr(e.oLanguage),e.aLengthMenu&&!e.iDisplayLength&&(e.iDisplayLength=n.isArray(e.aLengthMenu[0])?e.aLengthMenu[0][0]:e.aLengthMenu[0]),e=ee(n.extend(!0,{},a),e),k(f.oFeatures,e,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]),k(f,e,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]),k(f.oScroll,e,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),k(f.oLanguage,e,"fnInfoCallback"),v(f,"aoDrawCallback",e.fnDrawCallback,"user"),v(f,"aoServerParams",e.fnServerParams,"user"),v(f,"aoStateSaveParams",e.fnStateSaveParams,"user"),v(f,"aoStateLoadParams",e.fnStateLoadParams,"user"),v(f,"aoStateLoaded",e.fnStateLoaded,"user"),v(f,"aoRowCallback",e.fnRowCallback,"user"),v(f,"aoRowCreatedCallback",e.fnCreatedRow,"user"),v(f,"aoHeaderCallback",e.fnHeaderCallback,"user"),v(f,"aoFooterCallback",e.fnFooterCallback,"user"),v(f,"aoInitComplete",e.fnInitComplete,"user"),v(f,"aoPreDrawCallback",e.fnPreDrawCallback,"user"),f.rowIdFn=ft(e.rowId),wu(f),d=f.oClasses,n.extend(d,u.ext.classes,e.oClasses),l.addClass(d.sTable),f.iInitDisplayStart===r&&(f.iInitDisplayStart=e.iDisplayStart,f._iDisplayStart=e.iDisplayStart),e.iDeferLoading!==null&&(f.bDeferLoading=!0,at=n.isArray(e.iDeferLoading),f._iRecordsDisplay=at?e.iDeferLoading[0]:e.iDeferLoading,f._iRecordsTotal=at?e.iDeferLoading[1]:e.iDeferLoading),rt=f.oLanguage,n.extend(!0,rt,e.oLanguage),rt.sUrl&&(n.ajax({dataType:"json",url:rt.sUrl,success:function(t){fr(t);nt(a.oLanguage,t);n.extend(!0,rt,t);ni(f)},error:function(){ni(f)}}),pt=!0),e.asStripeClasses===null&&(f.asStripeClasses=[d.sStripeOdd,d.sStripeEven]),st=f.asStripeClasses,ht=l.children("tbody").find("tr").eq(0),n.inArray(!0,n.map(st,function(n){return ht.hasClass(n)}))!==-1&&(n("tbody tr",this).removeClass(st.join(" ")),f.asDestroyStripes=st.slice()),ut=[],vt=this.getElementsByTagName("thead"),vt.length!==0&&(dt(f.aoHeader,vt[0]),ut=li(f)),e.aoColumns===null)for(et=[],c=0,w=ut.length;c<w;c++)et.push(null);else et=e.aoColumns;for(c=0,w=et.length;c<w;c++)er(f,ut?ut[c]:null);ku(f,e.aoColumnDefs,et,function(n,t){ei(f,n,t)});ht.length&&(ot=function(n,t){return n.getAttribute("data-"+t)!==null?t:null},n(ht[0]).children("th, td").each(function(n,t){var e=f.aoColumns[n],i,u;e.mData===n&&(i=ot(t,"sort")||ot(t,"order"),u=ot(t,"filter")||ot(t,"search"),(i!==null||u!==null)&&(e.mData={_:n+".display",sort:i!==null?n+".@data-"+i:r,type:i!==null?n+".@data-"+i:r,filter:u!==null?n+".@data-"+u:r},ei(f,n)))}));lt=f.oFeatures;yt=function(){var s,h,i,u,t;if(e.aaSorting===r)for(s=f.aaSorting,c=0,w=s.length;c<w;c++)s[c][1]=f.aoColumns[c].asSorting[0];if(ki(f),lt.bSort&&v(f,"aoDrawCallback",function(){if(f.bSorted){var t=ct(f),i={};n.each(t,function(n,t){i[t.src]=t.dir});o(f,null,"order",[f,t,i]);re(f)}}),v(f,"aoDrawCallback",function(){(f.bSorted||y(f)==="ssp"||lt.bDeferRender)&&ki(f)},"sc"),h=l.children("caption").each(function(){this._captionSide=n(this).css("caption-side")}),i=l.children("thead"),i.length===0&&(i=n("<thead/>").appendTo(l)),f.nTHead=i[0],u=l.children("tbody"),u.length===0&&(u=n("<tbody/>").appendTo(l)),f.nTBody=u[0],t=l.children("tfoot"),t.length===0&&h.length>0&&(f.oScroll.sX!==""||f.oScroll.sY!=="")&&(t=n("<tfoot/>").appendTo(l)),t.length===0||t.children().length===0?l.addClass(d.sNoFooter):t.length>0&&(f.nTFoot=t[0],dt(f.aoFooter,f.nTFoot)),e.aaData)for(c=0;c<e.aaData.length;c++)it(f,e.aaData[c]);else(f.bDeferLoading||y(f)=="dom")&&si(f,n(f.nTBody).children("tr"));f.aiDisplay=f.aiDisplayMaster.slice();f.bInitialised=!0;pt===!1&&ni(f)};e.bStateSave?(lt.bStateSave=!0,v(f,"aoDrawCallback",di,"state_save"),fe(f,e,yt)):yt()}),i=null,this},c,e,f,s,ir={},hu=/[\r\n]/g,ui=/<.*?>/g,ye=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,pe=new RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),rr=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,g=function(n){return!n||n===!0||n==="-"?!0:!1},cu=function(n){var t=parseInt(n,10);return!isNaN(t)&&isFinite(n)?t:null},lu=function(n,t){return ir[t]||(ir[t]=new RegExp(yr(t),"g")),typeof n=="string"&&t!=="."?n.replace(/\./g,"").replace(ir[t],"."):n},ur=function(n,t,i){var r=typeof n=="string";return g(n)?!0:(t&&r&&(n=lu(n,t)),i&&r&&(n=n.replace(rr,"")),!isNaN(parseFloat(n))&&isFinite(n))},we=function(n){return g(n)||typeof n=="string"},au=function(n,t,i){if(g(n))return!0;var r=we(n);return r?ur(be(n),t,i)?!0:null:null},w=function(n,t,i){var f=[],u=0,e=n.length;if(i!==r)for(;u<e;u++)n[u]&&n[u][t]&&f.push(n[u][t][i]);else for(;u<e;u++)n[u]&&f.push(n[u][t]);return f},lt=function(n,t,i,u){var e=[],f=0,o=t.length;if(u!==r)for(;f<o;f++)n[t[f]][i]&&e.push(n[t[f]][i][u]);else for(;f<o;f++)e.push(n[t[f]][i]);return e},st=function(n,t){var f=[],u,i;for(t===r?(t=0,u=n):(u=t,t=n),i=t;i<u;i++)f.push(i);return f},vu=function(n){for(var i=[],t=0,r=n.length;t<r;t++)n[t]&&i.push(n[t]);return i},be=function(n){return n.replace(ui,"")},ke=function(n){var t,r,i,u;if(n.length<2)return!0;for(t=n.slice().sort(),r=t[0],i=1,u=t.length;i<u;i++){if(t[i]===r)return!1;r=t[i]}return!0},fi=function(n){if(ke(n))return n.slice();var r=[],u,t,e=n.length,i,f=0;n:for(t=0;t<e;t++){for(u=n[t],i=0;i<f;i++)if(r[i]===u)continue n;r.push(u);f++}return r},a,ht,ut,df,bi,se,iu,le,ou,ri,su;u.util={throttle:function(n,t){var u=t!==r?t:200,i,f;return function(){var t=this,e=+new Date,o=arguments;i&&e<i+u?(clearTimeout(f),f=setTimeout(function(){i=r;n.apply(t,o)},u)):(i=e,n.apply(t,o))}},escapeRegex:function(n){return n.replace(pe,"\\$1")}};a=function(n,t,i){n[t]!==r&&(n[i]=n[t])};ht=/\[.*?\]$/;ut=/\(\)$/;var yr=u.util.escapeRegex,yi=n("<div>")[0],no=yi.textContent!==r;df=/<.*?>/g;bi=u.util.throttle;var oe=[],l=Array.prototype,to=function(t){var i,r,f=u.settings,e=n.map(f,function(n){return n.nTable});if(t){if(t.nTable&&t.oApi)return[t];if(t.nodeName&&t.nodeName.toLowerCase()==="table")return i=n.inArray(t,e),i!==-1?[f[i]]:null;if(t&&typeof t.settings=="function")return t.settings().toArray();typeof t=="string"?r=n(t):t instanceof n&&(r=t)}else return[];if(r)return r.map(function(){return i=n.inArray(this,e),i!==-1?f[i]:null}).toArray()};e=function(t,i){var r,f,u,o;if(!(this instanceof e))return new e(t,i);if(r=[],f=function(n){var t=to(n);t&&(r=r.concat(t))},n.isArray(t))for(u=0,o=t.length;u<o;u++)f(t[u]);else f(t);this.context=fi(r);i&&n.merge(this,i);this.selector={rows:null,cols:null,opts:null};e.extend(this,this,oe)};u.Api=e;n.extend(e.prototype,{any:function(){return this.count()!==0},concat:l.concat,context:[],count:function(){return this.flatten().length},each:function(n){for(var t=0,i=this.length;t<i;t++)n.call(this,this[t],t,this);return this},eq:function(n){var t=this.context;return t.length>n?new e(t[n],this[n]):null},filter:function(n){var i=[],t,r;if(l.filter)i=l.filter.call(this,n,this);else for(t=0,r=this.length;t<r;t++)n.call(this,this[t],t,this)&&i.push(this[t]);return new e(this.context,i)},flatten:function(){var n=[];return new e(this.context,n.concat.apply(n,this.toArray()))},join:l.join,indexOf:l.indexOf||function(n,t){for(var i=t||0,r=this.length;i<r;i++)if(this[i]===n)return i;return-1},iterator:function(n,t,i,u){var h=[],o,f,b,c,k,s=this.context,d,p,a,v=this.selector,l,w,y;for(typeof n=="string"&&(u=i,i=t,t=n,n=!1),f=0,b=s.length;f<b;f++)if(l=new e(s[f]),t==="table")o=i.call(l,s[f],f),o!==r&&h.push(o);else if(t==="columns"||t==="rows")o=i.call(l,s[f],this[f],f),o!==r&&h.push(o);else if(t==="column"||t==="column-rows"||t==="row"||t==="cell")for(p=this[f],t==="column-rows"&&(d=nr(s[f],v.opts)),c=0,k=p.length;c<k;c++)a=p[c],o=t==="cell"?i.call(l,s[f],a.row,a.column,f,c):i.call(l,s[f],a,f,c,d),o!==r&&h.push(o);return h.length||u?(w=new e(s,n?h.concat.apply([],h):h),y=w.selector,y.rows=v.rows,y.cols=v.cols,y.opts=v.opts,w):this},lastIndexOf:l.lastIndexOf||function(){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(n){var i=[],t,r;if(l.map)i=l.map.call(this,n,this);else for(t=0,r=this.length;t<r;t++)i.push(n.call(this,this[t],t));return new e(this.context,i)},pluck:function(n){return this.map(function(t){return t[n]})},pop:l.pop,push:l.push,reduce:l.reduce||function(n,t){return bu(this,n,t,0,this.length,1)},reduceRight:l.reduceRight||function(n,t){return bu(this,n,t,this.length-1,-1,-1)},reverse:l.reverse,selector:null,shift:l.shift,slice:function(){return new e(this.context,this)},sort:l.sort,splice:l.splice,toArray:function(){return l.slice.call(this)},to$:function(){return n(this)},toJQuery:function(){return n(this)},unique:function(){return new e(this.context,fi(this))},unshift:l.unshift});e.extend=function(t,i,r){if(r.length&&i&&(i instanceof e||i.__dt_wrapper))for(var u,s=function(n,t,i){return function(){var r=t.apply(n,arguments);return e.extend(r,r,i.methodExt),r}},f=0,o=r.length;f<o;f++)u=r[f],i[u.name]=typeof u.val=="function"?s(t,u.val,u):n.isPlainObject(u.val)?{}:u.val,i[u.name].__dt_wrapper=!0,e.extend(t,i[u.name],u.propExt)};e.register=f=function(t,i){var f,a,u;if(n.isArray(t)){for(f=0,a=t.length;f<a;f++)e.register(t[f],i);return}for(var o=t.split("."),h=oe,c,l,v=function(n,t){for(var i=0,r=n.length;i<r;i++)if(n[i].name===t)return n[i];return null},r=0,s=o.length;r<s;r++)l=o[r].indexOf("()")!==-1,c=l?o[r].replace("()",""):o[r],u=v(h,c),u||(u={name:c,val:{},methodExt:[],propExt:[]},h.push(u)),r===s-1?u.val=i:h=l?u.methodExt:u.propExt};e.registerPlural=s=function(t,i,u){e.register(t,u);e.register(i,function(){var t=u.apply(this,arguments);return t===this?this:t instanceof e?t.length?n.isArray(t[0])?new e(t.context,t[0]):t[0]:r:t})};se=function(t,i){if(typeof t=="number")return[i[t]];var r=n.map(i,function(n){return n.nTable});return n(r).filter(t).map(function(){var t=n.inArray(this,r);return i[t]}).toArray()};f("tables()",function(n){return n?new e(se(n,this.context)):this});f("table()",function(n){var t=this.tables(n),i=t.context;return i.length?new e(i[0]):t});s("tables().nodes()","table().node()",function(){return this.iterator("table",function(n){return n.nTable},1)});s("tables().body()","table().body()",function(){return this.iterator("table",function(n){return n.nTBody},1)});s("tables().header()","table().header()",function(){return this.iterator("table",function(n){return n.nTHead},1)});s("tables().footer()","table().footer()",function(){return this.iterator("table",function(n){return n.nTFoot},1)});s("tables().containers()","table().container()",function(){return this.iterator("table",function(n){return n.nTableWrapper},1)});f("draw()",function(n){return this.iterator("table",function(t){n==="page"?rt(t):(typeof n=="string"&&(n=n==="full-hold"?!1:!0),ot(t,n===!1))})});f("page()",function(n){return n===r?this.page.info().page:this.iterator("table",function(t){wr(t,n)})});f("page.info()",function(){if(this.context.length===0)return r;var n=this.context[0],i=n._iDisplayStart,t=n.oFeatures.bPaginate?n._iDisplayLength:-1,u=n.fnRecordsDisplay(),f=t===-1;return{page:f?0:Math.floor(i/t),pages:f?1:Math.ceil(u/t),start:i,end:n.fnDisplayEnd(),length:t,recordsTotal:n.fnRecordsTotal(),recordsDisplay:u,serverSide:y(n)==="ssp"}});f("page.len()",function(n){return n===r?this.context.length!==0?this.context[0]._iDisplayLength:r:this.iterator("table",function(t){pr(t,n)})});iu=function(n,t,i){var u,r;if(i){u=new e(n);u.one("draw",function(){i(u.ajax.json())})}y(n)=="ssp"?ot(n,t):(b(n,!0),r=n.jqXHR,r&&r.readyState!==4&&r.abort(),ai(n,[],function(i){var u,r,f;for(hi(n),u=vi(n,i),r=0,f=u.length;r<f;r++)it(n,u[r]);ot(n,t);b(n,!1)}))};f("ajax.json()",function(){var n=this.context;if(n.length>0)return n[0].json});f("ajax.params()",function(){var n=this.context;if(n.length>0)return n[0].oAjaxData});f("ajax.reload()",function(n,t){return this.iterator("table",function(i){iu(i,t===!1,n)})});f("ajax.url()",function(t){var i=this.context;return t===r?i.length===0?r:(i=i[0],i.ajax?n.isPlainObject(i.ajax)?i.ajax.url:i.ajax:i.sAjaxSource):this.iterator("table",function(i){n.isPlainObject(i.ajax)?i.ajax.url=t:i.ajax=t})});f("ajax.url().load()",function(n,t){return this.iterator("table",function(i){iu(i,t===!1,n)})});var ru=function(t,i,u,f,e){var h=[],a,l,o,v,s,p,w=typeof i,y;for(i&&w!=="string"&&w!=="function"&&i.length!==r||(i=[i]),o=0,v=i.length;o<v;o++)for(l=i[o]&&i[o].split&&!i[o].match(/[\[\(:]/)?i[o].split(","):[i[o]],s=0,p=l.length;s<p;s++)a=u(typeof l[s]=="string"?n.trim(l[s]):l[s]),a&&a.length&&(h=h.concat(a));if(y=c.selector[t],y.length)for(o=0,v=y.length;o<v;o++)h=y[o](f,e,h);return fi(h)},uu=function(t){return t||(t={}),t.filter&&t.search===r&&(t.search=t.filter),n.extend({search:"none",order:"current",page:"all"},t)},fu=function(n){for(var t=0,i=n.length;t<i;t++)if(n[t].length>0)return n[0]=n[t],n[0].length=1,n.length=1,n.context=[n.context[t]],n;return n.length=0,n},nr=function(t,i){var r,e,h,f=[],o=t.aiDisplay,c=t.aiDisplayMaster,u=i.search,s=i.order,l=i.page;if(y(t)=="ssp")return u==="removed"?[]:st(0,c.length);if(l=="current")for(r=t._iDisplayStart,e=t.fnDisplayEnd();r<e;r++)f.push(o[r]);else if(s=="current"||s=="applied")f=u=="none"?c.slice():u=="applied"?o.slice():n.map(c,function(t){return n.inArray(t,o)===-1?t:null});else if(s=="index"||s=="original")for(r=0,e=t.aoData.length;r<e;r++)u=="none"?f.push(r):(h=n.inArray(r,o),(h===-1&&u=="removed"||h>=0&&u=="applied")&&f.push(r));return f},io=function(t,i,u){var f,e=function(i){var e=cu(i),h,o,s;return e!==null&&!u?[e]:(f||(f=nr(t,u)),e!==null&&n.inArray(e,f)!==-1)?[e]:i===null||i===r||i===""?f:typeof i=="function"?n.map(f,function(n){var r=t.aoData[n];return i(n,r._aData,r.nTr)?n:null}):(h=vu(lt(t.aoData,f,"nTr")),i.nodeName)?i._DT_RowIndex!==r?[i._DT_RowIndex]:i._DT_CellIndex?[i._DT_CellIndex.row]:(o=n(i).closest("*[data-dt-row]"),o.length?[o.data("dt-row")]:[]):typeof i=="string"&&i.charAt(0)==="#"&&(s=t.aIds[i.replace(/^#/,"")],s!==r)?[s.idx]:n(h).filter(i).map(function(){return this._DT_RowIndex}).toArray()};return ru("row",i,e,t,u)};f("rows()",function(t,i){t===r?t="":n.isPlainObject(t)&&(i=t,t="");i=uu(i);var u=this.iterator("table",function(n){return io(n,t,i)},1);return u.selector.rows=t,u.selector.opts=i,u});f("rows().nodes()",function(){return this.iterator("row",function(n,t){return n.aoData[t].nTr||r},1)});f("rows().data()",function(){return this.iterator(!0,"rows",function(n,t){return lt(n.aoData,t,"_aData")},1)});s("rows().cache()","row().cache()",function(n){return this.iterator("row",function(t,i){var r=t.aoData[i];return n==="search"?r._aFilterData:r._aSortData},1)});s("rows().invalidate()","row().invalidate()",function(n){return this.iterator("row",function(t,i){bt(t,i,n)})});s("rows().indexes()","row().index()",function(){return this.iterator("row",function(n,t){return t},1)});s("rows().ids()","row().id()",function(n){for(var r,f,o,u=[],i=this.context,t=0,s=i.length;t<s;t++)for(r=0,f=this[t].length;r<f;r++)o=i[t].rowIdFn(i[t].aoData[this[t][r]]._aData),u.push((n===!0?"#":"")+o);return new e(i,u)});s("rows().remove()","row().remove()",function(){var n=this;return this.iterator("row",function(t,i,u){var e=t.aoData,v=e[i],f,l,o,a,s,h,c;for(e.splice(i,1),f=0,l=e.length;f<l;f++)if(s=e[f],h=s.anCells,s.nTr!==null&&(s.nTr._DT_RowIndex=f),h!==null)for(o=0,a=h.length;o<a;o++)h[o]._DT_CellIndex.row=f;ci(t.aiDisplayMaster,i);ci(t.aiDisplay,i);ci(n[u],i,!1);t._iRecordsDisplay>0&&t._iRecordsDisplay--;nu(t);c=t.rowIdFn(v._aData);c!==r&&delete t.aIds[c]}),this.iterator("table",function(n){for(var t=0,i=n.aoData.length;t<i;t++)n.aoData[t].idx=t}),this});f("rows.add()",function(t){var r=this.iterator("table",function(n){for(var i,u=[],r=0,f=t.length;r<f;r++)i=t[r],i.nodeName&&i.nodeName.toUpperCase()==="TR"?u.push(si(n,i)[0]):u.push(it(n,i));return u},1),i=this.rows(-1);return i.pop(),n.merge(i,r),i});f("row()",function(n,t){return fu(this.rows(n,t))});f("row().data()",function(n){var t=this.context;return n===r?t.length&&this.length?t[0].aoData[this[0]]._aData:r:(t[0].aoData[this[0]]._aData=n,bt(t[0],this[0],"data"),this)});f("row().node()",function(){var n=this.context;return n.length&&this.length?n[0].aoData[this[0]].nTr||null:null});f("row.add()",function(t){t instanceof n&&t.length&&(t=t[0]);var i=this.iterator("table",function(n){return t.nodeName&&t.nodeName.toUpperCase()==="TR"?si(n,t)[0]:it(n,t)});return this.row(i[0])});var ro=function(t,i,r,u){var f=[],e=function(i,r){var u,s,o;if(n.isArray(i)||i instanceof n){for(u=0,s=i.length;u<s;u++)e(i[u],r);return}i.nodeName&&i.nodeName.toLowerCase()==="tr"?f.push(i):(o=n("<tr><td/><\/tr>").addClass(r),n("td",o).addClass(r).html(i)[0].colSpan=wt(t),f.push(o[0]))};e(r,u);i._details&&i._details.detach();i._details=n(f);i._detailsShow&&i._details.insertAfter(i.nTr)},eu=function(n,t){var u=n.context,i;u.length&&(i=u[0].aoData[t!==r?t:n[0]],i&&i._details&&(i._details.remove(),i._detailsShow=r,i._details=r))},he=function(n,t){var r=n.context,i;r.length&&n.length&&(i=r[0].aoData[n[0]],i._details&&(i._detailsShow=t,t?i._details.insertAfter(i.nTr):i._details.detach(),uo(r[0])))},uo=function(n){var t=new e(n),r=".dt.DT_details",u="draw"+r,f="column-visibility"+r,o="destroy"+r,i=n.aoData;if(t.off(u+" "+f+" "+o),w(i,"_details").length>0){t.on(u,function(r,u){n===u&&t.rows({page:"current"}).eq(0).each(function(n){var t=i[n];t._detailsShow&&t._details.insertAfter(t.nTr)})});t.on(f,function(t,r){var f,e,u,o;if(n===r)for(e=wt(r),u=0,o=i.length;u<o;u++)f=i[u],f._details&&f._details.children("td[colspan]").attr("colspan",e)});t.on(o,function(r,u){if(n===u)for(var f=0,e=i.length;f<e;f++)i[f]._details&&eu(t,f)})}},ti="row().child",tr=ti+"()";f(tr,function(n,t){var i=this.context;return n===r?i.length&&this.length?i[0].aoData[this[0]]._details:r:(n===!0?this.child.show():n===!1?eu(this):i.length&&this.length&&ro(i[0],i[0].aoData[this[0]],n,t),this)});f([ti+".show()",tr+".show()"],function(){return he(this,!0),this});f([ti+".hide()",tr+".hide()"],function(){return he(this,!1),this});f([ti+".remove()",tr+".remove()"],function(){return eu(this),this});f(ti+".isShown()",function(){var n=this.context;return n.length&&this.length?n[0].aoData[this[0]]._detailsShow||!1:!1});var fo=/^([^:]+):(name|visIdx|visible)$/,ce=function(n,t,i,r,u){for(var e=[],f=0,o=u.length;f<o;f++)e.push(p(n,u[f],t));return e},eo=function(t,i,r){var u=t.aoColumns,e=w(u,"sName"),f=w(u,"nTh"),o=function(i){var s=cu(i),v,o,h,c,l,a;if(i==="")return st(u.length);if(s!==null)return[s>=0?s:u.length+s];if(typeof i=="function")return v=nr(t,r),n.map(u,function(n,r){return i(r,ce(t,r,0,0,v),f[r])?r:null});if(o=typeof i=="string"?i.match(fo):"",o)switch(o[2]){case"visIdx":case"visible":return(h=parseInt(o[1],10),h<0)?(c=n.map(u,function(n,t){return n.bVisible?t:null}),[c[c.length+h]]):[yt(t,h)];case"name":return n.map(e,function(n,t){return n===o[1]?t:null});default:return[]}return i.nodeName&&i._DT_CellIndex?[i._DT_CellIndex.column]:(l=n(f).filter(i).map(function(){return n.inArray(this,f)}).toArray(),l.length||!i.nodeName)?l:(a=n(i).closest("*[data-dt-column]"),a.length?[a.data("dt-column")]:[])};return ru("column",i,o,t,r)},oo=function(t,i,u){var c=t.aoColumns,e=c[i],o=t.aoData,s,f,l,h,a;if(u===r)return e.bVisible;if(e.bVisible!==u){if(u)for(a=n.inArray(!0,w(c,"bVisible"),i+1),f=0,l=o.length;f<l;f++)h=o[f].nTr,s=o[f].anCells,h&&h.insertBefore(s[i],s[a]||null);else n(w(t.aoData,"anCells",i)).detach();e.bVisible=u;kt(t,t.aoHeader);kt(t,t.aoFooter);di(t)}};return f("columns()",function(t,i){t===r?t="":n.isPlainObject(t)&&(i=t,t="");i=uu(i);var u=this.iterator("table",function(n){return eo(n,t,i)},1);return u.selector.cols=t,u.selector.opts=i,u}),s("columns().header()","column().header()",function(){return this.iterator("column",function(n,t){return n.aoColumns[t].nTh},1)}),s("columns().footer()","column().footer()",function(){return this.iterator("column",function(n,t){return n.aoColumns[t].nTf},1)}),s("columns().data()","column().data()",function(){return this.iterator("column-rows",ce,1)}),s("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(n,t){return n.aoColumns[t].mData},1)}),s("columns().cache()","column().cache()",function(n){return this.iterator("column-rows",function(t,i,r,u,f){return lt(t.aoData,f,n==="search"?"_aFilterData":"_aSortData",i)},1)}),s("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(n,t,i,r,u){return lt(n.aoData,u,"anCells",t)},1)}),s("columns().visible()","column().visible()",function(n,t){var i=this.iterator("column",function(t,i){if(n===r)return t.aoColumns[i].bVisible;oo(t,i,n)});return n!==r&&(this.iterator("column",function(i,r){o(i,null,"column-visibility",[i,r,n,t])}),(t===r||t)&&this.columns.adjust()),i}),s("columns().indexes()","column().index()",function(n){return this.iterator("column",function(t,i){return n==="visible"?pt(t,i):i},1)}),f("columns.adjust()",function(){return this.iterator("table",function(n){vt(n)},1)}),f("column.index()",function(n,t){if(this.context.length!==0){var i=this.context[0];if(n==="fromVisible"||n==="toData")return yt(i,t);if(n==="fromData"||n==="toVisible")return pt(i,t)}}),f("column()",function(n,t){return fu(this.columns(n,t))}),le=function(t,i,u){var a=t.aoData,l=nr(t,u),y=vu(lt(a,l,"anCells")),w=n([].concat.apply([],y)),o,b=t.aoColumns.length,s,h,v,e,c,f,k=function(i){var y=typeof i=="function",u;if(i===null||i===r||y){for(s=[],h=0,v=l.length;h<v;h++)for(o=l[h],e=0;e<b;e++)c={row:o,column:e},y?(f=a[o],i(c,p(t,o,e),f.anCells?f.anCells[e]:null)&&s.push(c)):s.push(c);return s}return n.isPlainObject(i)?[i]:(u=w.filter(i).map(function(n,t){return{row:t._DT_CellIndex.row,column:t._DT_CellIndex.column}}).toArray(),u.length||!i.nodeName)?u:(f=n(i).closest("*[data-dt-row]"),f.length?[{row:f.data("dt-row"),column:f.data("dt-column")}]:[])};return ru("cell",i,k,t,u)},f("cells()",function(t,i,u){if(n.isPlainObject(t)&&(t.row===r?(u=t,t=null):(u=i,i=null)),n.isPlainObject(i)&&(u=i,i=null),i===null||i===r)return this.iterator("table",function(n){return le(n,t,uu(u))});var s=this.columns(i,u),h=this.rows(t,u),o,f,c,e,l,a=this.iterator("table",function(n,t){for(o=[],f=0,c=h[t].length;f<c;f++)for(e=0,l=s[t].length;e<l;e++)o.push({row:h[t][f],column:s[t][e]});return o},1);return n.extend(a.selector,{cols:i,rows:t,opts:u}),a}),s("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(n,t,i){var u=n.aoData[t];return u&&u.anCells?u.anCells[i]:r},1)}),f("cells().data()",function(){return this.iterator("cell",function(n,t,i){return p(n,t,i)},1)}),s("cells().cache()","cell().cache()",function(n){return n=n==="search"?"_aFilterData":"_aSortData",this.iterator("cell",function(t,i,r){return t.aoData[i][n][r]},1)}),s("cells().render()","cell().render()",function(n){return this.iterator("cell",function(t,i,r){return p(t,i,r,n)},1)}),s("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(n,t,i){return{row:t,column:i,columnVisible:pt(n,i)}},1)}),s("cells().invalidate()","cell().invalidate()",function(n){return this.iterator("cell",function(t,i,r){bt(t,i,n,r)})}),f("cell()",function(n,t,i){return fu(this.cells(n,t,i))}),f("cell().data()",function(n){var i=this.context,t=this[0];return n===r?i.length&&t.length?p(i[0],t[0].row,t[0].column):r:(du(i[0],t[0].row,t[0].column,n),bt(i[0],t[0].row,"data",t[0].column),this)}),f("order()",function(t,i){var u=this.context;return t===r?u.length!==0?u[0].aaSorting:r:(typeof t=="number"?t=[[t,i]]:t.length&&!n.isArray(t[0])&&(t=Array.prototype.slice.call(arguments)),this.iterator("table",function(n){n.aaSorting=t.slice()}))}),f("order.listener()",function(n,t,i){return this.iterator("table",function(r){dr(r,n,t,i)})}),f("order.fixed()",function(t){if(!t){var u=this.context,i=u.length?u[0].aaSortingFixed:r;return n.isArray(i)?{pre:i}:i}return this.iterator("table",function(i){i.aaSortingFixed=n.extend(!0,{},t)})}),f(["columns().order()","column().order()"],function(t){var i=this;return this.iterator("table",function(r,u){var f=[];n.each(i[u],function(n,i){f.push([i,t])});r.aaSorting=f})}),f("search()",function(t,i,u,f){var e=this.context;return t===r?e.length!==0?e[0].oPreviousSearch.sSearch:r:this.iterator("table",function(r){r.oFeatures.bFilter&&gt(r,n.extend({},r.oPreviousSearch,{sSearch:t+"",bRegex:i===null?!1:i,bSmart:u===null?!0:u,bCaseInsensitive:f===null?!0:f}),1)})}),s("columns().search()","column().search()",function(t,i,u,f){return this.iterator("column",function(e,o){var s=e.aoPreSearchCols;if(t===r)return s[o].sSearch;e.oFeatures.bFilter&&(n.extend(s[o],{sSearch:t+"",bRegex:i===null?!1:i,bSmart:u===null?!0:u,bCaseInsensitive:f===null?!0:f}),gt(e,e.oPreviousSearch,1))})}),f("state()",function(){return this.context.length?this.context[0].oSavedState:null}),f("state.clear()",function(){return this.iterator("table",function(n){n.fnStateSaveCallback.call(n.oInstance,n,{})})}),f("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null}),f("state.save()",function(){return this.iterator("table",function(n){di(n)})}),u.versionCheck=u.fnVersionCheck=function(n){for(var e=u.version.split("."),f=n.split("."),i,r,t=0,o=f.length;t<o;t++)if(i=parseInt(e[t],10)||0,r=parseInt(f[t],10)||0,i!==r)return i>r;return!0},u.isDataTable=u.fnIsDataTable=function(t){var i=n(t).get(0),r=!1;return t instanceof u.Api?!0:(n.each(u.settings,function(t,u){var f=u.nScrollHead?n("table",u.nScrollHead)[0]:null,e=u.nScrollFoot?n("table",u.nScrollFoot)[0]:null;(u.nTable===i||f===i||e===i)&&(r=!0)}),r)},u.tables=u.fnTables=function(t){var r=!1,i;return n.isPlainObject(t)&&(r=t.api,t=t.visible),i=n.map(u.settings,function(i){if(!t||t&&n(i.nTable).is(":visible"))return i.nTable}),r?new e(i):i},u.camelToHungarian=nt,f("$()",function(t,i){var u=this.rows(i).nodes(),r=n(u);return n([].concat(r.filter(t).toArray(),r.find(t).toArray()))}),n.each(["on","one","off"],function(t,i){f(i+"()",function(){var t=Array.prototype.slice.call(arguments),r;return t[0]=n.map(t[0].split(/\s/),function(n){return n.match(/\.dt\b/)?n:n+".dt"}).join(" "),r=n(this.tables().nodes()),r[i].apply(r,t),this})}),f("clear()",function(){return this.iterator("table",function(n){hi(n)})}),f("settings()",function(){return new e(this.context,this.context)}),f("init()",function(){var n=this.context;return n.length?n[0].oInit:null}),f("data()",function(){return this.iterator("table",function(n){return w(n.aoData,"_aData")}).flatten()}),f("destroy()",function(i){return i=i||!1,this.iterator("table",function(r){var w=r.nTableWrapper.parentNode,s=r.oClasses,h=r.nTable,d=r.nTBody,c=r.nTHead,l=r.nTFoot,f=n(h),a=n(d),b=n(r.nTableWrapper),k=n.map(r.aoData,function(n){return n.nTr}),v,y,p;r.bDestroying=!0;o(r,"aoDestroyCallback","destroy",[r]);i||new e(r).columns().visible(!0);b.off(".DT").find(":not(tbody *)").off(".DT");n(t).off(".DT-"+r.sInstance);h!=c.parentNode&&(f.children("thead").detach(),f.append(c));l&&h!=l.parentNode&&(f.children("tfoot").detach(),f.append(l));r.aaSorting=[];r.aaSortingFixed=[];ki(r);n(k).removeClass(r.asStripeClasses.join(" "));n("th, td",c).removeClass(s.sSortable+" "+s.sSortableAsc+" "+s.sSortableDesc+" "+s.sSortableNone);a.children().detach();a.append(k);y=i?"remove":"detach";f[y]();b[y]();!i&&w&&(w.insertBefore(h,r.nTableReinsertBefore),f.css("width",r.sDestroyWidth).removeClass(s.sTable),v=r.asDestroyStripes.length,v&&a.children().each(function(t){n(this).addClass(r.asDestroyStripes[t%v])}));p=n.inArray(r,u.settings);p!==-1&&u.settings.splice(p,1)})}),n.each(["column","row","cell"],function(n,t){f(t+"s().every()",function(n){var i=this.selector.opts,u=this;return this.iterator(t,function(f,e,o,s,h){n.call(u[t](e,t==="cell"?o:i,t==="cell"?i:r),e,o,s,h)})})}),f("i18n()",function(t,i,u){var e=this.context[0],f=ft(t)(e.oLanguage);return f===r&&(f=i),u!==r&&n.isPlainObject(f)&&(f=f[u]!==r?f[u]:f._),f.replace("%d",u)}),u.version="1.10.16",u.settings=[],u.models={},u.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0},u.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1},u.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null},u.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(n){try{return JSON.parse((n.iStateDuration===-1?sessionStorage:localStorage).getItem("DataTables_"+n.sInstance+"_"+location.pathname))}catch(t){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(n,t){try{(n.iStateDuration===-1?sessionStorage:localStorage).setItem("DataTables_"+n.sInstance+"_"+location.pathname,JSON.stringify(t))}catch(i){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:n.extend({},u.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"},at(u.defaults),u.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null},at(u.defaults.column),u.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:r,oAjaxData:r,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return y(this)=="ssp"?this._iRecordsTotal*1:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return y(this)=="ssp"?this._iRecordsDisplay*1:this.aiDisplay.length},fnDisplayEnd:function(){var n=this._iDisplayLength,t=this._iDisplayStart,r=t+n,i=this.aiDisplay.length,u=this.oFeatures,f=u.bPaginate;return u.bServerSide?f===!1||n===-1?t+i:Math.min(t+n,this._iRecordsDisplay):!f||r>i||n===-1?i:r},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null},u.ext=c={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:u.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:u.version},n.extend(c,{afnFiltering:c.search,aTypes:c.type.detect,ofnSearch:c.type.search,oSort:c.type.order,afnSortData:c.order,aoFeatures:c.feature,oApi:c.internal,oStdClasses:c.classes,oPagination:c.pager}),n.extend(u.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""}),ou=u.ext.pager,n.extend(ou,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(n,t){return[ii(n,t)]},simple_numbers:function(n,t){return["previous",ii(n,t),"next"]},full_numbers:function(n,t){return["first","previous",ii(n,t),"next","last"]},first_last_numbers:function(n,t){return["first",ii(n,t),"last"]},_numbers:ii,numbers_length:7}),n.extend(!0,u.ext.renderer,{pageButton:{_:function(t,u,f,e,o,s){var l=t.oClasses,a=t.oLanguage.oPaginate,w=t.oLanguage.oAria.paginate||{},h,c,y=0,p=function(i,r){for(var b,u,d=function(n){wr(t,n.data.action,!0)},k,e=0,v=r.length;e<v;e++)if(u=r[e],n.isArray(u))k=n("<"+(u.DT_el||"div")+"/>").appendTo(i),p(k,u);else{h=null;c="";switch(u){case"ellipsis":i.append('<span class="ellipsis">&#x2026;<\/span>');break;case"first":h=a.sFirst;c=u+(o>0?"":" "+l.sPageButtonDisabled);break;case"previous":h=a.sPrevious;c=u+(o>0?"":" "+l.sPageButtonDisabled);break;case"next":h=a.sNext;c=u+(o<s-1?"":" "+l.sPageButtonDisabled);break;case"last":h=a.sLast;c=u+(o<s-1?"":" "+l.sPageButtonDisabled);break;default:h=u+1;c=o===u?l.sPageButtonActive:""}h!==null&&(b=n("<a>",{"class":l.sPageButton+" "+c,"aria-controls":t.sTableId,"aria-label":w[u],"data-dt-idx":y,tabindex:t.iTabIndex,id:f===0&&typeof u=="string"?t.sTableId+"_"+u:null}).html(h).appendTo(i),gr(b,{action:u},d),y++)}},v;try{v=n(u).find(i.activeElement).data("dt-idx")}catch(b){}p(n(u).empty(),e);v!==r&&n(u).find("[data-dt-idx="+v+"]").focus()}}}),n.extend(u.ext.type.detect,[function(n,t){var i=t.oLanguage.sDecimal;return ur(n,i)?"num"+i:null},function(n){if(n&&!(n instanceof Date)&&!ye.test(n))return null;var t=Date.parse(n);return t!==null&&!isNaN(t)||g(n)?"date":null},function(n,t){var i=t.oLanguage.sDecimal;return ur(n,i,!0)?"num-fmt"+i:null},function(n,t){var i=t.oLanguage.sDecimal;return au(n,i)?"html-num"+i:null},function(n,t){var i=t.oLanguage.sDecimal;return au(n,i,!0)?"html-num-fmt"+i:null},function(n){return g(n)||typeof n=="string"&&n.indexOf("<")!==-1?"html":null}]),n.extend(u.ext.type.search,{html:function(n){return g(n)?n:typeof n=="string"?n.replace(hu," ").replace(ui,""):""},string:function(n){return g(n)?n:typeof n=="string"?n.replace(hu," "):n}}),ri=function(n,t,i,r){return n!==0&&(!n||n==="-")?-Infinity:(t&&(n=lu(n,t)),n.replace&&(i&&(n=n.replace(i,"")),r&&(n=n.replace(r,""))),n*1)},n.extend(c.type.order,{"date-pre":function(n){return Date.parse(n)||-Infinity},"html-pre":function(n){return g(n)?"":n.replace?n.replace(/<.*?>/g,"").toLowerCase():n+""},"string-pre":function(n){return g(n)?"":typeof n=="string"?n.toLowerCase():n.toString?n.toString():""},"string-asc":function(n,t){return n<t?-1:n>t?1:0},"string-desc":function(n,t){return n<t?1:n>t?-1:0}}),ae(""),n.extend(!0,u.ext.renderer,{header:{_:function(t,i,r,u){n(t.nTable).on("order.dt.DT",function(n,f,e,o){if(t===f){var s=r.idx;i.removeClass(r.sSortingClass+" "+u.sSortAsc+" "+u.sSortDesc).addClass(o[s]=="asc"?u.sSortAsc:o[s]=="desc"?u.sSortDesc:r.sSortingClass)}})},jqueryui:function(t,i,r,u){n("<div/>").addClass(u.sSortJUIWrapper).append(i.contents()).append(n("<span/>").addClass(u.sSortIcon+" "+r.sSortingClassJUI)).appendTo(i);n(t.nTable).on("order.dt.DT",function(n,f,e,o){if(t===f){var s=r.idx;i.removeClass(u.sSortAsc+" "+u.sSortDesc).addClass(o[s]=="asc"?u.sSortAsc:o[s]=="desc"?u.sSortDesc:r.sSortingClass);i.find("span."+u.sSortIcon).removeClass(u.sSortJUIAsc+" "+u.sSortJUIDesc+" "+u.sSortJUI+" "+u.sSortJUIAscAllowed+" "+u.sSortJUIDescAllowed).addClass(o[s]=="asc"?u.sSortJUIAsc:o[s]=="desc"?u.sSortJUIDesc:r.sSortingClassJUI)}})}}}),su=function(n){return typeof n=="string"?n.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):n},u.render={number:function(n,t,i,r,u){return{display:function(f){var s,e,o,h;return typeof f!="number"&&typeof f!="string"?f:(s=f<0?"-":"",e=parseFloat(f),isNaN(e))?su(f):(e=e.toFixed(i),f=Math.abs(e),o=parseInt(f,10),h=i?t+(f-o).toFixed(i).substring(2):"",s+(r||"")+o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,n)+h+(u||""))}}},text:function(){return{display:su}}},n.extend(u.ext.internal,{_fnExternApiFunc:ve,_fnBuildAjax:ai,_fnAjaxUpdate:tf,_fnAjaxParameters:rf,_fnAjaxUpdateDraw:uf,_fnAjaxDataSrc:vi,_fnAddColumn:er,_fnColumnOptions:ei,_fnAdjustColumnSizing:vt,_fnVisibleToColumnIndex:yt,_fnColumnIndexToVisible:pt,_fnVisbleColumns:wt,_fnGetColumns:oi,_fnColumnTypes:or,_fnApplyColumnDefs:ku,_fnHungarianMap:at,_fnCamelToHungarian:nt,_fnLanguageCompat:fr,_fnBrowserDetect:wu,_fnAddData:it,_fnAddTr:si,_fnNodeToDataIndex:de,_fnNodeToColumnIndex:ge,_fnGetCellData:p,_fnSetCellData:du,_fnSplitObjNotation:sr,_fnGetObjectDataFn:ft,_fnSetObjectDataFn:et,_fnGetDataMaster:hr,_fnClearTable:hi,_fnDeleteIndex:ci,_fnInvalidate:bt,_fnGetRowElements:cr,_fnCreateTr:lr,_fnBuildHead:gu,_fnDrawHead:kt,_fnDraw:rt,_fnReDraw:ot,_fnAddOptionsHtml:nf,_fnDetectHeader:dt,_fnGetUniqueThs:li,_fnFeatureHtmlFilter:ff,_fnFilterComplete:gt,_fnFilterCustom:ef,_fnFilterColumn:of,_fnFilter:sf,_fnFilterCreateSearch:vr,_fnEscapeRegex:yr,_fnFilterData:hf,_fnFeatureHtmlInfo:af,_fnUpdateInfo:vf,_fnInfoMacros:yf,_fnInitialise:ni,_fnInitComplete:pi,_fnLengthChange:pr,_fnFeatureHtmlLength:pf,_fnFeatureHtmlPaginate:wf,_fnPageChange:wr,_fnFeatureHtmlProcessing:bf,_fnProcessingDisplay:b,_fnFeatureHtmlTable:kf,_fnScrollDraw:wi,_fnApplyToChildren:d,_fnCalculateColumnWidths:br,_fnThrottle:bi,_fnConvertToWidth:gf,_fnGetWidestNode:ne,_fnGetMaxLenString:te,_fnStringToCss:h,_fnSortFlatten:ct,_fnSort:ie,_fnSortAria:re,_fnSortListener:kr,_fnSortAttachListener:dr,_fnSortingClasses:ki,_fnSortData:ue,_fnSaveState:di,_fnLoadState:fe,_fnSettingsFromNode:gi,_fnLog:tt,_fnMap:k,_fnBindAction:gr,_fnCallbackReg:v,_fnCallbackFire:o,_fnLengthOverflow:nu,_fnRenderer:tu,_fnDataSource:y,_fnRowAttributes:ar,_fnCalculateEnd:function(){}}),n.fn.dataTable=u,u.$=n,n.fn.dataTableSettings=u.settings,n.fn.dataTableExt=u.ext,n.fn.DataTable=function(t){return n(this).dataTable(t).api()},n.each(u,function(t,i){n.fn.DataTable[t]=i}),n.fn.dataTable});
/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
(function(n,t){"use strict";typeof module=="object"&&typeof module.exports=="object"?module.exports=n.document?t(n,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}:t(n)})(typeof window!="undefined"?window:this,function(n,t){"use strict";function hr(n,t,i){t=t||f;var r,u=t.createElement("script");if(u.text=n,i)for(r in ne)i[r]&&(u[r]=i[r]);t.head.appendChild(u).parentNode.removeChild(u)}function it(n){return n==null?n+"":typeof n=="object"||typeof n=="function"?bt[or.call(n)]||"object":typeof n}function hi(n){var t=!!n&&"length"in n&&n.length,i=it(n);return u(n)||tt(n)?!1:i==="array"||t===0||typeof t=="number"&&t>0&&t-1 in n}function v(n,t){return n.nodeName&&n.nodeName.toLowerCase()===t.toLowerCase()}function li(n,t,r){return u(t)?i.grep(n,function(n,i){return!!t.call(n,i,n)!==r}):t.nodeType?i.grep(n,function(n){return n===t!==r}):typeof t!="string"?i.grep(n,function(n){return wt.call(t,n)>-1!==r}):i.filter(t,n,r)}function kr(n,t){while((n=n[t])&&n.nodeType!==1);return n}function ie(n){var t={};return i.each(n.match(l)||[],function(n,i){t[i]=!0}),t}function ut(n){return n}function dt(n){throw n;}function dr(n,t,i,r){var f;try{n&&u(f=n.promise)?f.call(n).done(t).fail(i):n&&u(f=n.then)?f.call(n,t,i):t.apply(undefined,[n].slice(r))}catch(n){i.apply(undefined,[n])}}function ni(){f.removeEventListener("DOMContentLoaded",ni);n.removeEventListener("load",ni);i.ready()}function fe(n,t){return t.toUpperCase()}function y(n){return n.replace(re,"ms-").replace(ue,fe)}function at(){this.expando=i.expando+at.uid++}function se(n){return n==="true"?!0:n==="false"?!1:n==="null"?null:n===+n+""?+n:ee.test(n)?JSON.parse(n):n}function nu(n,t,i){var r;if(i===undefined&&n.nodeType===1)if(r="data-"+t.replace(oe,"-$&").toLowerCase(),i=n.getAttribute(r),typeof i=="string"){try{i=se(i)}catch(u){}o.set(n,t,i)}else i=undefined;return i}function ru(n,t,r,u){var s,h,c=20,l=u?function(){return u.cur()}:function(){return i.css(n,t,"")},o=l(),e=r&&r[3]||(i.cssNumber[t]?"":"px"),f=(i.cssNumber[t]||e!=="px"&&+o)&&vt.exec(i.css(n,t));if(f&&f[3]!==e){for(o=o/2,e=e||f[3],f=+o||1;c--;)i.style(n,t,f+e),(1-h)*(1-(h=l()/o||.5))<=0&&(c=0),f=f/h;f=f*2;i.style(n,t,f+e);r=r||[]}return r&&(f=+f||+o||0,s=r[1]?f+(r[1]+1)*r[2]:+r[2],u&&(u.unit=e,u.start=f,u.end=s)),s}function he(n){var r,f=n.ownerDocument,u=n.nodeName,t=ai[u];return t?t:(r=f.body.appendChild(f.createElement(u)),t=i.css(r,"display"),r.parentNode.removeChild(r),t==="none"&&(t="block"),ai[u]=t,t)}function ft(n,t){for(var e,u,f=[],i=0,o=n.length;i<o;i++)(u=n[i],u.style)&&(e=u.style.display,t?(e==="none"&&(f[i]=r.get(u,"display")||null,f[i]||(u.style.display="")),u.style.display===""&&ti(u)&&(f[i]=he(u))):e!=="none"&&(f[i]="none",r.set(u,"display",e)));for(i=0;i<o;i++)f[i]!=null&&(n[i].style.display=f[i]);return n}function s(n,t){var r;return(r=typeof n.getElementsByTagName!="undefined"?n.getElementsByTagName(t||"*"):typeof n.querySelectorAll!="undefined"?n.querySelectorAll(t||"*"):[],t===undefined||t&&v(n,t))?i.merge([n],r):r}function vi(n,t){for(var i=0,u=n.length;i<u;i++)r.set(n[i],"globalEval",!t||r.get(t[i],"globalEval"))}function su(n,t,r,u,f){for(var e,o,p,a,w,v,h=t.createDocumentFragment(),y=[],l=0,b=n.length;l<b;l++)if(e=n[l],e||e===0)if(it(e)==="object")i.merge(y,e.nodeType?[e]:e);else if(ou.test(e)){for(o=o||h.appendChild(t.createElement("div")),p=(fu.exec(e)||["",""])[1].toLowerCase(),a=c[p]||c._default,o.innerHTML=a[1]+i.htmlPrefilter(e)+a[2],v=a[0];v--;)o=o.lastChild;i.merge(y,o.childNodes);o=h.firstChild;o.textContent=""}else y.push(t.createTextNode(e));for(h.textContent="",l=0;e=y[l++];){if(u&&i.inArray(e,u)>-1){f&&f.push(e);continue}if(w=i.contains(e.ownerDocument,e),o=s(h.appendChild(e),"script"),w&&vi(o),r)for(v=0;e=o[v++];)eu.test(e.type||"")&&r.push(e)}return h}function ri(){return!0}function et(){return!1}function cu(){try{return f.activeElement}catch(n){}}function yi(n,t,r,u,f,e){var o,s;if(typeof t=="object"){typeof r!="string"&&(u=u||r,r=undefined);for(s in t)yi(n,s,r,u,t[s],e);return n}if(u==null&&f==null?(f=r,u=r=undefined):f==null&&(typeof r=="string"?(f=u,u=undefined):(f=u,u=r,r=undefined)),f===!1)f=et;else if(!f)return n;return e===1&&(o=f,f=function(n){return i().off(n),o.apply(this,arguments)},f.guid=o.guid||(o.guid=i.guid++)),n.each(function(){i.event.add(this,t,f,u,r)})}function lu(n,t){return v(n,"table")&&v(t.nodeType!==11?t:t.firstChild,"tr")?i(n).children("tbody")[0]||n:n}function we(n){return n.type=(n.getAttribute("type")!==null)+"/"+n.type,n}function be(n){return(n.type||"").slice(0,5)==="true/"?n.type=n.type.slice(5):n.removeAttribute("type"),n}function au(n,t){var f,c,e,s,h,l,a,u;if(t.nodeType===1){if(r.hasData(n)&&(s=r.access(n),h=r.set(t,s),u=s.events,u)){delete h.handle;h.events={};for(e in u)for(f=0,c=u[e].length;f<c;f++)i.event.add(t,e,u[e][f])}o.hasData(n)&&(l=o.access(n),a=i.extend({},l),o.set(t,a))}}function ke(n,t){var i=t.nodeName.toLowerCase();i==="input"&&uu.test(n.type)?t.checked=n.checked:(i==="input"||i==="textarea")&&(t.defaultValue=n.defaultValue)}function ot(n,t,f,o){t=er.apply([],t);var a,w,l,v,h,b,c=0,y=n.length,d=y-1,p=t[0],k=u(p);if(k||y>1&&typeof p=="string"&&!e.checkClone&&ye.test(p))return n.each(function(i){var r=n.eq(i);k&&(t[0]=p.call(this,i,r.html()));ot(r,t,f,o)});if(y&&(a=su(t,n[0].ownerDocument,!1,n,o),w=a.firstChild,a.childNodes.length===1&&(a=w),w||o)){for(l=i.map(s(a,"script"),we),v=l.length;c<y;c++)h=a,c!==d&&(h=i.clone(h,!0,!0),v&&i.merge(l,s(h,"script"))),f.call(n[c],h,c);if(v)for(b=l[l.length-1].ownerDocument,i.map(l,be),c=0;c<v;c++)h=l[c],eu.test(h.type||"")&&!r.access(h,"globalEval")&&i.contains(b,h)&&(h.src&&(h.type||"").toLowerCase()!=="module"?i._evalUrl&&i._evalUrl(h.src):hr(h.textContent.replace(pe,""),b,h))}return n}function vu(n,t,r){for(var u,e=t?i.filter(t,n):n,f=0;(u=e[f])!=null;f++)r||u.nodeType!==1||i.cleanData(s(u)),u.parentNode&&(r&&i.contains(u.ownerDocument,u)&&vi(s(u,"script")),u.parentNode.removeChild(u));return n}function yt(n,t,r){var o,s,h,u,f=n.style;return r=r||ui(n),r&&(u=r.getPropertyValue(t)||r[t],u!==""||i.contains(n.ownerDocument,n)||(u=i.style(n,t)),!e.pixelBoxStyles()&&pi.test(u)&&de.test(t)&&(o=f.width,s=f.minWidth,h=f.maxWidth,f.minWidth=f.maxWidth=f.width=u,u=r.width,f.width=o,f.minWidth=s,f.maxWidth=h)),u!==undefined?u+"":u}function yu(n,t){return{get:function(){if(n()){delete this.get;return}return(this.get=t).apply(this,arguments)}}}function to(n){if(n in ku)return n;for(var i=n[0].toUpperCase()+n.slice(1),t=bu.length;t--;)if(n=bu[t]+i,n in ku)return n}function du(n){var t=i.cssProps[n];return t||(t=i.cssProps[n]=to(n)||n),t}function gu(n,t,i){var r=vt.exec(t);return r?Math.max(0,r[2]-(i||0))+(r[3]||"px"):t}function wi(n,t,r,u,f,e){var o=t==="width"?1:0,h=0,s=0;if(r===(u?"border":"content"))return 0;for(;o<4;o+=2)r==="margin"&&(s+=i.css(n,r+w[o],!0,f)),u?(r==="content"&&(s-=i.css(n,"padding"+w[o],!0,f)),r!=="margin"&&(s-=i.css(n,"border"+w[o]+"Width",!0,f))):(s+=i.css(n,"padding"+w[o],!0,f),r!=="padding"?s+=i.css(n,"border"+w[o]+"Width",!0,f):h+=i.css(n,"border"+w[o]+"Width",!0,f));return!u&&e>=0&&(s+=Math.max(0,Math.ceil(n["offset"+t[0].toUpperCase()+t.slice(1)]-e-s-h-.5))),s}function nf(n,t,r){var f=ui(n),u=yt(n,t,f),s=i.css(n,"boxSizing",!1,f)==="border-box",o=s;if(pi.test(u)){if(!r)return u;u="auto"}return o=o&&(e.boxSizingReliable()||u===n.style[t]),u!=="auto"&&(parseFloat(u)||i.css(n,"display",!1,f)!=="inline")||(u=n["offset"+t[0].toUpperCase()+t.slice(1)],o=!0),u=parseFloat(u)||0,u+wi(n,t,r||(s?"border":"content"),o,f,u)+"px"}function h(n,t,i,r,u){return new h.prototype.init(n,t,i,r,u)}function bi(){fi&&(f.hidden===!1&&n.requestAnimationFrame?n.requestAnimationFrame(bi):n.setTimeout(bi,i.fx.interval),i.fx.tick())}function uf(){return n.setTimeout(function(){st=undefined}),st=Date.now()}function ei(n,t){var r,u=0,i={height:n};for(t=t?1:0;u<4;u+=2-t)r=w[u],i["margin"+r]=i["padding"+r]=n;return t&&(i.opacity=i.width=n),i}function ff(n,t,i){for(var u,f=(a.tweeners[t]||[]).concat(a.tweeners["*"]),r=0,e=f.length;r<e;r++)if(u=f[r].call(i,t,n))return u}function io(n,t,u){var f,y,w,c,b,s,o,l,k="width"in t||"height"in t,v=this,p={},h=n.style,a=n.nodeType&&ti(n),e=r.get(n,"fxshow");u.queue||(c=i._queueHooks(n,"fx"),c.unqueued==null&&(c.unqueued=0,b=c.empty.fire,c.empty.fire=function(){c.unqueued||b()}),c.unqueued++,v.always(function(){v.always(function(){c.unqueued--;i.queue(n,"fx").length||c.empty.fire()})}));for(f in t)if(y=t[f],tf.test(y)){if(delete t[f],w=w||y==="toggle",y===(a?"hide":"show"))if(y==="show"&&e&&e[f]!==undefined)a=!0;else continue;p[f]=e&&e[f]||i.style(n,f)}if(s=!i.isEmptyObject(t),s||!i.isEmptyObject(p)){k&&n.nodeType===1&&(u.overflow=[h.overflow,h.overflowX,h.overflowY],o=e&&e.display,o==null&&(o=r.get(n,"display")),l=i.css(n,"display"),l==="none"&&(o?l=o:(ft([n],!0),o=n.style.display||o,l=i.css(n,"display"),ft([n]))),(l==="inline"||l==="inline-block"&&o!=null)&&i.css(n,"float")==="none"&&(s||(v.done(function(){h.display=o}),o==null&&(l=h.display,o=l==="none"?"":l)),h.display="inline-block"));u.overflow&&(h.overflow="hidden",v.always(function(){h.overflow=u.overflow[0];h.overflowX=u.overflow[1];h.overflowY=u.overflow[2]}));s=!1;for(f in p)s||(e?"hidden"in e&&(a=e.hidden):e=r.access(n,"fxshow",{display:o}),w&&(e.hidden=!a),a&&ft([n],!0),v.done(function(){a||ft([n]);r.remove(n,"fxshow");for(f in p)i.style(n,f,p[f])})),s=ff(a?e[f]:0,f,v),f in e||(e[f]=s.start,a&&(s.end=s.start,s.start=0))}}function ro(n,t){var r,f,e,u,o;for(r in n)if(f=y(r),e=t[f],u=n[r],Array.isArray(u)&&(e=u[1],u=n[r]=u[0]),r!==f&&(n[f]=u,delete n[r]),o=i.cssHooks[f],o&&"expand"in o){u=o.expand(u);delete n[f];for(r in u)r in n||(n[r]=u[r],t[r]=e)}else t[f]=e}function a(n,t,r){var o,s,h=0,v=a.prefilters.length,e=i.Deferred().always(function(){delete l.elem}),l=function(){if(s)return!1;for(var o=st||uf(),t=Math.max(0,f.startTime+f.duration-o),h=t/f.duration||0,i=1-h,r=0,u=f.tweens.length;r<u;r++)f.tweens[r].run(i);return(e.notifyWith(n,[f,i,t]),i<1&&u)?t:(u||e.notifyWith(n,[f,1,0]),e.resolveWith(n,[f]),!1)},f=e.promise({elem:n,props:i.extend({},t),opts:i.extend(!0,{specialEasing:{},easing:i.easing._default},r),originalProperties:t,originalOptions:r,startTime:st||uf(),duration:r.duration,tweens:[],createTween:function(t,r){var u=i.Tween(n,f.opts,t,r,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(u),u},stop:function(t){var i=0,r=t?f.tweens.length:0;if(s)return this;for(s=!0;i<r;i++)f.tweens[i].run(1);return t?(e.notifyWith(n,[f,1,0]),e.resolveWith(n,[f,t])):e.rejectWith(n,[f,t]),this}}),c=f.props;for(ro(c,f.opts.specialEasing);h<v;h++)if(o=a.prefilters[h].call(f,n,c,f.opts),o)return u(o.stop)&&(i._queueHooks(f.elem,f.opts.queue).stop=o.stop.bind(o)),o;return i.map(c,ff,f),u(f.opts.start)&&f.opts.start.call(n,f),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always),i.fx.timer(i.extend(l,{elem:n,anim:f,queue:f.opts.queue})),f}function g(n){var t=n.match(l)||[];return t.join(" ")}function nt(n){return n.getAttribute&&n.getAttribute("class")||""}function ki(n){return Array.isArray(n)?n:typeof n=="string"?n.match(l)||[]:[]}function tr(n,t,r,u){var f;if(Array.isArray(t))i.each(t,function(t,i){r||uo.test(n)?u(n,i):tr(n+"["+(typeof i=="object"&&i!=null?t:"")+"]",i,r,u)});else if(r||it(t)!=="object")u(n,t);else for(f in t)tr(n+"["+f+"]",t[f],r,u)}function yf(n){return function(t,i){typeof t!="string"&&(i=t,t="*");var r,f=0,e=t.toLowerCase().match(l)||[];if(u(i))while(r=e[f++])r[0]==="+"?(r=r.slice(1)||"*",(n[r]=n[r]||[]).unshift(i)):(n[r]=n[r]||[]).push(i)}}function pf(n,t,r,u){function e(s){var h;return f[s]=!0,i.each(n[s]||[],function(n,i){var s=i(t,r,u);if(typeof s!="string"||o||f[s]){if(o)return!(h=s)}else return t.dataTypes.unshift(s),e(s),!1}),h}var f={},o=n===ir;return e(t.dataTypes[0])||!f["*"]&&e("*")}function ur(n,t){var r,u,f=i.ajaxSettings.flatOptions||{};for(r in t)t[r]!==undefined&&((f[r]?n:u||(u={}))[r]=t[r]);return u&&i.extend(!0,n,u),n}function vo(n,t,i){for(var e,u,f,o,s=n.contents,r=n.dataTypes;r[0]==="*";)r.shift(),e===undefined&&(e=n.mimeType||t.getResponseHeader("Content-Type"));if(e)for(u in s)if(s[u]&&s[u].test(e)){r.unshift(u);break}if(r[0]in i)f=r[0];else{for(u in i){if(!r[0]||n.converters[u+" "+r[0]]){f=u;break}o||(o=u)}f=f||o}if(f)return f!==r[0]&&r.unshift(f),i[f]}function yo(n,t,i,r){var h,u,f,s,e,o={},c=n.dataTypes.slice();if(c[1])for(f in n.converters)o[f.toLowerCase()]=n.converters[f];for(u=c.shift();u;)if(n.responseFields[u]&&(i[n.responseFields[u]]=t),!e&&r&&n.dataFilter&&(t=n.dataFilter(t,n.dataType)),e=u,u=c.shift(),u)if(u==="*")u=e;else if(e!=="*"&&e!==u){if(f=o[e+" "+u]||o["* "+u],!f)for(h in o)if(s=h.split(" "),s[1]===u&&(f=o[e+" "+s[0]]||o["* "+s[0]],f)){f===!0?f=o[h]:o[h]!==!0&&(u=s[0],c.unshift(s[1]));break}if(f!==!0)if(f&&n.throws)t=f(t);else try{t=f(t)}catch(l){return{state:"parsererror",error:f?l:"No conversion from "+e+" to "+u}}}return{state:"success",data:t}}var k=[],f=n.document,df=Object.getPrototypeOf,d=k.slice,er=k.concat,si=k.push,wt=k.indexOf,bt={},or=bt.toString,kt=bt.hasOwnProperty,sr=kt.toString,gf=sr.call(Object),e={},u=function(n){return typeof n=="function"&&typeof n.nodeType!="number"},tt=function(n){return n!=null&&n===n.window},ne={type:!0,src:!0,noModule:!0},cr="3.3.1",i=function(n,t){return new i.fn.init(n,t)},te=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,b,ci,vr,yr,pr,wr,br,l,gr,gt,lt,ai,ou,st,fi,tf,rf,ef,ht,of,sf,hf,di,gi,wf,ct,fr,oi,bf,kf;i.fn=i.prototype={jquery:cr,constructor:i,length:0,toArray:function(){return d.call(this)},get:function(n){return n==null?d.call(this):n<0?this[n+this.length]:this[n]},pushStack:function(n){var t=i.merge(this.constructor(),n);return t.prevObject=this,t},each:function(n){return i.each(this,n)},map:function(n){return this.pushStack(i.map(this,function(t,i){return n.call(t,i,t)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(n){var i=this.length,t=+n+(n<0?i:0);return this.pushStack(t>=0&&t<i?[this[t]]:[])},end:function(){return this.prevObject||this.constructor()},push:si,sort:k.sort,splice:k.splice};i.extend=i.fn.extend=function(){var o,e,r,t,s,h,n=arguments[0]||{},f=1,l=arguments.length,c=!1;for(typeof n=="boolean"&&(c=n,n=arguments[f]||{},f++),typeof n=="object"||u(n)||(n={}),f===l&&(n=this,f--);f<l;f++)if((o=arguments[f])!=null)for(e in o)(r=n[e],t=o[e],n!==t)&&(c&&t&&(i.isPlainObject(t)||(s=Array.isArray(t)))?(s?(s=!1,h=r&&Array.isArray(r)?r:[]):h=r&&i.isPlainObject(r)?r:{},n[e]=i.extend(c,h,t)):t!==undefined&&(n[e]=t));return n};i.extend({expando:"jQuery"+(cr+Math.random()).replace(/\D/g,""),isReady:!0,error:function(n){throw new Error(n);},noop:function(){},isPlainObject:function(n){var t,i;return!n||or.call(n)!=="[object Object]"?!1:(t=df(n),!t)?!0:(i=kt.call(t,"constructor")&&t.constructor,typeof i=="function"&&sr.call(i)===gf)},isEmptyObject:function(n){for(var t in n)return!1;return!0},globalEval:function(n){hr(n)},each:function(n,t){var r,i=0;if(hi(n)){for(r=n.length;i<r;i++)if(t.call(n[i],i,n[i])===!1)break}else for(i in n)if(t.call(n[i],i,n[i])===!1)break;return n},trim:function(n){return n==null?"":(n+"").replace(te,"")},makeArray:function(n,t){var r=t||[];return n!=null&&(hi(Object(n))?i.merge(r,typeof n=="string"?[n]:n):si.call(r,n)),r},inArray:function(n,t,i){return t==null?-1:wt.call(t,n,i)},merge:function(n,t){for(var u=+t.length,i=0,r=n.length;i<u;i++)n[r++]=t[i];return n.length=r,n},grep:function(n,t,i){for(var u,f=[],r=0,e=n.length,o=!i;r<e;r++)u=!t(n[r],r),u!==o&&f.push(n[r]);return f},map:function(n,t,i){var e,u,r=0,f=[];if(hi(n))for(e=n.length;r<e;r++)u=t(n[r],r,i),u!=null&&f.push(u);else for(r in n)u=t(n[r],r,i),u!=null&&f.push(u);return er.apply([],f)},guid:1,support:e});typeof Symbol=="function"&&(i.fn[Symbol.iterator]=k[Symbol.iterator]);i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(n,t){bt["[object "+t+"]"]=t.toLowerCase()});b=function(n){function u(n,t,r,u){var s,w,l,a,d,y,g,p=t&&t.ownerDocument,v=t?t.nodeType:9;if(r=r||[],typeof n!="string"||!n||v!==1&&v!==9&&v!==11)return r;if(!u&&((t?t.ownerDocument||t:c)!==i&&b(t),t=t||i,h)){if(v!==11&&(d=cr.exec(n)))if(s=d[1]){if(v===9)if(l=t.getElementById(s)){if(l.id===s)return r.push(l),r}else return r;else if(p&&(l=p.getElementById(s))&&et(t,l)&&l.id===s)return r.push(l),r}else{if(d[2])return k.apply(r,t.getElementsByTagName(n)),r;if((s=d[3])&&e.getElementsByClassName&&t.getElementsByClassName)return k.apply(r,t.getElementsByClassName(s)),r}if(e.qsa&&!lt[n+" "]&&(!o||!o.test(n))){if(v!==1)p=t,g=n;else if(t.nodeName.toLowerCase()!=="object"){for((a=t.getAttribute("id"))?a=a.replace(vi,yi):t.setAttribute("id",a=f),y=ft(n),w=y.length;w--;)y[w]="#"+a+" "+yt(y[w]);g=y.join(",");p=ni.test(n)&&ri(t.parentNode)||t}if(g)try{return k.apply(r,p.querySelectorAll(g)),r}catch(nt){}finally{a===f&&t.removeAttribute("id")}}}return si(n.replace(at,"$1"),t,r,u)}function ti(){function n(r,u){return i.push(r+" ")>t.cacheLength&&delete n[i.shift()],n[r+" "]=u}var i=[];return n}function l(n){return n[f]=!0,n}function a(n){var t=i.createElement("fieldset");try{return!!n(t)}catch(r){return!1}finally{t.parentNode&&t.parentNode.removeChild(t);t=null}}function ii(n,i){for(var r=n.split("|"),u=r.length;u--;)t.attrHandle[r[u]]=i}function wi(n,t){var i=t&&n,r=i&&n.nodeType===1&&t.nodeType===1&&n.sourceIndex-t.sourceIndex;if(r)return r;if(i)while(i=i.nextSibling)if(i===t)return-1;return n?1:-1}function ar(n){return function(t){var i=t.nodeName.toLowerCase();return i==="input"&&t.type===n}}function vr(n){return function(t){var i=t.nodeName.toLowerCase();return(i==="input"||i==="button")&&t.type===n}}function bi(n){return function(t){return"form"in t?t.parentNode&&t.disabled===!1?"label"in t?"label"in t.parentNode?t.parentNode.disabled===n:t.disabled===n:t.isDisabled===n||t.isDisabled!==!n&&lr(t)===n:t.disabled===n:"label"in t?t.disabled===n:!1}}function it(n){return l(function(t){return t=+t,l(function(i,r){for(var u,f=n([],i.length,t),e=f.length;e--;)i[u=f[e]]&&(i[u]=!(r[u]=i[u]))})})}function ri(n){return n&&typeof n.getElementsByTagName!="undefined"&&n}function ki(){}function yt(n){for(var t=0,r=n.length,i="";t<r;t++)i+=n[t].value;return i}function pt(n,t,i){var r=t.dir,u=t.next,e=u||r,o=i&&e==="parentNode",s=di++;return t.first?function(t,i,u){while(t=t[r])if(t.nodeType===1||o)return n(t,i,u);return!1}:function(t,i,h){var c,l,a,y=[v,s];if(h){while(t=t[r])if((t.nodeType===1||o)&&n(t,i,h))return!0}else while(t=t[r])if(t.nodeType===1||o)if(a=t[f]||(t[f]={}),l=a[t.uniqueID]||(a[t.uniqueID]={}),u&&u===t.nodeName.toLowerCase())t=t[r]||t;else{if((c=l[e])&&c[0]===v&&c[1]===s)return y[2]=c[2];if(l[e]=y,y[2]=n(t,i,h))return!0}return!1}}function ui(n){return n.length>1?function(t,i,r){for(var u=n.length;u--;)if(!n[u](t,i,r))return!1;return!0}:n[0]}function yr(n,t,i){for(var r=0,f=t.length;r<f;r++)u(n,t[r],i);return i}function wt(n,t,i,r,u){for(var e,o=[],f=0,s=n.length,h=t!=null;f<s;f++)(e=n[f])&&(!i||i(e,r,u))&&(o.push(e),h&&t.push(f));return o}function fi(n,t,i,r,u,e){return r&&!r[f]&&(r=fi(r)),u&&!u[f]&&(u=fi(u,e)),l(function(f,e,o,s){var l,c,a,p=[],y=[],w=e.length,b=f||yr(t||"*",o.nodeType?[o]:o,[]),v=n&&(f||!t)?wt(b,p,n,o,s):b,h=i?u||(f?n:w||r)?[]:e:v;if(i&&i(v,h,o,s),r)for(l=wt(h,y),r(l,[],o,s),c=l.length;c--;)(a=l[c])&&(h[y[c]]=!(v[y[c]]=a));if(f){if(u||n){if(u){for(l=[],c=h.length;c--;)(a=h[c])&&l.push(v[c]=a);u(null,h=[],l,s)}for(c=h.length;c--;)(a=h[c])&&(l=u?nt(f,a):p[c])>-1&&(f[l]=!(e[l]=a))}}else h=wt(h===e?h.splice(w,h.length):h),u?u(null,e,h,s):k.apply(e,h)})}function ei(n){for(var o,u,r,s=n.length,h=t.relative[n[0].type],c=h||t.relative[" "],i=h?1:0,l=pt(function(n){return n===o},c,!0),a=pt(function(n){return nt(o,n)>-1},c,!0),e=[function(n,t,i){var r=!h&&(i||t!==ht)||((o=t).nodeType?l(n,t,i):a(n,t,i));return o=null,r}];i<s;i++)if(u=t.relative[n[i].type])e=[pt(ui(e),u)];else{if(u=t.filter[n[i].type].apply(null,n[i].matches),u[f]){for(r=++i;r<s;r++)if(t.relative[n[r].type])break;return fi(i>1&&ui(e),i>1&&yt(n.slice(0,i-1).concat({value:n[i-2].type===" "?"*":""})).replace(at,"$1"),u,i<r&&ei(n.slice(i,r)),r<s&&ei(n=n.slice(r)),r<s&&yt(n))}e.push(u)}return ui(e)}function pr(n,r){var f=r.length>0,e=n.length>0,o=function(o,s,c,l,a){var y,nt,d,g=0,p="0",tt=o&&[],w=[],it=ht,rt=o||e&&t.find.TAG("*",a),ut=v+=it==null?1:Math.random()||.1,ft=rt.length;for(a&&(ht=s===i||s||a);p!==ft&&(y=rt[p])!=null;p++){if(e&&y){for(nt=0,s||y.ownerDocument===i||(b(y),c=!h);d=n[nt++];)if(d(y,s||i,c)){l.push(y);break}a&&(v=ut)}f&&((y=!d&&y)&&g--,o&&tt.push(y))}if(g+=p,f&&p!==g){for(nt=0;d=r[nt++];)d(tt,w,s,c);if(o){if(g>0)while(p--)tt[p]||w[p]||(w[p]=nr.call(l));w=wt(w)}k.apply(l,w);a&&!o&&w.length>0&&g+r.length>1&&u.uniqueSort(l)}return a&&(v=ut,ht=it),tt};return f?l(o):o}var rt,e,t,st,oi,ft,bt,si,ht,w,ut,b,i,s,h,o,d,ct,et,f="sizzle"+1*new Date,c=n.document,v=0,di=0,hi=ti(),ci=ti(),lt=ti(),kt=function(n,t){return n===t&&(ut=!0),0},gi={}.hasOwnProperty,g=[],nr=g.pop,tr=g.push,k=g.push,li=g.slice,nt=function(n,t){for(var i=0,r=n.length;i<r;i++)if(n[i]===t)return i;return-1},dt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",r="[\\x20\\t\\r\\n\\f]",tt="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",ai="\\["+r+"*("+tt+")(?:"+r+"*([*^$|!~]?=)"+r+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+tt+"))|)"+r+"*\\]",gt=":("+tt+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ai+")*)|.*)\\)|)",ir=new RegExp(r+"+","g"),at=new RegExp("^"+r+"+|((?:^|[^\\\\])(?:\\\\.)*)"+r+"+$","g"),rr=new RegExp("^"+r+"*,"+r+"*"),ur=new RegExp("^"+r+"*([>+~]|"+r+")"+r+"*"),fr=new RegExp("="+r+"*([^\\]'\"]*?)"+r+"*\\]","g"),er=new RegExp(gt),or=new RegExp("^"+tt+"$"),vt={ID:new RegExp("^#("+tt+")"),CLASS:new RegExp("^\\.("+tt+")"),TAG:new RegExp("^("+tt+"|[*])"),ATTR:new RegExp("^"+ai),PSEUDO:new RegExp("^"+gt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+r+"*(even|odd|(([+-]|)(\\d*)n|)"+r+"*(?:([+-]|)"+r+"*(\\d+)|))"+r+"*\\)|)","i"),bool:new RegExp("^(?:"+dt+")$","i"),needsContext:new RegExp("^"+r+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+r+"*((?:-\\d)?\\d*)"+r+"*\\)|)(?=[^-]|$)","i")},sr=/^(?:input|select|textarea|button)$/i,hr=/^h\d$/i,ot=/^[^{]+\{\s*\[native \w/,cr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ni=/[+~]/,y=new RegExp("\\\\([\\da-f]{1,6}"+r+"?|("+r+")|.)","ig"),p=function(n,t,i){var r="0x"+t-65536;return r!==r||i?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,r&1023|56320)},vi=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,yi=function(n,t){return t?n==="\0"?"�":n.slice(0,-1)+"\\"+n.charCodeAt(n.length-1).toString(16)+" ":"\\"+n},pi=function(){b()},lr=pt(function(n){return n.disabled===!0&&("form"in n||"label"in n)},{dir:"parentNode",next:"legend"});try{k.apply(g=li.call(c.childNodes),c.childNodes);g[c.childNodes.length].nodeType}catch(wr){k={apply:g.length?function(n,t){tr.apply(n,li.call(t))}:function(n,t){for(var i=n.length,r=0;n[i++]=t[r++];);n.length=i-1}}}e=u.support={};oi=u.isXML=function(n){var t=n&&(n.ownerDocument||n).documentElement;return t?t.nodeName!=="HTML":!1};b=u.setDocument=function(n){var v,u,l=n?n.ownerDocument||n:c;return l===i||l.nodeType!==9||!l.documentElement?i:(i=l,s=i.documentElement,h=!oi(i),c!==i&&(u=i.defaultView)&&u.top!==u&&(u.addEventListener?u.addEventListener("unload",pi,!1):u.attachEvent&&u.attachEvent("onunload",pi)),e.attributes=a(function(n){return n.className="i",!n.getAttribute("className")}),e.getElementsByTagName=a(function(n){return n.appendChild(i.createComment("")),!n.getElementsByTagName("*").length}),e.getElementsByClassName=ot.test(i.getElementsByClassName),e.getById=a(function(n){return s.appendChild(n).id=f,!i.getElementsByName||!i.getElementsByName(f).length}),e.getById?(t.filter.ID=function(n){var t=n.replace(y,p);return function(n){return n.getAttribute("id")===t}},t.find.ID=function(n,t){if(typeof t.getElementById!="undefined"&&h){var i=t.getElementById(n);return i?[i]:[]}}):(t.filter.ID=function(n){var t=n.replace(y,p);return function(n){var i=typeof n.getAttributeNode!="undefined"&&n.getAttributeNode("id");return i&&i.value===t}},t.find.ID=function(n,t){if(typeof t.getElementById!="undefined"&&h){var i,u,f,r=t.getElementById(n);if(r){if(i=r.getAttributeNode("id"),i&&i.value===n)return[r];for(f=t.getElementsByName(n),u=0;r=f[u++];)if(i=r.getAttributeNode("id"),i&&i.value===n)return[r]}return[]}}),t.find.TAG=e.getElementsByTagName?function(n,t){return typeof t.getElementsByTagName!="undefined"?t.getElementsByTagName(n):e.qsa?t.querySelectorAll(n):void 0}:function(n,t){var i,r=[],f=0,u=t.getElementsByTagName(n);if(n==="*"){while(i=u[f++])i.nodeType===1&&r.push(i);return r}return u},t.find.CLASS=e.getElementsByClassName&&function(n,t){if(typeof t.getElementsByClassName!="undefined"&&h)return t.getElementsByClassName(n)},d=[],o=[],(e.qsa=ot.test(i.querySelectorAll))&&(a(function(n){s.appendChild(n).innerHTML="<a id='"+f+"'><\/a><select id='"+f+"-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";n.querySelectorAll("[msallowcapture^='']").length&&o.push("[*^$]="+r+"*(?:''|\"\")");n.querySelectorAll("[selected]").length||o.push("\\["+r+"*(?:value|"+dt+")");n.querySelectorAll("[id~="+f+"-]").length||o.push("~=");n.querySelectorAll(":checked").length||o.push(":checked");n.querySelectorAll("a#"+f+"+*").length||o.push(".#.+[+~]")}),a(function(n){n.innerHTML="<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";var t=i.createElement("input");t.setAttribute("type","hidden");n.appendChild(t).setAttribute("name","D");n.querySelectorAll("[name=d]").length&&o.push("name"+r+"*[*^$|!~]?=");n.querySelectorAll(":enabled").length!==2&&o.push(":enabled",":disabled");s.appendChild(n).disabled=!0;n.querySelectorAll(":disabled").length!==2&&o.push(":enabled",":disabled");n.querySelectorAll("*,:x");o.push(",.*:")})),(e.matchesSelector=ot.test(ct=s.matches||s.webkitMatchesSelector||s.mozMatchesSelector||s.oMatchesSelector||s.msMatchesSelector))&&a(function(n){e.disconnectedMatch=ct.call(n,"*");ct.call(n,"[s!='']:x");d.push("!=",gt)}),o=o.length&&new RegExp(o.join("|")),d=d.length&&new RegExp(d.join("|")),v=ot.test(s.compareDocumentPosition),et=v||ot.test(s.contains)?function(n,t){var r=n.nodeType===9?n.documentElement:n,i=t&&t.parentNode;return n===i||!!(i&&i.nodeType===1&&(r.contains?r.contains(i):n.compareDocumentPosition&&n.compareDocumentPosition(i)&16))}:function(n,t){if(t)while(t=t.parentNode)if(t===n)return!0;return!1},kt=v?function(n,t){if(n===t)return ut=!0,0;var r=!n.compareDocumentPosition-!t.compareDocumentPosition;return r?r:(r=(n.ownerDocument||n)===(t.ownerDocument||t)?n.compareDocumentPosition(t):1,r&1||!e.sortDetached&&t.compareDocumentPosition(n)===r)?n===i||n.ownerDocument===c&&et(c,n)?-1:t===i||t.ownerDocument===c&&et(c,t)?1:w?nt(w,n)-nt(w,t):0:r&4?-1:1}:function(n,t){if(n===t)return ut=!0,0;var r,u=0,o=n.parentNode,s=t.parentNode,f=[n],e=[t];if(o&&s){if(o===s)return wi(n,t)}else return n===i?-1:t===i?1:o?-1:s?1:w?nt(w,n)-nt(w,t):0;for(r=n;r=r.parentNode;)f.unshift(r);for(r=t;r=r.parentNode;)e.unshift(r);while(f[u]===e[u])u++;return u?wi(f[u],e[u]):f[u]===c?-1:e[u]===c?1:0},i)};u.matches=function(n,t){return u(n,null,null,t)};u.matchesSelector=function(n,t){if((n.ownerDocument||n)!==i&&b(n),t=t.replace(fr,"='$1']"),e.matchesSelector&&h&&!lt[t+" "]&&(!d||!d.test(t))&&(!o||!o.test(t)))try{var r=ct.call(n,t);if(r||e.disconnectedMatch||n.document&&n.document.nodeType!==11)return r}catch(f){}return u(t,i,null,[n]).length>0};u.contains=function(n,t){return(n.ownerDocument||n)!==i&&b(n),et(n,t)};u.attr=function(n,r){(n.ownerDocument||n)!==i&&b(n);var f=t.attrHandle[r.toLowerCase()],u=f&&gi.call(t.attrHandle,r.toLowerCase())?f(n,r,!h):undefined;return u!==undefined?u:e.attributes||!h?n.getAttribute(r):(u=n.getAttributeNode(r))&&u.specified?u.value:null};u.escape=function(n){return(n+"").replace(vi,yi)};u.error=function(n){throw new Error("Syntax error, unrecognized expression: "+n);};u.uniqueSort=function(n){var r,u=[],t=0,i=0;if(ut=!e.detectDuplicates,w=!e.sortStable&&n.slice(0),n.sort(kt),ut){while(r=n[i++])r===n[i]&&(t=u.push(i));while(t--)n.splice(u[t],1)}return w=null,n};st=u.getText=function(n){var r,i="",u=0,t=n.nodeType;if(t){if(t===1||t===9||t===11){if(typeof n.textContent=="string")return n.textContent;for(n=n.firstChild;n;n=n.nextSibling)i+=st(n)}else if(t===3||t===4)return n.nodeValue}else while(r=n[u++])i+=st(r);return i};t=u.selectors={cacheLength:50,createPseudo:l,match:vt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(n){return n[1]=n[1].replace(y,p),n[3]=(n[3]||n[4]||n[5]||"").replace(y,p),n[2]==="~="&&(n[3]=" "+n[3]+" "),n.slice(0,4)},CHILD:function(n){return n[1]=n[1].toLowerCase(),n[1].slice(0,3)==="nth"?(n[3]||u.error(n[0]),n[4]=+(n[4]?n[5]+(n[6]||1):2*(n[3]==="even"||n[3]==="odd")),n[5]=+(n[7]+n[8]||n[3]==="odd")):n[3]&&u.error(n[0]),n},PSEUDO:function(n){var i,t=!n[6]&&n[2];return vt.CHILD.test(n[0])?null:(n[3]?n[2]=n[4]||n[5]||"":t&&er.test(t)&&(i=ft(t,!0))&&(i=t.indexOf(")",t.length-i)-t.length)&&(n[0]=n[0].slice(0,i),n[2]=t.slice(0,i)),n.slice(0,3))}},filter:{TAG:function(n){var t=n.replace(y,p).toLowerCase();return n==="*"?function(){return!0}:function(n){return n.nodeName&&n.nodeName.toLowerCase()===t}},CLASS:function(n){var t=hi[n+" "];return t||(t=new RegExp("(^|"+r+")"+n+"("+r+"|$)"))&&hi(n,function(n){return t.test(typeof n.className=="string"&&n.className||typeof n.getAttribute!="undefined"&&n.getAttribute("class")||"")})},ATTR:function(n,t,i){return function(r){var f=u.attr(r,n);return f==null?t==="!=":t?(f+="",t==="="?f===i:t==="!="?f!==i:t==="^="?i&&f.indexOf(i)===0:t==="*="?i&&f.indexOf(i)>-1:t==="$="?i&&f.slice(-i.length)===i:t==="~="?(" "+f.replace(ir," ")+" ").indexOf(i)>-1:t==="|="?f===i||f.slice(0,i.length+1)===i+"-":!1):!0}},CHILD:function(n,t,i,r,u){var s=n.slice(0,3)!=="nth",o=n.slice(-4)!=="last",e=t==="of-type";return r===1&&u===0?function(n){return!!n.parentNode}:function(t,i,h){var p,w,y,c,a,b,k=s!==o?"nextSibling":"previousSibling",d=t.parentNode,nt=e&&t.nodeName.toLowerCase(),g=!h&&!e,l=!1;if(d){if(s){while(k){for(c=t;c=c[k];)if(e?c.nodeName.toLowerCase()===nt:c.nodeType===1)return!1;b=k=n==="only"&&!b&&"nextSibling"}return!0}if(b=[o?d.firstChild:d.lastChild],o&&g){for(c=d,y=c[f]||(c[f]={}),w=y[c.uniqueID]||(y[c.uniqueID]={}),p=w[n]||[],a=p[0]===v&&p[1],l=a&&p[2],c=a&&d.childNodes[a];c=++a&&c&&c[k]||(l=a=0)||b.pop();)if(c.nodeType===1&&++l&&c===t){w[n]=[v,a,l];break}}else if(g&&(c=t,y=c[f]||(c[f]={}),w=y[c.uniqueID]||(y[c.uniqueID]={}),p=w[n]||[],a=p[0]===v&&p[1],l=a),l===!1)while(c=++a&&c&&c[k]||(l=a=0)||b.pop())if((e?c.nodeName.toLowerCase()===nt:c.nodeType===1)&&++l&&(g&&(y=c[f]||(c[f]={}),w=y[c.uniqueID]||(y[c.uniqueID]={}),w[n]=[v,l]),c===t))break;return l-=u,l===r||l%r==0&&l/r>=0}}},PSEUDO:function(n,i){var e,r=t.pseudos[n]||t.setFilters[n.toLowerCase()]||u.error("unsupported pseudo: "+n);return r[f]?r(i):r.length>1?(e=[n,n,"",i],t.setFilters.hasOwnProperty(n.toLowerCase())?l(function(n,t){for(var u,f=r(n,i),e=f.length;e--;)u=nt(n,f[e]),n[u]=!(t[u]=f[e])}):function(n){return r(n,0,e)}):r}},pseudos:{not:l(function(n){var t=[],r=[],i=bt(n.replace(at,"$1"));return i[f]?l(function(n,t,r,u){for(var e,o=i(n,null,u,[]),f=n.length;f--;)(e=o[f])&&(n[f]=!(t[f]=e))}):function(n,u,f){return t[0]=n,i(t,null,f,r),t[0]=null,!r.pop()}}),has:l(function(n){return function(t){return u(n,t).length>0}}),contains:l(function(n){return n=n.replace(y,p),function(t){return(t.textContent||t.innerText||st(t)).indexOf(n)>-1}}),lang:l(function(n){return or.test(n||"")||u.error("unsupported lang: "+n),n=n.replace(y,p).toLowerCase(),function(t){var i;do if(i=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return i=i.toLowerCase(),i===n||i.indexOf(n+"-")===0;while((t=t.parentNode)&&t.nodeType===1);return!1}}),target:function(t){var i=n.location&&n.location.hash;return i&&i.slice(1)===t.id},root:function(n){return n===s},focus:function(n){return n===i.activeElement&&(!i.hasFocus||i.hasFocus())&&!!(n.type||n.href||~n.tabIndex)},enabled:bi(!1),disabled:bi(!0),checked:function(n){var t=n.nodeName.toLowerCase();return t==="input"&&!!n.checked||t==="option"&&!!n.selected},selected:function(n){return n.parentNode&&n.parentNode.selectedIndex,n.selected===!0},empty:function(n){for(n=n.firstChild;n;n=n.nextSibling)if(n.nodeType<6)return!1;return!0},parent:function(n){return!t.pseudos.empty(n)},header:function(n){return hr.test(n.nodeName)},input:function(n){return sr.test(n.nodeName)},button:function(n){var t=n.nodeName.toLowerCase();return t==="input"&&n.type==="button"||t==="button"},text:function(n){var t;return n.nodeName.toLowerCase()==="input"&&n.type==="text"&&((t=n.getAttribute("type"))==null||t.toLowerCase()==="text")},first:it(function(){return[0]}),last:it(function(n,t){return[t-1]}),eq:it(function(n,t,i){return[i<0?i+t:i]}),even:it(function(n,t){for(var i=0;i<t;i+=2)n.push(i);return n}),odd:it(function(n,t){for(var i=1;i<t;i+=2)n.push(i);return n}),lt:it(function(n,t,i){for(var r=i<0?i+t:i;--r>=0;)n.push(r);return n}),gt:it(function(n,t,i){for(var r=i<0?i+t:i;++r<t;)n.push(r);return n})}};t.pseudos.nth=t.pseudos.eq;for(rt in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})t.pseudos[rt]=ar(rt);for(rt in{submit:!0,reset:!0})t.pseudos[rt]=vr(rt);return ki.prototype=t.filters=t.pseudos,t.setFilters=new ki,ft=u.tokenize=function(n,i){var e,f,s,o,r,h,c,l=ci[n+" "];if(l)return i?0:l.slice(0);for(r=n,h=[],c=t.preFilter;r;){(!e||(f=rr.exec(r)))&&(f&&(r=r.slice(f[0].length)||r),h.push(s=[]));e=!1;(f=ur.exec(r))&&(e=f.shift(),s.push({value:e,type:f[0].replace(at," ")}),r=r.slice(e.length));for(o in t.filter)(f=vt[o].exec(r))&&(!c[o]||(f=c[o](f)))&&(e=f.shift(),s.push({value:e,type:o,matches:f}),r=r.slice(e.length));if(!e)break}return i?r.length:r?u.error(n):ci(n,h).slice(0)},bt=u.compile=function(n,t){var r,u=[],e=[],i=lt[n+" "];if(!i){for(t||(t=ft(n)),r=t.length;r--;)i=ei(t[r]),i[f]?u.push(i):e.push(i);i=lt(n,pr(e,u));i.selector=n}return i},si=u.select=function(n,i,r,u){var o,f,e,l,a,c=typeof n=="function"&&n,s=!u&&ft(n=c.selector||n);if(r=r||[],s.length===1){if(f=s[0]=s[0].slice(0),f.length>2&&(e=f[0]).type==="ID"&&i.nodeType===9&&h&&t.relative[f[1].type]){if(i=(t.find.ID(e.matches[0].replace(y,p),i)||[])[0],i)c&&(i=i.parentNode);else return r;n=n.slice(f.shift().value.length)}for(o=vt.needsContext.test(n)?0:f.length;o--;){if(e=f[o],t.relative[l=e.type])break;if((a=t.find[l])&&(u=a(e.matches[0].replace(y,p),ni.test(f[0].type)&&ri(i.parentNode)||i))){if(f.splice(o,1),n=u.length&&yt(f),!n)return k.apply(r,u),r;break}}}return(c||bt(n,s))(u,i,!h,r,!i||ni.test(n)&&ri(i.parentNode)||i),r},e.sortStable=f.split("").sort(kt).join("")===f,e.detectDuplicates=!!ut,b(),e.sortDetached=a(function(n){return n.compareDocumentPosition(i.createElement("fieldset"))&1}),a(function(n){return n.innerHTML="<a href='#'><\/a>",n.firstChild.getAttribute("href")==="#"})||ii("type|href|height|width",function(n,t,i){if(!i)return n.getAttribute(t,t.toLowerCase()==="type"?1:2)}),e.attributes&&a(function(n){return n.innerHTML="<input/>",n.firstChild.setAttribute("value",""),n.firstChild.getAttribute("value")===""})||ii("value",function(n,t,i){if(!i&&n.nodeName.toLowerCase()==="input")return n.defaultValue}),a(function(n){return n.getAttribute("disabled")==null})||ii(dt,function(n,t,i){var r;if(!i)return n[t]===!0?t.toLowerCase():(r=n.getAttributeNode(t))&&r.specified?r.value:null}),u}(n);i.find=b;i.expr=b.selectors;i.expr[":"]=i.expr.pseudos;i.uniqueSort=i.unique=b.uniqueSort;i.text=b.getText;i.isXMLDoc=b.isXML;i.contains=b.contains;i.escapeSelector=b.escape;var rt=function(n,t,r){for(var u=[],f=r!==undefined;(n=n[t])&&n.nodeType!==9;)if(n.nodeType===1){if(f&&i(n).is(r))break;u.push(n)}return u},lr=function(n,t){for(var i=[];n;n=n.nextSibling)n.nodeType===1&&n!==t&&i.push(n);return i},ar=i.expr.match.needsContext;ci=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;i.filter=function(n,t,r){var u=t[0];return(r&&(n=":not("+n+")"),t.length===1&&u.nodeType===1)?i.find.matchesSelector(u,n)?[u]:[]:i.find.matches(n,i.grep(t,function(n){return n.nodeType===1}))};i.fn.extend({find:function(n){var t,r,u=this.length,f=this;if(typeof n!="string")return this.pushStack(i(n).filter(function(){for(t=0;t<u;t++)if(i.contains(f[t],this))return!0}));for(r=this.pushStack([]),t=0;t<u;t++)i.find(n,f[t],r);return u>1?i.uniqueSort(r):r},filter:function(n){return this.pushStack(li(this,n||[],!1))},not:function(n){return this.pushStack(li(this,n||[],!0))},is:function(n){return!!li(this,typeof n=="string"&&ar.test(n)?i(n):n||[],!1).length}});yr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;pr=i.fn.init=function(n,t,r){var e,o;if(!n)return this;if(r=r||vr,typeof n=="string"){if(e=n[0]==="<"&&n[n.length-1]===">"&&n.length>=3?[null,n,null]:yr.exec(n),e&&(e[1]||!t)){if(e[1]){if(t=t instanceof i?t[0]:t,i.merge(this,i.parseHTML(e[1],t&&t.nodeType?t.ownerDocument||t:f,!0)),ci.test(e[1])&&i.isPlainObject(t))for(e in t)u(this[e])?this[e](t[e]):this.attr(e,t[e]);return this}return o=f.getElementById(e[2]),o&&(this[0]=o,this.length=1),this}return!t||t.jquery?(t||r).find(n):this.constructor(t).find(n)}return n.nodeType?(this[0]=n,this.length=1,this):u(n)?r.ready!==undefined?r.ready(n):n(i):i.makeArray(n,this)};pr.prototype=i.fn;vr=i(f);wr=/^(?:parents|prev(?:Until|All))/;br={children:!0,contents:!0,next:!0,prev:!0};i.fn.extend({has:function(n){var t=i(n,this),r=t.length;return this.filter(function(){for(var n=0;n<r;n++)if(i.contains(this,t[n]))return!0})},closest:function(n,t){var r,f=0,o=this.length,u=[],e=typeof n!="string"&&i(n);if(!ar.test(n))for(;f<o;f++)for(r=this[f];r&&r!==t;r=r.parentNode)if(r.nodeType<11&&(e?e.index(r)>-1:r.nodeType===1&&i.find.matchesSelector(r,n))){u.push(r);break}return this.pushStack(u.length>1?i.uniqueSort(u):u)},index:function(n){return n?typeof n=="string"?wt.call(i(n),this[0]):wt.call(this,n.jquery?n[0]:n):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(n,t){return this.pushStack(i.uniqueSort(i.merge(this.get(),i(n,t))))},addBack:function(n){return this.add(n==null?this.prevObject:this.prevObject.filter(n))}});i.each({parent:function(n){var t=n.parentNode;return t&&t.nodeType!==11?t:null},parents:function(n){return rt(n,"parentNode")},parentsUntil:function(n,t,i){return rt(n,"parentNode",i)},next:function(n){return kr(n,"nextSibling")},prev:function(n){return kr(n,"previousSibling")},nextAll:function(n){return rt(n,"nextSibling")},prevAll:function(n){return rt(n,"previousSibling")},nextUntil:function(n,t,i){return rt(n,"nextSibling",i)},prevUntil:function(n,t,i){return rt(n,"previousSibling",i)},siblings:function(n){return lr((n.parentNode||{}).firstChild,n)},children:function(n){return lr(n.firstChild)},contents:function(n){return v(n,"iframe")?n.contentDocument:(v(n,"template")&&(n=n.content||n),i.merge([],n.childNodes))}},function(n,t){i.fn[n]=function(r,u){var f=i.map(this,t,r);return n.slice(-5)!=="Until"&&(u=r),u&&typeof u=="string"&&(f=i.filter(u,f)),this.length>1&&(br[n]||i.uniqueSort(f),wr.test(n)&&f.reverse()),this.pushStack(f)}});l=/[^\x20\t\r\n\f]+/g;i.Callbacks=function(n){n=typeof n=="string"?ie(n):i.extend({},n);var o,r,c,f,t=[],s=[],e=-1,l=function(){for(f=f||n.once,c=o=!0;s.length;e=-1)for(r=s.shift();++e<t.length;)t[e].apply(r[0],r[1])===!1&&n.stopOnFalse&&(e=t.length,r=!1);n.memory||(r=!1);o=!1;f&&(t=r?[]:"")},h={add:function(){return t&&(r&&!o&&(e=t.length-1,s.push(r)),function f(r){i.each(r,function(i,r){u(r)?n.unique&&h.has(r)||t.push(r):r&&r.length&&it(r)!=="string"&&f(r)})}(arguments),r&&!o&&l()),this},remove:function(){return i.each(arguments,function(n,r){for(var u;(u=i.inArray(r,t,u))>-1;)t.splice(u,1),u<=e&&e--}),this},has:function(n){return n?i.inArray(n,t)>-1:t.length>0},empty:function(){return t&&(t=[]),this},disable:function(){return f=s=[],t=r="",this},disabled:function(){return!t},lock:function(){return f=s=[],r||o||(t=r=""),this},locked:function(){return!!f},fireWith:function(n,t){return f||(t=t||[],t=[n,t.slice?t.slice():t],s.push(t),o||l()),this},fire:function(){return h.fireWith(this,arguments),this},fired:function(){return!!c}};return h};i.extend({Deferred:function(t){var f=[["notify","progress",i.Callbacks("memory"),i.Callbacks("memory"),2],["resolve","done",i.Callbacks("once memory"),i.Callbacks("once memory"),0,"resolved"],["reject","fail",i.Callbacks("once memory"),i.Callbacks("once memory"),1,"rejected"]],o="pending",e={state:function(){return o},always:function(){return r.done(arguments).fail(arguments),this},"catch":function(n){return e.then(null,n)},pipe:function(){var n=arguments;return i.Deferred(function(t){i.each(f,function(i,f){var e=u(n[f[4]])&&n[f[4]];r[f[1]](function(){var n=e&&e.apply(this,arguments);n&&u(n.promise)?n.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[f[0]+"With"](this,e?[n]:arguments)})});n=null}).promise()},then:function(t,r,e){function s(t,r,f,e){return function(){var h=this,c=arguments,a=function(){var n,i;if(!(t<o)){if(n=f.apply(h,c),n===r.promise())throw new TypeError("Thenable self-resolution");i=n&&(typeof n=="object"||typeof n=="function")&&n.then;u(i)?e?i.call(n,s(o,r,ut,e),s(o,r,dt,e)):(o++,i.call(n,s(o,r,ut,e),s(o,r,dt,e),s(o,r,ut,r.notifyWith))):(f!==ut&&(h=undefined,c=[n]),(e||r.resolveWith)(h,c))}},l=e?a:function(){try{a()}catch(n){i.Deferred.exceptionHook&&i.Deferred.exceptionHook(n,l.stackTrace);t+1>=o&&(f!==dt&&(h=undefined,c=[n]),r.rejectWith(h,c))}};t?l():(i.Deferred.getStackHook&&(l.stackTrace=i.Deferred.getStackHook()),n.setTimeout(l))}}var o=0;return i.Deferred(function(n){f[0][3].add(s(0,n,u(e)?e:ut,n.notifyWith));f[1][3].add(s(0,n,u(t)?t:ut));f[2][3].add(s(0,n,u(r)?r:dt))}).promise()},promise:function(n){return n!=null?i.extend(n,e):e}},r={};return i.each(f,function(n,t){var i=t[2],u=t[5];e[t[1]]=i.add;u&&i.add(function(){o=u},f[3-n][2].disable,f[3-n][3].disable,f[0][2].lock,f[0][3].lock);i.add(t[3].fire);r[t[0]]=function(){return r[t[0]+"With"](this===r?undefined:this,arguments),this};r[t[0]+"With"]=i.fireWith}),e.promise(r),t&&t.call(r,r),r},when:function(n){var e=arguments.length,t=e,o=Array(t),f=d.call(arguments),r=i.Deferred(),s=function(n){return function(t){o[n]=this;f[n]=arguments.length>1?d.call(arguments):t;--e||r.resolveWith(o,f)}};if(e<=1&&(dr(n,r.done(s(t)).resolve,r.reject,!e),r.state()==="pending"||u(f[t]&&f[t].then)))return r.then();while(t--)dr(f[t],s(t),r.reject);return r.promise()}});gr=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;i.Deferred.exceptionHook=function(t,i){n.console&&n.console.warn&&t&&gr.test(t.name)&&n.console.warn("jQuery.Deferred exception: "+t.message,t.stack,i)};i.readyException=function(t){n.setTimeout(function(){throw t;})};gt=i.Deferred();i.fn.ready=function(n){return gt.then(n).catch(function(n){i.readyException(n)}),this};i.extend({isReady:!1,readyWait:1,ready:function(n){(n===!0?--i.readyWait:i.isReady)||(i.isReady=!0,n!==!0&&--i.readyWait>0)||gt.resolveWith(f,[i])}});i.ready.then=gt.then;f.readyState!=="complete"&&(f.readyState==="loading"||f.documentElement.doScroll)?(f.addEventListener("DOMContentLoaded",ni),n.addEventListener("load",ni)):n.setTimeout(i.ready);var p=function(n,t,r,f,e,o,s){var h=0,l=n.length,c=r==null;if(it(r)==="object"){e=!0;for(h in r)p(n,t,h,r[h],!0,o,s)}else if(f!==undefined&&(e=!0,u(f)||(s=!0),c&&(s?(t.call(n,f),t=null):(c=t,t=function(n,t,r){return c.call(i(n),r)})),t))for(;h<l;h++)t(n[h],r,s?f:f.call(n[h],h,t(n[h],r)));return e?n:c?t.call(n):l?t(n[0],r):o},re=/^-ms-/,ue=/-([a-z])/g;lt=function(n){return n.nodeType===1||n.nodeType===9||!+n.nodeType};at.uid=1;at.prototype={cache:function(n){var t=n[this.expando];return t||(t={},lt(n)&&(n.nodeType?n[this.expando]=t:Object.defineProperty(n,this.expando,{value:t,configurable:!0}))),t},set:function(n,t,i){var r,u=this.cache(n);if(typeof t=="string")u[y(t)]=i;else for(r in t)u[y(r)]=t[r];return u},get:function(n,t){return t===undefined?this.cache(n):n[this.expando]&&n[this.expando][y(t)]},access:function(n,t,i){return t===undefined||t&&typeof t=="string"&&i===undefined?this.get(n,t):(this.set(n,t,i),i!==undefined?i:t)},remove:function(n,t){var u,r=n[this.expando];if(r!==undefined){if(t!==undefined)for(Array.isArray(t)?t=t.map(y):(t=y(t),t=t in r?[t]:t.match(l)||[]),u=t.length;u--;)delete r[t[u]];(t===undefined||i.isEmptyObject(r))&&(n.nodeType?n[this.expando]=undefined:delete n[this.expando])}},hasData:function(n){var t=n[this.expando];return t!==undefined&&!i.isEmptyObject(t)}};var r=new at,o=new at,ee=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,oe=/[A-Z]/g;i.extend({hasData:function(n){return o.hasData(n)||r.hasData(n)},data:function(n,t,i){return o.access(n,t,i)},removeData:function(n,t){o.remove(n,t)},_data:function(n,t,i){return r.access(n,t,i)},_removeData:function(n,t){r.remove(n,t)}});i.fn.extend({data:function(n,t){var f,u,e,i=this[0],s=i&&i.attributes;if(n===undefined){if(this.length&&(e=o.get(i),i.nodeType===1&&!r.get(i,"hasDataAttrs"))){for(f=s.length;f--;)s[f]&&(u=s[f].name,u.indexOf("data-")===0&&(u=y(u.slice(5)),nu(i,u,e[u])));r.set(i,"hasDataAttrs",!0)}return e}return typeof n=="object"?this.each(function(){o.set(this,n)}):p(this,function(t){var r;if(i&&t===undefined)return(r=o.get(i,n),r!==undefined)?r:(r=nu(i,n),r!==undefined)?r:void 0;this.each(function(){o.set(this,n,t)})},null,t,arguments.length>1,null,!0)},removeData:function(n){return this.each(function(){o.remove(this,n)})}});i.extend({queue:function(n,t,u){var f;if(n)return t=(t||"fx")+"queue",f=r.get(n,t),u&&(!f||Array.isArray(u)?f=r.access(n,t,i.makeArray(u)):f.push(u)),f||[]},dequeue:function(n,t){t=t||"fx";var r=i.queue(n,t),e=r.length,u=r.shift(),f=i._queueHooks(n,t),o=function(){i.dequeue(n,t)};u==="inprogress"&&(u=r.shift(),e--);u&&(t==="fx"&&r.unshift("inprogress"),delete f.stop,u.call(n,o,f));!e&&f&&f.empty.fire()},_queueHooks:function(n,t){var u=t+"queueHooks";return r.get(n,u)||r.access(n,u,{empty:i.Callbacks("once memory").add(function(){r.remove(n,[t+"queue",u])})})}});i.fn.extend({queue:function(n,t){var r=2;return(typeof n!="string"&&(t=n,n="fx",r--),arguments.length<r)?i.queue(this[0],n):t===undefined?this:this.each(function(){var r=i.queue(this,n,t);i._queueHooks(this,n);n==="fx"&&r[0]!=="inprogress"&&i.dequeue(this,n)})},dequeue:function(n){return this.each(function(){i.dequeue(this,n)})},clearQueue:function(n){return this.queue(n||"fx",[])},promise:function(n,t){var u,e=1,o=i.Deferred(),f=this,s=this.length,h=function(){--e||o.resolveWith(f,[f])};for(typeof n!="string"&&(t=n,n=undefined),n=n||"fx";s--;)u=r.get(f[s],n+"queueHooks"),u&&u.empty&&(e++,u.empty.add(h));return h(),o.promise(t)}});var tu=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,vt=new RegExp("^(?:([+-])=|)("+tu+")([a-z%]*)$","i"),w=["Top","Right","Bottom","Left"],ti=function(n,t){return n=t||n,n.style.display==="none"||n.style.display===""&&i.contains(n.ownerDocument,n)&&i.css(n,"display")==="none"},iu=function(n,t,i,r){var f,u,e={};for(u in t)e[u]=n.style[u],n.style[u]=t[u];f=i.apply(n,r||[]);for(u in t)n.style[u]=e[u];return f};ai={};i.fn.extend({show:function(){return ft(this,!0)},hide:function(){return ft(this)},toggle:function(n){return typeof n=="boolean"?n?this.show():this.hide():this.each(function(){ti(this)?i(this).show():i(this).hide()})}});var uu=/^(?:checkbox|radio)$/i,fu=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,eu=/^$|^module$|\/(?:java|ecma)script/i,c={option:[1,"<select multiple='multiple'>","<\/select>"],thead:[1,"<table>","<\/table>"],col:[2,"<table><colgroup>","<\/colgroup><\/table>"],tr:[2,"<table><tbody>","<\/tbody><\/table>"],td:[3,"<table><tbody><tr>","<\/tr><\/tbody><\/table>"],_default:[0,"",""]};c.optgroup=c.option;c.tbody=c.tfoot=c.colgroup=c.caption=c.thead;c.th=c.td;ou=/<|&#?\w+;/,function(){var i=f.createDocumentFragment(),n=i.appendChild(f.createElement("div")),t=f.createElement("input");t.setAttribute("type","radio");t.setAttribute("checked","checked");t.setAttribute("name","t");n.appendChild(t);e.checkClone=n.cloneNode(!0).cloneNode(!0).lastChild.checked;n.innerHTML="<textarea>x<\/textarea>";e.noCloneChecked=!!n.cloneNode(!0).lastChild.defaultValue}();var ii=f.documentElement,ce=/^key/,le=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,hu=/^([^.]*)(?:\.(.+)|)/;i.event={global:{},add:function(n,t,u,f,e){var v,y,w,p,b,h,s,c,o,k,d,a=r.get(n);if(a)for(u.handler&&(v=u,u=v.handler,e=v.selector),e&&i.find.matchesSelector(ii,e),u.guid||(u.guid=i.guid++),(p=a.events)||(p=a.events={}),(y=a.handle)||(y=a.handle=function(t){return typeof i!="undefined"&&i.event.triggered!==t.type?i.event.dispatch.apply(n,arguments):undefined}),t=(t||"").match(l)||[""],b=t.length;b--;)(w=hu.exec(t[b])||[],o=d=w[1],k=(w[2]||"").split(".").sort(),o)&&(s=i.event.special[o]||{},o=(e?s.delegateType:s.bindType)||o,s=i.event.special[o]||{},h=i.extend({type:o,origType:d,data:f,handler:u,guid:u.guid,selector:e,needsContext:e&&i.expr.match.needsContext.test(e),namespace:k.join(".")},v),(c=p[o])||(c=p[o]=[],c.delegateCount=0,s.setup&&s.setup.call(n,f,k,y)!==!1||n.addEventListener&&n.addEventListener(o,y)),s.add&&(s.add.call(n,h),h.handler.guid||(h.handler.guid=u.guid)),e?c.splice(c.delegateCount++,0,h):c.push(h),i.event.global[o]=!0)},remove:function(n,t,u,f,e){var y,k,h,v,p,s,c,a,o,b,d,w=r.hasData(n)&&r.get(n);if(w&&(v=w.events)){for(t=(t||"").match(l)||[""],p=t.length;p--;){if(h=hu.exec(t[p])||[],o=d=h[1],b=(h[2]||"").split(".").sort(),!o){for(o in v)i.event.remove(n,o+t[p],u,f,!0);continue}for(c=i.event.special[o]||{},o=(f?c.delegateType:c.bindType)||o,a=v[o]||[],h=h[2]&&new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"),k=y=a.length;y--;)s=a[y],(e||d===s.origType)&&(!u||u.guid===s.guid)&&(!h||h.test(s.namespace))&&(!f||f===s.selector||f==="**"&&s.selector)&&(a.splice(y,1),s.selector&&a.delegateCount--,c.remove&&c.remove.call(n,s));k&&!a.length&&(c.teardown&&c.teardown.call(n,b,w.handle)!==!1||i.removeEvent(n,o,w.handle),delete v[o])}i.isEmptyObject(v)&&r.remove(n,"handle events")}},dispatch:function(n){var t=i.event.fix(n),u,c,s,e,f,l,h=new Array(arguments.length),a=(r.get(this,"events")||{})[t.type]||[],o=i.event.special[t.type]||{};for(h[0]=t,u=1;u<arguments.length;u++)h[u]=arguments[u];if(t.delegateTarget=this,!o.preDispatch||o.preDispatch.call(this,t)!==!1){for(l=i.event.handlers.call(this,t,a),u=0;(e=l[u++])&&!t.isPropagationStopped();)for(t.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!t.isImmediatePropagationStopped();)(!t.rnamespace||t.rnamespace.test(f.namespace))&&(t.handleObj=f,t.data=f.data,s=((i.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h),s!==undefined&&(t.result=s)===!1&&(t.preventDefault(),t.stopPropagation()));return o.postDispatch&&o.postDispatch.call(this,t),t.result}},handlers:function(n,t){var f,e,u,o,s,c=[],h=t.delegateCount,r=n.target;if(h&&r.nodeType&&!(n.type==="click"&&n.button>=1))for(;r!==this;r=r.parentNode||this)if(r.nodeType===1&&!(n.type==="click"&&r.disabled===!0)){for(o=[],s={},f=0;f<h;f++)e=t[f],u=e.selector+" ",s[u]===undefined&&(s[u]=e.needsContext?i(u,this).index(r)>-1:i.find(u,this,null,[r]).length),s[u]&&o.push(e);o.length&&c.push({elem:r,handlers:o})}return r=this,h<t.length&&c.push({elem:r,handlers:t.slice(h)}),c},addProp:function(n,t){Object.defineProperty(i.Event.prototype,n,{enumerable:!0,configurable:!0,get:u(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[n]},set:function(t){Object.defineProperty(this,n,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(n){return n[i.expando]?n:new i.Event(n)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cu()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===cu()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&v(this,"input"))return this.click(),!1},_default:function(n){return v(n.target,"a")}},beforeunload:{postDispatch:function(n){n.result!==undefined&&n.originalEvent&&(n.originalEvent.returnValue=n.result)}}}};i.removeEvent=function(n,t,i){n.removeEventListener&&n.removeEventListener(t,i)};i.Event=function(n,t){if(!(this instanceof i.Event))return new i.Event(n,t);n&&n.type?(this.originalEvent=n,this.type=n.type,this.isDefaultPrevented=n.defaultPrevented||n.defaultPrevented===undefined&&n.returnValue===!1?ri:et,this.target=n.target&&n.target.nodeType===3?n.target.parentNode:n.target,this.currentTarget=n.currentTarget,this.relatedTarget=n.relatedTarget):this.type=n;t&&i.extend(this,t);this.timeStamp=n&&n.timeStamp||Date.now();this[i.expando]=!0};i.Event.prototype={constructor:i.Event,isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et,isSimulated:!1,preventDefault:function(){var n=this.originalEvent;this.isDefaultPrevented=ri;n&&!this.isSimulated&&n.preventDefault()},stopPropagation:function(){var n=this.originalEvent;this.isPropagationStopped=ri;n&&!this.isSimulated&&n.stopPropagation()},stopImmediatePropagation:function(){var n=this.originalEvent;this.isImmediatePropagationStopped=ri;n&&!this.isSimulated&&n.stopImmediatePropagation();this.stopPropagation()}};i.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(n){var t=n.button;return n.which==null&&ce.test(n.type)?n.charCode!=null?n.charCode:n.keyCode:!n.which&&t!==undefined&&le.test(n.type)?t&1?1:t&2?3:t&4?2:0:n.which}},i.event.addProp);i.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(n,t){i.event.special[n]={delegateType:t,bindType:t,handle:function(n){var u,f=this,r=n.relatedTarget,e=n.handleObj;return r&&(r===f||i.contains(f,r))||(n.type=e.origType,u=e.handler.apply(this,arguments),n.type=t),u}}});i.fn.extend({on:function(n,t,i,r){return yi(this,n,t,i,r)},one:function(n,t,i,r){return yi(this,n,t,i,r,1)},off:function(n,t,r){var u,f;if(n&&n.preventDefault&&n.handleObj)return u=n.handleObj,i(n.delegateTarget).off(u.namespace?u.origType+"."+u.namespace:u.origType,u.selector,u.handler),this;if(typeof n=="object"){for(f in n)this.off(f,t,n[f]);return this}return(t===!1||typeof t=="function")&&(r=t,t=undefined),r===!1&&(r=et),this.each(function(){i.event.remove(this,n,r,t)})}});var ae=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ve=/<script|<style|<link/i,ye=/checked\s*(?:[^=]|=\s*.checked.)/i,pe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;i.extend({htmlPrefilter:function(n){return n.replace(ae,"<$1><\/$2>")},clone:function(n,t,r){var u,c,o,f,h=n.cloneNode(!0),l=i.contains(n.ownerDocument,n);if(!e.noCloneChecked&&(n.nodeType===1||n.nodeType===11)&&!i.isXMLDoc(n))for(f=s(h),o=s(n),u=0,c=o.length;u<c;u++)ke(o[u],f[u]);if(t)if(r)for(o=o||s(n),f=f||s(h),u=0,c=o.length;u<c;u++)au(o[u],f[u]);else au(n,h);return f=s(h,"script"),f.length>0&&vi(f,!l&&s(n,"script")),h},cleanData:function(n){for(var u,t,f,s=i.event.special,e=0;(t=n[e])!==undefined;e++)if(lt(t)){if(u=t[r.expando]){if(u.events)for(f in u.events)s[f]?i.event.remove(t,f):i.removeEvent(t,f,u.handle);t[r.expando]=undefined}t[o.expando]&&(t[o.expando]=undefined)}}});i.fn.extend({detach:function(n){return vu(this,n,!0)},remove:function(n){return vu(this,n)},text:function(n){return p(this,function(n){return n===undefined?i.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=n)})},null,n,arguments.length)},append:function(){return ot(this,arguments,function(n){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=lu(this,n);t.appendChild(n)}})},prepend:function(){return ot(this,arguments,function(n){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=lu(this,n);t.insertBefore(n,t.firstChild)}})},before:function(){return ot(this,arguments,function(n){this.parentNode&&this.parentNode.insertBefore(n,this)})},after:function(){return ot(this,arguments,function(n){this.parentNode&&this.parentNode.insertBefore(n,this.nextSibling)})},empty:function(){for(var n,t=0;(n=this[t])!=null;t++)n.nodeType===1&&(i.cleanData(s(n,!1)),n.textContent="");return this},clone:function(n,t){return n=n==null?!1:n,t=t==null?n:t,this.map(function(){return i.clone(this,n,t)})},html:function(n){return p(this,function(n){var t=this[0]||{},r=0,u=this.length;if(n===undefined&&t.nodeType===1)return t.innerHTML;if(typeof n=="string"&&!ve.test(n)&&!c[(fu.exec(n)||["",""])[1].toLowerCase()]){n=i.htmlPrefilter(n);try{for(;r<u;r++)t=this[r]||{},t.nodeType===1&&(i.cleanData(s(t,!1)),t.innerHTML=n);t=0}catch(f){}}t&&this.empty().append(n)},null,n,arguments.length)},replaceWith:function(){var n=[];return ot(this,arguments,function(t){var r=this.parentNode;i.inArray(this,n)<0&&(i.cleanData(s(this)),r&&r.replaceChild(t,this))},n)}});i.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(n,t){i.fn[n]=function(n){for(var u,f=[],e=i(n),o=e.length-1,r=0;r<=o;r++)u=r===o?this:this.clone(!0),i(e[r])[t](u),si.apply(f,u.get());return this.pushStack(f)}});var pi=new RegExp("^("+tu+")(?!px)[a-z%]+$","i"),ui=function(t){var i=t.ownerDocument.defaultView;return i&&i.opener||(i=n),i.getComputedStyle(t)},de=new RegExp(w.join("|"),"i");(function(){function r(){if(t){o.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";t.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";ii.appendChild(o).appendChild(t);var i=n.getComputedStyle(t);s=i.top!=="1%";a=u(i.marginLeft)===12;t.style.right="60%";l=u(i.right)===36;h=u(i.width)===36;t.style.position="absolute";c=t.offsetWidth===36||"absolute";ii.removeChild(o);t=null}}function u(n){return Math.round(parseFloat(n))}var s,h,c,l,a,o=f.createElement("div"),t=f.createElement("div");t.style&&(t.style.backgroundClip="content-box",t.cloneNode(!0).style.backgroundClip="",e.clearCloneStyle=t.style.backgroundClip==="content-box",i.extend(e,{boxSizingReliable:function(){return r(),h},pixelBoxStyles:function(){return r(),l},pixelPosition:function(){return r(),s},reliableMarginLeft:function(){return r(),a},scrollboxSize:function(){return r(),c}}))})();var ge=/^(none|table(?!-c[ea]).+)/,pu=/^--/,no={position:"absolute",visibility:"hidden",display:"block"},wu={letterSpacing:"0",fontWeight:"400"},bu=["Webkit","Moz","ms"],ku=f.createElement("div").style;i.extend({cssHooks:{opacity:{get:function(n,t){if(t){var i=yt(n,"opacity");return i===""?"1":i}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(n,t,r,u){if(n&&n.nodeType!==3&&n.nodeType!==8&&n.style){var f,s,o,c=y(t),l=pu.test(t),h=n.style;if(l||(t=du(c)),o=i.cssHooks[t]||i.cssHooks[c],r!==undefined){if(s=typeof r,s==="string"&&(f=vt.exec(r))&&f[1]&&(r=ru(n,t,f),s="number"),r==null||r!==r)return;s==="number"&&(r+=f&&f[3]||(i.cssNumber[c]?"":"px"));e.clearCloneStyle||r!==""||t.indexOf("background")!==0||(h[t]="inherit");o&&"set"in o&&(r=o.set(n,r,u))===undefined||(l?h.setProperty(t,r):h[t]=r)}else return o&&"get"in o&&(f=o.get(n,!1,u))!==undefined?f:h[t]}},css:function(n,t,r,u){var f,o,e,s=y(t),h=pu.test(t);return(h||(t=du(s)),e=i.cssHooks[t]||i.cssHooks[s],e&&"get"in e&&(f=e.get(n,!0,r)),f===undefined&&(f=yt(n,t,u)),f==="normal"&&t in wu&&(f=wu[t]),r===""||r)?(o=parseFloat(f),r===!0||isFinite(o)?o||0:f):f}});i.each(["height","width"],function(n,t){i.cssHooks[t]={get:function(n,r,u){if(r)return ge.test(i.css(n,"display"))&&(!n.getClientRects().length||!n.getBoundingClientRect().width)?iu(n,no,function(){return nf(n,t,u)}):nf(n,t,u)},set:function(n,r,u){var s,f=ui(n),h=i.css(n,"boxSizing",!1,f)==="border-box",o=u&&wi(n,t,u,h,f);return h&&e.scrollboxSize()===f.position&&(o-=Math.ceil(n["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(f[t])-wi(n,t,"border",!1,f)-.5)),o&&(s=vt.exec(r))&&(s[3]||"px")!=="px"&&(n.style[t]=r,r=i.css(n,t)),gu(n,r,o)}}});i.cssHooks.marginLeft=yu(e.reliableMarginLeft,function(n,t){if(t)return(parseFloat(yt(n,"marginLeft"))||n.getBoundingClientRect().left-iu(n,{marginLeft:0},function(){return n.getBoundingClientRect().left}))+"px"});i.each({margin:"",padding:"",border:"Width"},function(n,t){i.cssHooks[n+t]={expand:function(i){for(var r=0,f={},u=typeof i=="string"?i.split(" "):[i];r<4;r++)f[n+w[r]+t]=u[r]||u[r-2]||u[0];return f}};n!=="margin"&&(i.cssHooks[n+t].set=gu)});i.fn.extend({css:function(n,t){return p(this,function(n,t,r){var f,e,o={},u=0;if(Array.isArray(t)){for(f=ui(n),e=t.length;u<e;u++)o[t[u]]=i.css(n,t[u],!1,f);return o}return r!==undefined?i.style(n,t,r):i.css(n,t)},n,t,arguments.length>1)}});i.Tween=h;h.prototype={constructor:h,init:function(n,t,r,u,f,e){this.elem=n;this.prop=r;this.easing=f||i.easing._default;this.options=t;this.start=this.now=this.cur();this.end=u;this.unit=e||(i.cssNumber[r]?"":"px")},cur:function(){var n=h.propHooks[this.prop];return n&&n.get?n.get(this):h.propHooks._default.get(this)},run:function(n){var t,r=h.propHooks[this.prop];return this.pos=this.options.duration?t=i.easing[this.easing](n,this.options.duration*n,0,1,this.options.duration):t=n,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),r&&r.set?r.set(this):h.propHooks._default.set(this),this}};h.prototype.init.prototype=h.prototype;h.propHooks={_default:{get:function(n){var t;return n.elem.nodeType!==1||n.elem[n.prop]!=null&&n.elem.style[n.prop]==null?n.elem[n.prop]:(t=i.css(n.elem,n.prop,""),!t||t==="auto"?0:t)},set:function(n){i.fx.step[n.prop]?i.fx.step[n.prop](n):n.elem.nodeType===1&&(n.elem.style[i.cssProps[n.prop]]!=null||i.cssHooks[n.prop])?i.style(n.elem,n.prop,n.now+n.unit):n.elem[n.prop]=n.now}}};h.propHooks.scrollTop=h.propHooks.scrollLeft={set:function(n){n.elem.nodeType&&n.elem.parentNode&&(n.elem[n.prop]=n.now)}};i.easing={linear:function(n){return n},swing:function(n){return.5-Math.cos(n*Math.PI)/2},_default:"swing"};i.fx=h.prototype.init;i.fx.step={};tf=/^(?:toggle|show|hide)$/;rf=/queueHooks$/;i.Animation=i.extend(a,{tweeners:{"*":[function(n,t){var i=this.createTween(n,t);return ru(i.elem,n,vt.exec(t),i),i}]},tweener:function(n,t){u(n)?(t=n,n=["*"]):n=n.match(l);for(var i,r=0,f=n.length;r<f;r++)i=n[r],a.tweeners[i]=a.tweeners[i]||[],a.tweeners[i].unshift(t)},prefilters:[io],prefilter:function(n,t){t?a.prefilters.unshift(n):a.prefilters.push(n)}});i.speed=function(n,t,r){var f=n&&typeof n=="object"?i.extend({},n):{complete:r||!r&&t||u(n)&&n,duration:n,easing:r&&t||t&&!u(t)&&t};return i.fx.off?f.duration=0:typeof f.duration!="number"&&(f.duration=f.duration in i.fx.speeds?i.fx.speeds[f.duration]:i.fx.speeds._default),(f.queue==null||f.queue===!0)&&(f.queue="fx"),f.old=f.complete,f.complete=function(){u(f.old)&&f.old.call(this);f.queue&&i.dequeue(this,f.queue)},f};i.fn.extend({fadeTo:function(n,t,i,r){return this.filter(ti).css("opacity",0).show().end().animate({opacity:t},n,i,r)},animate:function(n,t,u,f){var s=i.isEmptyObject(n),o=i.speed(t,u,f),e=function(){var t=a(this,i.extend({},n),o);(s||r.get(this,"finish"))&&t.stop(!0)};return e.finish=e,s||o.queue===!1?this.each(e):this.queue(o.queue,e)},stop:function(n,t,u){var f=function(n){var t=n.stop;delete n.stop;t(u)};return typeof n!="string"&&(u=t,t=n,n=undefined),t&&n!==!1&&this.queue(n||"fx",[]),this.each(function(){var s=!0,t=n!=null&&n+"queueHooks",o=i.timers,e=r.get(this);if(t)e[t]&&e[t].stop&&f(e[t]);else for(t in e)e[t]&&e[t].stop&&rf.test(t)&&f(e[t]);for(t=o.length;t--;)o[t].elem===this&&(n==null||o[t].queue===n)&&(o[t].anim.stop(u),s=!1,o.splice(t,1));(s||!u)&&i.dequeue(this,n)})},finish:function(n){return n!==!1&&(n=n||"fx"),this.each(function(){var t,e=r.get(this),u=e[n+"queue"],o=e[n+"queueHooks"],f=i.timers,s=u?u.length:0;for(e.finish=!0,i.queue(this,n,[]),o&&o.stop&&o.stop.call(this,!0),t=f.length;t--;)f[t].elem===this&&f[t].queue===n&&(f[t].anim.stop(!0),f.splice(t,1));for(t=0;t<s;t++)u[t]&&u[t].finish&&u[t].finish.call(this);delete e.finish})}});i.each(["toggle","show","hide"],function(n,t){var r=i.fn[t];i.fn[t]=function(n,i,u){return n==null||typeof n=="boolean"?r.apply(this,arguments):this.animate(ei(t,!0),n,i,u)}});i.each({slideDown:ei("show"),slideUp:ei("hide"),slideToggle:ei("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(n,t){i.fn[n]=function(n,i,r){return this.animate(t,n,i,r)}});i.timers=[];i.fx.tick=function(){var r,n=0,t=i.timers;for(st=Date.now();n<t.length;n++)r=t[n],r()||t[n]!==r||t.splice(n--,1);t.length||i.fx.stop();st=undefined};i.fx.timer=function(n){i.timers.push(n);i.fx.start()};i.fx.interval=13;i.fx.start=function(){fi||(fi=!0,bi())};i.fx.stop=function(){fi=null};i.fx.speeds={slow:600,fast:200,_default:400};i.fn.delay=function(t,r){return t=i.fx?i.fx.speeds[t]||t:t,r=r||"fx",this.queue(r,function(i,r){var u=n.setTimeout(i,t);r.stop=function(){n.clearTimeout(u)}})},function(){var n=f.createElement("input"),t=f.createElement("select"),i=t.appendChild(f.createElement("option"));n.type="checkbox";e.checkOn=n.value!=="";e.optSelected=i.selected;n=f.createElement("input");n.value="t";n.type="radio";e.radioValue=n.value==="t"}();ht=i.expr.attrHandle;i.fn.extend({attr:function(n,t){return p(this,i.attr,n,t,arguments.length>1)},removeAttr:function(n){return this.each(function(){i.removeAttr(this,n)})}});i.extend({attr:function(n,t,r){var u,f,e=n.nodeType;if(e!==3&&e!==8&&e!==2){if(typeof n.getAttribute=="undefined")return i.prop(n,t,r);if(e===1&&i.isXMLDoc(n)||(f=i.attrHooks[t.toLowerCase()]||(i.expr.match.bool.test(t)?ef:undefined)),r!==undefined){if(r===null){i.removeAttr(n,t);return}return f&&"set"in f&&(u=f.set(n,r,t))!==undefined?u:(n.setAttribute(t,r+""),r)}return f&&"get"in f&&(u=f.get(n,t))!==null?u:(u=i.find.attr(n,t),u==null?undefined:u)}},attrHooks:{type:{set:function(n,t){if(!e.radioValue&&t==="radio"&&v(n,"input")){var i=n.value;return n.setAttribute("type",t),i&&(n.value=i),t}}}},removeAttr:function(n,t){var i,u=0,r=t&&t.match(l);if(r&&n.nodeType===1)while(i=r[u++])n.removeAttribute(i)}});ef={set:function(n,t,r){return t===!1?i.removeAttr(n,r):n.setAttribute(r,r),r}};i.each(i.expr.match.bool.source.match(/\w+/g),function(n,t){var r=ht[t]||i.find.attr;ht[t]=function(n,t,i){var f,e,u=t.toLowerCase();return i||(e=ht[u],ht[u]=f,f=r(n,t,i)!=null?u:null,ht[u]=e),f}});of=/^(?:input|select|textarea|button)$/i;sf=/^(?:a|area)$/i;i.fn.extend({prop:function(n,t){return p(this,i.prop,n,t,arguments.length>1)},removeProp:function(n){return this.each(function(){delete this[i.propFix[n]||n]})}});i.extend({prop:function(n,t,r){var f,u,e=n.nodeType;if(e!==3&&e!==8&&e!==2)return(e===1&&i.isXMLDoc(n)||(t=i.propFix[t]||t,u=i.propHooks[t]),r!==undefined)?u&&"set"in u&&(f=u.set(n,r,t))!==undefined?f:n[t]=r:u&&"get"in u&&(f=u.get(n,t))!==null?f:n[t]},propHooks:{tabIndex:{get:function(n){var t=i.find.attr(n,"tabindex");return t?parseInt(t,10):of.test(n.nodeName)||sf.test(n.nodeName)&&n.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}});e.optSelected||(i.propHooks.selected={get:function(n){var t=n.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(n){var t=n.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}});i.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){i.propFix[this.toLowerCase()]=this});i.fn.extend({addClass:function(n){var f,r,t,e,o,h,s,c=0;if(u(n))return this.each(function(t){i(this).addClass(n.call(this,t,nt(this)))});if(f=ki(n),f.length)while(r=this[c++])if(e=nt(r),t=r.nodeType===1&&" "+g(e)+" ",t){for(h=0;o=f[h++];)t.indexOf(" "+o+" ")<0&&(t+=o+" ");s=g(t);e!==s&&r.setAttribute("class",s)}return this},removeClass:function(n){var f,r,t,e,o,h,s,c=0;if(u(n))return this.each(function(t){i(this).removeClass(n.call(this,t,nt(this)))});if(!arguments.length)return this.attr("class","");if(f=ki(n),f.length)while(r=this[c++])if(e=nt(r),t=r.nodeType===1&&" "+g(e)+" ",t){for(h=0;o=f[h++];)while(t.indexOf(" "+o+" ")>-1)t=t.replace(" "+o+" "," ");s=g(t);e!==s&&r.setAttribute("class",s)}return this},toggleClass:function(n,t){var f=typeof n,e=f==="string"||Array.isArray(n);return typeof t=="boolean"&&e?t?this.addClass(n):this.removeClass(n):u(n)?this.each(function(r){i(this).toggleClass(n.call(this,r,nt(this),t),t)}):this.each(function(){var t,o,u,s;if(e)for(o=0,u=i(this),s=ki(n);t=s[o++];)u.hasClass(t)?u.removeClass(t):u.addClass(t);else(n===undefined||f==="boolean")&&(t=nt(this),t&&r.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||n===!1?"":r.get(this,"__className__")||""))})},hasClass:function(n){for(var t,r=0,i=" "+n+" ";t=this[r++];)if(t.nodeType===1&&(" "+g(nt(t))+" ").indexOf(i)>-1)return!0;return!1}});hf=/\r/g;i.fn.extend({val:function(n){var t,r,e,f=this[0];return arguments.length?(e=u(n),this.each(function(r){var u;this.nodeType===1&&(u=e?n.call(this,r,i(this).val()):n,u==null?u="":typeof u=="number"?u+="":Array.isArray(u)&&(u=i.map(u,function(n){return n==null?"":n+""})),t=i.valHooks[this.type]||i.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,u,"value")!==undefined||(this.value=u))})):f?(t=i.valHooks[f.type]||i.valHooks[f.nodeName.toLowerCase()],t&&"get"in t&&(r=t.get(f,"value"))!==undefined)?r:(r=f.value,typeof r=="string")?r.replace(hf,""):r==null?"":r:void 0}});i.extend({valHooks:{option:{get:function(n){var t=i.find.attr(n,"value");return t!=null?t:g(i.text(n))}},select:{get:function(n){for(var e,t,o=n.options,u=n.selectedIndex,f=n.type==="select-one",s=f?null:[],h=f?u+1:o.length,r=u<0?h:f?u:0;r<h;r++)if(t=o[r],(t.selected||r===u)&&!t.disabled&&(!t.parentNode.disabled||!v(t.parentNode,"optgroup"))){if(e=i(t).val(),f)return e;s.push(e)}return s},set:function(n,t){for(var u,r,f=n.options,e=i.makeArray(t),o=f.length;o--;)r=f[o],(r.selected=i.inArray(i.valHooks.option.get(r),e)>-1)&&(u=!0);return u||(n.selectedIndex=-1),e}}}});i.each(["radio","checkbox"],function(){i.valHooks[this]={set:function(n,t){if(Array.isArray(t))return n.checked=i.inArray(i(n).val(),t)>-1}};e.checkOn||(i.valHooks[this].get=function(n){return n.getAttribute("value")===null?"on":n.value})});e.focusin="onfocusin"in n;di=/^(?:focusinfocus|focusoutblur)$/;gi=function(n){n.stopPropagation()};i.extend(i.event,{trigger:function(t,e,o,s){var k,c,l,d,v,y,a,w,b=[o||f],h=kt.call(t,"type")?t.type:t,p=kt.call(t,"namespace")?t.namespace.split("."):[];if((c=w=l=o=o||f,o.nodeType!==3&&o.nodeType!==8)&&!di.test(h+i.event.triggered)&&(h.indexOf(".")>-1&&(p=h.split("."),h=p.shift(),p.sort()),v=h.indexOf(":")<0&&"on"+h,t=t[i.expando]?t:new i.Event(h,typeof t=="object"&&t),t.isTrigger=s?2:3,t.namespace=p.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=o),e=e==null?[t]:i.makeArray(e,[t]),a=i.event.special[h]||{},s||!a.trigger||a.trigger.apply(o,e)!==!1)){if(!s&&!a.noBubble&&!tt(o)){for(d=a.delegateType||h,di.test(d+h)||(c=c.parentNode);c;c=c.parentNode)b.push(c),l=c;l===(o.ownerDocument||f)&&b.push(l.defaultView||l.parentWindow||n)}for(k=0;(c=b[k++])&&!t.isPropagationStopped();)w=c,t.type=k>1?d:a.bindType||h,y=(r.get(c,"events")||{})[t.type]&&r.get(c,"handle"),y&&y.apply(c,e),y=v&&c[v],y&&y.apply&&lt(c)&&(t.result=y.apply(c,e),t.result===!1&&t.preventDefault());return t.type=h,s||t.isDefaultPrevented()||(!a._default||a._default.apply(b.pop(),e)===!1)&&lt(o)&&v&&u(o[h])&&!tt(o)&&(l=o[v],l&&(o[v]=null),i.event.triggered=h,t.isPropagationStopped()&&w.addEventListener(h,gi),o[h](),t.isPropagationStopped()&&w.removeEventListener(h,gi),i.event.triggered=undefined,l&&(o[v]=l)),t.result}},simulate:function(n,t,r){var u=i.extend(new i.Event,r,{type:n,isSimulated:!0});i.event.trigger(u,null,t)}});i.fn.extend({trigger:function(n,t){return this.each(function(){i.event.trigger(n,t,this)})},triggerHandler:function(n,t){var r=this[0];if(r)return i.event.trigger(n,t,r,!0)}});e.focusin||i.each({focus:"focusin",blur:"focusout"},function(n,t){var u=function(n){i.event.simulate(t,n.target,i.event.fix(n))};i.event.special[t]={setup:function(){var i=this.ownerDocument||this,f=r.access(i,t);f||i.addEventListener(n,u,!0);r.access(i,t,(f||0)+1)},teardown:function(){var i=this.ownerDocument||this,f=r.access(i,t)-1;f?r.access(i,t,f):(i.removeEventListener(n,u,!0),r.remove(i,t))}}});var pt=n.location,cf=Date.now(),nr=/\?/;i.parseXML=function(t){var r;if(!t||typeof t!="string")return null;try{r=(new n.DOMParser).parseFromString(t,"text/xml")}catch(u){r=undefined}return(!r||r.getElementsByTagName("parsererror").length)&&i.error("Invalid XML: "+t),r};var uo=/\[\]$/,lf=/\r?\n/g,fo=/^(?:submit|button|image|reset|file)$/i,eo=/^(?:input|select|textarea|keygen)/i;i.param=function(n,t){var r,f=[],e=function(n,t){var i=u(t)?t():t;f[f.length]=encodeURIComponent(n)+"="+encodeURIComponent(i==null?"":i)};if(Array.isArray(n)||n.jquery&&!i.isPlainObject(n))i.each(n,function(){e(this.name,this.value)});else for(r in n)tr(r,n[r],t,e);return f.join("&")};i.fn.extend({serialize:function(){return i.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var n=i.prop(this,"elements");return n?i.makeArray(n):this}).filter(function(){var n=this.type;return this.name&&!i(this).is(":disabled")&&eo.test(this.nodeName)&&!fo.test(n)&&(this.checked||!uu.test(n))}).map(function(n,t){var r=i(this).val();return r==null?null:Array.isArray(r)?i.map(r,function(n){return{name:t.name,value:n.replace(lf,"\r\n")}}):{name:t.name,value:r.replace(lf,"\r\n")}}).get()}});var oo=/%20/g,so=/#.*$/,ho=/([?&])_=[^&]*/,co=/^(.*?):[ \t]*([^\r\n]*)$/mg,lo=/^(?:GET|HEAD)$/,ao=/^\/\//,af={},ir={},vf="*/".concat("*"),rr=f.createElement("a");return rr.href=pt.href,i.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:pt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":vf,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":i.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(n,t){return t?ur(ur(n,i.ajaxSettings),t):ur(i.ajaxSettings,n)},ajaxPrefilter:yf(af),ajaxTransport:yf(ir),ajax:function(t,r){function b(t,r,f,l){var y,rt,g,p,b,a=r;s||(s=!0,d&&n.clearTimeout(d),c=undefined,k=l||"",e.readyState=t>0?4:0,y=t>=200&&t<300||t===304,f&&(p=vo(u,e,f)),p=yo(u,p,e,y),y?(u.ifModified&&(b=e.getResponseHeader("Last-Modified"),b&&(i.lastModified[o]=b),b=e.getResponseHeader("etag"),b&&(i.etag[o]=b)),t===204||u.type==="HEAD"?a="nocontent":t===304?a="notmodified":(a=p.state,rt=p.data,g=p.error,y=!g)):(g=a,(t||!a)&&(a="error",t<0&&(t=0))),e.status=t,e.statusText=(r||a)+"",y?tt.resolveWith(h,[rt,a,e]):tt.rejectWith(h,[e,a,g]),e.statusCode(w),w=undefined,v&&nt.trigger(y?"ajaxSuccess":"ajaxError",[e,u,y?rt:g]),it.fireWith(h,[e,a]),v&&(nt.trigger("ajaxComplete",[e,u]),--i.active||i.event.trigger("ajaxStop")))}typeof t=="object"&&(r=t,t=undefined);r=r||{};var c,o,k,y,d,a,s,v,g,p,u=i.ajaxSetup({},r),h=u.context||u,nt=u.context&&(h.nodeType||h.jquery)?i(h):i.event,tt=i.Deferred(),it=i.Callbacks("once memory"),w=u.statusCode||{},rt={},ut={},ft="canceled",e={readyState:0,getResponseHeader:function(n){var t;if(s){if(!y)for(y={};t=co.exec(k);)y[t[1].toLowerCase()]=t[2];t=y[n.toLowerCase()]}return t==null?null:t},getAllResponseHeaders:function(){return s?k:null},setRequestHeader:function(n,t){return s==null&&(n=ut[n.toLowerCase()]=ut[n.toLowerCase()]||n,rt[n]=t),this},overrideMimeType:function(n){return s==null&&(u.mimeType=n),this},statusCode:function(n){var t;if(n)if(s)e.always(n[e.status]);else for(t in n)w[t]=[w[t],n[t]];return this},abort:function(n){var t=n||ft;return c&&c.abort(t),b(0,t),this}};if(tt.promise(e),u.url=((t||u.url||pt.href)+"").replace(ao,pt.protocol+"//"),u.type=r.method||r.type||u.method||u.type,u.dataTypes=(u.dataType||"*").toLowerCase().match(l)||[""],u.crossDomain==null){a=f.createElement("a");try{a.href=u.url;a.href=a.href;u.crossDomain=rr.protocol+"//"+rr.host!=a.protocol+"//"+a.host}catch(et){u.crossDomain=!0}}if(u.data&&u.processData&&typeof u.data!="string"&&(u.data=i.param(u.data,u.traditional)),pf(af,u,r,e),s)return e;v=i.event&&u.global;v&&i.active++==0&&i.event.trigger("ajaxStart");u.type=u.type.toUpperCase();u.hasContent=!lo.test(u.type);o=u.url.replace(so,"");u.hasContent?u.data&&u.processData&&(u.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(u.data=u.data.replace(oo,"+")):(p=u.url.slice(o.length),u.data&&(u.processData||typeof u.data=="string")&&(o+=(nr.test(o)?"&":"?")+u.data,delete u.data),u.cache===!1&&(o=o.replace(ho,"$1"),p=(nr.test(o)?"&":"?")+"_="+cf+++p),u.url=o+p);u.ifModified&&(i.lastModified[o]&&e.setRequestHeader("If-Modified-Since",i.lastModified[o]),i.etag[o]&&e.setRequestHeader("If-None-Match",i.etag[o]));(u.data&&u.hasContent&&u.contentType!==!1||r.contentType)&&e.setRequestHeader("Content-Type",u.contentType);e.setRequestHeader("Accept",u.dataTypes[0]&&u.accepts[u.dataTypes[0]]?u.accepts[u.dataTypes[0]]+(u.dataTypes[0]!=="*"?", "+vf+"; q=0.01":""):u.accepts["*"]);for(g in u.headers)e.setRequestHeader(g,u.headers[g]);if(u.beforeSend&&(u.beforeSend.call(h,e,u)===!1||s))return e.abort();if(ft="abort",it.add(u.complete),e.done(u.success),e.fail(u.error),c=pf(ir,u,r,e),c){if(e.readyState=1,v&&nt.trigger("ajaxSend",[e,u]),s)return e;u.async&&u.timeout>0&&(d=n.setTimeout(function(){e.abort("timeout")},u.timeout));try{s=!1;c.send(rt,b)}catch(et){if(s)throw et;b(-1,et)}}else b(-1,"No Transport");return e},getJSON:function(n,t,r){return i.get(n,t,r,"json")},getScript:function(n,t){return i.get(n,undefined,t,"script")}}),i.each(["get","post"],function(n,t){i[t]=function(n,r,f,e){return u(r)&&(e=e||f,f=r,r=undefined),i.ajax(i.extend({url:n,type:t,dataType:e,data:r,success:f},i.isPlainObject(n)&&n))}}),i._evalUrl=function(n){return i.ajax({url:n,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},i.fn.extend({wrapAll:function(n){var t;return this[0]&&(u(n)&&(n=n.call(this[0])),t=i(n,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var n=this;n.firstElementChild;)n=n.firstElementChild;return n}).append(this)),this},wrapInner:function(n){return u(n)?this.each(function(t){i(this).wrapInner(n.call(this,t))}):this.each(function(){var t=i(this),r=t.contents();r.length?r.wrapAll(n):t.append(n)})},wrap:function(n){var t=u(n);return this.each(function(r){i(this).wrapAll(t?n.call(this,r):n)})},unwrap:function(n){return this.parent(n).not("body").each(function(){i(this).replaceWith(this.childNodes)}),this}}),i.expr.pseudos.hidden=function(n){return!i.expr.pseudos.visible(n)},i.expr.pseudos.visible=function(n){return!!(n.offsetWidth||n.offsetHeight||n.getClientRects().length)},i.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(t){}},wf={0:200,1223:204},ct=i.ajaxSettings.xhr(),e.cors=!!ct&&"withCredentials"in ct,e.ajax=ct=!!ct,i.ajaxTransport(function(t){var i,r;if(e.cors||ct&&!t.crossDomain)return{send:function(u,f){var o,e=t.xhr();if(e.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)e[o]=t.xhrFields[o];t.mimeType&&e.overrideMimeType&&e.overrideMimeType(t.mimeType);t.crossDomain||u["X-Requested-With"]||(u["X-Requested-With"]="XMLHttpRequest");for(o in u)e.setRequestHeader(o,u[o]);i=function(n){return function(){i&&(i=r=e.onload=e.onerror=e.onabort=e.ontimeout=e.onreadystatechange=null,n==="abort"?e.abort():n==="error"?typeof e.status!="number"?f(0,"error"):f(e.status,e.statusText):f(wf[e.status]||e.status,e.statusText,(e.responseType||"text")!=="text"||typeof e.responseText!="string"?{binary:e.response}:{text:e.responseText},e.getAllResponseHeaders()))}};e.onload=i();r=e.onerror=e.ontimeout=i("error");e.onabort!==undefined?e.onabort=r:e.onreadystatechange=function(){e.readyState===4&&n.setTimeout(function(){i&&r()})};i=i("abort");try{e.send(t.hasContent&&t.data||null)}catch(s){if(i)throw s;}},abort:function(){i&&i()}}}),i.ajaxPrefilter(function(n){n.crossDomain&&(n.contents.script=!1)}),i.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(n){return i.globalEval(n),n}}}),i.ajaxPrefilter("script",function(n){n.cache===undefined&&(n.cache=!1);n.crossDomain&&(n.type="GET")}),i.ajaxTransport("script",function(n){if(n.crossDomain){var r,t;return{send:function(u,e){r=i("<script>").prop({charset:n.scriptCharset,src:n.url}).on("load error",t=function(n){r.remove();t=null;n&&e(n.type==="error"?404:200,n.type)});f.head.appendChild(r[0])},abort:function(){t&&t()}}}}),fr=[],oi=/(=)\?(?=&|$)|\?\?/,i.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var n=fr.pop()||i.expando+"_"+cf++;return this[n]=!0,n}}),i.ajaxPrefilter("json jsonp",function(t,r,f){var e,o,s,h=t.jsonp!==!1&&(oi.test(t.url)?"url":typeof t.data=="string"&&(t.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&oi.test(t.data)&&"data");if(h||t.dataTypes[0]==="jsonp")return e=t.jsonpCallback=u(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,h?t[h]=t[h].replace(oi,"$1"+e):t.jsonp!==!1&&(t.url+=(nr.test(t.url)?"&":"?")+t.jsonp+"="+e),t.converters["script json"]=function(){return s||i.error(e+" was not called"),s[0]},t.dataTypes[0]="json",o=n[e],n[e]=function(){s=arguments},f.always(function(){o===undefined?i(n).removeProp(e):n[e]=o;t[e]&&(t.jsonpCallback=r.jsonpCallback,fr.push(e));s&&u(o)&&o(s[0]);s=o=undefined}),"script"}),e.createHTMLDocument=function(){var n=f.implementation.createHTMLDocument("").body;return n.innerHTML="<form><\/form><form><\/form>",n.childNodes.length===2}(),i.parseHTML=function(n,t,r){if(typeof n!="string")return[];typeof t=="boolean"&&(r=t,t=!1);var s,u,o;return(t||(e.createHTMLDocument?(t=f.implementation.createHTMLDocument(""),s=t.createElement("base"),s.href=f.location.href,t.head.appendChild(s)):t=f),u=ci.exec(n),o=!r&&[],u)?[t.createElement(u[1])]:(u=su([n],t,o),o&&o.length&&i(o).remove(),i.merge([],u.childNodes))},i.fn.load=function(n,t,r){var f,s,h,e=this,o=n.indexOf(" ");return o>-1&&(f=g(n.slice(o)),n=n.slice(0,o)),u(t)?(r=t,t=undefined):t&&typeof t=="object"&&(s="POST"),e.length>0&&i.ajax({url:n,type:s||"GET",dataType:"html",data:t}).done(function(n){h=arguments;e.html(f?i("<div>").append(i.parseHTML(n)).find(f):n)}).always(r&&function(n,t){e.each(function(){r.apply(this,h||[n.responseText,t,n])})}),this},i.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(n,t){i.fn[t]=function(n){return this.on(t,n)}}),i.expr.pseudos.animated=function(n){return i.grep(i.timers,function(t){return n===t.elem}).length},i.offset={setOffset:function(n,t,r){var o,s,h,c,f,l,y,a=i.css(n,"position"),v=i(n),e={};a==="static"&&(n.style.position="relative");f=v.offset();h=i.css(n,"top");l=i.css(n,"left");y=(a==="absolute"||a==="fixed")&&(h+l).indexOf("auto")>-1;y?(o=v.position(),c=o.top,s=o.left):(c=parseFloat(h)||0,s=parseFloat(l)||0);u(t)&&(t=t.call(n,r,i.extend({},f)));t.top!=null&&(e.top=t.top-f.top+c);t.left!=null&&(e.left=t.left-f.left+s);"using"in t?t.using.call(n,e):v.css(e)}},i.fn.extend({offset:function(n){if(arguments.length)return n===undefined?this:this.each(function(t){i.offset.setOffset(this,n,t)});var r,u,t=this[0];if(t)return t.getClientRects().length?(r=t.getBoundingClientRect(),u=t.ownerDocument.defaultView,{top:r.top+u.pageYOffset,left:r.left+u.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var n,u,f,t=this[0],r={top:0,left:0};if(i.css(t,"position")==="fixed")u=t.getBoundingClientRect();else{for(u=this.offset(),f=t.ownerDocument,n=t.offsetParent||f.documentElement;n&&(n===f.body||n===f.documentElement)&&i.css(n,"position")==="static";)n=n.parentNode;n&&n!==t&&n.nodeType===1&&(r=i(n).offset(),r.top+=i.css(n,"borderTopWidth",!0),r.left+=i.css(n,"borderLeftWidth",!0))}return{top:u.top-r.top-i.css(t,"marginTop",!0),left:u.left-r.left-i.css(t,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var n=this.offsetParent;n&&i.css(n,"position")==="static";)n=n.offsetParent;return n||ii})}}),i.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(n,t){var r="pageYOffset"===t;i.fn[n]=function(i){return p(this,function(n,i,u){var f;if(tt(n)?f=n:n.nodeType===9&&(f=n.defaultView),u===undefined)return f?f[t]:n[i];f?f.scrollTo(r?f.pageXOffset:u,r?u:f.pageYOffset):n[i]=u},n,i,arguments.length)}}),i.each(["top","left"],function(n,t){i.cssHooks[t]=yu(e.pixelPosition,function(n,r){if(r)return r=yt(n,t),pi.test(r)?i(n).position()[t]+"px":r})}),i.each({Height:"height",Width:"width"},function(n,t){i.each({padding:"inner"+n,content:t,"":"outer"+n},function(r,u){i.fn[u]=function(f,e){var o=arguments.length&&(r||typeof f!="boolean"),s=r||(f===!0||e===!0?"margin":"border");return p(this,function(t,r,f){var e;return tt(t)?u.indexOf("outer")===0?t["inner"+n]:t.document.documentElement["client"+n]:t.nodeType===9?(e=t.documentElement,Math.max(t.body["scroll"+n],e["scroll"+n],t.body["offset"+n],e["offset"+n],e["client"+n])):f===undefined?i.css(t,r,s):i.style(t,r,f,s)},t,o?f:undefined,o)}})}),i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(n,t){i.fn[t]=function(n,i){return arguments.length>0?this.on(t,null,n,i):this.trigger(t)}}),i.fn.extend({hover:function(n,t){return this.mouseenter(n).mouseleave(t||n)}}),i.fn.extend({bind:function(n,t,i){return this.on(n,null,t,i)},unbind:function(n,t){return this.off(n,null,t)},delegate:function(n,t,i,r){return this.on(t,n,i,r)},undelegate:function(n,t,i){return arguments.length===1?this.off(n,"**"):this.off(t,n||"**",i)}}),i.proxy=function(n,t){var f,e,r;return(typeof t=="string"&&(f=n[t],t=n,n=f),!u(n))?undefined:(e=d.call(arguments,2),r=function(){return n.apply(t||this,e.concat(d.call(arguments)))},r.guid=n.guid=n.guid||i.guid++,r)},i.holdReady=function(n){n?i.readyWait++:i.ready(!0)},i.isArray=Array.isArray,i.parseJSON=JSON.parse,i.nodeName=v,i.isFunction=u,i.isWindow=tt,i.camelCase=y,i.type=it,i.now=Date.now,i.isNumeric=function(n){var t=i.type(n);return(t==="number"||t==="string")&&!isNaN(n-parseFloat(n))},typeof define=="function"&&define.amd&&define("jquery",[],function(){return i}),bf=n.jQuery,kf=n.$,i.noConflict=function(t){return n.$===i&&(n.$=kf),t&&n.jQuery===i&&(n.jQuery=bf),i},t||(n.jQuery=n.$=i),i});
/*!
 * jQuery Validation Plugin v1.14.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2015 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery"], factory );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

$.extend($.fn, {
	// http://jqueryvalidation.org/validate/
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			}
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.on( "click.validate", ":submit", function( event ) {
				if ( validator.settings.submitHandler ) {
					validator.submitButton = event.target;
				}

				// allow suppressing validation by adding a cancel class to the submit button
				if ( $( this ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				}

				// allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( this ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				}
			});

			// validate the form on submit
			this.on( "submit.validate", function( event ) {
				if ( validator.settings.debug ) {
					// prevent form submit to be able to see console output
					event.preventDefault();
				}
				function handle() {
					var hidden, result;
					if ( validator.settings.submitHandler ) {
						if ( validator.submitButton ) {
							// insert a hidden input as a replacement for the missing submit button
							hidden = $( "<input type='hidden'/>" )
								.attr( "name", validator.submitButton.name )
								.val( $( validator.submitButton ).val() )
								.appendTo( validator.currentForm );
						}
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( validator.submitButton ) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						if ( result !== undefined ) {
							return result;
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}

		return validator;
	},
	// http://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator, errorList;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		} else {
			errorList = [];
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
				errorList = errorList.concat( validator.errorList );
			});
			validator.errorList = errorList;
		}
		return valid;
	},

	// http://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			settings, staticRules, existingRules, data, param, filtered;

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );
				// remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				}
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				}
				filtered = {};
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
					if ( method === "required" ) {
						$( element ).removeAttr( "aria-required" );
					}
				});
				return filtered;
			}
		}

		data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param }, data );
			$( element ).attr( "aria-required", "true" );
		}

		// make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param });
		}

		return data;
	}
});

// Custom selectors
$.extend( $.expr[ ":" ], {
	// http://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !$.trim( "" + $( a ).val() );
	},
	// http://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		return !!$.trim( "" + $( a ).val() );
	},
	// http://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	}
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

// http://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		};
	}
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	}
	if ( params.constructor !== Array ) {
		params = [ params ];
	}
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\}", "g" ), function() {
			return n;
		});
	});
	return source;
};

$.extend( $.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				}
				this.hideThese( this.errorsFor( element ) );
			}
		},
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			}
		},
		onkeyup: function( element, event ) {
			// Avoid revalidate the field when pressing one of the following keys
			// Shift       => 16
			// Ctrl        => 17
			// Alt         => 18
			// Caps lock   => 20
			// End         => 35
			// Home        => 36
			// Left arrow  => 37
			// Up arrow    => 38
			// Right arrow => 39
			// Down arrow  => 40
			// Insert      => 45
			// Num lock    => 144
			// AltGr key   => 225
			var excludedKeys = [
				16, 17, 18, 20, 35, 36, 37,
				38, 39, 40, 45, 144, 225
			];

			if ( event.which === 9 && this.elementValue( element ) === "" || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
				return;
			} else if ( element.name in this.submitted || element === this.lastElement ) {
				this.element( element );
			}
		},
		onclick: function( element ) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// or option elements, check parent select in that case
			} else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			}
		},
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			} else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			}
		},
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			} else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			}
		}
	},

	// http://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date ( ISO ).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0} characters." ),
		minlength: $.validator.format( "Please enter at least {0} characters." ),
		rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
		range: $.validator.format( "Please enter a value between {0} and {1}." ),
		max: $.validator.format( "Please enter a value less than or equal to {0}." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0}." )
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = ( this.groups = {} ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				}
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				});
			});
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			});

			function delegate( event ) {
				var validator = $.data( this.form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !$( this ).is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this, event );
				}
			}

			$( this.currentForm )
				.on( "focusin.validate focusout.validate keyup.validate",
					":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " +
					"[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " +
					"[type='radio'], [type='checkbox']", delegate)
				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).on( "invalid-form.validate", this.settings.invalidHandler );
			}

			// Add aria-required to any Static/Data/Class required fields before first validation
			// Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
			$( this.currentForm ).find( "[required], [data-rule-required], .required" ).attr( "aria-required", "true" );
		},

		// http://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend({}, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
			}
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			}
			return this.valid();
		},

		// http://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				result = true;

			this.lastElement = checkElement;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			} else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				result = this.check( checkElement ) !== false;
				if ( result ) {
					delete this.invalid[ checkElement.name ];
				} else {
					this.invalid[ checkElement.name ] = true;
				}
			}
			// Add aria-invalid status for screen readers
			$( element ).attr( "aria-invalid", !result );

			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[ name ],
						element: this.findByName( name )[ 0 ]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				});
			}
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			} else {
				this.defaultShowErrors();
			}
		},

		// http://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			}
			this.submitted = {};
			this.lastElement = null;
			this.prepareForm();
			this.hideErrors();
			var i, elements = this.elements()
				.removeData( "previousValue" )
				.removeAttr( "aria-invalid" );

			if ( this.settings.unhighlight ) {
				for ( i = 0; elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ],
						this.settings.errorClass, "" );
				}
			} else {
				elements.removeClass( this.settings.errorClass );
			}
		},

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		},

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {
				count++;
			}
			return count;
		},

		hideErrors: function() {
			this.hideThese( this.toHide );
		},

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		},

		valid: function() {
			return this.size() === 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [])
					.filter( ":visible" )
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				} catch ( e ) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			}).length === 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea" )
			.not( ":submit, :reset, :image, :disabled" )
			.not( this.settings.ignore )
			.filter( function() {
				if ( !this.name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				}

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				}

				rulesCache[ this.name ] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $( selector )[ 0 ];
		},

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $( [] );
			this.toHide = $( [] );
			this.currentElements = $( [] );
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		},

		elementValue: function( element ) {
			var val,
				$element = $( element ),
				type = element.type;

			if ( type === "radio" || type === "checkbox" ) {
				return this.findByName( element.name ).filter(":checked").val();
			} else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? false : $element.val();
			}

			val = $element.val();
			if ( typeof val === "string" ) {
				return val.replace(/\r/g, "" );
			}
			return val;
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				}).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule;

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] };
				try {

					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					}

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					}
					if ( e instanceof TypeError ) {
						e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
					}

					throw e;
				}
			}
			if ( dependencyMismatch ) {
				return;
			}
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			}
			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				}
			}
			return undefined;
		},

		defaultMessage: function( element, method ) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customDataMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[ method ],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			} else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1}" ), rule.parameters );
			}
			this.errorList.push({
				message: message,
				element: element,
				method: rule.method
			});

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		},

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			}
			return toToggle;
		},

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				}
				this.showLabel( error.element, error.message );
			}
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				}
			}
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		},

		invalidElements: function() {
			return $( this.errorList ).map(function() {
				return this.element;
			});
		},

		showLabel: function( element, message ) {
			var place, group, errorID,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );
			if ( error.length ) {
				// refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
				// replace message on existing label
				error.html( message );
			} else {
				// create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				}
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				} else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement( place, $( element ) );
				} else {
					place.insertAfter( element );
				}

				// Link error back to the element
				if ( error.is( "label" ) ) {
					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );
				} else if ( error.parents( "label[for='" + elementID + "']" ).length === 0 ) {
					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby

					errorID = error.attr( "id" ).replace( /(:|\.|\[|\]|\$)/g, "\\$1");
					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					} else if ( !describedBy.match( new RegExp( "\\b" + errorID + "\\b" ) ) ) {
						// Add to end of list if not already present
						describedBy += " " + errorID;
					}
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						$.each( this.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + name + "']", this.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							}
						});
					}
				}
			}
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				} else {
					this.settings.success( error, element );
				}
			}
			this.toShow = this.toShow.add( error );
		},

		errorsFor: function( element ) {
			var name = this.idOrName( element ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// aria-describedby should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + describer.replace( /\s+/g, ", #" );
			}
			return this
				.errors()
				.filter( selector );
		},

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		},

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			}

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		},

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		},

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + name + "']" );
		},

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				}
			}
			return value.length;
		},

		depend: function( param, element ) {
			return this.dependTypes[typeof param] ? this.dependTypes[typeof param]( param, element ) : true;
		},

		dependTypes: {
			"boolean": function( param ) {
				return param;
			},
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			},
			"function": function( param, element ) {
				return param( element );
			}
		},

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		},

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				this.pending[ element.name ] = true;
			}
		},

		stopRequest: function( element, valid ) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			}
			delete this.pending[ element.name ];
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
				this.formSubmitted = false;
			}
		},

		previousValue: function( element ) {
			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		},

		// cleans up all forms and elements, removes validator-specific events
		destroy: function() {
			this.resetForm();

			$( this.currentForm )
				.off( ".validate" )
				.removeData( "validator" );
		}

	},

	classRuleSettings: {
		required: { required: true },
		email: { email: true },
		url: { url: true },
		date: { date: true },
		dateISO: { dateISO: true },
		number: { number: true },
		digits: { digits: true },
		creditcard: { creditcard: true }
	},

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		} else {
			$.extend( this.classRuleSettings, className );
		}
	},

	classRules: function( element ) {
		var rules = {},
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ]);
				}
			});
		}
		return rules;
	},

	normalizeAttributeRule: function( rules, type, method, value ) {

		// convert the value to a number for number inputs, and for text for backwards compability
		// allows type="date" and others to be compared as strings
		if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
			value = Number( value );

			// Support Opera Mini, which returns NaN for undefined minlength
			if ( isNaN( value ) ) {
				value = undefined;
			}
		}

		if ( value || value === 0 ) {
			rules[ method ] = value;
		} else if ( type === method && type !== "range" ) {

			// exception: the jquery validate 'range' method
			// does not test for the html5 'range' type
			rules[ method ] = true;
		}
	},

	attributeRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );

				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				}

				// force non-HTML5 browsers to return bool
				value = !!value;
			} else {
				value = $element.attr( method );
			}

			this.normalizeAttributeRule( rules, type, method, value );
		}

		// maxlength may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		}

		return rules;
	},

	dataRules: function( element ) {
		var rules = {},
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
			this.normalizeAttributeRule( rules, type, method, value );
		}
		return rules;
	},

	staticRules: function( element ) {
		var rules = {},
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {};
		}
		return rules;
	},

	normalizeRules: function( rules, element ) {
		// handle dependency check
		$.each( rules, function( prop, val ) {
			// ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			}
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				}
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[ prop ];
				}
			}
		});

		// evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = $.isFunction( parameter ) ? parameter( element ) : parameter;
		});

		// clean number parameters
		$.each([ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			}
		});
		$.each([ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( $.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ]), Number( rules[ this ][ 1 ] ) ];
				} else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace(/[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ]), Number( parts[ 1 ] ) ];
				}
			}
		});

		if ( $.validator.autoCreateRanges ) {
			// auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			}
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {};
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		}
	},

	methods: {

		// http://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {
			// check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			}
			if ( element.nodeName.toLowerCase() === "select" ) {
				// could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			}
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			}
			return value.length > 0;
		},

		// http://jqueryvalidation.org/email-method/
		email: function( value, element ) {
			// From https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test( value );
		},

		// http://jqueryvalidation.org/url-method/
		url: function( value, element ) {

			// Copyright (c) 2010-2013 Diego Perini, MIT licensed
			// https://gist.github.com/dperini/729294
			// see also https://mathiasbynens.be/demo/url-regex
			// modified to allow protocol-relative URLs
			return this.optional( element ) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test( value );
		},

		// http://jqueryvalidation.org/date-method/
		date: function( value, element ) {
			return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
		},

		// http://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		},

		// http://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test( value );
		},

		// http://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		},

		// http://jqueryvalidation.org/creditcard-method/
		// based on http://en.wikipedia.org/wiki/Luhn_algorithm
		creditcard: function( value, element ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}
			// accept only spaces, digits and dashes
			if ( /[^0-9 \-]+/.test( value ) ) {
				return false;
			}
			var nCheck = 0,
				nDigit = 0,
				bEven = false,
				n, cDigit;

			value = value.replace( /\D/g, "" );

			// Basing min and max length on
			// http://developer.ean.com/general_info/Valid_Credit_Card_Types
			if ( value.length < 13 || value.length > 19 ) {
				return false;
			}

			for ( n = value.length - 1; n >= 0; n--) {
				cDigit = value.charAt( n );
				nDigit = parseInt( cDigit, 10 );
				if ( bEven ) {
					if ( ( nDigit *= 2 ) > 9 ) {
						nDigit -= 9;
					}
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return ( nCheck % 10 ) === 0;
		},

		// http://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		},

		// http://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		},

		// http://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		},

		// http://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		},

		// http://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		},

		// http://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $( param );
			if ( this.settings.onfocusout ) {
				target.off( ".validate-equalTo" ).on( "blur.validate-equalTo", function() {
					$( element ).valid();
				});
			}
			return value === target.val();
		},

		// http://jqueryvalidation.org/remote-method/
		remote: function( value, element, param ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			}

			var previous = this.previousValue( element ),
				validator, data;

			if (!this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {};
			}
			previous.originalMessage = this.settings.messages[ element.name ].remote;
			this.settings.messages[ element.name ].remote = previous.message;

			param = typeof param === "string" && { url: param } || param;

			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			validator = this;
			this.startRequest( element );
			data = {};
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ].remote = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.prepareElement( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						delete validator.invalid[ element.name ];
						validator.showErrors();
					} else {
						errors = {};
						message = response || validator.defaultMessage( element, "remote" );
						errors[ element.name ] = previous.message = $.isFunction( message ) ? message( value ) : message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					}
					previous.valid = valid;
					validator.stopRequest( element, valid );
				}
			}, param ) );
			return "pending";
		}
	}

});

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {},
	ajax;
// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter(function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			pendingRequests[port] = xhr;
		}
	});
} else {
	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			}
			pendingRequests[port] = ajax.apply(this, arguments);
			return pendingRequests[port];
		}
		return ajax.apply(this, arguments);
	};
}

}));
/*!
** Unobtrusive validation support library for jQuery and jQuery Validate
** Copyright (C) Microsoft Corporation. All rights reserved.
*/

/*jslint white: true, browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, newcap: true, immed: true, strict: false */
/*global document: false, jQuery: false */

(function ($) {
    var $jQval = $.validator,
        adapters,
        data_validation = "unobtrusiveValidation";

    function setValidationValues(options, ruleName, value) {
        options.rules[ruleName] = value;
        if (options.message) {
            options.messages[ruleName] = options.message;
        }
    }

    function splitAndTrim(value) {
        return value.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g);
    }

    function escapeAttributeValue(value) {
        // As mentioned on http://api.jquery.com/category/selectors/
        return value.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1");
    }

    function getModelPrefix(fieldName) {
        return fieldName.substr(0, fieldName.lastIndexOf(".") + 1);
    }

    function appendModelPrefix(value, prefix) {
        if (value.indexOf("*.") === 0) {
            value = value.replace("*.", prefix);
        }
        return value;
    }

    function onError(error, inputElement) {  // 'this' is the form element
        var container = $(this).find("[data-valmsg-for='" + escapeAttributeValue(inputElement[0].name) + "']"),
            replaceAttrValue = container.attr("data-valmsg-replace"),
            replace = replaceAttrValue ? $.parseJSON(replaceAttrValue) !== false : null;

        container.removeClass("field-validation-valid").addClass("field-validation-error");
        error.data("unobtrusiveContainer", container);

        if (replace) {
            container.empty();
            error.removeClass("input-validation-error").appendTo(container);
        }
        else {
            error.hide();
        }
    }

    function onErrors(event, validator) {  // 'this' is the form element
        var container = $(this).find("[data-valmsg-summary=true]"),
            list = container.find("ul");

        if (list && list.length && validator.errorList.length) {
            list.empty();
            container.addClass("validation-summary-errors").removeClass("validation-summary-valid");

            $.each(validator.errorList, function () {
                $("<li />").html(this.message).appendTo(list);
            });
        }
    }

    function onSuccess(error) {  // 'this' is the form element
        var container = error.data("unobtrusiveContainer");

        if (container) {
            var replaceAttrValue = container.attr("data-valmsg-replace"),
                replace = replaceAttrValue ? $.parseJSON(replaceAttrValue) : null;

            container.addClass("field-validation-valid").removeClass("field-validation-error");
            error.removeData("unobtrusiveContainer");

            if (replace) {
                container.empty();
            }
        }
    }

    function onReset(event) {  // 'this' is the form element
        var $form = $(this),
            key = '__jquery_unobtrusive_validation_form_reset';
        if ($form.data(key)) {
            return;
        }
        // Set a flag that indicates we're currently resetting the form.
        $form.data(key, true);
        try {
            $form.data("validator").resetForm();
        } finally {
            $form.removeData(key);
        }

        $form.find(".validation-summary-errors")
            .addClass("validation-summary-valid")
            .removeClass("validation-summary-errors");
        $form.find(".field-validation-error")
            .addClass("field-validation-valid")
            .removeClass("field-validation-error")
            .removeData("unobtrusiveContainer")
            .find(">*")  // If we were using valmsg-replace, get the underlying error
                .removeData("unobtrusiveContainer");
    }

    function validationInfo(form) {
        var $form = $(form),
            result = $form.data(data_validation),
            onResetProxy = $.proxy(onReset, form),
            defaultOptions = $jQval.unobtrusive.options || {},
            execInContext = function (name, args) {
                var func = defaultOptions[name];
                func && $.isFunction(func) && func.apply(form, args);
            }

        if (!result) {
            result = {
                options: {  // options structure passed to jQuery Validate's validate() method
                    errorClass: defaultOptions.errorClass || "input-validation-error",
                    errorElement: defaultOptions.errorElement || "span",
                    errorPlacement: function () {
                        onError.apply(form, arguments);
                        execInContext("errorPlacement", arguments);
                    },
                    invalidHandler: function () {
                        onErrors.apply(form, arguments);
                        execInContext("invalidHandler", arguments);
                    },
                    messages: {},
                    rules: {},
                    success: function () {
                        onSuccess.apply(form, arguments);
                        execInContext("success", arguments);
                    }
                },
                attachValidation: function () {
                    $form
                        .off("reset." + data_validation, onResetProxy)
                        .on("reset." + data_validation, onResetProxy)
                        .validate(this.options);
                },
                validate: function () {  // a validation function that is called by unobtrusive Ajax
                    $form.validate();
                    return $form.valid();
                }
            };
            $form.data(data_validation, result);
        }

        return result;
    }

    $jQval.unobtrusive = {
        adapters: [],

        parseElement: function (element, skipAttach) {
            /// <summary>
            /// Parses a single HTML element for unobtrusive validation attributes.
            /// </summary>
            /// <param name="element" domElement="true">The HTML element to be parsed.</param>
            /// <param name="skipAttach" type="Boolean">[Optional] true to skip attaching the
            /// validation to the form. If parsing just this single element, you should specify true.
            /// If parsing several elements, you should specify false, and manually attach the validation
            /// to the form when you are finished. The default is false.</param>
            var $element = $(element),
                form = $element.parents("form")[0],
                valInfo, rules, messages;

            if (!form) {  // Cannot do client-side validation without a form
                return;
            }

            valInfo = validationInfo(form);
            valInfo.options.rules[element.name] = rules = {};
            valInfo.options.messages[element.name] = messages = {};

            $.each(this.adapters, function () {
                var prefix = "data-val-" + this.name,
                    message = $element.attr(prefix),
                    paramValues = {};

                if (message !== undefined) {  // Compare against undefined, because an empty message is legal (and falsy)
                    prefix += "-";

                    $.each(this.params, function () {
                        paramValues[this] = $element.attr(prefix + this);
                    });

                    this.adapt({
                        element: element,
                        form: form,
                        message: message,
                        params: paramValues,
                        rules: rules,
                        messages: messages
                    });
                }
            });

            $.extend(rules, { "__dummy__": true });

            if (!skipAttach) {
                valInfo.attachValidation();
            }
        },

        parse: function (selector) {
            /// <summary>
            /// Parses all the HTML elements in the specified selector. It looks for input elements decorated
            /// with the [data-val=true] attribute value and enables validation according to the data-val-*
            /// attribute values.
            /// </summary>
            /// <param name="selector" type="String">Any valid jQuery selector.</param>

            // $forms includes all forms in selector's DOM hierarchy (parent, children and self) that have at least one
            // element with data-val=true
            var $selector = $(selector),
                $forms = $selector.parents()
                                  .addBack()
                                  .filter("form")
                                  .add($selector.find("form"))
                                  .has("[data-val=true]");

            $selector.find("[data-val=true]").each(function () {
                $jQval.unobtrusive.parseElement(this, true);
            });

            $forms.each(function () {
                var info = validationInfo(this);
                if (info) {
                    info.attachValidation();
                }
            });
        }
    };

    adapters = $jQval.unobtrusive.adapters;

    adapters.add = function (adapterName, params, fn) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
        /// <param name="params" type="Array" optional="true">[Optional] An array of parameter names (strings) that will
        /// be extracted from the data-val-nnnn-mmmm HTML attributes (where nnnn is the adapter name, and
        /// mmmm is the parameter name).</param>
        /// <param name="fn" type="Function">The function to call, which adapts the values from the HTML
        /// attributes into jQuery Validate rules and/or messages.</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        if (!fn) {  // Called with no params, just a function
            fn = params;
            params = [];
        }
        this.push({ name: adapterName, params: params, adapt: fn });
        return this;
    };

    adapters.addBool = function (adapterName, ruleName) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
        /// the jQuery Validate validation rule has no parameter values.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
        /// <param name="ruleName" type="String" optional="true">[Optional] The name of the jQuery Validate rule. If not provided, the value
        /// of adapterName will be used instead.</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        return this.add(adapterName, function (options) {
            setValidationValues(options, ruleName || adapterName, true);
        });
    };

    adapters.addMinMax = function (adapterName, minRuleName, maxRuleName, minMaxRuleName, minAttribute, maxAttribute) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
        /// the jQuery Validate validation has three potential rules (one for min-only, one for max-only, and
        /// one for min-and-max). The HTML parameters are expected to be named -min and -max.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute (where nnnn is the adapter name).</param>
        /// <param name="minRuleName" type="String">The name of the jQuery Validate rule to be used when you only
        /// have a minimum value.</param>
        /// <param name="maxRuleName" type="String">The name of the jQuery Validate rule to be used when you only
        /// have a maximum value.</param>
        /// <param name="minMaxRuleName" type="String">The name of the jQuery Validate rule to be used when you
        /// have both a minimum and maximum value.</param>
        /// <param name="minAttribute" type="String" optional="true">[Optional] The name of the HTML attribute that
        /// contains the minimum value. The default is "min".</param>
        /// <param name="maxAttribute" type="String" optional="true">[Optional] The name of the HTML attribute that
        /// contains the maximum value. The default is "max".</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        return this.add(adapterName, [minAttribute || "min", maxAttribute || "max"], function (options) {
            var min = options.params.min,
                max = options.params.max;

            if (min && max) {
                setValidationValues(options, minMaxRuleName, [min, max]);
            }
            else if (min) {
                setValidationValues(options, minRuleName, min);
            }
            else if (max) {
                setValidationValues(options, maxRuleName, max);
            }
        });
    };

    adapters.addSingleVal = function (adapterName, attribute, ruleName) {
        /// <summary>Adds a new adapter to convert unobtrusive HTML into a jQuery Validate validation, where
        /// the jQuery Validate validation rule has a single value.</summary>
        /// <param name="adapterName" type="String">The name of the adapter to be added. This matches the name used
        /// in the data-val-nnnn HTML attribute(where nnnn is the adapter name).</param>
        /// <param name="attribute" type="String">[Optional] The name of the HTML attribute that contains the value.
        /// The default is "val".</param>
        /// <param name="ruleName" type="String" optional="true">[Optional] The name of the jQuery Validate rule. If not provided, the value
        /// of adapterName will be used instead.</param>
        /// <returns type="jQuery.validator.unobtrusive.adapters" />
        return this.add(adapterName, [attribute || "val"], function (options) {
            setValidationValues(options, ruleName || adapterName, options.params[attribute]);
        });
    };

    $jQval.addMethod("__dummy__", function (value, element, params) {
        return true;
    });

    $jQval.addMethod("regex", function (value, element, params) {
        var match;
        if (this.optional(element)) {
            return true;
        }

        match = new RegExp(params).exec(value);
        return (match && (match.index === 0) && (match[0].length === value.length));
    });

    $jQval.addMethod("nonalphamin", function (value, element, nonalphamin) {
        var match;
        if (nonalphamin) {
            match = value.match(/\W/g);
            match = match && match.length >= nonalphamin;
        }
        return match;
    });

    if ($jQval.methods.extension) {
        adapters.addSingleVal("accept", "mimtype");
        adapters.addSingleVal("extension", "extension");
    } else {
        // for backward compatibility, when the 'extension' validation method does not exist, such as with versions
        // of JQuery Validation plugin prior to 1.10, we should use the 'accept' method for
        // validating the extension, and ignore mime-type validations as they are not supported.
        adapters.addSingleVal("extension", "extension", "accept");
    }

    adapters.addSingleVal("regex", "pattern");
    adapters.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
    adapters.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
    adapters.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength");
    adapters.add("equalto", ["other"], function (options) {
        var prefix = getModelPrefix(options.element.name),
            other = options.params.other,
            fullOtherName = appendModelPrefix(other, prefix),
            element = $(options.form).find(":input").filter("[name='" + escapeAttributeValue(fullOtherName) + "']")[0];

        setValidationValues(options, "equalTo", element);
    });
    adapters.add("required", function (options) {
        // jQuery Validate equates "required" with "mandatory" for checkbox elements
        if (options.element.tagName.toUpperCase() !== "INPUT" || options.element.type.toUpperCase() !== "CHECKBOX") {
            setValidationValues(options, "required", true);
        }
    });
    adapters.add("remote", ["url", "type", "additionalfields"], function (options) {
        var value = {
            url: options.params.url,
            type: options.params.type || "GET",
            data: {}
        },
            prefix = getModelPrefix(options.element.name);

        $.each(splitAndTrim(options.params.additionalfields || options.element.name), function (i, fieldName) {
            var paramName = appendModelPrefix(fieldName, prefix);
            value.data[paramName] = function () {
                var field = $(options.form).find(":input").filter("[name='" + escapeAttributeValue(paramName) + "']");
                // For checkboxes and radio buttons, only pick up values from checked fields.
                if (field.is(":checkbox")) {
                    return field.filter(":checked").val() || field.filter(":hidden").val() || '';
                }
                else if (field.is(":radio")) {
                    return field.filter(":checked").val() || '';
                }
                return field.val();
            };
        });

        setValidationValues(options, "remote", value);
    });
    adapters.add("password", ["min", "nonalphamin", "regex"], function (options) {
        if (options.params.min) {
            setValidationValues(options, "minlength", options.params.min);
        }
        if (options.params.nonalphamin) {
            setValidationValues(options, "nonalphamin", options.params.nonalphamin);
        }
        if (options.params.regex) {
            setValidationValues(options, "regex", options.params.regex);
        }
    });

    $(function () {
        $jQval.unobtrusive.parse(document);
    });
}(jQuery));
/*! layer-v3.1.1 Web弹层组件 MIT License  http://layer.layui.com/  By 贤心 */
 ;!function(e,t){"use strict";var i,n,a=e.layui&&layui.define,o={getPath:function(){var e=document.currentScript?document.currentScript.src:function(){for(var e,t=document.scripts,i=t.length-1,n=i;n>0;n--)if("interactive"===t[n].readyState){e=t[n].src;break}return e||t[i].src}();return e.substring(0,e.lastIndexOf("/")+1)}(),config:{},end:{},minIndex:0,minLeft:[],btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"],getStyle:function(t,i){var n=t.currentStyle?t.currentStyle:e.getComputedStyle(t,null);return n[n.getPropertyValue?"getPropertyValue":"getAttribute"](i)},link:function(t,i,n){if(r.path){var a=document.getElementsByTagName("head")[0],s=document.createElement("link");"string"==typeof i&&(n=i);var l=(n||t).replace(/\.|\//g,""),f="layuicss-"+l,c=0;s.rel="stylesheet",s.href=r.path+t,s.id=f,document.getElementById(f)||a.appendChild(s),"function"==typeof i&&!function u(){return++c>80?e.console&&console.error("layer.css: Invalid"):void(1989===parseInt(o.getStyle(document.getElementById(f),"width"))?i():setTimeout(u,100))}()}}},r={v:"3.1.1",ie:function(){var t=navigator.userAgent.toLowerCase();return!!(e.ActiveXObject||"ActiveXObject"in e)&&((t.match(/msie\s(\d+)/)||[])[1]||"11")}(),index:e.layer&&e.layer.v?1e5:0,path:o.getPath,config:function(e,t){return e=e||{},r.cache=o.config=i.extend({},o.config,e),r.path=o.config.path||r.path,"string"==typeof e.extend&&(e.extend=[e.extend]),o.config.path&&r.ready(),e.extend?(a?layui.addcss("modules/layer/"+e.extend):o.link("theme/"+e.extend),this):this},ready:function(e){var t="layer",i="",n=(a?"modules/layer/":"theme/")+"default/layer.css?v="+r.v+i;return a?layui.addcss(n,e,t):o.link(n,e,t),this},alert:function(e,t,n){var a="function"==typeof t;return a&&(n=t),r.open(i.extend({content:e,yes:n},a?{}:t))},confirm:function(e,t,n,a){var s="function"==typeof t;return s&&(a=n,n=t),r.open(i.extend({content:e,btn:o.btn,yes:n,btn2:a},s?{}:t))},msg:function(e,n,a){var s="function"==typeof n,f=o.config.skin,c=(f?f+" "+f+"-msg":"")||"layui-layer-msg",u=l.anim.length-1;return s&&(a=n),r.open(i.extend({content:e,time:3e3,shade:!1,skin:c,title:!1,closeBtn:!1,btn:!1,resize:!1,end:a},s&&!o.config.skin?{skin:c+" layui-layer-hui",anim:u}:function(){return n=n||{},(n.icon===-1||n.icon===t&&!o.config.skin)&&(n.skin=c+" "+(n.skin||"layui-layer-hui")),n}()))},load:function(e,t){return r.open(i.extend({type:3,icon:e||0,resize:!1,shade:.01},t))},tips:function(e,t,n){return r.open(i.extend({type:4,content:[e,t],closeBtn:!1,time:3e3,shade:!1,resize:!1,fixed:!1,maxWidth:210},n))}},s=function(e){var t=this;t.index=++r.index,t.config=i.extend({},t.config,o.config,e),document.body?t.creat():setTimeout(function(){t.creat()},30)};s.pt=s.prototype;var l=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];l.anim=["layer-anim-00","layer-anim-01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-anim-06"],s.pt.config={type:0,shade:.3,fixed:!0,move:l[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,anim:0,isOutAnim:!0,icon:-1,moveType:1,resize:!0,scrollbar:!0,tips:2},s.pt.vessel=function(e,t){var n=this,a=n.index,r=n.config,s=r.zIndex+a,f="object"==typeof r.title,c=r.maxmin&&(1===r.type||2===r.type),u=r.title?'<div class="layui-layer-title" style="'+(f?r.title[1]:"")+'">'+(f?r.title[0]:r.title)+"</div>":"";return r.zIndex=s,t([r.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+a+'" times="'+a+'" style="'+("z-index:"+(s-1)+"; ")+'"></div>':"",'<div class="'+l[0]+(" layui-layer-"+o.type[r.type])+(0!=r.type&&2!=r.type||r.shade?"":" layui-layer-border")+" "+(r.skin||"")+'" id="'+l[0]+a+'" type="'+o.type[r.type]+'" times="'+a+'" showtime="'+r.time+'" conType="'+(e?"object":"string")+'" style="z-index: '+s+"; width:"+r.area[0]+";height:"+r.area[1]+(r.fixed?"":";position:absolute;")+'">'+(e&&2!=r.type?"":u)+'<div id="'+(r.id||"")+'" class="layui-layer-content'+(0==r.type&&r.icon!==-1?" layui-layer-padding":"")+(3==r.type?" layui-layer-loading"+r.icon:"")+'">'+(0==r.type&&r.icon!==-1?'<i class="layui-layer-ico layui-layer-ico'+r.icon+'"></i>':"")+(1==r.type&&e?"":r.content||"")+'</div><span class="layui-layer-setwin">'+function(){var e=c?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return r.closeBtn&&(e+='<a class="layui-layer-ico '+l[7]+" "+l[7]+(r.title?r.closeBtn:4==r.type?"1":"2")+'" href="javascript:;"></a>'),e}()+"</span>"+(r.btn?function(){var e="";"string"==typeof r.btn&&(r.btn=[r.btn]);for(var t=0,i=r.btn.length;t<i;t++)e+='<a class="'+l[6]+t+'">'+r.btn[t]+"</a>";return'<div class="'+l[6]+" layui-layer-btn-"+(r.btnAlign||"")+'">'+e+"</div>"}():"")+(r.resize?'<span class="layui-layer-resize"></span>':"")+"</div>"],u,i('<div class="layui-layer-move"></div>')),n},s.pt.creat=function(){var e=this,t=e.config,a=e.index,s=t.content,f="object"==typeof s,c=i("body");if(!t.id||!i("#"+t.id)[0]){switch("string"==typeof t.area&&(t.area="auto"===t.area?["",""]:[t.area,""]),t.shift&&(t.anim=t.shift),6==r.ie&&(t.fixed=!1),t.type){case 0:t.btn="btn"in t?t.btn:o.btn[0],r.closeAll("dialog");break;case 2:var s=t.content=f?t.content:[t.content||"http://layer.layui.com","auto"];t.content='<iframe scrolling="'+(t.content[1]||"auto")+'" allowtransparency="true" id="'+l[4]+a+'" name="'+l[4]+a+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+t.content[0]+'"></iframe>';break;case 3:delete t.title,delete t.closeBtn,t.icon===-1&&0===t.icon,r.closeAll("loading");break;case 4:f||(t.content=[t.content,"body"]),t.follow=t.content[1],t.content=t.content[0]+'<i class="layui-layer-TipsG"></i>',delete t.title,t.tips="object"==typeof t.tips?t.tips:[t.tips,!0],t.tipsMore||r.closeAll("tips")}if(e.vessel(f,function(n,r,u){c.append(n[0]),f?function(){2==t.type||4==t.type?function(){i("body").append(n[1])}():function(){s.parents("."+l[0])[0]||(s.data("display",s.css("display")).show().addClass("layui-layer-wrap").wrap(n[1]),i("#"+l[0]+a).find("."+l[5]).before(r))}()}():c.append(n[1]),i(".layui-layer-move")[0]||c.append(o.moveElem=u),e.layero=i("#"+l[0]+a),t.scrollbar||l.html.css("overflow","hidden").attr("layer-full",a)}).auto(a),i("#layui-layer-shade"+e.index).css({"background-color":t.shade[1]||"#000",opacity:t.shade[0]||t.shade}),2==t.type&&6==r.ie&&e.layero.find("iframe").attr("src",s[0]),4==t.type?e.tips():e.offset(),t.fixed&&n.on("resize",function(){e.offset(),(/^\d+%$/.test(t.area[0])||/^\d+%$/.test(t.area[1]))&&e.auto(a),4==t.type&&e.tips()}),t.time<=0||setTimeout(function(){r.close(e.index)},t.time),e.move().callback(),l.anim[t.anim]){var u="layer-anim "+l.anim[t.anim];e.layero.addClass(u).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){i(this).removeClass(u)})}t.isOutAnim&&e.layero.data("isOutAnim",!0)}},s.pt.auto=function(e){var t=this,a=t.config,o=i("#"+l[0]+e);""===a.area[0]&&a.maxWidth>0&&(r.ie&&r.ie<8&&a.btn&&o.width(o.innerWidth()),o.outerWidth()>a.maxWidth&&o.width(a.maxWidth));var s=[o.innerWidth(),o.innerHeight()],f=o.find(l[1]).outerHeight()||0,c=o.find("."+l[6]).outerHeight()||0,u=function(e){e=o.find(e),e.height(s[1]-f-c-2*(0|parseFloat(e.css("padding-top"))))};switch(a.type){case 2:u("iframe");break;default:""===a.area[1]?a.maxHeight>0&&o.outerHeight()>a.maxHeight?(s[1]=a.maxHeight,u("."+l[5])):a.fixed&&s[1]>=n.height()&&(s[1]=n.height(),u("."+l[5])):u("."+l[5])}return t},s.pt.offset=function(){var e=this,t=e.config,i=e.layero,a=[i.outerWidth(),i.outerHeight()],o="object"==typeof t.offset;e.offsetTop=(n.height()-a[1])/2,e.offsetLeft=(n.width()-a[0])/2,o?(e.offsetTop=t.offset[0],e.offsetLeft=t.offset[1]||e.offsetLeft):"auto"!==t.offset&&("t"===t.offset?e.offsetTop=0:"r"===t.offset?e.offsetLeft=n.width()-a[0]:"b"===t.offset?e.offsetTop=n.height()-a[1]:"l"===t.offset?e.offsetLeft=0:"lt"===t.offset?(e.offsetTop=0,e.offsetLeft=0):"lb"===t.offset?(e.offsetTop=n.height()-a[1],e.offsetLeft=0):"rt"===t.offset?(e.offsetTop=0,e.offsetLeft=n.width()-a[0]):"rb"===t.offset?(e.offsetTop=n.height()-a[1],e.offsetLeft=n.width()-a[0]):e.offsetTop=t.offset),t.fixed||(e.offsetTop=/%$/.test(e.offsetTop)?n.height()*parseFloat(e.offsetTop)/100:parseFloat(e.offsetTop),e.offsetLeft=/%$/.test(e.offsetLeft)?n.width()*parseFloat(e.offsetLeft)/100:parseFloat(e.offsetLeft),e.offsetTop+=n.scrollTop(),e.offsetLeft+=n.scrollLeft()),i.attr("minLeft")&&(e.offsetTop=n.height()-(i.find(l[1]).outerHeight()||0),e.offsetLeft=i.css("left")),i.css({top:e.offsetTop,left:e.offsetLeft})},s.pt.tips=function(){var e=this,t=e.config,a=e.layero,o=[a.outerWidth(),a.outerHeight()],r=i(t.follow);r[0]||(r=i("body"));var s={width:r.outerWidth(),height:r.outerHeight(),top:r.offset().top,left:r.offset().left},f=a.find(".layui-layer-TipsG"),c=t.tips[0];t.tips[1]||f.remove(),s.autoLeft=function(){s.left+o[0]-n.width()>0?(s.tipLeft=s.left+s.width-o[0],f.css({right:12,left:"auto"})):s.tipLeft=s.left},s.where=[function(){s.autoLeft(),s.tipTop=s.top-o[1]-10,f.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",t.tips[1])},function(){s.tipLeft=s.left+s.width+10,s.tipTop=s.top,f.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",t.tips[1])},function(){s.autoLeft(),s.tipTop=s.top+s.height+10,f.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",t.tips[1])},function(){s.tipLeft=s.left-o[0]-10,s.tipTop=s.top,f.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",t.tips[1])}],s.where[c-1](),1===c?s.top-(n.scrollTop()+o[1]+16)<0&&s.where[2]():2===c?n.width()-(s.left+s.width+o[0]+16)>0||s.where[3]():3===c?s.top-n.scrollTop()+s.height+o[1]+16-n.height()>0&&s.where[0]():4===c&&o[0]+16-s.left>0&&s.where[1](),a.find("."+l[5]).css({"background-color":t.tips[1],"padding-right":t.closeBtn?"30px":""}),a.css({left:s.tipLeft-(t.fixed?n.scrollLeft():0),top:s.tipTop-(t.fixed?n.scrollTop():0)})},s.pt.move=function(){var e=this,t=e.config,a=i(document),s=e.layero,l=s.find(t.move),f=s.find(".layui-layer-resize"),c={};return t.move&&l.css("cursor","move"),l.on("mousedown",function(e){e.preventDefault(),t.move&&(c.moveStart=!0,c.offset=[e.clientX-parseFloat(s.css("left")),e.clientY-parseFloat(s.css("top"))],o.moveElem.css("cursor","move").show())}),f.on("mousedown",function(e){e.preventDefault(),c.resizeStart=!0,c.offset=[e.clientX,e.clientY],c.area=[s.outerWidth(),s.outerHeight()],o.moveElem.css("cursor","se-resize").show()}),a.on("mousemove",function(i){if(c.moveStart){var a=i.clientX-c.offset[0],o=i.clientY-c.offset[1],l="fixed"===s.css("position");if(i.preventDefault(),c.stX=l?0:n.scrollLeft(),c.stY=l?0:n.scrollTop(),!t.moveOut){var f=n.width()-s.outerWidth()+c.stX,u=n.height()-s.outerHeight()+c.stY;a<c.stX&&(a=c.stX),a>f&&(a=f),o<c.stY&&(o=c.stY),o>u&&(o=u)}s.css({left:a,top:o})}if(t.resize&&c.resizeStart){var a=i.clientX-c.offset[0],o=i.clientY-c.offset[1];i.preventDefault(),r.style(e.index,{width:c.area[0]+a,height:c.area[1]+o}),c.isResize=!0,t.resizing&&t.resizing(s)}}).on("mouseup",function(e){c.moveStart&&(delete c.moveStart,o.moveElem.hide(),t.moveEnd&&t.moveEnd(s)),c.resizeStart&&(delete c.resizeStart,o.moveElem.hide())}),e},s.pt.callback=function(){function e(){var e=a.cancel&&a.cancel(t.index,n);e===!1||r.close(t.index)}var t=this,n=t.layero,a=t.config;t.openLayer(),a.success&&(2==a.type?n.find("iframe").on("load",function(){a.success(n,t.index)}):a.success(n,t.index)),6==r.ie&&t.IE6(n),n.find("."+l[6]).children("a").on("click",function(){var e=i(this).index();if(0===e)a.yes?a.yes(t.index,n):a.btn1?a.btn1(t.index,n):r.close(t.index);else{var o=a["btn"+(e+1)]&&a["btn"+(e+1)](t.index,n);o===!1||r.close(t.index)}}),n.find("."+l[7]).on("click",e),a.shadeClose&&i("#layui-layer-shade"+t.index).on("click",function(){r.close(t.index)}),n.find(".layui-layer-min").on("click",function(){var e=a.min&&a.min(n);e===!1||r.min(t.index,a)}),n.find(".layui-layer-max").on("click",function(){i(this).hasClass("layui-layer-maxmin")?(r.restore(t.index),a.restore&&a.restore(n)):(r.full(t.index,a),setTimeout(function(){a.full&&a.full(n)},100))}),a.end&&(o.end[t.index]=a.end)},o.reselect=function(){i.each(i("select"),function(e,t){var n=i(this);n.parents("."+l[0])[0]||1==n.attr("layer")&&i("."+l[0]).length<1&&n.removeAttr("layer").show(),n=null})},s.pt.IE6=function(e){i("select").each(function(e,t){var n=i(this);n.parents("."+l[0])[0]||"none"===n.css("display")||n.attr({layer:"1"}).hide(),n=null})},s.pt.openLayer=function(){var e=this;r.zIndex=e.config.zIndex,r.setTop=function(e){var t=function(){r.zIndex++,e.css("z-index",r.zIndex+1)};return r.zIndex=parseInt(e[0].style.zIndex),e.on("mousedown",t),r.zIndex}},o.record=function(e){var t=[e.width(),e.height(),e.position().top,e.position().left+parseFloat(e.css("margin-left"))];e.find(".layui-layer-max").addClass("layui-layer-maxmin"),e.attr({area:t})},o.rescollbar=function(e){l.html.attr("layer-full")==e&&(l.html[0].style.removeProperty?l.html[0].style.removeProperty("overflow"):l.html[0].style.removeAttribute("overflow"),l.html.removeAttr("layer-full"))},e.layer=r,r.getChildFrame=function(e,t){return t=t||i("."+l[4]).attr("times"),i("#"+l[0]+t).find("iframe").contents().find(e)},r.getFrameIndex=function(e){return i("#"+e).parents("."+l[4]).attr("times")},r.iframeAuto=function(e){if(e){var t=r.getChildFrame("html",e).outerHeight(),n=i("#"+l[0]+e),a=n.find(l[1]).outerHeight()||0,o=n.find("."+l[6]).outerHeight()||0;n.css({height:t+a+o}),n.find("iframe").css({height:t})}},r.iframeSrc=function(e,t){i("#"+l[0]+e).find("iframe").attr("src",t)},r.style=function(e,t,n){var a=i("#"+l[0]+e),r=a.find(".layui-layer-content"),s=a.attr("type"),f=a.find(l[1]).outerHeight()||0,c=a.find("."+l[6]).outerHeight()||0;a.attr("minLeft");s!==o.type[3]&&s!==o.type[4]&&(n||(parseFloat(t.width)<=260&&(t.width=260),parseFloat(t.height)-f-c<=64&&(t.height=64+f+c)),a.css(t),c=a.find("."+l[6]).outerHeight(),s===o.type[2]?a.find("iframe").css({height:parseFloat(t.height)-f-c}):r.css({height:parseFloat(t.height)-f-c-parseFloat(r.css("padding-top"))-parseFloat(r.css("padding-bottom"))}))},r.min=function(e,t){var a=i("#"+l[0]+e),s=a.find(l[1]).outerHeight()||0,f=a.attr("minLeft")||181*o.minIndex+"px",c=a.css("position");o.record(a),o.minLeft[0]&&(f=o.minLeft[0],o.minLeft.shift()),a.attr("position",c),r.style(e,{width:180,height:s,left:f,top:n.height()-s,position:"fixed",overflow:"hidden"},!0),a.find(".layui-layer-min").hide(),"page"===a.attr("type")&&a.find(l[4]).hide(),o.rescollbar(e),a.attr("minLeft")||o.minIndex++,a.attr("minLeft",f)},r.restore=function(e){var t=i("#"+l[0]+e),n=t.attr("area").split(",");t.attr("type");r.style(e,{width:parseFloat(n[0]),height:parseFloat(n[1]),top:parseFloat(n[2]),left:parseFloat(n[3]),position:t.attr("position"),overflow:"visible"},!0),t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),t.find(".layui-layer-min").show(),"page"===t.attr("type")&&t.find(l[4]).show(),o.rescollbar(e)},r.full=function(e){var t,a=i("#"+l[0]+e);o.record(a),l.html.attr("layer-full")||l.html.css("overflow","hidden").attr("layer-full",e),clearTimeout(t),t=setTimeout(function(){var t="fixed"===a.css("position");r.style(e,{top:t?0:n.scrollTop(),left:t?0:n.scrollLeft(),width:n.width(),height:n.height()},!0),a.find(".layui-layer-min").hide()},100)},r.title=function(e,t){var n=i("#"+l[0]+(t||r.index)).find(l[1]);n.html(e)},r.close=function(e){var t=i("#"+l[0]+e),n=t.attr("type"),a="layer-anim-close";if(t[0]){var s="layui-layer-wrap",f=function(){if(n===o.type[1]&&"object"===t.attr("conType")){t.children(":not(."+l[5]+")").remove();for(var a=t.find("."+s),r=0;r<2;r++)a.unwrap();a.css("display",a.data("display")).removeClass(s)}else{if(n===o.type[2])try{var f=i("#"+l[4]+e)[0];f.contentWindow.document.write(""),f.contentWindow.close(),t.find("."+l[5])[0].removeChild(f)}catch(c){}t[0].innerHTML="",t.remove()}"function"==typeof o.end[e]&&o.end[e](),delete o.end[e]};t.data("isOutAnim")&&t.addClass("layer-anim "+a),i("#layui-layer-moves, #layui-layer-shade"+e).remove(),6==r.ie&&o.reselect(),o.rescollbar(e),t.attr("minLeft")&&(o.minIndex--,o.minLeft.push(t.attr("minLeft"))),r.ie&&r.ie<10||!t.data("isOutAnim")?f():setTimeout(function(){f()},200)}},r.closeAll=function(e){i.each(i("."+l[0]),function(){var t=i(this),n=e?t.attr("type")===e:1;n&&r.close(t.attr("times")),n=null})};var f=r.cache||{},c=function(e){return f.skin?" "+f.skin+" "+f.skin+"-"+e:""};r.prompt=function(e,t){var a="";if(e=e||{},"function"==typeof e&&(t=e),e.area){var o=e.area;a='style="width: '+o[0]+"; height: "+o[1]+';"',delete e.area}var s,l=2==e.formType?'<textarea class="layui-layer-input"'+a+">"+(e.value||"")+"</textarea>":function(){return'<input type="'+(1==e.formType?"password":"text")+'" class="layui-layer-input" value="'+(e.value||"")+'">'}(),f=e.success;return delete e.success,r.open(i.extend({type:1,btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:l,skin:"layui-layer-prompt"+c("prompt"),maxWidth:n.width(),success:function(e){s=e.find(".layui-layer-input"),s.focus(),"function"==typeof f&&f(e)},resize:!1,yes:function(i){var n=s.val();""===n?s.focus():n.length>(e.maxlength||500)?r.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(e.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",s,{tips:1}):t&&t(n,i,s)}},e))},r.tab=function(e){e=e||{};var t=e.tab||{},n="layui-this",a=e.success;return delete e.success,r.open(i.extend({type:1,skin:"layui-layer-tab"+c("tab"),resize:!1,title:function(){var e=t.length,i=1,a="";if(e>0)for(a='<span class="'+n+'">'+t[0].title+"</span>";i<e;i++)a+="<span>"+t[i].title+"</span>";return a}(),content:'<ul class="layui-layer-tabmain">'+function(){var e=t.length,i=1,a="";if(e>0)for(a='<li class="layui-layer-tabli '+n+'">'+(t[0].content||"no content")+"</li>";i<e;i++)a+='<li class="layui-layer-tabli">'+(t[i].content||"no  content")+"</li>";return a}()+"</ul>",success:function(t){var o=t.find(".layui-layer-title").children(),r=t.find(".layui-layer-tabmain").children();o.on("mousedown",function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0;var a=i(this),o=a.index();a.addClass(n).siblings().removeClass(n),r.eq(o).show().siblings().hide(),"function"==typeof e.change&&e.change(o)}),"function"==typeof a&&a(t)}},e))},r.photos=function(t,n,a){function o(e,t,i){var n=new Image;return n.src=e,n.complete?t(n):(n.onload=function(){n.onload=null,t(n)},void(n.onerror=function(e){n.onerror=null,i(e)}))}var s={};if(t=t||{},t.photos){var l=t.photos.constructor===Object,f=l?t.photos:{},u=f.data||[],d=f.start||0;s.imgIndex=(0|d)+1,t.img=t.img||"img";var y=t.success;if(delete t.success,l){if(0===u.length)return r.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}else{var p=i(t.photos),h=function(){u=[],p.find(t.img).each(function(e){var t=i(this);t.attr("layer-index",e),u.push({alt:t.attr("alt"),pid:t.attr("layer-pid"),src:t.attr("layer-src")||t.attr("src"),thumb:t.attr("src")})})};if(h(),0===u.length)return;if(n||p.on("click",t.img,function(){var e=i(this),n=e.attr("layer-index");r.photos(i.extend(t,{photos:{start:n,data:u,tab:t.tab},full:t.full}),!0),h()}),!n)return}s.imgprev=function(e){s.imgIndex--,s.imgIndex<1&&(s.imgIndex=u.length),s.tabimg(e)},s.imgnext=function(e,t){s.imgIndex++,s.imgIndex>u.length&&(s.imgIndex=1,t)||s.tabimg(e)},s.keyup=function(e){if(!s.end){var t=e.keyCode;e.preventDefault(),37===t?s.imgprev(!0):39===t?s.imgnext(!0):27===t&&r.close(s.index)}},s.tabimg=function(e){if(!(u.length<=1))return f.start=s.imgIndex-1,r.close(s.index),r.photos(t,!0,e)},s.event=function(){s.bigimg.hover(function(){s.imgsee.show()},function(){s.imgsee.hide()}),s.bigimg.find(".layui-layer-imgprev").on("click",function(e){e.preventDefault(),s.imgprev()}),s.bigimg.find(".layui-layer-imgnext").on("click",function(e){e.preventDefault(),s.imgnext()}),i(document).on("keyup",s.keyup)},s.loadi=r.load(1,{shade:!("shade"in t)&&.9,scrollbar:!1}),o(u[d].src,function(n){r.close(s.loadi),s.index=r.open(i.extend({type:1,id:"layui-layer-photos",area:function(){var a=[n.width,n.height],o=[i(e).width()-100,i(e).height()-100];if(!t.full&&(a[0]>o[0]||a[1]>o[1])){var r=[a[0]/o[0],a[1]/o[1]];r[0]>r[1]?(a[0]=a[0]/r[0],a[1]=a[1]/r[0]):r[0]<r[1]&&(a[0]=a[0]/r[1],a[1]=a[1]/r[1])}return[a[0]+"px",a[1]+"px"]}(),title:!1,shade:.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,isOutAnim:!1,skin:"layui-layer-photos"+c("photos"),content:'<div class="layui-layer-phimg"><img src="'+u[d].src+'" alt="'+(u[d].alt||"")+'" layer-pid="'+u[d].pid+'"><div class="layui-layer-imgsee">'+(u.length>1?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(a?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(u[d].alt||"")+"</a><em>"+s.imgIndex+"/"+u.length+"</em></span></div></div></div>",success:function(e,i){s.bigimg=e.find(".layui-layer-phimg"),s.imgsee=e.find(".layui-layer-imguide,.layui-layer-imgbar"),s.event(e),t.tab&&t.tab(u[d],e),"function"==typeof y&&y(e)},end:function(){s.end=!0,i(document).off("keyup",s.keyup)}},t))},function(){r.close(s.loadi),r.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;",{time:3e4,btn:["&#x4E0B;&#x4E00;&#x5F20;","&#x4E0D;&#x770B;&#x4E86;"],yes:function(){u.length>1&&s.imgnext(!0,!0)}})})}},o.run=function(t){i=t,n=i(e),l.html=i("html"),r.open=function(e){var t=new s(e);return t.index}},e.layui&&layui.define?(r.ready(),layui.define("jquery",function(t){r.path=layui.cache.dir,o.run(layui.$),e.layer=r,t("layer",r)})):"function"==typeof define&&define.amd?define(["jquery"],function(){return o.run(e.jQuery),r}):function(){o.run(e.jQuery),r.ready()}()}(window);
/*!
 * Select2 4.0.5
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        }
        else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
} (function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name) {
            name = name.split('/');
            lastIndex = name.length - 1;

            // If wanting node ID compatibility, strip .js from end
            // of IDs. Have to do this here, and not in nameToUrl
            // because node allows either .js or non .js to map
            // to same file.
            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
            }

            // Starts with a '.' so need the baseName
            if (name[0].charAt(0) === '.' && baseParts) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that 'directory' and not name of the baseName's
                //module. For instance, baseName of 'one/two/three', maps to
                //'one/two/three.js', but we want the directory, 'one/two' for
                //this normalization.
                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                name = normalizedBaseParts.concat(name);
            }

            //start trimDots
            for (i = 0; i < name.length; i++) {
                part = name[i];
                if (part === '.') {
                    name.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        name.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
            //end trimDots

            name = name.join('/');
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    //Creates a parts array for a relName where first part is plugin ID,
    //second part is resource ID. Assumes relName has already been normalized.
    function makeRelParts(relName) {
        return relName ? splitPrefix(relName) : [];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relParts) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0],
            relResourceName = relParts[1];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relResourceName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relResourceName));
            } else {
                name = normalize(name, relResourceName);
            }
        } else {
            name = normalize(name, relResourceName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i, relParts,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;
        relParts = makeRelParts(relName);

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relParts);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, makeRelParts(callback)).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
        var superMethod = superMethods[m];

        DecoratedClass.prototype[superMethod] =
          SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes) {
    // jQuery 1.7.x does not support $.fn.append() with an array
    // Fall back to a jQuery object collection using $.fn.add()
    if ($.fn.jquery.substr(0, 3) === '1.7') {
      var $jqNodes = $();

      $.map($nodes, function (node) {
        $jqNodes = $jqNodes.add(node);
      });

      $nodes = $jqNodes;
    }

    $element.append($nodes);
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="tree"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="treeitem" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option[aria-selected]');

    var $selected = $options.filter('[aria-selected=true]');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = $.map(selected, function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option[aria-selected]');

      $options.each(function () {
        var $option = $(this);

        var item = $.data(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && $.inArray(id, selectedIds) > -1)) {
          $option.attr('aria-selected', 'true');
        } else {
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.className = 'select2-results__option';

    var attrs = {
      'role': 'treeitem',
      'aria-selected': 'false'
    };

    if (data.disabled) {
      delete attrs['aria-selected'];
      attrs['aria-disabled'] = 'true';
    }

    if (data.id == null) {
      delete attrs['aria-selected'];
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;
      delete attrs['aria-selected'];
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      var $label = $(label);
      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    $.data(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = $highlighted.data('data');

      if ($highlighted.attr('aria-selected') == 'true') {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      // If we are already at te top, don't move further
      if (currentIndex === 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element.addClass('select2-results__option--highlighted');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
      function (evt) {
      var $this = $(this);

      var data = $this.data('data');

      if ($this.attr('aria-selected') === 'true') {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
      function (evt) {
      var data = $(this).data('data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('[aria-selected]');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (this.$element.data('old-tabindex') != null) {
      this._tabindex = this.$element.data('old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-container';
    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.focus();

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {
    var self = this;

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        var $this = $(this);

        if (this == $select[0]) {
          return;
        }

        var $element = $this.data('element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered').attr('id', id);
    this.$selection.attr('aria-labelledby', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.focus();
      }
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });
  };

  SingleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);
    $rendered.prop('title', selection.title || selection.text);
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.options.get('disabled')) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = $selection.data('data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<span class="select2-selection__choice__remove" role="presentation">' +
          '&times;' +
        '</span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      $selection.append(formatted);
      $selection.prop('title', selection.title || selection.text);

      $selection.data('data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    Utils.appendMany($rendered, $selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
  '../utils'
], function (Utils) {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder.addClass('select2-selection__placeholder')
                .removeClass('select2-selection__choice');

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys'
], function ($, KEYS) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.options.get('disabled')) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = $clear.data('data');

    for (var d = 0; d < data.length; d++) {
      var unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        return;
      }
    }

    this.$element.val(this.placeholder.id).trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var $remove = $(
      '<span class="select2-selection__clear">' +
        '&times;' +
      '</span>'
    );
    $remove.data('data', data);

    this.$selection.find('.select2-selection__rendered').prepend($remove);
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
      '</li>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      self.$search.attr('aria-activedescendant', params.id);
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$searchContainer
          .prev('.select2-selection__choice');

        if ($previousChoice.length > 0) {
          var item = $previousChoice.data('data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.$selection.find('.select2-selection__rendered')
                   .append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.focus();
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '';

    if (this.$search.attr('placeholder') !== '') {
      width = this.$selection.find('.select2-selection__rendered').innerWidth();
    } else {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting'
    ];

    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var data = [];
    var self = this;

    this.$element.find(':selected').each(function () {
      var $option = $(this);

      var option = self.item($option);

      data.push(option);
    });

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if ($(data.element).is('option')) {
      data.element.selected = true;

      this.$element.trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if ($.inArray(id, val) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if ($(data.element).is('option')) {
      data.element.selected = false;

      this.$element.trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && $.inArray(id, val) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      $.removeData(this, 'data');
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      var $option = $(this);

      if (!$option.is('option') && !$option.is('optgroup')) {
        return;
      }

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    Utils.appendMany(this.$element, $options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id !== undefined) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var $option = $(option);

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    $.data(option, 'data', normalizedData);

    return $option;
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = $.data($option[0], 'data');

    if (data != null) {
      return data;
    }

    if ($option.is('option')) {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if ($option.is('optgroup')) {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    $.data($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (!$.isPlainObject(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    var data = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);

    this.addOptions(this.convertToOptions(data));
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if ($.inArray(item.id, existingIds) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        Utils.appendMany($option, $children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if ($.isFunction(this._request.abort)) {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !$.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ($request.status && $request.status === '0') {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if ($.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var optionText = (option.text || '').toUpperCase();
        var paramsTerm = (params.term || '').toUpperCase();

        var checkText = optionText === paramsTerm;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', true);

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    var term = $.trim(params.term);

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var tag = this._lastTag;

    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.focus();
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if ($.inArray(termChar, separators) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }
        decorated.call(self, params, callback);
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implmented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="textbox" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);

      self.$search.focus();

      window.setTimeout(function () {
        self.$search.focus();
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);

      self.$search.val('');
    });

    container.on('focus', function () {
      if (!container.isOpen()) {
        self.$search.focus();
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer.removeClass('select2-search--hide');
        } else {
          self.$searchContainer.addClass('select2-search--hide');
        }
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', function () {
      var isLoadMoreVisible = $.contains(
        document.documentElement,
        self.$loadingMore[0]
      );

      if (self.loading || !isLoadMoreVisible) {
        return;
      }

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var loadingMoreOffset = self.$loadingMore.offset().top +
        self.$loadingMore.outerHeight(false);

      if (currentOffset + 50 >= loadingMoreOffset) {
        self.loadMore();
      }
    });
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="treeitem" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = options.get('dropdownParent') || $(document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var setupResultsEvents = false;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      if (!setupResultsEvents) {
        setupResultsEvents = true;

        container.on('results:all', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });

        container.on('results:append', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
      }
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown.removeClass('select2');
    $dropdown.addClass('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      $(this).data('select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = $(this).data('select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calciulating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positoned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = $offsetParent.offset();

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[

], function () {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = $highlightedResults.data('data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && originalEvent.ctrlKey) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
], function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }

      if (options.query != null) {
        var Query = require(options.amdBase + 'compat/query');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        );
      }

      if (options.initSelection != null) {
        var InitSelection = require(options.amdBase + 'compat/initSelection');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ) {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ) {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    if (typeof options.language === 'string') {
      // Check if the language is specified with a region
      if (options.language.indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = options.language.split('-');
        var baseLanguage = languageParts[0];

        options.language = [options.language, baseLanguage];
      } else {
        options.language = [options.language];
      }
    }

    if ($.isArray(options.language)) {
      var languages = new Translation();
      options.language.push('en');

      var languageNames = options.language;

      for (var l = 0; l < languageNames.length; l++) {
        var name = languageNames[l];
        var language = {};

        try {
          // Try to load it with the original name
          language = Translation.loadPath(name);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            name = this.defaults.amdLanguageBase + name;
            language = Translation.loadPath(name);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files.
            if (options.debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + name + '" could not be ' +
                'automatically loaded. A fallback will be used instead.'
              );
            }

            continue;
          }
        }

        languages.extend(language);
      }

      options.translations = languages;
    } else {
      var baseTranslation = Translation.loadPath(
        this.defaults.amdLanguageBase + 'en'
      );
      var customTranslation = new Translation(options.language);

      customTranslation.extend(baseTranslation);

      options.translations = customTranslation;
    }

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if ($.trim(params.term) === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: EnglishTranslation,
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
], function (require, $, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    this.options = Defaults.apply(this.options);

    if ($element && $element.is('input')) {
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      );
    }
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.language == null) {
      if ($e.prop('lang')) {
        this.options.language = $e.prop('lang').toLowerCase();
      } else if ($e.closest('[lang]').prop('lang')) {
        this.options.language = $e.closest('[lang]').prop('lang');
      }
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if ($e.data('select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      $e.data('data', $e.data('select2Tags'));
      $e.data('tags', true);
    }

    if ($e.data('ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', $e.data('ajaxUrl'));
      $e.data('ajax--url', $e.data('ajaxUrl'));
    }

    var dataset = {};

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, $e.data());
    } else {
      dataset = $e.data();
    }

    var data = $.extend(true, {}, dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if ($.inArray(key, excludedData) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if ($element.data('select2') != null) {
      $element.data('select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    $element.data('old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element.addClass('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    if (this.$element[0].attachEvent) {
      this.$element[0].attachEvent('onpropertychange', this._syncA);
    }

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null) {
      this._observer = new observer(function (mutations) {
        $.each(mutations, self._syncA);
        $.each(mutations, self._syncS);
      });
      this._observer.observe(this.$element[0], {
        attributes: true,
        childList: true,
        subtree: false
      });
    } else if (this.$element[0].addEventListener) {
      this.$element[0].addEventListener(
        'DOMAttrModified',
        self._syncA,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeInserted',
        self._syncS,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeRemoved',
        self._syncS,
        false
      );
    }
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if ($.inArray(name, nonRelayEvents) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container.addClass('select2-container--open');
    });

    this.on('close', function () {
      self.$container.removeClass('select2-container--open');
    });

    this.on('enable', function () {
      self.$container.removeClass('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container.addClass('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container.removeClass('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || key === KEYS.TAB ||
            (key === KEYS.UP && evt.altKey)) {
          self.close();

          evt.preventDefault();
        } else if (key === KEYS.ENTER) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.options.get('disabled')) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._syncSubtree = function (evt, mutations) {
    var changed = false;
    var self = this;

    // Ignore any mutation events raised for elements that aren't options or
    // optgroups. This handles the case when the select element is destroyed
    if (
      evt && evt.target && (
        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
      )
    ) {
      return;
    }

    if (!mutations) {
      // If mutation events aren't supported, then we can only assume that the
      // change affected the selections
      changed = true;
    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          changed = true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      changed = true;
    }

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.options.get('disabled')) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function () {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', {});
  };

  Select2.prototype.isOpen = function () {
    return this.$container.hasClass('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container.hasClass('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container.addClass('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if ($.isArray(newVal)) {
      newVal = $.map(newVal, function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('change');
  };

  Select2.prototype.destroy = function () {
    this.$container.remove();

    if (this.$element[0].detachEvent) {
      this.$element[0].detachEvent('onpropertychange', this._syncA);
    }

    if (this._observer != null) {
      this._observer.disconnect();
      this._observer = null;
    } else if (this.$element[0].removeEventListener) {
      this.$element[0]
        .removeEventListener('DOMAttrModified', this._syncA, false);
      this.$element[0]
        .removeEventListener('DOMNodeInserted', this._syncS, false);
      this.$element[0]
        .removeEventListener('DOMNodeRemoved', this._syncS, false);
    }

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

    this.$element.removeClass('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container.addClass('select2-container--' + this.options.get('theme'));

    $container.data('element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('select2/compat/utils',[
  'jquery'
], function ($) {
  function syncCssClasses ($dest, $src, adapter) {
    var classes, replacements = [], adapted;

    classes = $.trim($dest.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Save all Select2 classes
        if (this.indexOf('select2-') === 0) {
          replacements.push(this);
        }
      });
    }

    classes = $.trim($src.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Only adapt non-Select2 classes
        if (this.indexOf('select2-') !== 0) {
          adapted = adapter(this);

          if (adapted != null) {
            replacements.push(adapted);
          }
        }
      });
    }

    $dest.attr('class', replacements.join(' '));
  }

  return {
    syncCssClasses: syncCssClasses
  };
});

S2.define('select2/compat/containerCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _containerAdapter (clazz) {
    return null;
  }

  function ContainerCSS () { }

  ContainerCSS.prototype.render = function (decorated) {
    var $container = decorated.call(this);

    var containerCssClass = this.options.get('containerCssClass') || '';

    if ($.isFunction(containerCssClass)) {
      containerCssClass = containerCssClass(this.$element);
    }

    var containerCssAdapter = this.options.get('adaptContainerCssClass');
    containerCssAdapter = containerCssAdapter || _containerAdapter;

    if (containerCssClass.indexOf(':all:') !== -1) {
      containerCssClass = containerCssClass.replace(':all:', '');

      var _cssAdapter = containerCssAdapter;

      containerCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var containerCss = this.options.get('containerCss') || {};

    if ($.isFunction(containerCss)) {
      containerCss = containerCss(this.$element);
    }

    CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);

    $container.css(containerCss);
    $container.addClass(containerCssClass);

    return $container;
  };

  return ContainerCSS;
});

S2.define('select2/compat/dropdownCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _dropdownAdapter (clazz) {
    return null;
  }

  function DropdownCSS () { }

  DropdownCSS.prototype.render = function (decorated) {
    var $dropdown = decorated.call(this);

    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

    if ($.isFunction(dropdownCssClass)) {
      dropdownCssClass = dropdownCssClass(this.$element);
    }

    var dropdownCssAdapter = this.options.get('adaptDropdownCssClass');
    dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;

    if (dropdownCssClass.indexOf(':all:') !== -1) {
      dropdownCssClass = dropdownCssClass.replace(':all:', '');

      var _cssAdapter = dropdownCssAdapter;

      dropdownCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var dropdownCss = this.options.get('dropdownCss') || {};

    if ($.isFunction(dropdownCss)) {
      dropdownCss = dropdownCss(this.$element);
    }

    CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter);

    $dropdown.css(dropdownCss);
    $dropdown.addClass(dropdownCssClass);

    return $dropdown;
  };

  return DropdownCSS;
});

S2.define('select2/compat/initSelection',[
  'jquery'
], function ($) {
  function InitSelection (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `initSelection` option has been deprecated in favor' +
        ' of a custom data adapter that overrides the `current` method. ' +
        'This method is now called multiple times instead of a single ' +
        'time when the instance is initialized. Support will be removed ' +
        'for the `initSelection` option in future versions of Select2'
      );
    }

    this.initSelection = options.get('initSelection');
    this._isInitialized = false;

    decorated.call(this, $element, options);
  }

  InitSelection.prototype.current = function (decorated, callback) {
    var self = this;

    if (this._isInitialized) {
      decorated.call(this, callback);

      return;
    }

    this.initSelection.call(null, this.$element, function (data) {
      self._isInitialized = true;

      if (!$.isArray(data)) {
        data = [data];
      }

      callback(data);
    });
  };

  return InitSelection;
});

S2.define('select2/compat/inputData',[
  'jquery'
], function ($) {
  function InputData (decorated, $element, options) {
    this._currentData = [];
    this._valueSeparator = options.get('valueSeparator') || ',';

    if ($element.prop('type') === 'hidden') {
      if (options.get('debug') && console && console.warn) {
        console.warn(
          'Select2: Using a hidden input with Select2 is no longer ' +
          'supported and may stop working in the future. It is recommended ' +
          'to use a `<select>` element instead.'
        );
      }
    }

    decorated.call(this, $element, options);
  }

  InputData.prototype.current = function (_, callback) {
    function getSelected (data, selectedIds) {
      var selected = [];

      if (data.selected || $.inArray(data.id, selectedIds) !== -1) {
        data.selected = true;
        selected.push(data);
      } else {
        data.selected = false;
      }

      if (data.children) {
        selected.push.apply(selected, getSelected(data.children, selectedIds));
      }

      return selected;
    }

    var selected = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      selected.push.apply(
        selected,
        getSelected(
          data,
          this.$element.val().split(
            this._valueSeparator
          )
        )
      );
    }

    callback(selected);
  };

  InputData.prototype.select = function (_, data) {
    if (!this.options.get('multiple')) {
      this.current(function (allData) {
        $.map(allData, function (data) {
          data.selected = false;
        });
      });

      this.$element.val(data.id);
      this.$element.trigger('change');
    } else {
      var value = this.$element.val();
      value += this._valueSeparator + data.id;

      this.$element.val(value);
      this.$element.trigger('change');
    }
  };

  InputData.prototype.unselect = function (_, data) {
    var self = this;

    data.selected = false;

    this.current(function (allData) {
      var values = [];

      for (var d = 0; d < allData.length; d++) {
        var item = allData[d];

        if (data.id == item.id) {
          continue;
        }

        values.push(item.id);
      }

      self.$element.val(values.join(self._valueSeparator));
      self.$element.trigger('change');
    });
  };

  InputData.prototype.query = function (_, params, callback) {
    var results = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      var matches = this.matches(params, data);

      if (matches !== null) {
        results.push(matches);
      }
    }

    callback({
      results: results
    });
  };

  InputData.prototype.addOptions = function (_, $options) {
    var options = $.map($options, function ($option) {
      return $.data($option[0], 'data');
    });

    this._currentData.push.apply(this._currentData, options);
  };

  return InputData;
});

S2.define('select2/compat/matcher',[
  'jquery'
], function ($) {
  function oldMatcher (matcher) {
    function wrappedMatcher (params, data) {
      var match = $.extend(true, {}, data);

      if (params.term == null || $.trim(params.term) === '') {
        return match;
      }

      if (data.children) {
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          // Check if the child object matches
          // The old matcher returned a boolean true or false
          var doesMatch = matcher(params.term, child.text, child);

          // If the child didn't match, pop it off
          if (!doesMatch) {
            match.children.splice(c, 1);
          }
        }

        if (match.children.length > 0) {
          return match;
        }
      }

      if (matcher(params.term, data.text, data)) {
        return match;
      }

      return null;
    }

    return wrappedMatcher;
  }

  return oldMatcher;
});

S2.define('select2/compat/query',[

], function () {
  function Query (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `query` option has been deprecated in favor of a ' +
        'custom data adapter that overrides the `query` method. Support ' +
        'will be removed for the `query` option in future versions of ' +
        'Select2.'
      );
    }

    decorated.call(this, $element, options);
  }

  Query.prototype.query = function (_, params, callback) {
    params.callback = callback;

    var query = this.options.get('query');

    query.call(null, params);
  };

  return Query;
});

S2.define('select2/dropdown/attachContainer',[

], function () {
  function AttachContainer (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  AttachContainer.prototype.position =
    function (decorated, $dropdown, $container) {
    var $dropdownContainer = $container.find('.dropdown-wrapper');
    $dropdownContainer.append($dropdown);

    $dropdown.addClass('select2-dropdown--below');
    $container.addClass('select2-container--below');
  };

  return AttachContainer;
});

S2.define('select2/dropdown/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
    'blur',
    'change',
    'click',
    'dblclick',
    'focus',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'keypress',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseup',
    'search',
    'touchend',
    'touchstart'
    ];

    this.$dropdown.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

S2.define('select2/selection/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
      'blur',
      'change',
      'click',
      'dblclick',
      'focus',
      'focusin',
      'focusout',
      'input',
      'keydown',
      'keyup',
      'keypress',
      'mousedown',
      'mouseenter',
      'mouseleave',
      'mousemove',
      'mouseover',
      'mouseup',
      'search',
      'touchend',
      'touchstart'
    ];

    this.$selection.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof S2.define === 'function' && S2.define.amd ) {
        // AMD. Register as an anonymous module.
        S2.define('jquery-mousewheel',['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults'
], function ($, _, Select2, Defaults) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = $(this).data('select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));

/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()});b.$results.find(".select2-results__option[aria-selected]").each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):h-g<0&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");if("true"===c.attr("aria-selected"))return void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{}));d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2");a(".select2.select2-container--open").each(function(){var b=a(this);this!=d[0]&&b.data("element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===e.$search.val()){var b=e.$searchContainer.prev(".select2-selection__choice");if(b.length>0){var d=b.data("data");e.searchRemoveChoice(d),a.preventDefault()}}});var f=document.documentMode,g=f&&f<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(g)return void e.$selection.off("input.search input.searchcheck");e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),void 0!==a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(null!=(b=c.data(a[0],"data")))return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("select2/compat/utils",["jquery"],function(a){function b(b,c,d){var e,f,g=[];e=a.trim(b.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0===this.indexOf("select2-")&&g.push(this)})),e=a.trim(c.attr("class")),e&&(e=""+e,a(e.split(/\s+/)).each(function(){0!==this.indexOf("select2-")&&null!=(f=d(this))&&g.push(f)})),b.attr("class",g.join(" "))}return{syncCssClasses:b}}),b.define("select2/compat/containerCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("containerCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptContainerCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("containerCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/dropdownCss",["jquery","./utils"],function(a,b){function c(a){return null}function d(){}return d.prototype.render=function(d){var e=d.call(this),f=this.options.get("dropdownCssClass")||"";a.isFunction(f)&&(f=f(this.$element));var g=this.options.get("adaptDropdownCssClass");if(g=g||c,-1!==f.indexOf(":all:")){f=f.replace(":all:","");var h=g;g=function(a){var b=h(a);return null!=b?b+" "+a:a}}var i=this.options.get("dropdownCss")||{};return a.isFunction(i)&&(i=i(this.$element)),b.syncCssClasses(e,this.$element,g),e.css(i),e.addClass(f),e},d}),b.define("select2/compat/initSelection",["jquery"],function(a){function b(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),this.initSelection=c.get("initSelection"),this._isInitialized=!1,a.call(this,b,c)}return b.prototype.current=function(b,c){var d=this;if(this._isInitialized)return void b.call(this,c);this.initSelection.call(null,this.$element,function(b){d._isInitialized=!0,a.isArray(b)||(b=[b]),c(b)})},b}),b.define("select2/compat/inputData",["jquery"],function(a){function b(a,b,c){this._currentData=[],this._valueSeparator=c.get("valueSeparator")||",","hidden"===b.prop("type")&&c.get("debug")&&console&&console.warn&&console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),a.call(this,b,c)}return b.prototype.current=function(b,c){function d(b,c){var e=[];return b.selected||-1!==a.inArray(b.id,c)?(b.selected=!0,e.push(b)):b.selected=!1,b.children&&e.push.apply(e,d(b.children,c)),e}for(var e=[],f=0;f<this._currentData.length;f++){var g=this._currentData[f];e.push.apply(e,d(g,this.$element.val().split(this._valueSeparator)))}c(e)},b.prototype.select=function(b,c){if(this.options.get("multiple")){var d=this.$element.val();d+=this._valueSeparator+c.id,this.$element.val(d),this.$element.trigger("change")}else this.current(function(b){a.map(b,function(a){a.selected=!1})}),this.$element.val(c.id),this.$element.trigger("change")},b.prototype.unselect=function(a,b){var c=this;b.selected=!1,this.current(function(a){for(var d=[],e=0;e<a.length;e++){var f=a[e];b.id!=f.id&&d.push(f.id)}c.$element.val(d.join(c._valueSeparator)),c.$element.trigger("change")})},b.prototype.query=function(a,b,c){for(var d=[],e=0;e<this._currentData.length;e++){var f=this._currentData[e],g=this.matches(b,f);null!==g&&d.push(g)}c({results:d})},b.prototype.addOptions=function(b,c){var d=a.map(c,function(b){return a.data(b[0],"data")});this._currentData.push.apply(this._currentData,d)},b}),b.define("select2/compat/matcher",["jquery"],function(a){function b(b){function c(c,d){var e=a.extend(!0,{},d);if(null==c.term||""===a.trim(c.term))return e;if(d.children){for(var f=d.children.length-1;f>=0;f--){var g=d.children[f];b(c.term,g.text,g)||e.children.splice(f,1)}if(e.children.length>0)return e}return b(c.term,d.text,d)?e:null}return c}return b}),b.define("select2/compat/query",[],function(){function a(a,b,c){c.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),a.call(this,b,c)}return a.prototype.query=function(a,b,c){b.callback=c,this.options.get("query").call(null,b)},a}),b.define("select2/dropdown/attachContainer",[],function(){function a(a,b,c){a.call(this,b,c)}return a.prototype.position=function(a,b,c){c.find(".dropdown-wrapper").append(b),b.addClass("select2-dropdown--below"),c.addClass("select2-container--below")},a}),b.define("select2/dropdown/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$dropdown.on(d.join(" "),function(a){a.stopPropagation()})},a}),b.define("select2/selection/stopPropagation",[],function(){function a(){}return a.prototype.bind=function(a,b,c){a.call(this,b,c);var d=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$selection.on(d.join(" "),function(a){a.stopPropagation()})},a}),function(c){"function"==typeof b.define&&b.define.amd?b.define("jquery-mousewheel",["jquery"],c):"object"==typeof exports?module.exports=c:c(a)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||n<f)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120==0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
/*!
 * Select2 4.0.5
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        }
        else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
} (function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name) {
            name = name.split('/');
            lastIndex = name.length - 1;

            // If wanting node ID compatibility, strip .js from end
            // of IDs. Have to do this here, and not in nameToUrl
            // because node allows either .js or non .js to map
            // to same file.
            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
            }

            // Starts with a '.' so need the baseName
            if (name[0].charAt(0) === '.' && baseParts) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that 'directory' and not name of the baseName's
                //module. For instance, baseName of 'one/two/three', maps to
                //'one/two/three.js', but we want the directory, 'one/two' for
                //this normalization.
                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                name = normalizedBaseParts.concat(name);
            }

            //start trimDots
            for (i = 0; i < name.length; i++) {
                part = name[i];
                if (part === '.') {
                    name.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        name.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
            //end trimDots

            name = name.join('/');
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    //Creates a parts array for a relName where first part is plugin ID,
    //second part is resource ID. Assumes relName has already been normalized.
    function makeRelParts(relName) {
        return relName ? splitPrefix(relName) : [];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relParts) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0],
            relResourceName = relParts[1];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relResourceName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relResourceName));
            } else {
                name = normalize(name, relResourceName);
            }
        } else {
            name = normalize(name, relResourceName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i, relParts,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;
        relParts = makeRelParts(relName);

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relParts);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, makeRelParts(callback)).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
        var superMethod = superMethods[m];

        DecoratedClass.prototype[superMethod] =
          SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes) {
    // jQuery 1.7.x does not support $.fn.append() with an array
    // Fall back to a jQuery object collection using $.fn.add()
    if ($.fn.jquery.substr(0, 3) === '1.7') {
      var $jqNodes = $();

      $.map($nodes, function (node) {
        $jqNodes = $jqNodes.add(node);
      });

      $nodes = $jqNodes;
    }

    $element.append($nodes);
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="tree"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="treeitem" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results__option[aria-selected]');

    var $selected = $options.filter('[aria-selected=true]');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = $.map(selected, function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option[aria-selected]');

      $options.each(function () {
        var $option = $(this);

        var item = $.data(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && $.inArray(id, selectedIds) > -1)) {
          $option.attr('aria-selected', 'true');
        } else {
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.className = 'select2-results__option';

    var attrs = {
      'role': 'treeitem',
      'aria-selected': 'false'
    };

    if (data.disabled) {
      delete attrs['aria-selected'];
      attrs['aria-disabled'] = 'true';
    }

    if (data.id == null) {
      delete attrs['aria-selected'];
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;
      delete attrs['aria-selected'];
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      var $label = $(label);
      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    $.data(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
      self.highlightFirstItem();
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = $highlighted.data('data');

      if ($highlighted.attr('aria-selected') == 'true') {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      // If we are already at te top, don't move further
      if (currentIndex === 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element.addClass('select2-results__option--highlighted');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
      function (evt) {
      var $this = $(this);

      var data = $this.data('data');

      if ($this.attr('aria-selected') === 'true') {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
      function (evt) {
      var data = $(this).data('data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('[aria-selected]');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (this.$element.data('old-tabindex') != null) {
      this._tabindex = this.$element.data('old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-container';
    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.focus();

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {
    var self = this;

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        var $this = $(this);

        if (this == $select[0]) {
          return;
        }

        var $element = $this.data('element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered').attr('id', id);
    this.$selection.attr('aria-labelledby', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.focus();
      }
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });
  };

  SingleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);
    $rendered.prop('title', selection.title || selection.text);
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.options.get('disabled')) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = $selection.data('data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<span class="select2-selection__choice__remove" role="presentation">' +
          '&times;' +
        '</span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      $selection.append(formatted);
      $selection.prop('title', selection.title || selection.text);

      $selection.data('data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    Utils.appendMany($rendered, $selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
  '../utils'
], function (Utils) {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder.addClass('select2-selection__placeholder')
                .removeClass('select2-selection__choice');

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys'
], function ($, KEYS) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.options.get('disabled')) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = $clear.data('data');

    for (var d = 0; d < data.length; d++) {
      var unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        return;
      }
    }

    this.$element.val(this.placeholder.id).trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var $remove = $(
      '<span class="select2-selection__clear">' +
        '&times;' +
      '</span>'
    );
    $remove.data('data', data);

    this.$selection.find('.select2-selection__rendered').prepend($remove);
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
      '</li>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      self.$search.attr('aria-activedescendant', params.id);
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$searchContainer
          .prev('.select2-selection__choice');

        if ($previousChoice.length > 0) {
          var item = $previousChoice.data('data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.$selection.find('.select2-selection__rendered')
                   .append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.focus();
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '';

    if (this.$search.attr('placeholder') !== '') {
      width = this.$selection.find('.select2-selection__rendered').innerWidth();
    } else {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting'
    ];

    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var data = [];
    var self = this;

    this.$element.find(':selected').each(function () {
      var $option = $(this);

      var option = self.item($option);

      data.push(option);
    });

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if ($(data.element).is('option')) {
      data.element.selected = true;

      this.$element.trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if ($.inArray(id, val) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if ($(data.element).is('option')) {
      data.element.selected = false;

      this.$element.trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && $.inArray(id, val) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      $.removeData(this, 'data');
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      var $option = $(this);

      if (!$option.is('option') && !$option.is('optgroup')) {
        return;
      }

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    Utils.appendMany(this.$element, $options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id !== undefined) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var $option = $(option);

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    $.data(option, 'data', normalizedData);

    return $option;
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = $.data($option[0], 'data');

    if (data != null) {
      return data;
    }

    if ($option.is('option')) {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if ($option.is('optgroup')) {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    $.data($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (!$.isPlainObject(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    var data = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);

    this.addOptions(this.convertToOptions(data));
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if ($.inArray(item.id, existingIds) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        Utils.appendMany($option, $children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if ($.isFunction(this._request.abort)) {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !$.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ($request.status && $request.status === '0') {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if ($.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var optionText = (option.text || '').toUpperCase();
        var paramsTerm = (params.term || '').toUpperCase();

        var checkText = optionText === paramsTerm;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', true);

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    var term = $.trim(params.term);

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var tag = this._lastTag;

    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select2-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.focus();
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if ($.inArray(termChar, separators) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }
        decorated.call(self, params, callback);
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implmented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="textbox" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);

      self.$search.focus();

      window.setTimeout(function () {
        self.$search.focus();
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);

      self.$search.val('');
    });

    container.on('focus', function () {
      if (!container.isOpen()) {
        self.$search.focus();
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer.removeClass('select2-search--hide');
        } else {
          self.$searchContainer.addClass('select2-search--hide');
        }
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', function () {
      var isLoadMoreVisible = $.contains(
        document.documentElement,
        self.$loadingMore[0]
      );

      if (self.loading || !isLoadMoreVisible) {
        return;
      }

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var loadingMoreOffset = self.$loadingMore.offset().top +
        self.$loadingMore.outerHeight(false);

      if (currentOffset + 50 >= loadingMoreOffset) {
        self.loadMore();
      }
    });
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="treeitem" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = options.get('dropdownParent') || $(document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var setupResultsEvents = false;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      if (!setupResultsEvents) {
        setupResultsEvents = true;

        container.on('results:all', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });

        container.on('results:append', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
      }
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown.removeClass('select2');
    $dropdown.addClass('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      $(this).data('select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = $(this).data('select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calciulating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positoned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = $offsetParent.offset();

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[

], function () {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = $highlightedResults.data('data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && originalEvent.ctrlKey) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
], function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }

      if (options.query != null) {
        var Query = require(options.amdBase + 'compat/query');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        );
      }

      if (options.initSelection != null) {
        var InitSelection = require(options.amdBase + 'compat/initSelection');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ) {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ) {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    if (typeof options.language === 'string') {
      // Check if the language is specified with a region
      if (options.language.indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = options.language.split('-');
        var baseLanguage = languageParts[0];

        options.language = [options.language, baseLanguage];
      } else {
        options.language = [options.language];
      }
    }

    if ($.isArray(options.language)) {
      var languages = new Translation();
      options.language.push('en');

      var languageNames = options.language;

      for (var l = 0; l < languageNames.length; l++) {
        var name = languageNames[l];
        var language = {};

        try {
          // Try to load it with the original name
          language = Translation.loadPath(name);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            name = this.defaults.amdLanguageBase + name;
            language = Translation.loadPath(name);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files.
            if (options.debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + name + '" could not be ' +
                'automatically loaded. A fallback will be used instead.'
              );
            }

            continue;
          }
        }

        languages.extend(language);
      }

      options.translations = languages;
    } else {
      var baseTranslation = Translation.loadPath(
        this.defaults.amdLanguageBase + 'en'
      );
      var customTranslation = new Translation(options.language);

      customTranslation.extend(baseTranslation);

      options.translations = customTranslation;
    }

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if ($.trim(params.term) === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: EnglishTranslation,
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
], function (require, $, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    this.options = Defaults.apply(this.options);

    if ($element && $element.is('input')) {
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      );
    }
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.language == null) {
      if ($e.prop('lang')) {
        this.options.language = $e.prop('lang').toLowerCase();
      } else if ($e.closest('[lang]').prop('lang')) {
        this.options.language = $e.closest('[lang]').prop('lang');
      }
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if ($e.data('select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      $e.data('data', $e.data('select2Tags'));
      $e.data('tags', true);
    }

    if ($e.data('ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', $e.data('ajaxUrl'));
      $e.data('ajax--url', $e.data('ajaxUrl'));
    }

    var dataset = {};

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, $e.data());
    } else {
      dataset = $e.data();
    }

    var data = $.extend(true, {}, dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if ($.inArray(key, excludedData) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if ($element.data('select2') != null) {
      $element.data('select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    $element.data('old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element.addClass('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    if (this.$element[0].attachEvent) {
      this.$element[0].attachEvent('onpropertychange', this._syncA);
    }

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null) {
      this._observer = new observer(function (mutations) {
        $.each(mutations, self._syncA);
        $.each(mutations, self._syncS);
      });
      this._observer.observe(this.$element[0], {
        attributes: true,
        childList: true,
        subtree: false
      });
    } else if (this.$element[0].addEventListener) {
      this.$element[0].addEventListener(
        'DOMAttrModified',
        self._syncA,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeInserted',
        self._syncS,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeRemoved',
        self._syncS,
        false
      );
    }
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if ($.inArray(name, nonRelayEvents) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container.addClass('select2-container--open');
    });

    this.on('close', function () {
      self.$container.removeClass('select2-container--open');
    });

    this.on('enable', function () {
      self.$container.removeClass('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container.addClass('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container.removeClass('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || key === KEYS.TAB ||
            (key === KEYS.UP && evt.altKey)) {
          self.close();

          evt.preventDefault();
        } else if (key === KEYS.ENTER) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.options.get('disabled')) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._syncSubtree = function (evt, mutations) {
    var changed = false;
    var self = this;

    // Ignore any mutation events raised for elements that aren't options or
    // optgroups. This handles the case when the select element is destroyed
    if (
      evt && evt.target && (
        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
      )
    ) {
      return;
    }

    if (!mutations) {
      // If mutation events aren't supported, then we can only assume that the
      // change affected the selections
      changed = true;
    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          changed = true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      changed = true;
    }

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.options.get('disabled')) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function () {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', {});
  };

  Select2.prototype.isOpen = function () {
    return this.$container.hasClass('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container.hasClass('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container.addClass('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if ($.isArray(newVal)) {
      newVal = $.map(newVal, function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('change');
  };

  Select2.prototype.destroy = function () {
    this.$container.remove();

    if (this.$element[0].detachEvent) {
      this.$element[0].detachEvent('onpropertychange', this._syncA);
    }

    if (this._observer != null) {
      this._observer.disconnect();
      this._observer = null;
    } else if (this.$element[0].removeEventListener) {
      this.$element[0]
        .removeEventListener('DOMAttrModified', this._syncA, false);
      this.$element[0]
        .removeEventListener('DOMNodeInserted', this._syncS, false);
      this.$element[0]
        .removeEventListener('DOMNodeRemoved', this._syncS, false);
    }

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

    this.$element.removeClass('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container.addClass('select2-container--' + this.options.get('theme'));

    $container.data('element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('jquery-mousewheel',[
  'jquery'
], function ($) {
  // Used to shim jQuery.mousewheel for non-full builds.
  return $;
});

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults'
], function ($, _, Select2, Defaults) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = $(this).data('select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));

// Write your JavaScript code.