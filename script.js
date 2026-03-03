// ACC Quiz (Ch1-4) — Offline practice site
// Saves progress in localStorage.

const STORAGE_KEY = "acc_quiz_ch1_4_v1";

const QUESTIONS = [
  // Part 1
  {
    id: 1,
    part: "theory",
    tag: "Part 1 – Theory",
    text: 'Which of the following best describes the "Fraud Triangle"?',
    choices: {
      A: "A method used to calculate return on assets.",
      B: "Three factors that push a person to commit fraud: opportunity, pressure, and rationalization.",
      C: "The three main financial statements: Balance Sheet, Income Statement, and Statement of Cash Flows.",
      D: "A rule for recording revenue and expenses."
    },
    answer: "B",
    explain: "Fraud Triangle = Pressure (incentive) + Opportunity + Rationalization. Nếu thiếu 1 cạnh thì động cơ/điều kiện gian lận yếu đi."
  },
  {
    id: 2,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "The principle that requires a company to record its expenses in the same period as the revenues they helped generate is the:",
    choices: {
      A: "Measurement Principle (Cost Principle).",
      B: "Full Disclosure Principle.",
      C: "Expense Recognition Principle (Matching Principle).",
      D: "Revenue Recognition Principle."
    },
    answer: "C",
    explain: "Matching principle: ghi nhận chi phí cùng kỳ với doanh thu liên quan để phản ánh đúng lợi nhuận của kỳ đó."
  },
  {
    id: 3,
    part: "theory",
    tag: "Part 1 – Theory",
    text: 'Which of these accounts is considered a "Permanent Account" that is not closed at the end of a period?',
    choices: {
      A: "Consulting Revenue.",
      B: "Salaries Expense.",
      C: "Owner, Withdrawals.",
      D: "Accounts Payable."
    },
    answer: "D",
    explain: "Permanent accounts nằm trên Balance Sheet: Assets, Liabilities, Equity. Accounts Payable là nợ phải trả → không khóa sổ cuối kỳ."
  },
  {
    id: 4,
    part: "theory",
    tag: "Part 1 – Theory",
    text: "What is the primary purpose of the Trial Balance?",
    choices: {
      A: "To determine the net income for the month.",
      B: "To verify that total debits equal total credits after posting.",
      C: "To list all the external users of accounting information.",
      D: "To replace the need for a Balance Sheet."
    },
    answer: "B",
    explain: "Trial Balance = kiểm tra cân bằng Nợ/Có sau khi post vào sổ cái. Cân bằng không có nghĩa là không sai, nhưng lệch chắc chắn có lỗi."
  },
  {
    id: 5,
    part: "theory",
    tag: "Part 1 – Theory",
    text: 'In a classified balance sheet, "Current Assets" are resources expected to be sold, collected, or used within:',
    choices: {
      A: "Five years.",
      B: "One month.",
      C: "One year or the company’s operating cycle, whichever is longer.",
      D: "The life of the business (Going-concern)."
    },
    answer: "C",
    explain: "Current assets: chuyển thành tiền/tiêu dùng trong 1 năm hoặc operating cycle (nếu dài hơn 1 năm)."
  },

  // Part 2
  {
    id: 6,
    part: "practice",
    tag: "Part 2 – Practice",
    text: "Applying the Accounting Equation: At the beginning of the month, a company has Assets of $50,000 and Liabilities of $20,000. If the company provides services and receives $5,000 cash, what is the new total for Equity?",
    choices: {
      A: "$30,000",
      B: "$35,000",
      C: "$25,000",
      D: "$55,000"
    },
    answer: "B",
    explain: "Equity ban đầu = A − L = 50,000 − 20,000 = 30,000. Nhận 5,000 doanh thu tiền mặt → Equity tăng 5,000 → 35,000."
  },
  {
    id: 7,
    part: "practice",
    tag: "Part 2 – Practice",
    text: "Calculating Return on Assets (ROA): A company reports a Net Profit of $4,400. Its Beginning Total Assets were $30,000 and its Ending Total Assets were $40,400. What is the Return on Assets?",
    choices: {
      A: "11.0%",
      B: "14.6%",
      C: "12.5%",
      D: "10.9%"
    },
    answer: "C",
    explain: "Avg Assets = (30,000 + 40,400)/2 = 35,200. ROA = 4,400 / 35,200 = 0.125 = 12.5%."
  },
  {
    id: 8,
    part: "practice",
    tag: "Part 2 – Practice",
    text: "Adjusting Entry for Prepaid Insurance: On Dec 1, a company pays $2,400 for a 24-month insurance policy and records it as an asset. On Dec 31, the required adjusting entry is:",
    choices: {
      A: "Debit Insurance Expense $100; Credit Cash $100.",
      B: "Debit Prepaid Insurance $100; Credit Insurance Expense $100.",
      C: "Debit Insurance Expense $100; Credit Prepaid Insurance $100.",
      D: "Debit Insurance Expense $2,400; Credit Prepaid Insurance $2,400."
    },
    answer: "C",
    explain: "Chi phí mỗi tháng = 2,400 / 24 = 100. Cuối tháng ghi nhận phần đã dùng: Dr Insurance Expense 100; Cr Prepaid Insurance 100."
  },
  {
    id: 9,
    part: "practice",
    tag: "Part 2 – Practice",
    text: "Straight-Line Depreciation: Equipment cost $26,000, residual value $8,000, useful life 5 years (60 months). What is the monthly depreciation expense?",
    choices: {
      A: "$433",
      B: "$300",
      C: "$520",
      D: "$133"
    },
    answer: "B",
    explain: "Depreciable base = 26,000 − 8,000 = 18,000. Monthly = 18,000 / 60 = 300."
  },
  {
    id: 10,
    part: "practice",
    tag: "Part 2 – Practice",
    text: "Calculating the Current Ratio: Current Assets $42,900; Long-term Investments $67,500; Current Liabilities $29,000; Equity $164,800. What is the Current Ratio?",
    choices: {
      A: "1.48",
      B: "0.68",
      C: "2.32",
      D: "0.26"
    },
    answer: "A",
    explain: "Current Ratio = Current Assets / Current Liabilities = 42,900 / 29,000 = 1.48 (làm tròn)."
  }
];

