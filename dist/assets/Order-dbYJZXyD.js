import{_ as B,b as d,d as m,e as n,w as e,a as u,g as l,F as C,h as y,c as g,t as r}from"./index-DGJXbnah.js";const h={data(){return{tableHead:[{name:"№"},{name:"Car type"},{name:"Model"},{name:"Year"},{name:"Full Name"},{name:"Phone"},{name:"Amount"},{name:"Status"}],originalOrders:[{id:1,car_name:"Bmw",car_model:"Picap",car_year:"2020",car_owner:"Alex",owner_phone:"+1234548754878",salary:"3230",action:"done"},{id:2,car_name:"Mers",car_model:"Picap",car_year:"2023",car_owner:"John",owner_phone:"+124543534534",salary:"2350",action:"ongoing"},{id:3,car_name:"Range Rover",car_model:"Picap",car_year:"2020",car_owner:"Alex",owner_phone:"+1234548754878",salary:"3230",action:"waiting"},{id:4,car_name:"Volvo",car_model:"Track",car_year:"2018",car_owner:"Andre",owner_phone:"+12323435356",salary:"4500",action:"done"}],orders:[]}},methods:{handleSort(c){c==="all"?this.orders=[...this.originalOrders]:this.orders=this.originalOrders.filter(a=>c===a.action)}},mounted(){this.orders=[...this.originalOrders]}},x={class:"orders"};function S(c,a,H,O,f,_){const s=d("CButton"),w=d("CButtonGroup"),b=d("CTableHeaderCell"),p=d("CTableRow"),v=d("CTableHead"),t=d("CTableDataCell"),T=d("CTableBody"),k=d("CTable");return u(),m("div",x,[n(w,{class:"float-end me-3 mb-3",role:"group"},{default:e(()=>[n(s,{color:"secondary",variant:"outline",onClick:a[0]||(a[0]=o=>_.handleSort("all")),active:""},{default:e(()=>a[4]||(a[4]=[l("All")])),_:1}),n(s,{color:"secondary",variant:"outline",onClick:a[1]||(a[1]=o=>_.handleSort("waiting"))},{default:e(()=>a[5]||(a[5]=[l("Waiting")])),_:1}),n(s,{color:"secondary",variant:"outline",onClick:a[2]||(a[2]=o=>_.handleSort("ongoing"))},{default:e(()=>a[6]||(a[6]=[l("Ongoing")])),_:1}),n(s,{color:"secondary",variant:"outline",onClick:a[3]||(a[3]=o=>_.handleSort("done"))},{default:e(()=>a[7]||(a[7]=[l("Done")])),_:1})]),_:1}),n(k,null,{default:e(()=>[n(v,null,{default:e(()=>[n(p,null,{default:e(()=>[(u(!0),m(C,null,y(f.tableHead,(o,i)=>(u(),g(b,{scope:"col",key:i},{default:e(()=>[l(r(o.name),1)]),_:2},1024))),128))]),_:1})]),_:1}),n(T,null,{default:e(()=>[(u(!0),m(C,null,y(f.orders,(o,i)=>(u(),g(p,{key:i},{default:e(()=>[n(t,null,{default:e(()=>[l(r(i+1),1)]),_:2},1024),n(t,null,{default:e(()=>[l(r(o.car_model),1)]),_:2},1024),n(t,null,{default:e(()=>[l(r(o.car_name),1)]),_:2},1024),n(t,null,{default:e(()=>[l(r(o.car_year),1)]),_:2},1024),n(t,null,{default:e(()=>[l(r(o.car_owner),1)]),_:2},1024),n(t,null,{default:e(()=>[l(r(o.owner_phone),1)]),_:2},1024),n(t,null,{default:e(()=>[l("$"+r(o.salary),1)]),_:2},1024),n(t,null,{default:e(()=>[n(s,{color:"info",variant:"outline",style:{"text-transform":"capitalize"}},{default:e(()=>[l(r(o.action),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])}const D=B(h,[["render",S]]);export{D as default};
