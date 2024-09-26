import { Globe, Laptop, Smartphone } from "lucide-react";
import Image from "next/image";
import { ITService } from "../../types/data/it-services";

export const services: ITService[] = [
  // Websites
  {
    slug: "websites",
    Icon: Globe,
    name: "Websites",
    description: "Managing and optimizing social media presence",
    href: "/it-services/websites",
    cta: "Learn more",
    variants: [
      {
        title: "Basic",
        description: "2-3 Pages, Responsive, and 3-4 sections per page",
        priceFormatted: "₹35,000",
        paymentLink: "https://buy.stripe.com/test_bIY5le99s7IR6RO004",
      },
      {
        title: "Pro",
        description: "5-8 Pages, Responsive, and 5-6 sections per page",
        priceFormatted: "₹50,000",
        paymentLink: "https://buy.stripe.com/test_00g7tm71kfbj2By6ot",
      },
      {
        title: "Premium",
        description:
          "10+ Pages, Responsive, SEO optimized, and unlimited sections per page & revisions",
        priceFormatted: "₹75,000",
        paymentLink: "https://buy.stripe.com/test_28o9Bu5Xg6ENcc8dQW",
      },
    ],
    background: (
      <Image
        src="/it-services/websites.jpg"
        alt="websites"
        fill
        className="absolute w-full h-full object-cover opacity-60"
      />
    ),
    className: "h-full",
    cover: "/it-services/websites.jpg",
    overview:
      "Our web development services are essential for businesses looking to establish a strong digital presence and drive growth. By creating custom websites, e-commerce platforms, and web applications tailored to your brand, we ensure a seamless, engaging user experience across all devices. Effective web development enhances visibility, boosts customer engagement, and supports operational efficiency, making it a critical component for reaching and converting potential customers, showcasing your offerings, and staying competitive in the digital marketplace. Investing in our expertise ensures your business stands out and thrives in today’s fast-paced online environment.",
    tags: [
      "Web Development",
      "Responsive Design",
      "SEO",
      "Custom Websites",
      "User Experience",
    ],
    whatWeOffer: [
      {
        title: "Custom Website Development",
        description:
          "We design and develop tailored websites that capture your brand’s identity and meet your specific business goals. Our approach includes creating unique features and functionalities that address your operational needs and enhance user engagement, ensuring a website that stands out and drives results. Each project is meticulously crafted to align with your vision and deliver a distinctive online presence.",
      },
      {
        title: "E-commerce Solutions",
        description:
          "We build scalable and secure online stores that are optimized for performance and user experience. From intuitive product management and smooth checkout processes to integrated payment gateways and advanced analytics, our solutions are designed to maximize online sales and streamline your e-commerce operations. We ensure a seamless shopping experience that converts visitors into loyal customers.",
      },
      {
        title: "CMS Integration",
        description:
          "We implement and customize content management systems (CMS) that enable you to easily update and manage your website content. With user-friendly interfaces and flexible design options, you can maintain control over your site’s content without needing extensive technical knowledge. Our CMS solutions are designed for efficiency and ease of use, empowering you to manage your content effectively.",
      },
      {
        title: "Responsive Design",
        description:
          "Our designs ensure that your website provides a seamless experience across all devices, including desktops, tablets, and smartphones. We focus on responsive layouts that adapt to different screen sizes and resolutions, enhancing accessibility and user satisfaction. This approach guarantees that your website performs optimally on any device, improving engagement and usability.",
      },
      {
        title: "Web Application Development",
        description:
          "We develop sophisticated web applications that are scalable and robust, tailored to your business processes and requirements. Our solutions incorporate advanced features, such as real-time data processing, user authentication, and third-party integrations, ensuring high performance and functionality. We aim to build applications that not only meet your current needs but also adapt to future growth.",
      },
      {
        title: "SEO Optimization",
        description:
          "Our comprehensive SEO strategies improve your website’s visibility and ranking on search engines. By optimizing on-page elements, implementing effective keywords, and enhancing site performance, we drive organic traffic and increase your site’s relevance and authority. Our approach is designed to boost your search engine rankings and attract targeted visitors to your site.",
      },
      {
        title: "Website Maintenance and Support",
        description:
          "We provide continuous maintenance and support services to ensure your website remains secure, up-to-date, and fully functional. This includes regular updates, security patches, performance monitoring, and technical support to address any issues promptly and keep your site running smoothly. Our ongoing support ensures your website operates efficiently and remains protected against emerging threats.",
      },
    ],
    howWeWork:
      "We start with an initial consultation to understand your business goals and project requirements. From there, we develop a detailed proposal and project plan. Our design team creates wireframes and prototypes for your review, which are then developed into a fully functional website or application. After thorough testing, we handle the launch and provide post-launch support, incorporating your feedback to ensure the final product meets your expectations.",
    whatYouReceive:
      "You will receive a high-quality, custom-designed website or application that is user-friendly, secure, and optimized for performance across all devices. Our service includes ongoing support and maintenance to ensure your digital solution remains up-to-date and fully operational.",
    howItHelpsYourBusiness:
      "Our web development services enhance your online presence, attract and engage visitors, and drive conversions. A well-designed and functional website or application improves user experience, builds brand credibility, and supports your business objectives. By focusing on quality and customer satisfaction, we deliver digital solutions that not only meet but exceed your expectations, positioning your business for success in a competitive online market.",
    benefits: [
      {
        title: "Custom Design",
        description:
          "Tailored to meet your specific business needs and preferences.",
      },
      {
        title: "Responsive Layout",
        description:
          "Optimized for all devices, ensuring a seamless user experience.",
      },
      {
        title: "SEO Optimization",
        description:
          "Enhanced visibility and higher rankings on search engines.",
      },
      {
        title: "Fast Performance",
        description: "Quick loading times to keep visitors engaged.",
      },
      {
        title: "Ongoing Support",
        description:
          "Lifetime support and regular updates to keep your website current and secure.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to develop a website?",
        answer:
          "The timeline depends on the complexity of the project. Typically, a custom website can take between 6 to 12 weeks from initial consultation to launch.",
      },
      {
        question:
          "Do you provide ongoing support after the website is launched?",
        answer:
          "Yes, we offer comprehensive maintenance and support services to ensure your website remains secure, updated, and fully functional.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer:
          "Absolutely. We design all our websites to be responsive, ensuring they perform well on desktops, tablets, and smartphones.",
      },
      {
        question: "Can you help with SEO for my website?",
        answer:
          "Yes, we provide SEO optimization services to improve your website’s search engine rankings and increase organic traffic.",
      },
      {
        question: "What if I need changes after the website is live?",
        answer:
          "We offer post-launch support and can make adjustments based on your feedback to ensure the final product meets your expectations.",
      },
    ],
  },
  // Web Applications
  {
    slug: "web-applications",
    Icon: Laptop,
    name: "Web Application",
    description: "Managing and optimizing social media presence",
    href: "/it-services/web-applications",
    cta: "Learn more",
    variants: [
      {
        title: "Basic",
        description:
          "Basic web application with 2-3 pages, responsive design, includes basic form functionality, and user authentication.",
        priceFormatted: "₹45,000",
        paymentLink: "https://buy.stripe.com/test_3cscNGadw6EN0tq4gn",
      },
      {
        title: "Pro",
        description:
          "Advanced web application with 5-8 pages, responsive design, dynamic content, database integration, and basic admin panel.",
        priceFormatted: "₹75,000",
        paymentLink: "https://buy.stripe.com/test_7sI6piclE7IRgsoaEM",
      },
      {
        title: "Premium",
        description:
          "Enterprise-level web application with 10+ pages, fully responsive, SEO optimized, real-time data, API integration, advanced admin panel, and unlimited revisions.",
        priceFormatted: "₹500,000",
        paymentLink: "https://buy.stripe.com/test_5kAfZSdpI8MV5NK4gp",
      },
    ],
    background: (
      <Image
        src="/it-services/web-application.jpg"
        alt="Web Applications"
        fill
        className="absolute w-full h-full object-cover opacity-60"
      />
    ),
    className: "h-full",
    cover: "/it-services/web-application.jpg",
    overview:
      "Our web application development services are crafted to deliver bespoke, high-performance solutions that drive innovation and enhance operational efficiency. We specialize in developing advanced web applications tailored to your specific business needs, ensuring they are both functional and scalable to accommodate future growth. By leveraging the latest technologies and best practices, we create web applications that are not only cutting-edge and reliable but also designed to adapt to the evolving demands of your business. Our focus is on delivering solutions that optimize your operations, improve user experiences, and support your long-term strategic goals.",
    tags: [
      "Web Application Development",
      "Custom Web Applications",
      "High-Performance Web Apps",
      "Tailored Web Solutions",
    ],
    whatWeOffer: [
      {
        title: "Custom Web Applications",
        description:
          "We create bespoke web applications designed specifically for your business needs. Each application is crafted to solve your unique challenges, offering features and functionalities that are perfectly aligned with your strategic objectives.",
      },
      {
        title: "Scalable Solutions",
        description:
          "Our applications are built with scalability in mind, ensuring that they can grow alongside your business. This means you can handle increasing user loads and expanding data requirements without compromising performance.",
      },
      {
        title: "Intuitive User Experience",
        description:
          "We prioritize a user-centric design approach, focusing on creating interfaces that are easy to navigate and visually engaging. Our goal is to enhance user satisfaction and streamline interactions with your application.",
      },
      {
        title: "Advanced Features",
        description:
          "We integrate sophisticated functionalities that cater to your specific needs, such as real-time data processing, advanced analytics, and seamless third-party integrations, ensuring that your application remains versatile and powerful.",
      },
      {
        title: "Performance Optimization",
        description:
          "Our development process emphasizes speed and efficiency, optimizing your application for rapid load times and smooth performance, which enhances the overall user experience.",
      },
      {
        title: "Robust Security",
        description:
          "We implement stringent security measures to safeguard your application and sensitive data, ensuring protection against potential threats and compliance with industry standards.",
      },
    ],
    howWeWork:
      "We start with a detailed consultation to understand your business goals and application requirements. From this, we create a tailored project plan and proposal. Our design phase includes wireframes and prototypes for your feedback, which are then used in the development phase. We rigorously test the application to ensure it meets performance and reliability standards before launching. Post-launch, we provide ongoing support and make any necessary adjustments based on your feedback.",
    whatYouReceive:
      "You will receive a custom-built web application that is precisely tailored to your business needs, with an emphasis on usability, performance, and security. The final product will include a seamless user experience, advanced functionalities, and ongoing support to ensure continued excellence and adaptability.",
    howItHelpsYourBusiness:
      "Our web application development services are designed to enhance your operational efficiency, drive innovation, and provide a competitive advantage. By delivering a solution that is scalable, secure, and optimized for performance, we help your business manage complexity, engage users effectively, and stay ahead in a rapidly evolving digital landscape. Our focus on quality and customer satisfaction ensures that your application not only meets but exceeds your expectations, fostering business growth and success.",
    benefits: [
      {
        title: "Custom Solutions",
        description:
          "Tailored to meet the specific needs and goals of your business.",
      },
      {
        title: "Scalability",
        description:
          "Built to grow with your business, accommodating increasing demands.",
      },
      {
        title: "Enhanced Productivity",
        description:
          "Automate and streamline business processes for greater efficiency.",
      },
      {
        title: "Security",
        description:
          "Robust security measures to protect your data and ensure compliance.",
      },
      {
        title: "User Experience",
        description:
          "Intuitive and user-friendly interfaces that enhance engagement and satisfaction.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to develop a web application?",
        answer:
          "The timeline varies based on the complexity and features of the application. Typically, development can take between 8 to 16 weeks from initial consultation to deployment.",
      },
      {
        question:
          "Do you offer ongoing support after the application is launched?",
        answer:
          "Yes, we provide comprehensive support and maintenance to ensure your web application remains secure, functional, and up-to-date.",
      },
      {
        question: "Can you integrate third-party services and APIs?",
        answer:
          "Yes, we can integrate various third-party services and APIs to enhance the functionality and interoperability of your web application.",
      },
      {
        question: "How do you ensure the security of the web application?",
        answer:
          "We implement advanced security measures to protect your application and data from potential threats, ensuring compliance with industry security standards.",
      },
      {
        question:
          "What if I need modifications after the application goes live?",
        answer:
          "We offer post-launch support and are happy to make adjustments based on your feedback to ensure the application continues to meet your evolving needs.",
      },
    ],
  },
  // Mobile Applications
  {
    slug: "mobile-applications",
    Icon: Smartphone,
    name: "Mobile Applications",
    description: "Managing and optimizing social media presence",
    href: "/it-services/mobile-applications",
    cta: "Learn more",
    variants: [
      {
        title: "Basic",
        description:
          "Basic mobile app with 2-3 screens, responsive layout for different devices, basic user authentication, and essential features.",
        priceFormatted: "₹60,000",
        paymentLink: "https://buy.stripe.com/test_dR614Y4Tc3sBfok7sC",
      },
      {
        title: "Pro",
        description:
          "Advanced mobile app with 5-8 screens, responsive layout, push notifications, offline support, database integration, and standard user management.",
        priceFormatted: "₹85,000",
        paymentLink: "https://buy.stripe.com/test_cN200Uadw4wF2By00b",
      },
      {
        title: "Premium",
        description:
          "Full-featured mobile app with 10+ screens, fully responsive, real-time sync, API integration, advanced user management, custom animations, and unlimited revisions.",
        priceFormatted: "₹250,000",
        paymentLink: "https://buy.stripe.com/test_aEU5le2L4aV33FC8wI",
      },
    ],
    background: (
      <Image
        src="/it-services/mobile-applications.jpg"
        alt="Mobile Applications"
        fill
        className="absolute w-full h-full object-cover opacity-60"
      />
    ),
    className: "h-full",
    cover: "/it-services/mobile-applications.jpg",
    overview:
      "Our mobile application development services are designed to create powerful, intuitive, and engaging mobile applications that elevate your business and connect with users on their preferred devices. We focus on building custom mobile solutions that are both user-centric and technologically advanced, ensuring an optimal experience across various platforms and devices.",
    tags: [
      "Mobile App Development",
      "Custom Mobile Apps",
      "iOS App Development",
      "Android App Development",
      "Cross-Platform Mobile Apps",
    ],
    whatWeOffer: [
      {
        title: "Custom Mobile Applications",
        description:
          "We develop bespoke mobile apps tailored to your business needs, offering unique functionalities and a design that aligns with your brand. Each app is crafted to deliver a seamless and engaging user experience.",
      },
      {
        title: "Cross-Platform Solutions",
        description:
          "Our development approach includes creating applications that work flawlessly across multiple platforms, such as iOS and Android, ensuring consistent performance and user experience regardless of the device.",
      },
      {
        title: "User-Centric Design",
        description:
          "We prioritize creating intuitive and visually appealing user interfaces that enhance user engagement and satisfaction. Our design approach focuses on making your app easy to navigate and enjoyable to use.",
      },
      {
        title: "Advanced Features and Integrations",
        description:
          "We incorporate sophisticated features and integrate with third-party services to provide added value and functionality. This includes real-time updates, geolocation, and payment processing capabilities.",
      },
      {
        title: "Performance Optimization",
        description:
          "We ensure that your mobile application performs optimally by focusing on fast load times, smooth interactions, and efficient use of resources, enhancing overall user satisfaction.",
      },
      {
        title: "Robust Security",
        description:
          "Our apps are developed with strong security measures to protect user data and ensure compliance with industry standards, safeguarding your application from potential vulnerabilities.",
      },
    ],
    howWeWork:
      "We begin with an in-depth consultation to understand your business objectives and mobile app requirements. Based on this, we create a detailed project plan and proposal. Our design team develops wireframes and prototypes for your review, which guide the development phase. We conduct thorough testing to ensure performance and usability before launching your app. Post-launch, we offer support and make adjustments based on your feedback to continuously improve the app.",
    whatYouReceive:
      "You will receive a fully customized mobile application designed to meet your specific needs, with a focus on user-friendly design, high performance, and robust security. Our service includes ongoing support to ensure your app remains up-to-date and performs optimally.",
    howItHelpsYourBusiness: `Our ERP development services streamline your business processes, improve operational efficiency, and provide real-time insights that drive better decision-making. By integrating various functions into a unified system, we help you reduce redundancy, enhance collaboration, and manage resources more effectively. Our focus on customization and quality ensures that the ERP system is aligned with your specific business needs, supporting growth and increasing overall productivity.`,
    benefits: [
      {
        title: "Custom Development",
        description:
          "Apps tailored to your specific business requirements and goals.",
      },
      {
        title: "Cross-Platform Compatibility",
        description: "Seamless performance on both iOS and Android devices.",
      },
      {
        title: "Enhanced Engagement",
        description:
          "Features designed to engage users and keep them coming back.",
      },
      {
        title: "Scalability",
        description:
          "Apps built to grow with your business, handling increasing user demands.",
      },
      {
        title: "User-Friendly Design",
        description:
          "Intuitive interfaces that enhance the user experience and satisfaction.",
      },
    ],
    faqs: [
      {
        question: "How long does it take to develop a mobile application?",
        answer:
          "The development timeline depends on the complexity and features of the app. Typically, it can take between 10 to 20 weeks from initial consultation to launch.",
      },
      {
        question: "Do you provide support after the app is launched?",
        answer:
          "Yes, we offer comprehensive post-launch support, including maintenance and updates to ensure your app remains secure and functional.",
      },
      {
        question: "Will my app be available on both iOS and Android?",
        answer:
          "Yes, we can develop cross-platform applications to ensure your app is available and performs well on both iOS and Android devices.",
      },
      {
        question: "Can you integrate third-party services into the app?",
        answer:
          "Absolutely. We can integrate various third-party services and APIs to enhance your app’s functionality and provide a more comprehensive user experience.",
      },
      {
        question: "How do you ensure the security of the mobile application?",
        answer:
          "We implement advanced security protocols to protect user data and ensure compliance with industry standards, mitigating potential security risks.",
      },
    ],
  },
];
