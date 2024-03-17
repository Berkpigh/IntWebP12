const FetchGetProjets = async (url) => {
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
    //console.log('resdata.body', resdata.body)
    return resdata.body
    /*   } catch {
    console.log('getprojets')
  } */
  } catch (error) {
    console.log('error', error)
  }
}
export default FetchGetProjets
