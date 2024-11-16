import React from "react";

const Pagination: React.FC<{ currentPage: number; onPageChange: (page: number) => void }> = ({
	currentPage,
	onPageChange,
}) => {
	return (
		<div className='flex justify-center space-x-4 mt-4'>
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className='px-4 py-2 bg-gray-200 rounded shadow hover:bg-gray-300 disabled:opacity-50'>
				Previous
			</button>
			<span className='px-4 py-2'>{currentPage}</span>
			<button
				onClick={() => onPageChange(currentPage + 1)}
				className='px-4 py-2 bg-gray-200 rounded shadow hover:bg-gray-300'>
				Next
			</button>
		</div>
	);
};

export default Pagination;
