export interface Project {
  id: string;
  slug: string;
  name: string;
  location: string;
  feedstock_type: string;
  capacity_tons_per_day: number;
  energy_output_kw: number;
  co2_offset_tons_per_year: number;
  status: "operational" | "in-progress" | "planned";
  hero_image: string;
  gallery: string[];
  summary: string;
  full_description: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "munich-agri-waste",
    name: "Bavaria BioEnergy Hub",
    location: "Munich, Germany",
    feedstock_type: "Agricultural Waste",
    capacity_tons_per_day: 450,
    energy_output_kw: 2500,
    co2_offset_tons_per_year: 12500,
    status: "operational",
    hero_image: "/images/projects/placeholder.jpg",
    gallery: [
      "/images/projects/placeholder.jpg",
      "/images/projects/placeholder.jpg"
    ],
    summary: "Converting regional agricultural runoff into clean grid energy.",
    full_description: "The Bavaria BioEnergy Hub is a flagship facility processing agricultural waste from over 50 local farms. By capturing methane that would otherwise enter the atmosphere, the plant provides baseload renewable electricity to 4,000 households."
  },
  {
    id: "2",
    slug: "copenhagen-food-waste",
    name: "Nordic Urban Digester",
    location: "Copenhagen, Denmark",
    feedstock_type: "Municipal Food Waste",
    capacity_tons_per_day: 200,
    energy_output_kw: 1200,
    co2_offset_tons_per_year: 8000,
    status: "operational",
    hero_image: "/images/projects/placeholder.jpg",
    gallery: [
      "/images/projects/placeholder.jpg"
    ],
    summary: "Processing urban organic waste to heat homes in the capital district.",
    full_description: "Integrated directly into Copenhagen's municipal waste management system, this digester diverts food waste from landfills. The resulting biomethane is injected directly into the city's district heating network."
  },
  {
    id: "3",
    slug: "valencia-wastewater",
    name: "Costa Blanca Sludge Recovery",
    location: "Valencia, Spain",
    feedstock_type: "Wastewater Sludge",
    capacity_tons_per_day: 600,
    energy_output_kw: 3000,
    co2_offset_tons_per_year: 18000,
    status: "in-progress",
    hero_image: "/images/projects/placeholder.jpg",
    gallery: [
      "/images/projects/placeholder.jpg",
      "/images/projects/placeholder.jpg",
      "/images/projects/placeholder.jpg"
    ],
    summary: "Upgrading a major municipal water treatment plant to be energy-positive.",
    full_description: "Currently under construction, this expansion will capture biogas from municipal wastewater treatment. Once operational, the plant will not only power its own operations but export surplus electricity to the grid."
  },
  {
    id: "4",
    slug: "midwest-dairy-biogas",
    name: "Heartland Dairy Renewables",
    location: "Wisconsin, USA",
    feedstock_type: "Manure",
    capacity_tons_per_day: 800,
    energy_output_kw: 4500,
    co2_offset_tons_per_year: 25000,
    status: "planned",
    hero_image: "/images/projects/placeholder.jpg",
    gallery: [],
    summary: "Large-scale dairy manure management producing renewable natural gas (RNG).",
    full_description: "In the final permitting phase, this project aggregates manure from several mega-dairies. The facility will upgrade the biogas to pipeline-quality Renewable Natural Gas, replacing fossil fuels in heavy transport."
  }
];
