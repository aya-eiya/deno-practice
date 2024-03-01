import { useSignal } from '@preact/signals'

const contactUs = {
  form: {
    name: {
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your name',
      data: '',
    },
    mail: {
      label: 'Mail address',
      type: 'email',
      placeholder: 'Enter your e-mail address',
      data: '',
    },
    company: {
      label: 'Company',
      type: 'text',
      placeholder: 'Enter your company name',
      data: '',
    },
    tel: {
      label: 'Telephone',
      type: 'tel',
      placeholder: 'Enter your telephone number',
      data: '',
    },
    inquiry: {
      label: 'Inquiry',
      type: 'text',
      placeholder: 'Enter your inquiry here',
      data: '',
    },
  },
}

const privacyPolicy = {
  title: 'Accept Privacy Policy',
  body: 'This is the privacy policy of this website.',
}
export default function ContactUsForm() {
  const formOrder = ['name', 'mail', 'company', 'tel', 'inquiry'] as const
  const orderedForm = formOrder.map((key) => contactUs.form[key])
  const data = useSignal(orderedForm.map((form) => form.data))
  return (
    <form>
      <div className={'grid grid-cols-1 gap-4'}>
        {orderedForm.map((form, idx) => (
          <div key={'form_' + formOrder[idx]} className={'bg-gray-200 rounded-full w-100 h-16 px-8'}>
            <label className={'block'} htmlFor={'contactUs_form_' + formOrder[idx]}>{form.label}</label>
            <input
              className={'bg-transparent border-none w-full h-8 outline-none px-4'}
              type={form.type}
              id={'contactUs_form_' + formOrder[idx]}
              value={data.value[idx]}
              onChange={(e) =>
                data.value[idx] = (e.target as HTMLInputElement).value ?? ''}
              placeholder={form.placeholder}
            />
          </div>
        ))}
      </div>
      <div className={'grid grid-cols-1 gap-4 mt-4'}>
        <div>{privacyPolicy.body}</div>
        <div className={'flex flex-row justify-between'}>
          <div className={'flex content-center items-center'}>
            <input type={'radio'} className={'w-6 h-6 accent-black border-2'} id={'privacyPolicy'} />
            <label className={'block ml-2'} htmlFor={'privacyPolicy'}>{privacyPolicy.title}</label>
          </div>
          <div>
            <button className={'px-4 py-4 rounded-full bg-yellow-400 w-52'}>Submit</button>
          </div>
        </div>
      </div>
    </form>
  )
}
