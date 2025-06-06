export const convertToFormattedDate = (isoDate: string) => {

	return new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric'
	}).format(new Date(isoDate));

}