// ---------- State ----------
const defaultState = () => ({
  order: QUESTIONS.map(q => q.id),
  current: 0,
  mode: "quiz", // quiz | flash
  answers: {}, // { [id]: "A"|"B"|"C"|"D" }
  checked: {}, // { [id]: true }
});

let state = loadState();

// ---------- DOM ----------
const quizView = document.getElementById("quizView");
const flashView = document.getElementById("flashView");

const modeQuizBtn = document.getElementById("modeQuizBtn");
const modeFlashBtn = document.getElementById("modeFlashBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const resetBtn = document.getElementById("resetBtn");

const sectionFilter = document.getElementById("sectionFilter");
const showFilter = document.getElementById("showFilter");

const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("scoreText");
const correctText = document.getElementById("correctText");
const wrongText = document.getElementById("wrongText");

const qTag = document.getElementById("qTag");
const qIndex = document.getElementById("qIndex");
const qText = document.getElementById("qText");
const choicesBox = document.getElementById("choices");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const checkBtn = document.getElementById("checkBtn");

const feedback = document.getElementById("feedback");
const resultPill = document.getElementById("resultPill");
const correctAnsText = document.getElementById("correctAnsText");
const explainText = document.getElementById("explainText");

const navGrid = document.getElementById("navGrid");
const mistakesBox = document.getElementById("mistakesBox");

// Flash
const flashCard = document.getElementById("flashCard");
const flashFront = document.getElementById("flashFront");
const flashBack = document.getElementById("flashBack");
const flashPrevBtn = document.getElementById("flashPrevBtn");
const flashNextBtn = document.getElementById("flashNextBtn");
const flashFlipBtn = document.getElementById("flashFlipBtn");

let flashFlipped = false;

// ---------- Helpers ----------
function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return defaultState();
    const parsed = JSON.parse(raw);
    // minimal validation
    if(!parsed || !Array.isArray(parsed.order)) return defaultState();
    return { ...defaultState(), ...parsed };
  }catch{
    return defaultState();
  }
}
function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}
function byId(id){ return QUESTIONS.find(q => q.id === id); }

function filteredOrder(){
  const section = sectionFilter.value; // all|theory|practice
  const show = showFilter.value; // all|unanswered|wrong|correct
  const ids = state.order.slice();

  return ids.filter(id => {
    const q = byId(id);
    if(section !== "all" && q.part !== section) return false;

    const ans = state.answers[id];
    const checked = !!state.checked[id];
    const isCorrect = checked && ans && ans === q.answer;
    const isWrong = checked && ans && ans !== q.answer;

    if(show === "all") return true;
    if(show === "unanswered") return !ans;
    if(show === "wrong") return isWrong;
    if(show === "correct") return isCorrect;
    return true;
  });
}

function currentIdInFiltered(){
  const order = filteredOrder();
  if(order.length === 0) return null;
  // map current pointer to filtered list
  const curId = state.order[state.current] ?? order[0];
  if(order.includes(curId)) return curId;
  return order[0];
}

