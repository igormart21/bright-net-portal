interface TestimonialCardProps {
    name: string;
    location: string;
    rating: number;
    text: string;
    avatar?: string;
}

const TestimonialCard = ({ name, location, rating, text, avatar }: TestimonialCardProps) => {
    return (
        <div className="glass-card rounded-2xl p-6 md:p-8 hover-lift">
            {/* Rating Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                    <i
                        key={index}
                        className={`bi bi-star${index < rating ? '-fill' : ''} text-primary text-lg`}
                    ></i>
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-foreground/90 mb-6 leading-relaxed italic">
                "{text}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                    {avatar ? (
                        <img src={avatar} alt={name} className="w-full h-full object-cover" />
                    ) : (
                        <i className="bi bi-person-circle text-2xl text-primary"></i>
                    )}
                </div>
                <div>
                    <div className="font-semibold text-foreground">{name}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <i className="bi bi-geo-alt text-xs"></i>
                        {location}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
