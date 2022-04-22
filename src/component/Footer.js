import "./Footer.css";

const addresses = [
  { nome: "Loja1", contacto: "253" },
  { nome: "Loja2", contacto: "2121" },
];
function Footer() {
  return (
    <footer>
      {addresses.map((contact) => (
        <p>
          {" "}
          {contact.nome} - {contact.contacto}
        </p>
      ))}
    </footer>
  );
}
export default Footer;
