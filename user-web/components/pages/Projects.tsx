import SPFrame from '../static/SPFrame.tsx'

const projectTitle = {
  title: 'Projects',
  subtitle: 'プロジェクト一覧',
  catch: 'プロジェクト一覧です',
  description: 'プロジェクト一覧です。プロジェクトの詳細は各プロジェクトのページをご覧ください。',
} as const

const projects = {
  project1: {
    id: 'project_1',
    title: 'Project1',
    subtitle: '□ □□□□□□ □□□ □',
    fullDesc:
      '□□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□□□□□ □□□□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□□□□□ □',
    figure: '/logo.svg',
  },
  project2: {
    id: 'project_2',
    title: 'Project2',
    subtitle: '□□□□ □□□ □',
    fullDesc:
      '□□□ □□ □□□□ □□□ □□ □□□□ □□□ □□□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□□□□□ □□□□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□□□□□ □',
    figure: '/logo.svg',
  },
  project3: {
    id: 'project_3',
    title: 'Project3',
    subtitle: '□□□□□ □□□□ □□□ □',
    fullDesc:
      '□□□□ □□ □□□□□ □□□ □□ □□□ □□□ □□□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□□□ □□□□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□□□□□ □',
    figure: '/logo.svg',
  },
  project4: {
    id: 'project_4',
    title: 'Project4',
    subtitle: '□ □□ □□ □□□ □',
    fullDesc:
      '□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□ □□□□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□□□□□ □□□□□□ □',
    figure: '/logo.svg',
  },
  project5: {
    id: 'project_5',
    title: 'Project5',
    subtitle: '□□□□ □□□ □',
    fullDesc:
      '□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□ □□□□□□ □□ □□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□□□□ □□□ □□ □□□□ □□□ □□□□□ □□□ □□□□□□□ □□□□□□ □',
    figure: '/logo.svg',
  },
}

export default function Projects() {
  const projectOrder = ['project1', 'project2', 'project3', 'project4', 'project5'] as const
  const orderedProjects = projectOrder.map((key) => projects[key])
  return (
    <section id={'projects'} className={'min-h-screen w-full flex flex-col'}>
      <div className={'flex md:flex-row'}>
        <div className={'w-full md:w-1/2 px-12 md:pl-24 md:pr-0'}>
          <h1 className={'text-6xl font-bold mb-2'}>{projectTitle.title}</h1>
          <p className={'text-gray-500'}>{projectTitle.subtitle}</p>
          <p className={'text-xl mt-4 font-bold'}>{projectTitle.catch}</p>
          <p className={'mt-4 md:w-11/12 lg:w-8/12 whitespace-break-spaces'}>{projectTitle.description}</p>
        </div>
        <aside className={'w-1/2 hidden md:block overflow-scroll hidden-scrollbar'}>
          <div className={'w-full relative whitespace-nowrap pt-4 pb-16'}>
            {orderedProjects.map((project, idx) => (
              <div key={projectOrder[idx]} className={'w-[20vw] inline-block mr-12 relative'}>
                <div className={'relative top-8 left-8'}>
                  <SPFrame image={project.figure} title={project.title} />
                </div>
                <div
                  className={'w-28 h-28 bg-white rounded-full absolute top-0 flex justify-center items-center'}
                >
                  <div>{project.title}</div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
      <div className={'mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-24'}>
        {orderedProjects.map((project, idx) => (
          <div className={'h-56 bg-gray-100 rounded-2xl '}>
            <dl key={projectOrder[idx]} className={'w-full h-full flex flex-col p-4'}>
              <dt className={'flex flex-row items-center content-center'}>
                <image class={'w-8 h-8 mr-2 saturate-0'} src={project.figure} alt={project.title} />
                <h3 className={'text-lg font-bold'}>{project.title}</h3>
                <span className={'ml-2 text-gray-500'}>{project.subtitle}</span>
              </dt>
              <dd className={'mt-4 overflow-hidden'}>{project.fullDesc}</dd>
            </dl>
          </div>
        ))}
      </div>
    </section>
  )
}
