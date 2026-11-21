/**
 * SITE_CONFIG
 * -----------
 * Editable business-specific data for Precious Beauty Photos.
 * Keep this file loaded before main.js.
 */
const SITE_CONFIG = {

  pages: ['home', 'portfolio', 'about', 'contact'],

  // WhatsApp number: digits only, including country code.
  whatsappNumber: '14845613517',

  // Add the studio's real checkout/payment link here when it is ready.
  // Until then, the website shows the 70/30 payment breakdown but prevents
  // a customer from being sent to a non-existent checkout page.
  bookingUrl: '#',

  socialLinks: {
    instagram: 'https://www.instagram.com/preciousbeautyphotos?igsi=YXdrMzc3eGZzcmU2'
  },

  paymentTerms: {
    upfrontPercent: 70,
    balancePercent: 30,
    balanceDue: 'seven days before the session or event'
  },

  // Only Portrait Photography has a client-confirmed website price so far.
  // Leave unconfirmed services as null. Once the client confirms a price,
  // replace null with the full session total, e.g. 450.
  servicePrices: {
    'Portrait Photography': 650,
    'Family Photography': 2500,
    'Newborn & Baby': null,
    'Couples & Engagement': null,
    'Lifestyle & Branding': 750,
    'Wedding Photography': null,
    'Event Photography': 850,
    'Corporate Headshots': null,
    'Birthday Sessions': null,
    'Graduation Shoots': 600,
    'Maternity': 700,
    'Studio Photography': 1500,
    'Videography': null,
    'Content Creation': null,
    'Not sure yet': null
  },

  portfolio: {
    categories: [
      {
        key: 'portrait',
        label: 'POR',
        name: 'Portrait Photography',
        images: [
          'images-optimized/Pink-half-1.webp',
          'images-optimized/Native-gold-5.webp',
          'images-optimized/13.webp',
          'images-optimized/21.webp',
          'images-optimized/5.webp',
          'images-optimized/DSC09175.webp',
          'images-optimized/Red-3.0.webp'
        ],
        spots: ['Studio Session', 'Golden Hour Portrait', 'Classic Portrait']
      },
      {
        key: 'newborn',
        label: 'NB',
        name: 'Newborn Photography',
        images: ['images-optimized/1.webp', 'images-optimized/4.webp', 'images-optimized/3.webp'],
        spots: ['Little Beginnings', 'First Moments', 'Tiny Details']
      },
      {
        key: 'wedding',
        label: 'WED',
        name: 'Wedding Photography',
        images: [
          'images-optimized/DSC01784 (1).webp',
          'images-optimized/DSC01756.webp',
          'images-optimized/DSC01709.webp',
          'images-optimized/DSC01769.webp'
        ],
        spots: ['Wedding Portrait', 'Ceremony Moment', 'Bride & Groom']
      },
      {
        key: 'event',
        label: 'EVT',
        name: 'Event Photography',
        images: ['images-optimized/DSC01810.webp', 'images-optimized/DSC01818.webp', 'images-optimized/44.webp'],
        spots: ['Event Celebration', 'Special Moment', 'Event Portrait']
      },
      {
        key: 'corporate',
        label: 'CORP',
        name: 'Corporate Headshots',
        images: ['images-optimized/DSC01756.webp', 'images-optimized/DSC01709.webp', 'images-optimized/DSC01535.webp'],
        spots: ['Professional Portrait', 'Business Portrait', 'Personal Branding']
      },
      {
        key: 'birthday',
        label: 'BDAY',
        name: 'Birthday Sessions',
        images: ['images-optimized/DSC00456.webp', 'images-optimized/DSC00572.webp', 'images-optimized/DSC00573.webp'],
        spots: ['Birthday Celebration', 'Birthday Portrait', 'Special Day']
      },
      {
        key: 'family',
        label: 'FAM',
        name: 'Family Photography',
        images: ['images-optimized/2.webp', 'images-optimized/DSC01784.webp', 'images-optimized/Edited-Family.webp'],
        spots: ['Family Portrait', 'Family Moment', 'Family Session']
      },
      {
        key: 'graduation',
        label: 'GRAD',
        name: 'Graduation Shoots',
        images: ['images-optimized/16.webp', 'images-optimized/19.webp', 'images-optimized/17.webp', 'images-optimized/18.webp'],
        spots: ['Graduation Portrait', 'Milestone Graduate', 'Graduate Session']
      },
      {
        key: 'studio',
        label: 'STU',
        name: 'Studio Photography',
        images: ['images-optimized/Green-1-Full.webp', 'images-optimized/Pink-Full-1.webp', 'images-optimized/Pink-2.webp'],
        spots: ['Studio Portrait', 'Creative Studio', 'Studio Session']
      },
      {
        key: 'videography',
        label: 'VID',
        name: 'Videography',
        items: [
          {
            type: 'placeholder',
            // Replace with type: 'video' and src: 'videos/engagement 4.mp4' once the MP4 is provided.
            // src: 'videos/engagement 4.mp4',
            title: 'Engagement Film'
          },
          { type: 'placeholder', title: 'Wedding Film' },
          { type: 'placeholder', title: 'Event Highlights' },
          { type: 'placeholder', title: 'Brand Story' }
        ]
      },
      {
        key: 'content',
        label: 'CONTENT',
        name: 'Content Creation',
        items: [
          { type: 'placeholder', title: 'Social Media Reels' },
          { type: 'placeholder', title: 'Brand Content' },
          { type: 'placeholder', title: 'Creative Campaigns' }
        ]
      }
    ]
  },

  faqs: [
    {
      q: 'What areas do you serve?',
      a: 'Precious Beauty Photos is based in Pennsylvania, USA. Local and travel availability can be discussed when you inquire about your session or project.'
    },
    {
      q: 'What should we wear?',
      a: "Coordinate, don't match — choose two or three colors that work well together and let each person vary within that palette. Styling can also be discussed before your session."
    },
    {
      q: 'How long is a session?',
      a: 'Session length depends on the service selected. Newborn sessions generally need more time for feeding, settling, and breaks, while other portrait sessions can be confirmed during booking.'
    },
    {
      q: 'When will we get our photos or video?',
      a: 'Delivery timing depends on the type and size of the project. Your expected turnaround will be confirmed when the booking details are finalized.'
    },
    {
      q: 'How does payment work?',
      a: 'A signed agreement and 70% retainer are required to reserve the date. The remaining 30% is due seven days before the session or event.'
    },
    {
      q: 'How do I book a session?',
      a: 'Send an inquiry with your preferred service and date. Once availability and the total price are confirmed, a signed agreement and 70% retainer secure the booking and the remaining 30% is due seven days before the session or event.'
    }
  ]
};
