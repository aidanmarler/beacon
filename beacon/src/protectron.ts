// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const protectron: CustomThemeConfig = {
	name: 'protectron',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '8px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '4px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #ffffff
		'--color-primary-50': '255 255 255', // #ffffff
		'--color-primary-100': '255 255 255', // #ffffff
		'--color-primary-200': '255 255 255', // #ffffff
		'--color-primary-300': '255 255 255', // #ffffff
		'--color-primary-400': '255 255 255', // #ffffff
		'--color-primary-500': '255 255 255', // #ffffff
		'--color-primary-600': '230 230 230', // #e6e6e6
		'--color-primary-700': '191 191 191', // #bfbfbf
		'--color-primary-800': '153 153 153', // #999999
		'--color-primary-900': '125 125 125', // #7d7d7d
		// secondary | #1b54b1
		'--color-secondary-50': '221 229 243', // #dde5f3
		'--color-secondary-100': '209 221 239', // #d1ddef
		'--color-secondary-200': '198 212 236', // #c6d4ec
		'--color-secondary-300': '164 187 224', // #a4bbe0
		'--color-secondary-400': '95 135 200', // #5f87c8
		'--color-secondary-500': '27 84 177', // #1b54b1
		'--color-secondary-600': '24 76 159', // #184c9f
		'--color-secondary-700': '20 63 133', // #143f85
		'--color-secondary-800': '16 50 106', // #10326a
		'--color-secondary-900': '13 41 87', // #0d2957
		// tertiary | #c9aa3b
		'--color-tertiary-50': '247 242 226', // #f7f2e2
		'--color-tertiary-100': '244 238 216', // #f4eed8
		'--color-tertiary-200': '242 234 206', // #f2eace
		'--color-tertiary-300': '233 221 177', // #e9ddb1
		'--color-tertiary-400': '217 196 118', // #d9c476
		'--color-tertiary-500': '201 170 59', // #c9aa3b
		'--color-tertiary-600': '181 153 53', // #b59935
		'--color-tertiary-700': '151 128 44', // #97802c
		'--color-tertiary-800': '121 102 35', // #796623
		'--color-tertiary-900': '98 83 29', // #62531d
		// success | #18d100
		'--color-success-50': '220 248 217', // #dcf8d9
		'--color-success-100': '209 246 204', // #d1f6cc
		'--color-success-200': '197 244 191', // #c5f4bf
		'--color-success-300': '163 237 153', // #a3ed99
		'--color-success-400': '93 223 77', // #5ddf4d
		'--color-success-500': '24 209 0', // #18d100
		'--color-success-600': '22 188 0', // #16bc00
		'--color-success-700': '18 157 0', // #129d00
		'--color-success-800': '14 125 0', // #0e7d00
		'--color-success-900': '12 102 0', // #0c6600
		// warning | #ffd500
		'--color-warning-50': '255 249 217', // #fff9d9
		'--color-warning-100': '255 247 204', // #fff7cc
		'--color-warning-200': '255 245 191', // #fff5bf
		'--color-warning-300': '255 238 153', // #ffee99
		'--color-warning-400': '255 226 77', // #ffe24d
		'--color-warning-500': '255 213 0', // #ffd500
		'--color-warning-600': '230 192 0', // #e6c000
		'--color-warning-700': '191 160 0', // #bfa000
		'--color-warning-800': '153 128 0', // #998000
		'--color-warning-900': '125 104 0', // #7d6800
		// error | #ff6666
		'--color-error-50': '255 232 232', // #ffe8e8
		'--color-error-100': '255 224 224', // #ffe0e0
		'--color-error-200': '255 217 217', // #ffd9d9
		'--color-error-300': '255 194 194', // #ffc2c2
		'--color-error-400': '255 148 148', // #ff9494
		'--color-error-500': '255 102 102', // #ff6666
		'--color-error-600': '230 92 92', // #e65c5c
		'--color-error-700': '191 77 77', // #bf4d4d
		'--color-error-800': '153 61 61', // #993d3d
		'--color-error-900': '125 50 50', // #7d3232
		// surface | #232634
		'--color-surface-50': '222 222 225', // #dedee1
		'--color-surface-100': '211 212 214', // #d3d4d6
		'--color-surface-200': '200 201 204', // #c8c9cc
		'--color-surface-300': '167 168 174', // #a7a8ae
		'--color-surface-400': '101 103 113', // #656771
		'--color-surface-500': '35 38 52', // #232634
		'--color-surface-600': '32 34 47', // #20222f
		'--color-surface-700': '26 29 39', // #1a1d27
		'--color-surface-800': '21 23 31', // #15171f
		'--color-surface-900': '17 19 25' // #111319
	}
};
