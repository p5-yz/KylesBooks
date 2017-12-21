const foo = {
  moo:"moo!",
  bah:"bah!",
  squark:"squark!",
  crow: function(){
    return this.squark;
  },

  sheep: function(){
    return this.bah
  },

  cow: function(){
    return this.moo
  }
}
const cow = foo.moo //?
const sheep = foo.bah //?
const crow = foo.squark //?

console.log (foo.crow())
console.log (foo.sheep())
console.log (foo.cow())
