import { Circle as LeafletCircle } from '@webdeveloperzbk/leaflet'
import {
  type CircleProps,
  createElementObject,
  createPathComponent,
  extendContext,
  updateCircle,
} from '@webdeveloperzbk/react-leaflet-core'

export type { CircleProps } from '@webdeveloperzbk/react-leaflet-core'

export const Circle = createPathComponent<LeafletCircle, CircleProps>(
  function createCircle({ center, children: _c, ...options }, ctx) {
    const circle = new LeafletCircle(center, options)
    return createElementObject(
      circle,
      extendContext(ctx, { overlayContainer: circle }),
    )
  },
  updateCircle,
)
