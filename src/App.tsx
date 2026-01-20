import { Hero } from "./components/Hero";
import { FoundersNote } from "./components/FoundersNote";
import { OurPromise } from "./components/OurPromise";
import { Programs } from "./components/Programs";
import { Testimonials } from "./components/Testimonials";
import { BookingForm } from "./components/BookingForm";
import { Newsletter } from "./components/Newsletter";
import { SocialFeed } from "./components/SocialFeed";
import { PageLayout } from "./components/PageLayout";
import { ProgramsPage } from "./components/ProgramsPage";
import { AboutPage } from "./components/AboutPage";
import { EnrollPage } from "./components/EnrollPage";
import { CareerPage } from "./components/CareerPage";
import { ResourcesPage } from "./components/ResourcesPage";
import { ContactPage } from "./components/ContactPage";
import { useState, useEffect } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the # symbol
      
      if (hash.startsWith("programs")) {
        setCurrentPage("programs");
        // Extract section ID if present (e.g., "programs/infant" -> "infant")
        const sectionId = hash.split("/")[1];
        if (sectionId) {
          // Small delay to ensure page renders before scrolling
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        }
      } else if (hash === "about") {
        setCurrentPage("about");
      } else if (hash === "enroll") {
        setCurrentPage("enroll");
      } else if (hash === "careers") {
        setCurrentPage("careers");
      } else if (hash === "resources") {
        setCurrentPage("resources");
      } else if (hash === "contact") {
        setCurrentPage("contact");
      } else {
        setCurrentPage("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (currentPage === "programs") {
    return <ProgramsPage />;
  }

  if (currentPage === "about") {
    return <AboutPage />;
  }

  if (currentPage === "enroll") {
    return <EnrollPage />;
  }

  if (currentPage === "careers") {
    return <CareerPage />;
  }

  if (currentPage === "resources") {
    return <ResourcesPage />;
  }

  if (currentPage === "contact") {
    return <ContactPage />;
  }

  return (
    <PageLayout currentPage="home" bgColor="bg-white">
      <Hero />
      <FoundersNote />
      <OurPromise />
      <Programs />
      <Testimonials />
      <BookingForm />
      <Newsletter />
      <SocialFeed />
    </PageLayout>
  );
}