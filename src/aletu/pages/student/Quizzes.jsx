import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, BookOpenIcon, StarIcon, ClockIcon, TrophyIcon, CheckCircleIcon, XCircleIcon, ArrowRightIcon } from 'lucide-react';

const quizzes = [
  { id: '1', title: 'Quadratic Equations Mastery Check', subject: 'Mathematics', grade: 'S4', questions: 10, timeLimit: 20, difficulty: 'intermediate', status: 'not_started', type: 'lesson' },
  { id: '2', title: 'Cell Biology Practice Quiz', subject: 'Biology', grade: 'S4', questions: 15, timeLimit: 25, difficulty: 'beginner', status: 'completed', score: 87, type: 'practice' },
  { id: '3', title: 'Chemical Bonds Assessment', subject: 'Chemistry', grade: 'S4', questions: 12, timeLimit: 30, difficulty: 'advanced', status: 'in_progress', type: 'assessment' },
  { id: '4', title: "Newton's Laws Practice", subject: 'Physics', grade: 'S4', questions: 8, timeLimit: 15, difficulty: 'beginner', status: 'completed', score: 100, type: 'practice' },
];

const diffColors = { beginner: 'bg-green-100 text-green-700', intermediate: 'bg-amber-100 text-amber-700', advanced: 'bg-red-100 text-red-700' };
const statusConfig = { completed: { cls: 'bg-green-50 text-green-700', label: 'Completed', icon: CheckCircleIcon }, in_progress: { cls: 'bg-indigo-50 text-indigo-700', label: 'In Progress', icon: ArrowRightIcon }, not_started: { cls: 'bg-gray-100 text-gray-600', label: 'Not Started', icon: BookOpenIcon } };

export default function Quizzes() {
  const [search, setSearch] = useState('');
  const [subject, setSubject] = useState('');
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [quizState, setQuizState] = useState({ step: 'start', current: 0, score: 0, answer: '' });

  const filtered = quizzes.filter((q) =>
    (!search || q.title.toLowerCase().includes(search.toLowerCase())) &&
    (!subject || q.subject === subject)
  );

  if (activeQuiz) {
    const sampleQuestion = { question: `What is the standard form of a ${activeQuiz.subject} equation?`, options: ['Option A — Correct Answer', 'Option B', 'Option C', 'Option D'], correct: 0 };
    if (quizState.step === 'result') {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 text-center">
            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <TrophyIcon className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
            <p className="text-4xl font-extrabold text-indigo-600 mb-1">{quizState.score}%</p>
            <p className="text-gray-500 text-sm mb-6">You scored {Math.round(quizState.score / 10)} / 10 on {activeQuiz.title}</p>
            <button onClick={() => { setActiveQuiz(null); setQuizState({ step: 'start', current: 0, score: 0, answer: '' }); }}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-colors">Back to Quizzes</button>
          </div>
        </div>
      );
    }
    return (
      <div className="min-h-screen bg-gray-50 p-6 md:p-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setActiveQuiz(null)} className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"><ChevronLeftIcon className="h-4 w-4" /> Exit Quiz</button>
            <span className="text-sm font-medium text-gray-700">Question {quizState.current + 1} / 5</span>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
            <div className="h-2 bg-gray-100 rounded-full mb-6 overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full transition-all" style={{ width: `${((quizState.current) / 5) * 100}%` }} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">{sampleQuestion.question}</h3>
            <div className="space-y-3">
              {sampleQuestion.options.map((opt, i) => (
                <button key={i} onClick={() => setQuizState(s => ({ ...s, answer: opt }))}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${quizState.answer === opt ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700'}`}>
                  {String.fromCharCode(65 + i)}. {opt}
                </button>
              ))}
            </div>
          </div>
          <button disabled={!quizState.answer}
            onClick={() => {
              const correct = quizState.answer === sampleQuestion.options[0];
              const newScore = quizState.score + (correct ? 20 : 0);
              if (quizState.current >= 4) setQuizState({ step: 'result', current: 5, score: newScore, answer: '' });
              else setQuizState(s => ({ ...s, current: s.current + 1, answer: '', score: newScore }));
            }}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white rounded-xl font-semibold transition-colors">
            {quizState.current >= 4 ? 'Submit Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/aletu/student" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"><ChevronLeftIcon className="h-5 w-5 mr-1" /> Back</Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Quizzes</h1>
            <p className="text-sm text-gray-500 mt-0.5">Test your knowledge and track your progress</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[['Completed', '24', BookOpenIcon, 'bg-indigo-100 text-indigo-600'], ['Avg Score', '85%', StarIcon, 'bg-green-100 text-green-600'], ['Time Spent', '12.5h', ClockIcon, 'bg-amber-100 text-amber-600'], ['Achievements', '8', TrophyIcon, 'bg-purple-100 text-purple-600']].map(([label, value, Icon, color]) => (
            <div key={label} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
              <div className={`p-2 rounded-lg ${color}`}><Icon className="h-5 w-5" /></div>
              <div><p className="text-xs text-gray-500">{label}</p><p className="text-xl font-bold text-gray-900">{value}</p></div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input type="search" placeholder="Search quizzes..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-indigo-500 focus:border-indigo-500" />
          <select value={subject} onChange={(e) => setSubject(e.target.value)} className="w-44 px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option value="">All Subjects</option>
            <option>Mathematics</option><option>Physics</option><option>Chemistry</option><option>Biology</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((quiz) => {
            const sc = statusConfig[quiz.status];
            return (
              <div key={quiz.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${diffColors[quiz.difficulty]}`}>{quiz.difficulty}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${sc.cls}`}>{sc.label}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">{quiz.title}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{quiz.subject} · {quiz.grade}</p>
                  </div>
                  {quiz.score !== undefined && (
                    <div className="text-center">
                      <p className="text-2xl font-bold text-indigo-600">{quiz.score}%</p>
                      <p className="text-xs text-gray-500">Score</p>
                    </div>
                  )}
                </div>
                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1"><BookOpenIcon className="h-4 w-4 text-gray-400" /> {quiz.questions} questions</span>
                  <span className="flex items-center gap-1"><ClockIcon className="h-4 w-4 text-gray-400" /> {quiz.timeLimit} min</span>
                </div>
                <button onClick={() => setActiveQuiz(quiz)}
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors">
                  {quiz.status === 'completed' ? 'Retake Quiz' : quiz.status === 'in_progress' ? 'Continue' : 'Start Quiz'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
