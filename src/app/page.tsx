import Link from 'next/link';
import SectionCard from '@/components/SectionCard';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="relative w-full h-64 sm:h-80 lg:h-96 mb-8 rounded-xl overflow-hidden shadow-xl">
          {/* Placeholder for the generated image. In a real app, use Next.js Image component */}
          <img
            src="/canadian_flag_hero.png"
            alt="Canadian Flag"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl drop-shadow-md">
              Welcome to Canada
            </h1>
          </div>
        </div>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
          Your simple, reliable guide to settling in Canada. Information sourced directly from official government websites.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <SectionCard
          title="I am a Visitor"
          description="For tourists and temporary visitors: insurance, visas, and currency."
          href="/visitors"
        />
        <SectionCard
          title="I am a new Canadian"
          description="For permanent residents and refugees: SIN, health, housing, and jobs."
          href="/immigrants"
        />
        <SectionCard
          title="General Info"
          description="Essential tips for everyone: weather, transit, tipping, and more."
          href="/general"
        />
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Select Your Province or Territory</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <Link href="/provinces/alberta" className="block p-4 text-center bg-white rounded-lg shadow hover:shadow-md hover:border-[var(--color-canadian-red)] border-2 border-gray-200 transition-all">
            <span className="text-sm font-medium text-gray-900">Alberta</span>
          </Link>
          <Link href="/provinces/british-columbia" className="block p-4 text-center bg-white rounded-lg shadow hover:shadow-md hover:border-[var(--color-canadian-red)] border-2 border-gray-200 transition-all">
            <span className="text-sm font-medium text-gray-900">British Columbia</span>
          </Link>
          <Link href="/provinces/manitoba" className="block p-4 text-center bg-white rounded-lg shadow hover:shadow-md hover:border-[var(--color-canadian-red)] border-2 border-gray-200 transition-all">
            <span className="text-sm font-medium text-gray-900">Manitoba</span>
          </Link>
          <Link href="/provinces/new-brunswick" className="block p-4 text-center bg-white rounded-lg shadow hover:shadow-md hover:border-[var(--color-canadian-red)] border-2 border-gray-200 transition-all">
            <span className="text-sm font-medium text-gray-900">New Brunswick</span>
          </Link>
          <Link href="/provinces/newfoundland-and-labrador" className="block p-4 text-center bg-white rounded-lg shadow hover:shadow-md hover:border-[var(--color-canadian-red)] border-2 border-gray-200 transition-all">
            <span className="text-sm font-medium text-gray-900">Newfoundland and Labrador</span>
          </Link>
          <Link href="/provinces/nova-scotia" className="block p-4 text-center bg-white rounded-lg shadow hover:shadow-md hover:border-[var(--color-canadian-red)] border-2 border-gray-200 transition-all">
            <span className="text-sm font-medium text-gray-900">Nova Scotia</span>
          </Link>
          <Link href="/provinces/ontario" className="block p-4 text-center bg-white rounded-lg shadow hover:shadow-md hover:border-[var(--color-canadian-red)] border-2 border-gray-200 transition-all">
            <span className="text-sm font-medium text-gray-900">Ontario</span>
          </Link>
          <Link href="/provinces/prince-edward-island" className="block p-4 text-center bg-white rounded-lg shadow hover:shadow-md hover:border-[var(--color-canadian-red)] border-2 border-gray-200 transition-all">
            <span className="text-sm font-medium text-gray-900">Prince Edward Island</span>
          </Link>
          <Link href="/provinces/quebec" className="block p-4 text-center bg-white rounded-lg shadow hover:shadow-md hover:border-[var(--color-canadian-red)] border-2 border-gray-200 transition-all">
            <span className="text-sm font-medium text-gray-900">Quebec</span>
          </Link>
          <Link href="/provinces/saskatchewan" className="block p-4 text-center bg-white rounded-lg shadow hover:shadow-md hover:border-[var(--color-canadian-red)] border-2 border-gray-200 transition-all">
            <span className="text-sm font-medium text-gray-900">Saskatchewan</span>
          </Link>
          <Link href="/provinces/northwest-territories" className="block p-4 text-center bg-white rounded-lg shadow hover:shadow-md hover:border-[var(--color-canadian-red)] border-2 border-gray-200 transition-all">
            <span className="text-sm font-medium text-gray-900">Northwest Territories</span>
          </Link>
          <Link href="/provinces/nunavut" className="block p-4 text-center bg-white rounded-lg shadow hover:shadow-md hover:border-[var(--color-canadian-red)] border-2 border-gray-200 transition-all">
            <span className="text-sm font-medium text-gray-900">Nunavut</span>
          </Link>
          <Link href="/provinces/yukon" className="block p-4 text-center bg-white rounded-lg shadow hover:shadow-md hover:border-[var(--color-canadian-red)] border-2 border-gray-200 transition-all">
            <span className="text-sm font-medium text-gray-900">Yukon</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
