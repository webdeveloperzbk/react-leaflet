import { CircleMarker as LeafletCircleMarker } from '@webdeveloperzbk/leaflet'
import {
  type CircleMarkerProps,
  createElementObject,
  createPathComponent,
  extendContext,
  updateCircle,
} from '@webdeveloperzbk/react-leaflet-core'

export type { CircleMarkerProps } from '@webdeveloperzbk/react-leaflet-core'

export const CircleMarker = createPathComponent<
  LeafletCircleMarker,
  CircleMarkerProps
>(function createCircleMarker({ center, children: _c, ...options }, ctx) {
  const marker = new LeafletCircleMarker(center, options)
  return createElementObject(
    marker,
    extendContext(ctx, { overlayContainer: marker }),
  )
}, updateCircle)
