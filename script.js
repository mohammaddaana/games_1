// ====== نظام اللغة (Language System) ======
let currentLanguage = "en";

// جميع النصوص المستخدمة في الموقع (عربي / إنجليزي)
const texts = {
  en: {
    startTitle: "Welcome to Kraken Competitions",
    startSubtitle: "Choose a category and test your knowledge in a fun ocean quiz!",
    startBtn: "Start Game ▶",
    instructionsBtn: "How to Play ℹ",
    catGeneral: "❓ General Knowledge",
    catArduino: "🤖 Arduino & Electronics", // <--- ضيف هذا السطر
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
    catGeneral: "❓ أسئلة عامة",
    catArduino: "🤖 أردوينو وإلكترونيات", // <--- ضيف هذا السطر
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

// دالة لتطبيق اللغة المختارة على الصفحة
function applyLanguage() {
  const t = texts[currentLanguage];
  // تغيير اتجاه الصفحة (RTL للعربي)
  document.body.dir = currentLanguage === "ar" ? "rtl" : "ltr";

  // شاشة البداية
  document.getElementById("start-title").textContent = t.startTitle;
  document.getElementById("start-subtitle").textContent = t.startSubtitle;
  document.getElementById("start-btn").textContent = t.startBtn;
  document.getElementById("instructions-btn").textContent = t.instructionsBtn;
  document.getElementById("btn-cat-general").textContent = t.catGeneral;
  document.getElementById("btn-cat-arduino").textContent = t.catArduino; // <--- ضيف هذا السطر
  // شاشة التعليمات
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

  // شاشة الأقسام
  document.getElementById("cat-title").textContent = t.catTitle;
  document.getElementById("cat-subtitle").textContent = t.catSubtitle;
  document.getElementById("btn-cat-geo").textContent = t.catGeo;
  document.getElementById("btn-cat-countries").textContent = t.catCountries;
  document.getElementById("btn-cat-it").textContent = t.catIT;
  document.getElementById("btn-cat-general").textContent = t.catGeneral;
  document.getElementById("cat-hint").textContent = t.catHint;
  document.getElementById("category-back-btn").textContent = t.catBack;

  // نصوص الكويز
  document.getElementById("back-btn").textContent = t.backBtn;
  document.getElementById("label-coins").textContent = t.labelCoins;
  document.getElementById("label-time").textContent = t.labelTime;
  document.getElementById("label-category").textContent = t.labelCategory;
  document.getElementById("label-question").textContent = t.labelQuestion;

  // شاشة النتيجة
  document.getElementById("result-title").textContent = t.resultTitle;
  document.getElementById("result-label-category").textContent = t.resultLabelCategory;
  document.getElementById("result-label-total").textContent = t.resultLabelTotal;
  document.getElementById("result-label-correct").textContent = t.resultLabelCorrect;
  document.getElementById("result-label-coins").textContent = t.resultLabelCoins;
  document.getElementById("result-label-accuracy").textContent = t.resultLabelAccuracy;
  document.getElementById("result-again-btn").textContent = t.resultAgain;
  document.getElementById("result-home-btn").textContent = t.resultHome;

  // تحديث السؤال الحالي إذا كانت الشاشة نشطة
  if (
    currentQuestions.length > 0 &&
    document.getElementById("quiz-screen").classList.contains("active")
  ) {
    renderCurrentQuestionOnly();
  }
}

// ====== بنك الأسئلة (Questions Bank) ======
const questions = {
  geography: [
    {
      text: { en: "What is the largest ocean on Earth?", ar: "ما هو أكبر محيط على سطح الأرض؟" },
      choices: { en: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], ar: ["المحيط الأطلسي", "المحيط الهندي", "المحيط الهادئ", "المحيط المتجمد الشمالي"] },
      answer: 2
    },
    {
      text: { en: "Which river is the longest in the world?", ar: "ما هو أطول نهر في العالم؟" },
      choices: { en: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], ar: ["نهر الأمازون", "نهر النيل", "نهر اليانغتسي", "نهر الميسيسيبي"] },
      answer: 1
    },
    {
      text: { en: "Mount Everest is part of which mountain range?", ar: "جبل إيفرست جزء من أي سلسلة جبلية؟" },
      choices: { en: ["Andes", "Alps", "Himalayas", "Rockies"], ar: ["جبال الأنديز", "جبال الألب", "جبال الهيمالايا", "جبال الروكي"] },
      answer: 2
    },
    {
      text: { en: "What is the capital city of Egypt?", ar: "ما هي عاصمة مصر؟" },
      choices: { en: ["Cairo", "Alexandria", "Giza", "Luxor"], ar: ["القاهرة", "الإسكندرية", "الجيزة", "الأقصر"] },
      answer: 0
    },
    {
      text: { en: "Which continent is known as the ‘Dark Continent’?", ar: "أي قارة تُعرف باسم \"القارة السمراء\"؟" },
      choices: { en: ["Asia", "Africa", "Europe", "Australia"], ar: ["آسيا", "أفريقيا", "أوروبا", "أستراليا"] },
      answer: 1
    }
  ],
  countries: [
    {
      text: { en: "Which country is famous for the Eiffel Tower?", ar: "أي دولة تشتهر ببرج إيفل؟" },
      choices: { en: ["Italy", "France", "Germany", "Spain"], ar: ["إيطاليا", "فرنسا", "ألمانيا", "إسبانيا"] },
      answer: 1
    },
    {
      text: { en: "Which country uses the yen as its currency?", ar: "أي دولة تستخدم الين عملة رسمية لها؟" },
      choices: { en: ["China", "South Korea", "Japan", "Thailand"], ar: ["الصين", "كوريا الجنوبية", "اليابان", "تايلاند"] },
      answer: 2
    },
    {
      text: { en: "Which country does the city of Sydney belong to?", ar: "إلى أي دولة تتبع مدينة سيدني؟" },
      choices: { en: ["New Zealand", "Canada", "Australia", "United Kingdom"], ar: ["نيوزيلندا", "كندا", "أستراليا", "المملكة المتحدة"] },
      answer: 2
    },
    {
      text: { en: "Which country is known as the Land of the Pharaohs?", ar: "أي دولة تُعرف بأرض الفراعنة؟" },
      choices: { en: ["Morocco", "Egypt", "Sudan", "Jordan"], ar: ["المغرب", "مصر", "السودان", "الأردن"] },
      answer: 1
    },
    {
      text: { en: "Which country’s flag has a red maple leaf?", ar: "أي دولة يحمل علمها ورقة قيقب حمراء؟" },
      choices: { en: ["Denmark", "Canada", "Austria", "Switzerland"], ar: ["الدنمارك", "كندا", "النمسا", "سويسرا"] },
      answer: 1
    }
  ],
  it: [
    {
      text: { en: "Which language structures the content of web pages?", ar: "أي لغة تُستخدم لبناء هيكل صفحات الويب؟" },
      choices: { en: ["CSS", "HTML", "Java", "Python"], ar: ["CSS", "HTML", "جافا", "بايثون"] },
      answer: 1
    },
    {
      text: { en: "Which language is mainly used to style web pages?", ar: "أي لغة تُستخدم لإضافة التصميم والألوان لصفحات الويب؟" },
      choices: { en: ["SQL", "C++", "CSS", "PHP"], ar: ["SQL", "سي بلس بلس", "CSS", "PHP"] },
      answer: 2
    },
    {
      text: { en: "Which language runs in the browser to add interactivity?", ar: "أي لغة تعمل داخل المتصفح لإضافة تفاعل للموقع؟" },
      choices: { en: ["JavaScript", "PHP", "C#", "Go"], ar: ["جافاسكربت", "بي إتش بي", "سي شارب", "جو"] },
      answer: 0
    },
    {
      text: { en: "What does CSS stand for?", ar: "ماذا تعني اختصار CSS؟" },
      choices: { en: ["Computer Style Sheet", "Cascading Style Sheets", "Creative Style System", "Code Style Sheet"], ar: ["Computer Style Sheet", "Cascading Style Sheets", "Creative Style System", "Code Style Sheet"] },
      answer: 1
    },
    {
      text: { en: "Which of the following is a database language?", ar: "أي من التالي لغة قواعد بيانات؟" },
      choices: { en: ["HTML", "CSS", "SQL", "JSON"], ar: ["HTML", "CSS", "SQL", "JSON"] },
      answer: 2
    }
  ],
  general: [
    {
      text: { en: "How many planets are in our Solar System?", ar: "كم عدد الكواكب في مجموعتنا الشمسية؟" },
      choices: { en: ["7", "8", "9", "10"], ar: ["7", "8", "9", "10"] },
      answer: 1
    },
    {
      text: { en: "Which gas do humans need to breathe?", ar: "أي غاز يحتاجه الإنسان للتنفس؟" },
      choices: { en: ["Oxygen", "Helium", "Nitrogen", "Carbon dioxide"], ar: ["الأكسجين", "الهيليوم", "النيتروجين", "ثاني أكسيد الكربون"] },
      answer: 0
    },
    {
      text: { en: "Which animal is known as the ‘King of the Jungle’?", ar: "أي حيوان يُعرف بلقب ملك الغابة؟" },
      choices: { en: ["Tiger", "Lion", "Elephant", "Cheetah"], ar: ["النمر", "الأسد", "الفيل", "الفهد"] },
      answer: 1
    },
    {
      text: { en: "What do bees produce?", ar: "ماذا تنتج النحلات؟" },
      choices: { en: ["Milk", "Oil", "Honey", "Sugar"], ar: ["حليب", "زيت", "عسل", "سكر"] },
      answer: 2
    },
    {
      text: { en: "Which shape has 3 sides?", ar: "أي شكل له ثلاثة أضلاع؟" },
      choices: { en: ["Square", "Triangle", "Rectangle", "Circle"], ar: ["مربع", "مثلث", "مستطيل", "دائرة"] },
      answer: 1
    }
  ],


// ... (نهاية قسم general) ...
  // تأكد من وجود الفاصلة هنا

  arduino: [
    {
      text: { en: "Which function runs repeatedly in Arduino?", ar: "ما هي الدالة التي تتكرر باستمرار في الأردوينو؟" },
      choices: { en: ["setup()", "loop()", "main()", "start()"], ar: ["setup()", "loop()", "main()", "start()"] },
      answer: 1
    },
    {
      text: { en: "What is the operating voltage of Arduino Uno?", ar: "ما هو جهد التشغيل القياسي لأردوينو أونو؟" },
      choices: { en: ["3.3V", "5V", "9V", "12V"], ar: ["3.3V", "5V", "9V", "12V"] },
      answer: 1
    },
    {
      text: { en: "Which command is used to configure a pin?", ar: "ما هو الأمر المستخدم لتهيئة المنفذ (Pin)؟" },
      choices: { en: ["digitalWrite", "pinMode", "analogRead", "delay"], ar: ["digitalWrite", "pinMode", "analogRead", "delay"] },
      answer: 1
    },
    {
      text: { en: "What is the file extension for Arduino sketches?", ar: "ما هي صيغة ملفات كود الأردوينو؟" },
      choices: { en: [".exe", ".cpp", ".ino", ".py"], ar: [".exe", ".cpp", ".ino", ".py"] },
      answer: 2
    },
    {
      text: { en: "What does GND stand for?", ar: "إلى ماذا يرمز الاختصار GND؟" },
      choices: { en: ["Generator", "Ground", "Grand", "Grid"], ar: ["مولد (Generator)", "أرضي (Ground)", "كبير (Grand)", "شبكة (Grid)"] },
      answer: 1
    },

    {
      text: { en: "Component used to limit current and protect LEDs?", ar: "عنصر يُستخدم لتقليل التيار وحماية الـ LED؟" },
      choices: { en: ["Capacitor", "Resistor", "Diode", "Wire"], ar: ["المكثف", "المقاومة", "الدايود", "سلك"] },
      answer: 1
    },
    {
      text: { en: "Which component emits sound for alerts?", ar: "ما هو العنصر الذي يصدر صوتاً للتنبيهات؟" },
      choices: { en: ["LED", "Sensor", "Buzzer", "Relay"], ar: ["LED", "حساس", "الجرس (Buzzer)", "ريليه"] },
      answer: 2
    },
    {
      text: { en: "A board used for temporary prototyping without soldering?", ar: "لوحة تُستخدم لتوصيل القطع مؤقتًا بدون لحام؟" },
      choices: { en: ["Motherboard", "Breadboard", "PCB", "Dashbard"], ar: ["اللوحة الأم", "لوحة التجارب (Breadboard)", "لوحة مطبوعة", "لوحة قيادة"] },
      answer: 1
    },
    {
      text: { en: "Which component measures distance using sound waves?", ar: "أي مكون يقيس المسافة باستخدام الموجات الصوتية؟" },
      choices: { en: ["PIR", "Ultrasonic Sensor", "LDR", "Tilt Sensor"], ar: ["PIR", "حساس الموجات فوق الصوتية", "LDR", "حساس الميل"] },
      answer: 1
    },
    {
      text: { en: "Component that detects motion of objects?", ar: "حساس يكتشف حركة الأجسام؟" },
      choices: { en: ["Temp Sensor", "PIR Sensor", "LDR", "Button"], ar: ["حساس الحرارة", "حساس الحركة (PIR)", "LDR", "زر"] },
      answer: 1
    },
    {
      text: { en: "Resistance that changes with light intensity?", ar: "مقاومة تتغير قيمتها حسب شدة الضوء؟" },
      choices: { en: ["Potentiometer", "Resistor", "LDR", "Capacitor"], ar: ["مقاومة متغيرة", "مقاومة ثابتة", "LDR (مقاومة ضوئية)", "مكثف"] },
      answer: 2
    },
    {
      text: { en: "Used to input manual commands (Push/Release)?", ar: "يُستخدم لإدخال أوامر يدوية (ضغط/إفلات)؟" },
      choices: { en: ["LED", "Switch", "Push Button", "Jumper"], ar: ["LED", "مفتاح", "زر ضغاط (Button)", "سلك"] },
      answer: 2
    },
    {
      text: { en: "Which LED can produce multiple colors?", ar: "أي نوع LED يمكنه إنتاج ألوان متعددة؟" },
      choices: { en: ["Red LED", "RGB LED", "White LED", "IR LED"], ar: ["LED أحمر", "RGB LED", "LED أبيض", "LED أشعة تحت حمراء"] },
      answer: 1
    },
    {
      text: { en: "Stores electrical charge and smooths voltage?", ar: "يخزن الشحنة الكهربائية وينعم الجهد؟" },
      choices: { en: ["Resistor", "Capacitor", "Inductor", "Transistor"], ar: ["المقاومة", "المكثف", "الملف", "الترانزستور"] },
      answer: 1
    },
    {
      text: { en: "Which display shows 4 numbers (like a clock)?", ar: "أي شاشة تعرض 4 أرقام (مثل الساعة)؟" },
      choices: { en: ["7-Segment (1 Digit)", "LCD", "7-Segment (4 Digit)", "OLED"], ar: ["شاشة سباعية (رقم)", "LCD", "شاشة سباعية (4 أرقام)", "OLED"] },
      answer: 2
    },
    {
      text: { en: "Component used to change resistance manually?", ar: "عنصر يُستخدم لتغيير المقاومة يدوياً؟" },
      choices: { en: ["Fixed Resistor", "Potentiometer", "Diode", "Fuse"], ar: ["مقاومة ثابتة", "مقاومة متغيرة (Potentiometer)", "دايود", "فيوز"] },
      answer: 1
    },
    {
      text: { en: "What is the operating voltage of Arduino Uno?", ar: "ما هو جهد تشغيل الأردوينو أونو؟" },
      choices: { en: ["3.3V", "5V", "9V", "12V"], ar: ["3.3V", "5V", "9V", "12V"] },
      answer: 1
    },
    {
      text: { en: "Which microcontroller is on the Arduino Uno?", ar: "ما هو المتحكم الموجود على لوحة الأردوينو أونو؟" },
      choices: { en: ["ESP8266", "ATmega328P", "PIC16F", "STM32"], ar: ["ESP8266", "ATmega328P", "PIC16F", "STM32"] },
      answer: 1
    },
    {
      text: { en: "Sensor that detects inclination or tilting?", ar: "حساس يكتشف الميلان أو تغير الوضع؟" },
      choices: { en: ["Tilt Sensor", "PIR", "Ultrasonic", "Temp Sensor"], ar: ["حساس الميل", "PIR", "ألتراسونيك", "حساس حرارة"] },
      answer: 0
    },
    {
      text: { en: "Measures both Temperature and Humidity?", ar: "يقيس درجة الحرارة والرطوبة معاً؟" },
      choices: { en: ["LM35", "DHT Sensor", "LDR", "Gas Sensor"], ar: ["LM35", "حساس الحرارة والرطوبة", "LDR", "حساس غاز"] },
      answer: 1
    },
    {
      text: { en: "Wires used to connect components on a breadboard?", ar: "أسلاك لتوصيل القطع على لوحة التجارب؟" },
      choices: { en: ["Copper Wire", "Jumper Wires", "Cable", "Thread"], ar: ["سلك نحاس", "أسلاك توصيل (Jumpers)", "كابل", "خيط"] },
      answer: 1
    },
    {
      text: { en: "Does an LED have polarity (+ and -)?", ar: "هل للـ LED قطبية (موجب وسالب)؟" },
      choices: { en: ["No", "Yes", "Sometimes", "Only Blue ones"], ar: ["لا", "نعم", "أحياناً", "فقط الأزرق"] },
      answer: 1
    },
    {
      text: { en: "7-Segment (1 Digit) displays numbers from:", ar: "الشاشة السباعية (رقم واحد) تعرض الأرقام من:" },
      choices: { en: ["0 to 9", "0 to 99", "1 to 10", "A to Z"], ar: ["0 إلى 9", "0 إلى 99", "1 إلى 10", "A إلى Z"] },
      answer: 0
    },
    {
      text: { en: "The 'Brain' of the electronic project?", ar: "عقل المشروع الإلكتروني؟" },
      choices: { en: ["Battery", "Breadboard", "Arduino Uno", "Motor"], ar: ["البطارية", "لوحة التجارب", "أردوينو أونو", "المحرك"] },
      answer: 2
    },
    {
      text: { en: "Capacitor unit of measurement is:", ar: "وحدة قياس سعة المكثف هي:" },
      choices: { en: ["Ohm", "Farad", "Ampere", "Volt"], ar: ["أوم", "فاراد", "أمبير", "فولت"] },
      answer: 1
    }
  ]
};


