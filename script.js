// =============================================
// products.js のデータを読んで、商品カードを画面に並べる処理
// 商品を追加するだけなら、このファイルは触らなくてOKです。
// =============================================

// 今どのカテゴリを表示しているか（"all" はすべて）
let currentCategory = "all";

// 価格を「¥3,980」の形にする
// priceFrom が true のときは「¥3,980〜」のように後ろに「〜」を付ける
function formatPrice(price, priceFrom) {
  let text = "¥" + price.toLocaleString();
  if (priceFrom) {
    text += "〜";
  }
  return text;
}

// 商品1つ分のカード（HTML要素）を作って返す
function createCard(product) {
  const card = document.createElement("article");
  card.className = "card";

  // --- 画像部分 ---
  const imageBox = document.createElement("div");
  imageBox.className = "card-image";

  if (product.image !== "") {
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.loading = "lazy"; // 画面に近づいてから読み込む（表示を速くするため）
    imageBox.appendChild(img);
  } else {
    // 画像がないときは仮の絵を出す
    imageBox.classList.add("no-image");
    imageBox.textContent = "♡";
  }

  if (product.isNew) {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = "NEW";
    imageBox.appendChild(badge);
  }

  // --- 文字部分 ---
  const body = document.createElement("div");
  body.className = "card-body";

  const categoryLabel = document.createElement("p");
  categoryLabel.className = "card-category";
  categoryLabel.textContent = categories[product.category];

  const name = document.createElement("h3");
  name.className = "card-name";
  name.textContent = product.name;

  const comment = document.createElement("p");
  comment.className = "card-comment";
  comment.textContent = product.comment;

  const price = document.createElement("p");
  price.className = "card-price";
  price.textContent = formatPrice(product.price, product.priceFrom);

  const button = document.createElement("a");
  button.className = "card-button";
  button.href = product.link;
  button.target = "_blank"; // 新しいタブで開く
  // sponsored: 広告リンクであることを検索エンジンに伝える
  // noopener: 開いた先のページからこのページを操作されないようにする
  button.rel = "sponsored noopener";
  button.textContent = product.shop + "で見る";

  body.appendChild(categoryLabel);
  body.appendChild(name);
  body.appendChild(comment);
  body.appendChild(price);
  body.appendChild(button);

  card.appendChild(imageBox);
  card.appendChild(body);
  return card;
}

// 商品一覧を描き直す
function renderProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = ""; // いったん空にする

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    if (currentCategory === "all" || product.category === currentCategory) {
      list.appendChild(createCard(product));
    }
  }
}

// 絞り込みボタンを1つ作る
function createFilterButton(key, label) {
  const button = document.createElement("button");
  button.className = "filter-button";
  button.textContent = label;
  button.dataset.category = key;

  if (key === currentCategory) {
    button.classList.add("active");
  }

  button.addEventListener("click", function () {
    currentCategory = key;

    // 押されたボタンだけ色を変える
    const allButtons = document.querySelectorAll(".filter-button");
    for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].classList.toggle("active", allButtons[i].dataset.category === key);
    }

    renderProducts();
  });

  return button;
}

// 絞り込みボタンを並べる（categories の数だけ自動で作る）
function renderFilters() {
  const filters = document.getElementById("filters");
  filters.appendChild(createFilterButton("all", "すべて"));

  for (const key in categories) {
    filters.appendChild(createFilterButton(key, categories[key]));
  }
}

renderFilters();
renderProducts();
