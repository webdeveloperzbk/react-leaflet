import { DomUtil } from '@webdeveloperzbk/leaflet'

function splitClassName(className: string): string[] {
  return className.split(' ').filter(Boolean)
}

export function addClassName(element: HTMLElement, className: string) {
  for (const cls of splitClassName(className)) {
    DomUtil.addClass(element, cls)
  }
}

export function removeClassName(element: HTMLElement, className: string) {
  for (const cls of splitClassName(className)) {
    DomUtil.removeClass(element, cls)
  }
}

export function updateClassName(
  element?: HTMLElement,
  prevClassName?: string,
  nextClassName?: string,
) {
  if (element != null && nextClassName !== prevClassName) {
    if (prevClassName != null && prevClassName.length > 0) {
      removeClassName(element, prevClassName)
    }
    if (nextClassName != null && nextClassName.length > 0) {
      addClassName(element, nextClassName)
    }
  }
}
