"use strict";(self.webpackChunkfreshCart=self.webpackChunkfreshCart||[]).push([[95],{2095:(T,C,o)=>{o.r(C),o.d(C,{ProductsComponent:()=>G});var c=o(6814),u=o(1120),h=o(2012),e=o(4769);function d(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.previous())})("click",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.previous())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&a){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function m(a,i){if(1&a&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&a){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function _(a,i){if(1&a&&(e.TgZ(0,"li",9),e.YNc(1,d,4,2,"a",10),e.YNc(2,m,4,2,"span",11),e.qZA()),2&a){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isFirstPage()),e.xp6(1),e.Q6J("ngIf",1<t.getCurrent()),e.xp6(1),e.Q6J("ngIf",t.isFirstPage())}}function g(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t);const r=e.oxw().$implicit;e.oxw(2);const s=e.MAs(1);return e.KtG(s.setCurrent(r.value))})("click",function(){e.CHM(t);const r=e.oxw().$implicit;e.oxw(2);const s=e.MAs(1);return e.KtG(s.setCurrent(r.value))}),e.TgZ(1,"span",13),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()}if(2&a){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(2),e.hij("",n.screenReaderPageLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(5,2,t.label,""))}}function v(a,i){if(1&a&&(e.ynx(0),e.TgZ(1,"span",16)(2,"span",13),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.BQk()),2&a){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(3),e.hij("",n.screenReaderCurrentLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(6,2,t.label,""))}}function Z(a,i){if(1&a&&(e.TgZ(0,"li"),e.YNc(1,g,6,5,"a",10),e.YNc(2,v,7,5,"ng-container",15),e.qZA()),2&a){const t=i.$implicit;e.oxw(2);const n=e.MAs(1);e.ekj("current",n.getCurrent()===t.value)("ellipsis","..."===t.label),e.xp6(1),e.Q6J("ngIf",n.getCurrent()!==t.value),e.xp6(1),e.Q6J("ngIf",n.getCurrent()===t.value)}}function D(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.next())})("click",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.next())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&a){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function E(a,i){if(1&a&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&a){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function U(a,i){if(1&a&&(e.TgZ(0,"li",17),e.YNc(1,D,4,2,"a",10),e.YNc(2,E,4,2,"span",11),e.qZA()),2&a){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isLastPage()),e.xp6(1),e.Q6J("ngIf",!t.isLastPage()),e.xp6(1),e.Q6J("ngIf",t.isLastPage())}}function O(a,i){if(1&a&&(e.TgZ(0,"ul",4),e.YNc(1,_,3,4,"li",5),e.TgZ(2,"li",6),e._uU(3),e.qZA(),e.YNc(4,Z,3,6,"li",7),e.YNc(5,U,3,4,"li",8),e.qZA()),2&a){const t=e.oxw(),n=e.MAs(1);e.ekj("responsive",t.responsive),e.xp6(1),e.Q6J("ngIf",t.directionLinks),e.xp6(2),e.AsE(" ",n.getCurrent()," / ",n.getLastPage()," "),e.xp6(1),e.Q6J("ngForOf",n.pages)("ngForTrackBy",t.trackByIndex),e.xp6(1),e.Q6J("ngIf",t.directionLinks)}}class y{constructor(){this.change=new e.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(i){return null==i.id&&(i.id=this.DEFAULT_ID),this.instances[i.id]?this.updateInstance(i):(this.instances[i.id]=i,!0)}updateInstance(i){let t=!1;for(let n in this.instances[i.id])i[n]!==this.instances[i.id][n]&&(this.instances[i.id][n]=i[n],t=!0);return t}getCurrentPage(i){return this.instances[i]?this.instances[i].currentPage:1}setCurrentPage(i,t){if(this.instances[i]){let n=this.instances[i];t<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=t&&(this.instances[i].currentPage=t,this.change.emit(i))}}setTotalItems(i,t){this.instances[i]&&0<=t&&(this.instances[i].totalItems=t,this.change.emit(i))}setItemsPerPage(i,t){this.instances[i]&&(this.instances[i].itemsPerPage=t,this.change.emit(i))}getInstance(i=this.DEFAULT_ID){return this.instances[i]?this.clone(this.instances[i]):{}}clone(i){var t={};for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n]);return t}}const S=Number.MAX_SAFE_INTEGER;let F=(()=>{class a{constructor(t){this.service=t,this.state={}}transform(t,n){if(!(t instanceof Array)){let P=n.id||this.service.defaultId();return this.state[P]?this.state[P].slice:t}let p,f,r=n.totalItems&&n.totalItems!==t.length,s=this.createInstance(t,n),l=s.id,x=s.itemsPerPage,A=this.service.register(s);if(!r&&t instanceof Array){if(x=+x||S,p=(s.currentPage-1)*x,f=p+x,this.stateIsIdentical(l,t,p,f))return this.state[l].slice;{let I=t.slice(p,f);return this.saveState(l,t,I,p,f),this.service.change.emit(l),I}}return A&&this.service.change.emit(l),this.saveState(l,t,t,p,f),t}createInstance(t,n){return this.checkConfig(n),{id:null!=n.id?n.id:this.service.defaultId(),itemsPerPage:+n.itemsPerPage||0,currentPage:+n.currentPage||1,totalItems:+n.totalItems||t.length}}checkConfig(t){const r=["itemsPerPage","currentPage"].filter(s=>!(s in t));if(0<r.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${r.join(", ")}`)}saveState(t,n,r,s,l){this.state[t]={collection:n,size:n.length,slice:r,start:s,end:l}}stateIsIdentical(t,n,r,s){let l=this.state[t];return!(!l||l.size!==n.length||l.start!==r||l.end!==s)&&l.slice.every((f,x)=>f===n[r+x])}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(y,16))},a.\u0275pipe=e.Yjl({name:"paginate",type:a,pure:!1}),a})(),N=(()=>{class a{constructor(t,n){this.service=t,this.changeDetectorRef=n,this.maxSize=7,this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(r=>{this.id===r&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(t){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return 1===this.getCurrent()}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(t){this.pageChange.emit(t)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let t=this.service.getInstance(this.id);return t.totalItems<1?1:Math.ceil(t.totalItems/t.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){null==this.service.getInstance(this.id).id&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let t=this.service.getInstance(this.id);const n=this.outOfBoundCorrection(t);n!==t.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(n),this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}outOfBoundCorrection(t){const n=Math.ceil(t.totalItems/t.itemsPerPage);return n<t.currentPage&&0<n?n:t.currentPage<1?1:t.currentPage}createPageArray(t,n,r,s){s=+s;let l=[];const p=Math.max(Math.ceil(r/n),1),f=Math.ceil(s/2),x=t<=f,A=p-f<t,P=!x&&!A;let I=s<p,b=1;for(;b<=p&&b<=s;){let M,w=this.calculatePageNumber(b,t,s,p);M=I&&(2===b&&(P||A)||b===s-1&&(P||x))?"...":w,l.push({label:M,value:w}),b++}return l}calculatePageNumber(t,n,r,s){let l=Math.ceil(r/2);return t===r?s:1===t?t:r<s?s-l<n?s-r+t:l<n?n-l+t:t:t}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(y),e.Y36(e.sBO))},a.\u0275dir=e.lG2({type:a,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[e.TTD]}),a})();function k(a){return!!a&&"false"!==a}let B=(()=>{class a{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(t){this._directionLinks=k(t)}get autoHide(){return this._autoHide}set autoHide(t){this._autoHide=k(t)}get responsive(){return this._responsive}set responsive(t){this._responsive=k(t)}trackByIndex(t){return t}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(t,n){if(1&t&&(e.TgZ(0,"pagination-template",0,1),e.NdJ("pageChange",function(s){return n.pageChange.emit(s)})("pageBoundsCorrection",function(s){return n.pageBoundsCorrection.emit(s)}),e.TgZ(2,"nav",2),e.YNc(3,O,6,8,"ul",3),e.qZA()()),2&t){const r=e.MAs(1);e.Q6J("id",n.id)("maxSize",n.maxSize),e.xp6(2),e.uIk("aria-label",n.screenReaderPaginationLabel),e.xp6(1),e.Q6J("ngIf",!(n.autoHide&&r.pages.length<=1))}},dependencies:[N,c.O5,c.sg,c.JJ],styles:['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],encapsulation:2,changeDetection:0}),a})(),R=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[y],imports:[[c.ez]]}),a})();var H=o(3697),L=o(95),q=o(1924),J=o(9077),z=o(2425);const Y=function(a){return["/productDetails",a]};function j(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"div",9)(1,"div",10)(2,"header",11),e._UZ(3,"img",12),e.ALo(4,"cuttext"),e.TgZ(5,"h6",13),e._uU(6),e.qZA(),e.TgZ(7,"h4",14),e._uU(8),e.ALo(9,"cuttext"),e.qZA(),e.TgZ(10,"div",15)(11,"p",16),e._uU(12),e.ALo(13,"currency"),e.qZA(),e.TgZ(14,"p"),e._UZ(15,"i",17),e._uU(16),e.qZA()()(),e.TgZ(17,"footer",18)(18,"button",19,20),e.NdJ("click",function(){const s=e.CHM(t).$implicit,l=e.MAs(19),p=e.oxw(2);return e.KtG(p.addToCart(s._id,l))}),e._uU(20,"+Add"),e.qZA()()()()}if(2&a){const t=i.$implicit;e.xp6(2),e.Q6J("routerLink",e.VKq(17,Y,t._id)),e.xp6(1),e.Q6J("src",t.imageCover,e.LSH)("title",e.xi3(4,8,t.title,2))("alt",t.title),e.xp6(3),e.Oqu(t.category.name),e.xp6(2),e.Oqu(e.xi3(9,11,t.title,2)),e.xp6(4),e.Oqu(e.xi3(13,14,t.price,"EGP ")),e.xp6(4),e.hij(" ",t.ratingsAverage,"")}}const Q=function(a,i,t){return{id:"productsPaginate",itemsPerPage:a,currentPage:i,totalItems:t}};function K(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"section",1)(1,"div",2)(2,"h2",3),e._uU(3,"All Products"),e.qZA(),e.TgZ(4,"input",4),e.NdJ("ngModelChange",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.term=r)}),e.qZA(),e.TgZ(5,"div",5),e.YNc(6,j,21,19,"div",6),e.ALo(7,"paginate"),e.ALo(8,"search"),e.qZA(),e.TgZ(9,"div",7)(10,"pagination-controls",8),e.NdJ("pageChange",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.pageChanged(r))})("pageBoundsCorrection",function(r){e.CHM(t);const s=e.oxw();return e.KtG(s.pageChanged(r))}),e.qZA()()()()}if(2&a){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.term),e.xp6(2),e.Q6J("ngForOf",e.xi3(7,6,e.xi3(8,9,t.allProducts,t.term),e.kEZ(12,Q,t.pageSize,t.currentPage,t.total))),e.xp6(4),e.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0)}}let G=(()=>{class a{constructor(t,n,r,s){this._ProductsService=t,this._CartService=n,this._ToastrService=r,this._Renderer2=s,this.allProducts=[],this.pageSize=0,this.currentPage=1,this.total=0,this.term=""}ngOnInit(){this._ProductsService.getAllProducts(1,12).subscribe({next:t=>{console.log("All Products For Products Component Res",t),this.allProducts=t.data,console.log(this.allProducts),this.pageSize=t.metadata.limit,this.currentPage=t.metadata.currentPage,this.total=t.results},error:t=>{console.log("All Products For Products Component Err",t)}})}addToCart(t,n){this._Renderer2.setAttribute(n,"disabled","true"),this._CartService.addToCart(t).subscribe({next:r=>{console.log("ADD To Cart Res",r),this._ToastrService.success("it has been successfully added \u{1f6fa}\u{1f6fa}\u{1f69a}"),this._Renderer2.removeAttribute(n,"disabled"),this._CartService.cartNumber.next(r.numOfCartItems)},error:r=>{this._Renderer2.removeAttribute(n,"disabled"),console.log("ADD To Cart Err",r)}})}pageChanged(t){this._ProductsService.getAllProducts(t,12).subscribe({next:n=>{console.log("All Products For Products Component Res",n),this.allProducts=n.data,console.log(this.allProducts),this.pageSize=n.metadata.limit,this.currentPage=n.metadata.currentPage,this.total=n.results,window.scrollTo(0,0)},error:n=>{console.log("All Products For Products Component Err",n)}})}static#e=this.\u0275fac=function(n){return new(n||a)(e.Y36(q.s),e.Y36(J.N),e.Y36(z._W),e.Y36(e.Qsj))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["app-products"]],standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","py-4",4,"ngIf"],[1,"py-4"],[1,"container"],[1,"text-center","text-main","text-uppercase","fw-bold"],["type","search","placeholder","Search...",1,"form-control","w-75","mx-auto","p-2","my-5",3,"ngModel","ngModelChange"],[1,"row","g-5"],["class","col-sm-6 col-md-4 col-lg-3 ",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","align-items-center","mt-4"],["id","productsPaginate","previousLabel","Prev","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],[1,"col-sm-6","col-md-4","col-lg-3"],[1,"product","h-100"],["role","button",3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"p-2","text-main","fw-semibold"],[1,"px-2"],[1,"d-flex","justify-content-between","align-items-center","px-2","my-2"],[1,"fw-semibold"],[1,"fas","rating-color","me-1","fa-star"],[1,"d-flex","justify-content-around","align-items-center"],[1,"main-btn","py-2","w-75","text-center","fw-bolder","my-1",3,"click"],["btnAdd",""]],template:function(n,r){1&n&&e.YNc(0,K,11,16,"section",0),2&n&&e.Q6J("ngIf",r.allProducts.length>0)},dependencies:[c.ez,c.sg,c.O5,c.H9,u.rH,h.r,R,F,B,H.C,L.u5,L.Fj,L.JJ,L.On],styles:[".product[_ngcontent-%COMP%]{overflow:hidden}.product[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]{background-color:#0aad0aa0!important;transform:translateY(200%);transition:.8s;opacity:0}.product[_ngcontent-%COMP%]   .main-btn[_ngcontent-%COMP%]:hover{background-color:#0aad0a!important}.product[_ngcontent-%COMP%]:hover   .main-btn[_ngcontent-%COMP%]{transform:translateY(0);opacity:1}"]})}return a})()},2012:(T,C,o)=>{o.d(C,{r:()=>u});var c=o(4769);let u=(()=>{class h{transform(d,m){return d.split(" ").slice(0,m).join(" ")}static#e=this.\u0275fac=function(m){return new(m||h)};static#t=this.\u0275pipe=c.Yjl({name:"cuttext",type:h,pure:!0,standalone:!0})}return h})()},9077:(T,C,o)=>{o.d(C,{N:()=>d});var c=o(5619),u=o(7587),h=o(4769),e=o(9862);let d=(()=>{class m{constructor(g){this._HttpClient=g,this.cartNumber=new c.X(0)}addToCart(g){return this._HttpClient.post(u.q.baseUrl+"cart",{productId:g})}getUserCart(){return this._HttpClient.get(u.q.baseUrl+"cart")}delSpecificCartItem(g){return this._HttpClient.delete(u.q.baseUrl+"cart/"+g)}updateCartQuantity(g,v){return this._HttpClient.put(u.q.baseUrl+"cart/"+g,{count:v})}clarUserCart(){return this._HttpClient.delete(u.q.baseUrl+"cart")}static#e=this.\u0275fac=function(v){return new(v||m)(h.LFG(e.eN))};static#t=this.\u0275prov=h.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})()},1924:(T,C,o)=>{o.d(C,{s:()=>e});var c=o(7587),u=o(4769),h=o(9862);let e=(()=>{class d{constructor(_){this._HttpClient=_}getAllProducts(_=1,g=40){return this._HttpClient.get(c.q.baseUrl+`products?page=${_}&limit=${g}`)}getAllCategories(){return this._HttpClient.get(c.q.baseUrl+"categories")}getAllSpecificSubCategory(_){return this._HttpClient.get(c.q.baseUrl+`categories/${_}/subcategories`)}getSpecificProduct(_){return this._HttpClient.get(c.q.baseUrl+"products/"+_)}getAllBrands(){return this._HttpClient.get(c.q.baseUrl+"brands")}getSpecificBrands(_){return this._HttpClient.get(c.q.baseUrl+`brands/${_}`)}static#e=this.\u0275fac=function(g){return new(g||d)(u.LFG(h.eN))};static#t=this.\u0275prov=u.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()}}]);