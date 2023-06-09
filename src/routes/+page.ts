export const ssr = true;
export const csr = false;

export function load(): CVModel {
	return {
		basic: {
			name: 'Suhel Chakraborty',
			title: 'Android Engineer | Rustacean',
			about:
				'Human being with **6+ years** of experience in **architecting**, **developing** and **publishing** Android apps, _with a growing knack towards GPU programming_. Being _highly curious_ and _equally creative_, I cherish exploring a plethora of **languages/libraries/frameworks**. I believe _every problem is a puzzle waiting for the right approach_.',
			profile: 'profile.png',
			social: [
				{
					visible: true,
					type: "email",
					value: "chakraborty.suhel@gmail.com",
				},
				{
					visible: true,
					type: "mobile",
					value: "+91 82406 41614",
				},
				{
					visible: true,
					type: "location",
					value: "Kolkata",
				},
				{
					visible: true,
					type: "linkedin",
					value: "suhelchakraborty",
				},
				{
					visible: true,
					type: "github",
					value: "forkachild",
				},
				{
					visible: true,
					type: "medium",
					value: "@suhelchakraborty",
				},
			]
		},
		skills: [
			"Android",
			"Kotlin",
			"MVVM",
			"Clean Architecture",
			"Dependency Injection",
			"Jetpack",
			"Compose",
			"Room Database",
			"LiveData",
			"RxJava",
			"Coroutines",
			"Hilt",
			"Dagger 2",
			"Koin",
			"Paging",
			"Unit Testing",
			"Retrofit",
			"OkHttp",
			"Firebase",
			"GraphQL",
			"Git",
			"CI/CD",
			"Design Patterns",
			"Agile",
			"Flutter",
			"Node.JS",
			"MongoDB",
			"Realm",
			"PostgreSQL",
			"HTML",
			"CSS",
			"SvelteKit",
			"OpenGL ES",
			"GLSL",
			"C",
			"C++",
			"Rust",
			"Embedded",
			"Ras Pi Pico",
			"RP2040",
			"ESP8266",
			"ESP32",
			"Stripe",
			"MQTT"
		],
		work: [
			{
				visible: true,
				title: 'SSE - Android',
				organisation: 'Y Media Labs',
				location: 'Remote',
				timeline: ['Feb 2022', 'Apr 2023'],
				achievements: [
					'Actively worked in an **Agile** software development environment.',
					'Worked alongside and **guided** others within a large team.',
					'Contributed to **code architecture** and **UI/UX**.'
				],
				projects: [
					{
						visible: true,
						title: 'First Republic Mobile',
						description:
							"An Android app to securely manage your First Republic accounts whenever and wherever it suits you.",
						timeline: ['Mar 2022', 'Jan 2023'],
						team: '12',
						link: "https://play.google.com/store/apps/details?id=com.firstrepublic.banking",
						achievements: [
							'Coded pixel perfect layouts from **Figma** using **ConstraintLayout**.',
							'Wrote **test cases** using **JUnit** and **PowerMockito** for some modules.',
							'App available on **Google Play Store**.',
						],
						tags: [
							'Android',
							'Kotlin',
							'MVVM',
							'Clean Architecture',
							'Jetpack',
							'Coroutines',
							'Hilt',
							'Paging',
							'ConcatAdapter',
							'Firebase',
							'Retrofit',
							'JUnit 5',
							'PowerMockito',
						]
					}
				]
			},
			{
				visible: true,
				title: 'Software Engineer - Android',
				organisation: 'Continental AG',
				location: 'Kolkata, IN',
				timeline: ['Nov 2019', 'Jan 2022'],
				achievements: [
					'Actively worked in an **Agile** software development environment.',
					'Contributed to **code architecture**, **UI/UX** and **tooling**.',
					'Followed **Git Workflow**.'
				],
				projects: [
					{
						visible: true,
						title: 'Car On Board Unit SDK (Classified)',
						description:
							'Enables seamless, secure connection to a car on-board-unit to fetch relevant data to be consumed by 3rd party developers.',
						timeline: ['Nov 2019', 'Jan 2022'],
						team: '15',
						achievements: [
							'Implemented **dynamically scalable custom views** with respect to screen size.',
							'Integrated **Firebase App Distribution** for automated deployment.'
						],
						tags: [
							'Android',
							'Kotlin',
							'MVVM',
							'Clean Architecture',
							'Jetpack',
							'Coroutines',
							'Koin',
							'ECDSA',
							'NDK',
							'CDM API',
							'Custom View',
							'Foreground Service',
							'Firebase',
							'Retrofit',
							'LeakCanary',
						]
					}
				]
			},
			{
				visible: true,
				title: 'Software Engineer',
				organisation: 'Innofied Solution Pvt. Ltd.',
				location: 'Kolkata, IN',
				timeline: ['Apr 2017', 'Nov 2019'],
				achievements: [
					'**Led** the Android team comprising **5 developers**.',
					'Developed a **MVP with Clean Architecture** template which was re-used across all apps.',
					'Performed **requirement analysis**, **wire-framing**, **design implementation**, **Google Play Store deployment** and **maintenance**.'
				],
				projects: [
					{
						visible: true,
						title: 'Photo Filter App',
						description:
							'An OpenGL based app that applied compositing canvas drawing on textures.',
						timeline: '2019',
						team: '2',
						achievements: [
							'**Architected** and **developed** from scratch in **a month**.',
							'Coded **GLSL shaders** for filters.'
						],
						tags: ['Android', 'Kotlin', 'MVP', 'Clean Architecture', 'OpenGL ES', 'Dagger 2', 'GLSL']
					},
					{
						visible: true,
						title: 'BeMup',
						description:
							'A mobile application that provides transportation services for travellers with a subscription based payment model.',
						timeline: '2018',
						team: '8',
						achievements: [
							'**Architected** and **developed** the rider application from scratch.',
							'Integrated a **subscription based payment** using **Stripe**.',
						],
						tags: [
							'Android',
							'Kotlin',
							'MVP',
							'Clean Architecture',
							'RxJava',
							'Google Maps',
							'Retrofit',
							'Dagger 2',
							'Stripe SDK',
							'MQTT',
							'Google Maps',
							'UI/UX',
						]
					},
					{
						visible: true,
						title: 'MovOn',
						description:
							'It is the first mobile app in the Philippines that provides the easiest and smartest way to book online bus tickets with guaranteed seats.',
						timeline: '2018',
						team: '11',
						link: 'https://play.google.com/store/apps/details?id=com.icon.movon.passenger',
						achievements: [
							'**Architected** and **developed** the application from scratch.',
							'Created a simple and efficient **bus seating data format** for storing bus seating pattern.',
							'Created an interactive **`View`** to represent the **bus seating configuration.**',
							'App is available on **Google Play Store**.'
						],
						tags: [
							'Android',
							'Kotlin',
							'MVP',
							'Clean Architecture',
							'RxJava',
							'Retrofit',
							'Dagger 2',
							'Canvas',
							'Google Maps'
						]
					},
					{
						visible: true,
						title: 'Homfy',
						description:
							'An app that connects tenants and landlords & offers realtime features.',
						timeline: '2018',
						team: '8',
						achievements: [
							"Contributed partly to **UI design**",
							"**Architected** and **developed** the app from scratch.",
							"Followed **Material Design** principles.",
							"Integrated 1-to-1 chat using **QuickBlox SDK**."
						],
						tags: ['Android', 'Kotlin', 'MVP', 'RxJava', 'Retrofit', 'Dagger 2', 'QuickBlox SDK']
					},
					{
						visible: true,
						title: 'BleepMed',
						description: 'A doctor-on-call app with live tracking.',
						timeline: '2017',
						team: '10',
						achievements: [
							'Architected and developed the app from scratch.',
							"Tracked doctor's location in real-time in **Google Maps** using **MQTT**."
						],
						tags: ['Java', 'MVP', 'RxJava', 'Retrofit', 'Dagger 2', 'MQTT']
					}
				]
			}
		],
		education: [
			{
				visible: true,
				degree: 'B. Tech | Computer Science & Engineering',
				institute: 'Jalpaiguri Government Engineering College',
				timeline: ['2012', '2016'],
				grade: '7.2'
			},
			{
				visible: false,
				degree: 'Class XII | ISC',
				institute: 'Vivekananda Mission School',
				timeline: '2012',
				grade: '88%'
			},
			{
				visible: false,
				degree: 'Class X | ICSE',
				institute: 'Vivekananda Mission School',
				timeline: '2010',
				grade: '92%'
			}
		],
		publications: [
			{
				visible: true,
				type: 'Blog',
				title: 'Imagine: A story of the evergreen OpenGL on Android',
				timeline: '11 May 2023',
				link: 'https://medium.com/@suhelchakraborty/imagine-a-story-of-the-evergreen-opengl-on-android-c36b4e8463f0'
			},
			{
				visible: true,
				type: 'Blog',
				title: 'Reel Search and LayoutManager: An Android journey',
				timeline: '12 Jan 2019',
				link: 'https://medium.com/@suhelchakraborty/reel-search-and-layoutmanager-an-android-journey-e2f925c8410f'
			}
		],
		languages: [
			{
				visible: true,
				name: 'English',
				proficiency: 'Professional'
			},
			{
				visible: true,
				name: 'Hindi',
				proficiency: 'Professional'
			},
			{
				visible: true,
				name: 'Bengali',
				proficiency: 'Native'
			}
		],
		interests: [
			'Vulkan',
			'GPU',
			'Rust',
			'Web',
			'Photography',
			'Motorcycles',
			'Cars',
			'Road trips',
			'Sitcom',
		],
		projects: [
			{
				visible: true,
				title: 'Unresume',
				description: 'Easy to use, minimalistic and customizable online resume hosting solution.',
				timeline: ['Apr 2023', 'Present'],
				team: '1',
				achievements: [
					'**This resume is generated using this!**',
					'Used **SvelteKit** framework to composite pages and routes.',
					'Used CSS **flexbox** and **grid** extensively for layouts.',
				],
				tags: ['Web', 'HTML', 'CSS', 'SvelteKit']
			},
			{
				visible: true,
				title: 'Imagine',
				description:
					'GPU accelerated, blisteringly fast, easy-to-use, layer based image editing library with Photoshop style blend mode support for Android using OpenGL ES 2.0.',
				timeline: ['Apr 2023', 'Present'],
				team: '1',
				link: 'https://forkachild.github.io/imagine/',
				achievements: [
					'**Multiple consecutive customizable** layers of processing.',
					'Photoshop style **blending mode** for each layer to merge a layer atop the previous.',
					'Allows **alpha blending** between layers.',
					'**Architected** a simple double-buffered swapchain to apply a chain of layers.',
					'Separate **preview** and **export** modes for faster previews and full-sized export respectively.'
				],
				tags: ['Android', 'OpenGL ES', 'GLSL', 'Swapchain', 'Backbuffer']
			},
			{
				visible: true,
				title: 'Light Painting',
				description:
					'A simple and ultra fast music visualizer based on FFT using Raspberry Pi Pico, INMP441 and WS2812.',
				timeline: ['Jan 2023', 'Feb 2023'],
				team: '1',
				link: 'https://github.com/forkachild/light-painting',
				achievements: [
					'Audio processing latency below **2ms**.',
					'Used official **C/C++ SDK** instead of Arduino.',
					'Coded **PIO drivers** for **WS2812** and **INMP441** _(mono mode)_.',
					'**Architected** a simple **Fast Fourier Transform** implementation from scratch.',
					'**Architected** and **coded** a **doubly linked circular ring buffer** for DMA transfers between PIO and CPU.'
				],
				tags: ['Embedded', 'C', 'FFT', 'Ras Pi Pico', 'RP2040', 'INMP441', 'Neopixel', 'WS2812', 'DMA', 'IRQ']
			},
			{
				visible: true,
				title: 'SafeWalk',
				description: 'A women safety initiative to empower them to travel safely.',
				timeline: '2020',
				team: '1',
				link: 'https://safewalkapp.netlify.app',
				achievements: [
					'**Designed**, **architected**, **developed** and **published** on Google Play Store all by myself.',
					'Accrued **2400+ users worldwide**.',
					'App available on **Google Play Store**.'
				],
				tags: [
					'Android',
					'Kotlin',
					'MVVM',
					'Clean Architecture',
					'Jetpack',
					'Koin',
					'Firebase',
					'RxJava',
					'Adobe XD'
				]
			},
			{
				visible: true,
				title: 'Reel Search for Android',
				description: 'A beautiful and minimalistic UI/UX library for autocompletion use cases.',
				timeline: '2019',
				team: '1',
				link: 'https://github.com/forkachild/reel-search-android',
				achievements: [
					'**Architected** and **developed** the library all by myself.',
					'Implemented a custom **LayoutManager** for RecyclerView.',
					'Accrued **120 stars** and **5 forks** on Github.',
					'Library available on **Jitpack**.'
				],
				tags: ['Android', 'Kotlin', 'RecyclerView', 'LayoutManager']
			},
			{
				visible: true,
				title: 'Game of Life POC',
				description: "A simple Android app that showcases Conway's Game of Life theory.",
				timeline: '2019',
				team: '1',
				link: 'https://github.com/forkachild/GameOfLife',
				achievements: [
					'**Designed**, **architected**, **developed** all by myself.',
					'Implemented a **Custom View** to represent the grid.'
				],
				tags: ['Android', 'Kotlin', 'MVC', 'Canvas Drawing']
			},
			{
				visible: true,
				title: 'Photosphere',
				description: 'A very simple photo based social network.',
				timeline: '2016',
				team: '1',
				achievements: [
					'**Designed**, **developed** and **published** on Google Play Store all by myself.',
					'Accrued **3000+ users** in **a year**.'
				],
				tags: ['Android', 'Kotlin', 'MVC', 'Firebase']
			}
		]
	};
}