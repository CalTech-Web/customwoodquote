import { join } from 'path';
import { PrismaClient } from '../app/generated/prisma';

// Use absolute path for SQLite database
const dbPath = join(__dirname, '..', 'prisma', 'dev.db');
process.env.DATABASE_URL = `file:${dbPath}`;

console.log('📍 Database path:', dbPath);

const prisma = new PrismaClient();

interface MaterialData {
  category: string;
  name: string;
  species?: string;
  grade?: string;
  unit: string;
  pricePerUnit: number;
  supplier?: string;
}

async function main() {
  console.log('🌱 Seeding database with material pricing data...');

  // Hardwoods - 30 species
  const hardwoods: MaterialData[] = [
    // Premium hardwoods
    { category: 'lumber', name: 'White Oak', species: 'White Oak', grade: 'FAS', unit: 'board foot', pricePerUnit: 8.50 },
    { category: 'lumber', name: 'White Oak', species: 'White Oak', grade: '#1 Common', unit: 'board foot', pricePerUnit: 6.20 },
    { category: 'lumber', name: 'Red Oak', species: 'Red Oak', grade: 'FAS', unit: 'board foot', pricePerUnit: 7.80 },
    { category: 'lumber', name: 'Red Oak', species: 'Red Oak', grade: '#1 Common', unit: 'board foot', pricePerUnit: 5.90 },
    { category: 'lumber', name: 'Hard Maple', species: 'Hard Maple', grade: 'FAS', unit: 'board foot', pricePerUnit: 9.20 },
    { category: 'lumber', name: 'Hard Maple', species: 'Hard Maple', grade: '#1 Common', unit: 'board foot', pricePerUnit: 7.10 },
    { category: 'lumber', name: 'Cherry', species: 'Cherry', grade: 'FAS', unit: 'board foot', pricePerUnit: 11.50 },
    { category: 'lumber', name: 'Cherry', species: 'Cherry', grade: '#1 Common', unit: 'board foot', pricePerUnit: 8.80 },
    { category: 'lumber', name: 'Walnut', species: 'Walnut', grade: 'FAS', unit: 'board foot', pricePerUnit: 14.80 },
    { category: 'lumber', name: 'Walnut', species: 'Walnut', grade: '#1 Common', unit: 'board foot', pricePerUnit: 11.20 },

    // Common hardwoods
    { category: 'lumber', name: 'Ash', species: 'Ash', grade: 'FAS', unit: 'board foot', pricePerUnit: 7.50 },
    { category: 'lumber', name: 'Hickory', species: 'Hickory', grade: 'FAS', unit: 'board foot', pricePerUnit: 8.90 },
    { category: 'lumber', name: 'Birch', species: 'Birch', grade: 'FAS', unit: 'board foot', pricePerUnit: 6.80 },
    { category: 'lumber', name: 'Mahogany', species: 'Mahogany', grade: 'FAS', unit: 'board foot', pricePerUnit: 16.20 },
    { category: 'lumber', name: 'Poplar', species: 'Poplar', grade: 'FAS', unit: 'board foot', pricePerUnit: 5.40 },
    { category: 'lumber', name: 'Poplar', species: 'Poplar', grade: '#1 Common', unit: 'board foot', pricePerUnit: 4.20 },

    // Additional hardwoods
    { category: 'lumber', name: 'Beech', species: 'Beech', grade: 'FAS', unit: 'board foot', pricePerUnit: 6.50 },
    { category: 'lumber', name: 'Alder', species: 'Alder', grade: 'FAS', unit: 'board foot', pricePerUnit: 5.80 },
    { category: 'lumber', name: 'Basswood', species: 'Basswood', grade: 'FAS', unit: 'board foot', pricePerUnit: 5.20 },
    { category: 'lumber', name: 'Butternut', species: 'Butternut', grade: 'FAS', unit: 'board foot', pricePerUnit: 9.80 },
    { category: 'lumber', name: 'Sycamore', species: 'Sycamore', grade: 'FAS', unit: 'board foot', pricePerUnit: 6.90 },
    { category: 'lumber', name: 'Elm', species: 'Elm', grade: 'FAS', unit: 'board foot', pricePerUnit: 7.20 },
    { category: 'lumber', name: 'Cypress', species: 'Cypress', grade: 'FAS', unit: 'board foot', pricePerUnit: 6.40 },
    { category: 'lumber', name: 'Chestnut', species: 'Chestnut', grade: 'FAS', unit: 'board foot', pricePerUnit: 12.50 },
    { category: 'lumber', name: 'Teak', species: 'Teak', grade: 'FAS', unit: 'board foot', pricePerUnit: 28.50 },
    { category: 'lumber', name: 'Rosewood', species: 'Rosewood', grade: 'FAS', unit: 'board foot', pricePerUnit: 35.00 },
    { category: 'lumber', name: 'Sapele', species: 'Sapele', grade: 'FAS', unit: 'board foot', pricePerUnit: 14.80 },
    { category: 'lumber', name: 'Padauk', species: 'Padauk', grade: 'FAS', unit: 'board foot', pricePerUnit: 18.50 },
    { category: 'lumber', name: 'Purpleheart', species: 'Purpleheart', grade: 'FAS', unit: 'board foot', pricePerUnit: 16.90 },
    { category: 'lumber', name: 'Zebrawood', species: 'Zebrawood', grade: 'FAS', unit: 'board foot', pricePerUnit: 22.50 },
  ];

  // Softwoods - 10 species
  const softwoods: MaterialData[] = [
    { category: 'lumber', name: 'Pine', species: 'Pine', grade: '#2 & Better', unit: 'board foot', pricePerUnit: 3.20 },
    { category: 'lumber', name: 'Pine', species: 'Pine', grade: 'Select', unit: 'board foot', pricePerUnit: 4.50 },
    { category: 'lumber', name: 'Cedar', species: 'Cedar', grade: 'Clear', unit: 'board foot', pricePerUnit: 6.50 },
    { category: 'lumber', name: 'Cedar', species: 'Cedar', grade: '#2', unit: 'board foot', pricePerUnit: 4.80 },
    { category: 'lumber', name: 'Douglas Fir', species: 'Douglas Fir', grade: 'Select', unit: 'board foot', pricePerUnit: 4.10 },
    { category: 'lumber', name: 'Spruce', species: 'Spruce', grade: '#2 & Better', unit: 'board foot', pricePerUnit: 3.80 },
    { category: 'lumber', name: 'Hemlock', species: 'Hemlock', grade: '#2', unit: 'board foot', pricePerUnit: 3.50 },
    { category: 'lumber', name: 'Redwood', species: 'Redwood', grade: 'Clear', unit: 'board foot', pricePerUnit: 9.20 },
    { category: 'lumber', name: 'Western Red Cedar', species: 'Western Red Cedar', grade: 'Clear', unit: 'board foot', pricePerUnit: 7.80 },
    { category: 'lumber', name: 'Southern Yellow Pine', species: 'Southern Yellow Pine', grade: '#2', unit: 'board foot', pricePerUnit: 3.40 },
  ];

  // Sheet goods
  const sheetGoods: MaterialData[] = [
    { category: 'plywood', name: 'Baltic Birch Plywood', grade: '3/4"', unit: 'sheet', pricePerUnit: 68.00 },
    { category: 'plywood', name: 'Baltic Birch Plywood', grade: '1/2"', unit: 'sheet', pricePerUnit: 52.00 },
    { category: 'plywood', name: 'Baltic Birch Plywood', grade: '1/4"', unit: 'sheet', pricePerUnit: 38.00 },
    { category: 'plywood', name: 'MDF', grade: '3/4"', unit: 'sheet', pricePerUnit: 38.00 },
    { category: 'plywood', name: 'MDF', grade: '1/2"', unit: 'sheet', pricePerUnit: 28.00 },
    { category: 'plywood', name: 'Melamine', grade: '3/4"', unit: 'sheet', pricePerUnit: 45.00 },
    { category: 'plywood', name: 'Oak Plywood', grade: '3/4"', unit: 'sheet', pricePerUnit: 72.00 },
    { category: 'plywood', name: 'Maple Plywood', grade: '3/4"', unit: 'sheet', pricePerUnit: 78.00 },
    { category: 'plywood', name: 'Cherry Plywood', grade: '3/4"', unit: 'sheet', pricePerUnit: 85.00 },
    { category: 'plywood', name: 'Walnut Plywood', grade: '3/4"', unit: 'sheet', pricePerUnit: 95.00 },
  ];

  // Hardware catalog
  const hardware: MaterialData[] = [
    { category: 'hardware', name: 'Blum Soft-Close Hinges', unit: 'pair', pricePerUnit: 4.50, supplier: 'Blum' },
    { category: 'hardware', name: 'Undermount Drawer Slides', grade: '18"', unit: 'pair', pricePerUnit: 18.00, supplier: 'Blum' },
    { category: 'hardware', name: 'Undermount Drawer Slides', grade: '21"', unit: 'pair', pricePerUnit: 22.00, supplier: 'Blum' },
    { category: 'hardware', name: 'Undermount Drawer Slides', grade: '24"', unit: 'pair', pricePerUnit: 26.00, supplier: 'Blum' },
    { category: 'hardware', name: 'Euro-Style Hinges', unit: 'each', pricePerUnit: 2.80 },
    { category: 'hardware', name: 'Cabinet Knobs', grade: 'Basic', unit: 'each', pricePerUnit: 3.00 },
    { category: 'hardware', name: 'Cabinet Knobs', grade: 'Premium', unit: 'each', pricePerUnit: 12.00 },
    { category: 'hardware', name: 'Cabinet Pulls', grade: 'Basic', unit: 'each', pricePerUnit: 5.00 },
    { category: 'hardware', name: 'Cabinet Pulls', grade: 'Premium', unit: 'each', pricePerUnit: 18.00 },
    { category: 'hardware', name: 'Shelf Pins', unit: 'each', pricePerUnit: 0.25 },
    { category: 'hardware', name: 'Table Leg Levelers', unit: 'each', pricePerUnit: 2.50 },
    { category: 'hardware', name: 'Drawer Locks', unit: 'each', pricePerUnit: 8.50 },
    { category: 'hardware', name: 'Concealed Door Hinges', unit: 'pair', pricePerUnit: 6.20 },
    { category: 'hardware', name: 'Magnetic Catches', unit: 'each', pricePerUnit: 1.80 },
  ];

  // Finishes
  const finishes: MaterialData[] = [
    { category: 'finish', name: 'Danish Oil', unit: 'quart', pricePerUnit: 18.00, species: '150 sqft coverage' },
    { category: 'finish', name: 'Lacquer', grade: 'Satin', unit: 'quart', pricePerUnit: 28.00, species: '200 sqft coverage' },
    { category: 'finish', name: 'Lacquer', grade: 'Gloss', unit: 'quart', pricePerUnit: 28.00, species: '200 sqft coverage' },
    { category: 'finish', name: 'Polyurethane', grade: 'Satin', unit: 'quart', pricePerUnit: 22.00, species: '180 sqft coverage' },
    { category: 'finish', name: 'Polyurethane', grade: 'Gloss', unit: 'quart', pricePerUnit: 22.00, species: '180 sqft coverage' },
    { category: 'finish', name: 'Paste Wax', unit: 'pint', pricePerUnit: 14.00, species: '100 sqft coverage' },
    { category: 'finish', name: 'Tung Oil', unit: 'quart', pricePerUnit: 24.00, species: '160 sqft coverage' },
    { category: 'finish', name: 'Wood Stain', grade: 'Oil-Based', unit: 'quart', pricePerUnit: 16.00, species: '120 sqft coverage' },
    { category: 'finish', name: 'Wood Stain', grade: 'Water-Based', unit: 'quart', pricePerUnit: 18.00, species: '120 sqft coverage' },
    { category: 'finish', name: 'Shellac', unit: 'quart', pricePerUnit: 20.00, species: '150 sqft coverage' },
  ];

  // Consumables
  const consumables: MaterialData[] = [
    { category: 'other', name: 'Sandpaper', grade: '80 Grit', unit: 'sheet', pricePerUnit: 0.50 },
    { category: 'other', name: 'Sandpaper', grade: '120 Grit', unit: 'sheet', pricePerUnit: 0.50 },
    { category: 'other', name: 'Sandpaper', grade: '220 Grit', unit: 'sheet', pricePerUnit: 0.50 },
    { category: 'other', name: 'Wood Glue', grade: 'Titebond II', unit: 'quart', pricePerUnit: 12.00 },
    { category: 'other', name: 'Wood Glue', grade: 'Titebond III', unit: 'quart', pricePerUnit: 14.00 },
    { category: 'other', name: 'Screws', grade: '#8 x 1-1/4"', unit: 'pound', pricePerUnit: 8.00 },
    { category: 'other', name: 'Screws', grade: '#8 x 2"', unit: 'pound', pricePerUnit: 8.50 },
    { category: 'other', name: 'Wood Biscuits', grade: '#0', unit: '100-pack', pricePerUnit: 15.00 },
    { category: 'other', name: 'Wood Biscuits', grade: '#10', unit: '100-pack', pricePerUnit: 15.00 },
    { category: 'other', name: 'Wood Biscuits', grade: '#20', unit: '100-pack', pricePerUnit: 15.00 },
    { category: 'other', name: 'Brad Nails', grade: '18ga x 1"', unit: 'box', pricePerUnit: 10.00 },
    { category: 'other', name: 'Mineral Spirits', unit: 'quart', pricePerUnit: 8.50 },
    { category: 'other', name: 'Wood Filler', unit: 'pint', pricePerUnit: 9.00 },
  ];

  // Combine all materials
  const allMaterials = [
    ...hardwoods,
    ...softwoods,
    ...sheetGoods,
    ...hardware,
    ...finishes,
    ...consumables,
  ];

  // Insert all materials as system defaults (userId=null)
  console.log(`📦 Inserting ${allMaterials.length} material price records...`);

  for (const material of allMaterials) {
    await prisma.materialPrice.create({
      data: {
        userId: null, // System default
        category: material.category,
        name: material.name,
        species: material.species,
        grade: material.grade,
        unit: material.unit,
        pricePerUnit: material.pricePerUnit,
        supplier: material.supplier,
        lastUpdated: new Date(),
      },
    });
  }

  console.log('✅ Database seeding completed successfully!');
  console.log(`   - ${hardwoods.length} hardwood species`);
  console.log(`   - ${softwoods.length} softwood species`);
  console.log(`   - ${sheetGoods.length} sheet good items`);
  console.log(`   - ${hardware.length} hardware items`);
  console.log(`   - ${finishes.length} finish products`);
  console.log(`   - ${consumables.length} consumable items`);
  console.log(`   Total: ${allMaterials.length} material price records`);
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
