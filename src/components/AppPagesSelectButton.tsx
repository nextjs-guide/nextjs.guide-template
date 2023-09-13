import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// TODO: Style this
export function AppPagesSelectButton() {
  const [selectedOption, setSelectedOption] = useState('')
  const router = useRouter()

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value)
  }

  useEffect(() => {
    if (router) {
      let url = router.pathname
      if (selectedOption === 'PAGES' && url.includes('/app')) {
        const newURL = url.replace(/\/app/, '/pages')
        router.push(newURL)
      }
      if (selectedOption === 'APP' && url.includes('/pages')) {
        const newURL = url.replace(/\/pages/, '/app')
        router.push(newURL)
      }
    }
  }, [selectedOption, router])

  return (
    <select
      className="w-screen"
      value={selectedOption}
      onChange={handleSelectChange}
    >
      <option value="APP">Using App Router</option>
      <option value="PAGES">Using Pages Router</option>
    </select>
  )
}
