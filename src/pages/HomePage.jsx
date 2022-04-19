import { Component } from 'react';
import { UserService } from '../services/UserService'
import { BitcoinService } from '../services/BitcoinService';



export class HomePage extends Component {

    state = {
        user: null,
        balance: null,

    }

    async componentDidMount() {
        const user = UserService.getUser()
        const rate = await BitcoinService.getRate('USD')
        this.setState({ user, balance: user.coins * rate })
        console.log('user', user);
    }

    render() {
        const { user, balance } = this.state
        if (!user) return;
        return (
            <section className='home-page'>
                <h2>Welcome {user.name}!</h2>
                <h3>Coins: {user.coins}</h3>
                <h3><span>BTC</span>: {balance}</h3>

            </section>)
    }
}
