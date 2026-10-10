import type { IconType } from 'react-icons'

export const IconLink = ({ href, label, icon: Icon }: { href: string; label: string; icon: IconType }) => (
  <a
    href={href}
    className="rounded-sm p-1 text-gray-500 hover:text-gray-700 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-indigo-500"
  >
    <span className="sr-only">{label}</span>
    <Icon className="h-5 w-5" aria-hidden="true" />
  </a>
)
