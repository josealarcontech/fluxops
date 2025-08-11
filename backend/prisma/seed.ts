import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Users
  await prisma.user.createMany({
    data: [
      { id: 1, email: 'admin@example.com', name: 'Admin User', role: 'ADMIN' },
      { id: 2, email: 'tech1@example.com', name: 'Technician One', role: 'TECHNICIAN' },
      { id: 3, email: 'agent1@example.com', name: 'Agent One', role: 'AGENT' },
    ],
    skipDuplicates: true,
  });

  // Seed Clients
  await prisma.client.createMany({
    data: [
      { id: 1, name: 'Client A', phone: '123-456-7890', email: 'clienta@example.com' },
      { id: 2, name: 'Client B', phone: '987-654-3210', email: 'clientb@example.com' },
    ],
    skipDuplicates: true,
  });

  // Seed Jobs
  await prisma.job.createMany({
    data: [
      {
        id: 1,
        title: 'Fix HVAC',
        clientId: 1,
        technicianId: 2,
        scheduledAt: new Date('2025-08-15T09:00:00Z'),
        status: 'SCHEDULED',
        notes: 'Replace filters and check compressor',
      },
      {
        id: 2,
        title: 'Install Lighting',
        clientId: 2,
        technicianId: 3,
        scheduledAt: new Date('2025-08-16T13:00:00Z'),
        status: 'PENDING',
        notes: 'Install new LED lights in conference room',
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
