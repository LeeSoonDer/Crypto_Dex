import React, { useState, useEffect } from 'react';
import { quizQuestions } from '../data/quiz';
import { PixelButton } from '../components/ui';
import { Trophy, MessageSquare, Copy, Check, Flame } from 'lucide-react';
import { QuizQuestion } from '../types';

export const Quiz: React.FC = () => {
  const [currentQuestions, setCurrentQuestions] = useState<QuizQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // New State
  const [streak, setStreak] = useState(0);
  const [comboMessage, setComboMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const startNewGame = () => {
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
    setCurrentQuestions(shuffled.slice(0, 10));
    setIndex(0);
    setScore(0);
    setStreak(0);
    setComboMessage(null);
    setSelected(null);
    setFinished(false);
    setLoading(false);
  };

  useEffect(() => { startNewGame(); }, []);

  // Keyboard Controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (loading) return;

      if (finished) {
        if (e.key === 'Enter') startNewGame();
        return;
      }

      if (selected) {
        if (e.key === 'Enter') next();
        return;
      }

      const question = currentQuestions[index];
      if (!question) return;

      if (['1', '2', '3', '4'].includes(e.key)) {
        const idx = parseInt(e.key) - 1;
        if (question.options[idx]) {
          handleAnswer(question.options[idx]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [loading, finished, selected, index, currentQuestions]);

  const handleAnswer = (opt: string) => {
    if (selected) return;
    setSelected(opt);
    
    const isCorrect = opt === currentQuestions[index].correctAnswer;
    
    if (isCorrect) {
      setScore(s => s + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      
      // Combo Logic
      if (newStreak === 3) setComboMessage("COMBO_3X: NETWORK_STABLE");
      else if (newStreak === 5) setComboMessage("COMBO_5X: YOU_ARE_NOW_A_DEGEN");
      else if (newStreak === 7) setComboMessage("COMBO_7X: GAS_FEES_IGNORED");
      else if (newStreak === 10) setComboMessage("MAX_COMBO: GOD_MODE_ACTIVE");
      else setComboMessage(null);
    } else {
      setStreak(0);
      setComboMessage(null);
    }
  };

  const next = () => {
    if (index < currentQuestions.length - 1) {
      setIndex(i => i + 1);
      setSelected(null);
      setComboMessage(null);
    } else {
      setFinished(true);
    }
  };

  const copyResult = () => {
    const rank = getRankInfo().title;
    const text = `I just completed the CryptoDex Quiz Simulation: ${score}/${currentQuestions.length} – Rank: ${rank}. Learn crypto the fun way!`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const getRankInfo = () => {
    const percentage = (score / currentQuestions.length) * 100;
    if (percentage >= 100) return { title: "ON_CHAIN_ORACLE", desc: "You see blocks before they are mined.", color: "text-pixel-cyan", iconColor: "text-pixel-cyan" };
    if (percentage >= 80) return { title: "DIAMOND_HANDS", desc: "You're surviving the volatility.", color: "text-pixel-green", iconColor: "text-pixel-green" };
    if (percentage >= 50) return { title: "DIAMOND_IN_PROGRESS", desc: "You know the basics. Keep leveling up.", color: "text-pixel-yellow", iconColor: "text-pixel-yellow" };
    return { title: "PAPER_HANDS", desc: "You just entered the market. It's okay, keep learning.", color: "text-gray-400", iconColor: "text-gray-500" };
  };

  if (loading) return <div className="text-pixel-cyan text-center py-20 font-retro animate-pulse">LOADING SIMULATION...</div>;

  const question = currentQuestions[index];

  // RESULTS SCREEN
  if (finished) {
    const rankInfo = getRankInfo();
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 animate-fade-in-up">
        <div className="bg-space-900 border-4 border-space-700 p-8 text-center shadow-pixel relative overflow-hidden">
          <div className="absolute inset-0 bg-pixel-cyan/5 pointer-events-none"></div>
          
          {/* Trophy Animation */}
          <div className="animate-float">
             <Trophy className={`w-20 h-20 mx-auto mb-6 ${rankInfo.iconColor} drop-shadow-lg`} />
          </div>
          
          <h2 className="font-retro text-2xl md:text-3xl text-white mb-2">SIMULATION COMPLETE</h2>
          
          <div className="my-8 bg-space-950 border border-space-700 p-6 w-full max-w-md mx-auto relative">
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-space-900 border border-space-700 px-3 py-1 text-[0.6rem] font-retro text-gray-400">
               FINAL REPORT
             </div>
             
             <div className="grid grid-cols-2 gap-4 mb-4 border-b border-space-800 pb-4">
                <div>
                   <p className="font-terminal text-gray-500 text-sm">ACCURACY</p>
                   <p className="font-retro text-2xl text-white">{Math.round((score / currentQuestions.length) * 100)}%</p>
                </div>
                <div>
                   <p className="font-terminal text-gray-500 text-sm">CORRECT</p>
                   <p className="font-retro text-2xl text-white">{score}/{currentQuestions.length}</p>
                </div>
             </div>

             <p className="font-terminal text-gray-500 mb-1">RANK EARNED</p>
             <p className={`font-retro text-xl md:text-2xl ${rankInfo.color} animate-pulse mb-2`}>{rankInfo.title}</p>
             <p className="font-terminal text-lg text-gray-300 italic">"{rankInfo.desc}"</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <PixelButton onClick={startNewGame} variant="primary">
              RESTART SYSTEM
            </PixelButton>
            
            <button 
              onClick={copyResult}
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-space-600 bg-space-950 text-gray-300 font-retro text-xs hover:bg-space-800 hover:text-white transition-colors"
            >
               {copied ? <Check className="w-4 h-4 text-pixel-green" /> : <Copy className="w-4 h-4" />}
               {copied ? "COPIED!" : "COPY RESULT"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // GAME SCREEN
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      
      {/* HUD */}
      <div className="bg-space-950 border-2 border-space-800 p-2 mb-4 flex justify-between items-center font-terminal text-pixel-cyan text-lg shadow-lg">
        <div className="flex items-center gap-4">
           <span>Q: {index + 1}/{currentQuestions.length}</span>
           {streak > 1 && (
             <span className="flex items-center gap-1 text-pixel-yellow animate-pulse">
               <Flame className="w-4 h-4" /> STREAK: {streak}
             </span>
           )}
        </div>
        <span>SCORE: {score}</span>
      </div>

      {/* RPG TEXT BOX */}
      <div className="bg-space-900 border-4 border-white p-6 md:p-8 mb-8 shadow-pixel min-h-[200px] relative animate-fade-in">
         {/* Topic Tag */}
         <div className="absolute top-0 left-0 bg-white text-space-950 font-retro text-[0.6rem] px-2 py-0.5">
           TOPIC: {question.topic}
         </div>
         
         {/* Terminal Icon Replaced */}
         <MessageSquare className="w-6 h-6 text-pixel-green mb-4 mt-2" />
         
         <h2 className="font-terminal text-2xl md:text-3xl text-white leading-relaxed font-bold">
           {question.clue}
         </h2>
         
         {/* Blinking Cursor/Arrow */}
         <div className="absolute bottom-2 right-2 animate-bounce text-white">▼</div>
      </div>

      {/* OPTIONS */}
      <div className="grid md:grid-cols-2 gap-4">
        {question.options.map((opt, i) => {
           let variant: 'outline' | 'success' | 'danger' = 'outline';
           if (selected) {
             if (opt === question.correctAnswer) variant = 'success';
             else if (opt === selected) variant = 'danger';
           }

           return (
             <PixelButton 
               key={opt} 
               variant={variant}
               disabled={!!selected}
               onClick={() => handleAnswer(opt)}
               className="w-full text-left h-full flex items-center justify-start normal-case group relative"
             >
               {/* Keyboard hint */}
               <span className="absolute top-1 right-2 text-[0.6rem] text-gray-500 font-terminal hidden md:block group-hover:text-white">
                 [{i + 1}]
               </span>
               <span className="mr-3 font-retro text-[0.6rem] opacity-50 group-hover:opacity-100 transition-opacity">▶</span> 
               {opt}
             </PixelButton>
           );
        })}
      </div>

      {/* FEEDBACK OVERLAY */}
      {selected && (
        <div className={`mt-6 border-2 p-6 animate-slide-up shadow-lg relative overflow-hidden ${selected === question.correctAnswer ? 'bg-green-900/20 border-pixel-green' : 'bg-red-900/20 border-pixel-red'}`}>
           {/* Combo Message */}
           {comboMessage && (
              <div className="absolute top-0 right-0 bg-pixel-yellow text-space-950 font-retro text-[0.6rem] px-2 py-1 animate-pulse z-10">
                {comboMessage}
              </div>
           )}

           <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-2">
             <div className={`w-3 h-3 ${selected === question.correctAnswer ? 'bg-pixel-green shadow-[0_0_10px_#4ade80]' : 'bg-pixel-red shadow-[0_0_10px_#ef4444]'}`}></div>
             <p className="font-retro text-white text-sm tracking-wider">
               {selected === question.correctAnswer ? "TX_STATUS: CONFIRMED" : "TX_STATUS: REVERTED"}
             </p>
           </div>
           
           <div className="font-terminal text-xl text-gray-300 mb-6 space-y-2">
             {selected === question.correctAnswer ? (
                <div className="text-pixel-green flex items-center gap-2">
                   <span>BLOCK_REWARD: +1 KNOWLEDGE</span>
                </div>
             ) : (
                <div className="text-pixel-red">
                   <span>REASON: INVALID_GUESS</span>
                   <br/>
                   <span className="text-pixel-yellow">EXPECTED_INPUT: {question.correctAnswer}</span>
                </div>
             )}
             <div className="pt-2 text-gray-400 italic">
               &gt; {question.explanation}
             </div>
           </div>
           
           <PixelButton onClick={next} className="w-full md:w-auto" variant="primary">
             {index === currentQuestions.length - 1 ? "END SIMULATION [ENTER]" : "PROCEED [ENTER]"}
           </PixelButton>
        </div>
      )}
    </div>
  );
};