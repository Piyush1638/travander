import Card from "@/components/Card";
import SearchQuery from "@/components/SearchQuery";
import { details } from "@/lib/data/details";
details;
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 px-10 ">
      <SearchQuery />
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-10 md:px-8 lg:px-10 mt-10 ">
        {details.map((detail) => (
          <Card
            id={detail.id}
            key={detail.id}
            imageSrc={detail.img}
            title={detail.place}
            description={detail.description}
            startDate={detail.startData}
            author={detail.by}
            duration={`${detail.duration_day}D/${detail.duration_night}N`}
            price={detail.price.toFixed(2)}
          />
        ))}
      </div>
    </main>
  );
}
