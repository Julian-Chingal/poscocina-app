import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface NavbarUserSkeletonProps {
  showDetails?: boolean;
}

export function NavbarUserSkeleton({
  showDetails = true,
}: NavbarUserSkeletonProps) {
  return (
    <Button
      variant="ghost"
      className="h-auto gap-3 rounded-xl px-2 py-2"
      disabled
    >
      <Avatar className="h-9 w-9">
        <AvatarFallback className="animate-pulse bg-muted" />
      </Avatar>

      {showDetails && (
        <>
          <div className="hidden text-left md:block space-y-1">
            <div className="h-3 w-20 animate-pulse rounded bg-muted" />
            <div className="h-2.5 w-14 animate-pulse rounded bg-muted" />
          </div>
          <ChevronDown className="hidden h-4 w-4 text-muted-foreground md:block opacity-50" />
        </>
      )}
    </Button>
  );
}
