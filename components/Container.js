import classNames from 'classnames'

export default function Container({ children, className, backgroundColor }) {
  if (backgroundColor) {
    return (
      <div className={backgroundColor}>
        <div className={classNames(className, 'max-w-7xl ml-auto mr-auto')}>
          {children}
        </div>
      </div>
    )
  }
  return (
    <div className={classNames(className, 'max-w-7xl ml-auto mr-auto')}>
      {children}
    </div>
  )
}
