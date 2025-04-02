import { FeatureGroup as LeafletFeatureGroup } from '@webdeveloperzbk/leaflet'
import {
  type PathProps,
  createElementObject,
  createPathComponent,
  extendContext,
} from '@webdeveloperzbk/react-leaflet-core'

import type { LayerGroupProps } from './LayerGroup.js'

export interface FeatureGroupProps extends LayerGroupProps, PathProps {}

export const FeatureGroup = createPathComponent<
  LeafletFeatureGroup,
  FeatureGroupProps
>(function createFeatureGroup({ children: _c, ...options }, ctx) {
  const group = new LeafletFeatureGroup([], options)
  return createElementObject(
    group,
    extendContext(ctx, { layerContainer: group, overlayContainer: group }),
  )
})
