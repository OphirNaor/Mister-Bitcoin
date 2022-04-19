import React, { Component } from 'react'
import { MarketChart } from '../cmps/MarketChart'
import { TradeVolume } from '../cmps/TradeVolume'
import { BitcoinService } from '../services/BitcoinService'

export class StatisticPage extends Component {
    state = {
        btcMP: null,
        btcToUsd: null,
        btcTV: null,
        period: 'year',
    }

    componentDidMount() {
        this.setMarketPrice(this.state.period)
        this.btcConvertion()
        this.setConfirmedTransactions()
    }

    async setMarketPrice(period) {
        const marketPrice = await BitcoinService.getMarketPrice(period)
        console.log('getMarketPrice -> marketPrice', marketPrice)
        const btcMP = marketPrice.values.map((value) => value.y)
        this.setState({ btcMP })
    }

    async setConfirmedTransactions() {
        const tradeVolume = await BitcoinService.getConfirmedTransactions()
        const btcTV = tradeVolume.values.map((value) => value.y)
        this.setState({ btcTV })
    }

    async btcConvertion() {
        const btcPrice = await BitcoinService.btcConvertion()
        this.setState({ btcToUsd: btcPrice.USD.last })
    }

    render() {
        const { btcMP, btcToUsd, btcTV } = this.state
        if (!btcMP || !btcToUsd || !btcTV) return <div>Loading...</div>
        return (
            <section className="statistic-page container">
                <p>BTC Price: {btcToUsd}$</p>
                <MarketChart btcMP={btcMP} />
                <div className="period-btns">
                    <button onClick={() => this.setMarketPrice('year')}>Year</button>
                    <button onClick={() => this.setMarketPrice('months')}>Month</button>
                    <button onClick={() => this.setMarketPrice('days')}>Day</button>
                </div>

                <TradeVolume btcTV={btcTV} />
            </section>
        )
    }
}

export default StatisticPage
