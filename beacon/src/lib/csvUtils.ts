import Papa from 'papaparse';

export async function parseCSV(filePath: string) {
	return new Promise<any[]>((resolve, reject) => {
		Papa.parse(filePath, {
			download: true,
			header: true,
			complete: (result) => {
				resolve(result.data);
			},
			error: (error) => {
				reject(error);
			}
		});
	});
}
