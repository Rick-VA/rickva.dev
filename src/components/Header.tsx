import * as data from '../content.ts'

export default function Header() {
    return (
        <header class="mx-auto py-8 flex justify-center">
            <div
                class="grid grid-cols-1 md:grid-cols-3 grid-rows-1 place-items-center w-[98vw] max-w-2xl border-b-[0.375rem] border-slate-900 py-8"
            >
                <div
                    class="rounded-full border-primary self-end shadow-2xl md:w-24 w-20 aspect-square"
                >
                    <img
                        src="/profile.jpg"
                        alt="profile_picture"
                        class="object-cover w-full h-full rounded-full"
                    />
                </div>

                <div class="grid text-center self-center whitespace-nowrap mt-4 md:mt-0">
                    <h1 class="text-3xl text-white">{data.name}</h1>
                    <h3 class="text-lg text-white/90">{data.designation}</h3>
                    <h5 class="text-sm text-white/80">{data.location}</h5>
                </div>
            </div>
        </header>
    )
}
