export function ContactPreview({ contact, onSelectContact }) {

    return (
        <>
            <section className='contact-preview flex column align-center ' >

                <img src={`https://robohash.org/set_set5/${contact._id.split(" ")[0]}.png`} alt="avatar img" />
                <section onClick={() => onSelectContact(contact._id)} className='info'>
                    <span className="preview-name">{contact.name}</span>
                    <span className="preview-phone-number">{contact.phone}</span>

                </section>
            </section>

        </>

    )
}


// style = { contactStyle } 