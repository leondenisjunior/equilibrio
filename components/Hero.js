import { Button } from '@mui/material'
import classNames from 'classnames'
import Image from 'next/image'

export default function Hero({
  title,
  description,
  resume,
  buttonText,
  videoUrl,
  imageUrl,
  className,
}) {
  return (
    <article
      className={classNames(
        className,
        'flex flex-col lg:flex-row items-center',
      )}
    >
      {videoUrl && <Video url={videoUrl} />}
      {imageUrl && <ImageComponent url={imageUrl} />}
      <div className="flex flex-col max-w-[430px]">
        <h2 className="text-2xl font-semibold text-primary mb-5">{title}</h2>
        <p className="text-4xl font-bold mb-5">{description}</p>
        <span className="text-gray text-xl mb-5">{resume}</span>
        <div>
          <Button
            style={{ textTransform: 'none' }}
            size="large"
            className="!rounded-xl !font-bold"
            variant="outlined"
            color="secondary"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </article>
  )
}

const Video = ({ url }) => {
  const videoId = url.split('v=')[1]
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  return (
    <div
      className="lg:mr-5 w-full lg:w-1/2 mb-4 lg:mb-0"
      style={{
        cursor: 'pointer',
        display: 'inline-block',
        position: 'relative',
      }}
      onClick={() =>
        window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank')
      }
    >
      <img
        src={thumbnailUrl}
        alt="YouTube Video Thumbnail"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '48px',
          color: 'rgba(255, 255, 255, 0.8)',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
        }}
      >
        ▶️
      </div>
    </div>
  )
}

const ImageComponent = ({ url }) => (
  <Image className="lg:mr-5" src={url} alt="image" width={600} height={500} />
)
