// ========== SORU VERİSİ ==========
const QUESTIONS = [
    { id: 1, text: "Kuşların nasıl göç ettiğini öğrenmek" },
    { id: 2, text: "İnsanlara yeni bir hobi öğretmek" },
    { id: 3, text: "Hava durumu tahmini için kişisel gözlemleri kullanmak" },
    { id: 4, text: "Bitki hastalıklarını incelemek" },
    { id: 5, text: "Bankaya yatırılan paranın faizini hesaplamak" },
    { id: 6, text: "Resimler tasarlamak ve çizmek" },
    { id: 7, text: "Bir iş yaptırmak için parayla adam tutmak" },
    { id: 8, text: "Bir bilim müzesini incelemek" },
    { id: 9, text: "Gözlük için mercekleri parlatmak" },
    { id: 10, text: "Modern yazarların yazı stillerini araştırmak" },
    { id: 11, text: "Mikroskop gibi laboratuar aletlerini kullanmak" },
    { id: 12, text: "Bir dükkanda envanter tutmak" },
    { id: 13, text: "Bir kuş yemliği tasarlamak" },
    { id: 14, text: "Bir oyun için takım oluşturma" },
    { id: 15, text: "Yeni bir satış kampanyası düzenlemek" },
    { id: 16, text: "Bir toplantıyı yönetmek" },
    { id: 17, text: "Vitaminlerin hayvanlar üzerindeki etkisini araştırmak" },
    { id: 18, text: "Küçük bir işletmeyi idare etmek" },
    { id: 19, text: "Bir makinenin nasıl kullanılacağı konusunda talimatlar yazmak" },
    { id: 20, text: "Diğer insanlar için iş planlamak" },
    { id: 21, text: "Küçük grup tartışmalarına katılmak" },
    { id: 22, text: "Yeni bir cerrahi işlem hakkında yazılar okumak" },
    { id: 23, text: "Mali bir hesaptaki hataları bulmak" },
    { id: 24, text: "Bir rapor taslağındaki hataları bulmak ve incelemek" },
    { id: 25, text: "Planlar ve grafikler yapmak" },
    { id: 26, text: "Fırtınadan sonra zarar görmüş bir ağacı onarmak" },
    { id: 27, text: "Kusurları bulmak için mamulleri incelemek" },
    { id: 28, text: "Telefonla iş idare etmek" },
    { id: 29, text: "Acil durumlarda insanlara yardım etmek" },
    { id: 30, text: "Bir kuruluşun parayla ilgili bütün işlerini idare etmek" },
    { id: 31, text: "Müzik eseri bestelemek veya düzenlemek" },
    { id: 32, text: "Filmler için konu müziği bestelemek" },
    { id: 33, text: "Yeni kurallar veya politikalar geliştirmek" },
    { id: 34, text: "Biyoloji çalışmak" },
    { id: 35, text: "Bir politik kurum için kampanyaya katılmak" },
    { id: 36, text: "Maddeleri ayırmak, biriktirmek ve saklamak" },
    { id: 37, text: "Bir toplum geliştirme projesinde çalışmak" },
    { id: 38, text: "Bir daktilonun nasıl tamir edileceğini öğrenmek" },
    { id: 39, text: "Dünyanın merkezi, güneş ve yıldızlar hakkında kitaplar okumak" },
    { id: 40, text: "Tam doğru zaman tutmak için bir saati ayarlamak" },
    { id: 41, text: "Beynin nasıl çalıştığını öğrenmek" },
    { id: 42, text: "Yaratıcı fotoğraflar çekmek" },
    { id: 43, text: "Masraflara ait hesap kayıtları tutmak" },
    { id: 44, text: "Bir bandoda çalmak" },
    { id: 45, text: "Bir orkestrada caz müziği çalmak" },
    { id: 46, text: "Bir grup veya klüp için bütçe hazırlamak" },
    { id: 47, text: "Depremin nedenlerini araştırmak" },
    { id: 48, text: "Ünlü bir bilim adamının dersine katılmak" },
    { id: 49, text: "Bir proje üzerinde başkaları ile beraber çalışmak" },
    { id: 50, text: "Bir sinema filmi senaryosu yazmak" },
    { id: 51, text: "Şirket hakkındaki şikayetleri konusunda işçilerle röportaj yapmak" },
    { id: 52, text: "Mobilya yapmak" },
    { id: 53, text: "Değerli taşları kesmeyi ve parlatmayı öğrenmek" },
    { id: 54, text: "Yaralı bir insana ilkyardım yapmak" },
    { id: 55, text: "Yerel bir radyo istasyonunda çalınması için müzik parçaları seçmek" },
    { id: 56, text: "İl genel meclisinde çalışmak" },
    { id: 57, text: "Mali raporları hazırlamak ve yorumlamak" },
    { id: 58, text: "Tehlikedeki bir insana yardım etmeye çalışmak" },
    { id: 59, text: "Elektronik alet çalıştırmak" },
    { id: 60, text: "Çocuklara nasıl oyun oynanacağını veya spor yapılacağını göstermek" },
    { id: 61, text: "Bir ustayı televizyon tamir ederken seyretmek" },
    { id: 62, text: "Bir magazin hikayesini anlatan çizimler yapmak" },
    { id: 63, text: "Ziyaretçilere yol göstermek" },
    { id: 64, text: "Diğer insanların bir problemin çözülebileceğine nasıl inandıklarını öğrenmek" },
    { id: 65, text: "Bir sergiye gezi düzenlemek" },
    { id: 66, text: "Uyuşturucu kullanan insanlara danışmanlık yapmak" },
    { id: 67, text: "İş gazeteleri veya dergileri okumak" },
    { id: 68, text: "Yıldızların oluşumunu öğrenmek" },
    { id: 69, text: "Taksit ödemelerini tahsil etmek" },
    { id: 70, text: "Bir slayt veya film projektörünü çalıştırmak" },
    { id: 71, text: "Kelebekleri gözlemlemek ve sınıflandırmak" },
    { id: 72, text: "Metal bir heykel tasarlamak" },
    { id: 73, text: "İnsanlara kanuni doğruları açıklamak" },
    { id: 74, text: "Kısa hikayeler yazmak" },
    { id: 75, text: "İnsanların mali kararlar vermelerine yardımcı olmak" },
    { id: 76, text: "Gelir vergisi kazancını düzenlemek" },
    { id: 77, text: "Sertifika, plaket veya takdir belgesi kazanmak" },
    { id: 78, text: "Tiyatro oyunu, müzikaller gibi sanatsal etkinliklerin eleştirilerini yazmak" },
    { id: 79, text: "Aylık bütçe planı yapmak" },
    { id: 80, text: "Bir havuz veya gölde yabani hayatı araştırmak" },
    { id: 81, text: "Bir tiyatro oyununda rol almak" },
    { id: 82, text: "Bir resim çerçevesi yapmak" },
    { id: 83, text: "İş gezilerine çıkmak" },
    { id: 84, text: "Orman yangınları için gözetleme yapmak" },
    { id: 85, text: "Yeni alışveriş merkezinin tanıtımını yapmak" },
    { id: 86, text: "Bir muhasebecilik sistemi kurmak" },
    { id: 87, text: "Arkadaşlar arasındaki bir tartışmayı yatıştırmak" },
    { id: 88, text: "Birine önemli bir karar vermesinde yardım etmek" },
    { id: 89, text: "Taşıma için nakil maliyetlerini hesaplamak" },
    { id: 90, text: "Fıkralar ve hikayeler anlatarak insanları eğlendirmek" }
];

