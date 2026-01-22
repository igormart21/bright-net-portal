interface StatsCardProps {
    icon: string;
    value: string;
    label: string;
    suffix?: string;
}

const StatsCard = ({ icon, value, label, suffix }: StatsCardProps) => {
    return (
        <div className="glass-card rounded-xl p-6 text-center hover-lift">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                <i className={`bi ${icon} text-2xl text-primary`}></i>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                {value}
                {suffix && <span className="text-xl">{suffix}</span>}
            </div>
            <div className="text-muted-foreground font-medium">{label}</div>
        </div>
    );
};

export default StatsCard;
