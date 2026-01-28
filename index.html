
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, XCircle, ArrowLeft, History, Clock, LogOut, ChevronRight, Send, Maximize2, Minimize2, Loader2, Award, BookOpen, Newspaper, Stethoscope, Cpu, Briefcase, DollarSign, Leaf, AlertTriangle, User, Eye, Heart, Smile, Utensils, Coffee, MessageSquare, Handshake, Palette, Plane, Brain, Gavel, Search, Info, Sparkles, MessageCircle, Target
} from 'lucide-react';
import { THEMES } from './mockData';
import { Theme, Variant, UserState, ExamResult } from './types';
import { GoogleGenAI } from "@google/genai";

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
        placeholder="Ismingizni kiriting" 
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
      />
      <Button type="submit" className="w-full py-3 text-md flex items-center justify-center gap-2">
        Testni boshlash <ChevronRight size={18} />
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

const ExamInterface: React.FC<{ variant: Variant, themeId: string, onSubmit: (ans: any) => void, onBack: () => void }> = ({ variant, themeId, onSubmit, onBack }) => {
  const STORAGE_KEY = `odilxon_progress_${themeId}_${variant.id}`;

  const [step, setStep] = useState<number>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved).step || 1; } catch (e) { return 1; }
    }
    return 1;
  });

  const [ans, setAns] = useState<any>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { 
        const parsed = JSON.parse(saved);
        if (parsed.ans) return parsed.ans;
      } catch (e) {}
    }
    return {
      taskI: Array(variant.taskI.sentences.length).fill(''),
      taskII: Array(variant.taskII.items.length).fill(''),
      taskIII: Array(variant.taskIII.items.length).fill(''),
      taskIV: Array(variant.taskIV.comparisons.length).fill(''),
      taskV: Array(variant.taskV.words.length).fill('')
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ans, step }));
  }, [ans, step, STORAGE_KEY]);

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

  const handleFinalSubmit = () => {
    localStorage.removeItem(STORAGE_KEY);
    onSubmit(ans);
  };

  const currentProgress = (step / 5) * 100;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto px-4 py-8 min-h-screen">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-white tracking-tighter">{variant.title}</h1>
          <p className="text-blue-500 font-bold uppercase text-[9px] tracking-widest mt-1">Bosqich {step} / 5</p>
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
                 <h3 className="text-md md:text-lg font-black text-white">Task I: Bo'shliqlarni to'ldiring</h3>
                 <p className="text-slate-500 text-[10px] mt-1 uppercase font-bold tracking-wider">Pastdagi so'zlardan foydalaning</p>
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
                <h3 className="text-md md:text-lg font-black text-white">Task II: Ta'riflarni moslang</h3>
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
                <h3 className="text-md md:text-lg font-black text-white">Task III: Gaplar tuzing</h3>
              </div>
              <div className="grid gap-4">
                {variant.taskIII.items.map((item, i) => (
                  <div key={i} className="space-y-1">
                    <label className="text-blue-500 font-black uppercase text-[9px] tracking-widest px-2">{item}</label>
                    <textarea 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white h-16 focus:border-blue-500 outline-none transition-all text-xs md:text-sm"
                      placeholder="Gap yozing..."
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
                <h3 className="text-md md:text-lg font-black text-white">Task IV: Farqlarni tushuntiring</h3>
              </div>
              <div className="grid gap-4">
                {variant.taskIV.comparisons.map((comp, i) => (
                  <div key={i} className="space-y-1">
                    <label className="text-blue-500 font-black uppercase text-[9px] tracking-widest px-2">{comp.termA} vs {comp.termB}</label>
                    <textarea 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white h-20 focus:border-blue-500 outline-none transition-all text-xs md:text-sm"
                      placeholder="Farqini tushuntiring..."
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
                <h3 className="text-md md:text-lg font-black text-white">Task V: Ta'rif yozing</h3>
              </div>
              <div className="grid gap-4">
                {variant.taskV.words.map((word, i) => (
                  <div key={i} className="space-y-1">
                    <label className="text-blue-500 font-black uppercase text-[9px] tracking-widest px-2">{word}</label>
                    <textarea 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white h-16 focus:border-blue-500 outline-none transition-all text-xs md:text-sm"
                      placeholder="So'z ta'rifini yozing..."
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
            <Button variant="secondary" onClick={onBack} className="text-xs px-4">Bekor qilish</Button>
          ) : (
            <Button variant="secondary" onClick={() => setStep((s: number) => s - 1)} className="text-xs px-4">Orqaga</Button>
          )}
          {step < 5 ? (
            <Button onClick={() => { setStep((s: number) => s + 1); window.scrollTo(0,0); }} className="text-xs px-6">Keyingisi <ChevronRight size={14} className="ml-1 inline"/></Button>
          ) : (
            <Button onClick={handleFinalSubmit} className="text-xs bg-green-600 hover:bg-green-500">Tugatish</Button>
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
  const [isEvaluating, setIsEvaluating] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('odilxon_user');
    if (savedUser) {
      try { setUser(JSON.parse(savedUser)); } catch (e) {}
    }
    setLoading(false);
  }, []);

  const handleLogin = (name: string) => {
    const newUser = { name, history: [] };
    setUser(newUser);
    localStorage.setItem('odilxon_user', JSON.stringify(newUser));
  };

  const evaluateQualitativeDetailed = async (taskLabel: string, questions: string[], answers: string[]) => {
    try {
      const ai = new GoogleGenAI({ apiKey: (process.env.API_KEY as string) });
      const prompt = `Student responses for ${taskLabel}. Questions: ${questions.join(", ")}. Answers: ${answers.join(", ")}. 
      Evaluate 0-100, feedback, and suggestion. JSON format: { "results": [{ "score": number, "feedback": "string", "suggestion": "string" }] }`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: { responseMimeType: "application/json" }
      });
      return JSON.parse(response.text || '{"results":[]}').results;
    } catch (e) {
      return questions.map(() => ({ score: 50, feedback: "Error during AI evaluation", suggestion: "N/A" }));
    }
  };

  const submitExam = async (ans: any) => {
    if (!selectedVariant || !selectedTheme || !user) return;
    setIsEvaluating(true);

    try {
      let t1 = 0, t2 = 0;
      selectedVariant.taskI.sentences.forEach((s, i) => {
        if (ans.taskI[i]?.toLowerCase().trim() === s.answer.toLowerCase()) t1++;
      });
      selectedVariant.taskII.items.forEach((item, i) => {
        if (ans.taskII[i]?.toLowerCase().trim() === item.key.toLowerCase()) t2++;
      });

      const [t3Res, t4Res, t5Res] = await Promise.all([
        evaluateQualitativeDetailed("Creative Synthesis", selectedVariant.taskIII.items, ans.taskIII),
        evaluateQualitativeDetailed("Semantic Nuance", selectedVariant.taskIV.comparisons.map(c => `${c.termA} vs ${c.termB}`), ans.taskIV),
        evaluateQualitativeDetailed("Lexical Rigor", selectedVariant.taskV.words, ans.taskV)
      ]);

      const breakdown = {
        taskI: t1,
        taskII: t2,
        taskIII: Math.round(t3Res.reduce((a: number, b: any) => a + (b.score || 0), 0) / (t3Res.length || 1) / 10 * 0.8),
        taskIV: Math.round(t4Res.reduce((a: number, b: any) => a + (b.score || 0), 0) / (t4Res.length || 1) / 10 * 0.6),
        taskV: Math.round(t5Res.reduce((a: number, b: any) => a + (b.score || 0), 0) / (t5Res.length || 1) / 10 * 1.0)
      };

      const score = Object.values(breakdown).reduce((a, b) => a + b, 0);
      const result: ExamResult = {
        id: Math.random().toString(36).substr(2, 9),
        themeId: selectedTheme.id,
        variantId: selectedVariant.id,
        score,
        maxScore: selectedVariant.taskI.sentences.length + selectedVariant.taskII.items.length + 8 + 6 + 10,
        date: new Date().toLocaleString(),
        breakdown
      };

      const updated = { ...user, history: [result, ...user.history] };
      setUser(updated);
      localStorage.setItem('odilxon_user', JSON.stringify(updated));
      setLastResult(result);
      setView('results');
    } finally {
      setIsEvaluating(false);
    }
  };

  if (loading) return null;

  if (!user) return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#020617]">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass p-8 rounded-3xl w-full max-w-sm border border-white/10 text-center shadow-2xl">
        <h1 className="text-3xl font-black text-white mb-1 tracking-tighter">Odilxon Dev</h1>
        <p className="text-slate-500 font-bold uppercase text-[9px] tracking-widest mb-8">Assessment Portal</p>
        <LoginForm onLogin={handleLogin} />
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      <AnimatePresence>
        {isEvaluating && (
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/90 z-[200]">
            <Loader2 className="animate-spin text-blue-500 mb-4" size={50} />
            <h2 className="text-xl font-bold">Natijalarni tahlil qilish...</h2>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {view === 'dashboard' && (
          <motion.div key="dash" className="max-w-6xl mx-auto px-4 py-8">
            <header className="flex justify-between items-center mb-10">
              <h1 className="text-3xl font-black text-white">Odilxon Dev</h1>
              <Button variant="secondary" onClick={() => { localStorage.clear(); setUser(null); }} className="text-xs">Chiqish</Button>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {THEMES.map(theme => {
                const Icon = ICON_MAP[theme.icon] || Award;
                const hasSession = theme.variants.some(v => localStorage.getItem(`odilxon_progress_${theme.id}_${v.id}`));
                return (
                  <div key={theme.id} onClick={() => { setSelectedTheme(theme); setView('variants'); }} className={`glass p-5 rounded-3xl border ${hasSession ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'border-white/5'} cursor-pointer hover:bg-white/5 transition-all`}>
                    <div className="flex justify-between mb-4">
                      <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><Icon size={20}/></div>
                      {hasSession && <span className="text-[8px] font-bold bg-blue-500 px-2 py-0.5 rounded-full animate-pulse">Davom ettirish</span>}
                    </div>
                    <h3 className="font-bold text-white mb-1">{theme.title}</h3>
                    <p className="text-slate-500 text-xs">{theme.description}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {view === 'variants' && (
          <motion.div key="vars" className="max-w-2xl mx-auto px-4 py-12">
            <Button variant="ghost" onClick={() => setView('dashboard')} className="mb-6"><ArrowLeft size={16}/> Orqaga</Button>
            <h1 className="text-2xl font-black mb-8">{selectedTheme?.title}</h1>
            <div className="grid grid-cols-3 gap-4">
              {selectedTheme?.variants.map(v => {
                const variantInProgress = localStorage.getItem(`odilxon_progress_${selectedTheme.id}_${v.id}`);
                return (
                  <div key={v.id} onClick={() => { setSelectedVariant(v); setView('exam'); }} className={`glass p-6 rounded-2xl text-center cursor-pointer border ${variantInProgress ? 'border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.1)]' : 'border-white/5'}`}>
                    <div className="text-xl font-black text-blue-400 mb-1">{v.id}</div>
                    <p className="text-[8px] uppercase font-bold text-slate-500">{variantInProgress ? 'Saqlangan' : 'Variant'}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {view === 'exam' && selectedVariant && selectedTheme && (
          <ExamInterface variant={selectedVariant} themeId={selectedTheme.id} onSubmit={submitExam} onBack={() => setView('variants')} />
        )}

        {view === 'results' && lastResult && (
          <motion.div key="results" className="max-w-2xl mx-auto px-4 py-12">
            <div className="glass p-10 rounded-[2rem] text-center border border-white/10">
              <h2 className="text-5xl font-black mb-4">{Math.round((lastResult.score / lastResult.maxScore) * 100)}%</h2>
              <p className="text-slate-500 mb-8 uppercase font-bold text-xs">Ball: {lastResult.score} / {lastResult.maxScore}</p>
              <Button onClick={() => setView('dashboard')} className="w-full">Asosiy sahifa</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
