// app/reviews/[slug]/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NavOffset from '@/components/NavOffset';
import ReviewHero from '@/components/review/ReviewHero';
import ReviewSpecs from '@/components/review/ReviewSpecs';
import ReviewContent from '@/components/review/ReviewContent';
import RelatedReviews from '@/components/review/RelatedReviews';

// Mock data - replace with API fetch later
const getReviewData = (slug: string) => {
  const reviews: Record<string, any> = {
    'ferrari-12-cilindre': {
      title: 'Ferrari 12 Cilindre',
      subtitle: 'The V12 Swan Song',
      heroImage: '/images/ferrari-12-cilindre.jpeg',
      rating: 9.5,
      date: 'January 15, 2025',
      author: 'Editor Team',
      readTime: '12 min read',
      category: 'Performance',
      specs: {
        engine: '6.5L V12',
        power: '819 HP',
        torque: '678 Nm',
        transmission: '8-Speed DCT',
        topSpeed: '340 km/h',
        acceleration: '2.9s (0-100 km/h)',
        price: '₹5.2 Cr (est.)',
      },
      content: [
        {
          type: 'text',
          text: "Ferrari's 12Cilindre represents the end of an era—the final naturally aspirated V12 grand tourer from Maranello. We took this masterpiece to the mountains to discover if it truly deserves the swan song title."
        },
        {
          type: 'heading',
          text: 'Design Philosophy'
        },
        {
          type: 'text',
          text: "The 12Cilindre's design is a departure from the aggressive styling of modern supercars. Instead, Ferrari has embraced elegant proportions and flowing lines that echo the grand tourers of the 1960s. The long hood, short rear deck, and muscular haunches create a silhouette that's instantly recognizable as a Ferrari, yet distinctly different from anything in the current lineup."
        },
        {
          type: 'image',
          src: '/images/ferrari-12-cilindre.jpeg',
          caption: 'The 12Cilindre features elegant proportions inspired by classic grand tourers'
        },
        {
          type: 'heading',
          text: 'The Heart of the Matter'
        },
        {
          type: 'text',
          text: "At the core of this machine beats a 6.5-liter naturally aspirated V12 that redlines at 9,500 rpm. The engine produces 819 horsepower and 678 Nm of torque, making it the most powerful naturally aspirated V12 Ferrari has ever built. But numbers don't tell the whole story—it's the delivery, the soundtrack, and the experience that make this powertrain special."
        },
        {
          type: 'text',
          text: "Floor the throttle and the 12Cilindre launches with ferocity that pins you to the seat. The 8-speed dual-clutch transmission snaps through gears with millisecond precision, while the V12 wails its way to the stratosphere. It's an intoxicating experience that no turbocharged engine can replicate."
        },
        {
          type: 'heading',
          text: 'On the Road'
        },
        {
          type: 'text',
          text: "Despite its supercar performance, the 12Cilindre is remarkably docile in everyday driving. The suspension, while firm, absorbs most road imperfections with grace. The steering is beautifully weighted, providing constant feedback without being heavy. In Comfort mode, you could genuinely use this as a daily driver—assuming you can afford the running costs."
        },
        {
          type: 'text',
          text: "Switch to Sport or ESC Off, and the 12Cilindre transforms into a track weapon. The chassis balance is sublime, allowing you to explore the limits with confidence. The rear-wheel steering makes the car feel nimble despite its size, while the carbon-ceramic brakes provide stopping power that borders on the supernatural."
        },
        {
          type: 'heading',
          text: 'Interior Luxury'
        },
        {
          type: 'text',
          text: "Inside, Ferrari has created a driver-focused cockpit that blends modern technology with traditional craftsmanship. The digital instrument cluster is customizable, the steering wheel houses all essential controls, and the infotainment system is intuitive. Materials throughout are top-notch—leather, Alcantara, and carbon fiber combine to create an environment that feels both luxurious and purposeful."
        },
        {
          type: 'heading',
          text: 'The Verdict'
        },
        {
          type: 'text',
          text: "The Ferrari 12Cilindre is more than just a car—it's a statement, a celebration of internal combustion in its purest form. In an era of forced induction and electrification, this naturally aspirated V12 feels like a defiant middle finger to progress. And we love it for that."
        },
        {
          type: 'text',
          text: "Is it the best grand tourer Ferrari has ever built? That's subjective. But it's certainly the most emotional, the most engaging, and likely the last of its kind. For enthusiasts who appreciate the romance of a high-revving V12, the 12Cilindre represents the end of an era—and what a way to go out."
        }
      ]
    },
    'lotus-emira-r': {
      title: 'Lotus Emira R',
      subtitle: 'The Last Petrol Lotus',
      heroImage: '/images/lotus-emira-r.jpeg',
      rating: 8.8,
      date: 'January 10, 2025',
      author: 'Editor Team',
      readTime: '10 min read',
      category: 'Performance',
      specs: {
        engine: '2.0L Turbo I4',
        power: '400 HP',
        torque: '420 Nm',
        transmission: '6-Speed Manual',
        topSpeed: '290 km/h',
        acceleration: '4.2s (0-100 km/h)',
        price: '₹85 Lakh (est.)',
      },
      content: [
        {
          type: 'text',
          text: "The Lotus Emira R marks the end of an era for the British brand—it's the last petrol-powered Lotus before they go fully electric. We spent a week with this modern masterpiece to see if it lives up to the legendary Lotus handling."
        },
        {
          type: 'heading',
          text: 'Pure Driving Focus'
        },
        {
          type: 'text',
          text: "From the moment you slip into the driver's seat, it's clear the Emira R is all about the driving experience. The steering wheel feels perfectly sized, the pedals are ideally placed for heel-toe downshifts, and the seating position puts you in complete control."
        }
      ]
    }
  };

  return reviews[slug] || reviews['ferrari-12-cilindre'];
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const review = getReviewData(params.slug);
  return {
    title: `${review.title} Review — Motormiles`,
    description: review.subtitle,
  };
}

