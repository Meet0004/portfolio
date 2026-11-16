import ContactHeader from '../components/Contact/ContactHeader';
import ContactForm from '../components/Contact/ContactForm';
import MyThreeDetails from '../components/Contact/MyThreeDetails';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <ContactHeader />
        <div className="contact-layout">
          <div>
            <MyThreeDetails />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
