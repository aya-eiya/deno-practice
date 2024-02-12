type Props = {
  image: string
  title: string
  reverse?: boolean
}

export default function SPFrame({ image, title, reverse }: Props) {
  return (
    <div
      className={'mx-2 flex flex-col shadow-md shadow-gray-500 rounded-3xl w-full aspect-[7/12] bg-white p-2 ' +
        (reverse ? 'animate-v-infinity-scroll-reverse' : 'animate-v-infinity-scroll')}
    >
      <div className={'rounded-t-3xl rounded-b-md bg-slate-400 my-auto h-full flex items-center'}>
        <img src={image} className={'w-full'} alt={title} />
      </div>
      <div className={'flex flex-row justify-between text-gray-300 w-full px-10 py-2'}>
        <span className={'block'}>▲</span>
        <span className={'block'}>■</span>
        <span className={'block'}></span>
        <span className={'block'}>●</span>
      </div>
    </div>
  )
}
