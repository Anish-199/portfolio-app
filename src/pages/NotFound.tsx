
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Section from "@/components/Section";

const NotFound = () => {
  return (
    <PageLayout>
      <Section fullHeight className="flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="heading-2 mb-6">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button asChild className="px-6">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </Section>
    </PageLayout>
  );
};

export default NotFound;