// ========== PUANLAMA HARİTASI ==========
const SCORING_MAP = {
    arastirici: [1, 3, 4, 8, 11, 17, 22, 34, 39, 41, 47, 48, 68, 71, 80],
    artistik:   [6, 10, 14, 31, 32, 42, 44, 45, 50, 62, 72, 74, 77, 78, 81],
    sosyal:     [2, 21, 29, 37, 49, 55, 58, 60, 64, 65, 66, 73, 87, 88, 90],
    girisimci:  [7, 15, 16, 18, 20, 28, 33, 35, 51, 56, 63, 67, 75, 83, 85],
    geleneksel: [5, 12, 23, 24, 27, 30, 36, 43, 46, 57, 69, 76, 79, 86, 89],
    gercekci:   [9, 13, 19, 25, 26, 38, 40, 52, 53, 54, 59, 61, 70, 82, 84]
};

// ========== KİŞİLİK TİPLERİ ==========
const PERSONALITY_TYPES = {
    gercekci: {
        name: "Gerçekçi",
        nameEn: "Realistic",
        color: "#2E86AB",
        ozellikler: "Sabırlı ve hoşgörülü, pratik, maddeci, erkeksi, antisosyal, uyumlu, içten, doğal, sabırlı, iç görüleri ve başarma güdüleri fazla.",
        etkinlikler: [
            "Kas etkinliği, motor koordinasyonu gerektiren işler",
            "Açık havadaki işler, mekanik, sistematik çalışmalar",
            "Nesneler, eşyalar, makineler ve hayvanlarla ilgili etkinlikler"
        ],
        meslekler: "Otomobil tamircisi, her çeşit araç teknisyeni, elektrikçi, mühendis, ziraat ile ilgili meslekler, beden eğitimi öğretmeni"
    },
    arastirici: {
        name: "Araştırıcı",
        nameEn: "Investigative",
        color: "#28A745",
        ozellikler: "Entelektüel, analitik düşünce yapısına sahip, rasyonel, eleştirel, titiz, sabırlı, yöntemci, bağımsız, popüler olmaktan hoşlanmayan.",
        etkinlikler: [
            "Analitik gözlem yapma",
            "Sistematik deneysel çalışma",
            "Fiziksel, biyolojik ve kültürel olguları araştırma"
        ],
        meslekler: "Biyolog, genetikçi, matematikçi, kimyager, fizikçi, astronot, antropolog, tıp teknisyeni"
    },
    artistik: {
        name: "Artistik",
        nameEn: "Artistic",
        color: "#8E44AD",
        ozellikler: "Heyecan ve coşkuları dengesiz, hayalci, fevri, karmaşık, sezgileri güçlü, bağımsız, duygusal, uyumlu olmayan, duyarlı ve etkileyici.",
        etkinlikler: [
            "Estetik faaliyetler yapar",
            "Tutkulu, bağımsız, sistematik olmayan aktiviteler",
            "Sanatsal etkinlik ve ürünler yaratma",
            "Bağımsız yaratıcı çalışmalar"
        ],
        meslekler: "Yazar, ressam, aktör, tiyatro sanatçısı, müzisyen, kompozitör, dekoratör ve mimar"
    },
    sosyal: {
        name: "Sosyal",
        nameEn: "Social",
        color: "#E67E22",
        ozellikler: "Yardımsever, sorumluluk sahibi, sosyal işbirliğine yatkın, empatik, arkadaş canlısı, içten, sabırlı, nazik, anlayışlı.",
        etkinlikler: [
            "İnsanlarla birlikteliği saptayan aktiviteler",
            "Başkalarını eğiterek geliştirmek, yardım etmek",
            "Başkalarını ikna etme, yönlendirme"
        ],
        meslekler: "Sosyal hizmet uzmanı, rehabilitasyon danışmanı, psikolog, psikolojik danışman, halkla ilişkiler uzmanı, üniversite öğretim üyesi, öğretmen"
    },
    girisimci: {
        name: "Girişimci",
        nameEn: "Enterprising",
        color: "#E74C3C",
        ozellikler: "Dışa dönük, enerjik, kendine güvenli, atılgan, fevri, ikna yeteneği yüksek, sabırsız, meraklı, maceracı, iyimser, sosyal, konuşkan.",
        etkinlikler: [
            "Başkalarını ikna etmeye yönelik faaliyetler",
            "Sosyal eğlendirici etkinlikler",
            "Organize edilmiş çalışmalar"
        ],
        meslekler: "Satıcı, pazarlamacı, komisyoncu, menejer, politikacı, avukat"
    },
    geleneksel: {
        name: "Geleneksel",
        nameEn: "Conventional",
        color: "#17A2B8",
        ozellikler: "Dikkatli, titiz, itaatkar, tutarlı, esnek olmayan, düzenli, sabırlı, vicdanlı, özdenetimli, hayal gücünden yoksun, dengeli.",
        etkinlikler: [
            "Sistemli kurallara bağlı aktiviteler",
            "Nesnelerle ilgili sistematik çalışmalar",
            "Kayıt tutma, hesaplama, kontrol işlemleri, veri işleme makineleri kullanma"
        ],
        meslekler: "Banka veznedarı, kütüphaneci, daktilograf, postacı, muhasebeci, kitapçı, finans elemanı"
    }
};

