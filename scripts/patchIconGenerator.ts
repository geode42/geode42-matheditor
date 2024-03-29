const SVGWidth = 100

const threadHeight = 23
const threadWidth = 6.8
const threadGap = 8
const threadBorderRadius = threadWidth / 2

const squareBorderWidth = threadWidth
const squareBorderRadius = 8

let SVGXML = `<svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 ${SVGWidth} ${SVGWidth}">`

SVGXML += '<style>rect{fill:currentColor}</style>'

function addRect(x: number, y: number, width: number, height: number, borderRadius=0, fill='', fillOpacity=1, stroke='', strokeWidth=0) {
	SVGXML += `<rect x=${Math.round(x * 10)/10} y=${Math.round(y*10)/10} width=${width} height=${height}${borderRadius ? ' rx=' + borderRadius : ''}${stroke ? ' stroke=' + stroke : ''}${fill ? ' fill=' + fill : ''}${fillOpacity != 1 ? ' fill-opacity='+fillOpacity:''}${strokeWidth ? ' stroke-width=' + strokeWidth : ''}/>`
}

addRect(threadHeight / 2, threadHeight / 2, SVGWidth - threadHeight, SVGWidth - threadHeight, squareBorderRadius, '', 0, 'currentColor', squareBorderWidth)

// Top
addRect(SVGWidth / 2 - threadWidth / 2 - threadWidth - threadGap, 0, threadWidth, threadHeight, threadBorderRadius)
addRect(SVGWidth / 2 - threadWidth / 2, 0, threadWidth, threadHeight, threadBorderRadius)
addRect(SVGWidth / 2 - threadWidth / 2 + threadWidth + threadGap, 0, threadWidth, threadHeight, threadBorderRadius)

// Left
addRect(0, SVGWidth / 2 - threadWidth / 2 - threadWidth - threadGap, threadHeight, threadWidth, threadBorderRadius)
addRect(0, SVGWidth / 2 - threadWidth / 2, threadHeight, threadWidth, threadBorderRadius)
addRect(0, SVGWidth / 2 - threadWidth / 2 + threadWidth + threadGap, threadHeight, threadWidth, threadBorderRadius)

// Bottom
addRect(SVGWidth / 2 - threadWidth / 2 - threadWidth - threadGap, SVGWidth - threadHeight, threadWidth, threadHeight, threadBorderRadius)
addRect(SVGWidth / 2 - threadWidth / 2, SVGWidth - threadHeight, threadWidth, SVGWidth - threadHeight, threadBorderRadius)
addRect(SVGWidth / 2 - threadWidth / 2 + threadWidth + threadGap, SVGWidth - threadHeight, threadWidth, threadHeight, threadBorderRadius)

// Right
addRect(SVGWidth - threadHeight, SVGWidth / 2 - threadWidth / 2 - threadWidth - threadGap, threadHeight, threadWidth, threadBorderRadius)
addRect(SVGWidth - threadHeight, SVGWidth / 2 - threadWidth / 2, threadHeight, threadWidth, threadBorderRadius)
addRect(SVGWidth - threadHeight, SVGWidth / 2 - threadWidth / 2 + threadWidth + threadGap, threadHeight, threadWidth, threadBorderRadius)

SVGXML += '</svg>'

console.log(SVGXML)