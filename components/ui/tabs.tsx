'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';

function Tabs({ className, orientation = 'horizontal', ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      orientation={orientation}
      className={cn('flex gap-6', orientation === 'vertical' ? 'flex-row' : 'flex-col gap-2', className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  orientation,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & {
  orientation?: 'horizontal' | 'vertical';
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]',
        orientation === 'vertical' ? 'h-fit w-fit flex-col' : 'h-9 w-fit',
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  orientation,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  orientation?: 'horizontal' | 'vertical';
}) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        orientation === 'vertical' ? 'h-auto w-full flex-1 justify-start' : 'h-[calc(100%-1px)] flex-1',
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content data-slot="tabs-content" className={cn('flex-1 outline-none', className)} {...props} />;
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
