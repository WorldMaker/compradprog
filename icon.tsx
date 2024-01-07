import { jsx, Static } from 'butterfloat'
import { IconNode, createElement } from 'lucide'

export interface IconProps {
  icon: IconNode
}

export function Icon({ icon }: IconProps) {
  return <Static element={createElement(icon)} />
}