// ========== UYGULAMA DURUMU ==========
const state = {
    answers: {},
    currentPage: 0,
    questionsPerPage: 10
};

const totalPages = Math.ceil(QUESTIONS.length / state.questionsPerPage);

// ========== DOM REFERANSLARI ==========
const welcomeSection = document.getElementById("welcome");
const questionnaireSection = document.getElementById("questionnaire");
const resultsSection = document.getElementById("results");
const questionsContainer = document.getElementById("questions-container");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const pageText = document.getElementById("page-text");
const resultsContent = document.getElementById("results-content");
const btnStart = document.getElementById("btn-start");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnRestart = document.getElementById("btn-restart");

// ========== RENDER FONKSİYONLARI ==========
function renderQuestions() {
    const start = state.currentPage * state.questionsPerPage;
    const end = Math.min(start + state.questionsPerPage, QUESTIONS.length);
    const pageQuestions = QUESTIONS.slice(start, end);

    questionsContainer.innerHTML = pageQuestions.map(q => {
        const answer = state.answers[q.id] || null;
        const answeredClass = answer ? "answered" : "";
        return `
            <div class="question-card ${answeredClass}" data-qid="${q.id}">
                <div class="question-header">
                    <span class="question-number">${q.id}</span>
                    <span class="question-text">${q.text}</span>
                </div>
                <div class="option-group">
                    <label class="option-btn ${answer === 'hoslanir' ? 'selected-like' : ''}" data-value="hoslanir">
                        <input type="radio" name="q${q.id}" value="hoslanir" ${answer === 'hoslanir' ? 'checked' : ''}>
                        Hoşlanırım
                    </label>
                    <label class="option-btn ${answer === 'farketmez' ? 'selected-neutral' : ''}" data-value="farketmez">
                        <input type="radio" name="q${q.id}" value="farketmez" ${answer === 'farketmez' ? 'checked' : ''}>
                        Farketmez
                    </label>
                    <label class="option-btn ${answer === 'hoslanmam' ? 'selected-dislike' : ''}" data-value="hoslanmam">
                        <input type="radio" name="q${q.id}" value="hoslanmam" ${answer === 'hoslanmam' ? 'checked' : ''}>
                        Hoşlanmam
                    </label>
                </div>
            </div>
        `;
    }).join("");

    updateNavigation();
    updateProgressBar();
    pageText.textContent = `Sayfa ${state.currentPage + 1} / ${totalPages}`;
}

