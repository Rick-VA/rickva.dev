import { createSignal } from "solid-js";
import 'bootstrap-icons/font/bootstrap-icons.css';

interface SelectableItemProps {
    id: number;
    content: string;
    title: string;
    icon: string;
}

const [selected, setSelected] = createSignal<number | null>(null);

export default function SelectableItem({ id, content, title, icon }: SelectableItemProps) {
    return (
        <div class="grid grid-cols-1 grid-rows-1 place-items-start w-[98vw] max-w-2xl border-b border-[#f1fcfe4d] gap-5 px-2">
            <button
                type="button"
                class="w-full px-3 pt-[1.25rem] text-left"
                onClick={() => setSelected(selected() !== id ? id : null)}
            >
                <div class="flex items-center justify-between">
                    <h4 class="text-2xl font-mono text-text/80 hover:text-text/95 flex justify-center items-start">
                    <i class={icon + " mr-4 text-3xl"}></i>
                        {title}
                    </h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class={`bi bi-chevron-down transition-transform ${selected() === id ? 'rotate-180' : ''}`} viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </button>
            <div class={`relative overflow-hidden transition-all duration-700 ${selected() === id ? 'max-h-screen' : 'max-h-0'}`}>
                <div class="py-4 px-2 text-text/60">
                    {content}
                </div>
            </div>
        </div>
    );
}
