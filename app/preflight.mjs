export default async function Preflight({ req }) {
  const {
    path,
    params,
    query
  } = req

  return {
    path,
    params,
    query,
    pageTitle: getPageTitle(req.path)
  }
}

function getPageTitle(path) {
  const titleMap = {
    '/': 'Enhance Starter Project'
  }

  return titleMap[path]
}
