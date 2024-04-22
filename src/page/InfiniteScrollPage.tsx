import { InfiniteScrollList } from "@/feat";
import { AppLayout } from "@/shared/components";
import { FC, memo, useCallback, useEffect, useState } from "react";

type ItemProps = {
  title: string;
};
const Item: FC<ItemProps> = memo(({ title }) => {
  return (
    <div className="w-full md:w-1/4 rounded ring-1 ring-white/50 p-4 bg-slate-400">
      <h1 className="text-base text-white mb-2">{title}</h1>
      <p className="text-sm text-white/90">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque
        cum deserunt adipisci esse expedita architecto quam facere. Laudantium
        adipisci molestias ea libero aliquam inventore delectus amet sed
        dignissimos hic.
      </p>
    </div>
  );
});

export const InfiniteScrollPage = () => {
  const [list, setList] = useState<number[]>([]);
  const [page, setPage] = useState(0);
  const getListWithOffset = (offset: number) => {
    const currentStart = offset * 20 + 1;
    return new Array(20).fill(0).map((_, index) => index + currentStart);
  };
  const handleNextPage = useCallback(() => {
    const updatedPage = page + 1;
    setPage((prevPage) => prevPage + 1);
    console.log(updatedPage);
    setList((prevList) => [...prevList, ...getListWithOffset(updatedPage)]);
  }, [page]);

  useEffect(() => {
    const initialList = getListWithOffset(page);
    setList(initialList);
  }, []);
  return (
    <AppLayout title="Infinite Scroll">
      <InfiniteScrollList
        onScrollEnd={handleNextPage}
        className="gap-8 md:flex-row flex-wrap justify-around"
      >
        {list.map((item) => (
          <Item key={item} title={`Item ${item}`} />
        ))}
      </InfiniteScrollList>
    </AppLayout>
  );
};
