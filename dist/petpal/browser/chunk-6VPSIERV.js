import{b as n}from"./chunk-IIU6TI27.js";import{U as i,X as o,ba as a}from"./chunk-5T7PLJSN.js";var p={production:!1,baseUrl:"https://petpal-api-latest-lvjc.onrender.com/api/v2"};var s=class e{authKey="petpal_auth";constructor(){}setAuthData(t){typeof window<"u"&&localStorage.setItem(this.authKey,JSON.stringify(t))}getAuthData(){if(typeof window<"u"&&localStorage.getItem(this.authKey)){let t=localStorage.getItem(this.authKey);return t?JSON.parse(t):null}return null}clearAuthData(){typeof window<"u"&&localStorage.removeItem(this.authKey)}static \u0275fac=function(r){return new(r||e)};static \u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"})};var u=class e{baseURL=`${p.baseUrl}/authenticacion`;http=a(n);storageService=a(s);constructor(){}login(t){return this.http.post(`${this.baseURL}/login`,t).pipe(i(r=>this.storageService.setAuthData(r)))}registerCustomer(t){return this.http.post(`${this.baseURL}/registrar/customer`,t)}registerCarer(t){return this.http.post(`${this.baseURL}/registrar/carer`,t)}logout(){this.storageService.clearAuthData()}isAuthenticated(){return this.storageService.getAuthData()!==null}getUserRole(){let t=this.storageService.getAuthData();return t?t.role:null}getUser(){let t=this.storageService.getAuthData();return t||null}static \u0275fac=function(r){return new(r||e)};static \u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"})};export{p as a,s as b,u as c};