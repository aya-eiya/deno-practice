type Props = {
  image: string
  title: string
  reverse?: boolean
}

export default function SPFrame({ image, title, reverse }: Props) {
  return (
    <div
      className={'mx-2 flex flex-col shadow-md shadow-gray-500 rounded-lg md:rounded-xl xl:rounded-3xl w-full aspect-[7/12] bg-white p-2 ' +
        (reverse
          ? 'animate-v-infinity-scroll-reverse translate-y-[-175%]'
          : 'animate-v-infinity-scroll translate-y-[-155%]')}
    >
      <div
        className={' rounded-lg md:rounded-t-xl xl:rounded-t-3xl rounded-b-sm md:rounded-b-md bg-slate-400 my-auto h-full flex items-center'}
      >
        <img src={image} className={'w-full'} alt={title} />
      </div>
      <div className={'flex flex-row justify-center text-gray-300 w-full py-0 md:py-1 lg:py-2'}>
        <span className={'block px-1 text-xs md:text-sm lg:text-base'}>▲</span>
        <span className={'block px-1 text-xs md:text-sm lg:text-base'}>■</span>
        <span className={'block px-1 text-xs md:text-sm lg:text-base'}>&#xD7;</span>
        <span className={'block px-1 text-xs md:text-sm lg:text-base'}>●</span>
      </div>
    </div>
  )
}