function setCurrentById(id){
  const idx = state.order.indexOf(id);
  state.current = Math.max(0, idx);
  saveState();
}

function computeStats(){
  let done = 0, correct = 0, wrong = 0;
  for(const id of state.order){
    const q = byId(id);
    const ans = state.answers[id];
    if(ans) done++;
    if(state.checked[id] && ans){
      if(ans === q.answer) correct++;
      else wrong++;
    }
  }
  return { done, correct, wrong, score: correct };
}

function renderStats(){
  const { done, correct, wrong, score } = computeStats();
  progressText.textContent = `${done}/${QUESTIONS.length}`;
  scoreText.textContent = String(score);
  correctText.textContent = String(correct);
  wrongText.textContent = String(wrong);
}

function renderNav(){
  navGrid.innerHTML = "";
  for(const id of filteredOrder()){
    const q = byId(id);
    const ans = state.answers[id];
    const checked = !!state.checked[id];
    const btn = document.createElement("button");
    btn.className = "nav-btn";
    btn.textContent = String(id);

    if(checked && ans){
      if(ans === q.answer) btn.classList.add("correct");
      else btn.classList.add("wrong");
    }
    const curId = currentIdInFiltered();
    if(curId === id) btn.classList.add("current");

    btn.addEventListener("click", () => {
      setCurrentById(id);
      renderAll();
    });
    navGrid.appendChild(btn);
  }
}

function renderMistakes(){
  const wrongIds = state.order.filter(id => {
    const q = byId(id);
    const ans = state.answers[id];
    return state.checked[id] && ans && ans !== q.answer;
  });

  if(wrongIds.length === 0){
    mistakesBox.classList.add("muted");
    mistakesBox.textContent = "No mistakes yet. Keep slicing it.";
    return;
  }

  mistakesBox.classList.remove("muted");
  mistakesBox.innerHTML = wrongIds.map(id => {
    const q = byId(id);
    const ans = state.answers[id];
    return `
      <div class="mistake-item">
        <b>Q${id}:</b> your answer <b>${ans}</b>, correct <b>${q.answer}</b><br/>
        <span class="muted">${escapeHtml(q.text)}</span>
      </div>
    `;
  }).join("<hr style='border:0;border-top:1px solid rgba(255,255,255,.10);margin:10px 0'/>");
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;");
}

// ---------- Quiz Render ----------
function renderQuestion(){
  const id = currentIdInFiltered();
  if(id === null){
    qTag.textContent = "No questions";
    qIndex.textContent = "";
    qText.textContent = "No questions match your filters.";
    choicesBox.innerHTML = "";
    feedback.classList.add("hidden");
    return;
  }

  const q = byId(id);
  const filtered = filteredOrder();
  const pos = filtered.indexOf(id) + 1;

  qTag.textContent = q.tag;
  qIndex.textContent = `Question ${pos} of ${filtered.length}`;
  qText.textContent = q.text;

  const selected = state.answers[id] || null;
  const checked = !!state.checked[id];

  choicesBox.innerHTML = "";
  for(const key of ["A","B","C","D"]){
    const row = document.createElement("label");
    row.className = "choice";
    if(selected === key) row.classList.add("selected");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "choice";
    input.value = key;
    input.checked = selected === key;

    input.addEventListener("change", () => {
      state.answers[id] = key;
      // changing answer after check keeps it checked? I choose: uncheck so you re-verify.
      state.checked[id] = false;
      saveState();
      renderAll();
    });

    const label = document.createElement("div");
    label.className = "label";
    label.textContent = key;

    const text = document.createElement("div");
    text.className = "text";
    text.textContent = q.choices[key];

    row.appendChild(input);
    row.appendChild(label);
    row.appendChild(text);

    // show correct/wrong colors only after checked
    if(checked && selected){
      if(key === q.answer) row.classList.add("correct");
      else if(key === selected && selected !== q.answer) row.classList.add("wrong");
    }

    choicesBox.appendChild(row);
  }

  // Feedback panel
  if(checked && selected){
    feedback.classList.remove("hidden");
    const ok = selected === q.answer;
    resultPill.textContent = ok ? "Correct ✅" : "Wrong ❌";
    resultPill.className = "pill " + (ok ? "ok" : "bad");
    correctAnsText.textContent = q.answer;
    explainText.textContent = q.explain;
  } else {
    feedback.classList.add("hidden");
  }

  // Prev/Next availability within filtered list
  prevBtn.disabled = (pos <= 1);
  nextBtn.disabled = (pos >= filtered.length);
}

