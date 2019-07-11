import React from 'react';

class DotsFillPattern extends React.Component {

    render = () => {
        let dim = 20
        if (this.props.dimension) {
            dim = parseInt(this.props.dimension)
        }
        let width = dim
        let height = dim
        let radius = 1.5
        let fillColor = 'rgba(0,0,0, 0.15)'

        // <path d="M-1,1 l2,-2
        //          M0,4 l4,-4
        //          M3,5 l2,-2"
        //       stroke="black" strokeWidth="1" />

        return (
            <pattern id={this.props.patternId} patternUnits="userSpaceOnUse" width={width} height={height}>
                <circle cx={width-radius} cy={height-radius} r={radius} fill={fillColor}/>
            </pattern>
        )
    }
}

export class BrowserMockup extends React.Component {

    render = () => {
        let padding = 20

        let watchWidth = 1920
        let watchHeight = 1080
        let phoneHeightToWidthFactor = watchHeight / watchWidth
        let phoneRadius = 10
        let strokeWidth = 1
        if (this.props.asIcon) {
            strokeWidth = 15
        }

        let frame = <rect x="0" y="0" width={watchWidth} height={watchHeight} rx={phoneRadius} stroke="black" strokeWidth={strokeWidth} fill="none" />
        let innerFrame = <rect x="0" y="0" width={watchWidth} height="98" stroke="gray" strokeWidth={strokeWidth} fill="none" />
        let content = <rect x="0" y="100" width={watchWidth} height="980" rx="70" stroke="black" strokeWidth={strokeWidth} fill='url(#pattern2)'/>


        // let startX = 80
        // let startY = 101
        // let bigRadius = phoneRadius * 6
        // let beltHeight = 65
        // let beltLength =  190
        // let beltRadius = 20
        // let beltPath = `M${startX},${startY}
        //                 a${beltRadius},${beltRadius},0,0,0,${beltRadius},${-beltRadius}
        //                 V${startY - beltRadius - beltHeight}
        //                 a${bigRadius},${bigRadius},0,0,1,${startX + beltLength},${0}
        //                 V${startY - beltRadius}
        //                 a${beltRadius},${beltRadius},0,0,0,${beltRadius},${beltRadius}
        //                 `

        // let belt = <path d={beltPath} fill="none" stroke="black" strokeWidth={strokeWidth}/>
        // let bottomBelt = <path d={beltPath} fill="none" stroke="black" strokeWidth={strokeWidth} transform={`scale(1,-1) translate(0, ${-watchHeight*1.365})`}/>



        let parentWidth = parseInt(this.props.parentWidth)
        let parentHeight = parseInt(this.props.parentHeight)
        let svgRealWidth = 0
        let svgRealHeight = 0

        let widthRatio = parentWidth / watchWidth
        let heightRatio = parentHeight / watchHeight
        let parentHWRatio = parentHeight / parentWidth
        let myHWRatio = (watchHeight) / watchWidth

        if (parentHWRatio >= myHWRatio) {
            svgRealWidth = parentWidth
            svgRealHeight = svgRealWidth * myHWRatio // parentHeight - padding * 2
        } else {
            svgRealHeight = parentHeight // parentHeight - padding * 2
            svgRealWidth = svgRealHeight / myHWRatio
        }

        let ww = (svgRealWidth) + 'px'
        let wh = (svgRealHeight) + 'px'
        let viewBox = `0 0 ${watchWidth + 5} ${watchHeight + 205 }`

        return (
            <svg className="mkp-svg-browser mkp-svg"
                 type="mkp-svg-browser"
                 style={{width:ww, height:wh}}
                 viewBox={viewBox}
                 preserveAspectRatio="xMidYMid meet">
                <DotsFillPattern patternId="pattern2"/>
                <g>
                    {frame}
                    {innerFrame}
                    {content}
                </g>
            </svg>
        )
    }
}

export class PhoneMockup extends React.Component {

