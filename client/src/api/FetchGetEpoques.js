const FetchGetEpoques = async (url) => {
  const fullUrl = '/api/v1/' + url
  //console.log(url)
  try {
    const res = await fetch(fullUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const resdata = await res.json()
    return resdata.body
  } catch (error) {
    console.log('error', error)
  }
}
export default FetchGetEpoques
