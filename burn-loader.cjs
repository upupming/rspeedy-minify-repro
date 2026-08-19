const BURN_MS = Number(process.env.BURN_MS ?? 2)

module.exports = function (source) {
  const budget = BigInt(Math.round(BURN_MS * 1e6))
  const start = process.hrtime.bigint()
  while (process.hrtime.bigint() - start < budget) {}
  return source
}
