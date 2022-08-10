// 1
const user = {
  name: 'Raj',
  location: {
    city: 'NY',
    state: 'NY'
  }
};

const copy = Object.assign(user);
copy.location.city = 'Albany';

console.log('original: ', user.location);
console.log('copy:', copy.location);


// 2

function func2(){
  for(var i = 0; i < 3; i++){
    setTimeout(()=> console.log(i),2000);
}
}
func2();

// 3
(function(){
  setTimeout(()=> console.log(1),2000);
  console.log(2);
  setTimeout(()=> console.log(3),0);
  console.log(4);
})();