import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const a={email:"",message:""},r=document.querySelector(".feedback-form"),l="feedback-form-state",n=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch(o){console.log(o)}},c=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.log(t)}},m=()=>{const e=c(l);if(e===void 0)return;Object.keys(e).forEach(o=>{r.elements[o].value=e[o],a[o]=e[o]})};m();r.addEventListener("input",e=>{const{target:t}=e,o=t.name,s=t.value;a[o]=s,n(l,a)});r.addEventListener("submit",e=>{if(e.preventDefault(),Object.values(a).some(o=>o==="")){alert("Fill please all fields");return}console.log(a),e.currentTarget.reset(),localStorage.removeItem(l)});
//# sourceMappingURL=2-form.js.map
