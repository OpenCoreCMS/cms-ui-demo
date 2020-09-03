import { useRouter } from 'next/router'
import NextLink from 'next/link'

export default function AppLink({ children, href = '', className = '' }) {
  const router = useRouter()
  const isActive = router.pathname === href;

  return (
    <NextLink href={href}>
      <a className={`${className} ${isActive ? 'active' : ''}`}>
        {children}
      </a>
    </NextLink>
  )
}
