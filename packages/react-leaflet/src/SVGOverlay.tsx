import { SVGOverlay as LeafletSVGOverlay } from '@webdeveloperzbk/leaflet'
import {
  type MediaOverlayProps,
  createElementHook,
  createElementObject,
  createLayerHook,
  updateMediaOverlay,
} from '@webdeveloperzbk/react-leaflet-core'
import {
  type ReactNode,
  type Ref,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { createPortal } from 'react-dom'

export interface SVGOverlayProps extends MediaOverlayProps {
  attributes?: Record<string, string>
  children?: ReactNode
}

export const useSVGOverlayElement = createElementHook<
  LeafletSVGOverlay,
  SVGOverlayProps,
  SVGSVGElement
>(function createSVGOverlay(props, context) {
  const { attributes, bounds, ...options } = props

  const container = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg',
  )
  container.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  if (attributes != null) {
    for (const name of Object.keys(attributes)) {
      container.setAttribute(name, attributes[name])
    }
  }

  const overlay = new LeafletSVGOverlay(container, bounds, options)
  return createElementObject(overlay, context, container)
}, updateMediaOverlay)

export const useSVGOverlay = createLayerHook(useSVGOverlayElement)

function SVGOverlayComponent(
  { children, ...options }: SVGOverlayProps,
  forwardedRef: Ref<LeafletSVGOverlay>,
) {
  const { instance, container } = useSVGOverlay(options).current
  useImperativeHandle(forwardedRef, () => instance)

  return container == null || children == null
    ? null
    : // @ts-ignore container type
      createPortal(children, container)
}

export const SVGOverlay = forwardRef(SVGOverlayComponent)
