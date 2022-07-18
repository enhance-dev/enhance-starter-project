export async function get (req) {
  return {
    json: { people: ['fred', 'joe', 'mary'] }
  }
}
