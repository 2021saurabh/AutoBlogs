// app/cars/[slug]/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavOffset from '@/components/NavOffset';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface CarSpecs {
  price: string;
  exShowroomPrice: string;
  launchDate: string;
  bodyType: string;
  transmission: string;
  fuelType: string;
  seatingCapacity: number;
  topSpeed: string;
  torque: string;
  acceleration: string;
  range: string;
  warranty: string;
}

interface KeySpec {
  label: string;
  value: string;
}

interface DimensionsCapacity {
  length: string;
  width: string;
  height: string;
  wheelbase: string;
  groundClearance: string;
  bootSpace: string;
}

interface MechanicalPerformance {
  power: string;
  torque: string;
  acceleration: string;
  topSpeed: string;
  battery: string;
  charging: string;
}

interface SafetyFeature {
  name: string;
}

interface Feature {
  name: string;
}

interface Variant {
  name: string;
  price: string;
}

interface CarData {
  name: string;
  tagline: string;
  image: string;
  specs: CarSpecs;
  keySpecs: KeySpec[];
  availability: string;
  rating: number;
  dimensionsCapacity: DimensionsCapacity;
  mechanicalPerformance: MechanicalPerformance;
  safetyFeatures: SafetyFeature[];
  features: Feature[];
  variants: Variant[];
}

// Mock data - Replace with API/CMS
const CARS_DATA: Record<string, CarData> = {
  'tata-curvv-ev': {
    name: 'TATA CURVV EV',
    tagline: 'Dazzling Electric SUV with Versatility',
    image: '/images/tata-curvv.png',
    specs: {
      price: '₹14.99 - ₹21.99 Lakh',
      exShowroomPrice: 'Ex-showroom Delhi',
      launchDate: 'August 2025',
      bodyType: 'SUV Coupe',
      transmission: 'Single Speed Automatic',
      fuelType: 'Electric',
      seatingCapacity: 5,
      topSpeed: '180 km/h',
      torque: '420 Nm',
      acceleration: 'N/A',
      range: '450 km',
      warranty: '8 years or 1.6 lakh km (battery)'
    },
    keySpecs: [
      { label: 'Top Speed', value: '180 km/h' },
      { label: 'Torque', value: '420 Nm' },
      { label: 'Acceleration', value: 'N/A' },
      { label: 'Battery', value: '50 kWh' },
      { label: 'Warranty', value: '8 years / 1.6L km' },
      { label: 'Boot Space', value: '500 L' }
    ],
    availability: 'August 2025',
    rating: 4.5,
    dimensionsCapacity: {
      length: '4500 mm',
      width: '1840 mm',
      height: '1625 mm',
      wheelbase: '2700 mm',
      groundClearance: '180 mm',
      bootSpace: '500 L'
    },
    mechanicalPerformance: {
      power: '150 kW (201 bhp)',
      torque: '420 Nm',
      acceleration: '0-100 km/h: 6.9 s',
      topSpeed: '180 km/h',
      battery: '75 kWh (55 kWh base)',
      charging: '60 min (10-80% fast charging)'
    },
    safetyFeatures: [
      { name: 'ABS with EBD: Yes' },
      { name: 'ESP / Traction Control: Yes' },
      { name: 'Airbags: 6' },
      { name: 'ADAS: Level 2 (if equipped)' }
    ],
    features: [
      { name: '10.25" touchscreen' },
      { name: '6 Airbags' },
      { name: 'Panoramic Sunroof' },
      { name: 'ADAS Level 2' },
      { name: 'Wireless Android Auto/Apple CarPlay' }
    ],
    variants: [
      { name: 'SF', price: '₹14.99 L' },
      { name: 'LM', price: '₹17.49 L' },
      { name: 'XC', price: '₹21.99 L' }
    ]
  },
  'mahindra-thar-5-door': {
    name: 'MAHINDRA THAR 5 DOOR',
    tagline: 'Adventure Redefined with Extra Space',
    image: '/images/thar-5door.png',
    specs: {
      price: '₹15.49 - ₹22.49 Lakh',
      exShowroomPrice: 'Ex-showroom Delhi',
      launchDate: 'September 2025',
      bodyType: 'SUV',
      transmission: 'Manual / Automatic',
      fuelType: 'Petrol / Diesel',
      seatingCapacity: 7,
      topSpeed: '155 km/h',
      torque: '370 Nm',
      acceleration: '10.5 s (0-100)',
      range: 'N/A',
      warranty: '3 years / 1 lakh km'
    },
    keySpecs: [
      { label: 'Top Speed', value: '155 km/h' },
      { label: 'Torque', value: '370 Nm' },
      { label: 'Acceleration', value: '10.5 s' },
      { label: 'Engine', value: '2.2L Diesel' },
      { label: 'Seating', value: '7 Seats' },
      { label: '4x4', value: 'Available' }
    ],
    availability: 'September 2025',
    rating: 4.7,
    dimensionsCapacity: {
      length: '4500 mm',
      width: '1820 mm',
      height: '1850 mm',
      wheelbase: '2750 mm',
      groundClearance: '226 mm',
      bootSpace: '380 L'
    },
    mechanicalPerformance: {
      power: '130 bhp / 152 bhp',
      torque: '300 Nm / 370 Nm',
      acceleration: '0-100 km/h: 10.5 s',
      topSpeed: '155 km/h',
      battery: 'N/A',
      charging: 'N/A'
    },
    safetyFeatures: [
      { name: 'ABS with EBD: Yes' },
      { name: 'ESP / Traction Control: Yes' },
      { name: 'Airbags: 6' },
      { name: 'Hill Hold & Descent Control' }
    ],
    features: [
      { name: '10.25" Touchscreen' },
      { name: '6 Airbags' },
      { name: 'Sunroof' },
      { name: '4x4 System' },
      { name: 'Wireless Charging' }
    ],
    variants: [
      { name: 'AX3', price: '₹15.49 L' },
      { name: 'AX5', price: '₹18.99 L' },
      { name: 'AX7', price: '₹22.49 L' }
    ]
  }
};

