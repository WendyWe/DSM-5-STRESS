const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');
let selectedDraggable = null;

// 允許拖曳功能
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });
    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });

    // 為手機用戶新增 "點擊選擇" 功能
    draggable.addEventListener('click', () => {
        if (selectedDraggable) {
            selectedDraggable.classList.remove('selected');
        }
        selectedDraggable = draggable;
        draggable.classList.add('selected');
    });
});

// 允許拖放到正確區域
dropzones.forEach(zone => {
    zone.addEventListener('dragover', e => e.preventDefault());
    zone.addEventListener('drop', e => {
        const dragged = document.querySelector('.dragging');
        if (dragged) {
            zone.appendChild(dragged);
        }
    });

    // 允許點擊選擇放入（手機用）
    zone.addEventListener('click', () => {
        if (selectedDraggable) {
            zone.appendChild(selectedDraggable);
            selectedDraggable.classList.remove('selected');
            selectedDraggable = null;
        }
    });
});

// 提交按鈕，檢查配對結果
document.getElementById('submit').addEventListener('click', () => {
    let score = 0;
    
    dropzones.forEach(zone => {
        const droppedItem = zone.querySelector('.draggable');
        
        // 先清除所有顏色標記
        zone.classList.remove('correct', 'incorrect');

        if (droppedItem) {
            if (droppedItem.getAttribute('data-name') === zone.getAttribute('data-answer')) {
                zone.classList.add('correct'); // 正確答案標記為綠色
                score++;
            } else {
                zone.classList.add('incorrect'); // 錯誤答案標記為紅色
            }
        }
    });

    document.getElementById('result').innerText = `你的得分是：${score} / 8`;
});

