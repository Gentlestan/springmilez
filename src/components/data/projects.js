import heroSolar from "../../assets/images/herosolar.jpeg";
import heroProject from "../../assets/images/image-9.jpg";
import hotelhero from "../../assets/images/hotel-hero.jpg";
import hotel1 from "../../assets/images/hotel1.jpg";
import hotelroom from "../../assets/images/hotel-room.jpg";
import hotellight from "../../assets/images/hotel-light.jpg";
import hotelside from "../../assets/images/hotel-side.jpg";
import galerry1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/image-6.jpg";
import projectHero from "../../assets/images/image-31.jpg";
import gallery3 from "../../assets/images/image-3.jpg";
import gallery5 from "../../assets/images/image-13.jpg";
import gallery4 from "../../assets/images/image-4.jpg";
import residenthero from "../../assets/images/residenthero.jpg";
import resident1 from "../../assets/images/resident1.jpg";
import residents1 from "../../assets/images/residents1.jpg";
import residentroom from "../../assets/images/residentroom.jpg";
import lights from "../../assets/images/lights.jpg";
import cctvhero from "../../assets/images/cctvhero.jpg";
import cctv from "../../assets/images/cctv.jpg";
import cctvwire from "../../assets/images/cctv-wire.jpeg";
import hik from "../../assets/images/hik.jpeg";
import ipcam from "../../assets/images/nvr-cam.jpg";
import ipcam1 from "../../assets/images/ipcam1.jpeg";
// Sample project data
export const projects = [
  {
    id: "industrial-plant",
    title: "2.4MW Industrial Plant – Hybrid PV",
    summary:
      "Hybrid PV + battery for a manufacturing line. Reduced diesel use by 28%, ensured 99.9% uptime.",
    image: projectHero,
    tags: ["Hybrid PV", "Battery", "Industrial", "Renewable"],
    metrics: ["28% diesel reduction", "99.9% uptime"],
    challenge:
      "The client faced frequent downtime and high diesel consumption, leading to operational inefficiencies.",
    solution:
      "We deployed a hybrid solar PV system with integrated batteries to reduce reliance on diesel generators.",
    deliverables: [
      "2.4MW solar installation",
      "Battery storage system",
      "Monitoring dashboards",
      "Staff training",
    ],
    testimonial:
      "“The system has significantly lowered our costs and improved uptime. We can now run operations without fear of outages.”",
    gallery: [heroSolar, heroProject, galerry1, gallery5, gallery4],
  },
  {
    id: "20kva-backup",
    title: "20kVA Solar + Battery Backup",
    summary:
      "Installed a 20kVA inverter system with tubular battery storage for reliable power in a medium-scale facility.",
    image: gallery2,
    tags: ["Renewable", "Backup Power"],
    metrics: ["20kVA inverter", "70kWh tubular batteries"],
    challenge:
      "The client needed a stable power supply for daily operations with reduced generator reliance.",
    solution:
      "We deployed a 20kVA inverter system paired with 4 tubular batteries (17.5kWh each) to provide continuous clean power.",
    deliverables: [
      "20kVA/48V inverter system",
      "70kWh tubular battery bank",
      "Wiring and installation",
      "System monitoring setup",
    ],
    testimonial:
      "“The 20kVA solar backup has completely stabilized our operations. No more generator noise or fuel costs.”",
    gallery: [gallery2, gallery3, gallery4],
  },
 {
  id: "hotel-cctv-52ch",
  title: "52-Channel IP CCTV – Hotel, Asaba",
  summary:
    "Deployed a fully wired 52-channel IP CCTV system for a 4-star hotel in Asaba, ensuring complete guest and facility security.",
  image: ipcam,
  tags: ["CCTV", "Security", "Hospitality"],
  metrics: ["52 IP cameras", "Central NVR system"],
  challenge:
    "The hotel required a robust surveillance solution to cover multiple entry points, hallways, and service areas without blind spots.",
  solution:
    "Installed 52 wired IP cameras linked to a centralized NVR with remote monitoring and long-term storage.",
  deliverables: [
    "52 wired IP cameras",
    "Structured cabling and piping",
    "Centralized NVR system",
    "Remote monitoring setup",
    "Staff training",
  ],
  testimonial:
    "“Our hotel security has improved drastically. Guests feel safer and operations are smoother.”",
  gallery: [ipcam, ipcam1],
},
{
  id: "church-cctv-24ch",
  title: "24-Channel AHD CCTV – Church, Delta State",
  summary:
    "Installed a 24-channel AHD CCTV system in a large church, providing coverage for congregation halls and external premises.",
  image: heroSolar,
  tags: ["CCTV", "Security", "Religious"],
  metrics: ["24 AHD cameras", "Central DVR system"],
  challenge:
    "The church needed affordable yet effective surveillance to monitor large gatherings and deter intruders.",
  solution:
    "Deployed 24 AHD cameras connected to a DVR with extended storage and external monitoring capability.",
  deliverables: [
    "24 AHD cameras",
    "DVR system installation",
    "Piping and wiring",
    "Storage and monitoring setup",
  ],
  testimonial:
    "“The CCTV system gives us peace of mind during services and events, knowing our congregation is protected.”",
  gallery: [heroSolar, heroSolar],
},
{
  id: "residential-cctv-16ch",
  title: "16-Channel CCTV – Residential Building",
  summary:
    "Set up a 16-channel CCTV system for a multi-family residential building, covering entrances, hallways, and outdoor areas.",
  image: cctvhero,
  tags: ["CCTV", "Security", "Residential"],
  metrics: ["16 cameras", "DVR/NVR integration"],
  challenge:
    "The building required an affordable surveillance system to enhance tenant safety and prevent break-ins.",
  solution:
    "Installed 16 cameras with DVR integration, remote viewing, and motion-based alerts.",
  deliverables: [
    "16 CCTV cameras",
    "Central DVR system",
    "Structured wiring",
    "Remote monitoring access",
  ],
  testimonial:
    "“Our tenants now feel more secure, and management can monitor activity remotely at all times.”",
  gallery: [cctvhero, cctv, cctvwire, hik],
},
{
  id: "cctv-other-projects",
  title: "Other CCTV Deployments",
  summary:
    "Delivered multiple CCTV solutions for offices, estates, and commercial spaces across Delta State.",
  image: heroSolar,
  tags: ["CCTV", "Security"],
  metrics: ["Multiple channel setups", "Tailored security designs"],
  challenge:
    "Clients required customized CCTV installations for various scales of buildings and budgets.",
  solution:
    "We provided tailored CCTV installations ranging from small residential DVR systems to large-scale IP camera networks.",
  deliverables: [
    "Custom CCTV designs",
    "Wiring and installation",
    "DVR/NVR systems",
    "Staff orientation",
  ],
  testimonial:
    "“Across all our sites, the CCTV systems have proven reliable and easy to manage.”",
  gallery: [heroSolar, heroSolar],
},

  {
    id: "hospital-backup",
    title: "Hospital Backup Power",
    summary:
      "Designed a redundant inverter + battery system for life-critical hospital equipment.",
    image: heroSolar,
    tags: ["Backup Power", "Healthcare", "Redundancy"],
    metrics: ["24/7 monitoring", "Failover design"],
    challenge:
      "The hospital needed reliable backup power for life-support machines with zero tolerance for failure.",
    solution:
      "We implemented a redundant inverter system with battery storage to ensure uninterrupted power.",
    deliverables: [
      "Redundant inverter system",
      "Battery backup with monitoring",
      "Failover controls",
    ],
    testimonial:
      "“Lives have been saved because of this system. It’s one of the best investments we’ve made.”",
    gallery: [heroSolar, gallery4, gallery5],
  },

  // 🔹 Electrical Projects
  {
    id: "hotel-44rooms",
    title: "44-Room Hotel Electrical Installation – Asaba",
    summary:
      "Piping, wiring, and fitting of electrical appliances for a 3-star 35-room hotel along Okpanam Road, Asaba.",
    image: hotelhero,
    tags: ["Electrical", "Hospitality"],
    metrics: ["35 rooms", "Full wiring & fittings"],
    challenge:
      "The hotel required a safe, modern electrical installation to power all rooms and facilities.",
    solution:
      "We executed end-to-end electrical piping, wiring, and fittings, ensuring compliance with safety standards.",
    deliverables: [
      "Conduit piping",
      "Complete wiring installation",
      "Switches, sockets, and lighting fittings",
      "Appliance installations",
    ],
    testimonial:
      "“The project was delivered on time and to international electrical standards. Guests enjoy uninterrupted power and safety.”",
    gallery: [hotelhero, hotel1, hotelroom, hotellight, hotelside],
  },
  {
    id: "hotel-28rooms",
    title: "28-Room Hotel Electrical Installation – Asaba",
    summary:
      "Piping, wiring, and electrical fittings for a 28-room hotel in Asaba.",
    image: gallery4,
    tags: ["Electrical", "Hospitality"],
    metrics: ["28 rooms", "Complete electrical installation"],
    challenge:
      "The hotel needed an efficient electrical distribution system to support daily operations.",
    solution:
      "We installed conduit piping, wiring, and high-quality fittings for all rooms and service areas.",
    deliverables: [
      "Conduit piping",
      "Electrical wiring",
      "Appliance and lighting fittings",
    ],
    testimonial:
      "“The electrical works were neatly executed. Power distribution is seamless across all rooms.”",
    gallery: [gallery4, gallery2],
  },
  {
    id: "church-electrical",
    title: "Church & Residential Electrical Installations – Delta State",
    summary:
      "Electrical piping, wiring, and fittings for a church and multiple residential buildings across Delta State.",
    image: residenthero,
    tags: ["Electrical", "Community", "Residential"],
    metrics: ["1 church", "Multiple residences"],
    challenge:
      "The church and residential buildings required safe and reliable electrical installations to serve large congregations and households.",
    solution:
      "We carried out full electrical works including piping, wiring, and fitting installations to ensure reliable electricity distribution.",
    deliverables: [
      "Church electrical piping and wiring",
      "Residential wiring",
      "Appliance and lighting fittings",
    ],
    testimonial:
      "“The installations have greatly improved safety and reliability. Both church services and homes now run smoothly.”",
    gallery: [residenthero, resident1, residents1, residentroom, lights],
  },
];
