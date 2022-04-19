import { Component, createRef } from 'react'
import { Link } from 'react-router-dom'
import { ContactService } from '../services/ContactService'

export class ContactEditPage extends Component {

    state = {
        contact: null,
    }

    inputRef = createRef()

    async componentDidMount() {
        const id = this.props.match.params.id
        const contact = id ? await ContactService.getContactById(id) : ContactService.getEmptyContact()
        this.setState({ contact }, () => {
            console.log('this.inputRef:', this.inputRef)
            this.inputRef.current.focus()
        })

    }

    handleChange = async ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState(({ contact }) => ({ contact: { ...contact, [field]: value } }))
    }

    onSaveContact = async (ev) => {
        ev.preventDefault()
        await ContactService.saveContact({ ...this.state.contact })
        this.props.history.push('/contact')
    }

    // inputRef = (elInput) => {
    //     if (elInput) elInput.focus()
    // }

    onRemoveContact = async () => {
        await ContactService.deleteContact(this.state.contact._id)
        this.props.history.push('/contact')
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <section className='contact-edit container flex column align-center justify-center '>
                <h2>{contact._id ? 'Edit' : 'Add'} Contact</h2>
                <div className="large-avatar"></div>
                <form onSubmit={this.onSaveContact} className="flex column align-center justify-center" >

                    <input ref={this.inputRef} onChange={this.handleChange} value={contact.name} type="text" name="name" id="name" required placeholder='name' />

                    <input onChange={this.handleChange} value={contact.phone} type="tel" name="phone" id="phone" required placeholder='phone' />

                    <input onChange={this.handleChange} value={contact.email} type="email" name="email" id="email" required placeholder='email' />

                    <button className='save-contact-btn'>Save</button>
                </form>
                <div className="btn-container">
                    <Link to="/contact" className="goback">Go Back</Link>
                    {contact._id && <button onClick={this.onRemoveContact} className="delete-btn">Delete</button>}
                </div>
            </section>
        )
    }

}