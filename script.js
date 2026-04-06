// ========== КЛЮЧИ ДЛЯ ОДНОКЛАССНИКОВ ==========
const accessKeys = {
    "NNDJK09SQQW": "Кирилл Бережанский",
    "MCD43F2KLMN": "Вадим Лобкович",
    "RTY78H5JKLP": "Арсений Кочерян",
    "XCV12B9NMQW": "Миша Морсаков",
    "PLM90R3TYUO": "Алексей Сидоров"
};

let currentUserName = "";
let currentUserKey = "";

function checkKey() {
    const inputKey = document.getElementById('keyInput').value.trim().toUpperCase();
    if (accessKeys[inputKey]) {
        currentUserName = accessKeys[inputKey];
        currentUserKey = inputKey;
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('menuScreen').style.display = 'block';
        renderMenu();
    } else {
        document.getElementById('loginError').textContent = 'Неверный ключ! Обратись к Кириллу';
    }
}

function showHelp() {
    document.getElementById('helpModal').style.display = 'flex';
}

function closeHelp() {
    document.getElementById('helpModal').style.display = 'none';
}

function showProfile() {
    document.getElementById('profileName').textContent = currentUserName;
    document.getElementById('profileKey').textContent = currentUserKey;
    document.getElementById('profileModal').style.display = 'flex';
}

function closeProfile() {
    document.getElementById('profileModal').style.display = 'none';
}

// ========== ГЕНЕРАЦИЯ 30 ВАРИАНТОВ (17 ЗАДАНИЙ) ==========
const variants = [];

