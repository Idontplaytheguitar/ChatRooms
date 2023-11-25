import { Button } from "fndtn/components/ui/button";
import Room from "./components/room";
import RoomsPage from "cms/RoomsPage";
import axios from "axios";

export default async function Rooms() {
  let rooms: string[] = [];
  try {
    const resp = await axios.get(
      "http://localhost:3001/rooms"
    );
    rooms = resp.data;
  } catch (e) {
    console.log(e);
  }
  const { filterButton, noRoomsFound } =
    RoomsPage;
  return (
    <div className="h-[450px] w-[400px] sm:h-[550px]  sm:w-[450px] md:h-[600px] md:w-[600px] lg:h-[700px] lg:w-[800px] xl:h-[750px] xl:w-[850px] 2xl:h-[800px] 2xl:w-[900px] bg-light-foreground/50 dark:bg-dark-foreground/70 flex flex-col items-center justify-center gap-5 p-2 rounded-md">
      <div className="flex flex-col border-t h-full bg-light-foreground dark:bg-dark-foreground/80 shadow-dark-background dark:shadow-light-background/40 shadow-lg gap-4 w-11/12 p-5 rounded-md ">
        {rooms.length ? (
          rooms.map((room, key) => {
            return <Room name={room} key={key} />;
          })
        ) : (
          <div className="text-center my-auto text-2xl">
            {noRoomsFound}
          </div>
        )}
      </div>
      <div className="h-1/6">
        <Button>{filterButton}</Button>
      </div>
    </div>
  );
}
