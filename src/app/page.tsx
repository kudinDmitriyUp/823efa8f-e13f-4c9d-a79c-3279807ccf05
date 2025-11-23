"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Waves, UtensilsCrossed, Mountain, Compass } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="none"
      cardStyle="glass-depth"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Alpine Retreat"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763920590046-kf8it9k1.jpg"
          logoAlt="Alpine Retreat Hotel Logo"
          button={{
            text: "Reserve Now",
            href: "contact"
          }}
          className="border-b border-accent/20"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="ALPINE RETREAT"
          description="Experience timeless elegance and Alpine luxury in the heart of the Swiss mountains"
          buttons={[
            {
              text: "Explore Rooms",
              href: "rooms"
            },
            {
              text: "Book Your Stay",
              href: "contact"
            }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763920590992-o25ja0bj.jpg",
              imageAlt: "Swiss Alps mountain panorama"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763920591707-8sp1198p.jpg",
              imageAlt: "Mountain resort Alpine village"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763920592410-vg16wzqw.jpg",
              imageAlt: "Alpine peaks sunset view"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763920593390-tw50bhlb.jpg",
              imageAlt: "Alpine meadow landscape"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
          logoContainerClassName="pb-8"
          logoClassName="text-6xl md:text-7xl font-bold tracking-wide"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Heritage & Excellence"
          description="Nestled in the pristine Swiss Alps, Alpine Retreat represents a century of hospitality excellence. Our commitment to preserving Alpine tradition while embracing modern luxury creates an unparalleled sanctuary for discerning travelers seeking authentic mountain elegance and restorative wellness."
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardFour
          title="World-Class Amenities"
          description="Indulge in premium facilities designed for ultimate relaxation and rejuvenation"
          tag="Facilities"
          features={[
            {
              title: "Alpine Spa & Wellness",
              description: "Rejuvenate with our signature treatments using natural Alpine minerals and traditional Swiss therapies",
              icon: Waves
            },
            {
              title: "Michelin-Inspired Cuisine",
              description: "Savor exquisite mountain gastronomy featuring seasonal local ingredients and international delicacies",
              icon: UtensilsCrossed
            },
            {
              title: "Panoramic Mountain Views",
              description: "Wake to breathtaking vistas of snow-capped peaks and pristine Alpine valleys from your private terrace",
              icon: Mountain
            },
            {
              title: "Outdoor Adventure Activities",
              description: "Experience world-class hiking, skiing, and mountain activities guided by our expert team",
              icon: Compass
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxury Room Collections"
          description="Choose from our curated selection of exquisitely appointed rooms and suites"
          tag="Accommodations"
          products={[
            {
              id: "deluxe",
              brand: "Alpine Retreat",
              name: "Deluxe Mountain Room",
              price: "CHF 480",
              rating: 5,
              reviewCount: "284",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763920597521-sr3un3ng.jpg",
              imageAlt: "Deluxe mountain room with panoramic views"
            },
            {
              id: "suite",
              brand: "Alpine Retreat",
              name: "Premium Alpine Suite",
              price: "CHF 750",
              rating: 5,
              reviewCount: "189",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763920598005-mmsno08o.jpg",
              imageAlt: "Luxury Alpine suite with fireplace"
            },
            {
              id: "presidential",
              brand: "Alpine Retreat",
              name: "Presidential Penthouse",
              price: "CHF 1,500",
              rating: 5,
              reviewCount: "92",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763920598949-cpul7w6q.jpg",
              imageAlt: "Presidential penthouse with full mountain panorama"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Guest Experiences"
          description="Hear from distinguished travelers who have made Alpine Retreat their Alpine sanctuary"
          tag="Reviews"
          testimonials={[
            {
              id: "1",
              name: "Catherine Beaumont",
              role: "Travel Curator",
              company: "Luxury Travels International",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763920599466-8yzo7h5p.jpg",
              imageAlt: "Catherine Beaumont"
            },
            {
              id: "2",
              name: "Marcus Richter",
              role: "Luxury Hotel Critic",
              company: "Alpine Heritage Magazine",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763920600006-jreq1apx.jpg",
              imageAlt: "Marcus Richter"
            },
            {
              id: "3",
              name: "Elena Rossi",
              role: "CEO, Wellness Resorts",
              company: "Italian Hospitality Group",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763920600604-haqlrixi.jpg",
              imageAlt: "Elena Rossi"
            },
            {
              id: "4",
              name: "James Worthington",
              role: "Founder",
              company: "Worthington & Associates",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763920601340-4kujdu5m.jpg",
              imageAlt: "James Worthington"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Reserve Your Alpine Escape"
          description="Contact our concierge team to plan your perfect mountain retreat. Our hospitality experts are ready to craft your ideal stay."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your ideal mountain retreat...",
            rows: 6,
            required: true
          }}
          buttonText="Send Inquiry"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Alpine Retreat"
          columns={[
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Rooms & Suites",
                  href: "rooms"
                },
                {
                  label: "Amenities",
                  href: "amenities"
                }
              ]
            },
            {
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Guest Reviews",
                  href: "testimonials"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "#"
                },
                {
                  label: "Terms of Service",
                  href: "#"
                },
                {
                  label: "Accessibility",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}