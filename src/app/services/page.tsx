import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Services() {
  return (
    <main className="p-4">
      <div className="flex  h-[200px] justify-center items-center mb-10">
        <h1 className="font-semibold text-2xl">Select what suites for you</h1>
      </div>
      <Card className="w-1/4">
        <CardHeader>
          <CardTitle>Test</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>Hello</CardDescription>
        </CardContent>
      </Card>
    </main>
  );
}
