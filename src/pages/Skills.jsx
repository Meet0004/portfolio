import React from 'react';
import { Code, ExternalLink, Brain, Zap } from 'lucide-react';
import SkillCategory from '../components/Skills/SkillCategory';

const Skills = () => {
	return (
		<div id='skills'  className="min-h-screen bg-gradient-to-br px-8 py-15  text-white relative overflow-hidden"  style={{
    backgroundImage: `linear-gradient(
      to bottom right,
      #010517,
      #040d35,
      #0c1a47,
      #010517,
      #010517
    )`
  }}>
			{/* Background Effect */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

			<h2 className="text-6xl font-bold text-center mb-12 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
				Technical Skills
			</h2>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<SkillCategory
					icon={<Code className="w-6 h-6 mr-3" />}
					title="Programming Languages"
					textColor="text-purple-300"
					skills={[
						{ name: 'Python', level: 'Advanced', percent: '90%', color: 'text-green-400', gradient: 'from-green-400 to-green-500' },
						{ name: 'JavaScript', level: 'Advanced', percent: '85%', color: 'text-green-400', gradient: 'from-green-400 to-green-500' },
						{ name: 'TypeScript', level: 'Intermediate', percent: '70%', color: 'text-blue-400', gradient: 'from-blue-400 to-blue-500' },
						{ name: 'Java', level: 'Intermediate', percent: '65%', color: 'text-blue-400', gradient: 'from-blue-400 to-blue-500' },
						{ name: 'C++', level: 'Beginner', percent: '40%', color: 'text-yellow-400', gradient: 'from-yellow-400 to-yellow-500' },
						{ name: 'C#', level: 'Beginner', percent: '35%', color: 'text-yellow-400', gradient: 'from-yellow-400 to-yellow-500' },
					]}
				/>

				<SkillCategory
					icon={<ExternalLink className="w-6 h-6 mr-3" />}
					title="Web Development"
					textColor="text-pink-300"
					skills={[
						{ name: 'Node.js', level: 'Advanced', percent: '90%', color: 'text-green-400', gradient: 'from-green-400 to-green-500' },
						{ name: 'Express.js', level: 'Advanced', percent: '85%', color: 'text-green-400', gradient: 'from-green-400 to-green-500' },
						{ name: 'React.js', level: 'Intermediate', percent: '75%', color: 'text-blue-400', gradient: 'from-blue-400 to-blue-500' },
						{ name: 'Tailwind CSS', level: 'Intermediate', percent: '70%', color: 'text-blue-400', gradient: 'from-blue-400 to-blue-500' },
						{ name: 'Electron.js', level: 'Intermediate', percent: '65%', color: 'text-blue-400', gradient: 'from-blue-400 to-blue-500' },
						{ name: 'HTML/CSS', level: 'Intermediate', percent: '68%', color: 'text-blue-400', gradient: 'from-blue-400 to-blue-500' },
						{ name: 'SASS', level: 'Beginner', percent: '40%', color: 'text-yellow-400', gradient: 'from-yellow-400 to-yellow-500' },
					]}
				/>

				<SkillCategory
					icon={<Brain className="w-6 h-6 mr-3" />}
					title="Database Management"
					textColor="text-cyan-300"
					skills={[
						{ name: 'SQL', level: 'Advanced', percent: '85%', color: 'text-green-400', gradient: 'from-green-400 to-green-500' },
						{ name: 'MongoDB', level: 'Intermediate', percent: '70%', color: 'text-blue-400', gradient: 'from-blue-400 to-blue-500' },
						{ name: 'PyMongo', level: 'Intermediate', percent: '65%', color: 'text-blue-400', gradient: 'from-blue-400 to-blue-500' },
					]}
				/>

				<SkillCategory
					icon={<Zap className="w-6 h-6 mr-3" />}
					title="Tools & Technologies"
					textColor="text-orange-300"
					skills={[
						{ name: 'Socket.io', level: 'Proficient', percent: '80%', color: 'text-green-400', gradient: 'from-green-400 to-green-500' },
						{ name: 'WebRTC', level: 'Proficient', percent: '75%', color: 'text-green-400', gradient: 'from-green-400 to-green-500' },
					]}
				/>
			</div>
		</div>
	);
};

export default Skills;
