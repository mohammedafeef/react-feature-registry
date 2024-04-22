import { FC, ReactNode } from "react";

type BreadcrumbLinkType = {
  name: string;
  href: string;
};
type BreadcrumbItemProps = BreadcrumbLinkType;
const BreadcrumbItem: FC<BreadcrumbItemProps> = ({ name, href }) => {
  return (
    <a href={href} className="text-sm text-white/70 hover:text-white/90">
      {name}
    </a>
  );
};

type BreadcrumbProps = {
  links: BreadcrumbLinkType[];
};
const Breadcrumb: FC<BreadcrumbProps> = ({ links }) => {
  if (links.length === 0) return null;

  return (
    <div className="flex ">
      {links.map((link, index) => {
        const isLast = index === links.length - 1;

        if (isLast) {
          return (
            <BreadcrumbItem key={index} name={link.name} href={link.href} />
          );
        }
        return (
          <>
            <BreadcrumbItem key={index} name={link.name} href={link.href} />
            <div className="text-sm text-white/70 font-bold">-</div>
          </>
        );
      })}
    </div>
  );
};
type AppLayoutProps = {
  title: string;
  children: ReactNode;
};

export const AppLayout: FC<AppLayoutProps> = ({ title, children }) => {
  return (
    <div className="h-screen w-screen md:p-10 flex flex-col bg-slate-900 text-white p-6">
      <header className="flex justify-between mb-6">
        <div className="flex flex-col">
          <Breadcrumb
            links={[
              {
                name: "Home",
                href: "/home"
              }
            ]}
          />
          <h1 className="text-xl md:text-3xl mt-3">{title}</h1>
        </div>
        {/* TODO: Add github source ref link button */}
        <div className="flex items-end">
          <button className="bg-white/80 text-slate-900 px-3 py-2 ring-0 ring-gray-400 rounded text-sm hover:bg-white/90">
            Source code
          </button>
        </div>
      </header>
      <div className="flex-1">{children}</div>
    </div>
  );
};