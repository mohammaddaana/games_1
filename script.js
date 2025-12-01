// ====== LANGUAGE SYSTEM ======
let currentLanguage = "en";

const texts = {
  en: {
    startTitle: "Welcome to Kraken Competitions",
    startSubtitle: "Choose a category and test your knowledge in a fun ocean quiz!",
    startBtn: "Start Game ▶",
    instructionsBtn: "How to Play ℹ",

    instrTitle: "How to Play",
    instrItems: [
      "Choose one of the four categories: Geography, Countries, IT, or General Knowledge.",
      "Each question appears in the center with 4 answer choices.",
      "Answer by clicking on one of the choices (no typing).",
      "You have 10 seconds for each question; when time ends, the question is skipped.",
      "You earn coins 🪙 for every correct answer. Your coins are shown at the top.",
      "Sounds play when your answer is correct, wrong, or when time is up."
    ],
    instrBack: "← Back",
    instrGoCats: "Go to Categories ▶",

    catTitle: "Choose a Category",
    catSubtitle: "Select a category to start the quiz.",
    catGeo: "🌍 Geography Questions",
    catCountries: "🏳️ Countries Questions",
    catIT: "💻 IT & Technology",
    catGeneral: "❓ General Knowledge",
    catHint: "Each correct answer gives you 1 coin. You have 10 seconds for each question.",
    catBack: "← Back to Home",

    backBtn: "← Categories",
    labelCoins: "Coins:",
    labelTime: "Time:",
    labelCategory: "Category:",
    labelQuestion: "Question ",

    feedbackCorrect: "Correct! +1 coin 🪙",
    feedbackWrong: "Wrong answer.",
    feedbackTimeUp: "Time is up! Moving to the next question.",

    resultTitle: "Result",
    resultLabelCategory: "Category: ",
    resultLabelTotal: "Total questions: ",
    resultLabelCorrect: "Correct answers: ",
    resultLabelCoins: "Total coins: ",
    resultLabelAccuracy: "Accuracy: ",
    resultAgain: "Choose Another Category ▶",
    resultHome: "Back to Home ⌂"
  },
  ar: {
    startTitle: "مرحبًا بكم في مسابقات Kraken",
    startSubtitle: "اختر قسمًا وابدأ تحدي الأسئلة في عالم المحيط!",
    startBtn: "ابدأ اللعب ▶",
    instructionsBtn: "طريقة اللعب ℹ",

    instrTitle: "طريقة اللعب",
    instrItems: [
      "اختر أحد الأقسام الأربعة: جغرافيا، دول، IT، أو معلومات عامة.",
      "يظهر كل سؤال في منتصف الشاشة ومعه ٤ خيارات للإجابة.",
      "تجاوب بكبسة زر على أحد الخيارات (بدون كتابة).",
      "عندك 10 ثوانٍ لكل سؤال، وبعدها يتم تجاوز السؤال تلقائيًا.",
      "تحصل على عملات 🪙 عند كل إجابة صحيحة، ورصيدك يظهر أعلى الشاشة.",
      "تسمع صوتًا عند الإجابة الصحيحة أو الخطأ أو عند انتهاء الوقت."
    ],
    instrBack: "← رجوع",
    instrGoCats: "اذهب للأقسام ▶",

    catTitle: "اختر قسمًا",
    catSubtitle: "اختر قسم الأسئلة الذي تريد أن تبدأ به.",
    catGeo: "🌍 أسئلة جغرافيا",
    catCountries: "🏳️ أسئلة دول",
    catIT: "💻 أسئلة IT وتكنولوجيا",
    catGeneral: "❓ أسئلة عامة",
    catHint: "تحصل على 1 عملة لكل إجابة صحيحة. لديك 10 ثوانٍ لكل سؤال.",
    catBack: "← رجوع للصفحة الرئيسية",

    backBtn: "← الأقسام",
    labelCoins: "العملات:",
    labelTime: "الوقت:",
    labelCategory: "القسم:",
    labelQuestion: "السؤال ",

    feedbackCorrect: "إجابة صحيحة! +1 عملة 🪙",
    feedbackWrong: "إجابة خاطئة.",
    feedbackTimeUp: "انتهى الوقت! ننتقل للسؤال التالي.",

    resultTitle: "النتيجة",
    resultLabelCategory: "القسم: ",
    resultLabelTotal: "عدد الأسئلة: ",
    resultLabelCorrect: "الإجابات الصحيحة: ",
    resultLabelCoins: "مجموع العملات: ",
    resultLabelAccuracy: "نسبة الدقة: ",
    resultAgain: "اختيار قسم آخر ▶",
    resultHome: "رجوع للبداية ⌂"
  }
};

