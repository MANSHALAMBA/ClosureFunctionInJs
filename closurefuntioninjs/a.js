function makeCounter() {
    var count = 0;
    function counter() {
    count = count + 1;
    return count;
    }
    return counter;
    }
    var doCount = makeCounter();  // function counter being returned
    console.log(doCount());   // count becomes 1
    console.log(doCount());   // count becomes 2
    console.log(doCount());    // count becomes 3