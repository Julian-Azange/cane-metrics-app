"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4183],{4183:(u,s,e)=>{e.r(s),e.d(s,{ion_img:()=>o});var i=e(8737),n=e(4920),r=e(694);const o=class{constructor(t){(0,i.r)(this,t),this.ionImgWillLoad=(0,i.d)(this,"ionImgWillLoad",7),this.ionImgDidLoad=(0,i.d)(this,"ionImgDidLoad",7),this.ionError=(0,i.d)(this,"ionError",7),this.inheritedAttributes={},this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()},this.loadSrc=void 0,this.loadError=void 0,this.alt=void 0,this.src=void 0}srcChanged(){this.addIO()}componentWillLoad(){this.inheritedAttributes=(0,n.h)(this.el,["draggable"])}componentDidLoad(){this.addIO()}addIO(){void 0!==this.src&&(typeof window<"u"&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver(t=>{t[t.length-1].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){const{loadSrc:t,alt:h,onLoad:c,loadError:l,inheritedAttributes:g}=this,{draggable:f}=g;return(0,i.h)(i.f,{key:"da600442894427dee1974a28e545613afac69fca",class:(0,r.b)(this)},(0,i.h)("img",{key:"16df0c7069af86c0fa7ce5af598bc0f63b4eb71a",decoding:"async",src:t,alt:h,onLoad:c,onError:l,part:"image",draggable:a(f)}))}get el(){return(0,i.i)(this)}static get watchers(){return{src:["srcChanged"]}}},a=t=>{switch(t){case"true":return!0;case"false":return!1;default:return}};o.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);