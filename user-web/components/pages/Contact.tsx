import ContactUsForm from '../../islands/contact/ContactUsForm.tsx'
const contactTitle = {
  title: 'Contact us',
  subtitle: 'お問い合わせ',
  catch: 'お問い合わせはこちらから',
  description:
    'お問い合わせはこちらからお願いします。お問い合わせ内容によってはお返事にお時間をいただくことがあります。予めご了承ください',
} as const
export default function Contact() {
  return (
    <section id={'contact'} className={'h-screen w-full flex flex-col md:flex-row px-24'}>
      <div className={'md:w-1/2 mb-4'}>
        <h1 className={'text-6xl font-bold'}>{contactTitle.title}</h1>
        <p className={'text-gray-500'}>{contactTitle.subtitle}</p>
        <p className={'text-xl mt-4 font-bold'}>{contactTitle.catch}</p>
        <p className={'mt-4 md:w-11/12 lg:w-8/12 whitespace-break-spaces'}>{contactTitle.description}</p>
      </div>
      <div className={'md:w-1/2'}>
        <ContactUsForm />
      </div>
    </section>
  )
}
