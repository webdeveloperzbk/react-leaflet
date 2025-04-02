import type { Popup, Tooltip } from '@webdeveloperzbk/leaflet'

import { useAttribution } from './attribution.js'
import { type LeafletContextInterface, useLeafletContext } from './context.js'
import type { ElementHook, LeafletElement } from './element.js'
import { useEventHandlers } from './events.js'
import type { LayerProps } from './layer.js'
import { withPane } from './pane.js'

export type DivOverlay = Popup | Tooltip

export type SetOpenFunc = (open: boolean) => void

export type DivOverlayLifecycleHook<E, P> = (
  element: LeafletElement<E>,
  context: LeafletContextInterface,
  props: P,
  setOpen: SetOpenFunc,
) => void

export type DivOverlayHook<E extends DivOverlay, P> = (
  useElement: ElementHook<E, P>,
  useLifecycle: DivOverlayLifecycleHook<E, P>,
) => (props: P, setOpen: SetOpenFunc) => ReturnType<ElementHook<E, P>>

export function createDivOverlayHook<
  E extends DivOverlay,
  P extends LayerProps,
>(useElement: ElementHook<E, P>, useLifecycle: DivOverlayLifecycleHook<E, P>) {
  return function useDivOverlay(
    props: P,
    setOpen: SetOpenFunc,
  ): ReturnType<ElementHook<E, P>> {
    const context = useLeafletContext()
    const elementRef = useElement(withPane(props, context), context)

    useAttribution(context.map, props.attribution)
    useEventHandlers(elementRef.current, props.eventHandlers)
    useLifecycle(elementRef.current, context, props, setOpen)

    return elementRef
  }
}
