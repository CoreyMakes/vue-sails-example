webpackJsonp([13],{185:function(t,e,s){"use strict";var r=s(39),n=s.n(r),a=s(20),o=s.n(a),c=s(21),i=s.n(c),u=s(30);e.a={created:function(){var t=this;return i()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getUser");case 2:return e.next=4,t.$store.dispatch("getShopProducts",t.currentPage);case 4:case"end":return e.stop()}},e,t)}))()},data:function(){return{currentPage:1}},watch:{currentPage:function(){this.$store.dispatch("getShopProducts",this.currentPage)}},computed:{products:{get:function(){return this.$store.state.Products.products.products}},amountOfProducts:{get:function(){return this.$store.state.Products.products.amountOfProducts}},user:{get:function(){return this.$store.state.User.user}}},methods:n()({},Object(u.c)({pushToBasket:"PUSH_TO_BASKET"}))}},290:function(t,e,s){var r=s(8)(s(291),s(292),null,null);t.exports=r.exports},291:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(185);e.default={mixins:[r.a]}},292:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-alert",{attrs:{variant:"info",show:""}},[t._v("\n    "+t._s(t.t("shopindex.mixin.alert.first"))+"\n  ")]),t._v(" "),s("div",{staticClass:"row"},t._l(t.products,function(e){return s("div",{staticClass:"col-4"},[s("b-card",{key:e.id,staticClass:"mb-4",attrs:{header:e.title,"show-footer":""}},[s("p",[t._v(t._s(e.description))]),t._v(" "),s("b-button",{attrs:{disabled:e.user.name===t.user.name,variant:"outline-success",size:"sm"},on:{click:function(s){t.pushToBasket(e)}}},[t._v(t._s(t.t("shopindex.mixin.button.first"))+"\n        ")]),t._v(" "),s("small",{staticClass:"text-muted",attrs:{slot:"footer"},slot:"footer"},[s("span",{staticClass:"float-left"},[t._v("$"+t._s(e.price))]),t._v(" "),s("span",{staticClass:"float-right"},[t._v(t._s(t.t("shopindex.mixin.span.first"))+" "+t._s(e.user.name))])])],1)],1)})),t._v(" "),s("b-pagination",{attrs:{size:"sm","total-rows":t.amountOfProducts,"per-page":6},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},staticRenderFns:[]}}});