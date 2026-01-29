
export function SocialProof() {
    return (
        <section className="w-full py-12 border-b border-border bg-background">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">Trusted by operators and venues</p>
                <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {/* Placeholder Logo Boxes */}
                    {['VenueOne', 'CitySpace', 'PopUp Co', 'NiteLife Group', 'SafeGuard'].map((logo) => (
                        <div key={logo} className="h-8 flex items-center font-bold text-xl text-foreground/80">
                            {/* Replace with real SVGs later */}
                            <span className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded bg-foreground/20" />
                                {logo}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