// ====== حالة اللعبة (Game State) ======
let currentCategory = null;
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timerDuration = 10;
let timeLeft = timerDuration;
let timerId = null;
let canAnswer = true;
let correctCount = 0;

// ====== عناصر الواجهة (DOM Elements) ======
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

// ملفات الصوت
const soundCorrect = document.getElementById("sound-correct");
const soundWrong   = document.getElementById("sound-wrong");
const soundTimeup  = document.getElementById("sound-timeu"); //  غيرتتتت ال timeu  من  الtimeup
const bgMusic      = document.getElementById("bg-music");

// واجهة الصوت والإعدادات
const muteBtn        = document.getElementById("mute-btn");
const volumeSlider   = document.getElementById("volume-slider");
const settingsToggle = document.getElementById("settings-toggle");
const settingsPanel  = document.getElementById("settings-panel");

// 🔔 صوت العدّ التنازلي (تيك توك)
// هذا كائن صوت منفصل عشان نتحكم فيه بالكود بسهولة
const countdownSound = new Audio("sounds/timeu.mp3"); //  غيرتتتت ال timeu  من  الtimeup
countdownSound.loop = true; // يضل يكرر نفسه

let isMuted = false;

// ====== التحكم بالصوت (Audio Control) ======
function updateMuteIcon() {
  if (!muteBtn) return;
  muteBtn.textContent = isMuted ? "🔇" : "🔊";
}

