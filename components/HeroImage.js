import { Button } from '@mui/material'
import classNames from 'classnames'

export default function HeroImage({
  title,
  description,
  resume,
  button,
  image,
  className,
}) {
  return (
    <article className={classNames('flex ', className)}>
      <div className="flex items-center justify-center w-1/2">
        <img src={image} alt="image" />
      </div>
      <div className="flex flex-col w-1/2">
        <h2 className="text-2xl font-semibold text-primary mb-5">{title}</h2>
        <p className="text-4xl font-bold mb-5">{description}</p>
        <span className="text-gray text-xl mb-12">{resume}</span>
        {button && (
          <div>
            <Button
              style={{ textTransform: 'none' }}
              size="large"
              className="!rounded-xl !font-bold"
              variant="outlined"
              color="secondary"
              onClick={button.action}
            >
              {button.text}
            </Button>
          </div>
        )}
      </div>
    </article>
  )
}