function applyLanguage() {
  const t = texts[currentLanguage];
  document.body.dir = currentLanguage === "ar" ? "rtl" : "ltr";

  // Start screen
  document.getElementById("start-title").textContent = t.startTitle;
  document.getElementById("start-subtitle").textContent = t.startSubtitle;
  document.getElementById("start-btn").textContent = t.startBtn;
  document.getElementById("instructions-btn").textContent = t.instructionsBtn;

  // Instructions screen
  document.getElementById("instr-title").textContent = t.instrTitle;
  const ul = document.getElementById("instr-list");
  ul.innerHTML = "";
  t.instrItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  document.getElementById("instructions-back-btn").textContent = t.instrBack;
  document.getElementById("go-categories-btn").textContent = t.instrGoCats;

  // Categories
  document.getElementById("cat-title").textContent = t.catTitle;
  document.getElementById("cat-subtitle").textContent = t.catSubtitle;
  document.getElementById("btn-cat-geo").textContent = t.catGeo;
  document.getElementById("btn-cat-countries").textContent = t.catCountries;
  document.getElementById("btn-cat-it").textContent = t.catIT;
  document.getElementById("btn-cat-general").textContent = t.catGeneral;
  document.getElementById("cat-hint").textContent = t.catHint;
  document.getElementById("category-back-btn").textContent = t.catBack;

  // Quiz labels
  document.getElementById("back-btn").textContent = t.backBtn;
  document.getElementById("label-coins").textContent = t.labelCoins;
  document.getElementById("label-time").textContent = t.labelTime;
  document.getElementById("label-category").textContent = t.labelCategory;
  document.getElementById("label-question").textContent = t.labelQuestion;

  // Result screen
  document.getElementById("result-title").textContent = t.resultTitle;
  document.getElementById("result-label-category").textContent =
    t.resultLabelCategory;
  document.getElementById("result-label-total").textContent =
    t.resultLabelTotal;
  document.getElementById("result-label-correct").textContent =
    t.resultLabelCorrect;
  document.getElementById("result-label-coins").textContent =
    t.resultLabelCoins;
  document.getElementById("result-label-accuracy").textContent =
    t.resultLabelAccuracy;
  document.getElementById("result-again-btn").textContent = t.resultAgain;
  document.getElementById("result-home-btn").textContent = t.resultHome;

  if (
    currentQuestions.length > 0 &&
    document.getElementById("quiz-screen").classList.contains("active")
  ) {
    renderCurrentQuestionOnly();
  }
}

