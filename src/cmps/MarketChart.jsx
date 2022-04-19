import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

export function MarketChart({ btcMP }) {
    return (
        <section className="chart-container">
            <h2>Market Price (USD) </h2>
            <Sparklines width={350} height={80} data={btcMP}>
                <SparklinesLine style={{ fill: 'black' }} color="yellow" />
                <SparklinesReferenceLine style={{ stroke: '#525955', strokeOpacity: 0.75, strokeDasharray: '2, 2' }} />
            </Sparklines>
        </section>
    )
}
