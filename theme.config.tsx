import Image from 'next/image'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const NextJS = () => (
  <svg height="20" viewBox="0 0 283 64" fill="none">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80">
      <path
        fill="currentColor"
        d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"
      />
      <path
        fill="currentColor"
        d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"
      />
    </svg>
  </svg>
)

const LogoSeparator = () => (
  <svg height="32" role="separator" viewBox="0 0 32 32" width="32">
    <path d="M22 5L9 28" stroke="#333" />
  </svg>
)

const Vercel = () => (
  <svg height="22" viewBox="0 0 74 64">
    <path
      d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
      fill="currentColor"
    />
  </svg>
)

const config: DocsThemeConfig = {
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://nextjs.guide' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={frontMatter.description} />
      </>
    )
  },
  main: ({ children }) => {
    const { frontMatter } = useConfig()
    return (
      <>
        <h1 className="nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight">
          {frontMatter.title}
        </h1>
        {children}
      </>
    )
  },
  sidebar: {
    titleComponent: ({ title, route }) => {
      // TODO: Get app or pages by cookie?
      const router = useRouter()
      const isApp = router.pathname.startsWith('/app')
      const isPages = router.pathname.startsWith('/pages')
      const isAppContent = route.startsWith('/app')
      const isPagesContent = route.startsWith('/pages')
      if ((isApp && isPagesContent) || (isPages && isAppContent)) {
        return <span className="jc-display-none"></span>
      }

      const appOnly = route === '/app'
      const pagesOnly = route === '/pages'
      if (appOnly || pagesOnly) return <span className="jc-display-none"></span>

      const isFirstLayer = route.split('/').length === 2
      const isAppFirstLayer =
        route.startsWith('/app') && route.split('/').length === 3
      const isPagesFirstLayer =
        route.startsWith('/pages') && route.split('/').length === 3
      if (isFirstLayer || isAppFirstLayer || isPagesFirstLayer) {
        return <span className="dark:jc-main-title">{title}</span>
      }
      return title
    },
    defaultMenuCollapseLevel: 3,
  },
  logo: (
    <>
      <Vercel />
      <LogoSeparator />
      <NextJS />
    </>
  ),
  logoLink: '/',
  project: {
    link: 'https://github.com/nextjs-guide/nextjs.guide-template',
  },
  footer: {
    text: 'Next.js Guide',
  },
  primaryHue: 213,
  components: {
    Check: () => <span>✅</span>,
    Cross: () => <span>❌</span>,
    Image: (props: any) => <Image src={props.srcDark} {...props} />,
    AppOnly: ({ children }: any) => {
      const { route } = useRouter()
      if (route.startsWith('/app')) return <>{children}</>
    },
    PagesOnly: ({ children }: any) => {
      const { route } = useRouter()
      if (route.startsWith('/pages')) return <>{children}</>
    },
  },
}

export default config
