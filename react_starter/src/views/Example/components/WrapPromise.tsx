import { Suspense } from "react"

let data: any, promise: any

function fetchData() {
  if (data) return data
  promise = new Promise(resolve => {
    setTimeout(() => {
      data = "data fetched"
      resolve(null)
    }, 3000)
  })
  throw promise
}

const Content = () => {
  const data = fetchData()
  console.log("___________", data)
  return <p>{data}</p>
}

export const WrapPromise = () => {
  return (
    <>
      <Suspense fallback={"loading data"}>
        <Content />
      </Suspense>
    </>
  )
}
