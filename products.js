// =============================================
// 商品データ
// 商品を追加するときは、このファイルだけを編集します。
//
// 【追加の手順】
// 1. 下の { ... } のかたまりを1つコピーする
// 2. products の [ ] の中に貼り付ける（上に置くほどページの先頭に表示される）
// 3. 中身を書き換える
// 4. かたまりとかたまりの間の「,（カンマ）」を忘れない
//
// 画像は images フォルダに入れて、"images/ファイル名.jpg" のように書きます。
// 画像がまだない場合は image: "" にすると、仮の絵が表示されます。
// 価格を「¥9,460〜」のように表示したいときは、priceFrom: true を足します。
// （price には「〜」を付けず、数字だけを書きます）
// =============================================

// カテゴリの一覧。キー（左側）を products の category に書きます。
// 新しいカテゴリを増やしたいときは、ここに1行足すと絞り込みボタンも自動で増えます。
const categories = {
  fashion: "ファッション",
  beauty: "美容"
};

const products = [
  {
    name: "Torriden（トリデン）ダイブイン セラム",
    category: "beauty",
    price: 3300,
    priceFrom: false,
    image: "images/Torriden DIVE IN Serum.png",
    comment: "💧 乾燥肌対策に！3秒で潤う水分チャージ　ヒアルロン酸が角質層まで浸透　ベタつかないのに、内側からぷるぷるの水光肌へ！",
    shop: "楽天",
    link: "https://a.r10.to/h5YJJS",
    isNew: false
  },
  {
    name: "Kiehl's（キールズ）DS クリアリーホワイト ブライトニング エッセンス",
    category: "beauty",
    price: 9460,
    priceFrom: true,
    image: "images/Kiehls Clearly.png",
    comment: "✨ くすみを払拭！透明感爆誕の定番　すっぴんをパッと明るく！　安定型ビタミンC誘導体配合で、シミ予防とトーンアップに。",
    shop: "楽天",
    link: "https://a.r10.to/hXrn74",
    isNew: false
  },
  {
    name: "TAKAMI（タカミ）タカミスキンピール",
    category: "beauty",
    price: 5720,
    priceFrom: true,
    image: "images/TAKAMI skinpeel essence.png",
    comment: "🌿 毛穴の目立ちを軽減！塗るだけの角質ケア　剥がさない優しい処方で毎日使える　肌の代謝に寄り添い、キメの整ったなめらか肌へ！",
    shop: "楽天",
    link: "https://item.rakuten.co.jp/takami-labo/r-s009/",
    isNew: false
  },
  {
    name: "innisfree（イニスフリー）レチノール シカ リペア セラム",
    category: "beauty",
    price: 3960,
    priceFrom: true,
    image: "images/innisfree retinol cica repair ampoule.png",
    comment: "🥚 今のうちに始める！20代のファーストレチノール　レチノール×シカで優しくケア　肌荒れを防ぎながら、毛穴や初期のハリ不足・たるみ予防に！",
    shop: "楽天",
    link: "https://item.rakuten.co.jp/innisfree-official/131173569/",
    isNew: false
  }
];
