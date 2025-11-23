import Checklist from '@/components/Checklist';

export default function ImmigrantsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Settling in Canada (Immigrants & Refugees)</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">First Steps: Official IDs</h2>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Social Insurance Number (SIN)</h3>
                <p className="text-gray-600 mb-4">
                    You need a SIN to work in Canada and get benefits. It is free to apply.
                </p>
                <Checklist items={[
                    "Gather your papers: Primary ID (PR card or Confirmation of PR) and Secondary ID (Passport).",
                    "Apply in person at a Service Canada Centre (fastest - you get it same day).",
                    "Or apply online (takes about 10-20 days)."
                ]} />
                <p className="mt-2 text-sm text-gray-500">Never share your SIN unless required (e.g., employer, bank, taxes).</p>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Health & Education</h2>

                <div className="mb-6">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Provincial Healthcare</h3>
                    <p className="text-gray-600 mb-2">
                        Healthcare is managed by your province, not the federal government. You must apply for a health card in your province of residence.
                    </p>
                    <Checklist items={[
                        "Apply as soon as you arrive. Some provinces have a waiting period (up to 3 months).",
                        "Bring ID and proof of residence to the provincial registry agent or apply online if available."
                    ]} />
                </div>

                <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Registering Children for School</h3>
                    <p className="text-gray-600 mb-2">
                        Public school is free for residents.
                    </p>
                    <Checklist items={[
                        "Contact your local school board.",
                        "Documents needed: Child's birth certificate/passport, proof of address, immunization records, and previous school records."
                    ]} />
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Financial & Employment</h2>

                <div className="mb-6">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Opening a Bank Account</h3>
                    <p className="text-gray-600">
                        You have the right to open a bank account even if you don't have a job or money to put in it immediately.
                    </p>
                    <Checklist items={[
                        "Go to a bank in person.",
                        "Bring two pieces of ID (Passport, PR papers, SIN).",
                        "Ask about 'Newcomer Packages' which often have no fees for the first year."
                    ]} />
                </div>

                <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Finding a Job</h3>
                    <Checklist items={[
                        "Update your resume to the Canadian style (no photo, no age/marital status).",
                        "Use Job Bank (official government site) and other sites like Indeed or LinkedIn.",
                        "Network: Tell everyone you meet you are looking for work."
                    ]} />
                </div>
            </section>
        </div>
    );
}
