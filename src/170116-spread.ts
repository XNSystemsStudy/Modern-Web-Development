// shallow copy
(()=>{
    let src = [2, 4, 6];
    let dst = src;
    let dst1 = [ ...src ];
    let dst2 = { ...src };

    let [first, ...others] = src;
    let {'0':firstE, ...othersE} = dst2;

    console.log(first);
    console.log(others[0]);
    console.log(firstE);
    console.log(othersE[0]);
})();

(()=>{
    let src = {}


})();
