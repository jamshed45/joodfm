import type { ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  detail: string;
  linkText?: string;
  linkHref?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  detail,
  linkText,
  linkHref
}) => (
  <div className="flex items-start space-x-4 border-b border-accent last:border-b-0 py-6">
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white text-xl">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-medium text-gray-800">{title}</h4>
      <p className="text-gray-600 mt-1">{detail}</p>
      {linkHref && (
        <a
          href={linkHref}
          className="mt-2 inline-block text-sm text-gray-800 underline hover:text-purple-500"
        >
          {linkText}
        </a>
      )}
    </div>
  </div>
);

export default ContactCard;
