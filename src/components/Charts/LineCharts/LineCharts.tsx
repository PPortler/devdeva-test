import { useState } from 'react'
import { CHART_LABELS, type LineChartData } from '@/types/chart/ChartData'

import {
  Area,
  ComposedChart,
  Line,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  XAxis,
} from 'recharts'
import { CHART_CONFIG, type ChartKey } from './chart-config'

type LineChartsProps = {
  data: LineChartData[]
}

function LineCharts({ data }: LineChartsProps) {
  const [visibleLines, setVisibleLines] =
    useState<Record<ChartKey, boolean>>({
      green: true,
      orange: true,
      blue: true,
    })

  const toggleLine = (
    key: ChartKey
  ) => {
    setVisibleLines(
      (prev) => ({
        ...prev,
        [key]:
          !prev[key],
      })
    )
  }

  return (
    <div>
      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 10,
          }}
        >
          {/* GRADIENT */}
          <defs>
            {CHART_CONFIG.map(
              (item) => (
                <linearGradient
                  key={item.key}
                  id={item.gradientId}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor={item.stroke}
                    stopOpacity={0.35}
                  />

                  <stop
                    offset="100%"
                    stopColor={item.stroke}
                    stopOpacity={0}
                  />
                </linearGradient>
              )
            )}
          </defs>

          {/* TIME */}
          {/* X AXIS */}
          <XAxis
            dataKey="time"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: '#d4d4d8',
              fontSize: 12,
            }}
          />
          {/* Y AXIS */}
          {CHART_CONFIG.map(
            (item) => (
              <YAxis
                key={item.key}
                yAxisId={item.key}
                domain={item.domain}
                tickLine={false}
                axisLine={false}
                width={45}
                tick={{
                  fill: item.stroke,
                  fontSize: 12,
                }}
              />
            )
          )}

          {/* TOOLTIP */}
          <Tooltip
            content={({
              payload,
            }) => {
              const linePayload =
                payload?.filter(
                  (item) =>
                    item.stroke !==
                    'none'
                )

              return (
                <div className='bg-white form-rounded shadow p-3 w-36 border border-gray-300'>
                  {linePayload?.map(
                    (item) => (
                      <div
                        key={item.dataKey as string}
                        className='flex justify-between'
                      >
                        <p className='font-light'>
                          {CHART_LABELS[
                            item.dataKey as ChartKey
                          ]}
                        </p>
                        <p
                          style={{
                            color: item.stroke
                          }}
                        >
                          {item.value}
                        </p>
                      </div>
                    )
                  )}
                </div>
              )
            }}
          />

          {/* LINES */}
          {CHART_CONFIG.map(
            (item) => {
              if (
                !visibleLines[item.key]
              ) {
                return null
              }

              return (
                <>
                  <Area
                    yAxisId={item.key}
                    type="monotone"
                    dataKey={item.key}
                    fill={`url(#${item.gradientId})`}
                    stroke="none"
                    tooltipType="none"
                  />

                  <Line
                    yAxisId={item.key}
                    type="monotone"
                    dataKey={item.key}
                    stroke={item.stroke}
                    strokeWidth={3}
                    dot={{
                      r: 2.5,
                      fill: item.stroke,
                      strokeWidth: 0,
                    }}
                    activeDot={{
                      r: 6,
                    }}
                  />
                </>
              )
            }
          )}
        </ComposedChart>
      </ResponsiveContainer>

      {/* LEGEND */}
      <div
        className="
          mt-8
          flex
          flex-wrap
          items-center
          justify-center
          gap-6
        "
      >
        {CHART_CONFIG.map(
          (item) => {
            const active =
              visibleLines[item.key]

            return (
              <button
                key={item.key}
                onClick={() =>
                  toggleLine(item.key)
                }
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-2
                  text-sm
                  transition-all
                "
              >
                <div
                  className="
                    h-3
                    w-3
                    rounded-full
                  "
                  style={{
                    backgroundColor:
                      active
                        ? item.stroke
                        : '#3f3f46',
                  }}
                />

                <span
                  className={`
                    font-light
                    transition-all
                    ${active
                      ? 'text-black'
                      : 'text-zinc-500 line-through'
                    }
                  `}
                >
                  {item.label}
                </span>
              </button>
            )
          }
        )}
      </div>
    </div>
  )
}

export default LineCharts