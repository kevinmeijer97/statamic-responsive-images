(()=>{"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t,n,s,r,i,a,l){var o,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),s&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(o=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=o):r&&(o=l?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),o)if(u.functional){u._injectStyles=o;var c=u.render;u.render=function(e,t){return o.call(t),c(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,o):[o]}return{exports:e,options:u}}const s=n({mixins:[Fieldtype],computed:{fields:function(){return _.chain(this.meta.fields).map((function(n){return function(n){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?e(Object(r),!0).forEach((function(e){t(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}({handle:n.handle},n.field)})).values().value()}},methods:{updateKey:function(e,t){var n=this.value;Vue.set(n,e,t),this.update(n)},getValue:function(e){return"assets"===e.type?this.value[e.handle]||[]:this.value[e.handle]}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"publish-fields"},e._l(e.fields,(function(t){return n("publish-field",{key:t.handle,staticClass:"form-group bg-white border-t border-b",class:"section"===t.type?"mt-px -mb-px":"",attrs:{config:t,value:e.getValue(t),meta:e.meta.meta[t.handle],"read-only":e.isReadOnly},on:{"meta-updated":function(n){return e.metaUpdated(t.handle,n)},focus:function(t){return e.$emit("focus")},blur:function(t){return e.$emit("blur")},input:function(n){return e.updateKey(t.handle,n)}}})})),1)}),[],!1,null,null,null).exports;const r=n({props:{asset:Object,square:{default:!1,type:Boolean}},computed:{showSvg:function(){return"svg"===this.asset.extension}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[e.showSvg?n("div",{staticClass:"rounded flex items-center justify-center asset-thumbnail h-full w-full"},[n("img",{staticClass:"w-full h-full max-w-full max-h-full mx-auto",attrs:{src:e.asset.thumbnail}})]):[e.asset.is_image?n("img",{staticClass:"asset-thumbnail rounded max-h-full max-w-full mx-auto rounded",class:{"w-8 h-8 fit-cover":e.square},attrs:{src:e.asset.thumbnail,loading:"lazy"}}):n("file-icon",{staticClass:"p-px asset-thumbnail rounded w-full h-full",attrs:{extension:e.asset.extension}})]],2)}),[],!1,null,null,null).exports;const i=n({mixins:[IndexFieldtype],components:{AssetThumbnail:r},computed:{assets:function(){return this.value?this.value.reverse():[]}}},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-2xs flex"},e._l(e.assets,(function(e){return n("a",{key:e.id,attrs:{href:e.url,target:"_blank",title:e.breakpoint}},[n("asset-thumbnail",{staticClass:"h-8 max-w-3xs -my-sm",attrs:{asset:e}})],1)})),0)}),[],!1,null,null,null).exports;Statamic.booting((function(){Statamic.$components.register("responsive-fieldtype",s),Statamic.$components.register("responsive-fieldtype-index",i)}))})();