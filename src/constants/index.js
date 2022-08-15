import image1 from '../images/product1.png';
import image2 from '../images/product2.png';

export const faqData = [
  {
    title: 'How do I find my order',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'How does buying work',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'How many fees are there',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'How do I sign out ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'How do I message ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'How do I refund items',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

export const categories = [
  {
    id: 1,
    title: 'Probiotic',
  },
  {
    id: 2,
    title: 'Cleanses',
  },
  {
    id: 3,
    title: 'Immune System',
  },
  {
    id: 4,
    title: 'Digestion',
  },
  {
    id: 5,
    title: 'Laxative',
  },
  {
    id: 6,
    title: 'Liver/Gallbladder',
  },
  {
    id: 7,
    title: 'Bone Strengthener',
  },
  {
    id: 8,
    title: 'Imflammation',
  },
  {
    id: 9,
    title: 'Parasite',
  },
];

export const products = [
  {
    id: 1,
    category: 1,
    title: 'Digest Aid',
    price: 299.99,
    img_url: image1,
    features: [
      'Strengthen gut health',
      'Prevent stress to the body and cells',
      'Rich in vitamins',
    ]
  },
  {
    id: 2,
    category: 1,
    title: 'Blood & Lymph',
    price: 299.99,
    img_url: image2,
    features: [
      'Helps prevent and battles infections',
      'Improves circulation',
    ]
  },
  {
    id: 3,
    category: 1,
    title: 'Evacu-Ease',
    price: 299.99,
    img_url: image2,
    features: [
      'Laxative that improves intestinal wellness',
    ]
  },
  {
    id: 4,
    category: 2,
    title: 'GreenTune 7 Day Liver & Gallbladder Cleanse',
    price: 299.99,
    img_url: image1,
    features: [
      'Clean out small and large intestine',
      'Improve immune system',
      'Soften and dissolve gallbladder stones',
      'Improves energy and focus',
      'Maintain muscle and reduce fat',
    ]
  },
  {
    id: 5,
    category: 2,
    title: 'GreenTune 7 Day Intestinal Detox',
    price: 299.99,
    img_url: image2,
    features: [
      'Improve digestion system',
      'Improve intestional strength and health',
      'Decrease inflammation in the intestines',
      'Rich source of vitamins and antioxidants',
    ]
  },
  {
    id: 6,
    category: 2,
    title: 'GreenTune 21 Day Parasite Remover Cleanse',
    price: 299.99,
    img_url: image2,
    features: [
      'Get rid of unwanted bacteria and parasites',
      'Strengthens the immune system',
      'Helps with colds, congestion, urinary tract infections and intestinal worms',
    ]
  },
  {
    id: 7,
    category: 3,
    title: 'Blood & Lymph',
    price: 299.99,
    img_url: image2,
    features: [
      'Helps prevent and battles infections',
      'Improves circulation',
    ]
  },
  {
    id: 8,
    category: 3,
    title: 'Digest Aid',
    price: 299.99,
    img_url: image1,
    features: [
      'Strengthen gut health',
      'Prevent stress to the body and cells',
      'Rich in vitamins',
    ]
  },
  {
    id: 9,
    category: 3,
    title: 'GreenTune 7 Day Intestinal Detox',
    price: 299.99,
    img_url: image2,
    features: [
      'Improve digestion system',
      'Improve intestional strength and health',
      'Decrease inflammation in the intestines',
      'Rich source of vitamins and antioxidants',
    ]
  },
  {
    id: 10,
    category: 3,
    title: 'GreenTune 21 Day Parasite Remover Cleanse',
    price: 299.99,
    img_url: image2,
    features: [
      'Get rid of unwanted bacteria and parasites',
      'Strengthens the immune system',
      'Helps with colds, congestion, urinary tract infections and intestinal worms',
    ]
  },
  {
    id: 11,
    category: 4,
    title: 'Evacu-Ease',
    price: 299.99,
    img_url: image2,
    features: [
      'Laxative that improves intestinal wellness',
    ]
  },
  {
    id: 12,
    category: 4,
    title: 'Blood & Lymph',
    price: 299.99,
    img_url: image2,
    features: [
      'Helps prevent and battles infections',
      'Improves circulation',
    ]
  },
  {
    id: 13,
    category: 4,
    title: 'GreenTune 7 Day Intestinal Detox',
    price: 299.99,
    img_url: image2,
    features: [
      'Improve digestion system',
      'Improve intestional strength and health',
      'Decrease inflammation in the intestines',
      'Rich source of vitamins and antioxidants',
    ]
  },
  {
    id: 14,
    category: 5,
    title: 'GreenTune 7 Day Liver & Gallbladder Cleanse',
    price: 299.99,
    img_url: image1,
    features: [
      'Clean out small and large intestine',
      'Improve immune system',
      'Soften and dissolve gallbladder stones',
      'Improves energy and focus',
      'Maintain muscle and reduce fat',
    ]
  },
  {
    id: 15,
    category: 5,
    title: 'GreenTune 7 Day Liver & Gallbladder Cleanse',
    price: 299.99,
    img_url: image1,
    features: [
      'Clean out small and large intestine',
      'Improve immune system',
      'Soften and dissolve gallbladder stones',
      'Improves energy and focus',
      'Maintain muscle and reduce fat',
    ]
  },
  {
    id: 16,
    category: 5,
    title: 'GreenTune 7 Day Liver & Gallbladder Cleanse',
    price: 299.99,
    img_url: image1,
    features: [
      'Clean out small and large intestine',
      'Improve immune system',
      'Soften and dissolve gallbladder stones',
      'Improves energy and focus',
      'Maintain muscle and reduce fat',
    ]
  },
  {
    id: 17,
    category: 6,
    title: 'GreenTune 21 Day Parasite Remover Cleanse',
    price: 299.99,
    img_url: image2,
    features: [
      'Get rid of unwanted bacteria and parasites',
      'Strengthens the immune system',
      'Helps with colds, congestion, urinary tract infections and intestinal worms',
    ]
  },
  {
    id: 18,
    category: 6,
    title: 'GreenTune 21 Day Parasite Remover Cleanse',
    price: 299.99,
    img_url: image2,
    features: [
      'Get rid of unwanted bacteria and parasites',
      'Strengthens the immune system',
      'Helps with colds, congestion, urinary tract infections and intestinal worms',
    ]
  },
  {
    id: 19,
    category: 6,
    title: 'GreenTune 21 Day Parasite Remover Cleanse',
    price: 299.99,
    img_url: image2,
    features: [
      'Get rid of unwanted bacteria and parasites',
      'Strengthens the immune system',
      'Helps with colds, congestion, urinary tract infections and intestinal worms',
    ]
  },
  {
    id: 20,
    category: 7,
    title: 'Blood & Lymph',
    price: 299.99,
    img_url: image2,
    features: [
      'Helps prevent and battles infections',
      'Improves circulation',
    ]
  },
  {
    id: 21,
    category: 7,
    title: 'Blood & Lymph',
    price: 299.99,
    img_url: image2,
    features: [
      'Helps prevent and battles infections',
      'Improves circulation',
    ]
  },
  {
    id: 22,
    category: 7,
    title: 'Blood & Lymph',
    price: 299.99,
    img_url: image2,
    features: [
      'Helps prevent and battles infections',
      'Improves circulation',
    ]
  },
  {
    id: 23,
    category: 8,
    title: 'Digest Aid',
    price: 299.99,
    img_url: image1,
    features: [
      'Strengthen gut health',
      'Prevent stress to the body and cells',
      'Rich in vitamins',
    ]
  },
  {
    id: 24,
    category: 8,
    title: 'Digest Aid',
    price: 299.99,
    img_url: image1,
    features: [
      'Strengthen gut health',
      'Prevent stress to the body and cells',
      'Rich in vitamins',
    ]
  },
  {
    id: 25,
    category: 8,
    title: 'Digest Aid',
    price: 299.99,
    img_url: image1,
    features: [
      'Strengthen gut health',
      'Prevent stress to the body and cells',
      'Rich in vitamins',
    ]
  },
  {
    id: 26,
    category: 9,
    title: 'GreenTune 7 Day Intestinal Detox',
    price: 299.99,
    img_url: image2,
    features: [
      'Improve digestion system',
      'Improve intestional strength and health',
      'Decrease inflammation in the intestines',
      'Rich source of vitamins and antioxidants',
    ]
  },
  {
    id: 27,
    category: 9,
    title: 'GreenTune 7 Day Intestinal Detox',
    price: 299.99,
    img_url: image2,
    features: [
      'Improve digestion system',
      'Improve intestional strength and health',
      'Decrease inflammation in the intestines',
      'Rich source of vitamins and antioxidants',
    ]
  },
  {
    id: 28,
    category: 9,
    title: 'GreenTune 7 Day Intestinal Detox',
    price: 299.99,
    img_url: image2,
    features: [
      'Improve digestion system',
      'Improve intestional strength and health',
      'Decrease inflammation in the intestines',
      'Rich source of vitamins and antioxidants',
    ]
  },
  {
    id: 29,
    category: 4,
    title: 'Evacu-Ease',
    price: 299.99,
    img_url: image2,
    features: [
      'Laxative that improves intestinal wellness',
    ]
  },
  {
    id: 30,
    category: 3,
    title: 'Evacu-Ease',
    price: 299.99,
    img_url: image2,
    features: [
      'Laxative that improves intestinal wellness',
    ]
  },
  {
    id: 31,
    category: 1,
    title: 'Evacu-Ease',
    price: 299.99,
    img_url: image2,
    features: [
      'Laxative that improves intestinal wellness',
    ]
  },
];