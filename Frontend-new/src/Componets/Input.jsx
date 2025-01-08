const Input = ({ icon: Icon, label, ...props }) => {
	return (
		<div className='relative mb-2'>
			{label && (
				<label className='block mb-2 text-start text-sm font-medium  text-gray-700'>
					{label}
				</label>
			)}
			<div className='relative'>
				<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
					<Icon className='size-5 text-Spiro-blue-500' />
				</div>
				<input
					{...props}
					className='w-full pl-10 pr-3 py-2 bg-transparent bg-opacity-50 rounded-lg border border-gray-700 text-white focus:border-Spiro-blue-500 focus:ring-2 focus:ring-Spito-blue-500 text-grey placeholder-white transition duration-200'
				/>
			</div>
		</div>
	);
};

export default Input;
