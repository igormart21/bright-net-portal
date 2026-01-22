import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link 
            to="/" 
            className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            <i className="bi bi-house-door"></i>
            <span>Início</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <i className="bi bi-chevron-right text-muted-foreground text-xs"></i>
            {item.path && index < items.length - 1 ? (
              <Link 
                to={item.path} 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
