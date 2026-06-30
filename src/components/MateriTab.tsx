import { useState } from "react";
import { ChevronDown, ChevronRight, Calculator, CheckCircle2, XCircle, RefreshCw, BookOpen, Sparkles, Layers, Variable, Shuffle, LineChart, Scale, Network, Download, ExternalLink, Eye, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { materialsData } from "../data";
import { MaterialItem } from "../types";
import ebookPdf from "../assets/pdf/Buku Eka Silviana.pdf";

export default function MateriTab() {
  // Track state of PDF Reader
  const [isReaderExpanded, setIsReaderExpanded] = useState(false);

  // Store expanded state of each item independently
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "pola-bilangan": true, // open the first by default for a friendly onboarding feel
  });

  // Track quiz answers
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  const toggleAccordion = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelectOption = (quizId: string, optionIndex: number) => {
    if (revealedAnswers[quizId]) return; // locked once checked
    setSelectedAnswers((prev) => ({
      ...prev,
      [quizId]: optionIndex,
    }));
  };

  const handleCheckAnswer = (quizId: string) => {
    setRevealedAnswers((prev) => ({
      ...prev,
      [quizId]: true,
    }));
  };

  const handleResetQuiz = (quizId: string) => {
    setSelectedAnswers((prev) => {
      const copy = { ...prev };
      delete copy[quizId];
      return copy;
    });
    setRevealedAnswers((prev) => {
      const copy = { ...prev };
      delete copy[quizId];
      return copy;
    });
  };

  return (
    <div id="alg-materi-tab" className="relative w-full max-w-3xl mx-auto px-4 py-8">
      {/* Tab intro badge */}
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-5 h-5 text-indigo-500" />
        <h2 className="text-xl font-display font-semibold text-slate-800">
          Daftar Modul Pembelajaran
        </h2>
        <span className="text-xs bg-indigo-50 text-indigo-600 px-2.5 py-0.5 rounded-full font-medium border border-indigo-100">
          6 Topik Utama
        </span>
      </div>

      {/* Featured PDF E-Book Section */}
      <div className="mb-8 p-6 sm:p-8 rounded-[3rem] bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 text-white border-4 border-indigo-200/20 shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute right-[-10%] top-[-10%] w-[40vw] h-[40vw] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute left-[-5%] bottom-[-5%] w-[30vw] h-[30vw] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute right-4 top-4 opacity-10">
          <BookOpen className="w-48 h-48" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          {/* Mockup Book Cover */}
          <div className="w-36 h-48 sm:w-44 sm:h-56 bg-gradient-to-tr from-indigo-700 via-purple-600 to-joy-orange rounded-xl shadow-xl flex-shrink-0 flex flex-col justify-between p-4 border border-white/20 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-3 h-full bg-black/10 backdrop-blur-xs" />
            <div className="absolute right-0 top-0 w-12 h-12 bg-white/10 rounded-full blur-md" />
            <div className="text-right">
              <span className="text-[9px] font-bold font-mono tracking-widest text-white/70 uppercase">
                EDISI UTAMA
              </span>
            </div>
            <div className="my-auto pl-2">
              <h4 className="text-base sm:text-lg font-black font-display text-white leading-tight tracking-tight">
                Matematika <br />
                <span className="text-joy-yellow font-black">Aljabar & Suku</span>
              </h4>
              <p className="text-[10px] font-medium text-white/80 mt-1">E-Book Pembelajaran</p>
            </div>
            <div className="border-t border-white/20 pt-2 pl-2 flex justify-between items-center">
              <span className="text-[9px] font-semibold text-white/80 tracking-wide font-sans">
                Eka Silviana
              </span>
              <FileText className="w-3.5 h-3.5 text-joy-yellow" />
            </div>
          </div>

          {/* Book Details */}
          <div className="flex-grow text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/10 text-joy-yellow text-xs font-black rounded-full tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" /> E-Book Referensi
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Buku Pembelajaran Matematika
            </h3>
            <p className="text-indigo-200 mt-2 text-sm sm:text-base font-medium max-w-xl">
              Dapatkan pemahaman konsep aljabar secara mendalam melalui E-Book berkualitas tinggi karya <span className="text-white font-bold underline decoration-joy-yellow decoration-2 underline-offset-2">Eka Silviana</span>. Lengkap dengan penjelasan materi terstruktur, contoh latihan, dan rumus praktis.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
              <button
                type="button"
                onClick={() => setIsReaderExpanded(!isReaderExpanded)}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-joy-orange hover:bg-orange-500 text-white font-extrabold text-sm rounded-full shadow-lg hover:shadow-joy-orange/30 cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
              >
                {isReaderExpanded ? (
                  <>
                    Tutup E-Book
                    <ChevronDown className="w-4 h-4 rotate-180 transition-transform" />
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" />
                    Baca E-Book Interaktif
                  </>
                )}
              </button>

              <a
                href={ebookPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm rounded-full cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4" />
                Buka di Tab Baru
              </a>

              <a
                href={ebookPdf}
                download="Buku Pembelajaran Matematika - Eka Silviana.pdf"
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-indigo-300 font-bold text-sm rounded-full cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                Unduh PDF
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Interactive PDF Reader Drawer */}
        <AnimatePresence>
          {isReaderExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="mt-6 pt-6 border-t border-white/10 overflow-hidden"
            >
              <div className="p-2 bg-slate-800/80 rounded-2xl border border-white/10">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/60 rounded-xl mb-2 text-xs text-slate-300 font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    Pembaca PDF Interaktif Terintegrasi
                  </span>
                  <span>Buku Eka Silviana.pdf</span>
                </div>
                
                {/* Fallback & Embed Container */}
                <div className="relative w-full h-[550px] sm:h-[650px] rounded-xl overflow-hidden bg-slate-950 flex flex-col justify-center items-center">
                  <iframe
                    src={`${ebookPdf}#toolbar=1`}
                    className="w-full h-full border-none rounded-xl"
                    title="Buku Pembelajaran Matematika - Eka Silviana"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="text-center text-[11px] text-slate-400 mt-3 italic">
                  *Jika pembaca PDF tidak muncul secara otomatis di browsermu, silakan klik tombol <strong className="text-white">"Buka di Tab Baru"</strong> di atas.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Accordion List - Rich Background Container (Bubbly) */}
      <div className="p-5 sm:p-8 bg-white/60 backdrop-blur-2xl rounded-[3rem] border-4 border-white/90 shadow-2xl shadow-joy-orange/15 space-y-6">
        {materialsData.map((item: MaterialItem, index) => {
          const isExpanded = !!expandedIds[item.id];
          const hasQuiz = !!item.quiz;
          const quiz = item.quiz;
          const selectedOption = quiz ? selectedAnswers[quiz.id] : undefined;
          const isRevealed = quiz ? revealedAnswers[quiz.id] : false;

          let IconObj = BookOpen;
          let colorTheme = "text-indigo-500 bg-indigo-50/50 border-indigo-100/50";
          
          if (item.id === "pola-bilangan") { IconObj = Layers; colorTheme = "text-orange-500 bg-orange-50 border-orange-200/60"; }
          else if (item.id === "bentuk-aljabar") { IconObj = Variable; colorTheme = "text-purple-600 bg-purple-50 border-purple-200/60"; }
          else if (item.id === "sifat-operasi") { IconObj = Shuffle; colorTheme = "text-teal-600 bg-teal-50 border-teal-200/60"; }
          else if (item.id === "fungsi-aljabar") { IconObj = LineChart; colorTheme = "text-sky-500 bg-sky-50 border-sky-200/60"; }
          else if (item.id === "plsv-ptlsv") { IconObj = Scale; colorTheme = "text-amber-500 bg-amber-50 border-amber-200/60"; }
          else if (item.id === "spldv") { IconObj = Network; colorTheme = "text-pink-500 bg-pink-50 border-pink-200/60"; }

          return (
            <div
              key={item.id}
              id={`materi-item-${item.id}`}
              className={`group bg-white rounded-[2.5rem] border-2 transition-all duration-300 overflow-hidden ${isExpanded ? "border-joy-orange/60 shadow-[0_12px_30px_-10px_rgba(249,115,22,0.3)] ring-4 ring-joy-yellow/40 scale-[1.01]" : "border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-joy-yellow/80"}`}
            >
              {/* Header Trigger */}
              <button
                type="button"
                onClick={() => toggleAccordion(item.id)}
                className="w-full text-left px-6 py-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors group-hover:bg-joy-bg/50"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`hidden sm:flex p-4 rounded-2xl shadow-sm border-2 ${colorTheme}`}>
                    <IconObj className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-joy-orange to-joy-coral tracking-wider">
                        MODUL {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-joy-yellow" />
                      <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-400">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-800 group-hover:text-joy-orange transition-colors duration-200">
                      {item.title}
                    </h3>
                  </div>
                </div>
                
                {/* Arrow Icon */}
                <div className={`p-2.5 rounded-2xl transition-all duration-300 flex-shrink-0 ${
                  isExpanded ? "rotate-180 bg-joy-orange text-white shadow-inner" : "bg-slate-100 text-slate-400 group-hover:bg-joy-yellow group-hover:text-joy-orange shadow-sm"
                }`}>
                  <ChevronDown className="w-5 h-5 transition-transform duration-300 font-bold" />
                </div>
              </button>

              {/* Accordion Content Drawer */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-6 border-t border-slate-100 bg-slate-50/40">
                      {/* Short summary paragraph */}
                      <p className="mt-4 text-sm font-medium text-slate-700 italic border-l-3 border-indigo-400 pl-3.5 mb-5 py-0.5">
                        {item.shortDesc}
                      </p>

                      {/* Main Paragraphs */}
                      <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
                        {item.fullContent.map((paragraph, pIdx) => (
                          <p key={pIdx}>{paragraph}</p>
                        ))}
                      </div>

                      {/* Formula Card */}
                      <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-joy-orange to-joy-coral text-white shadow-lg shadow-joy-coral/30 relative overflow-hidden">
                        <div className="absolute right-0 bottom-0 opacity-15 transform translate-x-2 translate-y-2">
                          <Calculator className="w-28 h-28" />
                        </div>
                        <span className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-orange-100 uppercase mb-3">
                          <Sparkles className="w-4 h-4" /> Rumus Kunci
                        </span>
                        <p className="font-mono text-sm sm:text-base font-bold tracking-wide leading-relaxed bg-black/10 p-3.5 rounded-xl backdrop-blur-sm border border-white/10">
                          {item.formula}
                        </p>
                      </div>

                      {/* Worked Example */}
                      <div className="mt-6 p-4.5 rounded-xl border border-slate-200 bg-white shadow-xs">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">
                            Contoh Soal Pembahasan
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-slate-800 mb-3 leading-relaxed">
                          {item.example.question}
                        </p>
                        
                        {/* Step By Step List */}
                        <div className="space-y-2 mb-4 border-l-2 border-slate-100 pl-3 ml-1.5">
                          {item.example.stepByStep.map((step, sIdx) => (
                            <div key={sIdx} className="flex gap-2 text-xs sm:text-sm text-slate-500">
                              <span className="font-medium text-indigo-500">Langkah {sIdx + 1}:</span>
                              <span className="flex-1 text-slate-600">{step}</span>
                            </div>
                          ))}
                        </div>

                        {/* Result Highlight */}
                        <div className="py-3 px-4 rounded-xl bg-joy-bg border-2 border-joy-yellow text-slate-800 text-xs sm:text-sm font-mono font-bold flex items-center justify-between shadow-inner">
                          <span>Hasil Akhir:</span>
                          <span className="text-joy-orange text-base">{item.example.result}</span>
                        </div>
                      </div>

                      {/* Interactive Mini-Quiz section if available */}
                      {quiz && (
                        <div className="mt-6 pt-5 border-t border-slate-200/80">
                          <div className="flex items-center gap-1.5 mb-3.5">
                            <Sparkles className="w-4 h-4 text-amber-500" />
                            <h4 className="text-sm font-semibold text-slate-800">
                              Uji Pemahaman Kilat!
                            </h4>
                          </div>

                          <div className="p-4 rounded-xl border border-dashed border-slate-300 bg-white">
                            <p className="text-sm text-slate-700 font-medium mb-4 leading-relaxed">
                              {quiz.question}
                            </p>

                            {/* Options */}
                            <div className="space-y-2 mb-4">
                              {quiz.options.map((option, idx) => {
                                const isSelected = selectedOption === idx;
                                const isCorrect = quiz.correctAnswer === idx;

                                let optStyle = "border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700";
                                if (isSelected) {
                                  if (isRevealed) {
                                    optStyle = isCorrect
                                      ? "border-emerald-500 bg-emerald-50 text-emerald-800 font-medium"
                                      : "border-rose-500 bg-rose-50 text-rose-800";
                                  } else {
                                    optStyle = "border-indigo-500 bg-indigo-50/80 text-indigo-800 font-medium";
                                  }
                                } else if (isRevealed && isCorrect) {
                                  // Highlight the correct answer anyway if user selected wrong
                                  optStyle = "border-emerald-500 bg-emerald-50/50 text-emerald-700";
                                }

                                return (
                                  <button
                                    key={idx}
                                    type="button"
                                    onClick={() => handleSelectOption(quiz.id, idx)}
                                    disabled={isRevealed}
                                    className={`w-full text-left p-3 text-xs sm:text-sm rounded-lg border transition-all duration-200 flex items-center justify-between cursor-pointer ${optStyle}`}
                                  >
                                    <span className="flex-1">{option}</span>
                                    {isRevealed && isCorrect && <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0 ml-2" />}
                                    {isRevealed && isSelected && !isCorrect && <XCircle className="w-4.5 h-4.5 text-rose-500 flex-shrink-0 ml-2" />}
                                  </button>
                                );
                              })}
                            </div>

                            {/* Feedback & Actions */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                              {!isRevealed ? (
                                <button
                                  type="button"
                                  onClick={() => handleCheckAnswer(quiz.id)}
                                  disabled={selectedOption === undefined}
                                  className={`px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 shadow-sm cursor-pointer ${
                                    selectedOption === undefined
                                      ? "bg-slate-100 text-slate-400 border-2 border-slate-200 cursor-not-allowed"
                                      : "bg-joy-mint hover:bg-emerald-500 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 text-white border-2 border-emerald-500"
                                  }`}
                                >
                                  Periksa Jawaban
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => handleResetQuiz(quiz.id)}
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-joy-bg hover:bg-joy-yellow hover:text-joy-orange text-slate-600 rounded-xl transition-all duration-200 font-bold cursor-pointer border-2 border-joy-yellow/80 shadow-sm"
                                >
                                  <RefreshCw className="w-4 h-4" />
                                  Coba Lagi
                                </button>
                              )}

                              {isRevealed && (
                                <div className="text-xs text-slate-400 font-sans italic sm:text-right">
                                  {selectedOption === quiz.correctAnswer ? (
                                    <span className="text-emerald-600 font-semibold">Hebat! Jawabanmu Benar.</span>
                                  ) : (
                                    <span className="text-rose-500 font-semibold">Kurang Tepat, baca pembahasan!</span>
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Quiz explanation box */}
                            {isRevealed && (
                              <motion.div
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 p-3 rounded-lg bg-indigo-50/50 border border-indigo-100 text-xs text-indigo-900 leading-relaxed"
                              >
                                <strong>Penjelasan:</strong> {quiz.explanation}
                              </motion.div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
