export const patchRoundRect = (ctx?: CanvasRenderingContext2D) => {
  if (!ctx || Boolean(ctx?.roundRect)) return ctx
  ctx!.roundRect = function (
    x: number,
    y: number,
    width: number,
    height: number,
    radii: number | [number, number, number, number]
  ) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const ctx = this

    let r: [number, number, number, number]
    if (typeof radii === 'number') {
      r = [radii, radii, radii, radii]
    } else {
      r = radii
    }

    const [tl, tr, br, bl] = r

    ctx.beginPath()
    ctx.moveTo(x + tl, y)
    ctx.lineTo(x + width - tr, y)
    ctx.quadraticCurveTo(x + width, y, x + width, y + tr)
    ctx.lineTo(x + width, y + height - br)
    ctx.quadraticCurveTo(x + width, y + height, x + width - br, y + height)
    ctx.lineTo(x + bl, y + height)
    ctx.quadraticCurveTo(x, y + height, x, y + height - bl)
    ctx.lineTo(x, y + tl)
    ctx.quadraticCurveTo(x, y, x + tl, y)
    ctx.closePath()

    return ctx
  }
  return ctx
}
