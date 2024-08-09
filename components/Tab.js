'use client'
import classNames from 'classnames'

export default function Tab({ data, onChange, value }) {
  console.log('data', data)
  return (
    <div className="flex justify-between items-center border-b border-solid border-gray3">
      <span className="text-lg text-gray">Selecione por Linha:</span>
      <nav className="">
        <ul className="flex justify-between w-[600px]">
          {data.map((item) => {
            return (
              <li
                onClick={() => onChange(item)}
                className={classNames(
                  'text-xl cursor-pointer text-center text-gray',
                  {
                    'text-green font-bold border-b-4 border-solid border-green':
                      item === value,
                  },
                )}
                key={item}
              >
                {item}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