for (let v = 1; v <= 30; v++) {
    const tasks = [];
    
    const outlierVal = [1154, 999, 1250, 888, 2000, 1111, 1345, 1000, 3000, 500][(v-1) % 10];
    
    // ЗАДАНИЕ 1
    tasks.push({
        id: 1,
        text: `Таблица содержит данные о росте учащихся класса. Найдите явно ошибочное значение (выброс), внесённое в эту таблицу.
        <table class="data-table">
            <tr><th>Фамилия</th><th>Рост, см</th><th>Фамилия</th><th>Рост, см</th><th>Фамилия</th><th>Рост, см</th></tr>
            <tr><td>Алексеев</td><td>156</td><td>Гетманов</td><td>160</td><td>Завидов</td><td>163</td></tr>
            <tr><td>Андреева</td><td>159</td><td>Дубова</td><td>156</td><td>Коваль</td><td>154</td></tr>
            <tr><td>Борисов</td><td>162</td><td>Евсеева</td><td>${outlierVal}</td><td>Петровская</td><td>149</td></tr>
            <tr><td>Вольский</td><td>158</td><td>Железов</td><td>167</td><td>Юсуфов</td><td>165</td></tr>
        </table>`,
        answer: outlierVal.toString()
    });
    
    // ЗАДАНИЕ 2
    tasks.push({
        id: 2,
        text: `Из данных о росте учащихся удалите выброс (${outlierVal}) и найдите размах оставшихся значений.`,
        answer: "18"
    });
    
    // ЗАДАНИЕ 3
    const speed = 5 + (v % 25);
    tasks.push({
        id: 3,
        text: `Трактор едет по дороге, проезжая ${speed} метров за каждую секунду. Выразите скорость трактора в километрах в час.`,
        answer: Math.round(speed * 3.6).toString()
    });
    
    // ЗАДАНИЕ 4
    tasks.push({
        id: 4,
        text: `Катя младше Тани, но старше Даши. Ксюша не младше Даши. Укажите номер верного утверждения:<br>
        1) Таня и Даша одного возраста<br>
        2) Среди указанных девочек нет никого младше Даши<br>
        3) Таня старше Даши<br>
        4) Таня и Катя одного возраста`,
        answer: "3"
    });
    
    // ЗАДАНИЕ 5
    const a = 1 + (v % 4);
    const b = 2 + (v % 8);
    const c = 1 + (v % 5);
    const d = -3 + (v % 7);
    const e = -5 - (v % 15);
    const x = Math.round((-(a*b + e)) / (a*c + d) * 10) / 10;
    tasks.push({
        id: 5,
        text: `Найдите корень уравнения ${a}(${b} + ${c}x) = ${d}x + ${e}`,
        answer: x.toString()
    });
    
    // ЗАДАНИЕ 6
    const yVal = (v % 20 - 10) / 10;
    const exprValue = Math.round((4 - yVal)**2 - yVal*(yVal + 1));
    tasks.push({
        id: 6,
        text: `Найдите значение выражения (4 - y)² - y(y + 1) при y = ${yVal}`,
        answer: exprValue.toString()
    });
    
    // ЗАДАНИЕ 7
    const price = 3500 + v * 30;
    const down = 10 + (v % 25);
    const up = 5 + (v % 15);
    const finalPrice = Math.round(price * (1 - down/100) * (1 + up/100));
    tasks.push({
        id: 7,
        text: `Хоккейные коньки стоили ${price} руб. Цену снизили на ${down}%. Затем повысили на ${up}%. Сколько рублей стали стоить коньки?`,
        answer: finalPrice.toString()
    });
    
    // ЗАДАНИЕ 8
    tasks.push({
        id: 8,
        text: `Решите систему уравнений:<br> { 5x + 2y = 2, 2x - y = -10 }`,
        answer: "-2 6"
    });
    
    // ЗАДАНИЕ 9
    tasks.push({
        id: 9,
        text: `На первом участке собрали по 420 т/га (20 га), на втором по 360 т/га (55 га), на третьем по 520 т/га (25 га). Найдите среднюю урожайность.`,
        answer: "410"
    });
    
    // ЗАДАНИЕ 10
    const angleFMD = 20 + (v % 50);
    tasks.push({
        id: 10,
        text: `Нарисуйте чертёж: параллельные прямые AB и CD пересекают прямую EF в точках K и M. Отметьте угол FMD = ${angleFMD}°. Найдите угол AKM.`,
        answer: (180 - angleFMD).toString()
    });
    
    // ЗАДАНИЕ 11
    const angleA = 30 + (v % 30);
    tasks.push({
        id: 11,
        text: `Нарисуйте равнобедренный треугольник ABC (AC = CB). Отметьте угол BAC = ${angleA}°. Найдите внешний угол при вершине C.`,
        answer: (2 * angleA).toString()
    });
    
    // ЗАДАНИЕ 12
    const ang1 = 40 + (v % 20);
    const ang2 = 60 + (v % 20);
    tasks.push({
        id: 12,
        text: `Нарисуйте треугольник ABC. Проведите биссектрису CE. ∠BAC = ${ang1}°, ∠ABC = ${ang2}°. Найдите угол BCE.`,
        answer: ((180 - ang1 - ang2) / 2).toString()
    });
    
    // ЗАДАНИЕ 13
    tasks.push({
        id: 13,
        text: `Задумали трёхзначное число, последняя цифра не ноль. Вычли число из тех же цифр в обратном порядке. Получили 792. Найдите наименьшее такое число.`,
        answer: "891"
    });
    
    // ЗАДАНИЕ 14
    tasks.push({
        id: 14,
        text: `Нарисуйте каркас абажура из проволоки. Сколько кусков проволоки нужно?`,
        answer: "8"
    });
    
    // ЗАДАНИЕ 15
    const dist = [3, 4, 5, 2, 4][(v-1) % 5];
    tasks.push({
        id: 15,
        text: `Нарисуйте клетчатую бумагу 1×1. Отметьте точки A, B, C. Найдите расстояние от точки A до прямой BC.`,
        answer: dist.toString()
    });
    
    // ЗАДАНИЕ 16
    tasks.push({
        id: 16,
        text: `Нарисуйте числовую прямую от 0 до 1. Отметьте точку A(-2/7). В ответе укажите десятичную дробь.`,
        answer: "-0.285"
    });
    
    // ЗАДАНИЕ 17
    tasks.push({
        id: 17,
        text: `Завершите тест и нажмите "Закончить".`,
        answer: "1"
    });
    
    variants.push({ number: v, tasks: tasks });
}

// ========== ЛОГИКА ТЕСТА ==========
let currentVariant = null;
let userAnswers = [];
let currentTaskIndex = 0;
let timerSeconds = 3600;
let timerInterval = null;

function renderMenu() {
    const grid = document.getElementById('variantsGrid');
    grid.innerHTML = '';
    for (let v of variants) {
        const div = document.createElement('div');
        div.className = 'variant-item';
        div.innerHTML = `<div class="variant-num">${v.number}</div><div>Вариант ${v.number}</div>`;
        div.onclick = () => startVariant(v.number);
        grid.appendChild(div);
    }
}

