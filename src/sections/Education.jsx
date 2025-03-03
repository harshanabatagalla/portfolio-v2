import React from 'react';
import { educationData, certifications } from '../utils/data';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <div className="h-full p-6 overflow-auto font-[JetBrains_Mono]">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <GraduationCap size={24} className="text-[#007ACC] mr-2" />
                Education
            </h2>

            <div className="space-y-8">
                {educationData.map((education) => (
                    <div key={education.id} className="bg-[#2D2D2D] rounded-lg p-6 border-l-4 border-[#007ACC]">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                            <div>
                                <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
                                <p className="text-[#007ACC]">{education.institution}</p>
                            </div>
                            <span className="text-gray-400 mt-2 md:mt-0">{education.duration}</span>
                        </div>

                        <p className="text-gray-300">{education.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((certification) => (
                        <div key={certification.id} className="bg-[#252526] p-4 rounded-lg border border-[#333333] cursor-pointer hover:bg-[#333333] transition-colors duration-300" onClick={() => window.open(certification.link, '_blank')}>
                            <h4 className="text-lg font-medium text-white">{certification.title}</h4>
                            <p className="text-gray-400">{certification.organization} • {certification.year}</p>
                        </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Education;