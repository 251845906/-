console.log(
    +0 == -0,
    +0 === -0,
    NaN == NaN,
    Object.is(+0,-0),
    Object.is(NaN,NaN),
);
//  大部分情况下都是用 ==  ===