import{a as U,b as K,c as He,d as ze,e as le,f as tt}from"./chunk-YI3G56Z6.js";import{a as se,b as de}from"./chunk-G4GHKAHU.js";import{a as Ye,b as ce,c as Je,d as Ce,h as it,i as rt,j as ot,k as at}from"./chunk-6Q56OY5B.js";import{a as et,b as nt}from"./chunk-7JSHWKEG.js";import{C as Qe,D as j,J as $e,K as Q,M as Ze,N as oe,O as qe,P as $,Q as Xe,R as ae,S as M,h as Le,j as Ge,m as re,p as We,u as Ue,v as Ke,x as je}from"./chunk-5UJKKF67.js";import{$ as s,$a as l,$b as ie,A as V,Ab as _,Bb as p,Cb as W,Db as N,E as Fe,Eb as ne,Fb as O,G as Se,Gb as C,H as ye,Hb as D,Ib as Z,Jb as P,Kb as v,Mb as c,Nb as A,Oa as d,Ob as B,R as xe,Rb as q,Sa as Be,T as b,Ta as y,Vb as Ve,X as L,Z as Ee,ab as H,cb as Y,ea as k,fa as F,fb as J,ga as Te,gb as ee,ha as G,hb as we,i as I,la as Oe,na as Pe,nb as te,ob as g,pb as f,q as be,qb as S,rb as Re,sa as X,sb as T,ta as Ae,tb as w,ub as x,vb as o,wb as a,x as Me,xb as u,z as ke,zb as z}from"./chunk-DG44AH6L.js";var st=["*"],vt=["content"],bt=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],yt=["mat-drawer","mat-drawer-content","*"];function xt(n,r){if(n&1){let e=z();o(0,"div",1),_("click",function(){k(e);let i=p();return F(i._onBackdropClicked())}),a()}if(n&2){let e=p();v("mat-drawer-shown",e._isShowingBackdrop())}}function Et(n,r){n&1&&(o(0,"mat-drawer-content"),N(1,2),a())}var Tt=new Ee("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:wt}),dt=new Ee("MAT_DRAWER_CONTAINER");function wt(){return!1}var De=(()=>{class n extends ce{_platform=s(re);_changeDetectorRef=s(ie);_container=s(Ne);constructor(){let e=s(X),t=s(Ye),i=s(ee);super(e,t,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:t}=this._container;return e!=null&&e.mode!=="over"&&e.opened||t!=null&&t.mode!=="over"&&t.opened}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=l({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(t,i){t&2&&(P("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),v("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[q([{provide:ce,useExisting:n}]),Y],ngContentSelectors:st,decls:1,vars:0,template:function(t,i){t&1&&(W(),N(0))},encapsulation:2,changeDetection:0})}return n})(),Ie=(()=>{class n{_elementRef=s(X);_focusTrapFactory=s(Ke);_focusMonitor=s(We);_platform=s(re);_ngZone=s(ee);_renderer=s(Be);_interactivityChecker=s(Ue);_doc=s(G,{optional:!0});_container=s(dt,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached;_anchor;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=j(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=j(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(j(e))}_opened=Pe(!1);_openedVia;_animationStarted=new I;_animationEnd=new I;openedChange=new J(!0);_openedStream=this.openedChange.pipe(V(e=>e),be(()=>{}));openedStart=this._animationStarted.pipe(V(()=>this.opened),ye(void 0));_closedStream=this.openedChange.pipe(V(e=>!e),be(()=>{}));closedStart=this._animationStarted.pipe(V(()=>!this.opened),ye(void 0));_destroyed=new I;onPositionChanged=new J;_content;_modeChanged=new I;_injector=s(Te);_changeDetectorRef=s(ie);constructor(){this.openedChange.pipe(b(this._destroyed)).subscribe(e=>{e?(this._doc&&(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement),this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement;Me(e,"keydown").pipe(V(t=>t.keyCode===27&&!this.disableClose&&!je(t)),b(this._destroyed)).subscribe(t=>this._ngZone.run(()=>{this.close(),t.stopPropagation(),t.preventDefault()})),this._eventCleanups=[this._renderer.listen(e,"transitionrun",this._handleTransitionEvent),this._renderer.listen(e,"transitionend",this._handleTransitionEvent),this._renderer.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{m(),h(),e.removeAttribute("tabindex")},m=this._renderer.listen(e,"blur",i),h=this._renderer.listen(e,"mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":we(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),i}_setOpen(e,t,i){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?this._setIsAnimating(!0):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&t&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(m=>{this.openedChange.pipe(Se(1)).subscribe(h=>m(h?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=!!this._container?.hasBackdrop&&this.opened)}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,i=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,t)),i.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}_handleTransitionEvent=e=>{let t=this._elementRef.nativeElement;e.target===t&&this._ngZone.run(()=>{e.type==="transitionrun"?this._animationStarted.next(e):(e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e))})};static \u0275fac=function(t){return new(t||n)};static \u0275cmp=l({type:n,selectors:[["mat-drawer"]],viewQuery:function(t,i){if(t&1&&O(vt,5),t&2){let m;C(m=D())&&(i._content=m.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(t,i){t&2&&(te("align",null)("tabIndex",i.mode!=="side"?"-1":null),P("visibility",!i._container&&!i.opened?"hidden":null),v("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:st,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,i){t&1&&(W(),o(0,"div",1,0),N(2),a())},dependencies:[ce],encapsulation:2,changeDetection:0})}return n})(),Ne=(()=>{class n{_dir=s($e,{optional:!0});_element=s(X);_ngZone=s(ee);_changeDetectorRef=s(ie);_animationDisabled=Qe();_transitionsEnabled=!1;_allDrawers;_drawers=new Ae;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=j(e)}_autosize=s(Tt);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:j(e)}_backdropOverride;backdropClick=new J;_start;_end;_left;_right;_destroyed=new I;_doCheckSubject=new I;_contentMargins={left:null,right:null};_contentMarginChanges=new I;get scrollable(){return this._userContent||this._content}_injector=s(Te);constructor(){let e=s(re),t=s(Je);this._dir?.change.pipe(b(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),t.change().pipe(b(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(xe(this._allDrawers),b(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(t=>!t._container||t._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(xe(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Fe(10),b(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,t=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();e+=i,t-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")t+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();t+=i,e-=i}}e=e||null,t=t||null,(e!==this._contentMargins.left||t!==this._contentMargins.right)&&(this._contentMargins={left:e,right:t},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(b(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(b(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(b(this._drawers.changes)).subscribe(()=>{we({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(b(ke(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let t=this._element.nativeElement.classList,i="mat-drawer-container-has-open";e?t.add(i):t.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=l({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(t,i,m){if(t&1&&(ne(m,De,5),ne(m,Ie,5)),t&2){let h;C(h=D())&&(i._content=h.first),C(h=D())&&(i._allDrawers=h)}},viewQuery:function(t,i){if(t&1&&O(De,5),t&2){let m;C(m=D())&&(i._userContent=m.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(t,i){t&2&&v("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[q([{provide:dt,useExisting:n}])],ngContentSelectors:yt,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(t,i){t&1&&(W(bt),g(0,xt,1,2,"div",0),N(1),N(2,1),g(3,Et,2,0,"mat-drawer-content")),t&2&&(f(i.hasBackdrop?0:-1),d(3),f(i._content?-1:3))},dependencies:[De],styles:[`.mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}
`],encapsulation:2,changeDetection:0})}return n})();var ct=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=L({imports:[Q,Ce,Ce,Q]})}return n})();function It(n,r){if(n&1&&c(0),n&2){let e=p().$implicit;B(" ",e.title," ")}}function Nt(n,r){n&1&&(o(0,"mat-icon"),c(1,"keyboard_arrow_down"),a())}function Mt(n,r){n&1&&(o(0,"mat-icon"),c(1,"keyboard_arrow_right"),a())}function kt(n,r){if(n&1&&c(0),n&2){let e=p().$implicit;B(" ",e.title," ")}}function Ft(n,r){if(n&1&&(o(0,"a",9)(1,"mat-icon"),c(2),a(),g(3,kt,1,1),a()),n&2){let e=r.$implicit,t=p(5);v("no-active-button",t.activeLink!==e.route),x("routerLink",e.route),d(2),A(e.icon),d(),f(e.title?3:-1)}}function St(n,r){if(n&1&&T(0,Ft,4,5,"a",8,S),n&2){let e=p().$implicit;w(e.children)}}function Ot(n,r){if(n&1&&(o(0,"a",7),g(1,Nt,2,0,"mat-icon")(2,Mt,2,0,"mat-icon"),c(3),a(),g(4,St,2,0)),n&2){let e=r.$implicit,t=p(3);v("no-active-button",t.activeLink!==e.route),x("routerLink",e.route),d(),f(t.activeLink!=null&&t.activeLink.startsWith(e.route)?1:2),d(2),B(" ",e.title," "),d(),f(t.activeLink!=null&&t.activeLink.startsWith(e.route)?4:-1)}}function Pt(n,r){if(n&1&&T(0,Ot,5,6,null,null,S),n&2){let e=p().$implicit;w(e.children)}}function At(n,r){if(n&1&&(o(0,"a",7)(1,"mat-icon"),c(2),a(),g(3,It,1,1),a(),g(4,Pt,2,0),u(5,"mat-divider")),n&2){let e=r.$implicit,t=p();v("no-active-button",t.activeLink!==e.route),x("routerLink",e.route),d(2),A(e.icon),d(),f(e.title?3:-1),d(),f(t.activeLink!=null&&t.activeLink.startsWith(e.route)?4:-1)}}function Bt(n,r){if(n&1&&c(0),n&2){let e=p().$implicit;B(" ",e.title," ")}}function Rt(n,r){if(n&1&&(o(0,"a",7)(1,"mat-icon"),c(2),a(),g(3,Bt,1,1),a()),n&2){let e=r.$implicit,t=p();v("no-active-button",t.activeLink!==e.route),x("routerLink",e.route),d(2),A(e.icon),d(),f(e.title?3:-1)}}var pe=class n{constructor(r,e,t){this.document=r;this.themeService=e;this.navigationService=t;this.currentMode=e.getCurrentMode(),this.navigationService.activeLink$.subscribe(i=>{this.activeLink=i})}currentMode="auto";activeLink="/home";setReactiveMode(r){this.themeService.setThemeMode(r),this.currentMode=r}items=[{title:"Experiments",icon:"experiment",route:"/experiments",children:[{title:"Motor Imagery",route:"/experiments/motor-imagery",children:[{title:"Unilateral",route:"/experiments/motor-imagery/unilateral"},{title:"Bilateral",route:"/experiments/motor-imagery/bilateral"}]},{title:"P300",route:"/experiments/p300"},{title:"SSVEP",route:"/experiments/ssvep"}]},{title:"Test Hardware",icon:"usb",route:"/hardware"}];items_end=[{title:"Definitions",icon:"auto_stories",route:"/docs",active:!1},{title:"Citation",icon:"format_quote",route:"/citation",active:!1},{title:"Shopping Cart",icon:"shopping_cart",route:"/shop",active:!1}];static \u0275fac=function(e){return new(e||n)(y(G),y(le),y(et))};static \u0275cmp=l({type:n,selectors:[["app-toolbar-layout"]],decls:15,vars:6,consts:[[1,"brand"],[1,"nav-start"],[1,"nav-end"],["matFab","","extended","",1,"button",3,"routerLink","no-active-button"],[1,"margin-top-large"],["matFab","","extended","","id","mode-light",1,"mode-button","no-active-button","theme-button",3,"click"],["matFab","","extended","","id","mode-dark",1,"mode-button","no-active-button","theme-button",3,"click"],["matFab","","extended","",1,"button",3,"routerLink"],["matFab","","extended","",1,"button","button-child",3,"routerLink","no-active-button"],["matFab","","extended","",1,"button","button-child",3,"routerLink"]],template:function(e,t){e&1&&(o(0,"nav"),u(1,"div",0),o(2,"div",1),T(3,At,6,6,null,null,S),a(),o(5,"div",2),T(6,Rt,4,5,"a",3,S),u(8,"div",4),o(9,"a",5),_("click",function(){return t.setReactiveMode("light")}),o(10,"mat-icon"),c(11,"light_mode"),a()(),o(12,"a",6),_("click",function(){return t.setReactiveMode("dark")}),o(13,"mat-icon"),c(14,"dark_mode"),a()()()()),e&2&&(d(),P("background-image","url(/assets/images/branding/cteno_logo_"+t.currentMode+".svg)"),d(2),w(t.items),d(3),w(t.items_end),d(3),P("display",t.currentMode==="dark"?"flex":"none"),d(3),P("display",t.currentMode==="dark"?"none":"flex"))},dependencies:[$,oe,M,ae,K,de,se,ct],styles:["nav[_ngcontent-%COMP%]{background-color:var(--mat-sys-surface-container);border-right:solid 1px var(--mat-sys-outline-variant);display:flex;flex-direction:column;width:var(--toolbar-width);height:100vh;align-items:center;padding:24px 0;position:fixed;top:0;z-index:1000;box-sizing:border-box}a[matFab][_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level0);width:calc(100% - 16px);border-radius:20px;height:40px;margin:4px 8px;justify-content:left}a[matFab].no-active-button[_ngcontent-%COMP%]{background-color:unset;width:calc(100% - 16px)}a[matFab].theme-button[_ngcontent-%COMP%]{justify-content:center}.nav-end[_ngcontent-%COMP%], .nav-start[_ngcontent-%COMP%]{width:100%}.nav-end[_ngcontent-%COMP%]{margin-top:auto}.button-child[_ngcontent-%COMP%]{padding-left:48px}.brand[_ngcontent-%COMP%]{margin:0 auto 24px;width:90%;height:100px;background-size:contain;background-position:center;background-repeat:no-repeat;border:10px solid transparent;box-sizing:border-box}"]})};var Vt=["*"],ue=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["app-container"]],ngContentSelectors:Vt,decls:2,vars:0,consts:[[1,"app-container"]],template:function(e,t){e&1&&(W(),o(0,"section",0),N(1),a())},styles:[".app-container[_ngcontent-%COMP%]{box-sizing:border-box;max-width:1440px;margin:0 auto;padding-left:100px}"]})};var ut=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=L({})}return n})();var mt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=H({type:n});static \u0275inj=L({imports:[ut,Q,Q]})}return n})();function zt(n,r){if(n&1&&(o(0,"a",3),c(1),a()),n&2){let e=p().$implicit;x("routerLink",e.url),d(),A(e.label)}}function Wt(n,r){if(n&1&&(o(0,"button",4),c(1),a()),n&2){let e=p().$implicit;d(),A(e.label)}}function Ut(n,r){if(n&1&&(o(0,"li",2),g(1,zt,2,2,"a",3)(2,Wt,2,1,"button",4),a()),n&2){let e=r.$index,t=r.$count;v("active",e===t-1),d(),f(e!==t-1?1:2)}}var me=class n{constructor(r){this.breadcrumbService=r;this.breadcrumbService.breadcrumbs$.subscribe(e=>this.breadcrumbs=e)}breadcrumbs=[];static \u0275fac=function(e){return new(e||n)(y(nt))};static \u0275cmp=l({type:n,selectors:[["app-breadcrumb"]],inputs:{breadcrumbs:"breadcrumbs"},decls:5,vars:0,consts:[[1,"breadcrumb"],[1,"breadcrumb-item",3,"active"],[1,"breadcrumb-item"],["mat-button","","target","_parent",3,"routerLink"],["mat-button",""]],template:function(e,t){e&1&&(o(0,"nav")(1,"ol",0),T(2,Ut,3,3,"li",1,S),a()(),u(4,"mat-divider")),e&2&&(d(2),w(t.breadcrumbs))},dependencies:[ze,K,Le,$,Ze,M,de,se],styles:['.breadcrumb[_ngcontent-%COMP%]{box-sizing:border-box;display:flex;flex-wrap:wrap;padding:0 1rem;list-style:none}.breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{content:"/";padding:0 8px;color:var(--mat-sys-primary)}.breadcrumb[_ngcontent-%COMP%]   a[mat-button][_ngcontent-%COMP%], .breadcrumb[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%]{color:var(--mat-sys-primary)}  :root{--mat-divider-color: var(--mat-sys-outline-variant)}']})};var he=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["app-console"]],decls:2,vars:0,template:function(e,t){e&1&&(o(0,"pre"),c(1,`
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

`),a())},styles:["pre[_ngcontent-%COMP%]{width:100%;height:100%;max-height:100%;overflow-y:auto;overflow-x:hidden;background-color:#121212;color:#e0e0e0;font-family:Courier New,monospace;font-size:.85rem;line-height:1.4;white-space:pre-wrap;word-wrap:break-word;padding:1rem;border-radius:6px;display:flex;flex-direction:column-reverse;box-sizing:border-box}"]})};var Kt=["tree"],ge=class n{dataSource=jt;tree;childrenAccessor=r=>r.children??[];hasChild=(r,e)=>!!e.children&&e.children.length>0;ngAfterViewInit(){this.tree.expandAll()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["app-root"]],viewQuery:function(e,t){if(e&1&&O(Kt,5),e&2){let i;C(i=D())&&(t.tree=i.first)}},decls:17,vars:0,consts:[["drawer",""],["autosize",""],["mode","side","position","end"],["matMiniFab","",1,"button-drawer-close",3,"click"],[1,"drawer-container"],["matFab","","extended","",1,"button-drawer",3,"click"]],template:function(e,t){if(e&1){let i=z();o(0,"mat-drawer-container",1),u(1,"app-toolbar-layout")(2,"app-breadcrumb"),o(3,"app-container"),u(4,"router-outlet"),a(),u(5,"app-footer-layout"),o(6,"mat-drawer",2,0)(8,"button",3),_("click",function(){k(i);let h=Z(7);return F(h.toggle())}),o(9,"mat-icon"),c(10,"close"),a()(),o(11,"div",4),u(12,"app-console"),a()(),o(13,"button",5),_("click",function(){k(i);let h=Z(7);return F(h.toggle())}),o(14,"mat-icon"),c(15,"terminal"),a(),c(16," Console "),a()()}},dependencies:[U,pe,ue,tt,$,qe,oe,Ie,Ne,M,ae,mt,me,he],styles:[":root{--mat-sidenav-container-width: 700px}mat-drawer-container[_ngcontent-%COMP%]{height:100vh;background-color:unset;box-sizing:border-box}mat-drawer[_ngcontent-%COMP%]{height:100vh;box-shadow:var(--mat-sys-level2);overflow:visible;z-index:1000}.button-drawer[_ngcontent-%COMP%]{position:fixed;top:100px;right:0;box-shadow:var(--mat-sys-level2);border-radius:var(--mat-sys-corner-large) 0 0 var(--mat-sys-corner-large)}.button-drawer-close[_ngcontent-%COMP%]:hover, .button-drawer-close[_ngcontent-%COMP%]{box-shadow:var(--mat-sys-level0);position:absolute;top:4px;right:4px;background-color:var(--mat-sys-surface-container);color:var(--mat-sys-error)}.drawer-container[_ngcontent-%COMP%]{padding:16px;margin-top:32px;height:calc(100% - 80px)}app-breadcrumb[_ngcontent-%COMP%], app-footer-layout[_ngcontent-%COMP%]{display:block;position:relative;left:var(--toolbar-width);width:calc(100vw - var(--toolbar-width))}"]})},jt=[{name:"Experiments",children:[{name:"Motor Imagery",children:[{name:"MotorImageryUnilateral Motor Imagery",link:"/experiments/motor-imagery/unilateral"},{name:"Bilateral Motor Imagery",link:"/experiments/motor-imagery/bilateral"},{name:"Feet Motor Imagery",link:"/experiments/motor-imagery/feet"}]},{name:"P300"},{name:"SSVEP"}]}];function Qt(n,r){if(n&1){let e=z();o(0,"a",3),_("click",function(){let i=k(e).$implicit,m=p();return F(m.activeLink=i.url)}),c(1),a()}if(n&2){let e=r.$implicit,t=p();x("routerLink",e.url)("active",t.activeLink==e.url),d(),B(" ",e.label," ")}}var fe=class n{activeLink="/home";links=[{label:"Home",url:"/home"},{label:"Hardware",url:"/hardware"},{label:"Pricing",url:"/pricing"},{label:"Experiments",url:"/experiments"}];static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["app-navbar"]],decls:5,vars:1,consts:[["tabPanel",""],["mat-tab-nav-bar","","mat-stretch-tabs","false","mat-align-tabs","center",3,"tabPanel"],["mat-tab-link","",3,"routerLink","active"],["mat-tab-link","",3,"click","routerLink","active"]],template:function(e,t){if(e&1&&(o(0,"nav",1),T(1,Qt,2,3,"a",2,Re),a(),u(3,"mat-tab-nav-panel",null,0)),e&2){let i=Z(4);x("tabPanel",i),d(),w(t.links)}},dependencies:[K,at,it,ot,rt,M],styles:["nav[_ngcontent-%COMP%]{position:sticky;top:0;background-color:var(--mat-sys-primary-container);z-index:1000;padding:8px;box-shadow:var(--mat-sys-level2)}  :root{--mat-tab-divider-height: 0px}"]})};var _e=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=l({type:n,selectors:[["app-landing-layout"]],decls:2,vars:0,template:function(e,t){e&1&&u(0,"app-navbar")(1,"router-outlet")},dependencies:[U,fe],encapsulation:2})};var ht=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"",component:_e,children:[{path:"home",loadComponent:()=>import("./chunk-QOKUHDPN.js").then(n=>n.Landing)}]},{path:"",component:ge,children:[{path:"experiments",loadComponent:()=>import("./chunk-CX362XJ3.js").then(n=>n.Experiments)},{path:"experiments/motor-imagery/unilateral",loadComponent:()=>import("./chunk-MD2CTVEX.js").then(n=>n.MotorImageryUnilateral)},{path:"experiments/motor-imagery",loadComponent:()=>import("./chunk-7OOYHHJ4.js").then(n=>n.MotorImagery)},{path:"citation",loadComponent:()=>import("./chunk-MR6ZPBYN.js").then(n=>n.Quotation)},{path:"typography",loadComponent:()=>import("./chunk-NUPHPKBM.js").then(n=>n.MaterialLayoutComponent)}]}];var gt={providers:[Oe(),Ve({eventCoalescing:!0}),He(ht)]};var ve=class n{constructor(r,e,t){this.document=r;this.themeService=e;e.applyMaterialThemeFromColor("#165AB7","html",e.getCurrentMode(),50,50),t.setDefaultFontSetClass("material-symbols-rounded")}static \u0275fac=function(e){return new(e||n)(y(G),y(le),y(Xe))};static \u0275cmp=l({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){e&1&&u(0,"router-outlet")},dependencies:[U],encapsulation:2})};Ge(ve,gt).catch(n=>console.error(n));
