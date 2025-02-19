let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "𐂂你确定吗taro哥˃̵͈̑ᴗ˂̵͈̑ ", 
    "哥再想想吧嘤嘤 ˃̵͈̑ᴗ˂̵͈̑  ", 
    "不允许选这个ᕑᗢᓫ", 
    "我真的伤心了ಥ_ಥ ", 
    "哭哭:("
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "image/shock.png"; // 震惊
    if (clickCount === 2) mainImage.src = "image/sad.png";   // 思考
    if (clickCount === 3) mainImage.src = "image/cry.png";   // 生气
    if (clickCount === 4) mainImage.src = "image/crylaohuo.png";  // 哭
    if (clickCount >= 5) mainImage.src = "image/crylaohuo.png";  // 之后一直是哭
    
});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text"> </h1>
            <h1 class="yes-text"> </h1>
            <h1 class="yes-text"> </h1>
            <h1 class="yes-text"> </h1>

            <h1 class="yes-text">₊˚⋆♡̷☆₊我最喜欢taro哥啦っ ̫ •̥⸝⸝ </h1>
            <img src="image/zaiyiqi1.png" alt="拥抱" class="yes-image" width="1280" height="820">
            <embed height="0" width="0" src="SungSho-end.mp3"></embed>
        </div>
    `;

    document.body.style.overflow = "hidden";
});
