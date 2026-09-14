# SevenSistersTrails

**Stage:** idea / marketplace design. Implementation has not started beyond a Next.js starter.  
**Decisions:** product name is **SevenSistersTrails**. All other commercial, legal, and operational details are **on hold**.

---

## 1. What is the idea

A **two-sided marketplace** for **self-drive vehicle rentals** in tourist-heavy cities.

Launch geography (intended sequence):

1. Shillong and other northeastern states, including Guwahati
2. West Bengal, if the northeastern test works

The product is a **Zoomcar-like** booking platform, plus a **NoBroker-like** paid-contact directory for owners who will not join a commission-based booking flow.

**Problem**

- Tourists and local customers need easy access to **self-drive** vehicles.
- Existing platforms take **commission**. Many **local owners / rental shops** may refuse that model even if it brings demand.
- Capture both: owners who accept platform bookings, and owners who only want **leads**, not full inventory integration.

---

## 2. What we are doing

Building a web platform with two owner paths and one customer discovery / booking flow.

### Customer (renter)

1. Create a **profile**.
2. Submit **driving licence** and **identity** details.
3. Browse **available vehicles**.
4. **Book** vehicles that are fully onboarded.
5. For **directory vendors**, pay a **small fee** to unlock **owner contact / business details**.

### Owner path A — onboarded fleet (Zoomcar-style)

- Rental **companies** and **individuals** who agree to the platform proposition.
- Vehicles are **listed with bookable inventory**.
- Customer **books on-platform**.
- Platform takes a **commission**; remainder goes to the owner.

### Owner path B — vendor listing (NoBroker-style)

- Owner **does not** accept commission booking.
- Onboarding is **minimal**: **contact number** and **business address** only.
- Shown under a **Vendors** section.
- Vehicle offerings described in **text**.
- Contact and further details are **paywalled**. After payment, the customer gets owner details.

### Later (if the two plans work)

- Doorstep delivery
- Tracking
- Point of contact
- GoPros / cameras for trip recording; content shared with the customer after the trip
- **Large security deposit** when the customer takes these extras (cameras, GoPros, etc.)
- **Tourist taxi / chauffeur-driven** listings for tourists

---

## 3. What is our offering

| Offering | Who it is for | How it works | Monetization (as stated) |
|---|---|---|---|
| **Self-drive booking** | Renters | Profile + licence/ID → see bookable vehicles → book | **Commission** on completed booking |
| **Onboarded vehicle listings** | Companies and individuals | Inventory on the platform, direct booking | Owner receives booking amount minus commission |
| **Vendor directory** | Owners who refuse commission | Listing + text of vehicles; contact hidden | **Minimal customer fee** to unlock contact |
| **Add-on travel services** (later) | Renters who opt in | Delivery, tracking, POC, cameras | Extra fees + **large security deposit** |
| **Chauffeur / tourist taxi info** (later) | Tourists | Chauffeur-driven options | Not specified |

**Supply:** rental companies and private individuals with vehicles to rent.  
**Demand:** people who need transport locally, especially **tourists**.

**Differentiation (as stated):** more **flexible supply onboarding** — full marketplace **or** directory listing without forcing commission on every owner.

---

## 4. What this product will achieve

**Near term (Shillong, Guwahati, other northeastern states)**

- One place to **discover** self-drive cars from both **bookable fleets** and **local shops**.
- Convert some owners into **on-platform bookings** (commission).
- Convert other owners into **paid lead unlocks** so they still appear without integrating operations.
- Validate whether tourists and locals will use this in the Northeast.

**If that works**

- Expand to **West Bengal**.
- Add **ops-heavy** services (delivery, tracking, dedicated contact, recording gear) funded by deposits/fees.
- Add **chauffeur-driven tourist taxis** alongside self-drive.

**Success (product terms):** become the default rental discovery and booking layer for self-drive (and later chauffeur) transport in those tourist markets, without requiring every local owner to accept Zoomcar-style commission.

---

## On hold

The following are **not decided** and are kept on hold:

- Commission rates and vendor unlock pricing
- KYC method (self-declared vs verified)
- Payments, refunds, and base rental deposits
- Booking operations (pickup, handover, fuel, insurance, damage, late return)
- Inventory model for path A (live calendar vs static availability)
- Vendor listing depth (text only vs photos/prices); whether an owner can be both path A and B
- What “flexible” includes beyond the two owner paths
- Individual vs company onboarding and payouts
- Chauffeur taxis: listings only vs full booking
- Add-on ownership, GoPro content handling, tracking method
- West Bengal cities
- Vehicle types (cars only vs bikes/scooters)
- Web vs mobile apps
