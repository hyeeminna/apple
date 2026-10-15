"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([
    "프로젝트 구조 파악하기",
    "새로운 페이지 컴포넌트 추가해보기",
    "API 라우트 연결 테스트하기",
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    setTodos([...todos, inputVal.trim()]);
    setInputVal("");
  };

  const handleRemoveTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 font-sans flex flex-col">
      {/* 상단 네비게이션 */}
      <header className="border-b border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur sticky top-0 z-10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20">
            N
          </div>
          <span className="font-semibold text-lg tracking-tight">Next.js Sample App</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            http://localhost:3000
          </span>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-6 md:p-10 space-y-10">
        {/* 히어로 섹션 */}
        <div className="text-center md:text-left space-y-4 pt-4">
          <div className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            🚀 로컬 개발 서버 준비 완료
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Next.js 16 로컬 개발 페이지
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl">
            현재 <code className="bg-slate-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono text-blue-600 dark:text-blue-400">localhost:3000</code> 포트에서 실행 중인 기본 메인 페이지입니다. 컴포넌트 수정 및 기능 추가가 실시간으로 반영됩니다.
          </p>
        </div>

        {/* 인터랙티브 기능 시연 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. 리액트 상태 카운터 테스트 */}
          <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">인터랙티브 카운터</h2>
                <span className="text-xs text-slate-500 font-mono">React State</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-400 mb-6">
                버튼 클릭 시 리액트 상태가 즉시 갱신되는지 테스트할 수 있습니다.
              </p>
              <div className="flex items-center justify-center py-6 bg-slate-50 dark:bg-zinc-800/50 rounded-xl mb-6">
                <span className="text-5xl font-black font-mono text-blue-600 dark:text-blue-400">{count}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCount(count + 1)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow"
              >
                + 증가
              </button>
              <button
                onClick={() => setCount(count - 1)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-200 dark:bg-zinc-800 hover:bg-slate-300 dark:hover:bg-zinc-700 font-medium text-sm transition-colors"
              >
                - 감소
              </button>
              <button
                onClick={() => setCount(0)}
                className="py-2.5 px-3 rounded-xl border border-slate-300 dark:border-zinc-700 hover:bg-slate-100 dark:hover:bg-zinc-800 text-sm transition-colors"
              >
                리셋
              </button>
            </div>
          </section>

          {/* 2. 빠른 할 일(Todo) 목록 데모 */}
          <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">개발 체크리스트</h2>
                <span className="text-xs text-slate-500 font-mono">{todos.length}개 항목</span>
              </div>
              <form onSubmit={handleAddTodo} className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="새 할 일 입력..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  className="flex-1 px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium text-sm rounded-xl hover:opacity-90 transition-opacity"
                >
                  추가
                </button>
              </form>
              <ul className="space-y-2 max-h-44 overflow-y-auto pr-1">
                {todos.map((todo, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-zinc-800/60 text-sm group"
                  >
                    <span>{todo}</span>
                    <button
                      onClick={() => handleRemoveTodo(idx)}
                      className="text-xs text-rose-500 hover:text-rose-700 opacity-60 group-hover:opacity-100 transition-opacity"
                    >
                      삭제
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* 프로젝트 설정 및 환경 정보 카드 */}
        <section className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg font-bold mb-4">프로젝트 구성 환경</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/50">
              <div className="text-xs text-slate-500 dark:text-zinc-400 mb-1">Framework</div>
              <div className="text-base font-semibold">Next.js 16</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/50">
              <div className="text-xs text-slate-500 dark:text-zinc-400 mb-1">Library</div>
              <div className="text-base font-semibold">React 19</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/50">
              <div className="text-xs text-slate-500 dark:text-zinc-400 mb-1">Styling</div>
              <div className="text-base font-semibold">Tailwind CSS v4</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/50">
              <div className="text-xs text-slate-500 dark:text-zinc-400 mb-1">Architecture</div>
              <div className="text-base font-semibold">App Router</div>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="border-t border-slate-200 dark:border-zinc-800 py-6 text-center text-xs text-slate-500 dark:text-zinc-500">
        <p>Next.js 16 &bull; 실행 주소: <a href="http://localhost:3000" className="underline text-blue-600 dark:text-blue-400">http://localhost:3000</a></p>
      </footer>
    </div>
  );
}
