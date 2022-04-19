import React, { Component } from 'react'

export class ContactFilter extends Component {

    state = {
        term: ''
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState({ [field]: value }, () => {
            console.log(this.state)
            this.props.onChangeFilter(this.state)
        })
    }


    render() {
        const { name } = this.state
        return (
            <section className="contact-filter flex justify-center">
                <label>
                    <input onChange={this.handleChange} type="text" name="term" value={name} placeholder="Search name" />
                </label>

            </section>
        )
    }
}

export default ContactFilter