import { createControlComponent } from '@react-leaflet/core'
import { Control } from '@webdeveloperzbk/leaflet'

export type AttributionControlProps = Control.AttributionOptions

export const AttributionControl = createControlComponent<
  Control.Attribution,
  AttributionControlProps
>(function createAttributionControl(props) {
  return new Control.Attribution(props)
})
