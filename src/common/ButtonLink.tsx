export interface ButtonLinkProps {
  children?: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  logo?: string;
  upperText?: string;
  lowerText?: string;
}

function ButtonLink({ href, children, className, target }: ButtonLinkProps) {
  return (
    <a
      href={href}
      children={children}
      className={className}
      target={target}
    ></a>
  );
}

export default ButtonLink;
