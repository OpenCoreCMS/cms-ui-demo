import NextLink from 'next/link'

export default function ExternalLink({ children, href = '', className = '' }) {
  return (
    <NextLink href={href}>
      <a className={`${className} linkExternal`} target="_blank" rel="noopener">
        {children}
      </a>
    </NextLink>
  )
}