const getCarData = (slug: string): CarData | null => {
  return CARS_DATA[slug] || null;
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const car = getCarData(params.slug);
  
  if (!car) {
    return {
      title: 'Car Not Found — Motormiles',
      description: 'The requested car could not be found.',
    };
  }

  return {
    title: `${car.name} - Specs, Price & Features — Motormiles`,
    description: `${car.tagline}. ${car.specs.price}. Check full specifications, features, variants and pricing.`,
  };
}

export default function CarDetailPage({ params }: { params: { slug: string } }) {
  const car = getCarData(params.slug);

  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <NavOffset />

      <main className="pb-12">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8">
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {/* Left: Car Info & Image */}
            <div>
              <h1 className="text-2xl md:text-4xl font-bold mb-1">{car.name}</h1>
              <p className="text-gray-400 text-xs md:text-sm mb-4">{car.tagline}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">{car.specs.bodyType}</span>
                <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">{car.specs.fuelType}</span>
              </div>

              {/* Car Image */}
              <div className="relative w-full aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden mb-4">
                <Image
                  src="/images/altroz.jpeg"
                  alt={car.name}
                  fill
                  className="object-contain p-3"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-gray-900 rounded-lg p-2 text-center">
                  <p className="text-xs text-gray-400">0-60</p>
                  <p className="text-sm font-bold">4.8s</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-2 text-center">
                  <p className="text-xs text-gray-400">Power</p>
                  <p className="text-sm font-bold">220kW</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-2 text-center">
                  <p className="text-xs text-gray-400">Range</p>
                  <p className="text-sm font-bold">{car.specs.range}</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-2 text-center">
                  <p className="text-xs text-gray-400">Speed</p>
                  <p className="text-sm font-bold">{car.specs.topSpeed}</p>
                </div>
              </div>
            </div>

            {/* Right: Key Specifications */}
            <div className="bg-gray-900 rounded-xl p-4">
              <h2 className="text-lg font-bold mb-4">KEY SPECIFICATIONS</h2>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Price Range</span>
                  <span className="font-semibold text-sm">{car.specs.price}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Transmission</span>
                  <span className="font-semibold text-sm">{car.specs.transmission}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Top Speed</span>
                  <span className="font-semibold text-sm">{car.specs.topSpeed}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Torque</span>
                  <span className="font-semibold text-sm">{car.specs.torque}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Seating</span>
                  <span className="font-semibold text-sm">{car.specs.seatingCapacity} Seats</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-400 text-sm">Rating</span>
                  <span className="font-semibold text-sm">{'★'.repeat(Math.floor(car.rating))} ({car.rating})</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-bold text-gray-400 uppercase mb-2">Availability</h3>
                <button className="w-full py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-semibold transition">
                  {car.availability}
                </button>
                <button className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-semibold transition">
                  Get EMI
                </button>
                <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold transition">
                  Compare
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Full Specifications */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">FULL SPECIFICATIONS</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Dimensions & Capacity */}
            <div className="bg-gray-900 rounded-xl p-4">
              <h3 className="text-base font-bold mb-3">Dimensions & Capacity</h3>
              <div className="space-y-2">
                {Object.entries(car.dimensionsCapacity).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-1.5 border-b border-gray-800">
                    <span className="text-gray-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="font-semibold text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mechanical & Performance */}
            <div className="bg-gray-900 rounded-xl p-4">
              <h3 className="text-base font-bold mb-3">Mechanical & Performance</h3>
              <div className="space-y-2">
                {Object.entries(car.mechanicalPerformance).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-1.5 border-b border-gray-800">
                    <span className="text-gray-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="font-semibold text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Safety & Driver Assistance */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">SAFETY & DRIVER ASSISTANCE</h2>
          
          <div className="bg-gray-900 rounded-xl p-4">
            <div className="grid sm:grid-cols-2 gap-2">
              {car.safetyFeatures.map((feature, idx) => (
                <div key={idx} className="bg-gray-800 rounded-lg p-3">
                  <p className="text-xs">{feature.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-4 md:px-6 mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-4">FEATURES</h2>
          
          <div className="bg-gray-900 rounded-xl p-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {car.features.map((feature, idx) => (
                <div key={idx} className="bg-gray-800 rounded-lg p-3">
                  <p className="text-xs">{feature.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Variants & Prices */}
        <section className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-xl md:text-2xl font-bold mb-4">VARIANTS & PRICES</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {car.variants.map((variant, idx) => (
              <div key={idx} className="bg-gray-900 rounded-xl p-4 text-center hover:bg-gray-800 transition cursor-pointer">
                <h3 className="text-base font-bold mb-1">{variant.name}</h3>
                <p className="text-xl font-bold text-blue-500">{variant.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}