function checkCurrent(){
  const id = currentIdInFiltered();
  if(id === null) return;
  const selected = state.answers[id];
  if(!selected){
    // playful but direct
    alert("Pick an option first. Don’t ghost the question 😄");
    return;
  }
  state.checked[id] = true;
  saveState();
  renderAll();
}

function goPrev(){
  const id = currentIdInFiltered();
  const order = filteredOrder();
  if(id === null) return;
  const i = order.indexOf(id);
  if(i > 0){
    setCurrentById(order[i-1]);
    renderAll();
  }
}
function goNext(){
  const id = currentIdInFiltered();
  const order = filteredOrder();
  if(id === null) return;
  const i = order.indexOf(id);
  if(i < order.length - 1){
    setCurrentById(order[i+1]);
    renderAll();
  }
}

// ---------- Flashcards ----------
function renderFlash(){
  const id = currentIdInFiltered();
  if(id === null){
    flashFront.textContent = "No questions match your filters.";
    flashBack.textContent = "";
    return;
  }
  const q = byId(id);
  flashFront.innerHTML = `
    <div class="muted">Q${q.id} • ${q.tag}</div>
    <div style="margin-top:10px">${escapeHtml(q.text)}</div>
    <div class="muted" style="margin-top:12px">Options: A, B, C, D</div>
  `;

  flashBack.innerHTML = `
    <div><b>Correct:</b> ${q.answer}</div>
    <div style="margin-top:10px"><b>Why:</b> ${escapeHtml(q.explain)}</div>
    <div class="muted" style="margin-top:10px">
      If you can explain it in 2 sentences, you own it.
    </div>
  `;

  // reset flip
  flashFlipped = false;
  flashBack.classList.add("hidden");
}

function flipFlash(){
  flashFlipped = !flashFlipped;
  if(flashFlipped) flashBack.classList.remove("hidden");
  else flashBack.classList.add("hidden");
}

// ---------- Mode switching ----------
function setMode(mode){
  state.mode = mode;
  saveState();
  if(mode === "quiz"){
    quizView.classList.remove("hidden");
    flashView.classList.add("hidden");
    modeQuizBtn.classList.add("btn-primary");
    modeFlashBtn.classList.remove("btn-primary");
  }else{
    flashView.classList.remove("hidden");
    quizView.classList.add("hidden");
    modeFlashBtn.classList.add("btn-primary");
    modeQuizBtn.classList.remove("btn-primary");
  }
  renderAll();
}

// ---------- Shuffle / Reset ----------
function shuffle(){
  // Fisher-Yates
  const arr = state.order.slice();
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  state.order = arr;
  state.current = 0;
  saveState();
  renderAll();
}

function resetAll(){
  if(!confirm("Reset will clear all answers and progress. Sure?")) return;
  state = defaultState();
  saveState();
  renderAll();
}

// ---------- Render all ----------
function renderAll(){
  renderStats();
  renderNav();
  renderMistakes();

  // ensure current is valid
  const curId = currentIdInFiltered();
  if(curId !== null){
    setCurrentById(curId);
  }

  if(state.mode === "quiz"){
    renderQuestion();
  }else{
    renderFlash();
  }
}

// ---------- Events ----------
modeQuizBtn.addEventListener("click", () => setMode("quiz"));
modeFlashBtn.addEventListener("click", () => setMode("flash"));
shuffleBtn.addEventListener("click", shuffle);
resetBtn.addEventListener("click", resetAll);

sectionFilter.addEventListener("change", renderAll);
showFilter.addEventListener("change", renderAll);

prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);
checkBtn.addEventListener("click", checkCurrent);

document.addEventListener("keydown", (e) => {
  if(state.mode === "quiz"){
    if(e.key === "ArrowLeft") goPrev();
    if(e.key === "ArrowRight") goNext();
    if(e.key.toLowerCase() === "enter") checkCurrent();
  }else{
    if(e.key === "ArrowLeft") goPrev();
    if(e.key === "ArrowRight") goNext();
    if(e.key === " "){ e.preventDefault(); flipFlash(); }
  }
});

flashFlipBtn.addEventListener("click", flipFlash);
flashPrevBtn.addEventListener("click", goPrev);
flashNextBtn.addEventListener("click", goNext);
flashCard.addEventListener("click", flipFlash);
flashCard.addEventListener("keydown", (e)=> {
  if(e.key === " "){ e.preventDefault(); flipFlash(); }
});

// ---------- Init ----------
(function init(){
  // set initial mode UI
  if(state.mode === "flash"){
    flashView.classList.remove("hidden");
    quizView.classList.add("hidden");
    modeFlashBtn.classList.add("btn-primary");
  }else{
    modeQuizBtn.classList.add("btn-primary");
  }
  renderAll();
})();
