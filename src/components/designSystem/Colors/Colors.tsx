import { useState } from 'react'

export interface IColorsProps {}

const Colors = ({}: IColorsProps) => {
  const [color, setColor] = useState(null)
  return (
    <div className='bg-gray-100 h-screen px-4'>
      <div className=' max-w-7xl mx-auto border-t-8 border-gray-500'>
        <h2 className='text-xl mt-4'>Colors</h2>
        <p className='text-sm text-gray-600 pt-1'>
          Click on items to copy the class name.
          <div className={`pr-2 pt-1`}>
            {color && (
              <div className='flex'>
                <div className='mr-2'>Copied</div>
                <div className={`inline-block w-6 h-6 mr-2 ${color} `}></div>
                <div className={`inline-block`}>{color}</div>
              </div>
            )}
          </div>
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4'>
          <ColorsHelper setColor={setColor} color={'red'} />
          <ColorsHelper setColor={setColor} color={'yellow'} />
          <ColorsHelper setColor={setColor} color={'blue'} />
          <ColorsHelper setColor={setColor} color={'gray'} />
          <ColorsHelper setColor={setColor} color={'green'} />
        </div>
      </div>
    </div>
  )
}

const ColorsHelper = ({ color, setColor }: any) => {
  return (
    <div className='p-4 shadow-lg rounded-md bg-gray-50 divide-y-1 space-y-1 border-4 border-white'>
      {/* <div className='text-gray-500 uppercase tracking-wider'>{title}</div> */}
      <div>
        {[
          '50',
          '100',
          '200',
          '300',
          '400',
          '500',
          '600',
          '700',
          '800',
          '900',
        ].map((value: string) => {
          const bgColor = `bg-${color}-${value}`
          return (
            <span
              className={`${bgColor} shadow-md active:shadow-none py-1 mr-2 active:cursor-grabbing cursor-grab inline-block h-12 rounded-md w-12`}
              onClick={() => {
                setColor(bgColor)
                navigator.clipboard.writeText(bgColor)
              }}
            ></span>
          )
        })}
      </div>
    </div>
  )
}

export default Colors
