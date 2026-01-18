import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p>Email: support@healthcare.com</p>
        <p>Phone: +91 98765 43210</p>
      </div>
    </>
  );
};

export default Contact;
