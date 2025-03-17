import About from "../../components/About/About"
import ContactForm from "../../components/ContactForm/ContactForm"
import ContentOne from "../../components/ContentOne/ContentOne"
import ContentTwo from "../../components/ContentTwo/ContentTwo"
import FloatingWhatsApp from "../../components/FloatingWhatsApp/FloatingWhatsApp"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import IconSection from "../../components/IconSection/IconSection"
import TheWorkshop from "../../components/TheWorkshop/TheWorkshop"
import TopPage from "../../components/TopPage/TopPage"
import UpcomingDate from "../../components/UpcomingDate/UpcomingDate"
import "./Default.css"






export default function Default() {
  return (
    <div className="Default">
      <Header />
      <FloatingWhatsApp />
      <TopPage />
      <IconSection />
      <UpcomingDate />
      <ContactForm />
      <ContentOne />
      <ContentTwo />
      <About />
      <TheWorkshop />
      <UpcomingDate />
      <ContactForm />
      <Footer />
    </div>
  )
}

