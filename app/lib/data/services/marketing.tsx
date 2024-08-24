import { BadgeCheck, Heart, Package, TargetIcon, Users } from "lucide-react";
import Image from "next/image";
import { MarketingService } from "../../types/data/marketing-services";

export const services: MarketingService[] = [
  // Branding
  {
    slug: "branding",
    Icon: BadgeCheck,
    name: "Branding",
    description: "Building a unique business identity.",
    href: "/marketing-services/branding",
    cta: "Learn more",
    paymentLink: "",
    background: (
      <Image
        src="/marketing/branding.avif"
        alt="Branding"
        fill
        className="absolute w-full h-full object-cover opacity-60"
      />
    ),
    cover: "/marketing/branding.avif",
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    overview: `Our branding services are meticulously designed to elevate your business's identity and create a lasting impression on your target audience. We specialize in developing comprehensive brand strategies, creating impactful visual identities, and ensuring cohesive brand experiences. Our approach guarantees that your brand communicates its values effectively and consistently across all platforms, setting you apart in a competitive market and fostering strong connections with your customers.`,
    tags: [
      "Brand Strategy",
      "Rebranding",
      "Digital Branding",
      "Professional Branding",
      "Customer Loyalty",
    ],
    whatWeOffer: [
      {
        title: "Brand Strategy Development",
        description:
          "We create detailed brand strategies that align with your business goals and market positioning. This includes developing brand messaging, voice, and positioning to ensure your brand resonates with your target audience.",
      },
      {
        title: "Visual Identity Design",
        description:
          "Our team designs unique visual identities, including logos, color schemes, typography, and graphic elements, that reflect your brand’s personality and appeal to your target market.",
      },
      {
        title: "Brand Guidelines",
        description:
          "We develop comprehensive brand guidelines to ensure consistent representation of your brand across all mediums, from digital platforms to print materials.",
      },
      {
        title: "Rebranding Services",
        description:
          "Whether you need a brand refresh or a complete overhaul, we offer rebranding services that rejuvenate your business's identity.",
      },
      {
        title: "Marketing Collateral Design",
        description:
          "We design a wide array of marketing materials, such as business cards, brochures, posters, and packaging, ensuring a cohesive look that reinforces your brand identity.",
      },
      {
        title: "Digital Branding",
        description:
          "We create compelling online brand experiences through website design, social media branding, and digital marketing strategies that engage and convert your audience.",
      },
      {
        title: "Brand Consulting",
        description:
          "Our experts provide ongoing consulting to help you navigate brand challenges and opportunities, ensuring your brand remains relevant and effective.",
      },
    ],
    howWeWork: `Our process starts with an in-depth discovery phase where we gather insights about your business, goals, and target audience. We then develop a tailored brand strategy and design concepts, which are refined based on your feedback. Once the visual identity and brand elements are finalized, we create comprehensive brand guidelines and deliver all necessary assets. Throughout the process, we maintain open communication and collaboration to ensure the final result aligns perfectly with your vision.`,
    whatYouReceive: `You will receive a complete branding package that includes a custom brand strategy, a distinctive visual identity, detailed brand guidelines, and all necessary design assets. Additionally, we provide ongoing support and consulting to ensure your brand remains consistent and effective across all platforms and touchpoints.`,
    howItHelpsYourBusiness: `Professional branding significantly enhances your business's ability to stand out in a crowded market. A strong brand strategy and visual identity build trust and recognition among your audience, fostering customer loyalty and increasing brand equity. Consistent branding across all channels improves your marketing effectiveness and helps convey your business’s values and personality, leading to stronger customer relationships and long-term success. Our comprehensive approach ensures that your brand not only looks great but also communicates its message clearly and compellingly, driving engagement and growth.`,
    benefits: [
      {
        title: "Distinctive Identity",
        description: "Create a unique and recognizable brand identity.",
      },
      {
        title: "Consistency",
        description:
          "Maintain a consistent brand image across all platforms and materials.",
      },
      {
        title: "Professional Appeal",
        description:
          "Enhance your brand’s professionalism with high-quality designs.",
      },
      {
        title: "Customer Trust",
        description:
          "Build trust and loyalty with a strong, reliable brand presence.",
      },
      {
        title: "Competitive Edge",
        description: "Stand out from the competition with a memorable brand.",
      },
    ],
    faqs: [
      {
        question: "How long does the branding process take?",
        answer:
          "The timeline varies based on the scope of the project, but typically, a complete branding process can take between 6 to 12 weeks from initial consultation to final delivery.",
      },
      {
        question: "Can you help with rebranding an existing business?",
        answer:
          "Yes, we offer rebranding services that include updating your brand strategy and visual identity to better align with your current business goals and market position.",
      },
      {
        question:
          "What deliverables will we receive at the end of the project?",
        answer:
          "You will receive a comprehensive branding package that includes a brand strategy document, visual identity elements (logo, color palette, typography), brand guidelines, and all design assets for both digital and print use.",
      },
      {
        question: "Do you provide ongoing brand support?",
        answer:
          "Yes, we offer ongoing brand consulting and support to ensure your brand remains consistent and effective over time, adapting to any new challenges or opportunities.",
      },
      {
        question: "How do you ensure our brand will stand out in the market?",
        answer:
          "Our process involves thorough market research and a deep understanding of your business and target audience. This allows us to create a unique brand strategy and visual identity that differentiates your business and resonates with your customers.",
      },
    ],
  },
  // Digital marketing
  {
    // Wrong Details
    slug: "digital-marketing",
    Icon: TargetIcon,
    name: "Digital Marketing",
    description: "Promoting your brand online",
    href: "/marketing-services/digital-marketing",
    cta: "Learn more",
    paymentLink: "",
    background: (
      <Image
        src="/marketing/digital-marketing.avif"
        alt="Branding"
        fill
        className="absolute w-full h-full object-cover opacity-60"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    cover: "/marketing/digital-marketing.avif",
    overview: `Our packaging design services are crafted to create visually stunning and functional packaging that enhances your product's appeal and market presence. We specialize in designing packaging that not only captures attention but also aligns with your brand identity and communicates your product's value effectively. Our creative and strategic approach ensures that your packaging stands out on the shelves and resonates with your target audience.`,
    tags: [
      "Product Packaging",
      "Box Design",
      "Packaging Strategy",
      "Packaging Graphics",
      "Innovative Packaging",
    ],
    whatWeOffer: [
      {
        title: "Custom Packaging Design",
        description:
          "We create unique and tailored packaging designs that reflect your brand’s personality and meet your product’s specific needs. This includes structural design, graphics, and materials that enhance both aesthetics and functionality.",
      },
      {
        title: "Product Labels",
        description:
          "Our team designs striking product labels that are clear, informative, and visually appealing, ensuring your product stands out on the shelves and provides essential information to consumers.",
      },
      {
        title: "Sustainable Packaging",
        description:
          "We prioritize eco-friendly materials and design solutions to create sustainable packaging that minimizes environmental impact while maintaining high standards of quality and appeal.",
      },
      {
        title: "Branding Packaging",
        description:
          "We integrate your brand’s identity into the packaging design, ensuring consistency and recognition across all your product lines.",
      },
      {
        title: "Retail Packaging",
        description:
          "We design packaging that enhances the retail experience, focusing on creating eye-catching designs that attract customers and drive sales.",
      },
      {
        title: "Innovative Packaging Solutions",
        description:
          "Our innovative designs incorporate the latest trends and technologies, offering creative and practical packaging solutions that elevate your product.",
      },
      {
        title: "Packaging Mockups",
        description:
          "We provide realistic packaging mockups that give you a clear visual of the final product, allowing for adjustments and refinements before production.",
      },
    ],
    howWeWork: `Our process starts with a detailed consultation to understand your product, brand, and packaging requirements. We then conduct market research and brainstorming sessions to develop initial design concepts. These concepts are refined based on your feedback, ensuring the design aligns with your vision and objectives. Once the design is finalized, we create detailed mockups and provide comprehensive support through the production phase to ensure the final packaging meets the highest standards of quality and functionality.`,
    whatYouReceive: `You will receive a complete packaging design package that includes custom design files, product labels, mockups, and detailed guidelines for production. Additionally, we provide ongoing support to address any design adjustments or production challenges, ensuring a smooth transition from design to final product.`,
    howItHelpsYourBusiness: `Professional packaging design significantly enhances your product's marketability and consumer appeal. Eye-catching and well-designed packaging attracts customers, conveys your brand message, and differentiates your product from competitors. Sustainable and innovative packaging solutions also enhance your brand’s reputation and align with consumer preferences for eco-friendly products. Our comprehensive approach ensures that your packaging not only looks great but also functions effectively, protecting your product and enhancing the overall customer experience.`,
    benefits: [
      {
        title: "Enhanced Product Appeal",
        description:
          "Professionally designed packaging attracts attention and makes your product stand out on the shelves.",
      },
      {
        title: "Brand Consistency",
        description:
          "Consistent branding across all packaging materials strengthens your brand identity and recognition.",
      },
      {
        title: "Increased Sales",
        description:
          "Eye-catching and functional packaging can drive consumer interest and boost sales.",
      },
      {
        title: "Customer Loyalty",
        description:
          "High-quality packaging enhances the customer experience, encouraging repeat purchases.",
      },
    ],
    faqs: [
      {
        question: "How long does the packaging design process take?",
        answer:
          "The timeline varies based on the complexity of the project, but most packaging design projects can be completed within 4 to 8 weeks from initial consultation to final delivery.",
      },
      {
        question: "Can you help with redesigning existing packaging?",
        answer:
          "Yes, we offer redesign services to update and improve your existing packaging, ensuring it meets current market trends and aligns with your brand’s evolving identity.",
      },
      {
        question:
          "What deliverables will we receive at the end of the project?",
        answer:
          "You will receive all final design files in various formats suitable for production, along with detailed guidelines and mockups to ensure accurate and high-quality production.",
      },
      {
        question: "Do you provide sustainable packaging solutions?",
        answer:
          "Yes, we prioritize eco-friendly materials and design solutions to create sustainable packaging that reduces environmental impact while maintaining high standards of quality and appeal.",
      },
      {
        question:
          "How do you ensure the packaging design aligns with our brand?",
        answer:
          "Our process involves a thorough understanding of your brand, product, and target audience. We collaborate closely with you throughout the project to ensure the packaging design reflects your brand identity and resonates with your customers.",
      },
    ],
  },
  // Social Media Marketing
  {
    slug: "social-media-marketing",
    Icon: Heart,
    name: "Social Media Marketing",
    description: "Advertising on social media platforms.",
    paymentLink: "https://buy.stripe.com/test_8wM2922L48MV2By4gj",
    href: "/marketing-services/social-media-marketing",
    cta: "Learn more",
    background: (
      <Image
        src="/marketing/social-media-marketing.avif"
        alt="Branding"
        fill
        className="absolute w-full h-full object-cover opacity-60"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    cover: "/marketing/social-media-marketing.avif",
    overview: `Our social media marketing services are designed to amplify your online presence and engage your target audience across various platforms. We create tailored strategies that align with your business goals, leveraging the power of social media to build brand awareness, drive traffic, and increase conversions. Our approach combines creative content, data-driven insights, and the latest trends to deliver impactful social media campaigns that resonate with your audience and foster meaningful interactions.`,
    tags: [
      "Social Media Marketing",
      "Social Media Strategy",
      "Community Management",
      "Social Media Optimization",
      "Social Media Growth",
    ],
    whatWeOffer: [
      {
        title: "Social Media Strategy",
        description:
          "We develop comprehensive social media strategies tailored to your business objectives and target audience. Our strategies encompass content planning, platform selection, and engagement tactics to maximize your social media presence.",
      },
      {
        title: "Content Creation",
        description:
          "Our team creates engaging and visually appealing content, including graphics, videos, and written posts, that captures your brand’s voice and engages your audience.",
      },
      {
        title: "Social Media Advertising",
        description:
          "We design and manage targeted ad campaigns on platforms like Facebook, Instagram, LinkedIn, and Twitter to reach your ideal audience, drive traffic, and increase conversions.",
      },
      {
        title: "Community Management",
        description:
          "We actively manage your social media communities, responding to comments and messages, and fostering positive interactions to build a loyal and engaged following.",
      },
      {
        title: "Social Media Analytics",
        description:
          "We provide detailed analytics and reporting to measure the performance of your social media campaigns, offering insights and recommendations for continuous improvement.",
      },
    ],
    howWeWork: `Our process begins with a thorough analysis of your current social media presence and understanding your business goals. We then develop a tailored strategy and content plan, followed by the creation and scheduling of posts. Our team monitors performance and engagement, adjusting tactics as needed to maximize results. Regular reporting and communication ensure you are informed about the progress and impact of your social media campaigns.`,
    whatYouReceive: `You will receive a comprehensive social media marketing package that includes a custom strategy, engaging content, targeted ad campaigns, community management, and detailed analytics reports. Additionally, you will benefit from ongoing support and consulting to optimize your social media efforts continuously.`,
    howItHelpsYourBusiness: `Investing in professional social media marketing significantly boosts your online visibility and engagement. A well-executed social media strategy enhances brand awareness, fosters customer loyalty, and drives traffic to your website. By leveraging the power of social media platforms, you can reach a broader audience, engage with potential customers, and increase conversions. Our approach ensures that your social media presence is not only visually appealing and engaging but also aligned with your business objectives, resulting in measurable growth and success.`,
    benefits: [
      {
        title: "Increased Engagement",
        description: "Foster active interaction with your audience.",
      },
      {
        title: "Brand Loyalty",
        description: "Build a loyal community around your brand.",
      },
      {
        title: "Targeted Campaigns",
        description:
          "Reach specific demographics with tailored ads and content.",
      },
      {
        title: "Improved Visibility",
        description:
          "Enhance your brand’s presence on major social media platforms.",
      },
      {
        title: "Analytics & Insights",
        description:
          "Gain valuable insights through performance tracking and analysis.",
      },
    ],
    faqs: [
      {
        question:
          "How long does it take to see results from social media marketing?",
        answer:
          "The timeline for results can vary depending on your goals and strategy, but you can generally expect to see initial improvements in engagement and reach within the first few weeks, with more significant results developing over a few months.",
      },
      {
        question: "Which social media platforms should my business be on?",
        answer:
          "The best platforms for your business depend on your target audience and industry. We can help you identify the most effective platforms to reach and engage your audience.",
      },
      {
        question: "How often will you post on our social media accounts?",
        answer:
          "The frequency of posts will be tailored to your strategy and goals, but we typically recommend posting at least 3-5 times per week to maintain consistent engagement.",
      },
      {
        question: "Can you help with social media advertising?",
        answer:
          "Yes, we specialize in creating and managing targeted social media ad campaigns to reach your desired audience, drive traffic, and increase conversions.",
      },
      {
        question: "How do you measure the success of social media campaigns?",
        answer:
          "We use various metrics, such as engagement rates, follower growth, website traffic, and conversion rates, to measure the success of your social media campaigns and provide detailed analytics reports.",
      },
    ],
  },
  // Packaging
  {
    slug: "package-designing",
    Icon: Package,
    name: "Package Designing",
    description: "Crafting attractive and functional product packaging.",
    href: "/marketing-services/package-designing",
    cta: "Learn more",
    paymentLink: "",
    background: (
      <Image
        src="/marketing/package-designing.avif"
        alt="Branding"
        fill
        className="absolute w-full h-full object-cover opacity-60"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    cover: "/marketing/package-designing.avif",
    overview: `Our packaging design services are crafted to create visually stunning and functional packaging that enhances your product's appeal and market presence. We specialize in designing packaging that not only captures attention but also aligns with your brand identity and communicates your product's value effectively. Our creative and strategic approach ensures that your packaging stands out on the shelves and resonates with your target audience.`,
    tags: [
      "Product Packaging",
      "Box Design",
      "Packaging Strategy",
      "Packaging Graphics",
      "Innovative Packaging",
    ],
    whatWeOffer: [
      {
        title: "Custom Packaging Design",
        description:
          "We create unique and tailored packaging designs that reflect your brand’s personality and meet your product’s specific needs. This includes structural design, graphics, and materials that enhance both aesthetics and functionality.",
      },
      {
        title: "Product Labels",
        description:
          "Our team designs striking product labels that are clear, informative, and visually appealing, ensuring your product stands out on the shelves and provides essential information to consumers.",
      },
      {
        title: "Sustainable Packaging",
        description:
          "We prioritize eco-friendly materials and design solutions to create sustainable packaging that minimizes environmental impact while maintaining high standards of quality and appeal.",
      },
      {
        title: "Branding Packaging",
        description:
          "We integrate your brand’s identity into the packaging design, ensuring consistency and recognition across all your product lines.",
      },
      {
        title: "Retail Packaging",
        description:
          "We design packaging that enhances the retail experience, focusing on creating eye-catching designs that attract customers and drive sales.",
      },
      {
        title: "Innovative Packaging Solutions",
        description:
          "Our innovative designs incorporate the latest trends and technologies, offering creative and practical packaging solutions that elevate your product.",
      },
      {
        title: "Packaging Mockups",
        description:
          "We provide realistic packaging mockups that give you a clear visual of the final product, allowing for adjustments and refinements before production.",
      },
    ],
    howWeWork: `Our process starts with a detailed consultation to understand your product, brand, and packaging requirements. We then conduct market research and brainstorming sessions to develop initial design concepts. These concepts are refined based on your feedback, ensuring the design aligns with your vision and objectives. Once the design is finalized, we create detailed mockups and provide comprehensive support through the production phase to ensure the final packaging meets the highest standards of quality and functionality.`,
    whatYouReceive: `You will receive a complete packaging design package that includes custom design files, product labels, mockups, and detailed guidelines for production. Additionally, we provide ongoing support to address any design adjustments or production challenges, ensuring a smooth transition from design to final product.`,
    howItHelpsYourBusiness: `Professional packaging design significantly enhances your product's marketability and consumer appeal. Eye-catching and well-designed packaging attracts customers, conveys your brand message, and differentiates your product from competitors. Sustainable and innovative packaging solutions also enhance your brand’s reputation and align with consumer preferences for eco-friendly products. Our comprehensive approach ensures that your packaging not only looks great but also functions effectively, protecting your product and enhancing the overall customer experience.`,
    benefits: [
      {
        title: "Enhanced Product Appeal",
        description:
          "Professionally designed packaging attracts attention and makes your product stand out on the shelves.",
      },
      {
        title: "Brand Consistency",
        description:
          "Consistent branding across all packaging materials strengthens your brand identity and recognition.",
      },
      {
        title: "Increased Sales",
        description:
          "Eye-catching and functional packaging can drive consumer interest and boost sales.",
      },
      {
        title: "Customer Loyalty",
        description:
          "High-quality packaging enhances the customer experience, encouraging repeat purchases.",
      },
    ],
    faqs: [
      {
        question: "How long does the packaging design process take?",
        answer:
          "The timeline varies based on the complexity of the project, but most packaging design projects can be completed within 4 to 8 weeks from initial consultation to final delivery.",
      },
      {
        question: "Can you help with redesigning existing packaging?",
        answer:
          "Yes, we offer redesign services to update and improve your existing packaging, ensuring it meets current market trends and aligns with your brand’s evolving identity.",
      },
      {
        question:
          "What deliverables will we receive at the end of the project?",
        answer:
          "You will receive all final design files in various formats suitable for production, along with detailed guidelines and mockups to ensure accurate and high-quality production.",
      },
      {
        question: "Do you provide sustainable packaging solutions?",
        answer:
          "Yes, we prioritize eco-friendly materials and design solutions to create sustainable packaging that reduces environmental impact while maintaining high standards of quality and appeal.",
      },
      {
        question:
          "How do you ensure the packaging design aligns with our brand?",
        answer:
          "Our process involves a thorough understanding of your brand, product, and target audience. We collaborate closely with you throughout the project to ensure the packaging design reflects your brand identity and resonates with your customers.",
      },
    ],
  },
  // Social Media Management
  {
    slug: "social-media-management",
    Icon: Users,
    name: "Social Media Management",
    description: "Managing and optimizing social media presence",
    href: "/marketing-services/social-media-management",
    cta: "Learn more",
    paymentLink: "",
    background: (
      <Image
        src="/marketing/social-media-management.avif"
        alt="Branding"
        fill
        className="absolute w-full h-full object-cover opacity-60"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    cover: "/marketing/social-media-management.avif",
    overview: `Our packaging design services are crafted to create visually stunning and functional packaging that enhances your product's appeal and market presence. We specialize in designing packaging that not only captures attention but also aligns with your brand identity and communicates your product's value effectively. Our creative and strategic approach ensures that your packaging stands out on the shelves and resonates with your target audience.`,
    tags: [
      "Product Packaging",
      "Box Design",
      "Packaging Strategy",
      "Packaging Graphics",
      "Innovative Packaging",
    ],
    whatWeOffer: [
      {
        title: "Custom Packaging Design",
        description:
          "We create unique and tailored packaging designs that reflect your brand’s personality and meet your product’s specific needs. This includes structural design, graphics, and materials that enhance both aesthetics and functionality.",
      },
      {
        title: "Product Labels",
        description:
          "Our team designs striking product labels that are clear, informative, and visually appealing, ensuring your product stands out on the shelves and provides essential information to consumers.",
      },
      {
        title: "Sustainable Packaging",
        description:
          "We prioritize eco-friendly materials and design solutions to create sustainable packaging that minimizes environmental impact while maintaining high standards of quality and appeal.",
      },
      {
        title: "Branding Packaging",
        description:
          "We integrate your brand’s identity into the packaging design, ensuring consistency and recognition across all your product lines.",
      },
      {
        title: "Retail Packaging",
        description:
          "We design packaging that enhances the retail experience, focusing on creating eye-catching designs that attract customers and drive sales.",
      },
      {
        title: "Innovative Packaging Solutions",
        description:
          "Our innovative designs incorporate the latest trends and technologies, offering creative and practical packaging solutions that elevate your product.",
      },
      {
        title: "Packaging Mockups",
        description:
          "We provide realistic packaging mockups that give you a clear visual of the final product, allowing for adjustments and refinements before production.",
      },
    ],
    howWeWork: `Our process starts with a detailed consultation to understand your product, brand, and packaging requirements. We then conduct market research and brainstorming sessions to develop initial design concepts. These concepts are refined based on your feedback, ensuring the design aligns with your vision and objectives. Once the design is finalized, we create detailed mockups and provide comprehensive support through the production phase to ensure the final packaging meets the highest standards of quality and functionality.`,
    whatYouReceive: `You will receive a complete packaging design package that includes custom design files, product labels, mockups, and detailed guidelines for production. Additionally, we provide ongoing support to address any design adjustments or production challenges, ensuring a smooth transition from design to final product.`,
    howItHelpsYourBusiness: `Professional packaging design significantly enhances your product's marketability and consumer appeal. Eye-catching and well-designed packaging attracts customers, conveys your brand message, and differentiates your product from competitors. Sustainable and innovative packaging solutions also enhance your brand’s reputation and align with consumer preferences for eco-friendly products. Our comprehensive approach ensures that your packaging not only looks great but also functions effectively, protecting your product and enhancing the overall customer experience.`,
    benefits: [
      {
        title: "Enhanced Product Appeal",
        description:
          "Professionally designed packaging attracts attention and makes your product stand out on the shelves.",
      },
      {
        title: "Brand Consistency",
        description:
          "Consistent branding across all packaging materials strengthens your brand identity and recognition.",
      },
      {
        title: "Increased Sales",
        description:
          "Eye-catching and functional packaging can drive consumer interest and boost sales.",
      },
      {
        title: "Customer Loyalty",
        description:
          "High-quality packaging enhances the customer experience, encouraging repeat purchases.",
      },
    ],
    faqs: [
      {
        question: "How long does the packaging design process take?",
        answer:
          "The timeline varies based on the complexity of the project, but most packaging design projects can be completed within 4 to 8 weeks from initial consultation to final delivery.",
      },
      {
        question: "Can you help with redesigning existing packaging?",
        answer:
          "Yes, we offer redesign services to update and improve your existing packaging, ensuring it meets current market trends and aligns with your brand’s evolving identity.",
      },
      {
        question:
          "What deliverables will we receive at the end of the project?",
        answer:
          "You will receive all final design files in various formats suitable for production, along with detailed guidelines and mockups to ensure accurate and high-quality production.",
      },
      {
        question: "Do you provide sustainable packaging solutions?",
        answer:
          "Yes, we prioritize eco-friendly materials and design solutions to create sustainable packaging that reduces environmental impact while maintaining high standards of quality and appeal.",
      },
      {
        question:
          "How do you ensure the packaging design aligns with our brand?",
        answer:
          "Our process involves a thorough understanding of your brand, product, and target audience. We collaborate closely with you throughout the project to ensure the packaging design reflects your brand identity and resonates with your customers.",
      },
    ],
  },
];
