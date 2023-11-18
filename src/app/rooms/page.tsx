export default function Rooms() {
    const rooms: any[] = []
    return (
        <div className="h-[450px] w-[400px] sm:h-[550px]  sm:w-[450px] md:h-[600px] md:w-[600px] lg:h-[700px] lg:w-[800px] xl:h-[750px] xl:w-[850px] 2xl:h-[800px] 2xl:w-[900px] border bg-light-foreground/50 dark:bg-dark-foreground/50 rounded-md ">
            <div className="border-t h-full bg-dark-accent  ">
            {
                rooms.map((room,key)=>{
                    return(
                        <div key={key}>

                        </div>
                    )
                })
            }
            </div>
        </div>
    );
}
