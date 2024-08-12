import * as React from "react";
import { AppLayout } from "@/shared/components";

export const EventDelegation = () => {
  const showAlert = (content: string) => alert(content);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const label = (event.target as HTMLElement).getAttribute("data-label");
    if (!label) {
      showAlert("No label found");
      return;
    }
    showAlert("Clicked on:" + label);
  };

  return (
    <AppLayout
      title="Event Delegation"
      link="/event-delegation"
      className="flex items-center justify-center"
    >
      <div
        className="flex flex-col px-4 py-6 rounded w-[300px] bg-slate-600/80 gap-y-2"
        onClick={handleClick}
      >
        <img
          data-label="image"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-[150px] object-cover rounded overflow-hidden"
        />
        <div className="flex justify-between items-center">
          <div data-label="name" className="flex-1 text-lg font-bold">
            Arun Kumar
          </div>
          <button
            className="p-2 px-4 rounded-md text-lg mr-2 bg-slate-500/30"
            data-label="like"
          >
            L
          </button>
          <button
            className="p-2 px-4 rounded-md text-lg bg-slate-500/30"
            data-label="dislike"
          >
            D
          </button>
        </div>
        <div data-label="description" className="text-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          odio blanditiis sapiente, rerum quos necessitatibus magni consequuntur
          praesentium expedita cum dolor dolorum, aut illo numquam sequi ducimus
          fugit eum ad.
        </div>
        <button data-label="Register" className="my-2 py-2 bg-slate-500/40">
          Register Interest
        </button>
      </div>
    </AppLayout>
  );
};
