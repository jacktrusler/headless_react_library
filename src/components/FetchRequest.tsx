import { useQuery } from "@tanstack/react-query"

function FetchRequest() {
  const { isLoading, error, data } = useQuery(['repoData'], () =>
    fetch('https://www.jsonbateman.com').then(res =>
      res.json()
    )
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return (<div>An error has occurred</div>)
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.birthday}</p>
      <strong>👀 {data.weight}</strong>{' '}
      <strong>✨ {data.zodiac}</strong>{' '}
      <strong>🍴 {data.weight}</strong>
    </div>
  )
}

export default FetchRequest;
