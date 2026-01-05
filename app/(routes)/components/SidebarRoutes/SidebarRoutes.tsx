"use client";

import {
  dataGeneralSidebar,
  dataSupportSidebar,
  dataToolsSidebar,
} from "./SidebarRoutes.data";

import { SidebarItems } from "../SidebarItems/SidebarItems";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function SidebarRoutes() {
  return (
    <div className="flex flex.col justify-between h-full">
      <div className="space-y-6 flex flex-col items-center">
        <div className="p-4">
          <p className="text-sm font-semibold text-gray-500 mb-3">GENERAL</p>
          <div className="space-y-2">
            {dataGeneralSidebar.map((item) => (
              <SidebarItems key={item.label} item={item} />
            ))}
          </div>
        </div>

        <Separator />

        <div className="p-4">
          <p className="text-sm font-semibold text-gray-500 mb-3">TOOLS</p>
          <div className="space-y-2">
            {dataToolsSidebar.map((item) => (
              <SidebarItems key={item.label} item={item} />
            ))}
          </div>
        </div>

        <Separator />

        <div className="p-4">
          <p className="text-sm font-semibold text-gray-500 mb-3">SUPPORT</p>
          <div className="space-y-2">
            {dataSupportSidebar.map((item) => (
              <SidebarItems key={item.label} item={item} />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center mt-auto">
          <div className="p-4 space-y-4">
            <Button variant="outline" className="w-full hover:bg-gray-100">
              Upgrate Plan
            </Button>
            <Separator />
            <footer className="text-xs text-gray-400 text-center">
              © 2025. All rights reserved.
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
