const restaurants = [
  {
    id: 1,
    name: "The Market at Hotel ICON",
    specials:
      "Durian Dessert Buffet - 25% off dinner buffet (HKD 598 → HKD 448)",
    cuisine: "International Buffet",
    days_active: ["Monday", "Tuesday", "Wednesday"],
    district: "Tsim Sha Tsui",
    address: "2/F, Hotel ICON, 17 Science Museum Road, Tsim Sha Tsui East",
    phone: "+852 3400 1388",
    description:
      "Award-winning buffet featuring signature durian desserts by Executive Chef Danny Ho ('Durian Prince'), including durian crème brûlée, durian mille-feuille, and durian macarons. Fresh seafood selection includes Hokkaido scallop carpaccio and Alaskan king crab legs.",
    price: "HKD 448",
    time_slot: "6:00 PM - 10:00 PM",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 2,
    name: "Wing",
    specials:
      "Tasting Menu Tuesday - 20% off signature tasting menu (HKD 1,980 → HKD 1,584)",
    cuisine: "Modern Cantonese",
    days_active: ["Tuesday"],
    district: "Central",
    address: "2/F, The Wellington, 198 Wellington Street, Central",
    phone: "+852 2711 0063",
    description:
      "Ranked #11 in The World's 50 Best Restaurants 2025, Wing offers an innovative take on Cantonese cuisine. The Tuesday special includes their award-winning char siu with 48-hour marinade and honey glaze, plus a complimentary glass of premium Chinese yellow wine.",
    price: "HKD 1,584",
    time_slot: "6:30 PM - 10:00 PM",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 3,
    name: "Cheung Hing Coffee Shop",
    specials: "Weekday Breakfast Set - HKD 48 (includes milk tea & toast)",
    cuisine: "Cha Chaan Teng",
    days_active: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    district: "Wan Chai",
    address: "9 Landale Street, Wan Chai",
    phone: "+852 2527 7669",
    description:
      "A classic Hong Kong-style café serving traditional comfort food. The breakfast special includes their signature milk tea and buttered toast with condensed milk. Add scrambled eggs for HKD 10 extra.",
    price: "HKD 48",
    time_slot: "7:00 AM - 11:00 AM",
    image:
      "https://images.unsplash.com/photo-1550951957-13029b3d9be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 4,
    name: "Yee Shun Dairy Company",
    specials: "Double Steamed Milk Dessert Set - Buy 1 Get 1 Free",
    cuisine: "Hong Kong Dessert",
    days_active: ["Wednesday", "Thursday"],
    district: "Causeway Bay",
    address: "506 Lockhart Road, Causeway Bay",
    phone: "+852 2591 1837",
    description:
      "Famous for their silky smooth steamed milk desserts. Wednesday and Thursday special offers buy-one-get-one on their signature double-layer steamed milk with ginger or red bean toppings.",
    price: "HKD 42 for two",
    time_slot: "2:00 PM - 6:00 PM",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 5,
    name: "Sushi Saito Hong Kong",
    specials: "Omakase Lunch Special - HKD 1,800 (regular price HKD 2,500)",
    cuisine: "Japanese",
    days_active: ["Monday", "Friday"],
    district: "Central",
    address: "45/F, Four Seasons Hotel, 8 Finance Street, Central",
    phone: "+852 3196 8230",
    description:
      "The Hong Kong branch of Tokyo's three-Michelin-starred sushi restaurant offers a special Monday and Friday lunch omakase featuring seasonal fish flown in daily from Tokyo's Toyosu Market.",
    price: "HKD 1,800",
    time_slot: "12:00 PM - 2:00 PM",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 6,
    name: "Chilli Fagara",
    specials: "Mala Monday - 30% off all spicy Sichuan dishes",
    cuisine: "Sichuan",
    days_active: ["Monday"],
    district: "Central",
    address: "7 Old Bailey Street, Central",
    phone: "+852 2796 6866",
    description:
      "Known for their fiery Sichuan cuisine with dishes categorized by heat level. Monday special includes 30% off their signature dishes like mouth-numbing mapo tofu, spicy Chongqing chicken, and dan dan noodles.",
    price: "30% off regular prices",
    time_slot: "6:00 PM - 10:00 PM",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 7,
    name: "Little Bao",
    specials: "Bao & Brew Thursday - Bao set with craft beer for HKD 168",
    cuisine: "Modern Chinese",
    days_active: ["Thursday"],
    district: "Soho",
    address: "1-3 Shin Hing Street, Central",
    phone: "+852 2194 0202",
    description:
      "Chef May Chow's modern Chinese restaurant offers a Thursday special featuring two signature baos (choose from pork belly, fried chicken, or fish tempura) plus a local Hong Kong craft beer.",
    price: "HKD 168",
    time_slot: "5:00 PM - 8:00 PM",
    image:
      "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 8,
    name: "Belon",
    specials: "Weekend Brunch Prix-Fixe - 3 courses for HKD 698",
    cuisine: "French",
    days_active: ["Saturday", "Sunday"],
    district: "Soho",
    address: "1F, 41 Elgin Street, Central",
    phone: "+852 2152 2872",
    description:
      "Neo-Parisian bistro offering a special weekend brunch with three courses featuring their signature roast chicken, fresh oysters, and dessert. Includes one glass of champagne.",
    price: "HKD 698",
    time_slot: "11:30 AM - 2:30 PM",
    image:
      "https://images.unsplash.com/photo-1600891963935-9e73a3bbfe97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 9,
    name: "Samsen",
    specials: "Weekday Lunch Set - Boat Noodles + Drink for HKD 108",
    cuisine: "Thai",
    days_active: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    district: "Wan Chai",
    address: "68 Stone Nullah Lane, Wan Chai",
    phone: "+852 2234 0001",
    description:
      "Chef Adam Cliff's popular Thai noodle bar offers a weekday lunch special featuring their signature boat noodles with your choice of protein, plus a Thai iced tea or lemongrass drink.",
    price: "HKD 108",
    time_slot: "12:00 PM - 2:30 PM",
    image:
      "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 10,
    name: "Duddell's",
    specials: "Dim Sum & Champagne Brunch - 20% off (HKD 788 → HKD 630)",
    cuisine: "Cantonese",
    days_active: ["Sunday"],
    district: "Central",
    address: "Level 3, Shanghai Tang Mansion, 1 Duddell Street, Central",
    phone: "+852 2525 9191",
    description:
      "Michelin-starred Cantonese restaurant offering a Sunday brunch with free-flow Veuve Clicquot champagne and unlimited dim sum. The special includes their famous gold leaf har gau and black truffle siu mai.",
    price: "HKD 630",
    time_slot: "12:00 PM - 3:00 PM",
    image:
      "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 11,
    name: "Taqueria Super Macho",
    specials: "Taco Tuesday - HKD 30 tacos & HKD 50 margaritas",
    cuisine: "Mexican",
    days_active: ["Tuesday"],
    district: "Soho",
    address: "33-35 Bridges Street, Sheung Wan",
    phone: "+852 2333 0111",
    description:
      "Vibrant taqueria focused on coastal Mexican cuisine. Their Tuesday special offers HKD 30 tacos (choose from Baja fish, carnitas, or mushroom) and HKD 50 classic margaritas all night.",
    price: "HKD 30 per taco",
    time_slot: "5:00 PM - 11:00 PM",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 12,
    name: "Pici",
    specials: "Pasta Brunch - All-you-can-eat pasta for HKD 208",
    cuisine: "Italian",
    days_active: ["Saturday", "Sunday"],
    district: "Wan Chai",
    address: "16 St. Francis Yard, Wan Chai",
    phone: "+852 2755 5523",
    description:
      "Neighborhood pasta bar offering weekend all-you-can-eat pasta brunch. Choose from their handmade pastas including pappardelle with beef ragu, tagliolini with truffle, and orecchiette with sausage.",
    price: "HKD 208",
    time_slot: "11:30 AM - 2:30 PM",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 13,
    name: "Ho Lee Fook",
    specials: "Freak Out Thursday - Chef's choice menu for HKD 488",
    cuisine: "Modern Chinese",
    days_active: ["Thursday"],
    district: "Central",
    address: "1-5 Elgin Street, Central",
    phone: "+852 2810 0860",
    description:
      "Chef Jowett Yu's playful Chinese kitchen offers a Thursday night special with a surprise menu featuring their most creative dishes. Includes their famous roast wagyu short ribs with jalapeño purée.",
    price: "HKD 488",
    time_slot: "6:00 PM - 10:00 PM",
    image:
      "https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 14,
    name: "Yardbird",
    specials: "Monday Yakitori Set - 12 skewers for HKD 298",
    cuisine: "Japanese Yakitori",
    days_active: ["Monday"],
    district: "Sheung Wan",
    address: "154-158 Wing Lok Street, Sheung Wan",
    phone: "+852 2547 9273",
    description:
      "Popular yakitori restaurant specializing in chicken. Monday special includes 12 skewers featuring different parts of the chicken, from thigh and breast to heart and knee cartilage, plus a Suntory highball.",
    price: "HKD 298",
    time_slot: "6:00 PM - 11:00 PM",
    image:
      "https://images.unsplash.com/photo-1584670747417-594a9412fba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: 15,
    name: "Rajasthan Rifles",
    specials: "Wednesday Curry Club - 25% off all curries",
    cuisine: "Anglo-Indian",
    days_active: ["Wednesday"],
    district: "The Peak",
    address: "The Peak Galleria, Shop G01, 118 Peak Road",
    phone: "+852 2388 8874",
    description:
      "Anglo-Indian mess hall inspired by the British-Indian army regiments. Wednesday special offers 25% discount on all curries including their signature butter chicken, keema with peas, and vegetable jalfrezi.",
    price: "25% off regular prices",
    time_slot: "5:00 PM - 10:00 PM",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356cf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
];

export default restaurants;
// Update in src/data.js - just the image URLs section

// Replace all image URLs with these more reliable ones
// Restaurant 1
image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

// Restaurant 2
image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

// Restaurant 3
image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

// Restaurant 4
image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

// Restaurant 5
image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

// Restaurant 6
image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

// Restaurant 7
image: "https://images.unsplash.com/photo-1617196034183-421b4917c92d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

// Restaurant 8
image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

// Restaurant 9
image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

// Restaurant 10
image: "https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

// Restaurant 11
image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

// Restaurant 12
image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

// Restaurant 13
image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

// Restaurant 14
image: "https://images.unsplash.com/photo-1511344407683-b1172dce025f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

// Restaurant 15
image: "https://images.unsplash.com/photo-1585937421612-70a008356cf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
