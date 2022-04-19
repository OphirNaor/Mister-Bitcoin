import { Component } from 'react'
import { ContactService } from '../services/ContactService'

export class ContactDetailsPage extends Component {
    state = {
        contact: null
    }

    async componentDidMount() {
        const contact = await ContactService.getContactById(this.props.contactId)
        this.setState({ contact })
    }



    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>

        const imgUrl = `https://robohash.org/set_set5/${contact._id.split(" ")[0]}.png`
        return (
            <section className="contact-details container">
                <img src={imgUrl} alt="avatar img" />
                <section>
                    <h3 className='contact-name-details'>{contact.name}</h3>
                </section>
                <section>
                    <h3>{contact.email}</h3>
                </section>
                <section>
                    <h3>{contact.phone}</h3>
                </section>
                <section>
                    <button className='btn-details' onClick={this.props.onBack}>Back</button>
                </section>
            </section>
        )
    }
}
