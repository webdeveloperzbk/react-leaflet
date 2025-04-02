import { Control } from '@webdeveloperzbk/leaflet'
import { createControlComponent } from '@webdeveloperzbk/react-leaflet-core'

export type ZoomControlProps = Control.ZoomOptions

export const ZoomControl = createControlComponent<
  Control.Zoom,
  ZoomControlProps
>(function createZoomControl(props) {
  return new Control.Zoom(props)
})
