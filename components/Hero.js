import { Button } from '@mui/material'

export default function Hero({ title, description, resume, buttonText }) {
  return (
    <article className="flex">
      <div className="mr-7">
        <video
          src="https://cademeudono3.s3.amazonaws.com/2758322-hd_1280_720_30fps.mp4"
          autoPlay
          loop
          muted
          className="rounded-xl w-full h-auto "
        />
      </div>
      <div className="flex flex-col max-w-[430px]">
        <h2 className="text-2xl font-semibold text-primary mb-5">{title}</h2>
        <p className="text-4xl font-bold mb-5">{description}</p>
        <span className="text-gray text-xl mb-12">{resume}</span>
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
