import { AppLayout } from "@/shared/components";
import { Link } from "react-router-dom";
import { FC, memo } from "react";
import { featureList } from "./featureList";
type Feature = {
  name: string;
  href: string;
};
type FeatureItemProps = Feature;
const FeatureItem: FC<FeatureItemProps> = memo(({ name, href }) => {
  return (
    <Link
      to={href}
      className="w-full md:w-1/4 rounded ring-1 ring-white/50 p-4 bg-slate-400"
    >
      <h1 className="text-base text-white mb-2">{name}</h1>
    </Link>
  );
});

export const FeatureListPage = () => {
  return (
    <AppLayout title="Features List">
      {/* TODO:Implement feature search */}
      <div className="flex flex-col gap-8 md:flex-row flex-wrap">
        {featureList.map((feature) => (
          <FeatureItem
            key={feature.href}
            name={feature.name}
            href={feature.href}
          />
        ))}
      </div>
    </AppLayout>
  );
};
