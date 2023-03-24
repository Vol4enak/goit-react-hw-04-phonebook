import React, { setState } from 'react';

export default function ContactForm() {
  const [name, setName] = setState('');
  const [number, setNumber] = setState('');

  const handelChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  const formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    reset();
  };
  const reset = () => {
    this.setState({ name: '', number: '' });
  };

  return (
    <form onSubmit={formSubmit}>
      <label>
        Name
        <br />
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handelChange}
          value={name}
          required
        />
      </label>
      <br />
      <label>
        phone
        <br />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handelChange}
          value={number}
          required
        />
      </label>
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
}
