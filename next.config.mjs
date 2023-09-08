import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  options: {
    remarkPlugins: [remarkGfm],
  },
}

const withMDX = createMDX(nextConfig)
export { withMDX as default }