// ====== QUESTIONS (20 total: 5 لكل قسم) ======
const questions = {
  geography: [
    {
      text: {
        en: "What is the largest ocean on Earth?",
        ar: "ما هو أكبر محيط على سطح الأرض؟"
      },
      choices: {
        en: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        ar: ["المحيط الأطلسي", "المحيط الهندي", "المحيط الهادئ", "المحيط المتجمد الشمالي"]
      },
      answer: 2
    },
    {
      text: {
        en: "Which river is the longest in the world?",
        ar: "ما هو أطول نهر في العالم؟"
      },
      choices: {
        en: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        ar: ["نهر الأمازون", "نهر النيل", "نهر اليانغتسي", "نهر الميسيسيبي"]
      },
      answer: 1
    },
    {
      text: {
        en: "Mount Everest is part of which mountain range?",
        ar: "جبل إيفرست جزء من أي سلسلة جبلية؟"
      },
      choices: {
        en: ["Andes", "Alps", "Himalayas", "Rockies"],
        ar: ["جبال الأنديز", "جبال الألب", "جبال الهيمالايا", "جبال الروكي"]
      },
      answer: 2
    },
    {
      text: {
        en: "What is the capital city of Egypt?",
        ar: "ما هي عاصمة مصر؟"
      },
      choices: {
        en: ["Cairo", "Alexandria", "Giza", "Luxor"],
        ar: ["القاهرة", "الإسكندرية", "الجيزة", "الأقصر"]
      },
      answer: 0
    },
    {
      text: {
        en: "Which continent is known as the ‘Dark Continent’?",
        ar: "أي قارة تُعرف باسم \"القارة السمراء\"؟"
      },
      choices: {
        en: ["Asia", "Africa", "Europe", "Australia"],
        ar: ["آسيا", "أفريقيا", "أوروبا", "أستراليا"]
      },
      answer: 1
    }
  ],
  countries: [
    {
      text: {
        en: "Which country is famous for the Eiffel Tower?",
        ar: "أي دولة تشتهر ببرج إيفل؟"
      },
      choices: {
        en: ["Italy", "France", "Germany", "Spain"],
        ar: ["إيطاليا", "فرنسا", "ألمانيا", "إسبانيا"]
      },
      answer: 1
    },
    {
      text: {
        en: "Which country uses the yen as its currency?",
        ar: "أي دولة تستخدم الين عملة رسمية لها؟"
      },
      choices: {
        en: ["China", "South Korea", "Japan", "Thailand"],
        ar: ["الصين", "كوريا الجنوبية", "اليابان", "تايلاند"]
      },
      answer: 2
    },
    {
      text: {
        en: "Which country does the city of Sydney belong to?",
        ar: "إلى أي دولة تتبع مدينة سيدني؟"
      },
      choices: {
        en: ["New Zealand", "Canada", "Australia", "United Kingdom"],
        ar: ["نيوزيلندا", "كندا", "أستراليا", "المملكة المتحدة"]
      },
      answer: 2
    },
    {
      text: {
        en: "Which country is known as the Land of the Pharaohs?",
        ar: "أي دولة تُعرف بأرض الفراعنة؟"
      },
      choices: {
        en: ["Morocco", "Egypt", "Sudan", "Jordan"],
        ar: ["المغرب", "مصر", "السودان", "الأردن"]
      },
      answer: 1
    },
    {
      text: {
        en: "Which country’s flag has a red maple leaf?",
        ar: "أي دولة يحمل علمها ورقة قيقب حمراء؟"
      },
      choices: {
        en: ["Denmark", "Canada", "Austria", "Switzerland"],
        ar: ["الدنمارك", "كندا", "النمسا", "سويسرا"]
      },
      answer: 1
    }
  ],
  it: [
    {
      text: {
        en: "Which language structures the content of web pages?",
        ar: "أي لغة تُستخدم لبناء هيكل صفحات الويب؟"
      },
      choices: {
        en: ["CSS", "HTML", "Java", "Python"],
        ar: ["CSS", "HTML", "جافا", "بايثون"]
      },
      answer: 1
    },
    {
      text: {
        en: "Which language is mainly used to style web pages?",
        ar: "أي لغة تُستخدم لإضافة التصميم والألوان لصفحات الويب؟"
      },
      choices: {
        en: ["SQL", "C++", "CSS", "PHP"],
        ar: ["SQL", "سي بلس بلس", "CSS", "PHP"]
      },
      answer: 2
    },
    {
      text: {
        en: "Which language runs in the browser to add interactivity?",
        ar: "أي لغة تعمل داخل المتصفح لإضافة تفاعل للموقع؟"
      },
      choices: {
        en: ["JavaScript", "PHP", "C#", "Go"],
        ar: ["جافاسكربت", "بي إتش بي", "سي شارب", "جو"]
      },
      answer: 0
    },
    {
      text: {
        en: "What does CSS stand for?",
        ar: "ماذا تعني اختصار CSS؟"
      },
      choices: {
        en: [
          "Computer Style Sheet",
          "Cascading Style Sheets",
          "Creative Style System",
          "Code Style Sheet"
        ],
        ar: [
          "Computer Style Sheet",
          "Cascading Style Sheets",
          "Creative Style System",
          "Code Style Sheet"
        ]
      },
      answer: 1
    },
    {
      text: {
        en: "Which of the following is a database language?",
        ar: "أي من التالي لغة قواعد بيانات؟"
      },
      choices: {
        en: ["HTML", "CSS", "SQL", "JSON"],
        ar: ["HTML", "CSS", "SQL", "JSON"]
      },
      answer: 2
    }
  ],
  general: [
    {
      text: {
        en: "How many planets are in our Solar System?",
        ar: "كم عدد الكواكب في مجموعتنا الشمسية؟"
      },
      choices: {
        en: ["7", "8", "9", "10"],
        ar: ["7", "8", "9", "10"]
      },
      answer: 1
    },
    {
      text: {
        en: "Which gas do humans need to breathe?",
        ar: "أي غاز يحتاجه الإنسان للتنفس؟"
      },
      choices: {
        en: ["Oxygen", "Helium", "Nitrogen", "Carbon dioxide"],
        ar: ["الأكسجين", "الهيليوم", "النيتروجين", "ثاني أكسيد الكربون"]
      },
      answer: 0
    },
    {
      text: {
        en: "Which animal is known as the ‘King of the Jungle’?",
        ar: "أي حيوان يُعرف بلقب ملك الغابة؟"
      },
      choices: {
        en: ["Tiger", "Lion", "Elephant", "Cheetah"],
        ar: ["النمر", "الأسد", "الفيل", "الفهد"]
      },
      answer: 1
    },
    {
      text: {
        en: "What do bees produce?",
        ar: "ماذا تنتج النحلات؟"
      },
      choices: {
        en: ["Milk", "Oil", "Honey", "Sugar"],
        ar: ["حليب", "زيت", "عسل", "سكر"]
      },
      answer: 2
    },
    {
      text: {
        en: "Which shape has 3 sides?",
        ar: "أي شكل له ثلاثة أضلاع؟"
      },
      choices: {
        en: ["Square", "Triangle", "Rectangle", "Circle"],
        ar: ["مربع", "مثلث", "مستطيل", "دائرة"]
      },
      answer: 1
    }
  ]
};

