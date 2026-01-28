
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
      className={`px-6 py-3 rounded-2xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <input 
        type="text" 
        placeholder="Full Name (Student)" 
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
      />
      <Button type="submit" className="w-full py-4 text-lg flex items-center justify-center gap-2">
        Start Assessment <ChevronRight size={20} />
      </Button>
    </form>
  );
};

// HELPER: Shuffle utility
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

  // Generate word bank for Task I
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto px-4 md:px-6 py-12 min-h-screen">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tighter">{variant.title}</h1>
          <p className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mt-1">Written Task {step} of 5</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="flex-1 md:flex-none h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5 min-w-[150px]">
            <motion.div className="h-full bg-blue-600" initial={{ width: 0 }} animate={{ width: `${currentProgress}%` }} />
          </div>
          <span className="text-slate-500 font-bold text-[10px] uppercase">{Math.round(currentProgress)}%</span>
        </div>
      </header>

      <div className="glass p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 shadow-3xl min-h-[600px] flex flex-col relative z-10">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-10">
              <div className="border-b border-white/5 pb-4">
                 <h3 className="text-lg md:text-xl font-black text-white">Task I: Written Gap-Fill</h3>
                 <p className="text-slate-500 text-xs mt-1 uppercase font-bold tracking-wider">Fill in the gaps using the words from the box below</p>
              </div>

              <div className="bg-blue-600/10 border border-blue-500/20 rounded-3xl p-6 mb-10">
                <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest mb-4">Word Reservoir (Choose Correct Items)</p>
                <div className="flex flex-wrap gap-2">
                  {wordBank.map((word, i) => (
                    <div key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-blue-300 font-bold text-sm hover:bg-blue-500/20 transition-all cursor-default">
                      {word}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {variant.taskI.sentences.map((s, i) => (
                  <div key={i} className="text-base md:text-lg text-slate-300 leading-relaxed group">
                    <span className="font-black text-slate-700 mr-3 text-sm">{i+1}</span>
                    {s.text.split('________').map((part, pIdx, arr) => (
                      <React.Fragment key={pIdx}>
                        {part}
                        {pIdx < arr.length - 1 && (
                          <input 
                            className="bg-transparent border-b-2 border-slate-700 px-3 focus:border-blue-500 outline-none text-blue-400 font-bold w-full md:w-48 mx-0 md:mx-1 transition-all py-1 placeholder:text-slate-800" 
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
            <motion.div key="step2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-10">
              <div className="border-b border-white/5 pb-4">
                <h3 className="text-lg md:text-xl font-black text-white">Task II: Definitional Logic</h3>
                <p className="text-slate-500 text-xs mt-1 uppercase font-bold tracking-wider">Match the terms with their formal definitions</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  {variant.taskII.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5 group hover:border-blue-500/30 transition-all">
                      <span className="w-8 h-8 flex items-center justify-center bg-blue-500/10 text-blue-400 font-black rounded-lg text-xs">{i+1}</span>
                      <span className="text-sm font-bold text-white">{item.term}</span>
                      <input 
                        className="ml-auto w-10 bg-slate-900 border border-white/10 rounded-lg text-center font-black p-2 text-blue-400 focus:ring-1 focus:ring-blue-500 outline-none uppercase text-sm" 
                        maxLength={1} placeholder="?"
                        value={ans.taskII[i]}
                        onChange={e => updateAns('taskII', i, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {variant.taskII.items.map((item) => (
                    <div key={item.key} className="bg-white/5 p-4 rounded-2xl border border-white/5 text-[11px] text-slate-400 leading-relaxed min-h-[50px] flex items-start">
                      <span className="font-black text-blue-500 uppercase mr-3 mt-0.5">{item.key}</span>
                      <span className="flex-1 italic">{item.definition}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-10">
               <div className="border-b border-white/5 pb-4">
                <h3 className="text-lg md:text-xl font-black text-white">Task III: Creative Sentence Synthesis</h3>
                <p className="text-slate-500 text-xs mt-1 uppercase font-bold tracking-wider">Use the following expressions in complete, meaningful sentences</p>
              </div>
              <div className="grid gap-6">
                {variant.taskIII.items.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <label className="text-blue-500 font-black uppercase text-[10px] tracking-widest">{item}</label>
                    </div>
                    <textarea 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white h-24 focus:border-blue-500 outline-none transition-all placeholder:text-slate-800 text-sm md:text-base"
                      placeholder="Construct a sentence that clearly demonstrates the meaning of the phrase..."
                      value={ans.taskIII[i]}
                      onChange={e => updateAns('taskIII', i, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-10">
              <div className="border-b border-white/5 pb-4">
                <h3 className="text-lg md:text-xl font-black text-white">Task IV: Semantic Nuance</h3>
                <p className="text-slate-500 text-xs mt-1 uppercase font-bold tracking-wider">Explain the conceptual difference between the following pairs</p>
              </div>
              <div className="grid gap-6">
                {variant.taskIV.comparisons.map((comp, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                       <label className="text-blue-500 font-black uppercase text-[10px] tracking-widest">{comp.termA} vs {comp.termB}</label>
                    </div>
                    <textarea 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white h-32 focus:border-blue-500 outline-none transition-all placeholder:text-slate-800 text-sm md:text-base"
                      placeholder="Explain how these terms differ in meaning or professional context..."
                      value={ans.taskIV[i]}
                      onChange={e => updateAns('taskIV', i, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="step5" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-10">
              <div className="border-b border-white/5 pb-4">
                <h3 className="text-lg md:text-xl font-black text-white">Task V: Definitional Rigor</h3>
                <p className="text-slate-500 text-xs mt-1 uppercase font-bold tracking-wider">Provide formal written definitions for the given lexical items</p>
              </div>
              <div className="grid gap-6">
                {variant.taskV.words.map((word, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-3">
                       <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                       <label className="text-blue-500 font-black uppercase text-[10px] tracking-widest">{word}</label>
                    </div>
                    <textarea 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white h-20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-800 text-sm md:text-base"
                      placeholder="Provide a dictionary-style definition..."
                      value={ans.taskV[i]}
                      onChange={e => updateAns('taskV', i, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-10 flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex gap-2 w-full sm:w-auto">
            {step === 1 ? (
              <Button variant="secondary" onClick={onBack} className="flex-1 sm:flex-none">Cancel Exam</Button>
            ) : (
              <Button variant="secondary" onClick={() => setStep(s => s - 1)} className="flex-1 sm:flex-none">Back</Button>
            )}
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto">
            {step < 5 ? (
              <Button onClick={() => { setStep(s => s + 1); window.scrollTo(0,0); }} className="w-full sm:w-auto">Next Section <ChevronRight size={18} className="ml-2 inline"/></Button>
            ) : (
              <Button onClick={() => onSubmit(ans)} className="w-full sm:w-auto bg-green-600 hover:bg-green-500 shadow-green-500/20">Analyze & Finish</Button>
            )}
          </div>
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
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
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
    
    try {
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `${prompt}\n\nTask Input:\n${taskDetails}`,
        config: { 
            responseMimeType: "application/json",
            temperature: 0.1 
        }
      });
      
      const parsed = JSON.parse(result.text || '{"results": []}');
      return parsed.results;
    } catch (e) {
      console.error("AI Evaluation failed", e);
      return questions.map(() => ({ score: 50, feedback: "Error in automated analysis.", suggestion: "N/A" }));
    }
  };

  const submitExam = async (ans: any) => {
    if (!selectedVariant || !selectedTheme || !user) return;
    setIsEvaluating(true);
    setLastAnswers(ans);

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
      evaluateQualitativeDetailed("Lexical Definitions", selectedVariant.taskV.words, ans.taskV)
    ]);

    setQualitativeFeedback({
      taskIII: t3Res,
      taskIV: t4Res,
      taskV: t5Res
    });

    const avgScore = (arr: any[]) => arr.reduce((acc, curr) => acc + (curr.score || 0), 0) / (arr.length || 1);

    const breakdown = {
      taskI: t1,
      taskII: t2,
      taskIII: Math.round((avgScore(t3Res) / 100) * 8),
      taskIV: Math.round((avgScore(t4Res) / 100) * 6),
      taskV: Math.round((avgScore(t5Res) / 100) * 10)
    };

    const maxTask1 = selectedVariant.taskI.sentences.length;
    const maxTask2 = selectedVariant.taskII.items.length;
    const score = breakdown.taskI + breakdown.taskII + breakdown.taskIII + breakdown.taskIV + breakdown.taskV;
    const maxScore = maxTask1 + maxTask2 + 8 + 6 + 10;

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
    setIsEvaluating(false);
    setView('results');
    setShowReview(false);
  };

  if (loading) return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#020617] z-[100]">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
        <h1 className="text-6xl font-black bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent mb-6">Odilxon Dev</h1>
        <div className="flex justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div key={i} className="w-2 h-2 bg-blue-500 rounded-full" animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }} />
          ))}
        </div>
      </motion.div>
    </div>
  );

  if (!user) return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#020617]">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass p-10 rounded-[3rem] w-full max-w-md border border-white/10 text-center shadow-2xl">
        <h1 className="text-4xl font-black text-white mb-2 tracking-tighter">Odilxon Dev</h1>
        <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mb-10">Premium Assessment Portal</p>
        <LoginForm onLogin={handleLogin} />
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30">
      <AnimatePresence>
        {isEvaluating && (
          <motion.div key="eval" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl z-[200]">
            <Loader2 className="animate-spin text-blue-500 mb-8" size={80} />
            <h2 className="text-5xl font-black text-white tracking-tighter mb-2">Analyzing Responses</h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Odilxon AI is generating your formal evaluation...</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {view === 'dashboard' && (
          <motion.div key="dash" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="max-w-7xl mx-auto px-6 py-12">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
              <div>
                <h1 className="text-5xl font-black text-white mb-2 tracking-tighter">Odilxon Dev</h1>
                <p className="text-slate-400 font-bold">Authenticated Candidate: <span className="text-blue-400">{user.name}</span></p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <Button variant="ghost" onClick={toggleFullScreen} className="flex-1 md:flex-none p-3">{isFullscreen ? <Minimize2 size={24}/> : <Maximize2 size={24}/>}</Button>
                <Button variant="secondary" onClick={() => { localStorage.clear(); setUser(null); }} className="flex-1 md:flex-none flex gap-2 items-center justify-center"><LogOut size={18}/> New Candidate</Button>
              </div>
            </header>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {THEMES.map(theme => {
                const Icon = ICON_MAP[theme.icon] || Award;
                const attempts = user.history.filter(h => h.themeId === theme.id).length;
                return (
                  <motion.div 
                    key={theme.id} 
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => { setSelectedTheme(theme); setView('variants'); window.scrollTo(0,0); }} 
                    className="glass p-10 rounded-[3rem] border border-white/5 hover:border-blue-500/50 transition-all cursor-pointer group shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-8">
                      <div className="p-5 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all"><Icon size={28}/></div>
                      <div className="text-[10px] font-black uppercase text-slate-500 px-4 py-1.5 bg-white/5 rounded-full tracking-widest">{theme.category}</div>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-blue-300 transition-colors">{theme.title}</h3>
                    <p className="text-slate-500 text-sm mb-8 leading-relaxed line-clamp-2">{theme.description}</p>
                    <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold text-slate-500">
                      <span className="flex items-center gap-1.5"><History size={16}/> {attempts} {attempts === 1 ? 'Attempt' : 'Attempts'}</span>
                      <span className="text-blue-400 flex items-center gap-1">Open Catalog <ChevronRight size={16}/></span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {view === 'variants' && (
          <motion.div key="vars" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="max-w-4xl mx-auto px-6 py-20">
            <Button variant="secondary" onClick={() => setView('dashboard')} className="mb-12 rounded-full px-8"><ArrowLeft className="mr-3" size={18}/> Return to Catalog</Button>
            <h1 className="text-5xl font-black text-white mb-4 tracking-tighter">{selectedTheme?.title}</h1>
            <p className="text-slate-500 mb-16 text-lg leading-relaxed max-w-2xl">Select an examination variant. Each assessment is dynamically structured with specialized lexical tasks.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {selectedTheme?.variants.map(v => (
                <div 
                  key={v.id} 
                  onClick={() => { setSelectedVariant(v); setView('exam'); window.scrollTo(0,0); }} 
                  className="glass p-12 rounded-[4rem] text-center cursor-pointer border border-white/5 hover:border-blue-500/50 group transition-all active:scale-95 shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-20 h-20 rounded-3xl bg-blue-500/10 flex items-center justify-center mx-auto mb-8 text-3xl font-black text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">{v.id}</div>
                  <h4 className="text-2xl font-black text-white mb-2">Variant {v.id}</h4>
                  <p className="text-[10px] font-black uppercase text-slate-600 tracking-widest">Formal Assessment</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {view === 'exam' && selectedVariant && (
          <ExamInterface key={`exam-${selectedVariant.id}`} variant={selectedVariant} onSubmit={submitExam} onBack={() => setView('variants')} />
        )}

        {view === 'results' && lastResult && (
          <motion.div key="results" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.1, opacity: 0 }} className="max-w-4xl mx-auto px-6 py-20">
            <div className="glass p-12 md:p-24 rounded-[4rem] border border-white/10 shadow-3xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-600 to-indigo-600" />
              <div className="flex flex-col items-center text-center">
                <div className="mb-10 inline-flex p-6 rounded-full bg-blue-500/10 text-blue-400">
                  <Award size={64} />
                </div>
                <h1 className="text-8xl md:text-9xl font-black text-white mb-4 tracking-tighter">
                  {Math.round((lastResult.score / lastResult.maxScore) * 100)}%
                </h1>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-16">Written Assessment Final Grade</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-20 w-full">
                  {Object.entries(lastResult.breakdown).map(([k, v]) => (
                    <div key={k} className="bg-white/5 p-6 rounded-3xl border border-white/5">
                      <div className="text-[9px] font-black uppercase text-slate-500 mb-2">{k.replace('task', 'Task ')}</div>
                      <div className="text-3xl font-black text-white">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full mb-12">
                  <Button variant="secondary" onClick={() => { setView('dashboard'); window.scrollTo(0,0); }} className="px-12 py-5 text-xl flex-1">Finish Review</Button>
                  <Button onClick={() => setShowReview(!showReview)} className="px-12 py-5 text-xl flex-1 flex items-center justify-center gap-2">
                    <Sparkles size={20} /> {showReview ? "Hide Analysis" : "Odilxon AI Analysis"}
                  </Button>
                </div>
              </div>

              {showReview && lastAnswers && selectedVariant && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-12 space-y-16 text-left border-t border-white/10 pt-16">
                  {/* Task I Review */}
                  <section>
                    <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                      <span className="bg-blue-600 px-4 py-1.5 rounded-xl text-sm shadow-lg shadow-blue-500/20">Task I</span> 
                      Objective Accuracy
                    </h3>
                    <div className="space-y-6">
                      {selectedVariant.taskI.sentences.map((s, i) => {
                        const studentAnswer = lastAnswers.taskI[i]?.toLowerCase().trim();
                        const correctAnswer = s.answer.toLowerCase();
                        const isCorrect = studentAnswer === correctAnswer;
                        return (
                          <div key={i} className={`p-8 rounded-[2rem] border transition-all ${isCorrect ? 'border-green-500/20 bg-green-500/5' : 'border-red-500/20 bg-red-500/5'}`}>
                            <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                              {s.text.split('________').map((part, pIdx, arr) => (
                                <React.Fragment key={pIdx}>
                                  {part}
                                  {pIdx < arr.length - 1 && (
                                    <span className={`px-2 py-1 mx-1 rounded-lg font-black ${isCorrect ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                                      {lastAnswers.taskI[i] || '[Empty]'}
                                    </span>
                                  )}
                                </React.Fragment>
                              ))}
                            </p>
                            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/5">
                               {isCorrect ? (
                                  <div className="flex items-center gap-2 text-green-400 font-bold text-sm">
                                    <CheckCircle2 size={18}/> Valid Entry
                                  </div>
                               ) : (
                                  <>
                                    <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                                      <XCircle size={18}/> Conceptual Error
                                    </div>
                                    <div className="flex items-center gap-2 text-blue-400 font-bold text-sm bg-blue-500/10 px-4 py-1.5 rounded-full">
                                      <Target size={16}/> Correct Item: {s.answer}
                                    </div>
                                  </>
                               )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>

                  {/* Qualitative Tasks Review (III, IV, V) */}
                  {[ 
                    { key: 'taskIII', label: 'Task III: Synthesis', items: selectedVariant.taskIII.items },
                    { key: 'taskIV', label: 'Task IV: Semantic Nuance', items: selectedVariant.taskIV.comparisons.map(c => `${c.termA} vs ${c.termB}`) },
                    { key: 'taskV', label: 'Task V: Lexical Rigor', items: selectedVariant.taskV.words }
                  ].map((section) => (
                    <section key={section.key}>
                      <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                        <span className="bg-blue-600 px-4 py-1.5 rounded-xl text-sm shadow-lg shadow-blue-500/20">{section.key.toUpperCase()}</span> 
                        {section.label}
                      </h3>
                      <div className="space-y-8">
                        {section.items.map((item, i) => {
                          const evaluation = qualitativeFeedback[section.key]?.[i];
                          return (
                            <div key={i} className="glass p-8 rounded-[2.5rem] border border-white/10">
                              <div className="flex justify-between items-start mb-6">
                                <p className="text-blue-400 font-black uppercase text-xs tracking-widest">{item}</p>
                                <div className={`px-4 py-1.5 rounded-full text-xs font-black ${evaluation?.score > 70 ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                  Grade: {evaluation?.score}%
                                </div>
                              </div>
                              <div className="mb-8 p-5 bg-white/5 rounded-2xl italic text-slate-400 border-l-4 border-blue-500/30">
                                "{lastAnswers[section.key][i] || 'No input detected.'}"
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                  <p className="text-[10px] font-black text-red-400 uppercase tracking-widest flex items-center gap-2"><AlertTriangle size={12}/> Analysis Findings</p>
                                  <p className="text-sm text-slate-300 leading-relaxed">{evaluation?.feedback}</p>
                                </div>
                                <div className="space-y-2">
                                  <p className="text-[10px] font-black text-green-400 uppercase tracking-widest flex items-center gap-2"><Target size={12}/> Model Exemplar</p>
                                  <p className="text-sm text-slate-300 leading-relaxed bg-green-500/5 p-4 rounded-xl border border-green-500/10 italic">
                                    {evaluation?.suggestion}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  ))}
                  
                  <div className="p-10 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/20 rounded-[3rem] text-center">
                    <Sparkles className="mx-auto text-blue-500 mb-6" size={48} />
                    <h4 className="text-2xl font-black text-white mb-4">Odilxon AI Summary</h4>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
                      My analysis focuses on your ability to use advanced communicative lexis in natural academic contexts. 
                      Review the <strong>Analysis Findings</strong> and study the <strong>Model Exemplars</strong> to bridge your lexical gaps. 
                      Consistency is the key to mastering high-tier English proficiency.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
