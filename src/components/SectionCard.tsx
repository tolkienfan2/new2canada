import Link from 'next/link';

interface SectionCardProps {
    title: string;
    description: string;
    href: string;
    icon?: React.ReactNode;
    variant?: 'red' | 'white';
}

export default function SectionCard({ title, description, href, icon, variant = 'white' }: SectionCardProps) {
    const isRed = variant === 'red';

    return (
        <Link href={href} className="block group h-full">
            <div className={`h-full border rounded-xl p-8 transition-all duration-200 shadow-sm hover:shadow-md
                ${isRed
                    ? 'bg-[var(--color-canadian-red)] border-[var(--color-canadian-red)] text-white'
                    : 'bg-white border-gray-200 text-gray-900 hover:border-[var(--color-canadian-red)]'
                }`}
            >
                <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-2xl font-bold ${isRed ? 'text-white' : 'text-gray-900 group-hover:text-[var(--color-canadian-red)] transition-colors'}`}>
                        {title}
                    </h3>
                    {icon && <div className={isRed ? 'text-white' : 'text-[var(--color-canadian-red)]'}>{icon}</div>}
                </div>
                <p className={`text-lg ${isRed ? 'text-white/90' : 'text-gray-600'}`}>{description}</p>
            </div>
        </Link>
    );
}
