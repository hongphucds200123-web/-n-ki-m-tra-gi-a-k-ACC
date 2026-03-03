// ACC Quiz (Ch1-4) — Offline practice site
// Saves progress in localStorage.

const STORAGE_KEY = "acc_quiz_ch1_4_v1";

const QUESTIONS = window.QUESTIONS;
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
