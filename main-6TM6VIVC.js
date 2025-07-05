import{a as ht}from"./chunk-SKYFDSXC.js";import{c as lt,d as pt,e as mt,f as ut}from"./chunk-FKDFTWVA.js";import"./chunk-4JFHLLXG.js";import{a as at,b as ue,c as st,d as Me}from"./chunk-ASU3MKSF.js";import{a as pe,b as me}from"./chunk-PCLLUOZE.js";import"./chunk-HTMYVEJT.js";import{a as O}from"./chunk-AKND43OA.js";import{a as dt,b as ct}from"./chunk-BVE22GXP.js";import{a as ot,b as q,c as C}from"./chunk-6KV7LSDN.js";import{b as F,d as j,e as $e,f as Ze}from"./chunk-U47MJ6K3.js";import{a as je,d as Qe,j as tt,l as it,m as le,n as rt,o as Z}from"./chunk-GSX2IYNF.js";import{F as Ye,G as Xe,K as Je,V as et,X as Q,Y as nt,_ as $,e as se,h as de,l as Ke,u as ce,y as qe}from"./chunk-HY2ZGKZK.js";import{A as G,Ab as o,Bb as a,Cb as m,E as Re,Eb as U,G as Le,Gb as g,H as we,Hb as u,Ib as K,Jb as S,Kb as oe,Lb as X,Mb as R,Nb as L,Rb as J,S as Ce,Sb as w,Ta as d,Tb as b,U as x,Vb as s,Wb as N,Xa as ze,Xb as V,Ya as p,_ as z,aa as De,ca as c,eb as l,ec as H,fb as W,ha as P,hb as te,i as k,ia as B,kb as ne,kc as Ue,la as Ie,lb as ie,ma as E,mb as Ne,q as Te,qa as Ve,sa as He,sb as re,sc as ae,tb as _,ub as v,vb as A,wb as We,x as Be,xa as ee,xb as D,ya as Ge,yb as I,z as Ae,zb as T}from"./chunk-FNJOAVBV.js";var gt=["*"],Ct=["content"],Dt=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],It=["mat-drawer","mat-drawer-content","*"];function Nt(t,r){if(t&1){let e=U();o(0,"div",1),g("click",function(){P(e);let i=u();return B(i._onBackdropClicked())}),a()}if(t&2){let e=u();b("mat-drawer-shown",e._isShowingBackdrop())}}function Mt(t,r){t&1&&(o(0,"mat-drawer-content"),S(1,2),a())}var kt=new De("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:St}),ft=new De("MAT_DRAWER_CONTAINER");function St(){return!1}var ke=(()=>{class t extends ue{_platform=c(ce);_changeDetectorRef=c(ae);_container=c(Fe);constructor(){let e=c(ee),n=c(at),i=c(ie);super(e,n,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:n}=this._container;return e!=null&&e.mode!=="over"&&e.opened||n!=null&&n.mode!=="over"&&n.opened}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(n,i){n&2&&(w("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),b("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[H([{provide:ue,useExisting:t}]),te],ngContentSelectors:gt,decls:1,vars:0,template:function(n,i){n&1&&(K(),S(0))},encapsulation:2,changeDetection:0})}return t})(),Se=(()=>{class t{_elementRef=c(ee);_focusTrapFactory=c(Xe);_focusMonitor=c(qe);_platform=c(ce);_ngZone=c(ie);_renderer=c(ze);_interactivityChecker=c(Ye);_doc=c(E,{optional:!0});_container=c(ft,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached;_anchor;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=Q(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=Q(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(Q(e))}_opened=He(!1);_openedVia;_animationStarted=new k;_animationEnd=new k;openedChange=new ne(!0);_openedStream=this.openedChange.pipe(G(e=>e),Te(()=>{}));openedStart=this._animationStarted.pipe(G(()=>this.opened),we(void 0));_closedStream=this.openedChange.pipe(G(e=>!e),Te(()=>{}));closedStart=this._animationStarted.pipe(G(()=>!this.opened),we(void 0));_destroyed=new k;onPositionChanged=new ne;_content;_modeChanged=new k;_injector=c(Ie);_changeDetectorRef=c(ae);constructor(){this.openedChange.pipe(x(this._destroyed)).subscribe(e=>{e?(this._doc&&(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement),this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement;Be(e,"keydown").pipe(G(n=>n.keyCode===27&&!this.disableClose&&!Je(n)),x(this._destroyed)).subscribe(n=>this._ngZone.run(()=>{this.close(),n.stopPropagation(),n.preventDefault()})),this._eventCleanups=[this._renderer.listen(e,"transitionrun",this._handleTransitionEvent),this._renderer.listen(e,"transitionend",this._handleTransitionEvent),this._renderer.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{h(),f(),e.removeAttribute("tabindex")},h=this._renderer.listen(e,"blur",i),f=this._renderer.listen(e,"mousedown",i)})),e.focus(n)}_focusByCssSelector(e,n){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,n)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Ne(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,n){e&&n&&(this._openedVia=n);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),i}_setOpen(e,n,i){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?this._setIsAnimating(!0):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&n&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(h=>{this.openedChange.pipe(Le(1)).subscribe(f=>h(f?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=!!this._container?.hasBackdrop&&this.opened)}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let n=this._elementRef.nativeElement,i=n.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,n)),i.appendChild(n)):this._anchor&&this._anchor.parentNode.insertBefore(n,this._anchor)}_handleTransitionEvent=e=>{let n=this._elementRef.nativeElement;e.target===n&&this._ngZone.run(()=>{e.type==="transitionrun"?this._animationStarted.next(e):(e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e))})};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-drawer"]],viewQuery:function(n,i){if(n&1&&X(Ct,5),n&2){let h;R(h=L())&&(i._content=h.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(n,i){n&2&&(re("align",null)("tabIndex",i.mode!=="side"?"-1":null),w("visibility",!i._container&&!i.opened?"hidden":null),b("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:gt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,i){n&1&&(K(),o(0,"div",1,0),S(2),a())},dependencies:[ue],encapsulation:2,changeDetection:0})}return t})(),Fe=(()=>{class t{_dir=c(nt,{optional:!0});_element=c(ee);_ngZone=c(ie);_changeDetectorRef=c(ae);_animationDisabled=et();_transitionsEnabled=!1;_allDrawers;_drawers=new Ge;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=Q(e)}_autosize=c(kt);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:Q(e)}_backdropOverride;backdropClick=new ne;_start;_end;_left;_right;_destroyed=new k;_doCheckSubject=new k;_contentMargins={left:null,right:null};_contentMarginChanges=new k;get scrollable(){return this._userContent||this._content}_injector=c(Ie);constructor(){let e=c(ce),n=c(st);this._dir?.change.pipe(x(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),n.change().pipe(x(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Ce(this._allDrawers),x(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(n=>!n._container||n._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Ce(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Re(10),x(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,n=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();e+=i,n-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")n+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();n+=i,e-=i}}e=e||null,n=n||null,(e!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:e,right:n},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(x(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(x(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(x(this._drawers.changes)).subscribe(()=>{Ne({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(x(Ae(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let n=this._element.nativeElement.classList,i="mat-drawer-container-has-open";e?n.add(i):n.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=l({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(n,i,h){if(n&1&&(oe(h,ke,5),oe(h,Se,5)),n&2){let f;R(f=L())&&(i._content=f.first),R(f=L())&&(i._allDrawers=f)}},viewQuery:function(n,i){if(n&1&&X(ke,5),n&2){let h;R(h=L())&&(i._userContent=h.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(n,i){n&2&&b("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[H([{provide:ft,useExisting:t}])],ngContentSelectors:It,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,i){n&1&&(K(Dt),_(0,Nt,1,2,"div",0),S(1),S(2,1),_(3,Mt,2,0,"mat-drawer-content")),n&2&&(v(i.hasBackdrop?0:-1),d(3),v(i._content?-1:3))},dependencies:[ke],styles:[`.mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}
`],encapsulation:2,changeDetection:0})}return t})();var _t=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=z({imports:[$,Me,Me,$]})}return t})();function Ot(t,r){if(t&1&&s(0),t&2){let e=u().$implicit;V(" ",e.title," ")}}function Pt(t,r){t&1&&(o(0,"mat-icon"),s(1,"keyboard_arrow_down"),a())}function Bt(t,r){t&1&&(o(0,"mat-icon"),s(1,"keyboard_arrow_right"),a())}function At(t,r){if(t&1&&s(0),t&2){let e=u().$implicit;V(" ",e.title," ")}}function Rt(t,r){if(t&1&&(o(0,"a",9)(1,"mat-icon"),s(2),a(),_(3,At,1,1),a()),t&2){let e=r.$implicit,n=u(5);b("no-active-button",n.activeLink!==e.route),T("routerLink",e.route),d(2),N(e.icon),d(),v(e.title?3:-1)}}function Lt(t,r){if(t&1&&D(0,Rt,4,5,"a",8,A),t&2){let e=u().$implicit;I(e.children)}}function Vt(t,r){if(t&1&&(o(0,"a",7),_(1,Pt,2,0,"mat-icon")(2,Bt,2,0,"mat-icon"),s(3),a(),_(4,Lt,2,0)),t&2){let e=r.$implicit,n=u(3);b("no-active-button",n.activeLink!==e.route),T("routerLink",e.route),d(),v(n.activeLink.startsWith(e.route)?1:2),d(2),V(" ",e.title," "),d(),v(n.activeLink.startsWith(e.route)?4:-1)}}function Ht(t,r){if(t&1&&D(0,Vt,5,6,null,null,A),t&2){let e=u().$implicit;I(e.children)}}function Gt(t,r){if(t&1&&(o(0,"a",7)(1,"mat-icon"),s(2),a(),_(3,Ot,1,1),a(),_(4,Ht,2,0),m(5,"mat-divider")),t&2){let e=r.$implicit,n=u();b("no-active-button",n.activeLink!==e.route),T("routerLink",e.route),d(2),N(e.icon),d(),v(e.title?3:-1),d(),v(n.activeLink.startsWith(e.route)?4:-1)}}function zt(t,r){if(t&1&&s(0),t&2){let e=u().$implicit;V(" ",e.title," ")}}function Wt(t,r){if(t&1&&(o(0,"a",7)(1,"mat-icon"),s(2),a(),_(3,zt,1,1),a()),t&2){let e=r.$implicit,n=u();b("no-active-button",n.activeLink!==e.route),T("routerLink",e.route),d(2),N(e.icon),d(),v(e.title?3:-1)}}var he=class t{constructor(r,e,n){this.document=r;this.themeService=e;this.navigationService=n;this.currentMode=e.getCurrentMode(),this.navigationService.activeLink$.subscribe(i=>{this.activeLink=i})}currentMode="auto";activeLink="/home";setReactiveMode(r){this.themeService.setThemeMode(r),this.currentMode=r}items=[{title:"Experiments",icon:"experiment",route:"/experiments",children:[{title:"Motor Imagery",route:"/experiments/motor-imagery",children:[{title:"Unilateral",route:"/experiments/motor-imagery/unilateral"},{title:"Bilateral",route:"/experiments/motor-imagery/bilateral"}]},{title:"P300",route:"/experiments/p300"},{title:"SSVEP",route:"/experiments/ssvep"}]},{title:"Test Hardware",icon:"usb",route:"/test_hardware"}];items_end=[{title:"Glossary",icon:"auto_stories",route:"/glossary",active:!1},{title:"Citation",icon:"format_quote",route:"/citation",active:!1},{title:"Pricing",icon:"money_bag",route:"/pricing",active:!1}];static \u0275fac=function(e){return new(e||t)(p(E),p(O),p(dt))};static \u0275cmp=l({type:t,selectors:[["app-toolbar-layout"]],decls:15,vars:6,consts:[[1,"brand"],[1,"nav-start"],[1,"nav-end"],["matFab","","extended","",1,"button",3,"routerLink","no-active-button"],[1,"margin-top-large"],["matFab","","extended","","id","mode-light",1,"mode-button","no-active-button","theme-button",3,"click"],["matFab","","extended","","id","mode-dark",1,"mode-button","no-active-button","theme-button",3,"click"],["matFab","","extended","",1,"button",3,"routerLink"],["matFab","","extended","",1,"button","button-child",3,"routerLink","no-active-button"],["matFab","","extended","",1,"button","button-child",3,"routerLink"]],template:function(e,n){e&1&&(o(0,"nav"),m(1,"div",0),o(2,"div",1),D(3,Gt,6,6,null,null,A),a(),o(5,"div",2),D(6,Wt,4,5,"a",3,A),m(8,"div",4),o(9,"a",5),g("click",function(){return n.setReactiveMode("light")}),o(10,"mat-icon"),s(11,"light_mode"),a()(),o(12,"a",6),g("click",function(){return n.setReactiveMode("dark")}),o(13,"mat-icon"),s(14,"dark_mode"),a()()()()),e&2&&(d(),w("background-image","url(/assets/images/branding/cteno_logo_"+n.currentMode+".svg)"),d(2),I(n.items),d(3),I(n.items_end),d(3),w("display",n.currentMode==="dark"?"flex":"none"),d(3),w("display",n.currentMode==="dark"?"none":"flex"))},dependencies:[Z,le,C,q,j,me,pe,_t],styles:["nav[_ngcontent-%COMP%]{background-color:var(--mat-sys-surface-container);border-right:solid 1px var(--mat-sys-outline-variant);display:flex;flex-direction:column;width:var(--toolbar-width);height:100vh;align-items:center;padding:24px 0;position:fixed;top:0;z-index:1000;box-sizing:border-box}a[matFab][_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level0);width:calc(100% - 16px);border-radius:20px;height:40px;margin:4px 8px;justify-content:left}a[matFab].no-active-button[_ngcontent-%COMP%]{background-color:unset;width:calc(100% - 16px)}a[matFab].theme-button[_ngcontent-%COMP%]{justify-content:center}.nav-end[_ngcontent-%COMP%], .nav-start[_ngcontent-%COMP%]{width:100%}.nav-end[_ngcontent-%COMP%]{margin-top:auto}.button-child[_ngcontent-%COMP%]{padding-left:48px}.brand[_ngcontent-%COMP%]{margin:0 auto 24px;width:90%;height:100px;background-size:contain;background-position:center;background-repeat:no-repeat;border:10px solid transparent;box-sizing:border-box}"]})};var Ut=["*"],ge=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-container"]],ngContentSelectors:Ut,decls:2,vars:0,consts:[[1,"app-container"]],template:function(e,n){e&1&&(K(),o(0,"section",0),S(1),a())},styles:[".app-container[_ngcontent-%COMP%]{max-width:1440px;margin:0 auto;padding-left:var(--toolbar-width)}"]})};var Y=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-footer-layout"]],decls:13,vars:0,consts:[[1,"page-container"],["href","https://yeisoncardona.com","target","_blank","rel","noopener",1,"undecorated-link","underline-link"],["href","https://www.dunderlab.com/","target","_blank","rel","noopener",1,"undecorated-link","underline-link"]],template:function(e,n){e&1&&(o(0,"footer")(1,"div",0)(2,"span"),s(3,"CtenoLab \xA9 2025 \u2013 Cognitive Experimentation Platform"),a(),o(4,"span"),s(5,"Real-time neurophysiological paradigms for research and development"),a(),o(6,"span"),s(7," Crafted by "),o(8,"a",1),s(9,"Yeison Cardona"),a(),s(10," & "),o(11,"a",2),s(12,"DunderLab"),a()()()())},styles:["footer[_ngcontent-%COMP%]{border-top:solid 1px var(--mat-sys-outline-variant);padding:64px 16px;margin-top:64px}footer[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%]{box-sizing:border-box;display:flex;flex-wrap:wrap;flex-direction:column;gap:.2rem;font:var(--mat-sys-body-medium);text-align:right}a[_ngcontent-%COMP%]{color:var(--mat-sys-primary);font-weight:400}"]})};var bt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=z({})}return t})();var yt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=W({type:t});static \u0275inj=z({imports:[bt,$,$]})}return t})();function $t(t,r){if(t&1&&(o(0,"a",3),s(1),a()),t&2){let e=u().$implicit;T("routerLink",e.url),d(),N(e.label)}}function Zt(t,r){if(t&1&&(o(0,"button",4),s(1),a()),t&2){let e=u().$implicit;d(),N(e.label)}}function qt(t,r){if(t&1&&(o(0,"li",2),_(1,$t,2,2,"a",3)(2,Zt,2,1,"button",4),a()),t&2){let e=r.$index,n=r.$count;b("active",e===n-1),d(),v(e!==n-1?1:2)}}var fe=class t{constructor(r){this.breadcrumbService=r;this.breadcrumbService.breadcrumbs$.subscribe(e=>this.breadcrumbs=e)}breadcrumbs=[];static \u0275fac=function(e){return new(e||t)(p(ct))};static \u0275cmp=l({type:t,selectors:[["app-breadcrumb"]],inputs:{breadcrumbs:"breadcrumbs"},decls:5,vars:0,consts:[[1,"breadcrumb"],[1,"breadcrumb-item",3,"active"],[1,"breadcrumb-item"],["mat-button","","target","_parent",3,"routerLink"],["mat-button",""]],template:function(e,n){e&1&&(o(0,"nav")(1,"ol",0),D(2,qt,3,3,"li",1,A),a()(),m(4,"mat-divider")),e&2&&(d(2),I(n.breadcrumbs))},dependencies:[Ze,j,Ke,Z,it,C,me,pe],styles:['.breadcrumb[_ngcontent-%COMP%]{box-sizing:border-box;display:flex;flex-wrap:wrap;padding:0 1rem;list-style:none}.breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{content:"/";padding:0 8px;color:var(--mat-sys-primary)}.breadcrumb[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%], .breadcrumb[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%]{color:var(--mat-sys-primary)}  :root{--mat-divider-color: var(--mat-sys-outline-variant)}']})};var _e=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-console"]],decls:2,vars:0,template:function(e,n){e&1&&(o(0,"pre"),s(1,`
[13:02:11] INFO  : ESP32 connected on /dev/ttyUSB0 (baud: 115200)
[13:02:13] INFO  : Firmware version: v1.3.7 (build 2025-06-20)
[13:02:17] INFO  : Waiting for experiment start signal...
[13:02:20] EVENT : Trigger 0x01 sent (P300 trial)
[13:02:23] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:02:25] EVENT : Trigger 0x02 sent (Motor Imagery Left - START)
[13:02:35] EVENT : Trigger 0x03 sent (Motor Imagery Left - END)
[13:02:38] WARN  : High latency detected (\u0394t = 17.4 ms)
[13:02:42] EVENT : Trigger 0x04 sent (SSVEP @13Hz)
[13:02:45] DEBUG : TTL LOW detected on GPIO2
[13:02:47] DEBUG : TTL HIGH detected on GPIO2
[13:02:50] ERROR : Signal synchronization lost - resetting timestamp
[13:02:52] INFO  : Timestamp re-aligned successfully (drift corrected)
[13:02:55] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:03:00] INFO  : Experiment completed successfully
[13:03:01] INFO  : Device idle. Awaiting next command...
[13:02:11] INFO  : ESP32 connected on /dev/ttyUSB0 (baud: 115200)
[13:02:13] INFO  : Firmware version: v1.3.7 (build 2025-06-20)
[13:02:17] INFO  : Waiting for experiment start signal...
[13:02:20] EVENT : Trigger 0x01 sent (P300 trial)
[13:02:23] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:02:25] EVENT : Trigger 0x02 sent (Motor Imagery Left - START)
[13:02:35] EVENT : Trigger 0x03 sent (Motor Imagery Left - END)
[13:02:38] WARN  : High latency detected (\u0394t = 17.4 ms)
[13:02:42] EVENT : Trigger 0x04 sent (SSVEP @13Hz)
[13:02:45] DEBUG : TTL LOW detected on GPIO2
[13:02:47] DEBUG : TTL HIGH detected on GPIO2
[13:02:50] ERROR : Signal synchronization lost - resetting timestamp
[13:02:52] INFO  : Timestamp re-aligned successfully (drift corrected)
[13:02:55] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:03:00] INFO  : Experiment completed successfully
[13:03:01] INFO  : Device idle. Awaiting next command...
[13:02:11] INFO  : ESP32 connected on /dev/ttyUSB0 (baud: 115200)
[13:02:13] INFO  : Firmware version: v1.3.7 (build 2025-06-20)
[13:02:17] INFO  : Waiting for experiment start signal...
[13:02:20] EVENT : Trigger 0x01 sent (P300 trial)
[13:02:23] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:02:25] EVENT : Trigger 0x02 sent (Motor Imagery Left - START)
[13:02:35] EVENT : Trigger 0x03 sent (Motor Imagery Left - END)
[13:02:38] WARN  : High latency detected (\u0394t = 17.4 ms)
[13:02:42] EVENT : Trigger 0x04 sent (SSVEP @13Hz)
[13:02:45] DEBUG : TTL LOW detected on GPIO2
[13:02:47] DEBUG : TTL HIGH detected on GPIO2
[13:02:50] ERROR : Signal synchronization lost - resetting timestamp
[13:02:52] INFO  : Timestamp re-aligned successfully (drift corrected)
[13:02:55] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:03:00] INFO  : Experiment completed successfully
[13:03:01] INFO  : Device idle. Awaiting next command...
[13:02:11] INFO  : ESP32 connected on /dev/ttyUSB0 (baud: 115200)
[13:02:13] INFO  : Firmware version: v1.3.7 (build 2025-06-20)
[13:02:17] INFO  : Waiting for experiment start signal...
[13:02:20] EVENT : Trigger 0x01 sent (P300 trial)
[13:02:23] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:02:25] EVENT : Trigger 0x02 sent (Motor Imagery Left - START)
[13:02:35] EVENT : Trigger 0x03 sent (Motor Imagery Left - END)
[13:02:38] WARN  : High latency detected (\u0394t = 17.4 ms)
[13:02:42] EVENT : Trigger 0x04 sent (SSVEP @13Hz)
[13:02:45] DEBUG : TTL LOW detected on GPIO2
[13:02:47] DEBUG : TTL HIGH detected on GPIO2
[13:02:50] ERROR : Signal synchronization lost - resetting timestamp
[13:02:52] INFO  : Timestamp re-aligned successfully (drift corrected)
[13:02:55] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:03:00] INFO  : Experiment completed successfully
[13:03:01] INFO  : Device idle. Awaiting next command...
[13:02:11] INFO  : ESP32 connected on /dev/ttyUSB0 (baud: 115200)
[13:02:13] INFO  : Firmware version: v1.3.7 (build 2025-06-20)
[13:02:17] INFO  : Waiting for experiment start signal...
[13:02:20] EVENT : Trigger 0x01 sent (P300 trial)
[13:02:23] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:02:25] EVENT : Trigger 0x02 sent (Motor Imagery Left - START)
[13:02:35] EVENT : Trigger 0x03 sent (Motor Imagery Left - END)
[13:02:38] WARN  : High latency detected (\u0394t = 17.4 ms)
[13:02:42] EVENT : Trigger 0x04 sent (SSVEP @13Hz)
[13:02:45] DEBUG : TTL LOW detected on GPIO2
[13:02:47] DEBUG : TTL HIGH detected on GPIO2
[13:02:50] ERROR : Signal synchronization lost - resetting timestamp
[13:02:52] INFO  : Timestamp re-aligned successfully (drift corrected)
[13:02:55] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:03:00] INFO  : Experiment completed successfully
[13:03:01] INFO  : Device idle. Awaiting next command...
[13:02:11] INFO  : ESP32 connected on /dev/ttyUSB0 (baud: 115200)
[13:02:13] INFO  : Firmware version: v1.3.7 (build 2025-06-20)
[13:02:17] INFO  : Waiting for experiment start signal...
[13:02:20] EVENT : Trigger 0x01 sent (P300 trial)
[13:02:23] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:02:25] EVENT : Trigger 0x02 sent (Motor Imagery Left - START)
[13:02:35] EVENT : Trigger 0x03 sent (Motor Imagery Left - END)
[13:02:38] WARN  : High latency detected (\u0394t = 17.4 ms)
[13:02:42] EVENT : Trigger 0x04 sent (SSVEP @13Hz)
[13:02:45] DEBUG : TTL LOW detected on GPIO2
[13:02:47] DEBUG : TTL HIGH detected on GPIO2
[13:02:50] ERROR : Signal synchronization lost - resetting timestamp
[13:02:52] INFO  : Timestamp re-aligned successfully (drift corrected)
[13:02:55] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:03:00] INFO  : Experiment completed successfully
[13:03:01] INFO  : Device idle. Awaiting next command...
[13:02:11] INFO  : ESP32 connected on /dev/ttyUSB0 (baud: 115200)
[13:02:13] INFO  : Firmware version: v1.3.7 (build 2025-06-20)
[13:02:17] INFO  : Waiting for experiment start signal...
[13:02:20] EVENT : Trigger 0x01 sent (P300 trial)
[13:02:23] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:02:25] EVENT : Trigger 0x02 sent (Motor Imagery Left - START)
[13:02:35] EVENT : Trigger 0x03 sent (Motor Imagery Left - END)
[13:02:38] WARN  : High latency detected (\u0394t = 17.4 ms)
[13:02:42] EVENT : Trigger 0x04 sent (SSVEP @13Hz)
[13:02:45] DEBUG : TTL LOW detected on GPIO2
[13:02:47] DEBUG : TTL HIGH detected on GPIO2
[13:02:50] ERROR : Signal synchronization lost - resetting timestamp
[13:02:52] INFO  : Timestamp re-aligned successfully (drift corrected)
[13:02:55] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:03:00] INFO  : Experiment completed successfully
[13:03:01] INFO  : Device idle. Awaiting next command...
[13:02:11] INFO  : ESP32 connected on /dev/ttyUSB0 (baud: 115200)
[13:02:13] INFO  : Firmware version: v1.3.7 (build 2025-06-20)
[13:02:17] INFO  : Waiting for experiment start signal...
[13:02:20] EVENT : Trigger 0x01 sent (P300 trial)
[13:02:23] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:02:25] EVENT : Trigger 0x02 sent (Motor Imagery Left - START)
[13:02:35] EVENT : Trigger 0x03 sent (Motor Imagery Left - END)
[13:02:38] WARN  : High latency detected (\u0394t = 17.4 ms)
[13:02:42] EVENT : Trigger 0x04 sent (SSVEP @13Hz)
[13:02:45] DEBUG : TTL LOW detected on GPIO2
[13:02:47] DEBUG : TTL HIGH detected on GPIO2
[13:02:50] ERROR : Signal synchronization lost - resetting timestamp
[13:02:52] INFO  : Timestamp re-aligned successfully (drift corrected)
[13:02:55] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:03:00] INFO  : Experiment completed successfully
[13:03:01] INFO  : Device idle. Awaiting next command...
[13:02:11] INFO  : ESP32 connected on /dev/ttyUSB0 (baud: 115200)
[13:02:13] INFO  : Firmware version: v1.3.7 (build 2025-06-20)
[13:02:17] INFO  : Waiting for experiment start signal...
[13:02:20] EVENT : Trigger 0x01 sent (P300 trial)
[13:02:23] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:02:25] EVENT : Trigger 0x02 sent (Motor Imagery Left - START)
[13:02:35] EVENT : Trigger 0x03 sent (Motor Imagery Left - END)
[13:02:38] WARN  : High latency detected (\u0394t = 17.4 ms)
[13:02:42] EVENT : Trigger 0x04 sent (SSVEP @13Hz)
[13:02:45] DEBUG : TTL LOW detected on GPIO2
[13:02:47] DEBUG : TTL HIGH detected on GPIO2
[13:02:50] ERROR : Signal synchronization lost - resetting timestamp
[13:02:52] INFO  : Timestamp re-aligned successfully (drift corrected)
[13:02:55] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:03:00] INFO  : Experiment completed successfully
[13:03:01] INFO  : Device idle. Awaiting next command...
[13:02:11] INFO  : ESP32 connected on /dev/ttyUSB0 (baud: 115200)
[13:02:13] INFO  : Firmware version: v1.3.7 (build 2025-06-20)
[13:02:17] INFO  : Waiting for experiment start signal...
[13:02:20] EVENT : Trigger 0x01 sent (P300 trial)
[13:02:23] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:02:25] EVENT : Trigger 0x02 sent (Motor Imagery Left - START)
[13:02:35] EVENT : Trigger 0x03 sent (Motor Imagery Left - END)
[13:02:38] WARN  : High latency detected (\u0394t = 17.4 ms)
[13:02:42] EVENT : Trigger 0x04 sent (SSVEP @13Hz)
[13:02:45] DEBUG : TTL LOW detected on GPIO2
[13:02:47] DEBUG : TTL HIGH detected on GPIO2
[13:02:50] ERROR : Signal synchronization lost - resetting timestamp
[13:02:52] INFO  : Timestamp re-aligned successfully (drift corrected)
[13:02:55] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:03:00] INFO  : Experiment completed successfully
[13:03:01] INFO  : Device idle. Awaiting next command...
[13:02:11] INFO  : ESP32 connected on /dev/ttyUSB0 (baud: 115200)
[13:02:13] INFO  : Firmware version: v1.3.7 (build 2025-06-20)
[13:02:17] INFO  : Waiting for experiment start signal...
[13:02:20] EVENT : Trigger 0x01 sent (P300 trial)
[13:02:23] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:02:25] EVENT : Trigger 0x02 sent (Motor Imagery Left - START)
[13:02:35] EVENT : Trigger 0x03 sent (Motor Imagery Left - END)
[13:02:38] WARN  : High latency detected (\u0394t = 17.4 ms)
[13:02:42] EVENT : Trigger 0x04 sent (SSVEP @13Hz)
[13:02:45] DEBUG : TTL LOW detected on GPIO2
[13:02:47] DEBUG : TTL HIGH detected on GPIO2
[13:02:50] ERROR : Signal synchronization lost - resetting timestamp
[13:02:52] INFO  : Timestamp re-aligned successfully (drift corrected)
[13:02:55] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:03:00] INFO  : Experiment completed successfully
[13:03:01] INFO  : Device idle. Awaiting next command...
[13:02:11] INFO  : ESP32 connected on /dev/ttyUSB0 (baud: 115200)
[13:02:13] INFO  : Firmware version: v1.3.7 (build 2025-06-20)
[13:02:17] INFO  : Waiting for experiment start signal...
[13:02:20] EVENT : Trigger 0x01 sent (P300 trial)
[13:02:23] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:02:25] EVENT : Trigger 0x02 sent (Motor Imagery Left - START)
[13:02:35] EVENT : Trigger 0x03 sent (Motor Imagery Left - END)
[13:02:38] WARN  : High latency detected (\u0394t = 17.4 ms)
[13:02:42] EVENT : Trigger 0x04 sent (SSVEP @13Hz)
[13:02:45] DEBUG : TTL LOW detected on GPIO2
[13:02:47] DEBUG : TTL HIGH detected on GPIO2
[13:02:50] ERROR : Signal synchronization lost - resetting timestamp
[13:02:52] INFO  : Timestamp re-aligned successfully (drift corrected)
[13:02:55] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:03:00] INFO  : Experiment completed successfully
[13:03:01] INFO  : Device idle. Awaiting next command...
[13:02:11] INFO  : ESP32 connected on /dev/ttyUSB0 (baud: 115200)
[13:02:13] INFO  : Firmware version: v1.3.7 (build 2025-06-20)
[13:02:17] INFO  : Waiting for experiment start signal...
[13:02:20] EVENT : Trigger 0x01 sent (P300 trial)
[13:02:23] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:02:25] EVENT : Trigger 0x02 sent (Motor Imagery Left - START)
[13:02:35] EVENT : Trigger 0x03 sent (Motor Imagery Left - END)
[13:02:38] WARN  : High latency detected (\u0394t = 17.4 ms)
[13:02:42] EVENT : Trigger 0x04 sent (SSVEP @13Hz)
[13:02:45] DEBUG : TTL LOW detected on GPIO2
[13:02:47] DEBUG : TTL HIGH detected on GPIO2
[13:02:50] ERROR : Signal synchronization lost - resetting timestamp
[13:02:52] INFO  : Timestamp re-aligned successfully (drift corrected)
[13:02:55] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:03:00] INFO  : Experiment completed successfully
[13:03:01] INFO  : Device idle. Awaiting next command...
[13:02:11] INFO  : ESP32 connected on /dev/ttyUSB0 (baud: 115200)
[13:02:13] INFO  : Firmware version: v1.3.7 (build 2025-06-20)
[13:02:17] INFO  : Waiting for experiment start signal...
[13:02:20] EVENT : Trigger 0x01 sent (P300 trial)
[13:02:23] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:02:25] EVENT : Trigger 0x02 sent (Motor Imagery Left - START)
[13:02:35] EVENT : Trigger 0x03 sent (Motor Imagery Left - END)
[13:02:38] WARN  : High latency detected (\u0394t = 17.4 ms)
[13:02:42] EVENT : Trigger 0x04 sent (SSVEP @13Hz)
[13:02:45] DEBUG : TTL LOW detected on GPIO2
[13:02:47] DEBUG : TTL HIGH detected on GPIO2
[13:02:50] ERROR : Signal synchronization lost - resetting timestamp
[13:02:52] INFO  : Timestamp re-aligned successfully (drift corrected)
[13:02:55] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:03:00] INFO  : Experiment completed successfully
[13:03:01] INFO  : Device idle. Awaiting next command...
[13:02:11] INFO  : ESP32 connected on /dev/ttyUSB0 (baud: 115200)
[13:02:13] INFO  : Firmware version: v1.3.7 (build 2025-06-20)
[13:02:17] INFO  : Waiting for experiment start signal...
[13:02:20] EVENT : Trigger 0x01 sent (P300 trial)
[13:02:23] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:02:25] EVENT : Trigger 0x02 sent (Motor Imagery Left - START)
[13:02:35] EVENT : Trigger 0x03 sent (Motor Imagery Left - END)
[13:02:38] WARN  : High latency detected (\u0394t = 17.4 ms)
[13:02:42] EVENT : Trigger 0x04 sent (SSVEP @13Hz)
[13:02:45] DEBUG : TTL LOW detected on GPIO2
[13:02:47] DEBUG : TTL HIGH detected on GPIO2
[13:02:50] ERROR : Signal synchronization lost - resetting timestamp
[13:02:52] INFO  : Timestamp re-aligned successfully (drift corrected)
[13:02:55] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:03:00] INFO  : Experiment completed successfully
[13:03:01] INFO  : Device idle. Awaiting next command...
[13:02:11] INFO  : ESP32 connected on /dev/ttyUSB0 (baud: 115200)
[13:02:13] INFO  : Firmware version: v1.3.7 (build 2025-06-20)
[13:02:17] INFO  : Waiting for experiment start signal...
[13:02:20] EVENT : Trigger 0x01 sent (P300 trial)
[13:02:23] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:02:25] EVENT : Trigger 0x02 sent (Motor Imagery Left - START)
[13:02:35] EVENT : Trigger 0x03 sent (Motor Imagery Left - END)
[13:02:38] WARN  : High latency detected (\u0394t = 17.4 ms)
[13:02:42] EVENT : Trigger 0x04 sent (SSVEP @13Hz)
[13:02:45] DEBUG : TTL LOW detected on GPIO2
[13:02:47] DEBUG : TTL HIGH detected on GPIO2
[13:02:50] ERROR : Signal synchronization lost - resetting timestamp
[13:02:52] INFO  : Timestamp re-aligned successfully (drift corrected)
[13:02:55] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:03:00] INFO  : Experiment completed successfully
[13:03:01] INFO  : Device idle. Awaiting next command...
[13:02:11] INFO  : ESP32 connected on /dev/ttyUSB0 (baud: 115200)
[13:02:13] INFO  : Firmware version: v1.3.7 (build 2025-06-20)
[13:02:17] INFO  : Waiting for experiment start signal...
[13:02:20] EVENT : Trigger 0x01 sent (P300 trial)
[13:02:23] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:02:25] EVENT : Trigger 0x02 sent (Motor Imagery Left - START)
[13:02:35] EVENT : Trigger 0x03 sent (Motor Imagery Left - END)
[13:02:38] WARN  : High latency detected (\u0394t = 17.4 ms)
[13:02:42] EVENT : Trigger 0x04 sent (SSVEP @13Hz)
[13:02:45] DEBUG : TTL LOW detected on GPIO2
[13:02:47] DEBUG : TTL HIGH detected on GPIO2
[13:02:50] ERROR : Signal synchronization lost - resetting timestamp
[13:02:52] INFO  : Timestamp re-aligned successfully (drift corrected)
[13:02:55] EVENT : Trigger 0x00 sent (Interstimulus interval)
[13:03:00] INFO  : Experiment completed successfully
[13:03:01] INFO  : Device idle. Awaiting next command...

