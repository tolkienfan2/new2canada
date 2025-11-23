import Checklist from '@/components/Checklist';

export default function VisitorsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Information for Visitors</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Travel Insurance & Health</h2>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                    <div className="flex">
                        <div className="ml-3">
                            <p className="text-sm text-red-700">
                                <strong>Important:</strong> Canada's free healthcare does NOT cover visitors. A hospital visit can cost thousands of dollars.
                            </p>
                        </div>
                    </div>
                </div>
                <p className="text-gray-600 mb-4">
                    You should buy travel health insurance before you arrive.
                </p>
                <Checklist items={[
                    "Ensure your policy covers emergency hospital visits.",
                    "Keep your insurance policy number and emergency contact with you.",
                    "In an emergency (life-threatening), dial 9-1-1."
                ]} />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Visa Extensions</h2>
                <p className="text-gray-600 mb-4">
                    If you want to stay longer than authorized, you must apply to extend your stay.
                </p>
                <Checklist items={[
                    "Apply at least 30 days before your current status expires.",
                    "You can apply online through the IRCC website.",
                    "If your status expires while you are waiting for a decision, you have 'implied status' and can stay until a decision is made."
                ]} />
                <p className="mt-4">
                    <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/extend-stay.html" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 font-medium">
                        Official Guide to Extending Your Stay &rarr;
                    </a>
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Currency & Money</h2>
                <p className="text-gray-600 mb-4">
                    Canada uses the Canadian Dollar (CAD).
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li><strong>Cash:</strong> Bills are polymer (plastic feel) and colorful. Coins include the Loonie ($1) and Toonie ($2).</li>
                    <li><strong>Cards:</strong> Credit cards (Visa, Mastercard) and Debit cards are widely accepted everywhere.</li>
                    <li><strong>Exchange:</strong> Best rates are usually at banks or ATMs, rather than airport kiosks.</li>
                </ul>
            </section>
        </div>
    );
}
