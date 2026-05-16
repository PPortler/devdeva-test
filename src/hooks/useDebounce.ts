import { useEffect, useState } from 'react'

type UseDebounceProps<T> = {
  value: T
  delay?: number
}

function useDebounce<T>({
  value,
  delay = 500,
}: UseDebounceProps<T>) {
  const [debouncedValue, setDebouncedValue] =
    useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce