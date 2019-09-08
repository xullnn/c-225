function makeCounterLogger(first) {
  return function(second) {
    if (first < second) {
      for(let i = first; i <= second; i += 1) {
        console.log(i);
      }
    } else {
      for(let i = first; i >= second; i -= 1) {
        console.log(i)
      }
    }
  };
}
