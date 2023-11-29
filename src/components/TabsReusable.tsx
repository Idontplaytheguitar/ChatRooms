import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "fndtn/components/ui/tabs";
import { ITabsItem } from "fndtn/interfaces/ITabsItem";

export default function TabsReusable(props: {
  items: ITabsItem[];
  className?: string;
}) {
  const { items, className } = props;
  return (
    <Tabs
      defaultValue={items[0].triggerValue}
      className={` ${className || ""}`}
    >
      <TabsList>
        {items.map((item) => {
          return (
            <TabsTrigger
              key={item.triggerValue}
              value={item.triggerValue}
            >
              {item.trigger}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {items.map((item) => {
        return (
          <TabsContent
            key={item.triggerValue + "content"}
            value={item.triggerValue}
          >
            {item.content}
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
