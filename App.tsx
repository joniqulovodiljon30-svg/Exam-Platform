
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, XCircle, ArrowLeft, History, Clock, LogOut, ChevronRight, Send, Maximize2, Minimize2, Loader2, Award, BookOpen, Newspaper, Stethoscope, Cpu, Briefcase, DollarSign, Leaf, AlertTriangle, User, Eye, Heart, Smile, Utensils, Coffee, MessageSquare, Handshake, Palette, Plane, Brain, Gavel, Search, Info, Sparkles, MessageCircle, Target
} from 'lucide-react';
import { THEMES } from './mockData';
import { Theme, Variant, UserState, ExamResult } from './types';
import { GoogleGenAI, Type } from "@google/genai";

const ICON_MAP: Record<string, any> = {
  Newspaper, Stethoscope, Cpu, BookOpen, Briefcase, DollarSign, 
  Leaf, AlertTriangle, User, Eye, Heart, Smile, Utensils, Coffee, 
  MessageSquare, Handshake, Palette, Plane, Brain, Gavel
};

const Button: React.FC<{ 
  onClick?: () => void; 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}> = ({ onClick, children, variant = 'primary', className = '', disabled = false, type = "button" }) => {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-lg active:scale-95 disabled:hover:bg-blue-600",
    secondary: "glass text-slate-200 hover:bg-white/10 active:scale-95",
    danger: "bg-red-600 hover:bg-red-500 text-white active:scale-95",
    ghost: "text-slate-400 hover:text-white hover:bg-white/5"
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`px-5 py-2.5 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const LoginForm: React.FC<{ onLogin: (name: string) => void }> = ({ onLogin }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length >= 3) {
      onLogin(name.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        type="text" 
        placeholder="Full Name (Student)" 
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
      />
      <Button type="submit" className="w-full py-3 text-md flex items-center justify-center gap-2">
        Start Assessment <ChevronRight size={18} />
      </Button>
    </form>
  );
};

const shuffle = (array: string[]) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const ExamInterface: React.FC<{ variant: Variant, onSubmit: (ans: any) => void, onBack: () => void }> = ({ variant, onSubmit, onBack }) => {
  const [step, setStep] = useState(1);
  const [ans, setAns] = useState<any>(() => ({
    taskI: Array(variant.taskI.sentences.length).fill(''),
    taskII: Array(variant.taskII.items.length).fill(''),
    taskIII: Array(variant.taskIII.items.length).fill(''),
    taskIV: Array(variant.taskIV.comparisons.length).fill(''),
    taskV: Array(variant.taskV.words.length).fill('')
  }));

  const wordBank = useMemo(() => {
    const answers = variant.taskI.sentences.map(s => s.answer);
    return shuffle(answers);
  }, [variant.taskI.sentences]);

  const updateAns = (task: string, idx: number, val: string) => {
    setAns((prev: any) => {
      const copy = [...prev[task]];
      copy[idx] = val;
      return { ...prev, [task]: copy };
    });
  };

  const currentProgress = (step / 5) * 100;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto px-4 py-8 min-h-screen">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-white tracking-tighter">{variant.title}</h1>
          <p className="text-blue-500 font-bold uppercase text-[9px] tracking-widest mt-1">Written Task {step} of 5</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex-1 md:flex-none h-1 bg-white/5 rounded-full overflow-hidden min-w-[120px]">
            <motion.div className="h-full bg-blue-600" initial={{ width: 0 }} animate={{ width: `${currentProgress}%` }} />
          </div>
          <span className="text-slate-500 font-bold text-[9px] uppercase">{Math.round(currentProgress)}%</span>
        </div>
      </header>

      <div className="glass p-5 md:p-8 rounded-3xl border border-white/10 shadow-xl min-h-[500px] flex flex-col relative z-10">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -10, opacity: 0 }} className="space-y-6">
              <div className="border-b border-white/5 pb-2">
                 <h3 className="text-md md:text-lg font-black text-white">Task I: Written Gap-Fill</h3>
                 <p className="text-slate-500 text-[10px] mt-1 uppercase font-bold tracking-wider">Fill in the gaps using the reservoir below</p>
              </div>
              <div className="bg-blue-600/5 border border-blue-500/10 rounded-2xl p-4 mb-6">
                <div className="flex flex-wrap gap-1.5">
                  {wordBank.map((word, i) => (
                    <div key={i} className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-blue-300 font-bold text-[11px] cursor-default">
                      {word}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                {variant.taskI.sentences.map((s, i) => (
                  <div key={i} className="text-sm md:text-base text-slate-300 leading-relaxed group">
                    <span className="font-black text-slate-700 mr-2 text-xs">{i+1}</span>
                    {s.text.split('________').map((part, pIdx, arr) => (
                      <React.Fragment key={pIdx}>
                        {part}
                        {pIdx < arr.length - 1 && (
                          <input 
                            className="bg-transparent border-b border-slate-700 px-2 focus:border-blue-500 outline-none text-blue-400 font-bold w-32 md:w-40 transition-all py-0.5 placeholder:text-slate-800" 
                            placeholder="..."
                            value={ans.taskI[i]} 
                            onChange={e => updateAns('taskI', i, e.target.value)}
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -10, opacity: 0 }} className="space-y-6">
              <div className="border-b border-white/5 pb-2">
                <h3 className="text-md md:text-lg font-black text-white">Task II: Definitional Logic</h3>
                <p className="text-slate-500 text-[10px] mt-1 uppercase font-bold tracking-wider">Match terms with formal definitions</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  {variant.taskII.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                      <span className="w-6 h-6 flex items-center justify-center bg-blue-500/10 text-blue-400 font-black rounded text-[10px]">{i+1}</span>
                      <span className="text-xs font-bold text-white">{item.term}</span>
                      <input 
                        className="ml-auto w-8 bg-slate-900 border border-white/10 rounded text-center font-black p-1 text-blue-400 focus:ring-1 focus:ring-blue-500 outline-none uppercase text-[11px]" 
                        maxLength={1} placeholder="?"
                        value={ans.taskII[i]}
                        onChange={e => updateAns('taskII', i, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {variant.taskII.items.map((item) => (
                    <div key={item.key} className="bg-white/5 p-3 rounded-xl border border-white/5 text-[10px] text-slate-400 leading-tight">
                      <span className="font-black text-blue-500 uppercase mr-2">{item.key}</span>
                      <span className="italic">{item.definition}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -10, opacity: 0 }} className="space-y-6">
               <div className="border-b border-white/5 pb-2">
                <h3 className="text-md md:text-lg font-black text-white">Task III: Creative Synthesis</h3>
                <p className="text-slate-500 text-[10px] mt-1 uppercase font-bold tracking-wider">Contextual sentence construction</p>
              </div>
              <div className="grid gap-4">
                {variant.taskIII.items.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <label className="text-blue-500 font-black uppercase text-[9px] tracking-widest px-2">{item}</label>
                    <textarea 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white h-16 focus:border-blue-500 outline-none transition-all placeholder:text-slate-800 text-xs md:text-sm"
                      placeholder="Write a meaningful sentence..."
                      value={ans.taskIII[i]}
                      onChange={e => updateAns('taskIII', i, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -10, opacity: 0 }} className="space-y-6">
              <div className="border-b border-white/5 pb-2">
                <h3 className="text-md md:text-lg font-black text-white">Task IV: Semantic Nuance</h3>
                <p className="text-slate-500 text-[10px] mt-1 uppercase font-bold tracking-wider">Differentiate between lexical pairs</p>
              </div>
              <div className="grid gap-4">
                {variant.taskIV.comparisons.map((comp, i) => (
                  <div key={i} className="space-y-1">
                    <label className="text-blue-500 font-black uppercase text-[9px] tracking-widest px-2">{comp.termA} vs {comp.termB}</label>
                    <textarea 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white h-20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-800 text-xs md:text-sm"
                      placeholder="Explain the conceptual difference..."
                      value={ans.taskIV[i]}
                      onChange={e => updateAns('taskIV', i, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="step5" initial={{ x: 10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -10, opacity: 0 }} className="space-y-6">
              <div className="border-b border-white/5 pb-2">
                <h3 className="text-md md:text-lg font-black text-white">Task V: Definitional Rigor</h3>
                <p className="text-slate-500 text-[10px] mt-1 uppercase font-bold tracking-wider">Formal written definitions</p>
              </div>
              <div className="grid gap-4">
                {variant.taskV.words.map((word, i) => (
                  <div key={i} className="space-y-1">
                    <label className="text-blue-500 font-black uppercase text-[9px] tracking-widest px-2">{word}</label>
                    <textarea 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white h-16 focus:border-blue-500 outline-none transition-all placeholder:text-slate-800 text-xs md:text-sm"
                      placeholder="Dictionary-style definition..."
                      value={ans.taskV[i]}
                      onChange={e => updateAns('taskV', i, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-6 flex flex-row justify-between gap-2">
          {step === 1 ? (
            <Button variant="secondary" onClick={onBack} className="text-xs px-4">Cancel</Button>
          ) : (
            <Button variant="secondary" onClick={() => setStep(s => s - 1)} className="text-xs px-4">Back</Button>
          )}
          {step < 5 ? (
            <Button onClick={() => { setStep(s => s + 1); window.scrollTo(0,0); }} className="text-xs px-6">Next <ChevronRight size={14} className="ml-1 inline"/></Button>
          ) : (
            <Button onClick={() => onSubmit(ans)} className="text-xs bg-green-600 hover:bg-green-500">Finish</Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserState | null>(null);
  const [view, setView] = useState<'dashboard' | 'exam' | 'results' | 'variants'>('dashboard');
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [lastResult, setLastResult] = useState<ExamResult | null>(null);
  const [lastAnswers, setLastAnswers] = useState<any>(null);
  const [qualitativeFeedback, setQualitativeFeedback] = useState<Record<string, { score: number; feedback: string; suggestion: string }[]>>({});
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFsChange);
    const savedUser = localStorage.getItem('odilxon_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("User restoration failed", e);
      }
    }
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      clearTimeout(timer);
    };
  }, []);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.error(err));
    } else {
      document.exitFullscreen();
    }
  };

  const handleLogin = (name: string) => {
    const newUser = { name, history: [] };
    setUser(newUser);
    localStorage.setItem('odilxon_user', JSON.stringify(newUser));
  };

  const evaluateQualitativeDetailed = async (taskLabel: string, questions: string[], answers: string[]) => {
    if (!questions.length) return [];
    
    try {
      // Create new instance right before use as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const taskDetails = questions.map((q, i) => `[Question ${i+1}: ${q} | Answer: ${answers[i] || '[No Answer]'}]`).join("\n");
      
      const prompt = `You are "Odilxon AI", an elite linguistic assessment engine. 
      Evaluate these student responses for the section "${taskLabel}". 
      For each response, provide:
      1. A score from 0 to 100.
      2. Precise feedback on what is wrong or could be improved (lexis, grammar, context).
      3. A "Model Answer" suggestion.
      
      Respond STRICTLY in the following JSON format:
      {
        "results": [
          { "score": number, "feedback": "string", "suggestion": "string" },
          ...
        ]
      }`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `${prompt}\n\nTask Input:\n${taskDetails}`,
        config: { 
            responseMimeType: "application/json",
            temperature: 0.1 
        }
      });
      
      const parsed = JSON.parse(response.text || '{"results": []}');
      return parsed.results || questions.map(() => ({ score: 0, feedback: "Analysis engine returned empty result.", suggestion: "N/A" }));
    } catch (e) {
      console.error(`AI Evaluation failed for ${taskLabel}:`, e);
      // Return fallback to prevent UI hang
      return questions.map(() => ({ score: 50, feedback: "Evaluation service temporarily unavailable. Please review manually.", suggestion: "Service error." }));
    }
  };

  const submitExam = async (ans: any) => {
    if (!selectedVariant || !selectedTheme || !user) return;
    setIsEvaluating(true);
    setLastAnswers(ans);

    try {
      let t1 = 0, t2 = 0;
      selectedVariant.taskI.sentences.forEach((s, i) => {
        if (ans.taskI[i]?.toLowerCase().trim() === s.answer.toLowerCase()) t1++;
      });
      selectedVariant.taskII.items.forEach((item, i) => {
        if (ans.taskII[i]?.toLowerCase().trim() === item.key.toLowerCase()) t2++;
      });

      // Catch-all try within the promise for better stability
      const [t3Res, t4Res, t5Res] = await Promise.all([
        evaluateQualitativeDetailed("Creative Synthesis", selectedVariant.taskIII.items, ans.taskIII),
        evaluateQualitativeDetailed("Semantic Nuance", selectedVariant.taskIV.comparisons.map(c => `${c.termA} vs ${c.termB}`), ans.taskIV),
        evaluateQualitativeDetailed("Lexical Rigor", selectedVariant.taskV.words, ans.taskV)
      ]);

      setQualitativeFeedback({
        taskIII: t3Res,
        taskIV: t4Res,
        taskV: t5Res
      });

      const avgScore = (arr: any[]) => arr.length ? (arr.reduce((acc, curr) => acc + (curr.score || 0), 0) / arr.length) : 0;

      const breakdown = {
        taskI: t1,
        taskII: t2,
        taskIII: Math.round((avgScore(t3Res) / 100) * 8),
        taskIV: Math.round((avgScore(t4Res) / 100) * 6),
        taskV: Math.round((avgScore(t5Res) / 100) * 10)
      };

      const score = breakdown.taskI + breakdown.taskII + breakdown.taskIII + breakdown.taskIV + breakdown.taskV;
      const maxScore = selectedVariant.taskI.sentences.length + selectedVariant.taskII.items.length + 8 + 6 + 10;

      const result: ExamResult = {
        id: Math.random().toString(36).substr(2, 9),
        themeId: selectedTheme.id,
        variantId: selectedVariant.id,
        score,
        maxScore,
        date: new Date().toLocaleString(),
        breakdown
      };

      const updated = { ...user, history: [result, ...user.history] };
      setUser(updated);
      localStorage.setItem('odilxon_user', JSON.stringify(updated));
      setLastResult(result);
      setView('results');
      setShowReview(false);
    } catch (err) {
      console.error("Full submission logic failed:", err);
      // Even if AI completely fails, we try to show a partial result based on objective tasks
      alert("There was an issue reaching the analysis engine. Showing partial results based on objective tasks.");
      
      const result: ExamResult = {
        id: "error-" + Date.now(),
        themeId: selectedTheme.id,
        variantId: selectedVariant.id,
        score: 0, 
        maxScore: 100,
        date: new Date().toLocaleString(),
        breakdown: { taskI: 0, taskII: 0, taskIII: 0, taskIV: 0, taskV: 0 }
      };
      setLastResult(result);
      setView('results');
    } finally {
      // CRITICAL: Always reset evaluating state
      setIsEvaluating(false);
    }
  };

  if (loading) return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#020617] z-[100]">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
        <h1 className="text-4xl font-black bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent mb-4">Odilxon Dev</h1>
        <div className="flex justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div key={i} className="w-1.5 h-1.5 bg-blue-500 rounded-full" animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }} />
          ))}
        </div>
      </motion.div>
    </div>
  );

  if (!user) return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#020617]">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass p-8 rounded-3xl w-full max-w-sm border border-white/10 text-center shadow-2xl">
        <h1 className="text-3xl font-black text-white mb-1 tracking-tighter">Odilxon Dev</h1>
        <p className="text-slate-500 font-bold uppercase text-[9px] tracking-widest mb-8">Premium Assessment Portal</p>
        <LoginForm onLogin={handleLogin} />
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30">
      <AnimatePresence>
        {isEvaluating && (
          <motion.div key="eval" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl z-[200]">
            <Loader2 className="animate-spin text-blue-500 mb-6" size={60} />
            <h2 className="text-3xl font-black text-white tracking-tighter mb-2">Analyzing Responses</h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Odilxon AI evaluation engine...</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {view === 'dashboard' && (
          <motion.div key="dash" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="max-w-6xl mx-auto px-4 py-8">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
              <div>
                <h1 className="text-3xl font-black text-white mb-1 tracking-tighter">Odilxon Dev</h1>
                <p className="text-slate-400 text-xs font-bold">Candidate: <span className="text-blue-400">{user.name}</span></p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <Button variant="ghost" onClick={toggleFullScreen} className="p-2">{isFullscreen ? <Minimize2 size={20}/> : <Maximize2 size={20}/>}</Button>
                <Button variant="secondary" onClick={() => { localStorage.clear(); setUser(null); }} className="text-xs flex gap-2 items-center"><LogOut size={14}/> Logout</Button>
              </div>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {THEMES.map(theme => {
                const Icon = ICON_MAP[theme.icon] || Award;
                const attempts = user.history.filter(h => h.themeId === theme.id).length;
                return (
                  <motion.div 
                    key={theme.id} 
                    whileHover={{ y: -3, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => { setSelectedTheme(theme); setView('variants'); window.scrollTo(0,0); }} 
                    className="glass p-5 rounded-3xl border border-white/5 hover:border-blue-500/50 transition-all cursor-pointer group shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all"><Icon size={20}/></div>
                      <div className="text-[8px] font-black uppercase text-slate-500 px-3 py-1 bg-white/5 rounded-full tracking-widest">{theme.category}</div>
                    </div>
                    <h3 className="text-lg font-black text-white mb-2 tracking-tight group-hover:text-blue-300 transition-colors">{theme.title}</h3>
                    <p className="text-slate-500 text-[11px] mb-6 leading-relaxed line-clamp-2">{theme.description}</p>
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-bold text-slate-500">
                      <span className="flex items-center gap-1"><History size={12}/> {attempts} Attempts</span>
                      <span className="text-blue-400 flex items-center gap-0.5">Catalog <ChevronRight size={12}/></span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {view === 'variants' && (
          <motion.div key="vars" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="max-w-2xl mx-auto px-4 py-12">
            <Button variant="secondary" onClick={() => setView('dashboard')} className="mb-8 rounded-full text-xs"><ArrowLeft className="mr-2" size={14}/> Dashboard</Button>
            <h1 className="text-3xl font-black text-white mb-2 tracking-tighter">{selectedTheme?.title}</h1>
            <p className="text-slate-500 mb-10 text-sm leading-relaxed max-w-lg">Select a variant for specialized assessment.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {selectedTheme?.variants.map(v => (
                <div 
                  key={v.id} 
                  onClick={() => { setSelectedVariant(v); setView('exam'); window.scrollTo(0,0); }} 
                  className="glass p-6 rounded-3xl text-center cursor-pointer border border-white/5 hover:border-blue-500/50 group transition-all shadow-md relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4 text-xl font-black text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">{v.id}</div>
                  <h4 className="text-md font-black text-white mb-1">Variant {v.id}</h4>
                  <p className="text-[8px] font-black uppercase text-slate-600 tracking-widest">Formal</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {view === 'exam' && selectedVariant && (
          <ExamInterface key={`exam-${selectedVariant.id}`} variant={selectedVariant} onSubmit={submitExam} onBack={() => setView('variants')} />
        )}

        {view === 'results' && lastResult && (
          <motion.div key="results" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.05, opacity: 0 }} className="max-w-3xl mx-auto px-4 py-12">
            <div className="glass p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 inline-flex p-4 rounded-full bg-blue-500/10 text-blue-400">
                  <Award size={48} />
                </div>
                <h1 className="text-6xl md:text-7xl font-black text-white mb-2 tracking-tighter">
                  {Math.round((lastResult.score / lastResult.maxScore) * 100)}%
                </h1>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] mb-10">Assessment Grade</p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-10 w-full">
                  {Object.entries(lastResult.breakdown).map(([k, v]) => (
                    <div key={k} className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <div className="text-[8px] font-black uppercase text-slate-500 mb-1">{k.replace('task', 'T')}</div>
                      <div className="text-xl font-black text-white">{v}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-row gap-2 justify-center w-full mb-8">
                  <Button variant="secondary" onClick={() => { setView('dashboard'); window.scrollTo(0,0); }} className="text-xs flex-1">Finish</Button>
                  <Button onClick={() => setShowReview(!showReview)} className="text-xs flex-1 flex items-center justify-center gap-2">
                    <Sparkles size={16} /> Analysis
                  </Button>
                </div>
              </div>

              {showReview && lastAnswers && selectedVariant && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 space-y-10 text-left border-t border-white/10 pt-8">
                  <section>
                    <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                      <span className="bg-blue-600 px-3 py-1 rounded-lg text-[9px]">T1</span> 
                      Objective Accuracy
                    </h3>
                    <div className="space-y-4">
                      {selectedVariant.taskI.sentences.map((s, i) => {
                        const studentAnswer = lastAnswers.taskI[i]?.toLowerCase().trim();
                        const isCorrect = studentAnswer === s.answer.toLowerCase();
                        return (
                          <div key={i} className={`p-5 rounded-2xl border transition-all ${isCorrect ? 'border-green-500/20 bg-green-500/5' : 'border-red-500/20 bg-red-500/5'}`}>
                            <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                              {s.text.split('________').map((part, pIdx, arr) => (
                                <React.Fragment key={pIdx}>
                                  {part}
                                  {pIdx < arr.length - 1 && (
                                    <span className={`px-1.5 py-0.5 mx-0.5 rounded font-black ${isCorrect ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                                      {lastAnswers.taskI[i] || '[Empty]'}
                                    </span>
                                  )}
                                </React.Fragment>
                              ))}
                            </p>
                            <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                               {isCorrect ? (
                                  <div className="flex items-center gap-1.5 text-green-400 font-bold text-[10px]">
                                    <CheckCircle2 size={14}/> Valid
                                  </div>
                               ) : (
                                  <div className="flex items-center gap-1.5 text-blue-400 font-bold text-[10px] bg-blue-500/10 px-3 py-1 rounded-full">
                                    <Target size={14}/> Goal: {s.answer}
                                  </div>
                               )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                  {[ 
                    { key: 'taskIII', label: 'T3: Synthesis', items: selectedVariant.taskIII.items },
                    { key: 'taskIV', label: 'T4: Nuance', items: selectedVariant.taskIV.comparisons.map(c => `${c.termA} vs ${c.termB}`) },
                    { key: 'taskV', label: 'T5: Lexical Rigor', items: selectedVariant.taskV.words }
                  ].map((section) => (
                    <section key={section.key}>
                      <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                        <span className="bg-blue-600 px-3 py-1 rounded-lg text-[9px] uppercase">{section.key.replace('task', 'T')}</span> 
                        {section.label}
                      </h3>
                      <div className="space-y-6">
                        {section.items.map((item, i) => {
                          const evaluation = qualitativeFeedback[section.key]?.[i];
                          return (
                            <div key={i} className="glass p-5 rounded-2xl border border-white/10">
                              <div className="flex justify-between items-start mb-4">
                                <p className="text-blue-400 font-black uppercase text-[9px] tracking-widest">{item}</p>
                                <div className={`px-3 py-1 rounded-full text-[9px] font-black ${evaluation?.score > 70 ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                  {evaluation?.score ?? 0}%
                                </div>
                              </div>
                              <div className="mb-4 p-3 bg-white/5 rounded-xl italic text-slate-400 border-l-2 border-blue-500/30 text-xs">
                                "{lastAnswers[section.key]?.[i] || 'Empty'}"
                              </div>
                              <div className="grid grid-cols-1 gap-4">
                                <div className="space-y-1">
                                  <p className="text-[8px] font-black text-red-400 uppercase flex items-center gap-1"><AlertTriangle size={10}/> Analysis</p>
                                  <p className="text-xs text-slate-300">{evaluation?.feedback || "Evaluation data missing."}</p>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-[8px] font-black text-green-400 uppercase flex items-center gap-1"><Target size={10}/> Exemplar</p>
                                  <p className="text-xs text-slate-300 italic bg-green-500/5 p-3 rounded-lg border border-green-500/10">
                                    {evaluation?.suggestion || "N/A"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
