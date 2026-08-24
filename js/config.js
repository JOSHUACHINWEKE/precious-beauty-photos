/**
 * SITE_CONFIG
 * -----------
 * All editable, business-specific data for the Precious Beauty Photos site
 * lives here, separate from the behavior in main.js. Update values in this
 * file — you shouldn't need to touch main.js for day-to-day content changes.
 *
 * Must load BEFORE main.js (see index.html <head>).
 */
const SITE_CONFIG = {

  // Valid single-page-app "routes". Must match each <main id="page-*"> id
  // and each nav link's data-page attribute.
  pages: ['home', 'portfolio', 'about', 'contact'],

  // Contact form -> WhatsApp. Digits only, country code included, no
  // spaces/parentheses/dashes. This is the +1 (484) 561-3517 number.
  whatsappNumber: '14845613517',

  // "Book & Pay Now" button on the Contact page. Replace '#' with your
  // real Square Appointments booking page URL once that account is set up
  // (e.g. 'https://book.squareup.com/appointments/yourname').
  bookingUrl: '#',

  // Portfolio page grid: generated at runtime from this data so the HTML
  // doesn't need 100+ hand-written placeholder blocks.
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

      spots: [
        'Studio Session',
        'Golden Hour Portrait',
        'Classic Portrait'
      ]
    },

    {
  key: 'newborn',
  label: 'NB',
  name: 'Newborn Photography',

  images: [
    'images/1.jpg',
    'images/4.jpg',
    'images/3.jpg'
  ],

  spots: [
    'Little Beginnings',
    'First Moments',
    'Tiny Details'
  ]
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

      spots: [
        'Wedding Portrait',
        'Ceremony Moment',
        'Bride & Groom'
      ]
    },

    {
      key: 'event',
      label: 'EVT',
      name: 'Event Photography',

      images: [
        'images/DSC01810.jpg',
        'images/DSC01818.jpg',
        'images/44.jpg'
      ],

      spots: [
        'Event Celebration',
        'Special Moment',
        'Event Portrait'
      ]
    },

    {
      key: 'corporate',
      label: 'CORP',
      name: 'Corporate Headshots',

      images: [
        'images/DSC01756.jpg',
        'images/DSC01709.jpg',
        'images/DSC01535.jpg'
      ],

      spots: [
        'Professional Portrait',
        'Business Portrait',
        'Personal Branding'
      ]
    },

    {
      key: 'birthday',
      label: 'BDAY',
      name: 'Birthday Sessions',

      images: [
        'images/DSC00456.jpg',
        'images/DSC00572.jpg',
        'images/DSC00573.jpg'
      ],

      spots: [
        'Birthday Celebration',
        'Birthday Portrait',
        'Special Day'
      ]
    },

    {
      key: 'family',
      label: 'FAM',
      name: 'Family Photography',

      images: [
        'images/2.jpg',
        'images/DSC01784.jpg',
        'images/Edited-Family.jpg'
      ],

      spots: [
        'Family Portrait',
        'Family Moment',
        'Family Session'
      ]
    },

    {
      key: 'graduation',
      label: 'GRAD',
      name: 'Graduation Shoots',

      images: [
        'images/16.jpg',
        'images/19.jpg',
        'images/17.jpg',
        'images/18.jpg'
        
      ],

      spots: [
        'Graduation Portrait',
        'Milestone Graduate',
        'Graduate Session'
      ]
    },

    {
      key: 'studio',
      label: 'STU',
      name: 'Studio Photography',

      images: [
        'images/Green-1-Full.jpg',
        'images/Pink-Full-1.jpg',
        'images/Pink-2.png'
      ],

      spots: [
        'Studio Portrait',
        'Creative Studio',
        'Studio Session'
      ]
    },

    {
      key: 'videography',
      label: 'VID',
      name: 'Videography',

      items: [
        {
          type: 'video',
          src: 'videos/engagement 4.mp4',
          poster: 'videos/engagement-4-poster.jpg',
          title: 'Engagement Film'
        },
        {
          type: 'placeholder',
          title: 'Wedding Film'
        },
        {
          type: 'placeholder',
          title: 'Event Highlights'
        },
        {
          type: 'placeholder',
          title: 'Brand Story'
        }
      ]
    },

    {
      key: 'content',
      label: 'CONTENT',
      name: 'Content Creation',

      items: [
        {
          type: 'placeholder',
          title: 'Social Media Reels'
        },
        {
          type: 'placeholder',
          title: 'Brand Content'
        },
        {
          type: 'placeholder',
          title: 'Creative Campaigns'
        }
      ]
    }


  ]
},

  // Shared between the Home page FAQ and the Contact page "quick answers".
  faqs: [
    { q: 'What areas do you serve?', a: "I'm based in Dallas, TX and shoot throughout the DFW metroplex — Fort Worth, Plano, Frisco, McKinney, and nearby areas. Travel fees may apply beyond 30 miles." },
    { q: 'What should we wear?', a: "Coordinate, don't match — pick two or three colors from the same warm or neutral family and let everyone vary within that. I'll send a full style guide after booking." },
    { q: 'How long is a session?', a: 'Family and lifestyle sessions run 45–60 minutes. Newborn sessions are typically 2–3 hours to allow for feeding and settling breaks.' },
    { q: 'When will we get our photos?', a: 'A sneak peek of 2–3 images arrives within 48 hours. Your full edited gallery is delivered in 2–3 weeks.' },
    { q: 'Do you offer prints and albums?', a: 'Yes — prints, albums, and framed wall art are available as add-ons to any session package.' },
    { q: 'How do I book a session?', a: "Send an inquiry through the contact page. I'll reply within 24 hours to confirm availability, then a signed contract and deposit hold your date." }
  ]
};
