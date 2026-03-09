import { useState } from "react"

const useBoolean = (initialBool = false): [boolean, () => void, () => void] => {
  const [bool, setBool] = useState(initialBool)

  return [bool, () => setBool(true), () => setBool(false)]
}

export default useBoolean
