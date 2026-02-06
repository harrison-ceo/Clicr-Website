
import { create } from 'zustand';

export type DemoEvent = {
    id: string;
    type: 'ENTRY' | 'EXIT' | 'SCAN_ACCEPTED' | 'SCAN_DENIED' | 'SCAN_BANNED';
    timestamp: Date;
    details?: string;
};

export type DemographicBucket = {
    label: string;
    count: number;
};

export type DemoState = {
    // Occupancy
    occupancy: number;
    totalIn: number;
    totalOut: number;

    // Scans
    scansTotal: number;
    scansAccepted: number;
    scansDenied: number;
    bannedHits: number;

    // Data
    eventLog: DemoEvent[];
    ageBuckets: DemographicBucket[];
    genderSplit: { male: number; female: number; other: number };

    // Actions
    incrementOccupancy: () => void;
    decrementOccupancy: () => void;
    recordScan: (result: 'ACCEPTED' | 'DENIED' | 'BANNED', details?: string) => void;
    resetDemo: () => void;
};

// Seed realistic initial data
const INITIAL_AGE_BUCKETS = [
    { label: '18-20', count: 12 },
    { label: '21-25', count: 45 },
    { label: '26-30', count: 32 },
    { label: '31-40', count: 18 },
    { label: '40+', count: 8 },
];

export const useDemoStore = create<DemoState>((set) => ({
    occupancy: 42,
    totalIn: 156,
    totalOut: 114,

    scansTotal: 165,
    scansAccepted: 156,
    scansDenied: 8,
    bannedHits: 1,

    eventLog: [],
    ageBuckets: INITIAL_AGE_BUCKETS,
    genderSplit: { male: 85, female: 70, other: 1 },

    incrementOccupancy: () => set((state) => {
        const newLog: DemoEvent = {
            id: Math.random().toString(36),
            type: 'ENTRY',
            timestamp: new Date(),
        };
        return {
            occupancy: state.occupancy + 1,
            totalIn: state.totalIn + 1,
            eventLog: [newLog, ...state.eventLog].slice(0, 50)
        };
    }),

    decrementOccupancy: () => set((state) => {
        const newOcc = Math.max(0, state.occupancy - 1);
        const newLog: DemoEvent = {
            id: Math.random().toString(36),
            type: 'EXIT',
            timestamp: new Date(),
        };
        return {
            occupancy: newOcc,
            totalOut: state.totalOut + 1,
            eventLog: [newLog, ...state.eventLog].slice(0, 50)
        };
    }),

    recordScan: (result, details) => set((state) => {
        let type: DemoEvent['type'] = 'SCAN_ACCEPTED';
        if (result === 'DENIED') type = 'SCAN_DENIED';
        if (result === 'BANNED') type = 'SCAN_BANNED';

        const newLog: DemoEvent = {
            id: Math.random().toString(36),
            type,
            timestamp: new Date(),
            details
        };

        // Update Demographics randomly if Accepted
        let newAgeBuckets = [...state.ageBuckets];
        let newGenderSplit = { ...state.genderSplit };

        if (result === 'ACCEPTED') {
            // Randomly increment an age bucket
            const bucketIndex = Math.floor(Math.random() * newAgeBuckets.length);
            newAgeBuckets[bucketIndex] = {
                ...newAgeBuckets[bucketIndex],
                count: newAgeBuckets[bucketIndex].count + 1
            };

            // Randomly increment gender (mostly split)
            if (Math.random() > 0.5) newGenderSplit.male++;
            else newGenderSplit.female++;
        }

        return {
            scansTotal: state.scansTotal + 1,
            scansAccepted: result === 'ACCEPTED' ? state.scansAccepted + 1 : state.scansAccepted,
            scansDenied: result === 'DENIED' ? state.scansDenied + 1 : state.scansDenied,
            bannedHits: result === 'BANNED' ? state.bannedHits + 1 : state.bannedHits,
            eventLog: [newLog, ...state.eventLog].slice(0, 50),
            ageBuckets: newAgeBuckets,
            genderSplit: newGenderSplit
        };
    }),

    resetDemo: () => set({
        occupancy: 0,
        totalIn: 0,
        totalOut: 0,
        scansTotal: 0,
        scansAccepted: 0,
        scansDenied: 0,
        bannedHits: 0,
        eventLog: [],
        ageBuckets: INITIAL_AGE_BUCKETS.map(b => ({ ...b, count: 0 })),
        genderSplit: { male: 0, female: 0, other: 0 }
    }),
}));