    render = () => {
        let padding = 20

        let strokeWidth = 1
        if (this.props.asIcon) {
            strokeWidth = 5
        }

        let startX = 0
        let startY = 0
        let phoneHeight = 750
        let phoneWidth = 375
        let phoneHeightToWidthFactor = phoneHeight / phoneWidth
        let phoneRadius = 44
        let framePath = `M${startX},${startY + phoneRadius}
                         a${phoneRadius},${phoneRadius},0,0,1,${phoneRadius},${-phoneRadius}
                         H${phoneWidth - phoneRadius}
                         a${phoneRadius},${phoneRadius},0,0,1,${phoneRadius},${phoneRadius}
                         V${phoneHeight - phoneRadius}
                         a${phoneRadius},${phoneRadius},0,0,1,${-phoneRadius},${phoneRadius}
                         H${startX + phoneRadius}
                         a${phoneRadius},${phoneRadius},0,0,1,${-phoneRadius},${-phoneRadius} z
                        `

        let frame = <path d={framePath} fill="none" stroke="black" strokeWidth={strokeWidth}/>

        let phoneBorder = 7

        let contentHeight = phoneHeight - phoneBorder
        phoneWidth = phoneWidth - phoneBorder
        phoneRadius = 40

        let notchRadius = phoneRadius / 3
        let notchHeight = phoneHeight / 35
        let notchWidth = 185
        let notchDist = 41

        let contentPath = `M${startX + phoneBorder},${startY + phoneBorder + phoneRadius}
                         a${phoneRadius},${phoneRadius},0,0,1,${phoneRadius},${-phoneRadius}

                         H${startX + phoneBorder + phoneRadius + notchDist}
                         V${startY + phoneBorder + notchHeight}
                         a${notchRadius},${notchRadius},0,0,0,${notchRadius},${notchRadius}
                         H${startX + phoneBorder + phoneRadius + notchDist + notchWidth}
                         a${notchRadius},${notchRadius},0,0,0,${notchRadius},${-notchRadius}
                         V${startY + phoneBorder}
                         H${startX + phoneBorder + phoneRadius + notchDist + notchWidth + notchRadius + notchDist}

                         a${phoneRadius},${phoneRadius},0,0,1,${phoneRadius},${phoneRadius}
                         V${contentHeight - phoneRadius}
                         a${phoneRadius},${phoneRadius},0,0,1,${-phoneRadius},${phoneRadius}
                         H${startX + phoneBorder + phoneRadius}
                         a${phoneRadius},${phoneRadius},0,0,1,${-phoneRadius},${-phoneRadius} z`



        let content = <path d={contentPath} fill="none" stroke="black" strokeWidth={strokeWidth} fill='url(#pattern2)'/>

        let parentWidth = parseInt(this.props.parentWidth)
        let parentHeight = parseInt(this.props.parentHeight)
        let svgRealWidth = 0
        let svgRealHeight = 0

        let parentHWRatio = parentHeight / parentWidth
        let myHWRatio = (phoneHeight) / phoneWidth

        if (parentHWRatio >= myHWRatio) {
            svgRealWidth = parentWidth
            svgRealHeight = svgRealWidth * myHWRatio // parentHeight - padding * 2
        } else {
            svgRealHeight = parentHeight // parentHeight - padding * 2
            svgRealWidth = svgRealHeight / myHWRatio
        }

        let ww = (svgRealWidth) + 'px'
        let wh = (svgRealHeight) + 'px'
        let viewBox = `0 0 ${phoneWidth + padding} ${phoneHeight}`


        return (
            <svg className="mkp-svg-phone mkp-svg"
                 type="mkp-svg-phone"
                 style={{width:ww, height:wh}}
                 viewBox={viewBox}
                 preserveAspectRatio="xMidYMid meet">
                <DotsFillPattern patternId="pattern2"/>
                <g>
                    {frame}
                    {content}
                </g>
            </svg>
        )
    }
}


export class WatchMockup extends React.Component {

    render = () => {
        let padding = 20

        let watchHeight = 550
        let watchWidth = 470
        let phoneHeightToWidthFactor = watchHeight / watchWidth
        let phoneRadius = 100
        let strokeWidth = 1
        if (this.props.asIcon) {
            strokeWidth = 5
        }

        let frame = <rect x="0" y="100" width={watchWidth} height={watchHeight} rx={phoneRadius} stroke="black" strokeWidth={strokeWidth} fill="none" />
        let innerFrame = <rect x="20" y="120" width="430" height="510" rx="80" stroke="gray" strokeWidth={strokeWidth} fill="none" />
        let content = <rect x="50" y="150" width="368" height="448" rx="70" stroke="black" strokeWidth={strokeWidth} fill='url(#pattern2)'/>


        let startX = 80
        let startY = 101
        let bigRadius = phoneRadius * 6
        let beltHeight = 65
        let beltLength =  190
        let beltRadius = 20
        let beltPath = `M${startX},${startY}
                        a${beltRadius},${beltRadius},0,0,0,${beltRadius},${-beltRadius}
                        V${startY - beltRadius - beltHeight}
                        a${bigRadius},${bigRadius},0,0,1,${startX + beltLength},${0}
                        V${startY - beltRadius}
                        a${beltRadius},${beltRadius},0,0,0,${beltRadius},${beltRadius}
                        `

        let belt = <path d={beltPath} fill="none" stroke="black" strokeWidth={strokeWidth}/>
        let bottomBelt = <path d={beltPath} fill="none" stroke="black" strokeWidth={strokeWidth} transform={`scale(1,-1) translate(0, ${-watchHeight*1.365})`}/>



        let parentWidth = parseInt(this.props.parentWidth)
        let parentHeight = parseInt(this.props.parentHeight)
        let svgRealWidth = 0
        let svgRealHeight = 0

        let widthRatio = parentWidth / watchWidth
        let heightRatio = parentHeight / watchHeight
        let parentHWRatio = parentHeight / parentWidth
        let myHWRatio = (watchHeight + 2 * (beltHeight + beltRadius)) / watchWidth

        if (parentHWRatio >= myHWRatio) {
            svgRealWidth = parentWidth
            svgRealHeight = svgRealWidth * myHWRatio // parentHeight - padding * 2
        } else {
            svgRealHeight = parentHeight // parentHeight - padding * 2
            svgRealWidth = svgRealHeight / myHWRatio
        }

        let ww = (svgRealWidth) + 'px'
        let wh = (svgRealHeight) + 'px'
        let viewBox = `0 0 ${watchWidth + 5} ${watchHeight + 205 }`

        return (
            <svg className="mkp-svg-phone mkp-svg"
                 type="mkp-svg-phone"
                 style={{width:ww, height:wh}}
                 viewBox={viewBox}
                 preserveAspectRatio="xMidYMid meet">
                <DotsFillPattern patternId="pattern2"/>
                <g>
                    {frame}
                    {innerFrame}
                    {content}
                    {belt}
                    {bottomBelt}
                </g>
            </svg>
        )
    }
}
