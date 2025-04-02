import { Control } from '@webdeveloperzbk/leaflet'
import { createControlComponent } from '@webdeveloperzbk/react-leaflet-core'

export type ScaleControlProps = Control.ScaleOptions

export const ScaleControl = createControlComponent<
  Control.Scale,
  ScaleControlProps
>(function createScaleControl(props) {
  return new Control.Scale(props)
})
