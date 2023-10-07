import React from 'react';
import '../Contact/contact.scss';
import mail from '../../assets/images/mail.webp';
import phone from '../../assets/images/phone.webp';

interface ContactProps {
  title: string;
  titlemail: string;
  titlephone: string;
  text1: string;
  text2: string;
  imgAlt: string;
  imgAlt1: string;
}

const Contact: React.FC<ContactProps> = ({
  title,
  titlemail,
  titlephone,
  text1,
  text2,
  imgAlt,
  imgAlt1,
}) => {
  return (
    <div className="contact">
      <h2 className="contact-title">{title}</h2>
      <div className="contact-mail">
        <h3 className="contact-mail-title">{titlemail}</h3>
        <img className="contact-mail-img" src={mail} alt={imgAlt} />
        <p className="contact-mail-text">{text1}</p>
      </div>
      <div className="contact-phone">
        <h3 className="contact-phone-title">{titlephone}</h3>
        <img className="contact-phone-img" src={phone} alt={imgAlt1} />
        <p className="contact-phone-text">{text2}</p>
      </div>
    </div>
  );
};

export default Contact;
