async function GetApi(path: string, init: RequestInit) {
  const res = await fetch('http://localhost:8000/api/' + path, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...init,
  })
  console.log(res)
  const json = await res.json()
  return json
}

async function SetLanguage(lang: string) {
  const body = { lang: lang }
  const data = await GetApi('language', {
    method: 'POST',
    body: JSON.stringify(body),
  })
  return data
}

async function SetMode(mode: string) {
  const body = { mode: mode }
  const data = await GetApi('mode', {
    method: 'POST',
    body: JSON.stringify(body),
  })
  return data
}

export { SetLanguage, SetMode }
