import { Button } from "@repo/ui/components/button";
import { Card, CardContent } from "@repo/ui/components/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/tabs";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex flex-col gap-3 w-full max-w-md">
        <Tabs defaultValue="one">
          <TabsList>
            <TabsTrigger value="one">One</TabsTrigger>
            <TabsTrigger value="two">Two</TabsTrigger>
          </TabsList>
          <TabsContent value="one">
            <Card>
              <CardContent>
                <Button>Hello there one!</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="two">
            <Card>
              <CardContent>
                <Button variant={"outline"}>Hello there two!</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
