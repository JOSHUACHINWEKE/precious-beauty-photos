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
    balanceDue: 'the day before the appointment'
  },

  // Only Portrait Photography has a client-confirmed website price so far.
  // Leave unconfirmed services as null. Once the client confirms a price,
  // replace null with the full session total, e.g. 450.
  servicePrices: {
    'Portrait Photography': 350,
    'Family Photography': null,
    'Newborn & Baby': null,
    'Couples & Engagement': null,
    'Lifestyle & Branding': null,
    'Wedding Photography': null,
    'Event Photography': null,
    'Corporate Headshots': null,
    'Birthday Sessions': null,
    'Graduation Shoots': null,
    'Studio Photography': null,
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
          'images/Pink-half-1.jpg',
          'images/Native-gold-5.png',
          'images/13.jpg',
          'images/21.jpeg',
          'images/5.jpg',
          'images/DSC09175.jpg',
          'images/Red-3.0.png'
        ],
        spots: ['Studio Session', 'Golden Hour Portrait', 'Classic Portrait']
      },
      {
        key: 'newborn',
        label: 'NB',
        name: 'Newborn Photography',
        images: ['images/1.jpg', 'images/4.jpg', 'images/3.jpg'],
        spots: ['Little Beginnings', 'First Moments', 'Tiny Details']
      },
      {
        key: 'wedding',
        label: 'WED',
        name: 'Wedding Photography',
        images: [
          'images/DSC01784 (1).jpg',
          'images/DSC01756.jpg',
          'images/DSC01709.jpg',
          'images/DSC01769.jpg'
        ],
        spots: ['Wedding Portrait', 'Ceremony Moment', 'Bride & Groom']
      },
      {
        key: 'event',
        label: 'EVT',
        name: 'Event Photography',
        images: ['images/DSC01810.jpg', 'images/DSC01818.jpg', 'images/44.jpg'],
        spots: ['Event Celebration', 'Special Moment', 'Event Portrait']
      },
      {
        key: 'corporate',
        label: 'CORP',
        name: 'Corporate Headshots',
        images: ['images/DSC01756.jpg', 'images/DSC01709.jpg', 'images/DSC01535.jpg'],
        spots: ['Professional Portrait', 'Business Portrait', 'Personal Branding']
      },
      {
        key: 'birthday',
        label: 'BDAY',
        name: 'Birthday Sessions',
        images: ['images/DSC00456.jpg', 'images/DSC00572.jpg', 'images/DSC00573.jpg'],
        spots: ['Birthday Celebration', 'Birthday Portrait', 'Special Day']
      },
      {
        key: 'family',
        label: 'FAM',
        name: 'Family Photography',
        images: ['images/2.jpg', 'images/DSC01784.jpg', 'images/Edited-Family.jpg'],
        spots: ['Family Portrait', 'Family Moment', 'Family Session']
      },
      {
        key: 'graduation',
        label: 'GRAD',
        name: 'Graduation Shoots',
        images: ['images/16.jpg', 'images/19.jpg', 'images/17.jpg', 'images/18.jpg'],
        spots: ['Graduation Portrait', 'Milestone Graduate', 'Graduate Session']
      },
      {
        key: 'studio',
        label: 'STU',
        name: 'Studio Photography',
        images: ['images/Green-1-Full.jpg', 'images/Pink-Full-1.jpg', 'images/Pink-2.png'],
        spots: ['Studio Portrait', 'Creative Studio', 'Studio Session']
      },
      {
        key: 'videography',
        label: 'VID',
        name: 'Videography',
        items: [
          {
            type: 'video',
            src: 'videos/engagement 4.mp4',
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
      a: 'A 70% upfront payment is required to secure the booking. The remaining 30% is due the day before the appointment.'
    },
    {
      q: 'How do I book a session?',
      a: 'Send an inquiry with your preferred service and date. Once availability and the total price are confirmed, 70% secures the booking and the remaining 30% is due the day before the appointment.'
    }
  ]
};
