import { Control } from '@webdeveloperzbk/leaflet'
import { createControlComponent } from '@webdeveloperzbk/react-leaflet-core'

export type AttributionControlProps = Control.AttributionOptions

export const AttributionControl = createControlComponent<
  Control.Attribution,
  AttributionControlProps
>(function createAttributionControl(props) {
  return new Control.Attribution(props)
})
