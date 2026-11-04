import type { TabOption, VehicleCard, VehicleTabLabel } from "./types";

export const MODE_TABS = [
  {
    label: "Normal Mode",
    description:
      "For traditional website users who prefer to browse and search normally.",
  },
  {
    label: "Advanced Mode",
    description:
      "For advanced users. An AI chat experience is coming here later.",
  },
] as const satisfies readonly TabOption[];

export const VEHICLE_TABS = [
  { label: "Four Wheeler" },
  { label: "Two Wheeler" },
  { label: "Vendors" },
  { label: "Taxis" },
] as const satisfies readonly TabOption[];

export const VEHICLE_TAB_CONTENT: Record<
  VehicleTabLabel,
  readonly VehicleCard[]
> = {
  "Four Wheeler": [
    {
      name: "Four Wheeler 1",
      description: "A practical city runabout",
    },
    {
      name: "Four Wheeler 2",
      description: "A comfortable hill companion",
    },
    {
      name: "Four Wheeler 3",
      description: "Room for family and luggage",
    },
    {
      name: "Four Wheeler 4",
      description: "A capable ride for winding roads",
    },
  ],
  "Two Wheeler": [
    {
      name: "Two Wheeler 1",
      description: "A light ride for local roads",
    },
    {
      name: "Two Wheeler 2",
      description: "Ready for a scenic day trip",
    },
    {
      name: "Two Wheeler 3",
      description: "An easy ride for everyday exploring",
    },
    {
      name: "Two Wheeler 4",
      description: "A nimble option for mountain roads",
    },
  ],
  Vendors: [
    {
      name: "Vendor 1",
      description: "Browse local vehicle rental providers",
    },
    {
      name: "Vendor 2",
      description: "Compare fleets from nearby vendors",
    },
    {
      name: "Vendor 3",
      description: "Discover more local rental choices",
    },
    {
      name: "Vendor 4",
      description: "Find a fleet for your group",
    },
  ],
  Taxis: [
    {
      name: "Taxi 1",
      description: "Find a ride for your local journey",
    },
    {
      name: "Taxi 2",
      description: "Plan a comfortable trip across the region",
    },
    {
      name: "Taxi 3",
      description: "Arrange a ride for a day trip",
    },
    {
      name: "Taxi 4",
      description: "Travel between towns with ease",
    },
  ],
};
