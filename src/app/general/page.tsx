import Checklist from '@/components/Checklist';

export default function GeneralPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">General Information & Cultural Tips</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dressing for Canadian Weather</h2>
                <p className="text-gray-600 mb-4">
                    Canada gets very cold in the winter. It's important to dress in layers.
                </p>
                <Checklist items={[
                    "Base layer: Thermal underwear to keep dry.",
                    "Middle layer: Fleece or wool sweater for warmth.",
                    "Outer layer: Windproof and waterproof winter jacket.",
                    "Accessories: Toque (hat), scarf, mittens (warmer than gloves), and waterproof boots."
                ]} />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Understanding Directions</h2>
                <p className="text-gray-600 mb-4">
                    Canadians often use compass points (North, South, East, West) and major landmarks or streets to give directions, rather than just left or right.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li><strong>North:</strong> Usually "up" on a map or towards the mountains/lake depending on the city.</li>
                    <li><strong>South:</strong> Usually "down" or towards the US border.</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tipping Etiquette</h2>
                <p className="text-gray-600 mb-4">
                    Tipping is expected in service industries. It is not included in the bill.
                </p>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Standard Tip</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Restaurants</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15% - 20%</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Bars/Pubs</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$1 - $2 per drink or 15%</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Taxis/Rideshare</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10% - 15%</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Hairdressers</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15% - 20%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Public Transit</h2>
                <p className="text-gray-600 mb-4">
                    Most cities have a bus system, and larger ones have subways or light rail (trains).
                </p>
                <Checklist items={[
                    "Fares: You usually need exact change, a ticket, or a reloadable card (like Presto in Ontario, Compass in BC).",
                    "Transfers: If you need to take more than one bus/train, ask for a transfer or use your card to avoid paying twice (usually valid for 90 mins).",
                    "Etiquette: Offer your seat to elderly, pregnant, or disabled passengers."
                ]} />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Driving Rules</h2>
                <p className="text-gray-600 mb-4">
                    Driving laws are provincial, but some rules apply everywhere.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <div className="flex">
                        <div className="ml-3">
                            <p className="text-sm text-yellow-700">
                                <strong>Winter Tires:</strong> Essential for safety. Mandatory in <strong>Quebec</strong> (Dec 1 - Mar 15) and on some highways in <strong>BC</strong> (Oct 1 - Mar 31).
                            </p>
                        </div>
                    </div>
                </div>
                <Checklist items={[
                    "Drive on the right side of the road.",
                    "Speed limits are in km/h.",
                    "Seatbelts are mandatory for all passengers.",
                    "Distracted driving (texting/calling) is illegal."
                ]} />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Daylight Savings Time</h2>
                <p className="text-gray-600">
                    We change our clocks twice a year to make better use of daylight.
                </p>
                <ul className="list-disc pl-5 text-gray-600 mt-2">
                    <li><strong>Spring Forward:</strong> Clocks go ahead 1 hour in March (lose 1 hour of sleep).</li>
                    <li><strong>Fall Back:</strong> Clocks go back 1 hour in November (gain 1 hour of sleep).</li>
                </ul>
            </section>
        </div>
    );
}
