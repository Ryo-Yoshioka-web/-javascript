
// --------------------------------------------ハンバーガーメニューの挙動--------------------------------------------
//全てのクラスをとってくる
let menuAll = document.querySelectorAll(".menu");
// for で取得 
for (var i = 0; i < menuAll.length; i++) {
    // 全てのmenuで何個目かを取得
    menuAll[i].addEventListener('click', function () {
        // thisはmenuAll[i]にあたる
        this.classList.toggle('open');
    });
};
// --------------------------------------------ハンバーガーメニューの挙動--------------------------------------------


// ------------------------------------------------------ modal open --------------------------------------------------------------
// Modal Openボタンを取得
// 





// document.querySelector()でcssセレクタの要素を取得（一つ） document.querySelectorAll()は全ての要素
const btn = document.querySelector('.btn__link');
console.log(btn);
// モーダルの背景を取得
const modalBack = document.querySelector('.modal-back');
console.log(modalBack);
// モーダルを取得
const modal = document.querySelector('.modal');
console.log(modal);
// ✕ボタンを取得
const closeBtn = document.querySelector('.close');
console.log(closeBtn);

btn.addEventListener('click', function (e) {
    e.preventDefault();
    modalBack.classList.add('open');
    modal.classList.add('open');

    closeBtn.addEventListener('click', function () {
        modalBack.classList.remove('open');
        modal.classList.remove('open');
    });
});
// ------------------------------------------------------ modal open --------------------------------------------------------------


// ------------------------------------------------------ deta 属性 --------------------------------------------------------------
let elem = document.getElementById("first-div");
// first-divというIDを取得してくる
elem.dataset.color
//dataset.単語 でdata属性の値を表示可能 この場合はblueを取得
elem.dataset.length
// この場合はblueを取得 80% を取得
elem.dataset.color = "yellow";
elem.dataset.length = "20%";
// これすることで、data属性の値が書き換えることができる
// この挙動を出すことで,div[data-color=yellow] {background: yellow;}書いていると
// 変更させる



