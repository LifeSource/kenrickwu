import "./hero.css";

type HeroProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Hero({ className, children }: HeroProps) {
  return <div className={`hero ${className}`}>{children}</div>;
}
