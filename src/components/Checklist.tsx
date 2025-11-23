interface ChecklistProps {
    items: string[];
}

export default function Checklist({ items }: ChecklistProps) {
    return (
        <ul className="space-y-2 my-4">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full border-2 border-green-500 mr-3">
                        <span className="text-green-600 text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                </li>
            ))}
        </ul>
    );
}