function setMasterMute(muted) {
  isMuted = muted;
  // كتم جميع الأصوات
  [bgMusic, soundCorrect, soundWrong, soundTimeup, countdownSound].forEach((audioEl) => {
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
    // محاولة التشغيل عند أول تفاعل من المستخدم في حال منعه المتصفح
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

// ====== دوال صوت العد التنازلي ======
function startCountdownTick() {
  if (!countdownSound || isMuted) return;
  const v = volumeSlider ? parseFloat(volumeSlider.value) || 0.4 : 0.4;
  countdownSound.volume = v;
  countdownSound.currentTime = 0;
  countdownSound.play().catch(() => {});
}

function stopCountdownTick() {
  if (!countdownSound) return;
  countdownSound.pause();
  countdownSound.currentTime = 0;
}

// ====== دوال مساعدة (Helpers) ======
function showScreen(screen) {
  // إخفاء جميع الشاشات ثم إظهار المطلوبة فقط
  [startScreen, instructionsScreen, categoryScreen, quizScreen, resultScreen].forEach(
    (s) => s.classList.remove("active")
  );
  screen.classList.add("active");
}

function shuffleArray(array) {
  // خلط الأسئلة عشوائياً
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function toCategoryName(key) {
  // ترجمة اسم القسم للغة الحالية
  if (currentLanguage === "ar") {
    switch (key) {
      case "geography": return "جغرافيا";
      case "countries": return "دول";
      case "it":        return "IT وتكنولوجيا";
      case "general":   return "معلومات عامة";
      case "arduino":   return "أردوينو";       
      default:          return key;
    }
  } else {
    switch (key) {
      case "geography": return "Geography";
      case "countries": return "Countries";
      case "it":        return "IT & Technology";
      case "general":   return "General Knowledge";
      case "arduino":   return "Arduino";
      default:          return key;
    }
  }
}

// ====== سير اللعبة (Game Flow) ======
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
  // 1. تنظيف أي مؤقت سابق
  if (timerId) clearInterval(timerId);

  // 2. إيقاف صوت العد التنازلي السابق فوراً
  stopCountdownTick();

  // 3. التحقق: هل اللاعب غادر الشاشة؟
  if (!quizScreen.classList.contains("active")) {
    return; // لا تكمل الكود لو اللاعب طلع
  }

  // 4. التحقق: هل انتهت الأسئلة؟
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

  // تشغيل صوت التيك توك الجديد
  startCountdownTick();

  // تشغيل العداد
  timerId = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = timeLeft.toString();
    if (timeLeft <= 0) {
      clearInterval(timerId);
      canAnswer = false;

      // أوقف التيك توك
      stopCountdownTick();

      showCorrectAnswer(true, texts[currentLanguage]);
      
      // تشغيل صوت "انتهى الوقت" مرة واحدة فقط
      playSfx(soundTimeup);
      
      setTimeout(() => {
        // فحص أمان: هل اللاعب لسه في صفحة الكويز؟
        if (!quizScreen.classList.contains("active")) return;
        currentIndex++;
        loadQuestion();
      }, 1500); // زيادة الوقت قليلاً لقراءة الإجابة
    }
  }, 1000);
}

function handleChoiceClick(choiceIndex) {
  if (!canAnswer) return;
  canAnswer = false;

  // إيقاف العداد وصوت التيك توك
  clearInterval(timerId);
  stopCountdownTick();

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
    // فحص أمان مهم جداً: إذا اللاعب ضغط "رجوع" خلال هذا الوقت، لا تشغل السؤال التالي
    if (!quizScreen.classList.contains("active")) return;
    
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

  // تأكد أن الأصوات واقفة
  stopCountdownTick();

  showScreen(resultScreen);
}

// ====== الأحداث (Event Listeners) ======

// أزرار اللغة
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

// قائمة الإعدادات
if (settingsToggle && settingsPanel) {
  settingsToggle.addEventListener("click", () => {
    settingsPanel.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    const clickedInside =
      settingsPanel.contains(e.target) || settingsToggle.contains(e.target);
    if (!clickedInside) {
      settingsPanel.classList.remove("open");
    }
  });
}

// التحكم بالصوت
if (muteBtn) {
  muteBtn.addEventListener("click", () => {
    setMasterMute(!isMuted);
  });
}

if (volumeSlider && bgMusic) {
  volumeSlider.addEventListener("input", () => {
    const v = parseFloat(volumeSlider.value);
    bgMusic.volume = v;
    countdownSound.volume = v; // ربط صوت التيك توك بالصوت العام

    if (v > 0 && isMuted) {
      setMasterMute(false);
    }
    if (v === 0 && !isMuted) {
      setMasterMute(true);
    }
  });
}

// التنقل بين الشاشات
startBtn.addEventListener("click", () => {
  playBgMusic();
  showScreen(categoryScreen);
});

instructionsBtn.addEventListener("click", () => {
  showScreen(instructionsScreen);
});

instructionsBackBtn.addEventListener("click", () => {
  showScreen(startScreen);
});

goCategoriesBtn.addEventListener("click", () => {
  showScreen(categoryScreen);
});

categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const categoryKey = btn.dataset.category;
    startCategory(categoryKey);
  });
});

categoryBackBtn.addEventListener("click", () => {
  showScreen(startScreen);
});

// زر الرجوع من الكويز (هام جداً لإيقاف الأصوات)
backBtn.addEventListener("click", () => {
  if (timerId) clearInterval(timerId);
  stopCountdownTick(); // إيقاف صوت التيك توك فوراً
  showScreen(categoryScreen);
});

// أزرار شاشة النتيجة
document.getElementById("result-again-btn").addEventListener("click", () => {
  showScreen(categoryScreen);
});

document.getElementById("result-home-btn").addEventListener("click", () => {
  showScreen(startScreen);
});

// ====== التهيئة المبدئية (Init) ======
scoreSpan.textContent = "0";
timerSpan.textContent = timerDuration.toString();
applyLanguage();
showScreen(startScreen);
updateMuteIcon();
autoPlayBgMusic();