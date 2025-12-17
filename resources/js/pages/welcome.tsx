import Hero from "@/components/section/Hero";
import Work from "@/components/section/Work";
import AppShell from "@/layouts/app-shell";



export default function Welcome() {
    return (
        <AppShell>
            <Hero notification={null}/>
            <Work />
        </AppShell>
    );
}