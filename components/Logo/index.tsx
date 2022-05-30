import { LightModeColors } from '../../helpers/styles/colors'
import classes from "./logo.module.scss"

export const Logo = () => {
    return (
        <svg
            viewBox="0 0 105.00895 103.48347"
            version="1.1"
            id="svg5"
            className={classes.svg}
        >
            <defs
                id="defs2" />
            <defs>
                <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={LightModeColors.white} />
                    <stop offset="25%" stopColor={LightModeColors.white} />
                    <stop offset="75%" stopColor={LightModeColors.orange} />
                    <stop offset="100%" stopColor={LightModeColors.white} />
                    <animateTransform attributeName="gradientTransform"
                        type="translate"
                        from="-1 0"
                        to="1 0"
                        begin="0s"
                        dur="1.5s"
                        repeatCount="indefinite"
                    />
                </linearGradient>

            </defs>
            <g
                id="layer1"
                transform="translate(-56.178715,-103.55999)">
                <ellipse
                    style={{ fill: '#00000000' , filter: 'drop-shadow(0px 0px 2px rgb(0 0 0 / 1))'}}
                    id="path215"
                    cx="108.68319"
                    cy="155.30173"
                    rx="52.504475"
                    ry="51.741734" />
                <g
                    transform="matrix(0.03527778,0,0,-0.03527778,38.806957,193.1374)"
                    fill="#000000"
                    stroke="none"
                    id="g179">
                    <path
                        style={{
                            stroke: '#C0C0C0',
                            strokeWidth: "70",
                            fill: 'url(#linear)',
                            filter: 'drop-shadow(0px 0px 2px rgb(0 0 0 / 1))'
                        }}
                        d="m 1362,1674 -81,-186 262,-524 262,-524 h 172 c 95,0 173,2 173,4 0,3 -73,150 -161,328 -89,178 -246,495 -350,706 -103,210 -190,382 -192,382 -2,0 -40,-84 -85,-186 z"
                        id="path169" />
                    <path style={{
                        stroke: '#C0C0C0',
                        strokeWidth: "70",
                        fill: '#fff',
                        filter: 'drop-shadow(0px 0px 2px rgb(0 0 0 / 1))'
                    }}
                        d="m 1860,1526 v -293 l 155,-317 c 86,-174 158,-316 160,-316 3,0 5,275 5,610 v 610 h -160 -160 z"
                        id="path171" />
                    <path style={{
                        stroke: '#C0C0C0',
                        strokeWidth: "70",
                        fill: '#fff',
                        filter: 'drop-shadow(0px 0px 2px rgb(0 0 0 / 1))'
                    }}
                        d="m 2577,1763 c 62,-61 126,-170 138,-235 4,-21 10,-38 13,-38 3,0 63,55 132,123 69,68 148,142 175,165 l 50,42 h -284 -283 z"
                        id="path173" />
                    <path style={{
                        stroke: '#C0C0C0',
                        strokeWidth: "70",
                        fill: 'url(#linear)',
                        filter: 'drop-shadow(0px 0px 2px rgb(0 0 0 / 1))'
                    }}
                        d="m 2446,1184 c -58,-54 -106,-102 -106,-107 0,-8 82,-123 365,-514 l 88,-123 h 183 184 l -132,183 c -72,100 -209,289 -304,420 l -173,238 z"
                        id="path175" />
                    <path style={{
                        stroke: '#C0C0C0',
                        strokeWidth: "70",
                        fill: '#fff',
                        filter: 'drop-shadow(0px 0px 2px rgb(0 0 0 / 1))'
                    }}
                        d="M 910,697 C 874,642 812,562 771,519 l -73,-79 298,1 c 280,0 297,1 274,16 -51,34 -178,171 -230,248 -29,44 -55,83 -59,86 -3,3 -35,-39 -71,-94 z"
                        id="path177" />
                </g>
            </g>
        </svg>
    )

}