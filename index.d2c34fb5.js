const e=document.querySelector("select.breed-select"),s=document.querySelector(".loader"),t=document.querySelector(".error");let i=[];e.classList.add("is-hidden"),t.classList.add("is-hidden"),fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_DWnryEvKWXcqeFK76djLNUR95YisUbO5IiYhoUFb6kOXJ7d52fSO10G4XSngGkna"}}).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((t=>{e.classList.remove("is-hidden"),s.classList.add("is-hidden"),i=t;let d=null;d=i.map((e=>`<option value="${e.id}">${e.name}</option>`)).join(""),e.innerHTML=d})).catch((function(e){t.classList.remove("is-hidden"),s.classList.add("is-hidden"),console.log(e)}));
//# sourceMappingURL=index.d2c34fb5.js.map
