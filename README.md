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

## Modules

### v-if && v-else && v-else-if
bind a condition to decide the elements will be `rendered or not`.
```javascript
<p v-if=""></p>
<p v-else></p>
```

* hide the elements completely!
* use `<template>` tag to group the all things but not <div>

### v-show
like: `display:none`

### v-for
`for-loop`:
```javascript
<ul>
  <li v-for="num in nums">{{ num }}</li>
</ul>
```
`anohter version`:
```javascript
<ul>
  <li v-for="(num, i) in nums">{{ num }} ({{ i }})</li>
</ul>
```
And the `nest-loop` -> loop through `objects`:
```javascript
<li v-for="person in persons">
  <span v-for="value in person">{{ value }}</span>
  or
  <span v-for="(value, key, index) in person">{{ key }} : {{ value }} ({{ index }})</span>
</li>
```

`update of the elements to re-reander`:
```javascript
<button @click="nums.push('1')"></button>
```

e.g.:
```javascript
<template v-if="Array.isArray(value)">
  <div v-for="element in value">{‌{ element }}</div>
</template>
```

## Vue.js instance
like a middle man between DOM and basic logic.
* can create multiple vue instances
* can call other instances' method / get others' data by `vmName.methods/variables...`
* `can't` create new properties for the new instance outside the instance:
```javascript
var vm = new Vue({});
vm.newProp = "new";

In this situation, thw vue instance will not create setter and getter for the `newProp`.
```
* use `$data`, `$el`, `$refs`,etc to access the blocks;

### `ref` property
access the element with the `ref` property
```javascript
this.$refs.myButton.innerText = 'new';
```
### `$mount()`
To mount the template:
```javascript
vm1.mount('#app');
```

### template property
template: '<h1>hello, world!</h1>'
```javacript
vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el); also work!!!
```

### why $mount()?

### `component`
`Vue.component('name', {...})` and render the component with `<name></name>`

### lifecycle of Vue
