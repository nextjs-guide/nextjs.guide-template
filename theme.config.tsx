import Image from 'next/image'
import { useRouter } from 'next/router'
import type { FC, ReactNode, ReactElement } from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { AppPagesSelectButton } from './src/components/AppPagesSelectButton'

const NextJS = () => (
  <svg
    width="65"
    height="40"
    viewBox="0 0 400 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_102_26)">
      <path
        d="M261.919 0.0330811H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330811Z"
        fill="black"
      />
      <path
        d="M149.052 0.0330811V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330811H149.052Z"
        fill="black"
      />
      <path
        d="M183.32 0.0661621H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126668L229.312 0.154198L206.352 28.6697L183.32 0.0661621Z"
        fill="black"
      />
      <path
        d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
        fill="black"
      />
      <path
        d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"
        fill="black"
      />
      <path
        d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"
        fill="black"
      />
      <path
        d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"
        fill="black"
      />
    </g>
    <path
      d="M393.628 103V115.667H338.618V136.044H382.857V148.711H338.618V169.639H393.628V182.306H325.006V115.667H325V103H393.628Z"
      fill="black"
    />
    <rect x="210" y="103" width="14" height="79" fill="black" />
    <path
      d="M181.513 103H195.741V154.315C195.741 159.94 194.412 164.888 191.753 169.158C189.119 173.427 185.412 176.764 180.631 179.168C175.849 181.545 170.263 182.734 163.871 182.734C157.453 182.734 151.854 181.545 147.072 179.168C142.291 176.764 138.584 173.427 135.95 169.158C133.317 164.888 132 159.94 132 154.315V103H146.229V153.126C146.229 156.399 146.945 159.314 148.376 161.871C149.834 164.427 151.879 166.435 154.513 167.892C157.146 169.324 160.266 170.04 163.871 170.04C167.476 170.04 170.595 169.324 173.229 167.892C175.888 166.435 177.933 164.427 179.365 161.871C180.797 159.314 181.513 156.399 181.513 153.126V103Z"
      fill="black"
    />
    <rect x="74.125" y="140" width="43.875" height="12" fill="black" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28 137C28 118.222 43.2223 103 62 103H84C99.662 103 112.851 113.59 116.796 128H100.586C97.4995 120.936 90.4512 116 82.25 116H63.75C52.7043 116 43.75 124.954 43.75 136V150C43.75 161.046 52.7043 170 63.75 170H82.25C93.2956 170 102.25 161.046 102.25 150V140H118V149C118 167.778 102.778 183 84 183H62C43.2223 183 28 167.778 28 149V137Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M238.076 103.212H238V182.212H278C285.054 182.212 291.606 180.064 297.038 176.386L288.391 165.654C285.158 167.897 281.233 169.212 277 169.212H252V120.493L238.076 103.212ZM302.605 171.678L293.552 160.443C295.728 157.241 297 153.375 297 149.212V136.212C297 125.167 288.046 116.212 277 116.212H257.911L247.436 103.212H278C296.778 103.212 312 118.435 312 137.212V148.212C312 157.311 308.426 165.576 302.605 171.678Z"
      fill="black"
    />
    <defs>
      <clipPath id="clip0_102_26">
        <rect width="394" height="80" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

// const LogoSeparator = () => (
//   <svg height="32" role="separator" viewBox="0 0 32 32" width="32">
//     <path d="M22 5L9 28" stroke="#333" />
//   </svg>
// )

// const Vercel = () => (
//   <svg height="22" viewBox="0 0 74 64">
//     <path
//       d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
//       fill="currentColor"
//     />
//   </svg>
// )

// TODO: Type Safe
const config: DocsThemeConfig = {
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    const url = 'https://nextjs.guide' + asPath
    const title = `${frontMatter.title} | Next.js Guide`
    return (
      <>
        <title>{title}</title>
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="48x48"
        ></link>
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
        <AppPagesSelectButton />
        <h1 className="nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight">
          {frontMatter.title}
        </h1>
        {children}
      </>
    )
  },
  sidebar: {
    titleComponent: ({
      title,
      route,
    }):
      | ReactNode
      | FC<{
          title: string
          type: string
          route: string
        }> => {
      // TODO: Get app or pages by cookie?
      const router = useRouter()
      const isApp = router.pathname.startsWith('/app')
      const isPages = router.pathname.startsWith('/pages')
      const isAppContent = route.startsWith('/app')
      const isPagesContent = route.startsWith('/pages')
      if ((isApp && isPagesContent) || (isPages && isAppContent)) {
        return <span className="jc-title-display-none"></span>
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
    <span className="nextjs-guide-logo">
      <NextJS />
    </span>
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
    Image: (props: any) => (
      <Image src={props.srcDark} alt={props.alt} {...props} />
    ),
    AppOnly: ({ children }: any): ReactElement<any, any> | null => {
      const { route } = useRouter()
      if (route.startsWith('/app')) return <>{children}</>
    },
    PagesOnly: ({ children }: any): ReactElement<any, any> | null => {
      const { route } = useRouter()
      if (route.startsWith('/pages')) return <>{children}</>
    },
  },
}

export default config
