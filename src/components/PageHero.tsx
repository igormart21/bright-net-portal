import Breadcrumb from "./Breadcrumb";

interface BreadcrumbItem {
    label: string;
    path?: string;
}

interface PageHeroProps {
    title: string;
    subtitle?: string;
    breadcrumbs: BreadcrumbItem[];
    backgroundImage?: string;
    icon?: string;
}

const PageHero = ({
    title,
    subtitle,
    breadcrumbs,
    backgroundImage,
    icon
}: PageHeroProps) => {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background */}
            {backgroundImage ? (
                <>
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-hero" />
                </>
            ) : (
                <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-background to-background" />
            )}

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <Breadcrumb items={breadcrumbs} />

                    <div className="text-center animate-fade-in-up">
                        {icon && (
                            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full mb-6">
                                <i className={`bi ${icon} text-3xl md:text-4xl text-primary`}></i>
                            </div>
                        )}

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                            {title}
                        </h1>

                        {subtitle && (
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Decorative element */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </section>
    );
};

export default PageHero;
