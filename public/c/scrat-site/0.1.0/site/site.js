define("scrat-site/0.1.0/site/site.js",function(e,t){"use strict";var i,n=e("extend"),a=e("each"),s=e("menu"),r=e("footer"),o={404:"pages/404",index:"pages/index"};a(s.views,function(e){o[e.name]=e.module||"pages/"+e.name}),t.register=function(e,t){switch(typeof e){case"string":o[e]=t;break;case"object":n(o,e)}},t.has=function(e){return o.hasOwnProperty(e)},t.load=function(t,n){var r=t.params.page,c=t.queries.offset;r=this.has(r)?r:"404";var d=document.getElementById("site-views"),l=d.querySelectorAll("[data-page]");a(l,function(e){var t=e.getAttribute("data-page");t!==i&&(e.innerHTML="");var n=" "+e.className;e.className=n.replace(/\s+active\b/,"").trim()}),s.active(i=r),e.async(o[r],function(t){if(r===i){var s=d.querySelector('[data-page="'+r+'"]');if(s){if(!s.innerHTML){var l;l="function"==typeof t.getMarkdown?'<div class="site-view-inner markdown-body">'+t.getMarkdown()+"</div>":t.getHTML(),s.innerHTML=l}if(s.className=s.className+" active","undefined"!=typeof c){var v=s.querySelectorAll("h2");v&&v[c]&&v[c].scrollIntoView()}}}if(n){var u=[];a(o,function(e,t){r!==t&&u.push(e)}),e.async(u)}})},t.title=function(e){document.title=e},t.render=function(e){var t=Handlebars.template(function(e,t,i,n,a){function s(e,t){var i,n="";return n+='\n            <div class="site-view" data-page="'+d((i=null==t||t===!1?t:t.key,typeof i===c?i.apply(e):i))+'"></div>\n            '}this.compilerInfo=[4,">= 1.0.0"],i=this.merge(i,e.helpers),a=a||{};var r,o="",c="function",d=this.escapeExpression,l=this;return o+='<div class="site transition-all">\n    <div class="site-menu transition-all" id="site-menu"></div>\n    <div class="site-content transition-all">\n        <div id="site-views" class="site-views">\n            ',r=i.each.call(t,t&&t.views,{hash:{},inverse:l.noop,fn:l.program(1,s,a),data:a}),(r||0===r)&&(o+=r),o+='\n        </div>\n    </div>\n    <div id="site-footer" class="site-footer transition-all"></div>\n</div>'});e.innerHTML=t({views:o}),s.render(document.getElementById("site-menu")),r.render(document.getElementById("site-footer"))}});