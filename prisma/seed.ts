import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Start seeding ...')

    // 1. Create Business
    const business = await prisma.business.create({
        data: {
            name: 'Anti Gravity Nightlife',
            timezone: 'America/New_York',
            settings: JSON.stringify({ refreshInterval: 5, capacityThreshold: 0.9 }),
        },
    })
    console.log(`Created business with id: ${business.id}`)

    // 2. Create Venue
    const venue = await prisma.venue.create({
        data: {
            businessId: business.id,
            name: 'The Nebula Club',
            address: '123 Galaxy Lane',
            capacityLimit: 500,
        },
    })
    console.log(`Created venue with id: ${venue.id}`)

    // 3. Create Areas
    const mainFloor = await prisma.area.create({
        data: {
            venueId: venue.id,
            name: 'Main Floor',
            capacityLimit: 400,
        },
    })

    const vipLounge = await prisma.area.create({
        data: {
            venueId: venue.id,
            name: 'VIP Lounge',
            capacityLimit: 100,
        },
    })

    // 4. Create Clicrs
    await prisma.clicr.create({
        data: {
            areaId: mainFloor.id,
            name: 'Main Entrance',
            flowMode: 'IN_ONLY',
        },
    })

    await prisma.clicr.create({
        data: {
            areaId: mainFloor.id,
            name: 'Side Exit',
            flowMode: 'OUT_ONLY',
        },
    })

    await prisma.clicr.create({
        data: {
            areaId: vipLounge.id,
            name: 'VIP Rope',
            flowMode: 'BIDIRECTIONAL',
        },
    })

    // 5. Create User (Owner)
    const owner = await prisma.user.create({
        data: {
            businessId: business.id,
            email: 'owner@antigravity.com',
            name: 'Harrison Owner',
            role: 'OWNER',
            password: 'hashed_password_placeholder', // In real app, hash this
        },
    })
    console.log(`Created user: ${owner.email}`)

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
