export interface ITypographyProps {}

const Typography = ({}: ITypographyProps) => {
  return (
    <div className='bg-gray-100 h-screen px-4'>
      <div className=' max-w-7xl mx-auto border-t-8 border-blue-500'>
        <h2 className='text-xl'>Typography</h2>
        <p className='text-sm text-gray-600 pt-2'>
          Hint: Find the classname along with the style.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4'>
          <TypographyHelper
            title={'Font family'}
            values={['font-sans', 'font-serif', 'font-mono']}
          />
          <TypographyHelper
            title={'Font size'}
            values={['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl']}
          />
          <TypographyHelper
            title={'Line height'}
            values={[
              'leading-1',
              'leading-1.5',
              'leading-2',
              'leading-2.5',
              'leading-3',
            ]}
          />
          <TypographyHelper
            title={'Font weight'}
            values={[
              'font-thin',
              'font-normal',
              'font-semibold',
              'font-extra-bold',
            ]}
          />
          <TypographyHelper
            title={'Text transformation'}
            values={['uppercase', 'capitalize', 'lowercase', 'normal-case']}
          />
          <TypographyHelper
            title={'Letter spacing'}
            values={[
              'tracking-tighter',
              'tracking-tight',
              'tracking-normal',
              'tracking-wide',
              'tracking-wider',
              'tracking-widest',
            ]}
          />
        </div>
      </div>
    </div>
  )
}

const TypographyHelper = ({ title, values }: any) => {
  return (
    <div className='p-4 shadow-lg rounded-md bg-gray-50 divide-y-1 space-y-1 border-4 border-white'>
      {/* <div className='text-gray-500 uppercase tracking-wider'>{title}</div> */}
      <div>
        {values.map((value: string) => (
          <div
            className='py-1 cursor-copy'
            onClick={() => navigator.clipboard.writeText(value)}
          >
            <span className={`${value}`}>
              {title}:{` `}
            </span>
            <span className='text-gray-500'>{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Typography
