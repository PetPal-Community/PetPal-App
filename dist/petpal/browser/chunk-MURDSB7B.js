import{a as Kt,b as qt,c as V,d as j,e as K,f as ct,g as lt,h as mt,i as pt,j as q,k as G,l as Gt,m as Yt,n as $t,o as Xt,p as k,q as Y,r as Ht}from"./chunk-JFQ3G5QZ.js";import{$ as et,Ba as L,V as Vt,_ as tt,b as B,c as D,ca as ot,da as it,e as N,ea as nt,f as X,fa as rt,ga as jt,ha as at,i as It,j as H,ja as st,k as Tt,m as W,n as J,o as Rt,p as Bt,q as Nt,r as zt,s as Lt,t as Q,u as z,v as Z}from"./chunk-7GFHDCSD.js";import{c as S}from"./chunk-6VPSIERV.js";import{h as kt,i as At,j as R}from"./chunk-IIU6TI27.js";import"./chunk-EJJBCPAK.js";import{Ac as Dt,Cc as F,Ka as h,Kb as a,Lb as x,Mb as b,Na as s,Ob as ht,Pb as Ft,Qb as St,Sb as _,Tb as wt,Ub as Et,Vb as Ot,Wb as O,Xb as P,a as Ut,ba as c,db as g,fa as C,hb as p,mb as u,nb as Mt,ob as yt,pa as w,pb as A,qa as E,qb as I,rb as n,sb as i,tb as m,ub as T,xb as d,yc as $,zb as v,zc as Pt}from"./chunk-5T7PLJSN.js";var dt=class e{authService=c(S);router=c(R);isAuthenticated=!1;ngOnInit(){this.isAuthenticated=this.authService.isAuthenticated()}logOut(){this.authService.logout(),this.isAuthenticated=!1,this.router.navigate(["/auth/login"])}verPerfil(){this.router.navigate(["/carer/profile"])}irContratos(){this.router.navigate(["/carer/contratos"])}irServicios(){this.router.navigate(["/carer/servicios"])}irReviews(){this.router.navigate(["/carer/reviews"])}irMensajes(){this.router.navigate(["/carer/mensajes"])}reporte(){this.router.navigate(["/carer/reporte"])}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-navbar-carer"]],standalone:!0,features:[_],decls:32,vars:0,consts:[[1,"navbar","navbar-expand-lg"],["href","#",1,"navbar-brand","mx-auto"],["src","../../../../assets/img/Logo.png","alt","Logo","width","50","height","50",1,"d-inline-block","align-top"],[1,"container-fluid"],[1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto"],[1,"nav-item"],[1,"nav-link",3,"click"],[1,"d-flex"],[1,"dropdown"],["type","button","id","dropdownMenuButton","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-secondary","dropdown-toggle"],[1,"fa-solid","fa-user"],["aria-labelledby","dropdownMenuButton",1,"dropdown-menu","dropdown-menu-end"],[1,"dropdown-item",3,"click"]],template:function(t,r){t&1&&(n(0,"nav",0)(1,"a",1),m(2,"img",2),i(),n(3,"div",3)(4,"div",4)(5,"ul",5)(6,"li",6)(7,"a",7),d("click",function(){return r.irServicios()}),a(8,"Servicios"),i()(),n(9,"li",6)(10,"a",7),d("click",function(){return r.irContratos()}),a(11,"Contratos"),i()(),n(12,"li",6)(13,"a",7),d("click",function(){return r.irReviews()}),a(14,"Reviews"),i()(),n(15,"li")(16,"a",7),d("click",function(){return r.irMensajes()}),a(17,"Mensajes"),i()()()(),n(18,"div",8)(19,"div",9)(20,"button",10),m(21,"i",11),i(),n(22,"ul",12)(23,"li")(24,"a",13),d("click",function(){return r.verPerfil()}),a(25,"Perfil"),i()(),n(26,"li")(27,"a",13),d("click",function(){return r.reporte()}),a(28,"ver Reporte de ingresos"),i()(),n(29,"li")(30,"a",13),d("click",function(){return r.logOut()}),a(31,"Cerrar sesi\xF3n"),i()()()()()()())},styles:['@font-face{font-family:Keania One;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/keaniaone/v24/zOL54pXJk65E8pXardnu-c1kvthH.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Keania One;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/keaniaone/v24/zOL54pXJk65E8pXardnu-cNkvg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.navbar[_ngcontent-%COMP%]{background-color:#bf812e}.nav-link[_ngcontent-%COMP%]{text-align:left;font-family:Keania One,sans-serif;color:#fff;padding-bottom:9px;display:inline-block;text-decoration:none;border-bottom:2px solid transparent;font-size:16px;margin:10px}']})};var ft=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-carer-layout"]],standalone:!0,features:[_],decls:3,vars:0,consts:[[1,"layout-content"]],template:function(t,r){t&1&&(m(0,"app-navbar-carer"),n(1,"div",0),m(2,"router-outlet"),i())},dependencies:[F,dt,At]})};function ee(e,o){if(e&1&&(n(0,"mat-option",4),a(1),i()),e&2){let t=o.$implicit;p("value",t.value),s(),x(t.viewValue)}}function oe(e,o){e&1&&(n(0,"mat-error"),a(1,"Este campo es obligatorio"),i())}function ie(e,o){e&1&&(n(0,"mat-error"),a(1,"Este campo es obligatorio"),i())}var gt=class e{pagoForm;pf=c(Q);pagoService=c(Ht);snackBar=c(L);contratoService=c(Y);metodosPagos=[{value:"paypal",viewValue:"PayPal"},{value:"tarjetaCredito",viewValue:"Tarjeta de Credito"},{value:"tarjetaDebido",viewValue:"Tarjeta de Debito"}];dialogRef=c(V);contratoId=c(j);constructor(){this.pagoForm=this.pf.group({metodoPago:["",[D.required]],valorPago:["",[D.required]]})}controlHasError(o,t){return this.pagoForm.get(o)?.hasError(t)||!1}crearPago(){if(this.contratoId){let o=this.pagoForm.value;o.contratacionIdd=this.contratoId,this.pagoService.crearPago(o).subscribe({next:t=>{this.showSnackBar("Pago creado correctamente"),this.contratoService.actualizarEstadoContrato(this.contratoId,"Aceptado").subscribe({next:r=>{this.dialogRef.close()},error:r=>{this.showSnackBar(r.error.message||"Error al actualizar el estado del contrato")}})},error:t=>{this.showSnackBar(t.error.message||"Error al crear el pago")}})}}showSnackBar(o){this.snackBar.open(o,"Close",{duration:2e3,verticalPosition:"top"})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-pagos"]],standalone:!0,features:[_],decls:21,vars:4,consts:[["mat-dialog-title",""],[3,"ngSubmit","formGroup"],["appearance","outline",1,"Metodo-Pago"],["formControlName","metodoPago","name","metodoPago"],[3,"value"],["appearance","outline",1,"Valor-Pago"],["matInput","","formControlName","valorPago"],["appearance","outline"],["mat-button","","mat-dialog-close",""],["mat-button","","type","submit",3,"disabled"]],template:function(t,r){t&1&&(n(0,"h3",0),a(1,"Formulario del Pago"),i(),n(2,"mat-dialog-content")(3,"form",1),d("ngSubmit",function(){return r.crearPago()}),n(4,"mat-form-field",2)(5,"mat-label"),a(6," Metodo de Pago: "),i(),n(7,"mat-select",3),A(8,ee,2,2,"mat-option",4,Mt),i(),g(10,oe,2,0,"mat-error"),i(),n(11,"mat-form-field",5)(12,"mat-label"),a(13," Ingrese el valor del pago final"),i(),m(14,"input",6),g(15,ie,2,0,"mat-error"),i(),n(16,"mat-dialog-actions",7)(17,"button",8),a(18,"Cancelar"),i(),n(19,"button",9),a(20," Crear Pago"),i()()()()),t&2&&(s(3),p("formGroup",r.pagoForm),s(5),I(r.metodosPagos),s(2),u(r.controlHasError("metodoPago","required")?10:-1),s(5),u(r.controlHasError("valorPago","required")?15:-1),s(4),p("disabled",r.pagoForm.invalid))},dependencies:[z,H,B,N,X,it,ot,tt,et,q,ct,lt,pt,mt,Z,W,J,rt,nt,qt,Kt,Vt],styles:["mat-dialog-content[_ngcontent-%COMP%]{padding:20px;font-family:Arial,sans-serif}h3[mat-dialog-title][_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;text-align:center;margin-bottom:15px;color:#3f51b5}mat-form-field.Metodo-Pago[_ngcontent-%COMP%], mat-form-field.Valor-Pago[_ngcontent-%COMP%]{display:block;width:100%;margin-bottom:20px;padding:10px 0}.mat-form-field-infix[_ngcontent-%COMP%]{padding:12px}mat-label[_ngcontent-%COMP%]{font-size:1rem;color:#333}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-top:15px}button[mat-button][_ngcontent-%COMP%]{font-weight:700;color:#fff;padding:8px 16px;border:none;border-radius:4px;margin:5px;cursor:pointer;transition:background-color .3s ease}button[type=submit][_ngcontent-%COMP%]{background-color:#29ac64}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#60f0a1}button[mat-dialog-close][_ngcontent-%COMP%]{background-color:#757575}button[mat-dialog-close][_ngcontent-%COMP%]:hover{background-color:#5a5a5a}mat-error[_ngcontent-%COMP%]{font-size:.9rem;color:#d32f2f}"]})};var ne=(e,o)=>o.id,re=(e,o,t,r)=>({"tag-teal":e,"tag-purple":o,"tag-pink":t,"tag-red":r});function ae(e,o){if(e&1){let t=T();n(0,"a",12),d("click",function(){w(t);let l=v().$implicit,f=v();return E(f.iniciarContrato(l.id))}),a(1,"Iniciar contrato"),i()}}function se(e,o){if(e&1){let t=T();n(0,"a",13),d("click",function(){w(t);let l=v().$implicit,f=v();return E(f.finContrato(l.id))}),a(1,"Fin contrato"),i()}}function ce(e,o){if(e&1&&(n(0,"p"),a(1),i()),e&2){let t=v().$implicit;s(),b(" Precio final del contrato: S/. ",t.pagoContrato," ")}}function le(e,o){if(e&1&&(n(0,"p"),a(1),i()),e&2){let t=v().$implicit;s(),b(" Estado del pago: ",t.pagoEstado.toLowerCase()," ")}}function me(e,o){if(e&1&&(m(0,"img",9),O(1,"apiImg")),e&2){let t=v().$implicit;p("src",P(1,1,t.picRutaUsuario),h)}}function pe(e,o){e&1&&m(0,"img",10),e&2&&p("src","../../../../../assets/img/no-profile-picture.png",h)}function de(e,o){if(e&1){let t=T();n(0,"div",4)(1,"a",14),d("click",function(){w(t);let l=v().$implicit,f=v();return E(f.rechazar(l.id))}),a(2,"Rechazar"),i(),n(3,"a",15),d("click",function(){w(t);let l=v().$implicit,f=v();return E(f.crearPago(l.id))}),a(4," Aceptar "),i()()}}function fe(e,o){if(e&1&&(n(0,"div",2)(1,"div",3)(2,"div",4)(3,"span",5),a(4),i(),g(5,ae,2,0,"a",6)(6,se,2,0,"a",7),i(),n(7,"h4"),a(8),i(),n(9,"p"),a(10),i(),n(11,"p"),a(12),i(),g(13,ce,2,1,"p")(14,le,2,1,"p"),n(15,"div",8),g(16,me,2,3,"img",9)(17,pe,1,1,"img",10),n(18,"div",11)(19,"h5"),a(20),i(),n(21,"small"),a(22),i()()(),g(23,de,5,0,"div",4),i()()),e&2){let t=o.$implicit;s(3),p("ngClass",Ot(12,re,t.estado==="En proceso",t.estado==="Aceptado",t.estado==="Finalizado",t.estado==="Anulado")),s(),b(" ",t.estado," "),s(),u(t.estado==="Aceptado"&&t.pagoEstado!="PENDING"?5:t.estado==="En proceso"?6:-1),s(3),x(t.servicioTipoServicio),s(2),b(" ",t.detalles," "),s(2),b(" Precio del servicio: S/. ",t.servicioPrecio," "),s(),u(t.pagoContrato?13:-1),s(),u(t.pagoEstado?14:-1),s(2),u(t.picRutaUsuario?16:17),s(4),x(t.usuarioNombreComplt),s(2),b("",t.duracionContrato," de contrato"),s(),u(t.estado==="Sin confirmar"?23:-1)}}function ge(e,o){e&1&&(n(0,"p"),a(1," Estamos en busqueda de contratos \u{1F9D0}"),i())}var ut=class e{contratos=[];authService=c(S);contratoService=c(Y);dialog=c(K);ngOnInit(){this.cargarContratos()}cargarContratos(){let t=this.authService.getUser()?.id;t&&this.contratoService.getContratoByCarerId(t).subscribe({next:r=>{this.contratos=r,console.log(this.contratos)}})}crearPago(o){this.dialog.open(gt,{data:o})}rechazar(o){this.contratoService.actualizarEstadoContrato(o,"Anulado").subscribe()}iniciarContrato(o){this.contratoService.actualizarEstadoContrato(o,"En proceso").subscribe(),window.location.reload()}finContrato(o){this.contratoService.actualizarEstadoContrato(o,"Finalizado").subscribe(),window.location.reload()}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-contratos-list"]],standalone:!0,features:[_],decls:7,vars:1,consts:[[1,"Titulo"],[1,"container"],[1,"card"],[1,"card-body"],[1,"tag-container"],[1,"tag",3,"ngClass"],[1,"editar-link","tag","tag-ini"],[1,"editar-link","tag","tag-fin"],[1,"user"],["alt","Imagen del perfil",3,"src"],["alt","No-imagen",3,"src"],[1,"user-info"],[1,"editar-link","tag","tag-ini",3,"click"],[1,"editar-link","tag","tag-fin",3,"click"],[1,"tagge","no-aceptar",3,"click"],[1,"tagge","aceptar",3,"click"]],template:function(t,r){t&1&&(n(0,"div",0)(1,"h2"),a(2,"Mis Contratos"),i()(),n(3,"div",1),A(4,fe,24,17,"div",2,ne,!1,ge,2,0,"p"),i()),t&2&&(s(4),I(r.contratos))},dependencies:[F,$,G],styles:['@font-face{font-family:Keania One;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/keaniaone/v24/zOL54pXJk65E8pXardnu-c1kvthH.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Keania One;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/keaniaone/v24/zOL54pXJk65E8pXardnu-cNkvg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4mxK.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.Titulo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Keania One,serif;font-weight:400;font-style:normal;font-size:50px;padding:20px;color:#734226e6}*[_ngcontent-%COMP%]{box-sizing:border-box;text-align:center}body[_ngcontent-%COMP%]{background-color:#f3fbfb;font-family:Open Sans,sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0}.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;width:940px;margin:auto}.card[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;box-shadow:0 2px 20px #0000001a;overflow:hidden;width:300px}.card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:200px;object-fit:cover}.card-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;padding:20px;min-height:250px}.tag[_ngcontent-%COMP%]{background-color:#ccc;color:#fff;border-radius:50px;font-size:12px;margin:0;padding:2px 10px;text-transform:uppercase}.tag-teal[_ngcontent-%COMP%]{background-color:#92d4e4}.tag-purple[_ngcontent-%COMP%]{background-color:#3d1d94}.tag-pink[_ngcontent-%COMP%]{background-color:#c62bcd}.tag-red[_ngcontent-%COMP%]{background-color:red}.tag-ini[_ngcontent-%COMP%]{background-color:#a3700a}.tag-fin[_ngcontent-%COMP%]{background-color:#06719b}.card-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:10px 0}.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;margin:0 0 20px;font-weight:500;color:#464444}.user[_ngcontent-%COMP%]{display:flex;margin-top:auto}.user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;margin-right:10px;object-fit:cover}.user-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin:0}.user-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#888785}.tag-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}.tagge[_ngcontent-%COMP%]{background-color:#e48c8c;color:#fff;border-radius:50px;font-size:12px;padding:2px 10px;text-transform:uppercase;text-decoration:none}.aceptar[_ngcontent-%COMP%]{margin-left:auto;background-color:#087e2f;text-decoration:none}.tag-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.editar-link[_ngcontent-%COMP%]{color:#f5f5f5;text-decoration:none;font-weight:700;cursor:pointer;margin-left:10px}.editar-link[_ngcontent-%COMP%]:hover{text-decoration:underline}.tagge[_ngcontent-%COMP%]:hover{opacity:.8}']})};function ve(e,o){e&1&&a(0,"Editar")}function Ce(e,o){e&1&&a(0,"Crear")}function _e(e,o){e&1&&a(0," Vamos a editar el servicio ")}function be(e,o){e&1&&a(0,"\xBF Que servicio crearemos ?")}function xe(e,o){e&1&&(n(0,"mat-error"),a(1,"Este campo es obligatorio"),i())}function he(e,o){e&1&&(n(0,"mat-error"),a(1,"Este campo es obligatorio"),i())}function Fe(e,o){e&1&&(n(0,"mat-error"),a(1,"Este campo es obligatorio"),i())}function Se(e,o){e&1&&a(0,"Editar Servicio")}function Ue(e,o){e&1&&a(0,"Crear Servicio")}var y=class e{serviceForm;sf=c(Q);router=c(R);route=c(kt);authService=c(S);snackBar=c(L);sservice=c(k);mediaService=c(Yt);dialogRef=c(V);data=c(j);id;constructor(){this.serviceForm=this.sf.group({tipo_servicio:[" ",[D.required]],descripcion:[" ",[D.required]],precio:[" ",[D.required]],picRuta:[""]})}ngOnInit(){this.data&&this.data.id&&(console.log("Servicio ID recibido en el di\xE1logo:",this.data.id),this.id=this.data.id,console.log("Servicio:",this.id),this.cargarServicioForEditar())}cargarServicioForEditar(){this.sservice.obtenerServicioCarerbyId(this.id).subscribe({next:o=>{this.serviceForm.patchValue(Ut({},o))},error:o=>{this.showSnackBar("Error al cargar el servicio")}})}uploadFile(o,t){let r=o.target.files?.[0];if(r){let l=new FormData;l.append("file",r),this.mediaService.subirArchivo(l).subscribe({next:f=>{this.serviceForm.get(t)?this.serviceForm.get(t).setValue(f.path):console.warn(`El control '${t}' no est\xE1 definido en el formulario.`)},error:()=>this.showSnackBar("Error al cargar el archivo.")}),console.log("Control:",t,"Formulario:",this.serviceForm.controls)}}onSubmit(){if(this.serviceForm.valid){let t=this.authService.getUser()?.id;if(t){let r=this.serviceForm.value;r.cuidadorGId=t,(this.id?this.sservice.updateService(this.id,r):this.sservice.crearServicioCarer(r)).subscribe({next:()=>{this.showSnackBar("Servicio guardado exitosamente"),this.dialogRef.close(),window.location.reload()},error:f=>{this.showSnackBar(f.error.message||"Error al guardar el servicio")}})}}else{this.serviceForm.markAllAsTouched();return}}controlHasError(o,t){return this.serviceForm.get(o)?.hasError(t)||!1}showSnackBar(o){this.snackBar.open(o,"Close",{duration:2e3,verticalPosition:"top"})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-servicio-dialog"]],standalone:!0,features:[_],decls:34,vars:8,consts:[["mat-dialog-title",""],[3,"ngSubmit","formGroup"],["appearance","outline"],["matInput","","formControlName","tipo_servicio"],["matInput","","formControlName","descripcion"],["matInput","","formControlName","precio"],[1,"file-upload","w-100"],["type","file","accept",".png,.jpg,.jpeg",1,"form-control",3,"change"],["mat-button","","type","submit",3,"disabled"],["mat-button","","mat-dialog-close",""]],template:function(t,r){t&1&&(n(0,"h2",0),g(1,ve,1,0)(2,Ce,1,0),a(3," Servicio"),i(),n(4,"mat-dialog-content")(5,"form",1),d("ngSubmit",function(){return r.onSubmit()}),n(6,"p"),g(7,_e,1,0)(8,be,1,0),i(),n(9,"mat-form-field",2)(10,"mat-label"),a(11,"Tipo de Servicio"),i(),m(12,"input",3),g(13,xe,2,0,"mat-error"),i(),n(14,"mat-form-field",2)(15,"mat-label"),a(16,"Descripci\xF3n"),i(),m(17,"textarea",4),g(18,he,2,0,"mat-error"),i(),n(19,"mat-form-field",2)(20,"mat-label"),a(21,"Precio"),i(),m(22,"input",5),g(23,Fe,2,0,"mat-error"),i(),n(24,"div",6)(25,"label"),a(26,"Imagen del servicio"),i(),n(27,"input",7),d("change",function(f){return r.uploadFile(f,"picRuta")}),i()(),n(28,"mat-dialog-actions",2)(29,"button",8),g(30,Se,1,0)(31,Ue,1,0),i(),n(32,"button",9),a(33,"Cancelar"),i()()()()),t&2&&(s(),u(r.id?1:2),s(4),p("formGroup",r.serviceForm),s(2),u(r.id?7:8),s(6),u(r.controlHasError("tipo_servicio","required")?13:-1),s(5),u(r.controlHasError("descripcion","required")?18:-1),s(5),u(r.controlHasError("precio","required")?23:-1),s(6),p("disabled",r.serviceForm.invalid),s(),u(r.id?30:31))},dependencies:[F,it,ot,tt,et,rt,nt,z,H,B,N,X,st,at,lt,q,ct,pt,mt,Z,W,J],styles:["h2[mat-dialog-title][_ngcontent-%COMP%]{font-size:1.5rem;color:#3f51b5;margin-bottom:1rem;text-align:center}mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:1rem}input[matInput][_ngcontent-%COMP%], textarea[matInput][_ngcontent-%COMP%]{font-size:1rem}mat-dialog-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:1rem}button[mat-button][_ngcontent-%COMP%]{font-weight:700}button[type=submit][_ngcontent-%COMP%]{background-color:#4caf50;color:#fff}button[type=submit][_ngcontent-%COMP%]:disabled{background-color:#c8e6c9}button[mat-dialog-close][_ngcontent-%COMP%]{color:#f44336}"],changeDetection:0})};function Me(e,o){if(e&1&&(m(0,"img",1),O(1,"apiImg")),e&2){let t=v();p("src",P(1,1,t.servicio.picRuta),h)}}function ye(e,o){e&1&&m(0,"img",2),e&2&&p("src","../../../../../../assets/img/no-image.png",h)}var vt=class e{dialogRef=c(V);data=c(j);serviceId;sservice=c(k);snackBar=c(L);dialog=c(K);servicioService=c(k);servicio={};ngOnInit(){this.serviceId=this.data,this.cargarServicio()}cargarServicio(){this.sservice.obtenerServicioCarerbyId(this.serviceId).subscribe({next:o=>{this.servicio=o},error:o=>{this.showSnackBar("Error al cargar el servicio")}})}showSnackBar(o){this.snackBar.open(o,"Close",{duration:2e3,verticalPosition:"top"})}cerrar(){this.dialogRef.close()}editar(o){let t=this.dialog.open(y,{data:{id:o}})}eliminar(o){this.servicioService.deleteService(o).subscribe({next:()=>{this.dialogRef.close(),window.location.reload()},error:t=>{console.log("Error"+t)}})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-servicio-details"]],standalone:!0,features:[_],decls:26,vars:5,consts:[[1,"servicio-dialog-container"],["alt","Imagen del servicio",1,"servicio-image",3,"src"],["alt","aaaa",1,"servicio-image",3,"src"],[1,"servicio-title"],[1,"label"],[1,"content"],[1,"action-buttons"],["mat-button","",1,"editar-button",3,"click"],[1,"fa-solid","fa-pen-to-square",2,"color","#084101","margin","5px"],["mat-button","",1,"eliminar-button",3,"click"],[1,"fa-solid","fa-trash",2,"color","#6e0202","margin","5px"],["mat-button","",1,"contratar-button",3,"click"]],template:function(t,r){t&1&&(n(0,"div",0),g(1,Me,2,3,"img",1)(2,ye,1,1,"img",2),n(3,"h5",3),a(4),i(),n(5,"p",4),a(6,"Descripci\xF3n:"),i(),n(7,"p",5),a(8),i(),n(9,"p",4),a(10,"Por:"),i(),n(11,"p",5),a(12),i(),n(13,"p",4),a(14,"Precio:"),i(),n(15,"p",5),a(16),i(),n(17,"div",6)(18,"button",7),d("click",function(){return r.editar(r.servicio.id)}),m(19,"i",8),a(20,"Editar"),i(),n(21,"button",9),d("click",function(){return r.eliminar(r.servicio.id)}),m(22,"i",10),a(23,"Eliminar"),i()(),n(24,"button",11),d("click",function(){return r.cerrar()}),a(25,"Aceptar"),i()()),t&2&&(s(),u(r.servicio.picRuta?1:2),s(3),x(r.servicio.tipo_servicio),s(4),x(r.servicio.descripcion),s(4),x(r.servicio.cuidadorNombre),s(4),b("S/.",r.servicio.precio,""))},dependencies:[st,at,q,G],styles:[".servicio-dialog-container[_ngcontent-%COMP%]{padding:20px;max-width:400px;text-align:left}.servicio-image[_ngcontent-%COMP%]{width:100%;height:200px;object-fit:cover;margin-bottom:20px}.servicio-title[_ngcontent-%COMP%]{text-align:center;margin:10px 0}.label[_ngcontent-%COMP%]{font-weight:700;margin-top:10px}.content[_ngcontent-%COMP%]{padding-left:10px}.contratar-button[_ngcontent-%COMP%]{display:block;margin:20px auto;background-color:orange;color:#fff;padding:10px 20px;border-radius:4px}.contratar-button[_ngcontent-%COMP%]:hover{background-color:wheat}.action-buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:20px;margin-bottom:20px;width:100%;text-align:center}.eliminar-button[_ngcontent-%COMP%]{font-size:14px;background-color:#f0f0f0;border-radius:4px;padding:8px 16px;text-transform:none}.editar-button[_ngcontent-%COMP%]{font-size:14px;background-color:#eef1ed;color:#268a05;border-radius:4px;padding:8px 16px;text-transform:none}.editar-button[_ngcontent-%COMP%]:hover{background-color:#c6eeb9}"]})};var we=(e,o)=>({gradient1:e,gradient2:o});function Ee(e,o){if(e&1&&(m(0,"img",6),O(1,"apiImg")),e&2){let t=v().$implicit;p("src",P(1,1,t.picRuta),h)}}function Oe(e,o){e&1&&m(0,"img",7),e&2&&p("src","../../../../../assets/img/no-image.png",h)}function Pe(e,o){if(e&1&&(m(0,"img",10),O(1,"apiImg")),e&2){let t=v().$implicit;p("src",P(1,1,t.picRutaCuidador),h)}}function De(e,o){e&1&&m(0,"img",11),e&2&&p("src","no-profile-picture.png",h)}function ke(e,o){if(e&1){let t=T();n(0,"div",2),g(1,Ee,2,3,"img",6)(2,Oe,1,1,"img",7),m(3,"div",8),n(4,"div",9),g(5,Pe,2,3,"img",10)(6,De,1,1,"img",11),i(),n(7,"div",12)(8,"p"),a(9),i()(),n(10,"div",13)(11,"p"),a(12),i()(),n(13,"div",14)(14,"a",15),d("click",function(){let l=w(t).$implicit,f=v();return E(f.cargarServicioPorId(l.id))}),a(15,"Ver m\xE1s"),i()()()}if(e&2){let t=o.$implicit,r=o.$index;s(),u(t.picRuta?1:2),s(2),p("ngClass",Et(5,we,r%2===0,r%2!==0)),s(2),u(t.picRutaCuidador?5:6),s(4),x(t.tipo_servicio),s(3),b("S/. ",t.precio,"")}}function Ae(e,o){e&1&&(n(0,"p"),a(1,"Todavia no has creado ningun servicio. \xBFCreamos uno \u{1F60F}?"),i())}var Ct=class e{servicios=[];route=c(R);SService=c(k);authService=c(S);dialog=c(K);isCarer=!1;ngOnInit(){this.isCarer=this.authService.getUserRole()==="CARER",this.cargarServicios()}cargarServicios(){let t=this.authService.getUser()?.id;t&&this.SService.getServicesByCuidador(t).subscribe({next:r=>{console.log(r),this.servicios=r}})}cargarServicioPorId(o){this.dialog.open(vt,{data:o})}irCrearServicio(){let o=this.dialog.open(y)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-servicios-list"]],standalone:!0,features:[_],decls:10,vars:1,consts:[[1,"Titulo"],[1,"contenedor"],[1,"card"],[1,"plus"],[1,"link",3,"click"],[1,"fa-solid","fa-circle-plus",2,"color","#231f20"],["alt","Imagen del servicio",1,"image",3,"src"],["alt","No-imagen servicio",1,"image",3,"src"],[1,"text",3,"ngClass"],[1,"img-persona"],["alt","Imagen del perfil",3,"src"],["alt","No-imagen",3,"src"],[1,"main-text"],[1,"precio"],[1,"card-btn"],[3,"click"]],template:function(t,r){t&1&&(n(0,"div",0)(1,"h2"),a(2,"Mis Servicios"),i()(),n(3,"section",1),A(4,ke,16,8,"div",2,yt,!1,Ae,2,0,"p"),i(),n(7,"div",3)(8,"a",4),d("click",function(){return r.irCrearServicio()}),m(9,"i",5),i()()),t&2&&(s(4),I(r.servicios))},dependencies:[F,$,G,jt,Xt],styles:['@font-face{font-family:Keania One;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/keaniaone/v24/zOL54pXJk65E8pXardnu-c1kvthH.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Keania One;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/keaniaone/v24/zOL54pXJk65E8pXardnu-cNkvg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Roboto;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/roboto/v32/KFOmCnqEu92Fr1Mu4mxK.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}.Titulo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Keania One,serif;font-weight:400;font-style:normal;font-size:50px;padding:20px;color:#734226e6}*[_ngcontent-%COMP%]{text-align:center}body[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;margin:0;background-color:#eee;min-height:100vh}.card[_ngcontent-%COMP%]{display:inline-block;position:relative;width:400px;min-width:400px;height:400px;border-radius:30px;overflow:hidden;box-shadow:5px 5px 30px #0000004d;margin:30px}.image[_ngcontent-%COMP%]{width:100%;height:70%;object-fit:cover}.text[_ngcontent-%COMP%]{border-radius:30px;position:absolute;top:55%;left:-5px;height:65%;width:108%;transform:skew(19deg,-9deg)}.gradient1[_ngcontent-%COMP%]{background-image:linear-gradient(0deg,#3f5efb,#fc466b)}.gradient2[_ngcontent-%COMP%]{background-image:linear-gradient(-20deg,#bb7413,#e7d25c)}.img-persona[_ngcontent-%COMP%]{height:80px;width:80px;border-radius:20px;background-color:#fff;position:absolute;bottom:30%;left:30px;overflow:hidden;box-shadow:5px 5px 30px #000000b3}.img-persona[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.main-text[_ngcontent-%COMP%]{position:absolute;color:#fff;font-weight:900;left:150px;bottom:26%;font-size:larger}.card-btn[_ngcontent-%COMP%]{position:absolute;color:#fff;right:30px;bottom:10%;padding:10px 20px;border:1px solid #fff;animation:_ngcontent-%COMP%_button-anim 2s ease 0s infinite normal forwards}.icon[_ngcontent-%COMP%]{position:absolute;right:150px;bottom:10%;font-size:30px}@keyframes _ngcontent-%COMP%_button-anim{0%{transform:translate(0)}20%{transform:translate(-2px,2px)}40%{transform:translate(-2px,-2px)}60%{transform:translate(2px,2px)}80%{transform:translate(2px,-2px)}to{transform:translate(0)}}.card-btn[_ngcontent-%COMP%]:hover{animation:none}.card-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.precio[_ngcontent-%COMP%]{position:absolute;color:#fff;left:30px;bottom:10%}.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before{width:14px;height:14px;position:fixed;color:#fff;background:#0077b5;padding:10px;border-radius:50%;top:5px;right:5px}']})};var _t=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-reviews-list"]],standalone:!0,features:[_],decls:2,vars:0,template:function(t,r){t&1&&(n(0,"p"),a(1,"reviews-list works!"),i())}})};var bt=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-mensajes-list"]],standalone:!0,features:[_],decls:2,vars:0,template:function(t,r){t&1&&(n(0,"p"),a(1,"mensajes-list works!"),i())}})};var Ie=()=>[1,2,3,4,5,6,7,8,9,10,11,12];function Te(e,o){if(e&1&&(n(0,"option",8),a(1),i()),e&2){let t=o.$implicit;p("value",t),s(),b(" ",t," ")}}function Re(e,o){e&1&&(n(0,"div",9)(1,"span",10),m(2,"i",11),i(),a(3," \xA1Felicidades por tu avance! "),i())}function Be(e,o){if(e&1&&(n(0,"div")(1,"p"),a(2),i(),n(3,"p"),a(4),i()()),e&2){let t=v();s(2),b("Total de contratos: ",t.reporte.totalContracts,""),s(2),b("Total generado: ",t.reporte.totalAmount,"")}}function Ne(e,o){if(e&1&&(n(0,"div")(1,"p",12),a(2),i()()),e&2){let t=v();s(2),x(t.error)}}var xt=class e{AuthService=c(S);contratoService=c(Y);reporte=null;error=null;felicitacionVisible=!1;mes=new Date().getMonth()+1;anio=new Date().getFullYear();cargarReporte(){let t=this.AuthService.getUser()?.id;t?this.contratoService.getContractReportByMonth(t,this.mes,this.anio).subscribe({next:r=>{this.reporte=r,this.felicitacionVisible=!0,setTimeout(()=>{this.felicitacionVisible=!1},3e3)},error:r=>{this.error="Error al obtener el reporte: "+r.message}}):this.error="No se pudo obtener el ID del cuidador"}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-reporte"]],standalone:!0,features:[_],decls:17,vars:9,consts:[["for","mes"],["id","mes",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["for","anio"],["type","number","id","anio",3,"ngModelChange","ngModel","min","max"],[3,"click"],["class","felicitaciones",4,"ngIf"],[4,"ngIf"],[3,"value"],[1,"felicitaciones"],[1,"felicitaciones-icon"],[1,"fa-solid","fa-face-laugh-beam","fa-bounce",2,"color","#ffcb0f"],[2,"color","red"]],template:function(t,r){t&1&&(n(0,"div")(1,"h2"),a(2,"Reporte de Contratos"),i(),n(3,"div")(4,"label",0),a(5,"Mes:"),i(),n(6,"select",1),St("ngModelChange",function(f){return Ft(r.mes,f)||(r.mes=f),f}),g(7,Te,2,2,"option",2),i()(),n(8,"div")(9,"label",3),a(10,"A\xF1o:"),i(),n(11,"input",4),St("ngModelChange",function(f){return Ft(r.anio,f)||(r.anio=f),f}),i()(),n(12,"button",5),d("click",function(){return r.cargarReporte()}),a(13,"Cargar Reporte"),i(),g(14,Re,4,0,"div",6)(15,Be,5,2,"div",7)(16,Ne,3,1,"div",7),i()),t&2&&(s(6),ht("ngModel",r.mes),s(),p("ngForOf",wt(8,Ie)),s(4),ht("ngModel",r.anio),p("min",2e3)("max",2100),s(3),p("ngIf",r.felicitacionVisible),s(),p("ngIf",r.reporte),s(),p("ngIf",r.error))},dependencies:[F,Pt,Dt,z,Bt,Nt,B,Tt,Rt,N,Lt,zt,It],styles:["div[_ngcontent-%COMP%]{font-family:Arial,sans-serif;margin:20px;padding:20px;background-color:#f9f9f9;border-radius:8px;box-shadow:0 2px 5px #0000001a}h2[_ngcontent-%COMP%]{font-size:24px;color:#333;margin-bottom:20px}label[_ngcontent-%COMP%]{font-size:16px;font-weight:700;margin-right:10px;color:#555}select[_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{padding:8px;font-size:16px;margin-right:10px;border-radius:4px;border:1px solid #ccc;width:150px}select[_ngcontent-%COMP%]:focus, input[type=number][_ngcontent-%COMP%]:focus{outline:none;border-color:#007bff;box-shadow:0 0 5px #007bff33}button[_ngcontent-%COMP%]{padding:10px 20px;font-size:16px;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-top:20px}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px;margin:10px 0;color:#333}div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-of-type{font-weight:700;color:#28a745}div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-of-type{font-weight:700;color:#28a745}div[_ngcontent-%COMP%]   p[style][_ngcontent-%COMP%]{font-size:16px;color:red;font-weight:700;margin-top:20px;text-align:center}@keyframes _ngcontent-%COMP%_confetti{0%{transform:translateY(0);opacity:0}50%{opacity:1;transform:translateY(-20px)}to{opacity:0;transform:translateY(0)}}.felicitaciones[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:#28a745;text-align:center;margin-top:20px;animation:_ngcontent-%COMP%_confetti 2s ease-in-out}.felicitaciones-icon[_ngcontent-%COMP%]{font-size:40px;margin-right:10px;color:#28a745}"]})};var Ti=[{path:"",component:ft,children:[{path:"contratos",component:ut},{path:"servicios",component:Ct},{path:"reviews",component:_t},{path:"mensajes",component:bt},{path:"profile",component:Gt},{path:"profile/update",component:$t},{path:"servicios/crear",component:y},{path:"servicios/update",component:y},{path:"reporte",component:xt}]}];export{Ti as carerRoutes};