export default function ReviewDetailPage({ params }: { params: { slug: string } }) {
  const review = getReviewData(params.slug);

  // Related reviews - mock data
  const relatedReviews = [
    { title: 'Lotus Emira R', image: '/images/lotus-emira-r.jpeg', slug: 'lotus-emira-r' },
    { title: 'BMW M4 CS', image: '/images/bmw-m4.jpeg', slug: 'bmw-m4-cs' },
    { title: 'Cadillac Celestiq', image: '/images/cadillac-celestiq.jpeg', slug: 'cadillac-celestiq' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <NavOffset />

      <main>
        {/* Hero Section */}
        <ReviewHero 
          title={review.title}
          subtitle={review.subtitle}
          heroImage={review.heroImage}
          rating={review.rating}
          date={review.date}
          author={review.author}
          readTime={review.readTime}
          category={review.category}
        />

        {/* Main Content Area */}
        <div className="container mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Main Content (70%) */}
            <div className="lg:w-[70%]">
              <ReviewContent content={review.content} />
            </div>

            {/* Right: Specs Sidebar (30%) */}
            <div className="lg:w-[30%]">
              <ReviewSpecs specs={review.specs} />
            </div>
          </div>
        </div>

        {/* Related Reviews */}
        <div className="container mx-auto max-w-7xl px-6 pb-12">
          <RelatedReviews reviews={relatedReviews} />
        </div>
      </main>

      <Footer />
    </div>
  );
}








// // app/reviews/[slug]/page.tsx
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import NavOffset from '@/components/NavOffset';
// import Image from 'next/image';

// // Mock data - replace with API fetch later
// const getReviewData = (slug: string) => {
//   const reviews: Record<string, any> = {
//     'ferrari-12-cilindre': {
//       title: 'Ferrari 12 Cilindre',
//       mainImage: '/images/ferrari-12-cilindre.jpeg',
//       category: 'PERFORMANCE',
//       date: 'January 15, 2025',
//       specs: [
//         { label: 'WHY WE LIKE IT', value: 'Naturally aspirated V12, sublime handling, timeless design' },
//         { label: 'WHY WE DON\'T', value: 'Expensive running costs, limited practicality' },
//         { label: 'PRICE TAG', value: '₹5.2 Crore (est.)' },
//       ],
//       sections: [
//         {
//           heading: 'PROS AND PERFORMANCE PROFILE',
//           image: '/images/ferrari-12-cilindre.jpeg',
//           content: `Ferrari's 12Cilindre represents the end of an era—the final naturally aspirated V12 grand tourer from Maranello. At its core beats a 6.5-liter V12 that redlines at 9,500 rpm, producing 819 horsepower and 678 Nm of torque.

// The engine delivery is intoxicating. Floor the throttle and the 12Cilindre launches with ferocity that pins you to the seat. The 8-speed dual-clutch transmission snaps through gears with millisecond precision, while the V12 wails its way to the stratosphere.

// Despite its supercar performance, the 12Cilindre is remarkably docile in everyday driving. The suspension, while firm, absorbs most road imperfections with grace. The steering is beautifully weighted, providing constant feedback without being heavy.`
//         },
//         {
//           heading: 'INTERIOR LUXURY',
//           image: '/images/ferrari-12-cilindre.jpeg',
//           content: `Inside, Ferrari has created a driver-focused cockpit that blends modern technology with traditional craftsmanship. The digital instrument cluster is customizable, the steering wheel houses all essential controls, and the infotainment system is intuitive.

// Materials throughout are top-notch—leather, Alcantara, and carbon fiber combine to create an environment that feels both luxurious and purposeful. The seats provide excellent support during spirited driving while remaining comfortable for long journeys.`
//         },
//         {
//           heading: 'THE FINAL VERDICT',
//           content: `The Ferrari 12Cilindre is more than just a car—it's a statement, a celebration of internal combustion in its purest form. In an era of forced induction and electrification, this naturally aspirated V12 feels like a defiant middle finger to progress.

// Is it the best grand tourer Ferrari has ever built? That's subjective. But it's certainly the most emotional, the most engaging, and likely the last of its kind. For enthusiasts who appreciate the romance of a high-revving V12, the 12Cilindre represents the end of an era—and what a way to go out.`
//         }
//       ]
//     }
//   };

//   return reviews[slug] || reviews['ferrari-12-cilindre'];
// };

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const review = getReviewData(params.slug);
//   return {
//     title: `${review.title} Review — Motormiles`,
//     description: `In-depth review of the ${review.title}`,
//   };
// }

// export default function ReviewDetailPage({ params }: { params: { slug: string } }) {
//   const review = getReviewData(params.slug);

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navbar />
//       <NavOffset />

//       <main className="container mx-auto max-w-7xl px-6 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left Column - Main Content (65%) */}
//           <div className="lg:w-[65%]">
//             {/* Title */}
//             <div className="mb-6">
//               <div className="text-xs text-green-500 font-semibold mb-2 tracking-widest">
//                 {review.category}
//               </div>
//               <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
//                 {review.title.toLowerCase().split(' ').map((word: string) => 
//                   word.charAt(0).toUpperCase() + word.slice(1)
//                 ).join(' ')}
//               </h1>
//               <p className="text-sm text-gray-400">{review.date}</p>
//             </div>

//             {/* Main Image */}
//             <div className="relative h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden bg-gray-900">
//               <Image
//                 src={review.mainImage}
//                 alt={review.title}
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>

//             {/* Content Sections */}
//             <div className="space-y-8">
//               {review.sections.map((section: any, index: number) => (
//                 <div key={index}>
//                   <h2 className="text-sm font-bold text-white mb-4 tracking-wide">
//                     {section.heading}
//                   </h2>
                  
//                   {section.image && (
//                     <div className="relative h-[250px] md:h-[300px] mb-4 rounded-lg overflow-hidden bg-gray-900">
//                       <Image
//                         src={section.image}
//                         alt={section.heading}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   )}
                  
//                   <div className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
//                     {section.content}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Sidebar - Specs (35%) */}
//           <div className="lg:w-[35%]">
//             <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 lg:sticky lg:top-24">
//               {/* Placeholder for Ad/Image */}
//               <div className="bg-gray-800 h-48 rounded-lg mb-6 flex items-center justify-center text-gray-600 text-sm">
//                 Advertisement
//               </div>

//               {/* Specs */}
//               <div className="space-y-4">
//                 {review.specs.map((spec: any, index: number) => (
//                   <div key={index} className="border-b border-gray-800 pb-4 last:border-0">
//                     <p className="text-xs text-gray-500 font-semibold mb-2 tracking-wide">
//                       {spec.label}
//                     </p>
//                     <p className="text-sm text-white leading-relaxed">
//                       {spec.value}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }
