import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  HelpCircle, 
  Award, 
  ChevronRight, 
  RefreshCw, 
  CheckCircle2, 
  XCircle, 
  BookMarked,
  FileText,
  Info,
  Layers,
  Percent,
  Calculator,
  Sparkles,
  UserCheck
} from "lucide-react";

const catatan1 = "/c1.jpeg";
const catatan2 = "/c2.jpeg";

// Questions from the actual PDF book
const BANK_SOAL = [
  {
    id: "bs-1",
    question: "Pak Mansyur memberi 600 koin kepada ketiga anaknya. Anak kedua diberi 25 koin lebih banyak dari anak ketiga. Anak pertama mendapatkan tiga kali dari anak kedua. Berapakah banyak koin yang diterima anak ketiga?",
    options: [
      "125 koin",
      "375 koin",
      "100 koin",
      "500 koin"
    ],
    correctAnswer: 2, // 100 koin
    explanation: [
      "Misalkan koin yang diterima anak ketiga adalah x.",
      "Anak kedua diberi 25 koin lebih banyak dari anak ketiga, maka: Koin Anak Kedua = 25 + x",
      "Anak pertama mendapatkan tiga kali dari anak kedua, maka: Koin Anak Pertama = 3 × (25 + x) = 75 + 3x",
      "Jumlah total koin adalah 600, sehingga kita dapat menyusun persamaan aljabar berikut:",
      "x + (25 + x) + (75 + 3x) = 600",
      "Sederhanakan suku-suku sejenis:",
      "5x + 100 = 600",
      "Pindahkan konstanta ke ruas kanan:",
      "5x = 600 - 100",
      "5x = 500",
      "x = 500 / 5",
      "x = 100",
      "Jadi, banyak koin yang diterima anak ketiga adalah 100 koin."
    ],
    hint: "Gunakan pemisalan variabel x untuk anak ketiga, lalu nyatakan anak pertama dan kedua dalam x."
  },
  {
    id: "bs-2",
    question: "Pada sebuah tes yang terdiri dari 20 soal dibuat aturan sebagai berikut: Jika benar dapat skor 5, salah dapat skor (-1) dan tidak dijawab dapat skor (-2). Sandi menjawab benar 17 soal dan 1 soal dijawab salah sementara sisanya tidak dijawab. Berapakah skor maksimal yang diperoleh Sandi?",
    options: [
      "82",
      "75",
      "85",
      "80"
    ],
    correctAnswer: 3, // 80
    explanation: [
      "Diketahui: Jumlah total soal = 20",
      "Soal dijawab benar = 17 (Skor benar = 5)",
      "Soal dijawab salah = 1 (Skor salah = -1)",
      "Jumlah soal tidak dijawab = 20 - 17 - 1 = 2 (Skor tidak dijawab = -2)",
      "Sekarang, mari kita hitung kontribusi skor dari masing-masing kategori:",
      "Skor Benar: 17 × 5 = 85",
      "Skor Salah: 1 × (-1) = -1",
      "Skor Tidak Dijawab: 2 × (-2) = -4",
      "Total Skor Maksimal Sandi:",
      "Total = 85 + (-1) + (-4)",
      "Total = 85 - 5 = 80",
      "Jadi, skor maksimal yang diperoleh Sandi adalah 80."
    ],
    hint: "Hitung dulu berapa banyak soal yang tidak dijawab oleh Sandi dari total 20 soal."
  },
  {
    id: "bs-3",
    question: "Pak Kardi memiliki sawah berbentuk persegi panjang dengan panjang (4x + 2) cm dan lebar (2x + 1) cm. Berapakah luas sawah Pak Kardi tersebut dalam variabel x?",
    options: [
      "8x² + 4x + 2 cm²",
      "8x² + 8x + 2 cm²",
      "6x² + 6x + 2 cm²",
      "8x² - 8x - 2 cm²"
    ],
    correctAnswer: 1, // 8x² + 8x + 2
    explanation: [
      "Diketahui sawah berbentuk persegi panjang dengan:",
      "Panjang (P) = (4x + 2) cm",
      "Lebar (L) = (2x + 1) cm",
      "Rumus luas persegi panjang adalah Luas = P × L",
      "Lakukan perkalian dua bentuk aljabar distributif:",
      "Luas = (4x + 2) × (2x + 1)",
      "Luas = 4x(2x + 1) + 2(2x + 1)",
      "Luas = (4x × 2x) + (4x × 1) + (2 × 2x) + (2 × 1)",
      "Luas = 8x² + 4x + 4x + 2",
      "Sederhanakan suku-suku sejenis (4x + 4x):",
      "Luas = 8x² + 8x + 2 cm²",
      "Jadi, luas sawah Pak Kardi adalah 8x² + 8x + 2 cm²."
    ],
    hint: "Gunakan sifat distributif perkalian aljabar: (a + b)(c + d) = ac + ad + bc + bd."
  },
  {
    id: "bs-4",
    question: "Umur Salsa 2/3 kali umur kakaknya. Enam tahun mendatang, jumlah umur mereka adalah 42 tahun. Berapakah selisih umur Salsa dan kakaknya sekarang?",
    options: [
      "2 tahun",
      "3 tahun",
      "4 tahun",
      "6 tahun"
    ],
    correctAnswer: 3, // 6 tahun
    explanation: [
      "Misalkan: Umur Salsa = x, Umur Kakak = y",
      "Dari pernyataan pertama: x = (2/3)y  --> Persamaan (i)",
      "Enam tahun mendatang, umur Salsa menjadi (x+6) dan umur Kakak menjadi (y+6):",
      "(x + 6) + (y + 6) = 42",
      "Sederhanakan persamaan tersebut:",
      "x + y + 12 = 42",
      "x + y = 30  --> Persamaan (ii)",
      "Substitusikan Persamaan (i) ke dalam Persamaan (ii):",
      "(2/3)y + y = 30",
      "Samakan penyebutnya: (2/3)y + (3/3)y = 30",
      "(5/3)y = 30",
      "y = 30 × (3/5) = 18 tahun (Umur Kakak)",
      "Substitusikan nilai y = 18 ke persamaan (i):",
      "x = (2/3) × 18 = 12 tahun (Umur Salsa)",
      "Selisih umur Salsa dan Kakak:",
      "Selisih = y - x = 18 - 12 = 6 tahun.",
      "Jadi, selisih umur Salsa dan kakaknya adalah 6 tahun."
    ],
    hint: "Buat dua buah sistem persamaan linear dari informasi umur saat ini dan 6 tahun lagi."
  },
  {
    id: "bs-5",
    question: "Suatu persegi mempunyai luas (c² - 6c + 9) cm² dengan c adalah bilangan asli tertentu. Panjang sisi persegi tersebut dalam variabel c adalah...",
    options: [
      "(c + 9) cm",
      "(c + 3) cm",
      "(c - 3) cm",
      "(c - 6) cm"
    ],
    correctAnswer: 2, // (c - 3)
    explanation: [
      "Luas persegi dirumuskan sebagai: Luas = sisi²",
      "Sehingga, untuk mencari panjang sisi: Sisi = √Luas",
      "Kita perlu memfaktorkan bentuk kuadrat sempurna c² - 6c + 9.",
      "Bentuk kuadrat sempurna: a² - 2ab + b² = (a - b)²",
      "Bandingkan dengan c² - 6c + 9:",
      "a = c",
      "b = √9 = 3",
      "Uji suku tengah: -2ab = -2(c)(3) = -6c (Sesuai!)",
      "Maka pemfaktorannya adalah:",
      "c² - 6c + 9 = (c - 3)²",
      "Maka sisi persegi adalah:",
      "Sisi = √(c - 3)² = c - 3 cm",
      "Jadi, panjang sisi persegi tersebut adalah (c - 3) cm."
    ],
    hint: "Faktorkan persamaan c² - 6c + 9 menggunakan rumus kuadrat sempurna (a - b)²."
  },
  {
    id: "bs-6",
    question: "Umur Ira adalah 1 tahun lebih muda dari umur Safa. Jumlah kuadrat umur mereka sekarang sama dengan umur kakeknya yaitu 61 tahun. Berapakah jumlah umur Ira dan Safa dua tahun yang akan datang?",
    options: [
      "17 tahun",
      "15 tahun",
      "13 tahun",
      "11 tahun"
    ],
    correctAnswer: 1, // 15 tahun
    explanation: [
      "Misalkan: Umur Ira = f, Umur Safa = g",
      "Dari informasi pertama: f = g - 1  --> Persamaan (i)",
      "Dari informasi kedua: f² + g² = 61  --> Persamaan (ii)",
      "Substitusikan Persamaan (i) ke dalam Persamaan (ii):",
      "(g - 1)² + g² = 61",
      "Jabarkan bentuk kuadrat tersebut:",
      "g² - 2g + 1 + g² = 61",
      "2g² - 2g + 1 - 61 = 0",
      "2g² - 2g - 60 = 0",
      "Bagi kedua ruas dengan 2 agar lebih sederhana:",
      "g² - g - 30 = 0",
      "Faktorkan persamaan kuadrat tersebut:",
      "(g - 6)(g + 5) = 0",
      "Maka g = 6 atau g = -5.",
      "Karena umur harus bernilai positif, maka diperoleh g = 6 tahun (Umur Safa).",
      "Substitusikan nilai g = 6 ke Persamaan (i):",
      "f = 6 - 1 = 5 tahun (Umur Ira).",
      "Dua tahun yang akan datang:",
      "Umur Ira menjadi: 5 + 2 = 7 tahun",
      "Umur Safa menjadi: 6 + 2 = 8 tahun",
      "Jumlah umur mereka berdua setelah 2 tahun:",
      "Jumlah = 7 + 8 = 15 tahun.",
      "Jadi, jumlah umur Ira dan Safa dua tahun mendatang adalah 15 tahun."
    ],
    hint: "Tuliskan f = g - 1, lalu kuadratkan dan bentuk menjadi persamaan kuadrat g² - g - 30 = 0."
  }
];

export default function UlasanSoalTab() {
  const [activeSubTab, setActiveSubTab] = useState<"ulasan" | "catatan" | "soal">("ulasan");
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  
  // States for Quiz
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [answersHistory, setAnswersHistory] = useState<{ questionId: string; selected: number; isCorrect: boolean }[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // States for interactive math models in "Ulasan"
  const [inter3y, setInterY] = useState(3);
  const [inter10x, setInterX] = useState(10);
  const [interConst, setInterConst] = useState(20);

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setAnswersHistory([]);
    setQuizFinished(false);
    setShowExplanation(false);
    setShowHint(false);
  };

  const handleOptionSelect = (optionIndex: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(optionIndex);
  };

  const handleAnswerSubmit = () => {
    if (selectedOption === null || isAnswerSubmitted) return;
    
    const currentQuestion = BANK_SOAL[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    
    setIsAnswerSubmitted(true);
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    setAnswersHistory(prev => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selected: selectedOption,
        isCorrect
      }
    ]);
  };

  const handleNextQuestion = () => {
    const isLast = currentQuestionIndex === BANK_SOAL.length - 1;
    if (isLast) {
      setQuizFinished(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
      setShowExplanation(false);
      setShowHint(false);
    }
  };

  const currentQuestion = BANK_SOAL[currentQuestionIndex];

  return (
    <div id="ulasan-soal-container" className="px-4 py-6 max-w-4xl mx-auto relative z-10">
      
      {/* Sub-Navigation Switcher */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-100 p-1.5 rounded-2xl flex flex-wrap justify-center gap-2 border border-slate-200 shadow-inner">
          <button
            onClick={() => setActiveSubTab("ulasan")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm md:text-base transition-all duration-200 cursor-pointer ${
              activeSubTab === "ulasan"
                ? "bg-white text-joy-orange shadow-md scale-102"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <BookMarked className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            Ringkasan Teori Buku
          </button>
          <button
            onClick={() => setActiveSubTab("catatan")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm md:text-base transition-all duration-200 cursor-pointer ${
              activeSubTab === "catatan"
                ? "bg-white text-joy-orange shadow-md scale-102"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <FileText className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            Catatan
          </button>
          <button
            onClick={() => setActiveSubTab("soal")}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm md:text-base transition-all duration-200 cursor-pointer ${
              activeSubTab === "soal"
                ? "bg-white text-joy-orange shadow-md scale-102"
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            <HelpCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            Bank Soal Interaktif
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeSubTab === "ulasan" && (
          <motion.div
            key="ulasan-materi"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Introductory Hero Banner */}
            <div className="relative rounded-[2rem] bg-gradient-to-br from-joy-orange/10 via-joy-coral/5 to-white border-2 border-joy-orange/20 p-6 sm:p-8 overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 p-4 opacity-15">
                <BookOpen className="w-32 h-32 text-joy-orange" />
              </div>
              <div className="relative z-10 max-w-2xl">
                <span className="px-3 py-1 text-xs font-bold bg-joy-orange text-white rounded-full tracking-wider uppercase">
                  Buku Panduan SMP / MTs
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mt-3 tracking-tight leading-tight">
                  Kumpulan Soal Cerita Aljabar & Pembahasan
                </h2>
                <p className="text-slate-600 mt-2 text-sm sm:text-base font-medium">
                  Ulasan ringkas materi dan konsep aljabar esensial yang diambil langsung dari kurikulum buku ajar SMP/MTs. Pahami unsur, operasi, pemfaktoran, hingga pecahan aljabar dengan ilustrasi interaktif di bawah ini!
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 text-xs font-mono text-slate-500">
                  <span>Penulis: Eka Silviana, Rizki W.Y. Putra, Bambang S. Anggoro</span>
                  <span>•</span>
                  <span>Penerbit: Ahlimedia Press</span>
                </div>
              </div>
            </div>

            {/* Interactive Concept Visualizer: Anatomy of Algebra */}
            <div className="bg-white rounded-[2rem] border-2 border-slate-100 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="p-2 rounded-xl bg-joy-yellow/20">
                  <Sparkles className="w-5 h-5 text-joy-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">Visualisasi Unsur Bentuk Aljabar</h3>
                  <p className="text-xs font-medium text-slate-500">Sesuaikan angka di bawah untuk melihat anatomi bentuk aljabar secara instan!</p>
                </div>
              </div>

              {/* Equation Display Box */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8 text-center">
                <div className="inline-flex items-center justify-center gap-4 flex-wrap text-2xl sm:text-4xl font-black text-slate-700 tracking-wide font-mono">
                  {/* Suku pertama */}
                  <span className="flex flex-col items-center">
                    <span className="text-joy-orange">{inter3y}y</span>
                    <span className="text-[10px] sm:text-xs font-bold font-sans text-slate-400 mt-2 bg-white px-2 py-0.5 rounded-full border border-slate-100 shadow-2xs">Suku 1</span>
                  </span>
                  
                  <span className="text-slate-300 font-sans">+</span>

                  {/* Suku kedua */}
                  <span className="flex flex-col items-center">
                    <span className="text-joy-coral">{inter10x}x</span>
                    <span className="text-[10px] sm:text-xs font-bold font-sans text-slate-400 mt-2 bg-white px-2 py-0.5 rounded-full border border-slate-100 shadow-2xs">Suku 2</span>
                  </span>

                  <span className="text-slate-300 font-sans">=</span>

                  {/* Konstanta */}
                  <span className="flex flex-col items-center">
                    <span className="text-joy-mint">{interConst}</span>
                    <span className="text-[10px] sm:text-xs font-bold font-sans text-slate-400 mt-2 bg-white px-2 py-0.5 rounded-full border border-slate-100 shadow-2xs">Konstanta</span>
                  </span>
                </div>
              </div>

              {/* Interactive Sliders / Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {/* Control Koefisien Y */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-500 uppercase tracking-wider flex justify-between">
                    <span>Koefisien y</span>
                    <span className="text-joy-orange">{inter3y}</span>
                  </label>
                  <input 
                    type="range" 
                    min="-20" 
                    max="20" 
                    value={inter3y} 
                    onChange={(e) => setInterY(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-joy-orange"
                  />
                </div>

                {/* Control Koefisien X */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-500 uppercase tracking-wider flex justify-between">
                    <span>Koefisien x</span>
                    <span className="text-joy-coral">{inter10x}</span>
                  </label>
                  <input 
                    type="range" 
                    min="-20" 
                    max="20" 
                    value={inter10x} 
                    onChange={(e) => setInterX(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-joy-coral"
                  />
                </div>

                {/* Control Konstanta */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-500 uppercase tracking-wider flex justify-between">
                    <span>Konstanta</span>
                    <span className="text-joy-mint">{interConst}</span>
                  </label>
                  <input 
                    type="range" 
                    min="-50" 
                    max="100" 
                    value={interConst} 
                    onChange={(e) => setInterConst(Number(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-joy-mint"
                  />
                </div>
              </div>

              {/* Anatomi definitions cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-orange-50/50 border border-joy-orange/10">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-joy-orange/10 text-joy-orange mb-2">
                    Variabel & Koefisien
                  </span>
                  <p className="text-xs font-medium text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">Variabel (y, x)</strong> adalah simbol atau huruf pengganti suatu nilai yang tidak tetap. <strong className="text-slate-800">Koefisien ({inter3y}, {inter10x})</strong> adalah angka pengali di depan variabel.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/50 border border-joy-coral/10">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-joy-coral/10 text-joy-coral mb-2">
                    Konstanta
                  </span>
                  <p className="text-xs font-medium text-slate-600 leading-relaxed">
                    <strong className="text-slate-800">Konstanta ({interConst})</strong> adalah nilai tetap (angka mandiri) pada bentuk aljabar yang tidak terkait atau memiliki ikatan dengan variabel apa pun.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/50 border border-joy-mint/10">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-joy-mint/10 text-joy-mint mb-2">
                    Suku Sejenis
                  </span>
                  <p className="text-xs font-medium text-slate-600 leading-relaxed">
                    Total elemen matematika yang dipisahkan tanda tambah/kurang disebut <strong className="text-slate-800">Suku</strong>. Hanya suku yang memiliki variabel dan pangkat yang sama (<strong className="text-slate-800">Suku Sejenis</strong>) yang dapat dijumlah atau dikurangkan!
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Summary Reference Cheat Sheets (A to F) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: Operasi Aljabar */}
              <div className="bg-white rounded-[2rem] border-2 border-slate-100 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-1.5 rounded-lg bg-orange-100 text-joy-orange">
                      <Calculator className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="font-extrabold text-slate-800 text-sm tracking-wide">OPERASI ALJABAR (PENJUMLAHAN, PERKALIAN & PEMBAGIAN)</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 font-mono text-xs">
                      <div className="text-slate-500 font-semibold mb-1">Rumus Penjumlahan & Distributif:</div>
                      <div className="text-slate-800 font-bold text-center bg-white p-2.5 rounded-lg border border-slate-100/50 text-sm shadow-2xs">
                        ab + ac = a(b + c)
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 font-mono text-xs">
                      <div className="text-slate-500 font-semibold mb-1">Perkalian Dua Suku Aljabar:</div>
                      <div className="text-slate-800 font-bold text-center bg-white p-2.5 rounded-lg border border-slate-100/50 text-xs shadow-2xs">
                        (ax + b)(cx + d) = acx² + (bc + ad)x + bd
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] font-medium text-slate-500">
                  💡 Sesuai Bab C, kurangkan <code className="bg-slate-100 px-1 py-0.5 rounded text-joy-orange">a dari b</code> berarti <code className="bg-slate-100 px-1 py-0.5 rounded font-bold text-joy-orange">b - a</code>, sedangkan kurangkan <code className="bg-slate-100 px-1 py-0.5 rounded text-joy-orange">a oleh b</code> berarti <code className="bg-slate-100 px-1 py-0.5 rounded font-bold text-joy-orange">a - b</code>.
                </div>
              </div>

              {/* Card 2: Rumus Pemfaktoran Aljabar */}
              <div className="bg-white rounded-[2rem] border-2 border-slate-100 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-1.5 rounded-lg bg-rose-100 text-joy-coral">
                      <Layers className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="font-extrabold text-slate-800 text-sm tracking-wide">RUMUS PEMFAKTORAN ALJABAR</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="block text-[10px] text-slate-400 font-semibold">Selisih Kuadrat:</span>
                        <span className="block text-slate-800 font-bold mt-1 text-center bg-white py-1 rounded shadow-3xs text-[10px]">a² - b² = (a+b)(a-b)</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="block text-[10px] text-slate-400 font-semibold">Kuadrat Sempurna (+):</span>
                        <span className="block text-slate-800 font-bold mt-1 text-center bg-white py-1 rounded shadow-3xs text-[10px]">a²+2ab+b² = (a+b)²</span>
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 font-mono text-xs">
                      <div className="text-slate-500 font-semibold mb-1">Kuadrat Sempurna Pengurangan:</div>
                      <div className="text-slate-800 font-bold text-center bg-white p-2.5 rounded-lg border border-slate-100/50 text-xs shadow-2xs">
                        a² - 2ab + b² = (a - b)²
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] font-medium text-slate-500">
                  💡 Sesuai Bab E, gunakan pemfaktoran kuadrat untuk mencari panjang sisi jika diketahui persamaan luas suatu bidang.
                </div>
              </div>

              {/* Card 3: Perpangkatan Aljabar */}
              <div className="bg-white rounded-[2rem] border-2 border-slate-100 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-1.5 rounded-lg bg-yellow-100 text-yellow-600">
                      <Award className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="font-extrabold text-slate-800 text-sm tracking-wide">PERPANGKATAN ALJABAR</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                      <p className="text-slate-600 font-medium leading-relaxed">
                        Operasi perpangkatan merupakan perkalian aljabar secara berulang dengan bilangan yang sama sebanyak <code className="font-mono bg-slate-100 px-1 rounded font-bold text-joy-orange">n</code> kali.
                      </p>
                      <div className="mt-2 text-center font-mono font-bold text-slate-800 bg-white p-2 rounded border border-slate-100 shadow-3xs text-xs">
                        aⁿ = a × a × a × ... × a
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 font-mono text-xs">
                      <div className="text-slate-500 font-semibold mb-1">Koefisien Segitiga Pascal:</div>
                      <div className="flex justify-center gap-1.5 text-[10px] text-slate-500 font-bold mt-1">
                        <span>(a+b)⁰ = 1</span>
                        <span>•</span>
                        <span>(a+b)¹ = 1, 1</span>
                        <span>•</span>
                        <span>(a+b)² = 1, 2, 1</span>
                        <span>•</span>
                        <span>(a+b)³ = 1, 3, 3, 1</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] font-medium text-slate-500">
                  💡 Sesuai Bab D, pangkat negatif atau pangkat tinggi didistribusikan ke masing-masing variabel.
                </div>
              </div>

              {/* Card 4: Pecahan Aljabar */}
              <div className="bg-white rounded-[2rem] border-2 border-slate-100 p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-1.5 rounded-lg bg-emerald-100 text-joy-mint">
                      <Percent className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="font-extrabold text-slate-800 text-sm tracking-wide">OPERASI PECAHAN BENTUK ALJABAR</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 font-mono text-xs">
                      <div className="text-slate-500 font-semibold mb-1">Operasi Penjumlahan Pecahan:</div>
                      <div className="text-slate-800 font-bold text-center bg-white p-2.5 rounded-lg border border-slate-100/50 text-xs shadow-2xs">
                        a/b + c/d = (ad + bc) / bd
                      </div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 font-mono text-xs">
                      <div className="text-slate-500 font-semibold mb-1">Operasi Pengurangan Pecahan:</div>
                      <div className="text-slate-800 font-bold text-center bg-white p-2.5 rounded-lg border border-slate-100/50 text-xs shadow-2xs">
                        a/b - c/d = (ad - bc) / bd
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] font-medium text-slate-500">
                  💡 Sesuai Bab F, pembagian pecahan dilakukan dengan menukar pembilang dan penyebut bilangan pembagi, lalu dikalikan.
                </div>
              </div>

            </div>

            {/* Quick Action Prompt to Soal */}
            <div className="text-center bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
              <h4 className="font-extrabold text-slate-800 text-base">Sudah Menguasai Ringkasan Teori?</h4>
              <p className="text-sm text-slate-500 mt-1 max-w-lg mx-auto">Sekarang saatnya menguji kemampuanmu dengan menyelesaikan bank soal cerita dari buku kurikulum ini!</p>
              <button
                onClick={() => setActiveSubTab("soal")}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-joy-orange to-joy-coral text-white font-extrabold text-sm rounded-full shadow-lg hover:shadow-joy-orange/20 cursor-pointer hover:-translate-y-0.5 transition-all duration-200"
              >
                Ayo Mulai Latihan Bank Soal
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>
        )}

        {activeSubTab === "catatan" && (
          <motion.div
            key="catatan-materi"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Catatan Hero Banner */}
            <div className="relative rounded-[2rem] bg-gradient-to-br from-joy-orange/10 via-joy-coral/5 to-white border-2 border-joy-orange/20 p-6 sm:p-8 overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 p-4 opacity-15">
                <FileText className="w-32 h-32 text-joy-orange" />
              </div>
              <div className="relative z-10 max-w-2xl">
                <span className="px-3 py-1 text-xs font-bold bg-joy-orange text-white rounded-full tracking-wider uppercase">
                  Catatan Rumus Mandiri
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mt-3 tracking-tight leading-tight">
                  Catatan Visual Konsep Aljabar
                </h2>
                <p className="text-slate-600 mt-2 text-sm sm:text-base font-medium">
                  Pelajari aljabar melalui catatan visual yang rapi dan mudah dipahami. Catatan ini mencakup unsur-unsur aljabar, penyelesaian tanda kurung, pemfaktoran ekspresi, hingga metode mengubah subjek suatu rumus secara lengkap!
                </p>
                <p className="text-xs font-bold text-joy-orange mt-3 flex items-center gap-1.5 bg-joy-orange/5 px-3 py-1.5 rounded-lg border border-joy-orange/10 inline-block">
                  💡 Tips: Klik pada salah satu gambar catatan di bawah ini untuk memperbesar dan membaca rumus lebih jelas!
                </p>
              </div>
            </div>

            {/* Notebook pages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Page 1 */}
              <div className="bg-white rounded-[2rem] border-2 border-slate-100 p-6 shadow-sm flex flex-col h-full group hover:border-joy-orange/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 aspect-[3/4] cursor-zoom-in mb-4" onClick={() => setZoomedImage(catatan1)}>
                  <img
                    src={catatan1}
                    alt="Catatan Aljabar Halaman 1"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="bg-white/90 text-slate-800 font-extrabold text-xs px-3 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                      Klik untuk memperbesar
                    </span>
                  </div>
                </div>
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-800 flex items-center gap-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-joy-orange/10 text-joy-orange text-xs font-black font-mono">1</span>
                      Halaman 1: Dasar & Operasi Suku
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Catatan ini memaparkan tentang pengantar aljabar (variabel, koefisien, konstanta), pengelompokan suku-suku sejenis, penyelesaian perkalian dalam tanda kurung, operasi perkalian & pembagian aljabar, serta memfaktorkan bentuk ekspresi aljabar.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-50 flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[10px] font-bold text-slate-500 font-mono">#UnsurAljabar</span>
                    <span className="px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[10px] font-bold text-slate-500 font-mono">#OperasiAljabar</span>
                    <span className="px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[10px] font-bold text-slate-500 font-mono">#Memfaktorkan</span>
                  </div>
                </div>
              </div>

              {/* Page 2 */}
              <div className="bg-white rounded-[2rem] border-2 border-slate-100 p-6 shadow-sm flex flex-col h-full group hover:border-joy-orange/30 transition-all duration-300">
                <div className="relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 aspect-[3/4] cursor-zoom-in mb-4" onClick={() => setZoomedImage(catatan2)}>
                  <img
                    src={catatan2}
                    alt="Catatan Aljabar Halaman 2"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="bg-white/90 text-slate-800 font-extrabold text-xs px-3 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                      Klik untuk memperbesar
                    </span>
                  </div>
                </div>
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-800 flex items-center gap-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-joy-orange/10 text-joy-orange text-xs font-black font-mono">2</span>
                      Halaman 2: Mengubah Subjek Persamaan
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Panduan matematis lengkap untuk melakukan isolasi variabel (mengubah subjek rumus). Berisi contoh penyelesaian langkah demi langkah untuk menyendirikan variabel tertentu pada persamaan linear, pecahan, hingga rumus pangkat dan lingkaran.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-50 flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[10px] font-bold text-slate-500 font-mono">#MengubahSubjek</span>
                    <span className="px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[10px] font-bold text-slate-500 font-mono">#IsolasiVariabel</span>
                    <span className="px-2 py-0.5 bg-slate-50 border border-slate-100 rounded text-[10px] font-bold text-slate-500 font-mono">#RumusAljabar</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Action Prompt to Soal in Catatan */}
            <div className="text-center bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
              <h4 className="font-extrabold text-slate-800 text-base">Sudah Selesai Membaca Catatan?</h4>
              <p className="text-sm text-slate-500 mt-1 max-w-lg mx-auto">Ayo uji pemahaman rumusan yang baru kamu pelajari dengan menjawab kuis interaktif!</p>
              <button
                onClick={() => setActiveSubTab("soal")}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-joy-orange to-joy-coral text-white font-extrabold text-sm rounded-full shadow-lg hover:shadow-joy-orange/20 cursor-pointer hover:-translate-y-0.5 transition-all duration-200"
              >
                Ayo Mulai Latihan Bank Soal
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {activeSubTab === "soal" && (
          <motion.div
            key="bank-soal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {quizFinished ? (
              /* Finished Scoreboard View */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[2rem] border-2 border-slate-100 p-8 text-center shadow-lg max-w-xl mx-auto space-y-6"
              >
                <div className="inline-flex p-4 bg-joy-yellow/20 rounded-full text-joy-orange">
                  <Award className="w-16 h-16 animate-bounce" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-800">Latihan Selesai!</h3>
                  <p className="text-sm text-slate-500 font-medium">
                    Kamu telah menyelesaikan semua tantangan soal cerita aljabar dari buku panduan.
                  </p>
                </div>

                {/* Score circle */}
                <div className="relative inline-flex items-center justify-center p-6 bg-slate-50 rounded-full border-4 border-white shadow-md">
                  <span className="text-5xl font-black text-joy-orange">
                    {Math.round((score / BANK_SOAL.length) * 100)}
                  </span>
                  <span className="text-xs font-bold text-slate-400 block absolute bottom-2">SKOR</span>
                </div>

                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 grid grid-cols-2 gap-4 text-sm font-bold text-slate-600">
                  <div>
                    <span className="block text-xs font-extrabold text-slate-400">BENAR</span>
                    <span className="text-lg text-emerald-600">{score} Soal</span>
                  </div>
                  <div>
                    <span className="block text-xs font-extrabold text-slate-400">TOTAL SOAL</span>
                    <span className="text-lg text-joy-orange">{BANK_SOAL.length} Soal</span>
                  </div>
                </div>

                {/* Retry Button */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <button
                    onClick={resetQuiz}
                    className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-200 hover:border-joy-orange/50 rounded-xl text-slate-600 hover:text-joy-orange text-sm font-extrabold transition-all duration-150 cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Ulangi Kuis
                  </button>
                  <button
                    onClick={() => setActiveSubTab("ulasan")}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-joy-orange to-joy-coral text-white rounded-xl text-sm font-extrabold shadow-md shadow-joy-orange/15 hover:shadow-lg transition-all duration-150 cursor-pointer"
                  >
                    <BookMarked className="w-4 h-4" />
                    Kembali Ke Ringkasan
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Quiz active view */
              <div className="space-y-6">
                
                {/* Header Information progress bar */}
                <div className="bg-white rounded-[2rem] border-2 border-slate-100 p-5 shadow-xs flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-joy-orange text-white text-xs font-extrabold">
                      {currentQuestionIndex + 1}
                    </span>
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">SOAL CERITA ALJABAR</h4>
                      <p className="text-xs font-bold text-slate-600">Bab {currentQuestionIndex < 3 ? "C: Operasi Aljabar" : "E: Pemfaktoran"}</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="w-full sm:w-36 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-joy-orange transition-all duration-300"
                        style={{ width: `${((currentQuestionIndex + 1) / BANK_SOAL.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-mono">
                      {currentQuestionIndex + 1}/{BANK_SOAL.length}
                    </span>
                  </div>
                </div>

                {/* Main Question Card */}
                <div className="bg-white rounded-[2rem] border-2 border-slate-100 p-6 sm:p-8 shadow-sm space-y-6">
                  
                  {/* Question Title */}
                  <div className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed">
                    {currentQuestion.question}
                  </div>

                  {/* Options List */}
                  <div className="space-y-3">
                    {currentQuestion.options.map((opt, oIdx) => {
                      const isSelected = selectedOption === oIdx;
                      const isCorrectAnswer = oIdx === currentQuestion.correctAnswer;
                      
                      let optionStyle = "border-slate-200 hover:border-joy-orange/40 hover:bg-orange-50/20";
                      let iconElement = null;

                      if (isAnswerSubmitted) {
                        if (isCorrectAnswer) {
                          optionStyle = "border-emerald-500 bg-emerald-50/50 text-emerald-900";
                          iconElement = <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />;
                        } else if (isSelected) {
                          optionStyle = "border-rose-400 bg-rose-50/50 text-rose-900";
                          iconElement = <XCircle className="w-5 h-5 text-rose-500 shrink-0" />;
                        } else {
                          optionStyle = "border-slate-100 opacity-60";
                        }
                      } else if (isSelected) {
                        optionStyle = "border-joy-orange bg-orange-50/50 text-joy-orange ring-2 ring-joy-orange/20 scale-[1.01]";
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleOptionSelect(oIdx)}
                          disabled={isAnswerSubmitted}
                          className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 text-left text-sm sm:text-base font-bold transition-all duration-150 cursor-pointer ${optionStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`flex items-center justify-center w-7 h-7 rounded-lg text-xs font-mono font-black ${
                              isSelected ? "bg-joy-orange text-white" : "bg-slate-100 text-slate-500"
                            }`}>
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span>{opt}</span>
                          </div>
                          {iconElement}
                        </button>
                      );
                    })}
                  </div>

                  {/* Actions (Submit / Next / Hint / Explanation Toggle) */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                    
                    {/* Left Actions: Hint */}
                    <div>
                      {!isAnswerSubmitted && (
                        <button
                          onClick={() => setShowHint(prev => !prev)}
                          className="flex items-center gap-1.5 text-xs font-extrabold text-slate-500 hover:text-joy-orange cursor-pointer"
                        >
                          <Info className="w-4 h-4" />
                          {showHint ? "Sembunyikan Petunjuk" : "Butuh Petunjuk?"}
                        </button>
                      )}
                    </div>

                    {/* Right Actions: Submit or Next */}
                    <div className="flex gap-2">
                      {isAnswerSubmitted && (
                        <button
                          onClick={() => setShowExplanation(prev => !prev)}
                          className="px-4 py-2 rounded-xl border border-slate-200 hover:border-slate-300 font-bold text-xs text-slate-600 hover:text-slate-800 transition-colors duration-150 cursor-pointer"
                        >
                          {showExplanation ? "Sembunyikan Pembahasan" : "Lihat Pembahasan Buku"}
                        </button>
                      )}
                      
                      {!isAnswerSubmitted ? (
                        <button
                          onClick={handleAnswerSubmit}
                          disabled={selectedOption === null}
                          className={`px-6 py-2.5 rounded-xl font-extrabold text-sm shadow-md transition-all duration-150 cursor-pointer ${
                            selectedOption === null
                              ? "bg-slate-200 text-slate-400 shadow-none cursor-not-allowed"
                              : "bg-gradient-to-r from-joy-orange to-joy-coral text-white shadow-joy-orange/20 hover:shadow-lg hover:-translate-y-0.5"
                          }`}
                        >
                          Kirim Jawaban
                        </button>
                      ) : (
                        <button
                          onClick={handleNextQuestion}
                          className="px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-extrabold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 cursor-pointer inline-flex items-center gap-1"
                        >
                          {currentQuestionIndex === BANK_SOAL.length - 1 ? "Lihat Skor" : "Soal Berikutnya"}
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                  </div>

                </div>

                {/* Staggered Hint & Explanation view box */}
                <AnimatePresence>
                  {showHint && !isAnswerSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-joy-yellow/10 rounded-2xl border border-joy-yellow/30 text-xs text-joy-orange font-bold flex items-start gap-2.5"
                    >
                      <Sparkles className="w-4.5 h-4.5 shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-black uppercase tracking-wider text-[10px] mb-1">Petunjuk Pembelajaran:</span>
                        {currentQuestion.hint}
                      </div>
                    </motion.div>
                  )}

                  {showExplanation && isAnswerSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-slate-900 text-slate-100 rounded-[2rem] p-6 sm:p-8 space-y-4 shadow-xl border border-slate-800 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-5">
                        <UserCheck className="w-24 h-24 text-white" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <h4 className="text-xs font-black uppercase tracking-widest text-emerald-400">Pembahasan Langkah Demi Langkah</h4>
                      </div>

                      <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                        {currentQuestion.explanation.map((step, sIdx) => {
                          const isFormula = step.includes("=") || step.includes("×");
                          return (
                            <div key={sIdx} className="flex gap-2">
                              <span className="text-slate-500 font-mono select-none">{sIdx + 1}.</span>
                              <p className={isFormula ? "font-bold text-white font-mono bg-slate-800/40 px-2 py-0.5 rounded border border-slate-800/60 inline-block" : ""}>
                                {step}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zoomed Image Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImage(null)}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setZoomedImage(null)}
                className="absolute top-4 right-4 bg-slate-900/60 hover:bg-slate-900 text-white p-2 rounded-full cursor-pointer transition-colors z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={zoomedImage}
                alt="Catatan Diperbesar"
                className="max-w-full max-h-[80vh] object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white text-center border-t border-slate-100">
                <p className="text-sm font-bold text-slate-700">
                  {zoomedImage.includes("catatan_aljabar_1") ? "Halaman 1: Dasar Aljabar & Operasi Suku" : "Halaman 2: Mengubah Subjek Persamaan"}
                </p>
                <p className="text-xs text-slate-400 mt-1">Klik di luar gambar atau tombol silang untuk menutup</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
