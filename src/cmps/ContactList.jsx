import { ContactPreview } from "./ContactPreview"


export function ContactList({ contacts, onSelectContact }) {

    return (
        <>
            <section className="contact-list clean-list simple-cards-grid">
                {contacts.map(contact =>
                    <ContactPreview onSelectContact={onSelectContact} key={contact._id} contact={contact} />
                )}




            </section>

        </>

    )
}
