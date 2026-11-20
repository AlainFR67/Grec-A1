"use strict";

const APP_VERSION = "2.11.0";
const APP_BUILD_DATE = "2026-11-20";
const APP_BUILD_TIME = "21:31";
const EXAM_QUESTION_COUNT = 20;
const EXAM_ID = "examen-final";
const LEVEL_STORE_KEY = "grec-a1-level";
const QUIZ_LENGTH = 10;

const app = document.getElementById("app");
const tabs = document.querySelectorAll(".tab");

const STORE_KEY = "grec-a1-progress";
function loadLevel() {
  try {
    const lvl = JSON.parse(localStorage.getItem(LEVEL_STORE_KEY));
    return LEVELS[lvl] ? lvl : "A1";
  } catch {
    return "A1";
  }
}

let state = {
  level: loadLevel(),
  view: "home",
  lessonId: null,
  cardLessonId: null,
  cardIndex: 0,
  cardFlipped: false,
  quizLessonId: null,
  quizIndex: 0,
  quizScore: 0,
  quizAnswers: [],
  mode: "lesson",
};

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || defaultProgress();
  } catch {
    return defaultProgress();
  }
}

function defaultProgress() {
  return { quizzes: {}, cardsSeen: {} };
}

function saveProgress(progress) {
  localStorage.setItem(STORE_KEY, JSON.stringify(progress || loadProgress()));
}

const getLesson = (id) => ALL_LESSONS.find((l) => l.id === id);

const levelLessons = () => LEVELS[state.level].lessons;

function examId() {
  return EXAM_ID + "-" + state.level;
}

function setView(view) {
  state.view = view;
  tabs.forEach((t) => t.classList.toggle("active", t.dataset.view === view));
  render();
  window.scrollTo(0, 0);
}

tabs.forEach((t) =>
  t.addEventListener("click", () => setView(t.dataset.view))
);

function initLevelSelect() {
  const select = document.getElementById("level-select");
  if (!select) return;
  select.value = state.level;
  select.addEventListener("change", () => {
    state.level = select.value;
    localStorage.setItem(LEVEL_STORE_KEY, JSON.stringify(state.level));
    state.view = "home";
    state.lessonId = null;
    state.cardLessonId = null;
    state.quizLessonId = null;
    render();
  });
}

function initVersion() {
  const elv = document.getElementById("app-version");
  if (elv) elv.textContent = `Version ${APP_VERSION} · build du ${APP_BUILD_DATE} à ${APP_BUILD_TIME} (UTC)`;
}

