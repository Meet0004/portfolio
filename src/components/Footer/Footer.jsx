import React from 'react';
import TechStack from './TechStack';
import SocialLinks from './SocialLinks';
import Resume from './Resume';

const Index = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <TechStack />
                    <div className="flex flex-col items-center md:items-end space-y-3">
                        <SocialLinks />
                        <Resume />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Index;
