import { getStyles }  from '@enhance/arc-plugin-styles'

export default function Head () {
  const styles = process.env.ARC_LOCAL
    ? getStyles.linkTag()
    : getStyles.styleTag()

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title></title>
      ${styles}
      <link rel="icon" href="/_public/favicon.svg">
    </head>
`
}
