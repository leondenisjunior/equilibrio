import React from 'react'
import { geoCentroid } from 'd3-geo'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from 'react-simple-maps'

import brTopoJson from './br.json'

const statesWithAnnotations = {
  BR_DF: {
    annotation: { x: -10, y: -15 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  BR_RN: {
    annotation: { x: 28, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  BR_PB: {
    annotation: { x: 32, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  BR_PE: {
    annotation: { x: 50, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  BR_AL: {
    annotation: { x: 30, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  BR_SE: {
    annotation: { x: 25, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  BR_ES: {
    annotation: { x: 20, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  BR_RJ: {
    annotation: { x: 25, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  PY_AM: {
    annotation: { x: 16, y: -10 },
    tag: { fontSize: 14, x: 2, y: 0 },
  },
  PY_AA: {
    annotation: { x: 15, y: 0 },
    tag: { fontSize: 14, x: 4, y: 0 },
  },
  PY_GU: {
    annotation: { x: -90, y: 75 },
    tag: { fontSize: 14, x: 2, y: 8 },
  },
  PY_PG: {
    annotation: { x: -130, y: 30 },
    tag: { fontSize: 14, x: 4, y: 10 },
  },
  PY_CZ: {
    annotation: { x: -40, y: 100 },
    tag: { fontSize: 14, x: 0, y: 8 },
  },
  PY_NE: {
    annotation: { x: -100, y: 45 },
    tag: { fontSize: 14, x: 4, y: 8 },
  },
  PY_CE: {
    annotation: { x: -110, y: 10 },
    tag: { fontSize: 14, x: 4, y: 10 },
  },
  PY_CR: {
    annotation: { x: -100, y: -30 },
    tag: { fontSize: 14, x: -4, y: 12 },
  },
  PY_AS: {
    annotation: { x: -110, y: -10 },
    tag: { fontSize: 14, x: 4, y: 10 },
  },
  PY_MI: {
    annotation: { x: -25, y: 30 },
    tag: { fontSize: 14, x: -5, y: 10 },
  },
}

const geographyStyle = {
  fill: '#ECEFF1',
  stroke: '#FFF',
  strokeWidth: 1,
  outline: 'none',
  transition: 'all .2s',
}

const MapChart = () => {
  const renderGeograph = (dataSource, countryId, countryColor) => {
    return (
      <Geographies geography={dataSource}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => {
              console.log(geo)
              return (
                <Geography
                  key={geo.rsmKey + '-Geography'}
                  stroke="#FFF"
                  geography={geo}
                  onClick={() => console.log({ geo })}
                  style={{
                    default: {
                      ...geographyStyle,
                      fill: countryColor,
                    },
                    hover: {
                      ...geographyStyle,
                      fill: countryColor,
                    },
                    pressed: {
                      ...geographyStyle,
                      fill: 'black',
                    },
                  }}
                />
              )
            })}

            {geographies.map((geo) => {
              const centroid = geoCentroid(geo)
              const geoId = geo.properties.id
              const annotationOffset =
                statesWithAnnotations[`${countryId}_${geoId}`]
              const tagPosition = annotationOffset?.tag || {
                x: 2,
                y: 0,
                fontSize: 12,
              }
              return (
                <g
                  key={`${geo.rsmKey}-Marker`}
                  style={{ pointerEvents: 'none' }}
                >
                  <Marker coordinates={centroid}>
                    <text
                      x={tagPosition.x}
                      y={tagPosition.y}
                      fontSize={tagPosition.fontSize}
                      textAnchor="middle"
                      style={{ color: '#FFF' }}
                    >
                      {geoId}
                    </text>
                  </Marker>
                </g>
              )
            })}
          </>
        )}
      </Geographies>
    )
  }

  return (
    <ComposableMap
      projection="geoMercator"
      width={600}
      style={{ width: '800px', height: '600px' }}
      height={600}
      projectionConfig={{
        scale: 2000, // Define a escala do mapa
        center: [-50, -20], // Centraliza o mapa em torno do Brasil
      }}
    >
      {renderGeograph(brTopoJson, 'BR', '#03A350')}
      <Marker coordinates={[-48.2772, -18.9186]} onClick={() => {}}>
        <circle r={10} fill="#1E3F85" stroke="#FFF" strokeWidth={2} />
        <text
          textAnchor="middle"
          y={5}
          x={-80}
          style={{
            fontFamily: 'system-ui',
            fill: '#fff',
            fontSize: 25,
            fontWeight: 600,
          }}
        >
          Uberlândia
        </text>
      </Marker>
      <Marker coordinates={[-47.9292, -18.1658]} onClick={() => {}}>
        <circle r={10} fill="#1E3F85" stroke="#FFF" strokeWidth={2} />
        <text
          textAnchor="middle"
          y={-20}
          style={{
            fontFamily: 'system-ui',
            fill: '#fff',
            fontSize: 25,
            fontWeight: 600,
          }}
        >
          Catalão | Matriz
        </text>
      </Marker>
      <Marker coordinates={[-47.9307, -19.7465]} onClick={() => {}}>
        <circle r={10} fill="#1E3F85" stroke="#FFF" strokeWidth={2} />
        <text
          textAnchor="middle"
          y={0}
          x={60}
          style={{
            fontFamily: 'system-ui',
            fill: '#fff',
            fontSize: 25,
            fontWeight: 600,
          }}
        >
          Uberaba
        </text>
      </Marker>
      <Marker coordinates={[-47.3089, -23.2006]} onClick={() => {}}>
        <circle r={10} fill="#1E3F85" stroke="#FFF" strokeWidth={2} />
        <text
          textAnchor="middle"
          y={-20}
          style={{
            fontFamily: 'system-ui',
            fill: '#fff',
            fontSize: 25,
            fontWeight: 600,
          }}
        >
          Itapetininga
        </text>
      </Marker>
    </ComposableMap>
  )
}

export default MapChart
