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
    ctx.arcTo(x + width, y, x + width, y + tr, tr)
    ctx.lineTo(x + width, y + height - br)
    ctx.arcTo(x + width, y + height, x + width - br, y + height, br)
    ctx.lineTo(x + bl, y + height)
    ctx.arcTo(x, y + height, x, y + height - bl, bl)
    ctx.lineTo(x, y + tl)
    ctx.arcTo(x, y, x + tl, y, tl)
    ctx.closePath()

    return ctx
  }
  return ctx
}
