import React from 'react';
interface ResourceFiltersProps {
  selectedSubject: string;
  selectedGrade: string;
  selectedType: string;
  sortBy: string;
  onSubjectChange: (value: string) => void;
  onGradeChange: (value: string) => void;
  onTypeChange: (value: string) => void;
  onSortChange: (value: string) => void;
}
const ResourceFilters: React.FC<ResourceFiltersProps> = ({
  selectedSubject,
  selectedGrade,
  selectedType,
  sortBy,
  onSubjectChange,
  onGradeChange,
  onTypeChange,
  onSortChange
}) => {
  return (
    <div className="flex gap-2">
      <select
        value={selectedSubject}
        onChange={(e) => onSubjectChange(e.target.value)}
        className="block w-40 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg">
        
        <option value="">All Subjects</option>
        <option value="mathematics">Mathematics</option>
        <option value="physics">Physics</option>
        <option value="chemistry">Chemistry</option>
        <option value="biology">Biology</option>
      </select>
      <select
        value={selectedGrade}
        onChange={(e) => onGradeChange(e.target.value)}
        className="block w-32 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg">
        
        <option value="">All Grades</option>
        <option value="S1">S1</option>
        <option value="S2">S2</option>
        <option value="S3">S3</option>
        <option value="S4">S4</option>
      </select>
      <select
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value)}
        className="block w-40 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg">
        
        <option value="">All Types</option>
        <option value="notes">Notes</option>
        <option value="past_paper">Past Papers</option>
        <option value="ebook">E-Books</option>
        <option value="worksheet">Worksheets</option>
      </select>
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="block w-40 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg">
        
        <option value="popular">Most Popular</option>
        <option value="recent">Recently Added</option>
        <option value="rating">Highest Rated</option>
        <option value="downloads">Most Downloads</option>
      </select>
    </div>);

};
export default ResourceFilters;