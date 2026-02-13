import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Banner: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  if (fileData.slug !== "index") {
    return null
  }

  return (
    <div class="banner">
      <img src="/static/banner.png" alt="Banner" />
    </div>
  )
}

Banner.css = `
.banner {
  width: 100%;
  margin: 1rem 0;
}

.banner img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
`

export default (() => Banner) satisfies QuartzComponentConstructor
