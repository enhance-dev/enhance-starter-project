export default function Preflight({ req }) {
  return {
    pageTitle: getPageTitle(req.path)
  }
}

function getPageTitle(path) {
  const titleMap = {
    //'/': 'Home'
  }

  return titleMap[path] || 'Enhance Starter Project'
}