// ====== GAME STATE ======
let currentCategory = null;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timerDuration = 10;
let timeLeft = timerDuration;
let timerId = null;
let canAnswer = true;
let correctCount = 0;

// ====== DOM ELEMENTS ======
const startScreen = document.getElementById("start-screen");
const instructionsScreen = document.getElementById("instructions-screen");
const categoryScreen = document.getElementById("category-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const instructionsBtn = document.getElementById("instructions-btn");
const instructionsBackBtn = document.getElementById("instructions-back-btn");
const goCategoriesBtn = document.getElementById("go-categories-btn");
const categoryBackBtn = document.getElementById("category-back-btn");

const categoryButtons = document.querySelectorAll(".category-btn");
const backBtn = document.getElementById("back-btn");

const categoryNameSpan = document.getElementById("category-name");
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices");
const scoreSpan = document.getElementById("score");
const timerSpan = document.getElementById("timer");
const questionNumberSpan = document.getElementById("question-number");
const totalQuestionsSpan = document.getElementById("total-questions");
const feedbackDiv = document.getElementById("feedback");

const resultCategorySpan = document.getElementById("result-category");
const resultTotalSpan = document.getElementById("result-total");
const resultCorrectSpan = document.getElementById("result-correct");
const resultCoinsSpan = document.getElementById("result-coins");
const resultAccuracySpan = document.getElementById("result-accuracy");

// Sounds
const soundCorrect = document.getElementById("sound-correct");
const soundWrong   = document.getElementById("sound-wrong");
const soundTimeup  = document.getElementById("sound-timeup");
const bgMusic      = document.getElementById("bg-music");

// Audio UI + Settings
const muteBtn        = document.getElementById("mute-btn");
const volumeSlider   = document.getElementById("volume-slider");
const settingsToggle = document.getElementById("settings-toggle");
const settingsPanel  = document.getElementById("settings-panel");

// Master mute state
let isMuted = false;

// ====== AUDIO CONTROL ======
function updateMuteIcon() {
  if (!muteBtn) return;
  muteBtn.textContent = isMuted ? "🔇" : "🔊";
}

function setMasterMute(muted) {
  isMuted = muted;
  [bgMusic, soundCorrect, soundWrong, soundTimeup].forEach((audioEl) => {
    if (audioEl) audioEl.muted = muted;
  });
  updateMuteIcon();
}

function playBgMusic() {
  if (!bgMusic || isMuted) return;
  const v = volumeSlider ? parseFloat(volumeSlider.value) || 0.4 : 0.4;
  bgMusic.volume = v;
  if (bgMusic.paused) {
    bgMusic.play().catch(() => {});
  }
}

function autoPlayBgMusic() {
  if (!bgMusic) return;
  const v = volumeSlider ? parseFloat(volumeSlider.value) || 0.4 : 0.4;
  bgMusic.volume = v;

  bgMusic.play().then(() => {
    updateMuteIcon();
  }).catch(() => {
    const resume = () => {
      playBgMusic();
      document.removeEventListener("click", resume);
      document.removeEventListener("keydown", resume);
    };
    document.addEventListener("click", resume);
    document.addEventListener("keydown", resume);
  });
}

function playSfx(audioEl) {
  if (!audioEl || isMuted) return;
  audioEl.currentTime = 0;
  audioEl.play().catch(() => {});
}

// ====== HELPERS ======
function showScreen(screen) {
  [startScreen, instructionsScreen, categoryScreen, quizScreen, resultScreen].forEach(
    (s) => s.classList.remove("active")
  );
  screen.classList.add("active");
}

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function toCategoryName(key) {
  if (currentLanguage === "ar") {
    switch (key) {
      case "geography": return "جغرافيا";
      case "countries": return "دول";
      case "it":        return "IT وتكنولوجيا";
      case "general":   return "معلومات عامة";
      default:          return key;
    }
  } else {
    switch (key) {
      case "geography": return "Geography";
      case "countries": return "Countries";
      case "it":        return "IT & Technology";
      case "general":   return "General Knowledge";
      default:          return key;
    }
  }
}

// ====== GAME FLOW ======
function startCategory(categoryKey) {
  currentCategory = categoryKey;
  currentQuestions = shuffleArray(questions[categoryKey]);
  currentIndex = 0;
  correctCount = 0;
  feedbackDiv.textContent = "";
  totalQuestionsSpan.textContent = currentQuestions.length.toString();
  categoryNameSpan.textContent = toCategoryName(categoryKey);

  showScreen(quizScreen);
  loadQuestion();
}

function renderCurrentQuestionOnly() {
  if (currentIndex >= currentQuestions.length) return;
  const q = currentQuestions[currentIndex];
  questionText.textContent = q.text[currentLanguage];

  choicesContainer.innerHTML = "";
  q.choices[currentLanguage].forEach((choiceText, index) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choiceText;
    btn.dataset.index = index;
    btn.addEventListener("click", () => handleChoiceClick(index));
    choicesContainer.appendChild(btn);
  });
}

