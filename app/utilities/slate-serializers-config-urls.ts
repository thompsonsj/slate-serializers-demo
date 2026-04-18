import { ghUrl } from '@/app/utilities/docs'

/** GitHub links to DOM config sources in slate-serializers (shared by html/template serializers). */
export const domConfigUrl = {
  default: ghUrl('packages/dom/src/lib/config/default.ts'),
  slateDemo: ghUrl('packages/dom/src/lib/config/slateDemo.ts'),
  payload: ghUrl('packages/dom/src/lib/config/payload.ts'),
} as const

/** GitHub links to @slate-serializers/template config sources. */
export const templateConfigUrl = {
  default: ghUrl('packages/template/src/lib/config/default.ts'),
  slateDemo: ghUrl('packages/template/src/lib/config/slateDemo.ts'),
  payload: ghUrl('packages/template/src/lib/config/payload.ts'),
} as const
