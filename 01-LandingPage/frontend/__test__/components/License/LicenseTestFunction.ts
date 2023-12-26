function createTestLicenseJson() {
  const locations = ['backend', 'frontend', 'python', 'swagger', 'locationTest']
  const environments = ['production', 'development', 'environmentTest']
  const licenses = ['MIT', 'Apache-2.0', 'GPL-3.0']
  const json: Array<object> = []
  locations.map((location) =>
    environments.map((environment) => {
      const name = `name-${location}-${environment}`
      const version = `${Math.floor(Math.random() * 10) + 1}.${Math.floor(Math.random() * 10)}.${Math.floor(
        Math.random() * 10
      )}`
      const license = licenses[Math.floor(Math.random() * licenses.length)]
      json.push({
        name,
        version,
        license,
        install: `http://localhost/install/${name.replace(/-/g, '/')}`,
        github: `http://localhost/github/${name.replace(/-/g, '/')}`,
        body: `${name} license info`,
        location,
        environment,
      })
    })
  )
  return json
}

function parseQueryString(queryString: string | undefined) {
  if (!queryString) return undefined

  const pairs = queryString.split('&')

  if (pairs.length === 1) {
    const [key, value] = pairs[0].split('=')
    return { [key]: value }
  } else {
    const parsedObject = pairs.reduce((acc: any, pair) => {
      const [key, value] = pair.split('=')
      acc[key] = value
      return acc
    }, {})

    return parsedObject
  }
}

function filterDataByKeyValuePair(json: Array<object>, query: any) {
  if (!query) return json
  const keys = Object.keys(query)
  return json.filter((data: any) => keys.every((key) => data[key] === query[key]))
}

function filterNotMatchDataByKeyValuePair(json: Array<object>, query: any) {
  if (!query) return json
  const keys = Object.keys(query)
  return json.filter((data: any) => keys.every((key) => data[key] !== query[key]))
}

export { createTestLicenseJson, filterDataByKeyValuePair, filterNotMatchDataByKeyValuePair, parseQueryString }