function loadQuestion() {
  if (timerId) clearInterval(timerId);

  if (currentIndex >= currentQuestions.length) {
    endCategory();
    return;
  }

  const q = currentQuestions[currentIndex];

  canAnswer = true;
  timeLeft = timerDuration;
  timerSpan.textContent = timeLeft.toString();
  questionNumberSpan.textContent = (currentIndex + 1).toString();
  feedbackDiv.textContent = "";

  questionText.textContent = q.text[currentLanguage];

  choicesContainer.innerHTML = "";
  q.choices[currentLanguage].forEach((choiceText, index) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choiceText;
    btn.dataset.index = index;
    btn.addEventListener("click", () => handleChoiceClick(index));
    choicesContainer.appendChild(btn);
  });

  const t = texts[currentLanguage];

  timerId = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = timeLeft.toString();
    if (timeLeft <= 0) {
      clearInterval(timerId);
      canAnswer = false;
      showCorrectAnswer(true, t);
      // صوت انتهاء العد التنازلي
      playSfx(soundTimeup);
      setTimeout(() => {
        currentIndex++;
        loadQuestion();
      }, 900);
    }
  }, 1000);
}

function handleChoiceClick(choiceIndex) {
  if (!canAnswer) return;
  canAnswer = false;

  clearInterval(timerId);

  const q = currentQuestions[currentIndex];
  const choiceButtons = document.querySelectorAll(".choice-btn");
  const t = texts[currentLanguage];

  choiceButtons.forEach((btn) => {
    const idx = Number(btn.dataset.index);
    if (idx === q.answer) {
      btn.classList.add("correct");
    }
    if (idx === choiceIndex && choiceIndex !== q.answer) {
      btn.classList.add("wrong");
    }
    btn.disabled = true;
  });

  if (choiceIndex === q.answer) {
    score++;
    correctCount++;
    scoreSpan.textContent = score.toString();
    feedbackDiv.textContent = t.feedbackCorrect;
    playSfx(soundCorrect);
  } else {
    feedbackDiv.textContent = t.feedbackWrong;
    playSfx(soundWrong);
  }

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 900);
}

