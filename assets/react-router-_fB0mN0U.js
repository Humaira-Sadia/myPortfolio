import{r as t}from"./react-g8F3bhkl.js";import{A as C,i as g,p as d,s as b}from"./@remix-run-3-jacJIO.js";/**
 * React Router v6.20.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const y=t.createContext(null),f=t.createContext(null);function E(){return t.useContext(f)!=null}function M(v){let{basename:x="/",children:P=null,location:e,navigationType:a=C.Pop,navigator:o,static:r=!1}=v;E()&&g(!1);let n=x.replace(/^\/*/,"/"),h=t.useMemo(()=>({basename:n,navigator:o,static:r}),[n,o,r]);typeof e=="string"&&(e=d(e));let{pathname:l="/",search:i="",hash:s="",state:u=null,key:c="default"}=e,m=t.useMemo(()=>{let p=b(l,n);return p==null?null:{location:{pathname:p,search:i,hash:s,state:u,key:c},navigationType:a}},[n,l,i,s,u,c,a]);return m==null?null:t.createElement(y.Provider,{value:h},t.createElement(f.Provider,{children:P,value:m}))}new Promise(()=>{});export{M as R};