function updateProgressBar() {
    const answered = Object.keys(state.answers).length;
    const percentage = (answered / QUESTIONS.length) * 100;
    progressBar.style.width = percentage + "%";
    progressText.textContent = `${answered} / ${QUESTIONS.length} soru tamamlandı`;
}

function updateNavigation() {
    btnPrev.disabled = state.currentPage === 0;

    const isLastPage = state.currentPage === totalPages - 1;
    const allAnswered = Object.keys(state.answers).length === QUESTIONS.length;

    if (isLastPage) {
        btnNext.textContent = "Sonuçları Gör";
        btnNext.disabled = !allAnswered;
    } else {
        btnNext.textContent = "Sonraki";
        btnNext.disabled = false;
    }
}

// ========== PUANLAMA ==========
function calculateScores() {
    const scores = {};
    for (const [type, questionIds] of Object.entries(SCORING_MAP)) {
        scores[type] = { hoslanir: 0, farketmez: 0, hoslanmam: 0 };
        for (const qId of questionIds) {
            const answer = state.answers[qId];
            if (answer) {
                scores[type][answer]++;
            }
        }
    }
    return scores;
}

function determineResult(scores) {
    let maxLike = -1, dominantType = null;
    let maxDislike = -1, oppositeType = null;
    let maxNeutral = -1, neutralType = null;

    for (const [type, counts] of Object.entries(scores)) {
        if (counts.hoslanir > maxLike) {
            maxLike = counts.hoslanir;
            dominantType = type;
        }
        if (counts.hoslanmam > maxDislike) {
            maxDislike = counts.hoslanmam;
            oppositeType = type;
        }
        if (counts.farketmez > maxNeutral) {
            maxNeutral = counts.farketmez;
            neutralType = type;
        }
    }

    const isUndefined = maxNeutral > maxLike;

    return { dominantType, oppositeType, isUndefined, scores };
}

