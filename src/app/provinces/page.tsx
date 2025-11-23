import Link from 'next/link';

const provinces = [
    { name: 'Alberta', slug: 'alberta', code: 'AB' },
    { name: 'British Columbia', slug: 'british-columbia', code: 'BC' },
    { name: 'Manitoba', slug: 'manitoba', code: 'MB' },
    { name: 'New Brunswick', slug: 'new-brunswick', code: 'NB' },
    { name: 'Newfoundland and Labrador', slug: 'newfoundland-and-labrador', code: 'NL' },
    { name: 'Northwest Territories', slug: 'northwest-territories', code: 'NT' },
    { name: 'Nova Scotia', slug: 'nova-scotia', code: 'NS' },
    { name: 'Nunavut', slug: 'nunavut', code: 'NU' },
    { name: 'Ontario', slug: 'ontario', code: 'ON' },
    { name: 'Prince Edward Island', slug: 'prince-edward-island', code: 'PEI' },
    { name: 'Quebec', slug: 'quebec', code: 'QC' },
    { name: 'Saskatchewan', slug: 'saskatchewan', code: 'SK' },
    { name: 'Yukon', slug: 'yukon', code: 'YT' },
];

export default function ProvincesIndex() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Select Your Province or Territory</h1>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Find specific information about healthcare, driving, and settlement for your province or territory.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {provinces.map((province) => (
                    <Link
                        key={province.slug}
                        href={`/provinces/${province.slug}`}
                        className="block p-4 text-center bg-white rounded-lg shadow hover:shadow-md hover:border-[var(--color-canadian-red)] border-2 border-gray-200 transition-all"
                    >
                        <span className="text-sm font-medium text-gray-900 group-hover:text-[var(--color-canadian-red)]">
                            {province.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
