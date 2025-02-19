document.addEventListener('DOMContentLoaded', function () {
    let yesButton = document.getElementById("yes");
    let noButton = document.getElementById("no");
    let questionText = document.getElementById("question");
    let mainImage = document.getElementById("mainImage");
    let audio = document.getElementById('music');

    let clickCount = 0;  // 记录点击 No 的次数

    // No 按钮的文字变化
    const noTexts = [
        "𐂂你确定吗taro哥˃̵͈̑ᴗ˂̵͈̑ ", 
        "哥再想想吧嘤嘤 ˃̵͈̑ᴗ˂̵͈̑  ", 
        "不允许选这个ᕑᗢᓫ", 
        "我真的伤心了ಥ_ಥ ", 
        "哭哭:("
    ];

    // 为按钮和元素添加过渡效果，让动画更平滑
    yesButton.style.transition = 'transform 0.3s ease';
    noButton.style.transition = 'transform 0.3s ease';
    mainImage.style.transition = 'transform 0.3s ease';
    questionText.style.transition = 'transform 0.3s ease';

    // 尝试自动播放音频
    audio.play().catch(() => {
        // 当自动播放失败时，监听用户的第一次交互事件
        const playOnInteraction = () => {
            audio.play();
            // 移除事件监听器，避免重复触发
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
        };

        // 监听点击和触摸事件
        document.addEventListener('click', playOnInteraction);
        document.addEventListener('touchstart', playOnInteraction);
    });

    // No 按钮点击事件
    noButton.addEventListener("click", function() {
        clickCount++;

        // 让 Yes 变大，每次放大 1.2 倍
        let yesSize = 1 + (clickCount * 1.2);
        yesButton.style.transform = `scale(${yesSize})`;

        // 挤压 No 按钮，每次右移 50px
        let noOffset = clickCount * 50;
        noButton.style.transform = `translateX(${noOffset}px)`;

        // 让图片和文字往上移动
        let moveUp = clickCount * 25; // 每次上移 25px
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
        // 创建表白成功页面的元素
        let successDiv = document.createElement('div');
        successDiv.className = 'yes-screen';

        // 创建多个 h1 标签
        for (let i = 0; i < 4; i++) {
            let h1 = document.createElement('h1');
            h1.className = 'yes-text';
            successDiv.appendChild(h1);
        }

        // 创建最后一个 h1 标签
        let lastH1 = document.createElement('h1');
        lastH1.className = 'yes-text';
        lastH1.innerHTML = '<br><br><br><br>₊˚⋆♡̷☆₊我最喜欢taro哥啦';
        successDiv.appendChild(lastH1);

        // 创建图片元素
        let img = document.createElement('img');
        img.src = "image/zaiyiqi1.png";
        img.alt = "拥抱";
        img.className = 'yes-image';
        img.width = 640;
        img.height = 410;
        successDiv.appendChild(img);

        // 创建音频元素
        let endAudio = document.createElement('audio');
        endAudio.src = "SungSho-end.mp3";
        endAudio.autoplay = true;
        successDiv.appendChild(endAudio);

        // 清空 body 并添加新元素
        document.body.innerHTML = '';
        document.body.appendChild(successDiv);

        // 禁止页面滚动
        document.body.style.overflow = "hidden";
    });
});