// JQueryのプラグインはこれで始まる。
// 最初の ; は、このファイルを読み込む前のJSファイルが ; で終わってない
// 場合のための処理
// $.fn.プラグイン名 = function ( option ) {
//   この中に処理を書く
// }
// そんな感じです
;$.fn.niceMiddle = function( options ){

  // オプション処理
  var opts = $.extend({}, $.fn.niceMiddle.defaults, options);

  // 中央揃えしたい要素を一つずつ処理するため、ループを回す
  $(this).each (function(){
    // 要素がインラインだった場合はブロック要素にする
    $(this).css({"display":"block"});

    // 要素の高さ・親要素の高さを取得して、
    // 要素にどれくらい余白を追加すれば良いかを計算
    var parent = $(this).parent();       // 親要素
    var parentHeight = parent.height();  // 親要素の高さ
    var height = $(this).height();       // 要素の高さ
    // 足す余白の量を計算
    var marginTop = ( parentHeight ) / 2 - ( height / 2 );

    // オプションでpadding指定がない場合
    if ( opts.type !== "padding" ) {
      // 要素に margin-top を追加する
      $(this).css({"margin-top": marginTop});
    } else {
      // padding指定があれば、paddingを追加する
      $(this).css({
        "display": "block",
        "padding-top": marginTop,
        "padding-bottom": marginTop
      });
    }
  });
};
$('.middle').niceMiddle();

// オプションのデフォルト値設定
// オプションを使いたい場合はこんな感じで書くよ
// 使いたい時は $(ele).niceMiddle(ここにパラパラと書く)
// 記法は {} のなかに、 type: 1, img: "../img/" みたいな感じで、
// 名前: 値, 名前: "文字列" みたいに書く
$.fn.niceMiddle.defaults = {
  type: "margin"
};

