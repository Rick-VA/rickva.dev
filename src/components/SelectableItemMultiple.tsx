import { createSignal } from "solid-js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { work, projects, education, contact } from "../content";

interface SelectableItemProps {
    id: number;
    content: string;
    title: string;
    icon: string;
}

const [selected, setSelected] = createSignal<number | null>(null);

export default function SelectableItemMultiple({ id, content, title, icon }: SelectableItemProps) {
    console.log(content);
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
            <div class={`relative w-full overflow-hidden transition-all duration-700 ${selected() === id ? 'h-auto opacity-100' : 'h-0 opacity-0'}`}>
                {content === 'work' &&
                    <>
                        {work.map((item) => (
                            <div class="grid grid-cols-3 p-2">
                                <div class="text-[#f1fcfe80] text-base">
                                    {item.from} - {item.to}
                                </div>
                                <div>
                                    <div class="text-lg text-[#f1fcfecc]">
                                        {item.role}
                                    </div>
                                    <div class="text-[#f1fcfeb3] text-sm">
                                        {item.location}
                                    </div>
                                    <div class="text-[#f1fcfe99] text-xs">
                                        {item.skills}
                                    </div>
                                </div>
                                <div class="text-base">
                                    <a href={item.org_url} target="_blank" class="flex gap-2 justify-end">
                                        {item.org}
                                        <br />
                                        <i class="bi bi-link-45deg"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </>
                }
                {content === 'projects' &&
                    <>
                        {projects.map((item) => (
                            <div class="grid grid-cols-3 p-5">
                                <div class="text-[#f1fcfe80] text-base">
                                    {item.from} - {item.to}
                                </div>
                                <div>
                                    <div class="text-lg text-[#f1fcfecc]">
                                        {item.title}
                                    </div>
                                    <div class="text-[#f1fcfeb3] text-sm">
                                        {item.description}
                                    </div>
                                    <div class="text-[#f1fcfe99] text-xs">
                                        {item.tech}
                                    </div>
                                </div>
                                <div class="text-base">
                                    <a href={item.url} target="_blank" class="flex gap-2 justify-end">
                                        Open Project
                                        <br />
                                        <i class="bi bi-link-45deg"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </>
                }
                {content === 'educations' &&
                    <>
                        {education.map((item) => (
                            <div class="grid grid-cols-3 p-5">
                                <div class="text-[#f1fcfe80] text-base">
                                    {item.from} - {item.to}
                                </div>
                                <div>
                                    <div class="text-lg text-[#f1fcfecc]">
                                        {item.course}
                                    </div>
                                    <div class="text-[#f1fcfeb3] text-sm">
                                        {item.location}
                                    </div>
                                </div>
                                <div class="text-base text-end">
                                    {item.institute}
                                </div>
                            </div>
                        ))}
                    </>
                }
                {content === 'contact' &&
                    <>
                        {contact.map((item) => (
                            <div class="grid grid-cols-3 p-5">
                                <div class="text-[#f1fcfe80] text-base">
                                </div>
                                <div>
                                </div>
                                <div class="text-base">
                                    <a href={item.source} target="_blank" class="flex gap-2 justify-end">
                                        {item.source_name}
                                        <br />
                                        <i class="bi bi-link-45deg"></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </>
                }
            </div>
        </div>
    );
}
