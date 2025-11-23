// Provincial data mapping
const provincialData: Record<string, { code: string; name: string; health: string; winterTires: string }> = {
    'ontario': { code: 'ON', name: 'Ontario', health: 'None (Immediate eligibility upon arrival/application)', winterTires: 'Not Mandatory (Recommended; Insurance discount available)' },
    'quebec': { code: 'QC', name: 'Quebec', health: 'Up to 3 months', winterTires: 'Mandatory (Dec 1 to Mar 15)' },
    'british-columbia': { code: 'BC', name: 'British Columbia', health: 'Balance of month + 2 months (up to 3 months)', winterTires: 'Mandatory on specific highways (Oct 1 to Apr 30)' },
    'alberta': { code: 'AB', name: 'Alberta', health: 'None (Immediate eligibility upon application)', winterTires: 'Not Mandatory (Required only in National Parks like Banff/Jasper, Nov 1-Mar 31)' },
    'manitoba': { code: 'MB', name: 'Manitoba', health: '3 months', winterTires: 'Not Mandatory (Financing program available)' },
    'saskatchewan': { code: 'SK', name: 'Saskatchewan', health: '3 months', winterTires: 'Not Mandatory' },
    'nova-scotia': { code: 'NS', name: 'Nova Scotia', health: 'Up to 3 months', winterTires: 'Not Mandatory' },
    'new-brunswick': { code: 'NB', name: 'New Brunswick', health: 'Up to 3 months', winterTires: 'Not Mandatory' },
    'newfoundland-and-labrador': { code: 'NL', name: 'Newfoundland & Labrador', health: 'None (Immediate eligibility upon arrival/application)', winterTires: 'Mandatory (when snow/ice is on the road; Studded allowed Nov 1-May 31)' },
    'prince-edward-island': { code: 'PEI', name: 'Prince Edward Island', health: '3 months', winterTires: 'Not Mandatory' },
    'yukon': { code: 'YT', name: 'Yukon', health: '3 months', winterTires: 'Not Mandatory (Essential due to conditions)' },
    'northwest-territories': { code: 'NT', name: 'Northwest Territories', health: 'None (Immediate eligibility upon application)', winterTires: 'Not Mandatory (Essential due to conditions)' },
    'nunavut': { code: 'NU', name: 'Nunavut', health: 'None (Immediate eligibility upon application)', winterTires: 'Not Mandatory (Essential due to conditions)' },
};

export default async function ProvincePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = provincialData[slug];

    if (!data) {
        return (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-bold text-gray-900">Province Not Found</h1>
                <p className="mt-4 text-gray-600">The province you're looking for doesn't exist.</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="border-b-4 border-[var(--color-canadian-red)] pb-5 mb-8">
                <h1 className="text-4xl font-bold text-[var(--color-text-primary)]">
                    {data.name} <span className="text-2xl text-gray-500">({data.code})</span>
                </h1>
                <p className="mt-2 text-xl text-gray-600">Essential information for settling in {data.name}</p>
            </div>

            {/* Healthcare Section */}
            <section className="mb-12 bg-white rounded-xl border-2 border-gray-200 p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 flex items-center">
                    <svg className="w-8 h-8 mr-3 text-[var(--color-canadian-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Healthcare Coverage
                </h2>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Wait Period for Immigrants:</p>
                    <p className="text-lg text-gray-900">{data.health}</p>
                </div>
                {data.health.includes('3 months') || data.health.includes('Up to 3 months') ? (
                    <div className="bg-red-50 border-l-4 border-[var(--color-canadian-red)] p-4 rounded">
                        <p className="text-sm text-gray-900">
                            <strong>Important:</strong> Purchase private health insurance to cover the waiting period.
                        </p>
                    </div>
                ) : (
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                        <p className="text-sm text-gray-900">
                            <strong>Good news:</strong> You can access healthcare coverage immediately upon arrival/application.
                        </p>
                    </div>
                )}
            </section>

            {/* Winter Tires Section */}
            <section className="mb-12 bg-white rounded-xl border-2 border-gray-200 p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 flex items-center">
                    <svg className="w-8 h-8 mr-3 text-[var(--color-canadian-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Winter Tire Laws
                </h2>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Legal Requirement:</p>
                    <p className="text-lg text-gray-900">{data.winterTires}</p>
                </div>
                {data.winterTires.startsWith('Mandatory') ? (
                    <div className="bg-red-50 border-l-4 border-[var(--color-canadian-red)] p-4 rounded">
                        <p className="text-sm text-gray-900">
                            <strong>Legal Requirement:</strong> Winter tires are mandatory in {data.name}. Ensure compliance to avoid fines.
                        </p>
                    </div>
                ) : (
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <p className="text-sm text-gray-900">
                            <strong>Recommended:</strong> While not mandatory, winter tires are highly recommended for safety.
                            Switch when temperature drops below 7°C (44°F). Check for insurance discounts.
                        </p>
                    </div>
                )}
            </section>

            {/* Driver's License Section */}
            <section className="mb-12 bg-white rounded-xl border-2 border-gray-200 p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4 flex items-center">
                    <svg className="w-8 h-8 mr-3 text-[var(--color-canadian-red)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    Driver's License
                </h2>
                <p className="text-gray-700 mb-4">
                    You must exchange your foreign license or complete a Canadian driving course/test based on {data.name}'s specific requirements.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="text-sm text-gray-900">
                        <strong>Action Required:</strong> Contact your provincial licensing authority immediately to understand the requirements for your situation.
                    </p>
                </div>
            </section>

            {/* Quebec Special Note */}
            {slug === 'quebec' && (
                <section className="mb-12 bg-blue-50 rounded-xl border-2 border-blue-300 p-6">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Special Note: Language Laws</h2>
                    <p className="text-blue-800">
                        Quebec has specific laws regarding the French language (Bill 101). Most public services and workplaces operate in French.
                        Consider taking French language courses to integrate more easily.
                    </p>
                </section>
            )}
        </div>
    );
}
