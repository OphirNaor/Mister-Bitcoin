import { Component } from 'react'
import { Switch } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

export class AppHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <section className="container">
                    <h3>Mister Bitcoin</h3>

                    <nav>

                        <NavLink exact activeClassName="my-active" to='/'>Home</NavLink>
                        <NavLink activeClassName="my-active" to='/contact'>Contact</NavLink>
                        <NavLink activeClassName="my-active" to='/statistic'>Statistic</NavLink>
                        <NavLink activeClassName="my-active" to='/about'>About</NavLink>

                    </nav>

                </section>
            </header>
        )
    }
}