// ========== SONUÇ RENDER ==========
function renderResults() {
    const scores = calculateScores();
    const result = determineResult(scores);
    const dominant = PERSONALITY_TYPES[result.dominantType];
    const opposite = PERSONALITY_TYPES[result.oppositeType];

    const sorted = Object.entries(scores)
        .sort((a, b) => b[1].hoslanir - a[1].hoslanir);

    const maxPossible = 15;

    let html = "";

    // Uyari - Farketmez yogunlugu
    if (result.isUndefined) {
        html += `
            <div class="result-warning">
                <strong>Not:</strong> En yüksek puanınız "Farketmez" kategorisinde yer almaktadır.
                Bu durum, mesleki kişilik tipinizin henüz tam olarak belirlenmediğini gösterir.
                Yine de en yüksek "Hoşlanırım" puanına sahip kişilik tipi aşağıda gösterilmiştir.
            </div>
        `;
    }

    // Baskin tip karti
    html += `
        <div class="result-hero">
            <div class="result-hero-banner" style="background: linear-gradient(135deg, ${dominant.color}, ${dominant.color}dd)">
                <h2>Baskın Kişilik Tipiniz</h2>
                <div class="type-name">${dominant.name}<span class="type-name-en">${dominant.nameEn}</span></div>
                <span class="score-badge">${scores[result.dominantType].hoslanir} / ${maxPossible} puan</span>
            </div>
            <div class="result-hero-body">
                <h3>Belirgin Özellikleri</h3>
                <p>${dominant.ozellikler}</p>
                <h3>Baskın Talepler / Etkinlikler</h3>
                <ul>
                    ${dominant.etkinlikler.map(e => `<li>${e}</li>`).join("")}
                </ul>
                <h3>Tipik Meslekler</h3>
                <p>${dominant.meslekler}</p>
            </div>
        </div>
    `;

    // Puan grafigi
    html += `
        <div class="score-chart">
            <h3>Puan Dağılımı (Hoşlanırım)</h3>
            ${sorted.map(([type, counts]) => {
                const info = PERSONALITY_TYPES[type];
                const pct = (counts.hoslanir / maxPossible) * 100;
                return `
                    <div class="chart-row">
                        <span class="chart-label" style="color: ${info.color}">${info.name}</span>
                        <div class="chart-bar-track">
                            <div class="chart-bar" style="width: ${pct}%; background: ${info.color}">
                                ${pct > 20 ? `<span>${counts.hoslanir}</span>` : ""}
                            </div>
                        </div>
                        <span class="chart-value">${counts.hoslanir}/${maxPossible}</span>
                    </div>
                `;
            }).join("")}
        </div>
    `;

    // Karsi tip
    html += `
        <div class="result-opposite">
            <h3>En Uzak Olduğunuz Kişilik Tipi: ${opposite.name} (${opposite.nameEn})</h3>
            <p>Bu kişilik tipine ait etkinliklerden en az hoşlanıyorsunuz.
            (Hoşlanmam puanı: ${scores[result.oppositeType].hoslanmam} / ${maxPossible})</p>
        </div>
    `;

    // Tum tipler
    html += `
        <div class="all-types">
            <h3>Tüm Kişilik Tipleri</h3>
            ${Object.entries(PERSONALITY_TYPES).map(([key, info]) => {
                const s = scores[key];
                return `
                    <div class="type-card" data-type="${key}">
                        <div class="type-card-header" onclick="toggleTypeCard(this)">
                            <div class="type-card-title">
                                <span class="type-color-dot" style="background: ${info.color}"></span>
                                <span>${info.name} (${info.nameEn})</span>
                            </div>
                            <span class="type-card-arrow">&#9660;</span>
                        </div>
                        <div class="type-card-body">
                            <p style="margin-bottom:8px; font-weight:600; color: ${info.color}">
                                Hoşlanırım: ${s.hoslanir} &nbsp;|&nbsp; Farketmez: ${s.farketmez} &nbsp;|&nbsp; Hoşlanmam: ${s.hoslanmam}
                            </p>
                            <h4>Belirgin Özellikleri</h4>
                            <p>${info.ozellikler}</p>
                            <h4>Baskın Talepler / Etkinlikler</h4>
                            <ul>${info.etkinlikler.map(e => `<li>${e}</li>`).join("")}</ul>
                            <h4>Tipik Meslekler</h4>
                            <p>${info.meslekler}</p>
                        </div>
                    </div>
                `;
            }).join("")}
        </div>
    `;

    resultsContent.innerHTML = html;

    // Cubuk grafik animasyonu
    setTimeout(() => {
        document.querySelectorAll(".chart-bar").forEach(bar => {
            bar.style.width = bar.style.width;
        });
    }, 50);
}

