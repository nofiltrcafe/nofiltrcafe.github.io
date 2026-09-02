import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import coffeeArt from '../assets/coffee_art.png';
import burgerPlate from '../assets/burger_plate.png';
import mocktailDrink from '../assets/mocktail_drink.png';
import sandwichWrap from '../assets/sandwich_wrap.png';
import dessertPlate from '../assets/dessert_plate.png';
import friesBites from '../assets/fries_bites.png';

const MINIMAL_MENU_DATA = [
  {
    id: 'coffee',
    categoryName: 'Coffee & Brews',
    tagline: 'Espresso Classics, Cold Coffees & Specialities',
    image: coffeeArt,
    subsections: [
      {
        title: 'HOT COFFEE',
        items: [
          { name: 'Espresso', sub: 'Single Shot / Double Shot' },
          { name: 'Americano', sub: 'Regular / With Honey' },
          { name: 'Cappucino', sub: 'Regular · Hazelnut · Vanilla · Caramel' },
          { name: 'Cafe Latte', sub: 'Regular · Hazelnut · Vanilla · Caramel' },
          { name: 'Machiato', sub: 'Regular · Chocolate · Caramel' },
        ],
      },
      {
        title: 'COLD COFFEE',
        items: [
          { name: 'Shaken Coffee', sub: 'Hazelnut · Vanilla · Caramel · Chocolate' },
          { name: 'Frappe', sub: 'Hazelnut · Vanilla · Caramel · Chocolate' },
        ],
      },
      {
        title: 'SPECIALITY COFFEE',
        items: [
          { name: 'Cafe Bobom', sub: 'Spanish espresso layered with sweetened condensed milk' },
          { name: 'Cinnamon Honey Latte', sub: 'Velvety espresso with honey & cinnamon spice' },
          { name: 'Salted Caramel Latte', sub: 'Rich espresso swirled with caramel & sea salt' },
          { name: 'Coconut Shaken Coffee', sub: 'Bold espresso shaken with creamy coconut milk' },
        ],
      },
    ],
  },
  {
    id: 'teas-desserts',
    categoryName: 'Teas & Desserts',
    tagline: 'Botanical Floral Infusions & Sweet Treats',
    image: dessertPlate,
    subsections: [
      {
        title: 'TEA INFUSIONS',
        items: [
          { name: 'Hibiscus Petals', sub: 'Tart, ruby-red floral infusion packed with antioxidants' },
          { name: 'Butterfly Pea', sub: 'Mesmerizing azure blue tea that changes color with lemon' },
          { name: 'Chamomile', sub: 'Whole golden chamomile blossoms, soothing & honey-sweet' },
        ],
      },
      {
        title: 'DESSERTS',
        items: [
          { name: 'Affogato', sub: 'Vanilla ice cream drowned in hot espresso', highlight: '⭐ Signature' },
        ],
      },
    ],
  },
  {
    id: 'mocktails',
    categoryName: 'Mocktails & Specials',
    tagline: 'Handcrafted Coolers & Signature Concoctions',
    image: mocktailDrink,
    subsections: [
      {
        title: 'MOCKTAILS',
        items: [
          { name: 'The Mojito Collection', sub: 'Refreshing garden mint & zesty lime' },
          { name: 'Cucumber Basil Smash', sub: 'Fresh cucumber, basil leaves & sparkling soda' },
          { name: 'The Very Very Sunrise', sub: 'Layered citrus & tropical fruit punch' },
          { name: 'The Shirley Temple', sub: 'Classic grenadine & fizzy ginger lemon' },
          { name: 'Pina Colada', sub: 'Pineapple juice & velvety coconut cream' },
          { name: 'Blue Hawaiin', sub: 'Tropical blue curaçao & citrus punch' },
        ],
      },
      {
        title: 'SPECIALITY MOCKTAILS',
        items: [
          { name: 'The Coco Loco', sub: 'Creamy coconut & tropical fruit blend' },
          { name: 'The Basillica', sub: 'Fresh herbal basil & berry sparkle' },
          { name: 'The Sunrise Stack', sub: 'Layered fruit nectars with crushed ice' },
          { name: 'The Tropical Duo', sub: 'Mango & passionfruit velvet splash' },
          { name: 'The Spice Route', sub: 'Artisanal spice-infused signature cooler', highlight: '⭐ Featured' },
          { name: 'The Eclipse', sub: 'Dark berry fusion with sparkling citrus zest', highlight: '⭐ Featured' },
        ],
      },
    ],
  },
  {
    id: 'bites-fries',
    categoryName: 'Fries & Bites',
    tagline: 'Crispy Golden Sides & Savory Snacks',
    image: friesBites,
    subsections: [
      {
        title: 'FRIES',
        items: [
          { name: 'Regular Fries', sub: 'Crispy golden fries tossed with sea salt' },
          { name: 'Peri Peri Fries', sub: 'Fiery zesty peri peri seasoning' },
          { name: 'Loaded Veg Fries', sub: 'Smothered in warm velvety cheese sauce' },
          { name: 'Loaded Chicken Fries', sub: 'Topped with grilled chicken & melted cheese' },
        ],
      },
      {
        title: 'BITES',
        items: [
          { name: 'Potato Cheese Nuggets', sub: 'Crispy potato pockets filled with molten cheese' },
          { name: 'Veg Pizza Pockets', sub: 'Italian seasoned veg & cheese stuffed pockets' },
          { name: 'Babycorn Skewers', sub: 'Char-grilled spiced babycorn skewers' },
          { name: 'Chicken Tenders', sub: 'Golden crispy fried tenders with dip' },
          { name: 'Chicken On Toast', sub: 'Seasoned minced chicken on crispy toast' },
          { name: 'Chicken Nuggets', sub: 'Classic golden crispy chicken bites' },
        ],
      },
    ],
  },
  {
    id: 'tacos-wraps',
    categoryName: 'Tacos, Wraps & Sandwiches',
    tagline: 'Hand-Rolled Wraps & Skyscraper Sandwiches',
    image: sandwichWrap,
    subsections: [
      {
        title: 'TACOS',
        items: [
          { name: 'Zesty veg Tacos', sub: 'Crispy tortilla shell with fresh salsa & beans' },
          { name: 'Spicy Chicken Tacos', sub: 'Char-grilled spicy chicken with chipotle mayo' },
        ],
      },
      {
        title: 'WRAPS',
        items: [
          { name: 'Graden Grove Wrap', sub: 'Fresh crunchy seasonal veggies & garden herb dressing' },
          { name: 'Regular Chicken Wrap', sub: 'Juicy chicken breast with crisp romaine lettuce' },
          { name: 'Special Chicken Wrap', sub: 'Chef signature spiced chicken & garlic sauce' },
        ],
      },
      {
        title: 'SANDWICHES',
        items: [
          { name: 'The Garden Skyscraper', sub: 'Multi-layer gourmet veg club sandwich' },
          { name: '"S-Class" Molten Melt', sub: 'Triple cheese blend toasted to perfection' },
          { name: 'The Triple - Decker', sub: 'Loaded triple decker toasted sandwich' },
        ],
      },
    ],
  },
  {
    id: 'burgers',
    categoryName: 'Burgers & Meals',
    tagline: 'Gourmet Smashes & Complete Combo Pairings',
    image: burgerPlate,
    subsections: [
      {
        title: 'BURGERS',
        items: [
          { name: 'Double Down Veggie', sub: 'Double veg patty with melted cheddar cheese' },
          { name: 'Triple Threat Sliders', sub: 'Trio of gourmet mini smash burgers' },
          { name: 'Peri Peri Zingers', sub: 'Spicy crispy chicken with peri peri glaze' },
          { name: 'The "Loaded" Legend', sub: 'Double chicken, bacon, cheese & signature sauce' },
        ],
      },
      {
        title: 'COMBO MEALS',
        items: [
          {
            name: 'The Green Plate',
            sub: 'Garden Skyscraper + Potato Cheese Nuggets + Cucumber Basil Smash',
          },
          {
            name: 'Garden To Table',
            sub: 'Veg Tacos + Babycorn Skewers + Blue Hawaiin',
          },
          {
            name: 'The Crunch & Wrap',
            sub: 'Chicken Nuggets + Regular Chicken Wrap + Shirley Temple',
          },
          {
            name: 'Crispy & Tropical',
            sub: 'Chicken Tenders + Peri Peri Zinger Burger + PassionFruit Mojito',
          },
        ],
      },
    ],
  },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState('coffee');

  const currentCategory = MINIMAL_MENU_DATA.find((c) => c.id === activeTab) || MINIMAL_MENU_DATA[0];

  return (
    <section className="minimal-menu-section" id="menu">
      <div className="container">
        <ScrollReveal animation="fadeInUp">
          <div className="minimal-menu-header">
            <span className="minimal-menu-label">Our Offerings</span>
            <h2 className="minimal-menu-title">Menu</h2>
          </div>
        </ScrollReveal>

        {/* Minimal Category Tabs */}
        <ScrollReveal animation="fadeInUp" delay={0.1}>
          <div className="minimal-tabs">
            {MINIMAL_MENU_DATA.map((cat) => (
              <button
                key={cat.id}
                className={`minimal-tab-btn ${activeTab === cat.id ? 'minimal-tab-btn--active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >
                {cat.categoryName}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Minimal High-Density Text Listing Grid with Category Thumbnail */}
        <div className="minimal-menu-content" key={activeTab}>
          <div className="minimal-menu-split">
            {/* Category Image Side */}
            <div className="minimal-category-img-wrap">
              <img src={currentCategory.image} alt={currentCategory.categoryName} className="minimal-category-img" />
              <div className="minimal-category-img-overlay" />
              <span className="minimal-category-img-badge">{currentCategory.categoryName}</span>
            </div>

            {/* List Side */}
            <div className="minimal-menu-list-side">
              <div className="minimal-category-tagline-wrap">
                <span className="minimal-category-tagline">{currentCategory.tagline}</span>
              </div>

              <div className="minimal-subsections-wrap">
                {currentCategory.subsections.map((subsec, sIdx) => (
                  <div key={sIdx} className="minimal-subsection">
                    <h4 className="minimal-subsection-title">{subsec.title}</h4>
                    <div className="minimal-items-grid">
                      {subsec.items.map((item, idx) => (
                        <div key={idx} className={`minimal-item-row ${item.highlight ? 'minimal-item-row--highlight' : ''}`}>
                          <div className="minimal-item-name-wrap">
                            <span className="minimal-item-name">{item.name}</span>
                            {item.highlight && <span className="minimal-item-badge">{item.highlight}</span>}
                          </div>
                          {item.sub && <div className="minimal-item-sub">{item.sub}</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
