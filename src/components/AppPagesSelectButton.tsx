import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// TODO: Style this
export function AppPagesSelectButton() {
  const [selectedOption, setSelectedOption] = useState('') // Set the initial selected value
  const router = useRouter()

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value)
  }

  useEffect(() => {
    if (router) {
      let url = router.pathname
      if (selectedOption === 'APP') {
        url = url.replace('/pages', '/app')
        router.push(url)
      }
      if (selectedOption === 'PAGES') {
        url = url.replace('/app', '/pages')
        router.push(url)
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
