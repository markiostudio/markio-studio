import { AssistantChat } from "@/components/dashboard/assistant/assistant-chat";

export default function AssistantPage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <AssistantChat />
      </div>
    </div>
  );
}
