export default function blendColors(color1, color2) {
    let r1 = (color1 >> 16) & 0xFF
    let g1 = (color1 >> 8) & 0xFF
    let b1 = color1 & 0xFF

    let r2 = (color2 >> 16) & 0xFF
    let g2 = (color2 >> 8) & 0xFF
    let b2 = color2 & 0xFF

    let r = Math.floor((r1 * r2) / 255)
    let g = Math.floor((g1 * g2) / 255)
    let b = Math.floor((b1 * b2) / 255)

    return (r << 16) | (g << 8) | b
}