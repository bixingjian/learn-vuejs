todos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function active() {
  return todos.filter((i) => i === 300).length;
}

console.log(active === 0);

const App = {
  computed: {
    active() {
      return 0;
    },
    all() {
      return 100;
    },
    allDone: {
      get: function () {
        return active() === 0;
      },
    },
  },
};

// console.log(typeof App.computed.active);
console.log(App.computed.allDone.get());
