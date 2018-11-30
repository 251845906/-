let beyond = {
  formedin:'1983',
  foundedin:'香港',
  artist:['黄家驹','黄家强','黄贯中','叶世荣']
};
// 添加对象
beyond.showArtist = function () {
  for (var i = 0;i<this.artist.length;i++){
      console.log(this.artist[i])
  };
};
beyond.showArtist();
//this 指向的对象本身