function esc(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function pickRandom(arr, count) {
  return shuffle(arr).slice(0, count);
}

const VOCAB_MODULE_COUNT = 10;

function refreshVocabModules() {
  Object.keys(LEVELS).forEach((lvl) => {
    const lesson = LEVELS[lvl].lessons.find((l) => l.vocabBank === lvl);
    if (lesson && VOCAB_BANKS[lvl]) {
      lesson.vocab = pickRandom(VOCAB_BANKS[lvl], VOCAB_MODULE_COUNT);
    }
  });
}

function makeChoices(correct, distractorPool) {
  const wrongs = [...new Set(distractorPool.filter((d) => d !== correct))];
  if (wrongs.length < 2) return null;
  const choices = shuffle([correct, ...pickRandom(wrongs, 2)]);
  return { choices, answer: choices.indexOf(correct) };
}

function genVerbQuestions(lesson, verbs) {
  const out = [];
  verbs.forEach((verb) => {
    const table = VERB_TABLES[verb];
    if (!table) return;
    pickRandom(PRONOUNS, 3).forEach(({ pronoun, key }) => {
      const built = makeChoices(table[key], Object.values(table));
      if (built) {
        out.push({
          q: `${pronoun} ___ (${verb})`,
          choices: built.choices,
          answer: built.answer,
        });
      }
    });
  });
  return out;
}

function genGroupQuestions(lesson, verbs) {
  const out = [];
  const known = shuffle(Object.keys(VERB_GROUPS));
  verbs.forEach((verb) => {
    const built = makeChoices(GROUP_LABELS[VERB_GROUPS[verb]], GROUP_LABELS);
    if (built) {
      out.push({
        q: `À quel groupe appartient le verbe « ${verb} » ?`,
        choices: built.choices,
        answer: built.answer,
      });
    }
  });
  pickRandom(known, 3).forEach((verb) => {
    const built = makeChoices(GROUP_LABELS[VERB_GROUPS[verb]], GROUP_LABELS);
    if (built) {
      out.push({
        q: `À quel groupe appartient le verbe « ${verb} » ?`,
        choices: built.choices,
        answer: built.answer,
      });
    }
  });
  return out;
}

function genVocabQuestions(lesson) {
  const out = [];
  const words = lesson.vocab;
  words.forEach((entry, idx) => {
    const others = words.filter((_, i) => i !== idx);
    const toDef = makeChoices(entry.def, others.map((o) => o.def));
    if (toDef) {
      out.push({
        q: `Que signifie « ${entry.word} » ?`,
        choices: toDef.choices,
        answer: toDef.answer,
      });
    }
    const toWord = makeChoices(entry.word, others.map((o) => o.word));
    if (toWord) {
      out.push({
        q: `Quel mot correspond à cette définition : « ${entry.def} » ?`,
        choices: toWord.choices,
        answer: toWord.answer,
      });
    }
  });
  return out;
}

function buildQuizPool(lesson) {
  const pool = [...lesson.quiz];
  if (lesson.genVerbs) pool.push(...genVerbQuestions(lesson, lesson.genVerbs));
  if (lesson.genGroups) pool.push(...genGroupQuestions(lesson, lesson.genVerbs || []));
  pool.push(...genVocabQuestions(lesson));
  const seen = new Set();
  return pool.filter((q) => {
    const key = q.q + "|" + q.choices[q.answer];
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function startQuizFromPool(lessonId, pool) {
  state.mode = lessonId === EXAM_ID ? "exam" : "lesson";
  state.quizLessonId = lessonId;
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswers = shuffle(pool).slice(0, QUIZ_LENGTH).map((q) => ({
    q,
    order: shuffle(q.choices.map((_, i) => i)),
  }));
  setView("quiz");
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function render() {
  if (state.view === "home") renderHome();
  else if (state.view === "lesson") renderLesson(state.lessonId);
  else if (state.view === "cards") renderCards();
  else if (state.view === "quiz") renderQuiz();
  else if (state.view === "exam") renderExam();
  else if (state.view === "progress") renderProgress();
}

/* ---------- Accueil : liste des leçons ---------- */

function renderHome() {
  const progress = loadProgress();
  const cards = levelLessons().map((lesson) => {
    const quiz = progress.quizzes[lesson.id];
    const best = quiz ? Math.round((quiz.bestPercent)) : null;
    const pct = best === null ? 0 : best;
    return `
      <article class="card">
        <h3>${lesson.emoji} ${esc(lesson.title)}</h3>
        <p>${lesson.vocabBank ? "10 mots tirés au sort à chaque visite" : `${lesson.quiz.length} questions fixes + questions générées`} · ${lesson.vocab.length} cartes mémoire</p>
        <div class="progressbar"><div style="width:${pct}%"></div></div>
        <div class="detail" style="color:var(--muted);font-size:.85rem;">
          ${best === null ? "Pas encore de quiz" : `Meilleur score : ${best}%`}
        </div>
        <div class="actions">
          <button class="btn primary" data-lesson="${lesson.id}">📖 Voir le cours</button>
          <button class="btn" data-cards="${lesson.id}">🃏 Cartes</button>
          <button class="btn" data-quiz="${lesson.id}">✅ Quiz</button>
        </div>
      </article>
    `;
  }).join("");

  const exam = progress.quizzes[examId()];

  app.innerHTML = `
    <section class="hero">
      <h2>Bienvenue ! 👋</h2>
      <p>Révise les bases du grec moderne niveau ${state.level} : alphabet, prononciation, vocabulaire et grammaire. Choisis une leçon, révise avec les cartes mémoire puis teste-toi avec le quiz.</p>
      <div class="flash-controls" style="justify-content:flex-start;margin-top:12px;">
        <button class="btn" id="hero-exam">🎓 Examen ${state.level}${exam ? ` — meilleur score : ${exam.bestPercent}%` : ""}</button>
      </div>
    </section>
    <div class="grid">${cards}</div>
  `;

  document.getElementById("hero-exam").addEventListener("click", () => setView("exam"));

  app.querySelectorAll("[data-lesson]").forEach((b) =>
    b.addEventListener("click", () => {
      state.lessonId = b.dataset.lesson;
      setView("lesson");
    })
  );
  app.querySelectorAll("[data-cards]").forEach((b) =>
    b.addEventListener("click", () => {
      state.cardLessonId = b.dataset.cards;
      state.cardIndex = 0;
      state.cardFlipped = false;
      setView("cards");
    })
  );
  app.querySelectorAll("[data-quiz]").forEach((b) =>
    b.addEventListener("click", () => startQuiz(b.dataset.quiz))
  );
}

/* ---------- Leçon ---------- */

function renderLesson(id) {
  const lesson = getLesson(id);
  if (!lesson) return setView("home");

  const sections = lesson.theory
    .map((s) => {
      let content = "";
      if (s.body) content += `<p>${esc(s.body)}</p>`;
      if (s.list) content += `<ul>${s.list.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
      return `<h3>${esc(s.title)}</h3>${content}`;
    })
    .join("");

  app.innerHTML = `
    <button class="backlink" id="back">← Retour aux cours</button>
    <section class="panel">
      <h2>${lesson.emoji} ${esc(lesson.title)}</h2>
      ${sections}
    </section>
    <div class="flash-controls">
      <button class="btn primary" id="to-cards">🃏 Réviser avec les cartes</button>
      <button class="btn" id="to-quiz">✅ Faire le quiz</button>
    </div>
  `;

  document.getElementById("back").addEventListener("click", () => setView("home"));
  document.getElementById("to-cards").addEventListener("click", () => {
    state.cardLessonId = id;
    state.cardIndex = 0;
    state.cardFlipped = false;
    setView("cards");
  });
  document.getElementById("to-quiz").addEventListener("click", () => startQuiz(id));
}

/* ---------- Cartes mémoire ---------- */

function renderCards() {
  const lesson = getLesson(state.cardLessonId) || levelLessons()[0];
  const idx = Math.min(state.cardIndex, lesson.vocab.length - 1);
  const card = lesson.vocab[idx];

  app.innerHTML = `
    <button class="backlink" id="back">← Retour aux cours</button>
    <section class="panel">
      <h2>${lesson.emoji} Cartes mémoire — ${esc(lesson.title)}</h2>
      <div class="plain" style="color:var(--muted);font-size:.9rem;margin-bottom:6px;">
        Carte ${idx + 1} / ${lesson.vocab.length} · clique sur la carte pour voir la définition
      </div>
      <div class="progressbar" style="margin-bottom:8px;">
        <div style="width:${((idx + 1) / lesson.vocab.length) * 100}%"></div>
      </div>
      <div class="flashcard-scene">
        <div class="flashcard ${state.cardFlipped ? "flipped" : ""}" id="fc">
          <div class="face">
            <div class="word">${esc(card.word)}</div>
            <div class="hint">Clique pour retourner ↻</div>
          </div>
          <div class="face back">
            <div class="word" style="font-size:1.15rem;">${esc(card.def)}</div>
            <div class="hint">Encore un clic pour revenir ↻</div>
          </div>
        </div>
      </div>
      <div class="flash-controls">
        <button class="btn" id="prev">← Précédente</button>
        <button class="btn primary" id="next">Suivante →</button>
      </div>
    </section>
  `;

  const progress = loadProgress();
  if (!progress.cardsSeen[lesson.id]) progress.cardsSeen[lesson.id] = 0;
  if (idx + 1 > progress.cardsSeen[lesson.id]) {
    progress.cardsSeen[lesson.id] = idx + 1;
    saveProgress(progress);
  }

  document.getElementById("fc").addEventListener("click", () => {
    state.cardFlipped = !state.cardFlipped;
    document.getElementById("fc").classList.toggle("flipped", state.cardFlipped);
  });
  document.getElementById("back").addEventListener("click", () => setView("home"));
  document.getElementById("prev").addEventListener("click", () => {
    if (state.cardIndex > 0) {
      state.cardIndex--;
      state.cardFlipped = false;
      render();
    }
  });
  document.getElementById("next").addEventListener("click", () => {
    if (state.cardIndex < lesson.vocab.length - 1) {
      state.cardIndex++;
      state.cardFlipped = false;
      render();
    } else {
      startQuiz(lesson.id);
    }
  });
}

/* ---------- Examen final ---------- */

function getExamProgress() {
  return loadProgress().quizzes[examId()] || null;
}

function renderExam() {
  const exam = getExamProgress();
  const totalQuestions = levelLessons().reduce((n, l) => n + l.quiz.length, 0);

  app.innerHTML = `
    <section class="panel" style="text-align:center;">
      <h2>🎓 Examen final ${state.level}</h2>
      <p class="exam-badge">🏅</p>
      <p style="line-height:1.6;">
        ${EXAM_QUESTION_COUNT} questions tirées au sort dans les ${levelLessons().length} leçons
        (${totalQuestions} questions au total).<br />
        À chaque question, le thème est indiqué pour t'aider à te repérer.
      </p>
      ${exam ? `
        <p class="result-status" style="color:var(--muted);margin-bottom:8px;">
          Ton meilleur score : <strong>${exam.bestPercent}%</strong>
          · ${exam.attempts} tentative${exam.attempts > 1 ? "s" : ""}
        </p>` : `
        <p style="color:var(--muted);margin-bottom:8px;">Tu n'as pas encore tenté l'examen. Bonne chance !</p>`}
      <div class="flash-controls">
        <button class="btn primary" id="start-exam">Commencer l'examen</button>
      </div>
    </section>
  `;

  document.getElementById("start-exam").addEventListener("click", startExam);
}

function startExam() {
  let pool = [];
  levelLessons().forEach((lesson) => {
    buildQuizPool(lesson).forEach((q) => {
      pool.push({
        q,
        lessonTitle: lesson.title,
        lessonEmoji: lesson.emoji,
      });
    });
  });
  pool = shuffle(pool).slice(0, Math.min(EXAM_QUESTION_COUNT, pool.length));
  state.mode = "exam";
  state.quizLessonId = EXAM_ID;
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswers = pool.map((item, idx) => ({
    q: item.q,
    lessonTitle: item.lessonTitle,
    lessonEmoji: item.lessonEmoji,
    examOrder: idx + 1,
    order: shuffle(item.q.choices.map((_, i) => i)),
  }));
  setView("quiz");
}

function renderExamResult() {
  const total = state.quizAnswers.length;
  const pct = Math.round((state.quizScore / total) * 100);

  const msg =
    pct === 100 ? `Sans faute ! Tu es un(e) champion(ne) du grec ${state.level}. 🏆`
    : pct >= 80 ? `Excellent ! Niveau ${state.level} solidement acquis. 🌟`
    : pct >= 60 ? "C'est bien, encore quelques révisions et ce sera parfait. 💪"
    : "Reprends les leçons qui posent problème, puis retente ta chance !";

  const progress = loadProgress();
  const prev = progress.quizzes[examId()];
  progress.quizzes[examId()] = {
    bestPercent: prev ? Math.max(prev.bestPercent, pct) : pct,
    lastPercent: pct,
    attempts: (prev && prev.attempts ? prev.attempts : 0) + 1,
  };
  saveProgress(progress);

  app.innerHTML = `
    <button class="backlink" id="back">← Retour à l'examen</button>
    <section class="panel" style="text-align:center;">
      <h2>🎓 Résultat de l'examen</h2>
      <p class="exam-badge">${pct >= 80 ? "🏅" : pct >= 60 ? "👍" : "📚"}</p>
      <p class="result-score">${state.quizScore} / ${total} (${pct}%)</p>
      <p class="result-msg">${msg}</p>
      <div class="flash-controls">
        <button class="btn" id="retry">↻ Nouvel examen</button>
        <button class="btn primary" id="home">Progression</button>
      </div>
    </section>
  `;

  document.getElementById("back").addEventListener("click", () => setView("exam"));
  document.getElementById("retry").addEventListener("click", () => startExam());
  document.getElementById("home").addEventListener("click", () => setView("progress"));
}

/* ---------- Quiz ---------- */

function startQuiz(lessonId) {
  const lesson = getLesson(lessonId);
  startQuizFromPool(lessonId, buildQuizPool(lesson));
}

function renderQuiz() {
  const item = state.quizAnswers[state.quizIndex];
  if (!item) return renderQuizResult();
  const isExam = state.mode === "exam";
  const lesson = getLesson(state.quizLessonId);
  const title = isExam
    ? `🎓 Examen final — question ${item.examOrder} / ${state.quizAnswers.length}`
    : `✅ Quiz — ${lesson.emoji} ${esc(lesson.title)}`;

  app.innerHTML = `
    <button class="backlink" id="quit">← ${isExam ? "Abandonner l'examen" : "Quitter le quiz"}</button>
    <section class="panel">
      <h2>${title}</h2>
      ${isExam ? `<span class="theme-tag">${item.lessonEmoji} ${esc(item.lessonTitle)}</span>` : ""}
      <div class="quiz-header">
        <span>Question ${state.quizIndex + 1} / ${state.quizAnswers.length}</span>
        <span>Score : ${state.quizScore}</span>
      </div>
      <div class="progressbar" style="margin-bottom:14px;">
        <div style="width:${(state.quizIndex / state.quizAnswers.length) * 100}%"></div>
      </div>
      <p class="quiz-question">${esc(item.q.q)}</p>
      ${item.order
        .map(
          (origIdx, i) =>
            `<button class="choice" data-orig="${origIdx}" data-i="${i}">${esc(item.q.choices[origIdx])}</button>`
        )
        .join("")}
      <div id="feedback"></div>
    </section>
  `;

  document.getElementById("quit").addEventListener("click", () => setView(isExam ? "exam" : "home"));
  app.querySelectorAll(".choice").forEach((btn) =>
    btn.addEventListener("click", () => answerQuiz(btn))
  );
}

function answerQuiz(btn) {
  const item = state.quizAnswers[state.quizIndex];
  const chosen = parseInt(btn.dataset.orig, 10);
  const correct = chosen === item.q.answer;
  if (correct) state.quizScore++;
  state.quizAnswers[state.quizIndex].answered = true;

  app.querySelectorAll(".choice").forEach((b) => {
    b.disabled = true;
    const orig = parseInt(b.dataset.orig, 10);
    if (orig === item.q.answer) b.classList.add("correct");
    else if (b === btn) b.classList.add("wrong");
  });

  const feedback = document.getElementById("feedback");
  feedback.innerHTML = `
    <div style="margin-top:12px;text-align:right;">
      <button class="btn primary" id="next-q">Question suivante →</button>
    </div>
  `;
  document.getElementById("next-q").addEventListener("click", () => {
    state.quizIndex++;
    render();
  });
}

function renderQuizResult() {
  if (state.mode === "exam") return renderExamResult();

  const lesson = getLesson(state.quizLessonId);
  const total = state.quizAnswers.length;
  const pct = Math.round((state.quizScore / total) * 100);

  const msg =
    pct === 100 ? `Parfait ! Niveau ${state.level} maîtrisé sur ce thème. 🎉`
    : pct >= 70 ? "Très bien, tu y es presque !"
    : pct >= 50 ? "Pas mal, continue à réviser. 💪"
    : "Relis le cours puis retente le quiz !";

  const progress = loadProgress();
  const prev = progress.quizzes[lesson.id];
  const bestPercent = prev ? Math.max(prev.bestPercent, pct) : pct;
  progress.quizzes[lesson.id] = { bestPercent, lastPercent: pct };
  saveProgress(progress);

  app.innerHTML = `
    <button class="backlink" id="back">← Retour aux cours</button>
    <section class="panel" style="text-align:center;">
      <h2>${lesson.emoji} Résultat du quiz</h2>
      <p class="result-score">${state.quizScore} / ${total} (${pct}%)</p>
      <p class="result-msg">${msg}</p>
      <div class="flash-controls">
        <button class="btn" id="retry">↻ Recommencer</button>
        <button class="btn primary" id="home">Retour aux cours</button>
      </div>
    </section>
  `;

  document.getElementById("back").addEventListener("click", () => setView("home"));
  document.getElementById("retry").addEventListener("click", () => startQuiz(lesson.id));
  document.getElementById("home").addEventListener("click", () => setView("home"));
}

/* ---------- Progression ---------- */

function renderProgress() {
  const progress = loadProgress();
  const exam = progress.quizzes[examId()];

  const examRow = `
    <div class="stat">
      <div class="name">🎓 Examen final ${state.level}</div>
      <div class="progressbar"><div style="width:${exam ? exam.bestPercent : 0}%"></div></div>
      <div class="detail">
        ${exam
          ? `Meilleur score : ${exam.bestPercent}%
             · ${exam.attempts} tentative${exam.attempts > 1 ? "s" : ""}`
          : "Pas encore tenté"}
      </div>
      <div class="actions"><button class="btn" id="progress-exam">🎓 Passer l'examen</button></div>
    </div>
  `;

  const rows = levelLessons().map((lesson) => {
    const quiz = progress.quizzes[lesson.id];
    const seen = progress.cardsSeen[lesson.id] || 0;
    return `
      <div class="stat">
        <div class="name">${lesson.emoji} ${esc(lesson.title)}</div>
        <div class="progressbar"><div style="width:${quiz ? quiz.bestPercent : 0}%"></div></div>
        <div class="detail">
          Cartes vues : ${seen} / ${lesson.vocab.length}
          · Meilleur quiz : ${quiz ? quiz.bestPercent + "%" : "—"}
        </div>
      </div>
    `;
  }).join("");

  const totalQuizzes = Object.keys(progress.quizzes).length;

  app.innerHTML = `
    <section class="panel">
      <h2>📈 Ta progression</h2>
      <p style="color:var(--muted);">
        ${totalQuizzes === 0
          ? "Fais ton premier quiz pour suivre tes progrès."
          : `Tu as tenté ${totalQuizzes} quiz (leçons et examens) sur ${levelLessons().length + 1}. Continue !`}
      </p>
      <div class="stat-grid">${examRow}${rows}</div>
    </section>
  `;

  document.getElementById("progress-exam").addEventListener("click", () => setView("exam"));
}

refreshVocabModules();
initVersion();
initLevelSelect();
render();
