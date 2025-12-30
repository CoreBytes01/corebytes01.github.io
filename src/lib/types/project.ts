export interface PrivacySection {
    title: string;
    content: string;
}

export interface PrivacyPolicy {
    lastUpdated: string;
    sections: PrivacySection[];
}

export interface Project {
    id: number;
    slug: string;
    name: string;
    year: number;
    description: string;
    detailedDescription?: string;
    category: string;
    status: 'Active' | 'In Development' | 'Archived';
    logo?: string;
    screenshots?: string[];
    features?: string[];
    subDescription?: string[];
    github?: string;
    playstore?: string;
    website?: string;
    privacyPolicy?: PrivacyPolicy;
}
