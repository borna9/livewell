(this.webpackJsonplivewell=this.webpackJsonplivewell||[]).push([[0],{158:function(e,t,a){},159:function(e,t,a){},226:function(e,t){},227:function(e,t){},300:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(14),r=a.n(l),i=(a(158),a(140)),c=a(141),d=a(35),o=a(146),h=a(145),j=(a(159),a(108)),b=a.n(j),u=(a(160),a(161),a(142)),O=a(143),f=a(344),g=a(346),x=a(347),p=a(348),v=a(342),y=a(345),D=a(343),m=[{value:"Low",label:"Low"},{value:"Medium",label:"Medium"},{value:"High",label:"High"},{value:"Need to schedule",label:"Need to schedule"},{value:"Daily routine",label:"Daily routine"},{value:"Scheduled",label:"Scheduled"},{value:"Urgent",label:"Urgent"},{value:"Wasted time",label:"Wasted time"}],k=new(a(169))({apiKey:"keymrBNLy7tXIfV2H"}).base("apptbLLUUnap2S6oD"),S=[],T=function(e){S=e},w=function(e,t){!function(e,t){var a=[];e("Tags").select({}).eachPage((function(e,t){e.forEach((function(e){var t={value:e.id,label:e.get("Name")};a.push(t)})),t()}),(function(e){e?console.error(e):t(a)}))}(k,T),setTimeout((function(){t(function(e){return S.filter((function(t){return t.label.toLowerCase().includes(e.toLowerCase())}))}(e))}),3e3)};function E(e){var t=new Date(e),a=t.getFullYear().toString(),s=t.getMonth()+1;return a+"-"+(s=s<10?"0"+s:s)+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate())}function N(e){console.log("SUBMIT:"),console.log("  Task name = ",e.state.taskName),console.log("  Tags = ",e.state.selectedItems),console.log("  Priority = ",e.state.priority),console.log("  Number of hours = ",e.state.nHrs),console.log("  Date = ",e.state.startDate.getFullYear(),"/",e.state.startDate.getMonth()+1,"/",e.state.startDate.getDate()),console.log("  Notes = ",e.state.notes);var t="SUBMIT:\n";t=t+"  Task name = "+e.state.taskName+"\n",t+="  Tags = ";var a=[];e.state.selectedItems.forEach((function(e){t=t+e.label+", ",a.push(e.value)})),t=(t=(t=(t+="\n")+"  Priority = "+e.state.priority.label+"\n")+"  Number of hours = "+e.state.nHrs+"\n")+"  Notes = "+e.state.notes+"\n";var s={fields:{Task:e.state.taskName,Tag:a,Hrs:parseFloat(e.state.nHrs),Priority:e.state.priority.value,"Due date":E(e.state.startDate),Notes:e.state.notes}};if(e.state.doRepeat){t=(t=t+"  Start date = "+e.state.startDate.getFullYear()+"/"+(e.state.startDate.getMonth()+1)+"/"+e.state.startDate.getDate()+"\n")+"  End date = "+e.state.endDate.getFullYear()+"/"+(e.state.endDate.getMonth()+1)+"/"+e.state.endDate.getDate()+"\n";var n=new Date(e.state.startDate);switch(e.state.repeatType){case"Daily":for(t+="  Repeat daily:\n";n<=e.state.endDate;n.setDate(n.getDate()+1))s.fields["Due date"]=E(n),t=t+"    "+s.fields.Task+" | "+s.fields.Tag+" | "+s.fields.Hrs+" | "+s.fields.Priority+" | "+s.fields["Due date"]+" | "+s.fields.Notes+"\n",k("Task List").create([s],(function(e,t){e&&console.error(e)}));console.log("  DAILY");break;case"Weekly":for(t+="  Repeat weekly:\n";n<=e.state.endDate;n.setDate(n.getDate()+7))s.fields["Due date"]=E(n),t=t+"    "+s.fields.Task+" | "+s.fields.Tag+" | "+s.fields.Hrs+" | "+s.fields.Priority+" | "+s.fields["Due date"]+" | "+s.fields.Notes+"\n",k("Task List").create([s],(function(e,t){e&&console.error(e)}));console.log("  WEEKLY");break;case"Monthly":for(t+="  Repeat monthly:\n";n<=e.state.endDate;n.setMonth(n.getMonth()+1))s.fields["Due date"]=E(n),t=t+"    "+s.fields.Task+" | "+s.fields.Tag+" | "+s.fields.Hrs+" | "+s.fields.Priority+" | "+s.fields["Due date"]+" | "+s.fields.Notes+"\n",k("Task List").create([s],(function(e,t){e&&console.error(e)}));console.log("  MONTHLY");break;case"Every":switch(e.state.repIntervalType){case"Days":for(t=t+"  Repeat every "+e.state.repinterval.toString()+" day:\n";n<=e.state.endDate;n.setDate(parseInt(n.getDate())+parseInt(e.state.repinterval)))s.fields["Due date"]=E(n),t=t+"    "+s.fields.Task+" | "+s.fields.Tag+" | "+s.fields.Hrs+" | "+s.fields.Priority+" | "+s.fields["Due date"]+" | "+s.fields.Notes+"\n",k("Task List").create([s],(function(e,t){e&&console.error(e)}));console.log("  DAILY");break;case"Weeks":for(t=t+"  Repeat every "+e.state.repinterval.toString()+" week:\n";n<=e.state.endDate;n.setDate(parseInt(n.getDate())+7*parseInt(e.state.repinterval)))s.fields["Due date"]=E(n),t=t+"    "+s.fields.Task+" | "+s.fields.Tag+" | "+s.fields.Hrs+" | "+s.fields.Priority+" | "+s.fields["Due date"]+" | "+s.fields.Notes+"\n",k("Task List").create([s],(function(e,t){e&&console.error(e)}));console.log("  WEEKLY");break;case"Months":for(t=t+"  Repeat every "+e.state.repinterval.toString()+" month:\n";n<=e.state.endDate;n.setMonth(parseInt(n.getMonth())+parseInt(e.state.repinterval)))s.fields["Due date"]=E(n),t=t+"    "+s.fields.Task+" | "+s.fields.Tag+" | "+s.fields.Hrs+" | "+s.fields.Priority+" | "+s.fields["Due date"]+" | "+s.fields.Notes+"\n",k("Task List").create([s],(function(e,t){e&&console.error(e)}));console.log("  MONTHLY");break;default:t+="  *** Bad repeat interval type",console.log("  *** Bad repeat interval type")}console.log("  EVERY");break;default:t+="  *** Bad repeat type",console.log("  *** Bad repeat type")}}else t=(t=t+"  Date = "+e.state.startDate.getFullYear()+"/"+(e.state.startDate.getMonth()+1)+"/"+e.state.startDate.getDate()+"\n")+"\n\n\n"+s.fields.Task+" | "+s.fields.Tag+" | "+s.fields.Hrs+" | "+s.fields.Priority+" | "+s.fields["Due date"]+" | "+s.fields.Notes+"\n",k("Task List").create([s],(function(e,t){e&&console.error(e)}));e.setState({logStr:t}),e.setState({statusType:"success"}),e.setState({status:"Successfully added new task(s)."})}var L=a(3),M=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={startDate:new Date,endDate:new Date,doRepeat:!1,doDaily:!1,showDB:!1,showLOG:!1,repeatType:"Daily",repinterval:1,repIntervalType:"",selectedItems:[],taskName:"",priority:"",nHrs:0,notes:"",status:"",statusType:"info",logStr:""},s.handleEvent=s.handleEvent.bind(Object(d.a)(s)),s.handleStartChange=s.handleStartChange.bind(Object(d.a)(s)),s.handleEndChange=s.handleEndChange.bind(Object(d.a)(s)),s.handleSelectTags=s.handleSelectTags.bind(Object(d.a)(s)),s.handleSelectPriority=s.handleSelectPriority.bind(Object(d.a)(s)),s.onFormSubmit=s.onFormSubmit.bind(Object(d.a)(s)),s}return Object(c.a)(a,[{key:"handleStartChange",value:function(e){this.setState({startDate:e})}},{key:"handleEndChange",value:function(e){this.setState({endDate:e})}},{key:"handleSelectTags",value:function(e){this.setState({selectedItems:e})}},{key:"handleSelectPriority",value:function(e){this.setState({priority:e})}},{key:"handleEvent",value:function(e){!function(e,t){switch(t.target.name){case"doRepeat":e.setState({doRepeat:t.target.checked});break;case"doDaily":e.setState({doDaily:t.target.checked});break;case"showDB":e.setState({showDB:t.target.checked});break;case"showLog":e.setState({showLOG:t.target.checked});break;case"taskname":e.setState({taskName:t.target.value});break;case"notes":e.setState({notes:t.target.value});break;case"hrs":e.setState({nHrs:t.target.value});break;case"repeattype1":e.setState({repeatType:t.target.value});break;case"repintervalamt":e.setState({repinterval:t.target.value});break;case"repeatinterval1":e.setState({repIntervalType:t.target.value})}}(this,e)}},{key:"onFormSubmit",value:function(e){var t=this;this.setState({statusType:"info"}),this.setState({status:"Adding task(s) to database..."}),e.preventDefault(),setTimeout((function(){!function(e){if(e.state.doDaily){var t=S.find((function(e){return"Daily routine"===e.label})),a=S.find((function(e){return"Personal"===e.label})),s=S.find((function(e){return"Family"===e.label})),n=S.find((function(e){return"Exercise"===e.label}));e.setState({priority:{value:"Daily routine",label:"Daily routine"},notes:""}),e.setState({taskName:"Wind down",nHrs:1,selectedItems:[t,a]}),N(e),e.setState({taskName:"Sleep",nHrs:7,selectedItems:[t,a]}),N(e),e.setState({taskName:"Morning",nHrs:2,selectedItems:[t,a]}),N(e),e.setState({taskName:"Lunch",nHrs:.5,selectedItems:[t,a]}),N(e),e.setState({taskName:"Walk",nHrs:.5,selectedItems:[t,s,n]}),N(e),e.setState({taskName:"Dinner",nHrs:1.5,selectedItems:[t,s]}),N(e),e.setState({taskName:"Evening family",nHrs:1,selectedItems:[t,s]}),N(e)}else N(e)}(t)}),3e3)}},{key:"render",value:function(){return Object(L.jsxs)("div",{children:[Object(L.jsx)("form",{onSubmit:this.onFormSubmit,style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vh",height:"150vh"},children:Object(L.jsx)("div",{className:"form-group",children:Object(L.jsx)("div",{children:Object(L.jsx)("table",{children:Object(L.jsxs)("tbody",{children:[Object(L.jsx)("tr",{children:Object(L.jsx)("td",{children:Object(L.jsx)("label",{children:Object(L.jsx)("div",{children:Object(L.jsx)("b",{children:"Enter new task:"})})})})}),Object(L.jsx)("tr",{children:Object(L.jsxs)("td",{children:[Object(L.jsx)("p",{children:"\xa0"}),Object(L.jsx)(x.a,{control:Object(L.jsx)(y.a,{checked:this.state.doDaily,onChange:this.handleEvent,name:"doDaily"}),label:"Daily"}),Object(L.jsx)("p",{children:"\xa0"})]})}),Object(L.jsx)("tr",{children:this.state.doDaily?null:Object(L.jsx)("td",{children:Object(L.jsx)(v.a,{required:!0,id:"taskname",name:"taskname",label:"Task:",value:this.state.taskName,onChange:this.handleEvent})})}),this.state.doDaily?null:Object(L.jsxs)("div",{children:[Object(L.jsx)("tr",{children:Object(L.jsxs)("td",{children:[Object(L.jsx)("p",{children:"\xa0"}),Object(L.jsxs)("div",{children:[Object(L.jsx)("div",{children:"Tags:"}),Object(L.jsx)(u.a,{isMulti:!0,loadOptions:w,defaultOptions:!0,isSearchable:!0,closeMenuOnSelect:!1,onChange:this.handleSelectTags})]})]})}),Object(L.jsx)("tr",{children:Object(L.jsxs)("td",{children:[Object(L.jsx)("p",{children:"\xa0"}),Object(L.jsxs)("div",{children:[Object(L.jsx)("div",{children:"Priority:"}),Object(L.jsx)(O.a,{options:m,isSearchable:!0,closeMenuOnSelect:!0,onChange:this.handleSelectPriority})]})]})}),Object(L.jsx)("tr",{children:Object(L.jsxs)("td",{children:[Object(L.jsx)("p",{children:"\xa0"}),Object(L.jsx)(v.a,{required:!0,id:"hrs",name:"hrs",label:"Hrs:",type:"number",inputProps:{step:"any",min:0},value:this.state.nHrs,onChange:this.handleEvent})]})})]}),Object(L.jsx)("tr",{children:Object(L.jsxs)("td",{children:[Object(L.jsx)("p",{children:"\xa0"}),Object(L.jsx)("div",{children:"Date:"}),Object(L.jsx)(b.a,{selected:this.state.startDate,onChange:this.handleStartChange,name:"startDate",dateFormat:"MM/dd/yyyy"})]})}),Object(L.jsx)("tr",{children:Object(L.jsxs)("td",{children:[Object(L.jsx)("p",{children:"\xa0"}),Object(L.jsx)(x.a,{control:Object(L.jsx)(y.a,{checked:this.state.doRepeat,onChange:this.handleEvent,name:"doRepeat"}),label:"Repeat"})]})}),this.state.doRepeat?Object(L.jsxs)("div",{children:[Object(L.jsx)(p.a,{component:"fieldset",children:Object(L.jsxs)(g.a,{"aria-label":"repeattype",name:"repeattype1",value:this.state.repeatType,onChange:this.handleEvent,children:[Object(L.jsx)("tr",{children:Object(L.jsx)("td",{children:Object(L.jsx)(x.a,{value:"Daily",control:Object(L.jsx)(f.a,{}),label:"Daily"})})}),Object(L.jsx)("tr",{children:Object(L.jsx)("td",{children:Object(L.jsx)(x.a,{value:"Weekly",control:Object(L.jsx)(f.a,{}),label:"Weekly"})})}),Object(L.jsx)("tr",{children:Object(L.jsx)("td",{children:Object(L.jsx)(x.a,{value:"Monthly",control:Object(L.jsx)(f.a,{}),label:"Monthly"})})}),Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{children:Object(L.jsx)(x.a,{value:"Every",control:Object(L.jsx)(f.a,{}),label:"Every"})}),Object(L.jsx)("td",{children:Object(L.jsx)("input",{type:"number",name:"repintervalamt",value:this.state.repinterval,min:"1",onChange:this.handleEvent})}),Object(L.jsx)("td",{children:Object(L.jsx)(p.a,{component:"fieldset",children:Object(L.jsxs)(g.a,{"aria-label":"repeatinterval",name:"repeatinterval1",value:this.state.repIntervalType,onChange:this.handleEvent,children:[Object(L.jsx)(x.a,{value:"Days",control:Object(L.jsx)(f.a,{}),label:"Days"}),Object(L.jsx)(x.a,{value:"Weeks",control:Object(L.jsx)(f.a,{}),label:"Weeks"}),Object(L.jsx)(x.a,{value:"Months",control:Object(L.jsx)(f.a,{}),label:"Months"})]})})})]})]})}),Object(L.jsx)("tr",{children:Object(L.jsxs)("td",{children:[Object(L.jsx)("div",{children:"End Date:"}),Object(L.jsx)(b.a,{selected:this.state.endDate,onChange:this.handleEndChange,name:"endDate",dateFormat:"MM/dd/yyyy"})]})})]}):null,this.state.doDaily?null:Object(L.jsx)("tr",{children:Object(L.jsxs)("td",{children:[Object(L.jsx)("p",{children:"\xa0"}),Object(L.jsxs)("label",{children:[Object(L.jsx)("div",{children:"Notes:"}),Object(L.jsx)("textarea",{name:"notes",value:this.state.notes,onChange:this.handleEvent})]})]})}),Object(L.jsx)("tr",{children:Object(L.jsxs)("td",{children:[Object(L.jsx)("p",{children:"\xa0"}),Object(L.jsx)("div",{children:Object(L.jsx)("input",{type:"submit",value:"Submit"})})]})}),""===this.state.status?null:Object(L.jsx)("tr",{children:Object(L.jsxs)("td",{children:[Object(L.jsx)("p",{children:"\xa0"}),Object(L.jsx)("div",{children:Object(L.jsx)(D.a,{severity:this.state.statusType,children:this.state.status})})]})}),Object(L.jsxs)("tr",{children:[Object(L.jsxs)("td",{children:[Object(L.jsx)("p",{children:"\xa0"}),Object(L.jsx)(x.a,{control:Object(L.jsx)(y.a,{checked:this.state.showDB,onChange:this.handleEvent,name:"showDB"}),label:"Show DB"})]}),Object(L.jsxs)("td",{children:[Object(L.jsx)("p",{children:"\xa0"}),Object(L.jsx)(x.a,{control:Object(L.jsx)(y.a,{checked:this.state.showLOG,onChange:this.handleEvent,name:"showLog"}),label:"Show Log"})]})]})]})})})})}),this.state.showDB?Object(L.jsx)("div",{children:Object(L.jsx)("iframe",{className:"airtable-embed",title:"Tasks",src:"https://airtable.com/embed/shrwDMaLicVlxs8oD?backgroundColor=gray",frameBorder:"0",width:"100%",height:"533"})}):null,this.state.showLOG?Object(L.jsxs)("div",{children:[Object(L.jsx)("p",{children:"\xa0"}),Object(L.jsx)("i",{children:"LOG:"}),Object(L.jsx)("div",{align:"center",children:Object(L.jsx)("textarea",{readOnly:!0,value:this.state.logStr,rows:"10",cols:"50"})})]}):null]})}}]),a}(n.a.Component),C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,350)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,l=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),l(e),r(e)}))};r.a.render(Object(L.jsx)(n.a.StrictMode,{children:Object(L.jsx)(M,{})}),document.getElementById("root")),C()}},[[300,1,2]]]);
//# sourceMappingURL=main.3692aa49.chunk.js.map