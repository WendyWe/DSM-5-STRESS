// 遊戲案例（可以擴展更多）
const cases = [
    {
        title: "案例 1",
        description: "Sarah，42 歲，一年前經歷了人生中最沉痛的失去——她的丈夫因病去世。這場突如其來的變故徹底改變了她的生活，讓她陷入了無盡的悲傷之中。即使時間已過去一年，她依然無法從這份痛苦中解脫，彷彿她的世界停滯在丈夫離世的那一天。\n \n 每天早晨醒來，Sarah 仍然習慣性地往床的另一側望去，卻只見到空蕩蕩的枕頭。她常常回憶起與丈夫共度的時光，無論是他們曾經的對話，還是日常的點滴細節，這些記憶讓她既溫暖又心碎。淚水成了她生活的一部分，有時她甚至不需要特別的觸發點，情緒就會在某個瞬間崩潰。對她來說，丈夫的離去不僅是一場失落，更是一種無法彌補的缺憾。\n \n 在社交方面，Sarah 變得愈發孤立。她曾經喜歡與朋友聚會，但現在她選擇避開所有社交活動。朋友們試圖邀請她出門散心，但她總是找理由推脫。她不再參加家庭聚會，也很少與親人聯繫，因為她害怕談論丈夫，害怕別人的安慰會讓她的傷口再次撕裂。她寧願獨自承受這份痛苦，而不是在他人面前展露自己的脆弱。\n \n 對於日常生活，Sarah 也顯得無力應對。原本她是一個熱愛工作、有規律生活的人，但現在，她對所有事情都提不起興趣。過去她喜歡園藝，喜歡旅行，但如今這些事都變得毫無意義。她沒有動力計劃未來，甚至連簡單的家務事都變成一項沉重的負擔。她的世界彷彿被凍結在丈夫去世的那一刻，無法往前邁進。",
        correctAnswer: "PGD",
        explanation: "This is likely Prolonged Grief Disorder (PGD) because symptoms have lasted over a year and significantly impair daily functioning."
    },
    {
        title: "案例 2",
        description: "John，今年 30 歲，兩週前經歷了一場嚴重的車禍。他僥倖生還，但內心卻承受著遠超過肉體傷害的創痛。事故發生後，他的生活變得完全不同，彷彿被困在那場災難的回憶中，無法擺脫。\n \n 夜晚對 John 來說，已經不再是休息的時刻，而是一場煎熬。他經常在惡夢中驚醒，夢裡總是重現著那場車禍的瞬間——車輛翻滾、金屬碰撞的聲音、強烈的衝擊感，還有自己當時的恐懼。他的身體會在夢中不由自主地顫抖，醒來後滿頭大汗，心跳加速，即使天亮了，這種驚恐感仍然縈繞不去。\n \n 除了夢境，John 在清醒時也會突然 閃回（flashbacks），彷彿回到了那場事故當下。有時候，他只是走在路上，看到某個特定的場景或聽到車輛急煞的聲音，他的腦中便會自動播放那場可怕的畫面。這些片段來得毫無預警，使他極度不安，甚至會讓他瞬間停下腳步，感覺自己又回到了生死一線間。\n \n 這樣的經歷讓 John 開始極力避免與車禍有關的事物。他已經不敢開車，也不願意坐別人的車，即使短短幾分鐘的車程都讓他感到窒息。他寧願步行或搭乘大眾運輸工具，即便這讓他的日常生活變得更加不便，但他就是無法克服那種對駕駛的恐懼。他甚至試圖避開任何談論車禍的話題，當朋友或家人關心他的情況時，他總是簡單帶過，因為只要一回想，他的內心就會再度陷入恐懼。",
        correctAnswer: "ASD",
        explanation: "John’s symptoms have lasted less than a month and include flashbacks and avoidance, fitting Acute Stress Disorder (ASD)."
    },
    {
        title: "案例 3",
        description: "Emily，今年 27 歲，兩個月前被公司裁員。這場突如其來的變故讓她的生活失去了穩定，並帶來了一連串的情緒與生理影響。她開始變得 焦慮不安、失眠，甚至影響了她的日常生活與人際關係。\n \n在這份工作中，Emily 付出了很多努力，並對自己的職涯抱有長遠規劃。然而，裁員的決定來得毫無預警，讓她感到措手不及，也讓她開始懷疑自己的能力。她不斷回想當時收到通知的情景，內心充滿挫敗與不安。她擔心未來的就業前景，也害怕自己找不到合適的新工作。\n \n 自從失業後，Emily 開始經歷長期的焦慮與壓力。她總是感覺心跳加快，難以放鬆，甚至有時會無法集中注意力。在夜晚，她經常輾轉反側，腦中充滿對未來的不確定感，導致長時間的失眠。即使勉強入睡，她也會因焦慮而時常醒來，睡眠品質極差，使她白天更加疲憊，進一步影響她的情緒與工作動力。",
        correctAnswer: "AD",
        explanation: "Emily’s symptoms started after a non-traumatic life event and do not involve severe trauma responses, fitting Adjustment Disorder (AD)."
    },
    {
        title: "案例 4",
        description: "阿強，37 歲，是一名建築工人，三年前在台灣發生的一場大地震中經歷了生死一瞬。當時，他正在高樓施工，強震來襲時，建築物劇烈搖晃，鋼架崩落，他眼睜睜地看著同事被壓在瓦礫下，卻無能為力。他自己則在驚恐之中逃出，但那場災難，深深烙印在他的記憶裡。\n \n三年過去了，阿強的生活卻未能恢復正常。\n\n他經常做惡夢，夢見當時的場景，每次驚醒後，心跳劇烈、滿身冷汗，久久無法再入睡。白天，他也時常閃回，任何輕微的地震、建築工地的敲擊聲，甚至電視上的災難新聞，都會讓他瞬間回到那個恐怖的時刻，感覺自己再次身處危險之中。\n\n為了避免這些回憶，他開始刻意逃避與地震相關的事物。他辭去了建築工作，甚至連親友邀請他到高樓餐廳用餐，他都拒絕，害怕再次面對「萬一地震發生，我該怎麼辦？」的恐懼。他的家人發現，他變得焦躁易怒，難以親近，甚至在家中聽到門突然關上的聲音，他都會嚴重受驚，立即進入防衛狀態，像是在等待災難降臨。",
        correctAnswer: "PTSD",
        explanation: "Since symptoms have lasted over a month and include trauma-related behaviors, this is likely PTSD."
    }
];

