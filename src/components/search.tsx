
import axios from 'axios'
import { useQuery } from 'react-query'


function Search() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      axios.get('api/search'),
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error

  console.log(data)

  return (
    <div>

    </div>
  )
}

export default Search