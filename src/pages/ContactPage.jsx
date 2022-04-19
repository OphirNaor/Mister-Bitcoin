import { Component } from 'react'
import { ContactService } from '../services/ContactService'
import { ContactList } from '../cmps/ContactList';
import { ContactDetailsPage } from './ContactDetailsPage';
import ContactFilter from '../cmps/ContactFilter';
import { Link } from 'react-router-dom';
import PlusImage from "../assets/img/plus.png"

export class ContactPage extends Component {
    state = {
        contacts: null,
        selectedContactId: null,
        filterBy: null,

    };

    componentDidMount() {
        this.loadContacts();
    }

    async loadContacts() {
        const contacts = await ContactService.getContacts(this.state.filterBy)
        this.setState({ contacts })
    }

    onSelectContact = (contactId) => {
        this.setState({ selectedContactId: contactId })
    }
    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }



    render() {
        const { contacts, selectedContactId } = this.state
        if (!contacts) return <div>Loading...</div>;
        return (
            <section className='container'>
                {selectedContactId ?
                    <ContactDetailsPage contactId={selectedContactId} onBack={() => this.onSelectContact(null)} /> :
                    <>

                        <ContactFilter onChangeFilter={this.onChangeFilter} />
                        <ContactList onSelectContact={this.onSelectContact} contacts={contacts} />
                        <Link to="/contact/edit" title="add contact" >
                            <img src={PlusImage} alt="plus" className='add-contact-btn' />
                        </Link>




                    </>


                }
            </section>
        );
    }
}