`),a())},styles:["pre[_ngcontent-%COMP%]{width:100%;height:100%;max-height:100%;overflow-y:auto;overflow-x:hidden;background-color:#121212;color:#e0e0e0;font-family:Courier New,monospace;font-size:.85rem;line-height:1.4;white-space:pre-wrap;word-wrap:break-word;padding:1rem;border-radius:6px;display:flex;flex-direction:column-reverse;box-sizing:border-box}"]})};var Yt="1.0.0-alpha",ve=class t{version=Yt;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-root"]],decls:19,vars:1,consts:[["drawer",""],[1,"version","no-margin-bottom"],["autosize",""],["mode","side","position","end"],["matMiniFab","",1,"button-drawer-close",3,"click"],[1,"drawer-container"],["matFab","","extended","",1,"button-drawer",3,"click"]],template:function(e,n){if(e&1){let i=U();o(0,"p",1),s(1),a(),o(2,"mat-drawer-container",2),m(3,"app-toolbar-layout")(4,"app-breadcrumb"),o(5,"app-container"),m(6,"router-outlet"),a(),m(7,"app-footer-layout"),o(8,"mat-drawer",3,0)(10,"button",4),g("click",function(){P(i);let f=J(9);return B(f.toggle())}),o(11,"mat-icon"),s(12,"close"),a()(),o(13,"div",5),m(14,"app-console"),a()(),o(15,"button",6),g("click",function(){P(i);let f=J(9);return B(f.toggle())}),o(16,"mat-icon"),s(17,"terminal"),a(),s(18," Console "),a()()}e&2&&(d(),N(n.version))},dependencies:[F,he,ge,Y,Z,rt,le,Se,Fe,C,q,yt,fe,_e],styles:[':root{--mat-sidenav-container-width: 700px}mat-drawer-container[_ngcontent-%COMP%]{height:100vh;background-color:unset;box-sizing:border-box}mat-drawer[_ngcontent-%COMP%]{height:100vh;box-shadow:var(--mat-sys-level2);overflow:visible;z-index:1000}.button-drawer[_ngcontent-%COMP%]{position:fixed;top:100px;right:0;box-shadow:var(--mat-sys-level2);border-radius:var(--mat-sys-corner-large) 0 0 var(--mat-sys-corner-large)}.button-drawer-close[_ngcontent-%COMP%]:hover, .button-drawer-close[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level0);position:absolute;top:4px;right:4px;background-color:var(--mat-sys-surface-container);color:var(--mat-sys-error)}.drawer-container[_ngcontent-%COMP%]{padding:16px;margin-top:32px;height:calc(100% - 80px)}app-breadcrumb[_ngcontent-%COMP%], app-footer-layout[_ngcontent-%COMP%]{display:block;position:relative;left:var(--toolbar-width);width:calc(100vw - var(--toolbar-width))}.version[_ngcontent-%COMP%]{position:absolute;z-index:9999;font-family:"monospace";color:var(--mat-sys-primary);font-size:16px;left:8px;bottom:4px;opacity:.5}']})};function Xt(t,r){if(t&1){let e=U();o(0,"a",3),g("click",function(){let i=P(e).$implicit,h=u();return B(h.activeNavLink=i.url)}),s(1),a()}if(t&2){let e=r.$implicit,n=u();T("routerLink",e.url)("active",n.activeNavLink==e.url),d(),V(" ",e.label," ")}}var be=class t{constructor(r,e){this.document=r;this.navigationBarService=e;this.navigationBarService.activeNavLink$.subscribe(n=>{this.activeNavLink=n})}activeNavLink="/home";links=[{label:"Home",url:"/home"},{label:"Hardware",url:"/hardware"},{label:"Pricing",url:"/pricing"},{label:"Experiments",url:"/experiments"}];static \u0275fac=function(e){return new(e||t)(p(E),p(ht))};static \u0275cmp=l({type:t,selectors:[["app-navbar"]],decls:5,vars:1,consts:[["tabPanel",""],["mat-tab-nav-bar","","mat-stretch-tabs","false","mat-align-tabs","center",3,"tabPanel"],["mat-tab-link","",3,"routerLink","active"],["mat-tab-link","",3,"click","routerLink","active"]],template:function(e,n){if(e&1&&(o(0,"nav",1),D(1,Xt,2,3,"a",2,We),a(),m(3,"mat-tab-nav-panel",null,0)),e&2){let i=J(4);T("tabPanel",i),d(),I(n.links)}},dependencies:[j,ut,lt,mt,pt,C],styles:["nav[_ngcontent-%COMP%]{position:sticky;top:0;background-color:var(--mat-sys-primary-container);z-index:1000;padding:8px;box-shadow:var(--mat-sys-level2)}  :root{--mat-tab-divider-height: 0px}"]})};var ye=class t{constructor(r,e,n){this.document=r;this.themeService=e;this.sanitizer=n;this.currentMode=e.getCurrentMode()}currentMode="auto";setReactiveMode(r){this.themeService.setThemeMode(r),this.currentMode=r}static \u0275fac=function(e){return new(e||t)(p(E),p(O),p(Qe))};static \u0275cmp=l({type:t,selectors:[["app-landing-layout"]],decls:10,vars:4,consts:[[1,"theme-switcher"],["matIconButton","","id","mode-light",1,"mode-button",3,"click"],["matIconButton","","id","mode-dark",1,"mode-button",3,"click"]],template:function(e,n){e&1&&(m(0,"app-navbar")(1,"router-outlet")(2,"app-footer-layout"),o(3,"div",0)(4,"button",1),g("click",function(){return n.setReactiveMode("light")}),o(5,"mat-icon"),s(6,"light_mode"),a()(),o(7,"button",2),g("click",function(){return n.setReactiveMode("dark")}),o(8,"mat-icon"),s(9,"dark_mode"),a()()()),e&2&&(d(4),w("display",n.currentMode==="dark"?"flex":"none"),d(3),w("display",n.currentMode==="dark"?"none":"flex"))},dependencies:[F,be,Y,C,q,tt],styles:[".theme-switcher[_ngcontent-%COMP%]{position:fixed;top:8px;right:24px;background-color:var(--mat-sys-inverse-primary);border-radius:50%;width:50px;height:50px;display:flex;justify-content:center;align-items:center;z-index:1000}"]})};var xe=class t{constructor(r){this.themeService=r;this.currentMode=r.getCurrentMode()}currentMode="auto";setReactiveMode(r){this.themeService.setThemeMode(r),this.currentMode=r}static \u0275fac=function(e){return new(e||t)(p(O))};static \u0275cmp=l({type:t,selectors:[["app-landing-layout"]],decls:1,vars:0,template:function(e,n){e&1&&m(0,"router-outlet")},dependencies:[F],encapsulation:2})};var xt=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"",component:ye,children:[{path:"home",loadComponent:()=>import("./chunk-NFL4HMD6.js").then(t=>t.Landing)},{path:"hardware",loadComponent:()=>import("./chunk-AOVKRQV3.js").then(t=>t.Hardware)},{path:"pricing",loadComponent:()=>import("./chunk-Q5WHEPBX.js").then(t=>t.Pricing)}]},{path:"",component:ve,children:[{path:"experiments",loadComponent:()=>import("./chunk-JKRSTVXL.js").then(t=>t.Experiments)},{path:"experiments/motor-imagery/unilateral",loadComponent:()=>import("./chunk-ARWW5XNA.js").then(t=>t.MotorImageryUnilateral)},{path:"experiments/motor-imagery",loadComponent:()=>import("./chunk-WPYMRBGC.js").then(t=>t.MotorImagery)},{path:"citation",loadComponent:()=>import("./chunk-UIY6UPL5.js").then(t=>t.Quotation)},{path:"glossary",loadComponent:()=>import("./chunk-32Z54KTV.js").then(t=>t.Glossary)},{path:"typography",loadComponent:()=>import("./chunk-SQB67LXG.js").then(t=>t.MaterialLayoutComponent)}]},{path:"",component:xe,children:[{path:"experiments/motor-imagery/unilateral/stimuli",loadComponent:()=>import("./chunk-43PBGUV4.js").then(t=>t.Stimuli)}]}];var Et={providers:[Ve(),Ue({eventCoalescing:!0}),$e(xt),{provide:se,useClass:de}]};var Ee=class t{constructor(r,e,n){this.document=r;this.themeService=e;e.applyMaterialThemeFromColor("#165AB7","html",e.getCurrentMode(),50,50),n.setDefaultFontSetClass("material-symbols-rounded")}static \u0275fac=function(e){return new(e||t)(p(E),p(O),p(ot))};static \u0275cmp=l({type:t,selectors:[["app-root"]],features:[H([{provide:se,useClass:de}])],decls:1,vars:0,template:function(e,n){e&1&&m(0,"router-outlet")},dependencies:[F],encapsulation:2})};je(Ee,Et).catch(t=>console.error(t));