function toggleTypeCard(header) {
    const card = header.closest(".type-card");
    card.classList.toggle("open");
}

// ========== EKRAN GECİSLERİ ==========
function showScreen(screen) {
    welcomeSection.classList.add("hidden");
    questionnaireSection.classList.add("hidden");
    resultsSection.classList.add("hidden");
    screen.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ========== EVENT HANDLER'LAR ==========
function handleOptionSelect(questionId, value) {
    state.answers[questionId] = value;

    const card = questionsContainer.querySelector(`[data-qid="${questionId}"]`);
    if (card) {
        card.classList.add("answered");
        card.classList.remove("unanswered-warning");
        const btns = card.querySelectorAll(".option-btn");
        btns.forEach(btn => {
            btn.classList.remove("selected-like", "selected-neutral", "selected-dislike");
            if (btn.dataset.value === value) {
                if (value === "hoslanir") btn.classList.add("selected-like");
                else if (value === "farketmez") btn.classList.add("selected-neutral");
                else btn.classList.add("selected-dislike");
            }
        });
    }

    updateProgressBar();
    updateNavigation();
}

function handleNext() {
    const isLastPage = state.currentPage === totalPages - 1;

    if (isLastPage) {
        if (Object.keys(state.answers).length === QUESTIONS.length) {
            renderResults();
            showScreen(resultsSection);
        }
        return;
    }

    // Mevcut sayfadaki cevaplanmamis sorulari kontrol et
    const start = state.currentPage * state.questionsPerPage;
    const end = Math.min(start + state.questionsPerPage, QUESTIONS.length);
    let hasUnanswered = false;

    for (let i = start; i < end; i++) {
        const q = QUESTIONS[i];
        if (!state.answers[q.id]) {
            const card = questionsContainer.querySelector(`[data-qid="${q.id}"]`);
            if (card) {
                card.classList.add("unanswered-warning");
                setTimeout(() => card.classList.remove("unanswered-warning"), 600);
            }
            hasUnanswered = true;
        }
    }

    if (hasUnanswered) return;

    state.currentPage++;
    renderQuestions();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function handlePrev() {
    if (state.currentPage > 0) {
        state.currentPage--;
        renderQuestions();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

function handleStart() {
    showScreen(questionnaireSection);
    renderQuestions();
}

function handleRestart() {
    state.answers = {};
    state.currentPage = 0;
    showScreen(welcomeSection);
}

// ========== EVENT LISTENER'LAR ==========
document.addEventListener("DOMContentLoaded", () => {
    btnStart.addEventListener("click", handleStart);
    btnPrev.addEventListener("click", handlePrev);
    btnNext.addEventListener("click", handleNext);
    btnRestart.addEventListener("click", handleRestart);

    // Event delegation - soru secenekleri
    questionsContainer.addEventListener("click", (e) => {
        const optionBtn = e.target.closest(".option-btn");
        if (!optionBtn) return;

        const card = optionBtn.closest(".question-card");
        const questionId = parseInt(card.dataset.qid);
        const value = optionBtn.dataset.value;

        handleOptionSelect(questionId, value);
    });

    // Sayfa kapatma uyarisi
    window.addEventListener("beforeunload", (e) => {
        if (Object.keys(state.answers).length > 0) {
            e.preventDefault();
            e.returnValue = "";
        }
    });
});
