(window.webpackJsonp=window.webpackJsonp||[]).push([[14,4],{450:function(t,e,o){var content=o(458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("b25a3da8",content,!0,{sourceMap:!1})},457:function(t,e,o){"use strict";o(450)},458:function(t,e,o){var r=o(17)(!1);r.push([t.i,".floatOnHover[data-v-23830551]{cursor:pointer;transition:.5s ease}.blogCard[data-v-23830551]{color:#fff!important}.floatOnHover[data-v-23830551]:hover{transform:scale(1.05)}.backgroundImageCard[data-v-23830551]{border-radius:20px;max-width:500px;max-height:350px}.blogTitle[data-v-23830551]{color:#fff!important;font-size:24px;font-weight:600}.blogUser[data-v-23830551]{font-size:16px;font-weight:400}.blogDesc[data-v-23830551],.blogUser[data-v-23830551]{color:#fff!important}.blogDesc[data-v-23830551]{font-size:20px;font-weight:200}@media only screen and (max-width:768px){.backgroundImageCard[data-v-23830551]{max-width:350px}}",""]),t.exports=r},471:function(t,e,o){var content=o(487);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("7083e87f",content,!0,{sourceMap:!1})},483:function(t,e,o){"use strict";o.r(e);var r={name:"BlogArticleCard",props:{blog:Object},methods:{ViewBlog:function(){this.$router.push(this.blog.path)}}},n=(o(457),o(67)),l=o(129),c=o.n(l),d=o(193),f=o(83),v=o(160),m=o(122),h=o(197),x=o(130),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mx-10 mb-5 blogCard"},[o("v-card",{staticClass:"mx-auto backgroundImageCard",style:{aspectRatio:"1",width:"500px",height:"250px",backgroundPosition:"cover",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:" center",backgroundImage:"url("+t.blog.image+")"},attrs:{outlined:"",ripple:"",hover:""},on:{click:t.ViewBlog}},[o("v-card-title",[o("v-list-item",{staticClass:"grow"},[o("v-list-item-avatar",{attrs:{color:"grey darken-3"}},[o("v-img",{staticClass:"elevation-6",attrs:{alt:"",src:"https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"}})],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{staticClass:"blogUser"},[t._v(t._s(t.blog.author))])],1)],1)],1),t._v(" "),o("v-card-text",{staticClass:"blogDesc px-10"},[t._v("\n      "+t._s(t.blog.description)+"\n    ")]),t._v(" "),o("v-card-actions",[o("v-list-item",{staticClass:"grow"},[o("v-list-item-content",[o("v-card-text",{staticClass:"blogTitle"},[t._v(" "+t._s(t.blog.title)+" ")])],1)],1)],1)],1)],1)}),[],!1,null,"23830551",null);e.default=component.exports;c()(component,{VCard:d.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VImg:v.a,VListItem:m.a,VListItemAvatar:h.a,VListItemContent:x.a,VListItemTitle:x.b})},486:function(t,e,o){"use strict";o(471)},487:function(t,e,o){var r=o(17)(!1);r.push([t.i,".heading-event[data-v-fb312918]{font-size:96px;font-weight:300;margin-bottom:50px!important;margin-top:50px!important}.ImgFilter[data-v-fb312918]{filter:brightness(500)}@media only screen and (max-width:768px){.heading-event[data-v-fb312918]{font-size:50px;font-weight:500;margin-bottom:25px!important;margin-top:25px!important}}",""]),t.exports=r},548:function(t,e,o){"use strict";o.r(e);var r={name:"blog",data:function(){return{Blogs:[]}},methods:{},mounted:function(){var t=this;this.$content("blogs").fetch().then((function(e){t.Blogs=e,console.log(e)}))}},n=(o(486),o(67)),l=o(129),c=o.n(l),d=o(83),f=o(434),v=o(435),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{attrs:{justify:"center","no-gutters":""}},[o("v-card-title",{staticClass:"heading-event"},[t._v("Blogs")])],1),t._v(" "),o("v-row",{staticClass:"py-6",attrs:{"no-gutters":"",justify:"center"}},t._l(t.Blogs,(function(t){return o("BlogArticleCard",{key:t.id,attrs:{blog:t}})})),1)],1)}),[],!1,null,"fb312918",null);e.default=component.exports;c()(component,{BlogArticleCard:o(483).default}),c()(component,{VCardTitle:d.d,VContainer:f.a,VRow:v.a})}}]);