let currentCaseIndex = 0;

function loadCase(index) {
    document.getElementById("case-title").innerText = cases[index].title;
    document.getElementById("case-description").innerText = cases[index].description;
    document.getElementById("feedback").innerText = "";
    document.getElementById("next-case").style.display = "none";
}

function checkAnswer(selectedAnswer) {
    const currentCase = cases[currentCaseIndex];
    const feedbackDiv = document.getElementById("feedback");

    if (selectedAnswer === currentCase.correctAnswer) {
        feedbackDiv.innerHTML = `<span style="color: green;">Correct! ${currentCase.explanation}</span>`;
    } else {
        feedbackDiv.innerHTML = `<span style="color: red;">Incorrect. ${currentCase.explanation}</span>`;
    }

    document.getElementById("next-case").style.display = "block";
}

function loadNextCase() {
    currentCaseIndex++;

    if (currentCaseIndex < cases.length) {
        loadCase(currentCaseIndex);
    } else {
        document.getElementById("case-container").innerHTML = "<h2>Game Over</h2><p>You've completed all cases!</p>";
        document.getElementById("feedback").innerText = "";
        document.querySelector(".choices").style.display = "none";
        document.getElementById("next-case").style.display = "none";
    }
}

// 初始化遊戲
loadCase(currentCaseIndex);

