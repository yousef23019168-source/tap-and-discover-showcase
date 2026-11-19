// Interactive product explorer content.
// Hotspot x/y are pixel coordinates on the original image (width x height),
// placed on the component that is visibly shown and labelled in that image.
// Descriptions only use components and capabilities shown in the images or the site text.
import cameraExploded from "@/assets/camera-exploded.webp.asset.json";
import cameraRoom from "@/assets/camera-room.webp.asset.json";
import braceletWrist from "@/assets/bracelet-wrist.webp.asset.json";
import braceletProduct from "@/assets/bracelet-product.webp.asset.json";
import systemArchitecture from "@/assets/system-architecture.webp.asset.json";

export type Hotspot = {
  id: string;
  name: string;
  x: number;
  y: number;
  what: string;
  role: string;
};

export type ProductView = {
  id: string;
  label: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  hotspots: Hotspot[];
};

export type Product = {
  id: string;
  tab: string;
  icon: string;
  title: string;
  summary: string;
  views: ProductView[];
};

const braceletParts = (assembled: { x: number; y: number }): Hotspot[] => [
  {
    id: "housing",
    name: "Wristband housing",
    x: 205,
    y: 300,
    what: "The strap and case that hold all of the bracelet's electronics on the wrist.",
    role: "Lets the elderly person wear the bracelet comfortably, so readings can be collected throughout the day.",
  },
  {
    id: "board",
    name: "Main electronic circuit board",
    x: 505,
    y: 440,
    what: "The board that connects the bracelet's electronic parts together.",
    role: "Links the sensors, microcontroller, battery and wireless module into one working device.",
  },
  {
    id: "heart-rate",
    name: "Heart rate sensor",
    x: 632,
    y: 383,
    what: "The sensor that reads the wearer's heart rate from the wrist.",
    role: "Provides the heart rate readings shown in the app and used for abnormal heart rate alerts.",
  },
  {
    id: "motion",
    name: "Accelerometer & gyroscope",
    x: 637,
    y: 490,
    what: "Motion sensors that track how the wrist moves and how it is oriented.",
    role: "Their movement data supports fall detection.",
  },
  {
    id: "mcu",
    name: "Microcontroller",
    x: 742,
    y: 435,
    what: "The small processor that runs the bracelet.",
    role: "Reads the sensors, processes the data and prepares it to be sent to the system.",
  },
  {
    id: "battery",
    name: "Battery",
    x: 855,
    y: 450,
    what: "The rechargeable battery that powers the bracelet.",
    role: "Keeps the bracelet running between charges so monitoring is not interrupted.",
  },
  {
    id: "wireless",
    name: "Wireless communication module",
    x: 975,
    y: 455,
    what: "The module that sends data out of the bracelet wirelessly.",
    role: "Transfers readings and alerts to the E-Guard system in real time.",
  },
  {
    id: "charging",
    name: "Charging interface",
    x: 1070,
    y: 445,
    what: "The contacts used to recharge the bracelet's battery.",
    role: "Makes it simple to recharge the bracelet and keep it ready to wear.",
  },
  {
    id: "assembled",
    name: "Assembled bracelet",
    x: assembled.x,
    y: assembled.y,
    what: "All of the parts together in the finished bracelet, as worn on the wrist.",
    role: "The single device the elderly person wears; it collects health readings quietly in the background.",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "camera",
    tab: "AI camera",
    icon: "M3 7h13v10H3zM16 11l5-3v8l-5-3",
    title: "AI-powered monitoring camera",
    summary: "See what's inside the camera and how it watches over a room.",
    views: [
      {
        id: "exploded",
        label: "Inside the camera",
        src: cameraExploded.url,
        alt: "Exploded view of the E-Guard monitoring camera showing its lens, image sensor, processing unit, wireless module, power supply and mounting base",
        width: 1920,
        height: 1080,
        hotspots: [
          {
            id: "lens",
            name: "Camera lens",
            x: 625,
            y: 555,
            what: "The optical lens at the front of the camera that gathers light from the room.",
            role: "Gives the camera a clear view of the room so the system can watch for falls and unusual inactivity.",
          },
          {
            id: "sensor",
            name: "Image sensor",
            x: 766,
            y: 566,
            what: "Turns the light focused by the lens into a digital image.",
            role: "Produces the video frames that the AI analyses.",
          },
          {
            id: "processor",
            name: "Processing unit",
            x: 912,
            y: 582,
            what: "The main board and chip that handle the camera's processing.",
            role: "Runs video capture and AI processing so possible emergencies can be identified.",
          },
          {
            id: "wireless",
            name: "Wireless connectivity module",
            x: 1110,
            y: 555,
            what: "The module that connects the camera to the network.",
            role: "Sends camera events to the E-Guard backend so alerts can reach the family app.",
          },
          {
            id: "power",
            name: "Power supply",
            x: 1205,
            y: 610,
            what: "Provides electrical power to the camera's components.",
            role: "Keeps the camera running so monitoring can continue without gaps.",
          },
          {
            id: "mount",
            name: "Mounting base",
            x: 1712,
            y: 600,
            what: "Fixes the camera to the wall and holds it in position.",
            role: "Places the camera where it can see the room it is meant to watch.",
          },
        ],
      },
      {
        id: "room",
        label: "Installed in a room",
        src: cameraRoom.url,
        alt: "The E-Guard camera mounted on a bedroom wall with its field of view over the bed, plus examples of AI fall detection and unusual inactivity detection",
        width: 1920,
        height: 1080,
        hotspots: [
          {
            id: "camera",
            name: "Wall-mounted camera",
            x: 395,
            y: 172,
            what: "The E-Guard camera installed high on the bedroom wall.",
            role: "Watches the room so the system can notice when something may be wrong.",
          },
          {
            id: "mount",
            name: "Wall mount",
            x: 78,
            y: 430,
            what: "The base that attaches the camera to the wall.",
            role: "Keeps the camera steady at a height where it can see the whole area.",
          },
          {
            id: "view",
            name: "Field of view",
            x: 640,
            y: 300,
            what: "The area the camera lens can see from its position on the wall.",
            role: "Covering the bed and the floor around it lets the system notice falls and long periods without movement.",
          },
          {
            id: "zone",
            name: "Monitored area",
            x: 1280,
            y: 800,
            what: "The highlighted space around the bed that the camera analyses.",
            role: "Focuses detection on the place where the elderly person spends their time.",
          },
          {
            id: "fall",
            name: "AI fall detection",
            x: 1400,
            y: 436,
            what: "An example of the camera recognising a person who has fallen to the floor.",
            role: "A detected fall can raise an emergency alert for the elderly user and authorised guardians.",
          },
          {
            id: "inactivity",
            name: "Unusual inactivity detection",
            x: 1780,
            y: 760,
            what: "An example of the camera noticing a person has not moved for an unusually long time.",
            role: "Lets family check in early, even when no fall has been seen.",
          },
        ],
      },
    ],
  },
  {
    id: "bracelet",
    tab: "Smart bracelet",
    icon: "M7 3h10v18H7zM9 12h2l1-2 1 4 1-2h1",
    title: "E-Guard smart bracelet",
    summary: "Explore the parts inside the wearable that collects health readings.",
    views: [
      {
        id: "wrist",
        label: "On the wrist",
        src: braceletWrist.url,
        alt: "Exploded view of the E-Guard smart bracelet next to the assembled bracelet worn on a wrist",
        width: 1680,
        height: 944,
        hotspots: braceletParts({ x: 1440, y: 492 }),
      },
      {
        id: "product",
        label: "Product view",
        src: braceletProduct.url,
        alt: "Exploded view of the E-Guard smart bracelet next to the assembled bracelet",
        width: 1680,
        height: 944,
        hotspots: braceletParts({ x: 1572, y: 468 }),
      },
    ],
  },
  {
    id: "architecture",
    tab: "System architecture",
    icon: "M4 5h6v6H4zM14 5h6v6h-6zM9 18h6M7 11v4h10v-4M12 15v3",
    title: "How the whole system connects",
    summary: "Follow the data from the devices at home to the people who need to know.",
    views: [
      {
        id: "overview",
        label: "Overview",
        src: systemArchitecture.url,
        alt: "E-Guard system architecture: bracelet and camera, Wi-Fi and Bluetooth, backend and AI processing, database and emergency management, mobile apps, and elderly users and guardians, with alert types below",
        width: 1920,
        height: 1080,
        hotspots: [
          {
            id: "bracelet",
            name: "Smart bracelet",
            x: 122,
            y: 335,
            what: "The wearable that handles heart rate monitoring and motion sensing with its accelerometer and gyroscope.",
            role: "Feeds health readings and fall detection data into the system.",
          },
          {
            id: "camera",
            name: "AI monitoring camera",
            x: 126,
            y: 548,
            what: "The room camera for video capture and AI processing.",
            role: "Recognises human activity and helps detect falls and abnormal inactivity.",
          },
          {
            id: "comms",
            name: "Wi-Fi / Bluetooth",
            x: 548,
            y: 400,
            what: "The wireless links that connect the devices.",
            role: "Carry readings and camera events from the home to the backend.",
          },
          {
            id: "backend",
            name: "ASP.NET backend server",
            x: 772,
            y: 307,
            what: "The central server of E-Guard.",
            role: "Handles API management, authentication, emergency event processing, the database and notification management.",
          },
          {
            id: "ai",
            name: "AI layer",
            x: 772,
            y: 537,
            what: "The intelligence part of the backend, built on a computer vision model.",
            role: "Performs human activity recognition, fall detection and abnormal behaviour detection.",
          },
          {
            id: "datacenter",
            name: "Database & emergency management",
            x: 1176,
            y: 385,
            what: "Where system data is stored and emergency events are managed.",
            role: "Keeps records and coordinates what happens once an emergency is detected.",
          },
          {
            id: "elderly-app",
            name: "Elderly user app",
            x: 1396,
            y: 318,
            what: "The E-Guard mobile app for the elderly person.",
            role: "Shows personal readings and notifications and gives access to emergency help options.",
          },
          {
            id: "family-app",
            name: "Guardian / family app",
            x: 1396,
            y: 528,
            what: "The E-Guard mobile app for family members and guardians.",
            role: "Receives warning and emergency alerts and shows readings according to permissions.",
          },
          {
            id: "people",
            name: "Elderly user & guardians",
            x: 1745,
            y: 445,
            what: "The people E-Guard is built for: the elderly person and the family looking after them.",
            role: "Stay informed and can respond quickly when the system flags a possible problem.",
          },
          {
            id: "alerts",
            name: "Alert types",
            x: 850,
            y: 793,
            what: "Emergency alerts, fall detection notifications, abnormal heart rate alerts, excessive inactivity alerts and device disconnection alerts.",
            role: "Make sure the right people know quickly when something needs attention.",
          },
          {
            id: "safeguards",
            name: "Built-in safeguards",
            x: 763,
            y: 1000,
            what: "Secure data transmission, hardware status monitoring and emergency confirmation.",
            role: "Protect data, flag device problems and confirm emergencies before they escalate.",
          },
        ],
      },
    ],
  },
];