function startVariant(num) {
    currentVariant = variants.find(v => v.number === num);
    userAnswers = new Array(17).fill(null);
    currentTaskIndex = 0;
    timerSeconds = 3600;
    
    document.getElementById('menuScreen').style.display = 'none';
    document.getElementById('testArea').style.display = 'block';
    document.getElementById('variantNumDisplay').innerText = num;
    
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            finishTest();
        } else {
            timerSeconds--;
            const h = Math.floor(timerSeconds / 3600);
            const m = Math.floor((timerSeconds % 3600) / 60);
            const s = timerSeconds % 60;
            document.getElementById('timerDisplay').innerText = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        }
    }, 1000);
    
    renderTasksPanel();
    renderCurrentTask();
    
    document.getElementById('saveBtn').onclick = saveAnswer;
    document.getElementById('finishBtn').onclick = finishTest;
}

function renderTasksPanel() {
    const panel = document.getElementById('tasksPanel');
    panel.innerHTML = '';
    for (let i = 0; i < currentVariant.tasks.length; i++) {
        const btn = document.createElement('div');
        btn.className = 'task-btn';
        if (i === currentTaskIndex) btn.classList.add('active');
        if (userAnswers[i]) btn.classList.add('answered');
        btn.innerText = i + 1;
        btn.onclick = (function(idx) { return function() { 
            currentTaskIndex = idx; 
            renderTasksPanel(); 
            renderCurrentTask(); 
        }; })(i);
        panel.appendChild(btn);
    }
}

function renderCurrentTask() {
    const task = currentVariant.tasks[currentTaskIndex];
    document.getElementById('questionText').innerHTML = task.text;
    document.getElementById('answerInput').value = userAnswers[currentTaskIndex] || '';
    document.getElementById('savedMsg').innerHTML = '';
}

function saveAnswer() {
    const val = document.getElementById('answerInput').value.trim();
    if (!val) {
        document.getElementById('savedMsg').innerHTML = '⚠️ Введи ответ';
        return;
    }
    userAnswers[currentTaskIndex] = val;
    document.getElementById('savedMsg').innerHTML = '✅ Сохранено!';
    renderTasksPanel();
    
    if (currentTaskIndex < 16) {
        setTimeout(() => {
            currentTaskIndex++;
            renderTasksPanel();
            renderCurrentTask();
        }, 500);
    }
}

function finishTest() {
    clearInterval(timerInterval);
    let correct = 0;
    const results = [];
    currentVariant.tasks.forEach((task, i) => {
        const userAns = userAnswers[i];
        const isCorrect = userAns && userAns.toString().trim() === task.answer.toString();
        if (isCorrect) correct++;
        results.push({
            id: i+1,
            user: userAns || '—',
            correct: task.answer,
            ok: isCorrect
        });
    });
    
    const percent = Math.round(correct / 17 * 100);
    
    let grade = '';
    if (percent >= 85) grade = 'Отлично (5)';
    else if (percent >= 65) grade = 'Хорошо (4)';
    else if (percent >= 45) grade = 'Удовлетворительно (3)';
    else grade = 'Нужно повторить (2)';
    
    document.getElementById('resultStats').innerHTML = `
        <div class="result-stats">
            <strong>${currentUserName}</strong><br>
            Правильно: ${correct} из 17<br>
            Процент: ${percent}%<br>
            <strong>Оценка: ${grade}</strong>
        </div>
    `;
    
    const details = document.getElementById('resultDetails');
    details.innerHTML = '<h3>Разбор заданий:</h3>';
    results.forEach(r => {
        details.innerHTML += `<div class="result-item ${r.ok ? 'correct' : 'wrong'}">
            <strong>${r.id}.</strong> Твой ответ: ${r.user} | Правильный: ${r.correct}
        </div>`;
    });
    
    document.getElementById('resultModal').style.display = 'flex';
}

function backToMenu() {
    if (timerInterval) clearInterval(timerInterval);
    location.reload();
}

window.onclick = function(event) {
    const modal = document.getElementById('resultModal');
    const helpModal = document.getElementById('helpModal');
    const profileModal = document.getElementById('profileModal');
    if (event.target === modal) modal.style.display = 'none';
    if (event.target === helpModal) helpModal.style.display = 'none';
    if (event.target === profileModal) profileModal.style.display = 'none';
};
