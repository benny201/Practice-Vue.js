new Vue({
  el: "#app",
  data: {
    text: 'hello world!',
    link: 'https://www.google.com',
    counter: 0
  },
  methods: {
    sayHello: function () {
      return this.text;
    },
    increse: function () {
      return this.counter++;
    }
  }
});
