export default function AppHR() {
  return (
    <aside className={'relative w-full h-40 overflow-hidden select-none'}>
      <div
        className={'bg-red-700 w-full h-full flex flex-row justify-between items-center animate-[bounce_8s_infinite] px-12'}
      >
        <div className={'bg-blue-700 w-1/5 h-full animate-[spin_10s_infinite]'} />
        <div className={'bg-red-600 w-40 h-full animate-[spin_18s_infinite]'} />
        <div className={'bg-green-600 w-1/5 h-full animate-[spin_18s_infinite] rounded-full'} />
        <div className={'bg-red-600 w-40 h-full animate-[spin_18s_infinite]'} />
        <div className={'bg-purple-800 w-1/5 h-full animate-[spin_12s_infinite]'} />
      </div>
      <div
        className={'absolute top-0 h-full bg-white text-8xl font-bold overflow-hidden whitespace-nowrap mix-blend-lighten animate-infinity-scroll'}
      >
        <span
          className={`block w-full overflow-hidden before:content-['FRESH_BY_DENO_FRESH_BY_DENO_FRESH_BY_DENO_FRESH_BY_DENO_FRESH_BY_DENO_FRESH_BY_DENO_FRESH_BY_DENO_FRESH_BY_DENO_FRESH_BY_DENO']`}
        />
      </div>
    </aside>
  )
}
