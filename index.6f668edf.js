!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequiref577;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,i.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},t.parcelRequiref577=i),i("fYmpR");const a=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];function o(t,e){let n=[];return t.map((t=>{for(const e of a)t===e.id&&n.push(e.name)})),n.length>2&&n.splice(2,5,"Other"),n.join(", ")}function r(t){const{results:e}=t;return e.map((({poster_path:t,title:e,release_date:n,id:i,genre_ids:a})=>`<li class="movie-card">\n      <img src="https://image.tmdb.org/t/p/w500${t}" alt="${e}" class="movie-card-img" data-id="${i}" loading="lazy"/>\n      <div class="movie-info">\n      <p class="movie-title">${e}</p>\n      <p class="film-cards__title movie-genres">${o(a)} | ${n.slice(0,4)}</p> \n      </div>\n    </li>`)).join("")}function s(t,e){e.innerHTML=r(t)}var l=i("dIxxU").default;const c="api_key=341a3443d9168179889e844c5b12f774";async function u(t,e){const n=`&query=${t}&page=${e}&language=en-US`;return await l.get(`https://api.themoviedb.org/3/search/movie?${c}${n}`).then((t=>t.data))}async function d(t){const e=`&page=${t}`;return await l.get(`https://api.themoviedb.org/3/trending/movie/week?${c}${e}`).then((t=>t.data))}var f=i("kvC6y");!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"function"==typeof define&&define.cmd?define((function(e,n,i){t(e("jquery"))})):t(jQuery)}((function(t){"use strict";var e=function(n,i){this.$target=n,this.options=t.extend({},e.DEFAULTS,this.$target.data("pagination"),"object"==typeof i&&i),this.init()};e.VERSION="1.4.0",e.DEFAULTS={total:1,current:1,length:10,size:2,prev:"&lt;",next:"&gt;",click:function(t){}},e.prototype={init:function(){if(this.options.total<1&&(this.options.total=1),this.options.current<1&&(this.options.current=1),this.options.length<1&&(this.options.length=1),this.options.current>Math.ceil(this.options.total/this.options.length)&&(this.options.current=Math.ceil(this.options.total/this.options.length)),this.options.size<1&&(this.options.size=1),"function"==typeof this.options.ajax){var t=this;this.options.ajax({current:t.options.current,length:t.options.length,total:t.options.total},(function(e){return t.refresh(e)}),t.$target)}else this.render();this.onClick()},render:function(){var t=this.options,e=this.$target;e.empty(),e.append('<li><a herf="javascript:void(0)" data-page="prev">'+t.prev+"</a></li>");var n=this.getPages();n.start>1&&(e.append('<li><a herf="javascript:void(0)" data-page="1">1</a></li>'),e.append("<li><span>...</span></li>"));for(var i=n.start;i<=n.end;i++)e.append('<li><a herf="javascript:void(0)" data-page="'+i+'">'+i+"</a></li>");n.end<Math.ceil(t.total/t.length)&&(e.append("<li><span>...</span></li>"),e.append('<li><a herf="javascript:void(0)" data-page="'+Math.ceil(t.total/t.length)+'">'+Math.ceil(t.total/t.length)+"</a></li>")),e.append('<li><a herf="javascript:void(0)" data-page="next">'+t.next+"</a></li>"),e.find('li>a[data-page="'+t.current+'"]').parent().addClass("active"),t.current<=1&&e.find('li>a[data-page="prev"]').parent().addClass("disabled"),t.current>=Math.ceil(t.total/t.length)&&e.find('li>a[data-page="next"]').parent().addClass("disabled")},getPages:function(){this.$target;var t=this.options,e=t.current-t.size,n=t.current+t.size;return t.current>=Math.ceil(t.total/t.length)-t.size&&(e-=t.current-Math.ceil(t.total/t.length)+t.size),t.current<=t.size&&(n+=t.size-t.current+1),e<1&&(e=1),n>Math.ceil(t.total/t.length)&&(n=Math.ceil(t.total/t.length)),{start:e,end:n}},onClick:function(){var e=this.$target,n=this.options,i=this;e.off("click"),e.on("click",">li>a[data-page]",(function(a){if(!t(this).parent().hasClass("disabled")&&!t(this).parent().hasClass("active")){var o=t(this).data("page");switch(o){case"prev":n.current>1&&n.current--;break;case"next":n.current<Math.ceil(n.total)&&n.current++;break;default:o=parseInt(o),isNaN(o)||(n.current=parseInt(o))}var r={current:n.current,length:n.length,total:n.total};"function"==typeof n.ajax?n.ajax(r,(function(t){return i.refresh(t)}),e):i.render(),n.click(r,e)}}))},refresh:function(t){"object"==typeof t&&(t.total&&(this.options.total=t.total),t.length&&(this.options.length=t.length)),this.render()}},t.fn.pagination=function(n){return this.each((function(){t(this).data("pagination",new e(t(this),n))})),this}}));const p=document.querySelector(".gallery");let h=1,g=null;(0,f.loaderShow)(),async function t(){p.innerHTML="";try{const t=await d(h);g=t.total_results,s(t,p)}catch(t){console.log(t)}$("#pagination").pagination({total:g,current:h,length:20,size:2,prev:"&lt;",next:"&gt;",click:function(e){h=e.current,(0,f.loaderShow)(),t(),setTimeout(f.loaderHide,250)}})}(),setTimeout((0,f.loaderHide)(),250);f=i("kvC6y");const v=document.querySelector("form"),m=document.querySelector(".gallery"),y=document.querySelector(".form__text");let b=1,w=null,j="";async function x(t){try{const e=await u(t,b);if(w=e.total_results,0===e.results.length)return y.classList.remove("hidden"),void setTimeout((()=>{y.classList.add("hidden")}),3e3);s(e,m)}catch(t){console.log(t)}$("#pagination").pagination({total:w,current:b,length:20,size:2,prev:"&lt;",next:"&gt;",click:async function(t){b=t.current,await x(j)}})}v.addEventListener("submit",(async function(t){if(t.preventDefault(),b=1,j=t.target.elements.input.value.trim(),console.log(j),!j)return y.classList.remove("hidden"),void setTimeout((()=>{y.classList.add("hidden")}),3e3);(0,f.loaderShow)(),x(j),setTimeout(f.loaderHide,250)})),i("1gFVY"),i("kvC6y");var T={},M="Expected a function",k=/^\s+|\s+$/g,L=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,C=/^0o[0-7]+$/i,z=parseInt,E="object"==typeof t&&t&&t.Object===Object&&t,O="object"==typeof self&&self&&self.Object===Object&&self,_=E||O||Function("return this")(),q=Object.prototype.toString,N=Math.max,D=Math.min,F=function(){return _.Date.now()};function H(t,e,n){var i,a,o,r,s,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof t)throw new TypeError(M);function p(e){var n=i,o=a;return i=a=void 0,c=e,r=t.apply(o,n)}function h(t){return c=t,s=setTimeout(v,e),u?p(t):r}function g(t){var n=t-l;return void 0===l||n>=e||n<0||d&&t-c>=o}function v(){var t=F();if(g(t))return m(t);s=setTimeout(v,function(t){var n=e-(t-l);return d?D(n,o-(t-c)):n}(t))}function m(t){return s=void 0,f&&i?p(t):(i=a=void 0,r)}function y(){var t=F(),n=g(t);if(i=arguments,a=this,l=t,n){if(void 0===s)return h(l);if(d)return s=setTimeout(v,e),p(l)}return void 0===s&&(s=setTimeout(v,e)),r}return e=U(e)||0,I(n)&&(u=!!n.leading,o=(d="maxWait"in n)?N(U(n.maxWait)||0,e):o,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,i=l=a=s=void 0},y.flush=function(){return void 0===s?r:m(F())},y}function I(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function U(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==q.call(t)}(t))return NaN;if(I(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=I(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(k,"");var n=S.test(t);return n||C.test(t)?z(t.slice(2),n?2:8):L.test(t)?NaN:+t}T=function(t,e,n){var i=!0,a=!0;if("function"!=typeof t)throw new TypeError(M);return I(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),H(t,e,{leading:i,maxWait:e,trailing:a})};const W=document.querySelector(".button-back");function A(t){window.scrollTo({top:0,left:0,behavior:"smooth"})}document.addEventListener("scroll",T((function(t){window.scrollY>=700?(W.classList.remove("hidden"),W.addEventListener("click",A)):window.scrollY<=700&&(W.classList.add("hidden"),W.removeEventListener("click",A))}),400)),i("dItWh"),i("5YNLl")}();
//# sourceMappingURL=index.6f668edf.js.map
