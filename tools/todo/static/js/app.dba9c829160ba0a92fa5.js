webpackJsonp([1],{NHnr:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});e("j1ja");var n=e("7+uW"),i=e("NYxO");navigator.userAgent.indexOf("PhantomJS")>-1&&window.localStorage.clear();var s={addTodo:function(t,o){t.todos.push(o)},removeTodo:function(t,o){t.todos.splice(t.todos.indexOf(o),1)},editTodo:function(t,o){var e=o.todo,n=o.text,i=void 0===n?e.text:n,s=o.done,d=void 0===s?e.done:s;e.text=i,e.done=d}},d=e("mvHQ"),a=e.n(d),r=[function(t){t.subscribe(function(t,o){var e=o.todos;window.localStorage.setItem("todos-vuejs",a()(e))})}];n.a.use(i.a);var l=new i.a.Store({state:{todos:JSON.parse(window.localStorage.getItem("todos-vuejs")||"[]")},actions:{addTodo:function(t,o){(0,t.commit)("addTodo",{text:o,done:!1})},removeTodo:function(t,o){(0,t.commit)("removeTodo",o)},toggleTodo:function(t,o){(0,t.commit)("editTodo",{todo:o,done:!o.done})},editTodo:function(t,o){(0,t.commit)("editTodo",{todo:o.todo,text:o.value})},toggleAll:function(t,o){var e=t.state,n=t.commit;e.todos.forEach(function(t){n("editTodo",{todo:t,done:o})})},clearCompleted:function(t){var o=t.state,e=t.commit;o.todos.filter(function(t){return t.done}).forEach(function(t){e("removeTodo",t)})}},mutations:s,plugins:r}),c=e("Dd8w"),u=e.n(c),f={name:"Todo",props:["todo"],data:function(){return{editing:!1}},directives:{focus:function(t,o,e){var n=o.value,i=e.context;n&&i.$nextTick(function(){t.focus()})}},methods:u()({},Object(i.b)(["editTodo","toggleTodo","removeTodo"]),{doneEdit:function(t){var o=t.target.value.trim(),e=this.todo;o?this.editing&&(this.editTodo({todo:e,value:o}),this.editing=!1):this.removeTodo(e)},cancelEdit:function(t){t.target.value=this.todo.text,this.editing=!1}})},v={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("li",{staticClass:"todo",class:{completed:t.todo.done,editing:t.editing}},[e("div",{staticClass:"view"},[e("input",{staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:t.todo.done},on:{click:function(o){t.toggleTodo(t.todo)}}}),t._v(" "),e("label",{domProps:{textContent:t._s(t.todo.text)},on:{dblclick:function(o){t.editing=!0}}}),t._v(" "),e("button",{staticClass:"destroy",on:{click:function(o){t.removeTodo(t.todo)}}})]),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:t.editing,expression:"editing"},{name:"focus",rawName:"v-focus",value:t.editing,expression:"editing"}],staticClass:"edit",domProps:{value:t.todo.text},on:{keyup:[function(o){return"button"in o||!t._k(o.keyCode,"enter",13,o.key,"Enter")?t.doneEdit(o):null},function(o){return"button"in o||!t._k(o.keyCode,"esc",27,o.key,"Escape")?t.cancelEdit(o):null}],blur:t.doneEdit}})])},staticRenderFns:[]},m={all:function(t){return t},active:function(t){return t.filter(function(t){return!t.done})},completed:function(t){return t.filter(function(t){return t.done})}},p={components:{TodoItem:e("VU/8")(f,v,!1,null,null,null).exports},data:function(){return{visibility:"all",filters:m}},computed:{todos:function(){return this.$store.state.todos},allChecked:function(){return this.todos.every(function(t){return t.done})},filteredTodos:function(){return m[this.visibility](this.todos)},remaining:function(){return this.todos.filter(function(t){return!t.done}).length}},methods:u()({},Object(i.b)(["toggleAll","clearCompleted"]),{addTodo:function(t){var o=t.target.value;o.trim()&&this.$store.dispatch("addTodo",o),t.target.value=""}}),filters:{pluralize:function(t,o){return 1===t?o:o+"s"},capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}},g={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"todoapp"},[e("header",{staticClass:"header"},[e("h1",[t._v("todos")]),t._v(" "),e("input",{staticClass:"new-todo",attrs:{type:"text",autofocus:"",autocomplete:"off",placeholder:"what needs to be done?"},on:{keyup:function(o){return"button"in o||!t._k(o.keyCode,"enter",13,o.key,"Enter")?t.addTodo(o):null}}})]),t._v(" "),e("section",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"main"},[e("input",{staticClass:"toggle-all",attrs:{type:"checkbox",id:"toggle-all"},domProps:{checked:t.allChecked},on:{change:function(o){t.toggleAll(!t.allChecked)}}}),t._v(" "),e("label",{attrs:{for:"toggle-all"}}),t._v(" "),e("ul",{staticClass:"todo-list"},t._l(t.filteredTodos,function(t,o){return e("TodoItem",{key:o,attrs:{todo:t}})}))]),t._v(" "),e("footer",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"footer"},[e("span",{staticClass:"todo-count"},[e("strong",[t._v(t._s(t.remaining))]),t._v("\n      "+t._s(t._f("pluralize")(t.remaining,"item"))+" left\n    ")]),t._v(" "),e("ul",{staticClass:"filters"},t._l(t.filters,function(o,n){return e("li",[e("a",{class:{selected:t.visibility===n},attrs:{href:"#/"+n},on:{click:function(o){t.visibility=n}}},[t._v(t._s(t._f("capitalize")(n)))])])})),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.todos.length>t.remaining,expression:"todos.length > remaining"}],staticClass:"clear-completed",on:{click:t.clearCompleted}},[t._v("Clear completed\n    ")])])])},staticRenderFns:[]};var h=e("VU/8")(p,g,!1,function(t){e("pylj")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",store:l,components:{App:h},template:"<App/>"})},pylj:function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.dba9c829160ba0a92fa5.js.map