function showCorrectAnswer(fromTimeout, t) {
  const q = currentQuestions[currentIndex];
  const choiceButtons = document.querySelectorAll(".choice-btn");
  choiceButtons.forEach((btn) => {
    const idx = Number(btn.dataset.index);
    if (idx === q.answer) {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });
  if (fromTimeout) {
    feedbackDiv.textContent = t.feedbackTimeUp;
  }
}

function endCategory() {
  const total = currentQuestions.length;
  const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  resultCategorySpan.textContent = toCategoryName(currentCategory);
  resultTotalSpan.textContent = total.toString();
  resultCorrectSpan.textContent = correctCount.toString();
  resultCoinsSpan.textContent = score.toString();
  resultAccuracySpan.textContent = accuracy.toString();

  showScreen(resultScreen);
}

// ====== EVENT LISTENERS ======

// Language buttons
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    currentLanguage = lang;
    document
      .querySelectorAll(".lang-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    applyLanguage();
  });
});

// Settings toggle
if (settingsToggle && settingsPanel) {
  settingsToggle.addEventListener("click", () => {
    settingsPanel.classList.toggle("open");
  });

  // إغلاق القائمة لما نكبس براها
  document.addEventListener("click", (e) => {
    const clickedInside =
      settingsPanel.contains(e.target) || settingsToggle.contains(e.target);
    if (!clickedInside) {
      settingsPanel.classList.remove("open");
    }
  });
}

// Audio controls
if (muteBtn) {
  muteBtn.addEventListener("click", () => {
    setMasterMute(!isMuted);
  });
}

if (volumeSlider && bgMusic) {
  volumeSlider.addEventListener("input", () => {
    const v = parseFloat(volumeSlider.value);
    bgMusic.volume = v;
    if (v > 0 && isMuted) {
      setMasterMute(false);
    }
    if (v === 0 && !isMuted) {
      setMasterMute(true);
    }
  });
}

// Start screen
startBtn.addEventListener("click", () => {
  playBgMusic();
  showScreen(categoryScreen);
});

instructionsBtn.addEventListener("click", () => {
  showScreen(instructionsScreen);
});

// Instructions screen
instructionsBackBtn.addEventListener("click", () => {
  showScreen(startScreen);
});

goCategoriesBtn.addEventListener("click", () => {
  showScreen(categoryScreen);
});

// Category screen
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const categoryKey = btn.dataset.category;
    startCategory(categoryKey);
  });
});

categoryBackBtn.addEventListener("click", () => {
  showScreen(startScreen);
});

// Quiz screen back
backBtn.addEventListener("click", () => {
  if (timerId) clearInterval(timerId);
  showScreen(categoryScreen);
});

// Result screen buttons
document.getElementById("result-again-btn").addEventListener("click", () => {
  showScreen(categoryScreen);
});

document.getElementById("result-home-btn").addEventListener("click", () => {
  showScreen(startScreen);
});

// ====== INIT ======
scoreSpan.textContent = "0";
timerSpan.textContent = timerDuration.toString();
applyLanguage();
showScreen(startScreen);
updateMuteIcon();
autoPlayBgMusic();
