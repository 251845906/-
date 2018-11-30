let beyond = {
    formedin:'1983',
    foundedin:'香港',
    artist:['黄家驹','黄家强','黄贯中','叶世荣'],
    func:function () {
        return 0
    }
};

for ( let i in beyond){Array.isArray(beyond[i])&&console.log(...beyond[i])}