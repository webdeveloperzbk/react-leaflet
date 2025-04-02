import {
  type LatLngExpression,
  Marker as LeafletMarker,
  type MarkerOptions,
} from '@webdeveloperzbk/leaflet'
import {
  type EventedProps,
  createElementObject,
  createLayerComponent,
  extendContext,
} from '@webdeveloperzbk/react-leaflet-core'
import type { ReactNode } from 'react'

export interface MarkerProps extends MarkerOptions, EventedProps {
  children?: ReactNode
  position: LatLngExpression
}

export const Marker = createLayerComponent<LeafletMarker, MarkerProps>(
  function createMarker({ position, ...options }, ctx) {
    const marker = new LeafletMarker(position, options)
    return createElementObject(
      marker,
      extendContext(ctx, { overlayContainer: marker }),
    )
  },
  function updateMarker(marker, props, prevProps) {
    if (props.position !== prevProps.position) {
      marker.setLatLng(props.position)
    }
    if (props.icon != null && props.icon !== prevProps.icon) {
      marker.setIcon(props.icon)
    }
    if (
      props.zIndexOffset != null &&
      props.zIndexOffset !== prevProps.zIndexOffset
    ) {
      marker.setZIndexOffset(props.zIndexOffset)
    }
    if (props.opacity != null && props.opacity !== prevProps.opacity) {
      marker.setOpacity(props.opacity)
    }
    if (marker.dragging != null && props.draggable !== prevProps.draggable) {
      if (props.draggable === true) {
        marker.dragging.enable()
      } else {
        marker.dragging.disable()
      }
    }
  },
)
