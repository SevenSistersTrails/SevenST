"use client";

import { useState } from "react";
import ModeTabs from "./ModeTabs";
import SearchForm from "./SearchForm";
import TabContent from "./TabContent";
import Tabs from "./Tabs";
import { VEHICLE_TAB_CONTENT, VEHICLE_TABS } from "../utilities/constants";
import type { Mode, VehicleCard, VehicleTabLabel } from "../utilities/types";
import { useAppShell } from "./AppShell";

export default function HomeExperience() {
  const [activeMode, setActiveMode] = useState<Mode>("Normal Mode");
  const [activeVehicleTab, setActiveVehicleTab] =
    useState<VehicleTabLabel>("Four Wheeler");
  const { setNavbarLinksVisible } = useAppShell();
  const isAdvancedMode = activeMode === "Advanced Mode";

  function handleModeChange(mode: Mode) {
    setActiveMode(mode);
    setNavbarLinksVisible(mode !== "Advanced Mode");
  }

  return (
    <>
      <main
        aria-hidden={isAdvancedMode}
        inert={isAdvancedMode}
        className={`bg-mist text-charcoal transition-[opacity,transform] duration-700 ease-in-out motion-reduce:transition-none ${
          isAdvancedMode
            ? "pointer-events-none fixed inset-0 z-0 translate-y-2 overflow-hidden opacity-0"
            : "relative translate-y-0 opacity-100"
        }`}
      >
        <section className="relative flex min-h-screen flex-col overflow-hidden px-6 pb-8 pt-2 sm:px-10 lg:px-16">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero.jpg')" }}
          />
          <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center">
            <h1 className="text-center text-5xl font-bold tracking-[-0.04em] text-card sm:text-7xl">
              Explore the Seven Sisters
            </h1>
            <p className="text-card text-center text-xl mt-5">
              Self Driving vehicle rental options near you
            </p>
            <SearchForm />
          </div>
          <div className="relative mt-auto mb-20 flex justify-center">
            <ModeTabs activeMode={activeMode} onModeChange={handleModeChange} />
          </div>
        </section>

        <section
          id="about"
          className="bg-card px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="flex min-h-[180px] items-center justify-center lg:min-h-0">
              <h2 className="font-mono text-center text-3xl font-bold uppercase tracking-[0.2em] text-pine">
                Introduction
              </h2>
            </div>
            <p className="max-w-3xl text-xl leading-9 text-slate sm:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        <section
          id="vehicles"
          className="bg-slate px-6 py-12 sm:px-10 lg:px-16 lg:pt-10 pb-30"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 text-center font-mono text-3xl font-bold uppercase tracking-[0.2em] text-card">
              Vehicles
            </h2>
            <div className="mb-8 text-center">
              <p className="text-lg  text-card sm:text-xl">
                Our Fleet of vehicles.
              </p>
            </div>
            <div className="my-20">
              <Tabs
                tabs={VEHICLE_TABS}
                activeTab={activeVehicleTab}
                onTabChange={setActiveVehicleTab}
                ariaLabel="Vehicle options"
              />
            </div>
            <TabContent
              activeTab={activeVehicleTab}
              panels={VEHICLE_TABS.map((tab) => ({
                label: tab.label,
                content: VEHICLE_TAB_CONTENT[tab.label],
              }))}
              renderContent={(vehicles) => (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {vehicles.map((vehicle) => (
                    <VehicleCardView key={vehicle.name} vehicle={vehicle} />
                  ))}
                </div>
              )}
            />
          </div>
        </section>

        <section className="relative min-h-[760px] overflow-hidden bg-pine px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(31,74,58,0.75),rgba(31,74,58,0.35))]" />
          <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end pb-14">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-gold">
                Made for the journey
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em] text-card sm:text-6xl">
                Designed for those of you who dream of endless roads with great
                views and deep blue skies.
              </h2>
            </div>
          </div>
        </section>

        <footer className="bg-charcoal px-6 py-20 text-card sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 text-sm">
            <span className="font-semibold">SevenSistersTrails</span>
            <span className="text-card/80">
              © 2026 Pvt Ltd. All rights reserved.
            </span>
          </div>
        </footer>
      </main>

      <main
        aria-hidden={!isAdvancedMode}
        inert={!isAdvancedMode}
        className={`fixed inset-0 z-10 flex min-h-screen flex-col overflow-hidden bg-pine px-6 py-8 transition-[opacity,transform] duration-700 ease-in-out sm:px-10 lg:px-16 motion-reduce:transition-none ${
          isAdvancedMode
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85')",
          }}
        />
        <div className="relative mt-20 flex flex-1 items-start justify-center">
          <h1 className="text-center text-2xl font-bold tracking-[-0.04em] text-card sm:text-3xl">
            Your next journey starts here. <br></br>Use our chatbot to discover
            the best and cheapest options near you
          </h1>
        </div>
        <div className="relative mt-auto mb-10 flex justify-center">
          <ModeTabs activeMode={activeMode} onModeChange={handleModeChange} />
        </div>
      </main>
    </>
  );
}

function VehicleCardView({ vehicle }: { vehicle: VehicleCard }) {
  return (
    <article className="flex min-h-[220px] flex-col justify-center border border-card/30 bg-card/10 p-6 text-center text-card">
      <h3 className="text-2xl font-bold">{vehicle.name}</h3>
      <p className="mt-3 text-base leading-7 text-card/80">
        {vehicle.description}
      </p>
    </article>
  );
}
