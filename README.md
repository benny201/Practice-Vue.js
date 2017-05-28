# Practice-Vue.js

## Template
* All the usage of "data" get re-rendered once the property changes
* By default, Vue will not render the html elements

### not {{}} in attributes but `v-bind or :`
Instead, use `v-bind` or `:` :
```javascript
<a v-bind:href="href"></a>
```
### this property
Use `this.xxx` to access the property in `data`

### v-once
make the value NOT update later
```javascript
<p v-once></p>
```

### v-html
By default, Vue will not render the html elements
`v-html`: Allow the data to render the html code
```javascript
<p v-html="dataName"></p>
```

### v-on or @
Listen to DOM-events.
```javascript
<p v-on:click="functions or code here"></p>
```
* v-on:click.once: only one time.

### $event argument
```javascript
increase(2, $event); => increase: function(num, event){}
```

### eventName.stop.prevent...
equals to event.stopPropagation()
```javascript
v-on:click.stop = ""
```

### Two way binding: v-model
* v-model="dataName"


### computed property
```javascript
new Vue({
  computed: {

  }
})
```
* use the methods in computed just like a data property: `{{ output }}` not `{{ output() }}`
* syn

### watch property
can be asynchronic!!!
```javascript
watch: {
   // 如果 question 发生改变，这个函数就会运行
   question: function (newQuestion) {
     this.answer = 'Waiting for you to stop typing...'
     this.getAnswer()
   }
 },
 ```
CAN watch any property you want (property even in computed).

### dynamic styling with css classes
`v-bind:class`: attach class to template: `:class="{red: true(attached or not), blue: false}"`
& `v-bind:style`
use`[xxx, {xxx}]` to implement multiple styles
