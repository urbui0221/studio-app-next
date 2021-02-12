export default (req, res) => {
	res.status(200).json([
		{
			id: 1,
			cardData: {
				img: '/images/blog/blog1sm.jpg',
				url: '/',
				alt: 'Image-1',
				tag: 'Featured',
				tagUrl: '/',
				date: 'January 25, 2017',
				description:
					'The Story of Ferguson through the Eyes of the People Who Lived it',
				views: '151',
				likes: '2',
			},
			pageData: {
				image: '/images/blog/blog_detail.jpg',
				altImageText: 'blog--image--text',
				title: `The Story of Ferguson through the Eyes of the People Who Livedit`,
				description: `axios.md`,
				tags: [
					{ id: '1', name: 'film', url: '/film' },
					{ id: '2', name: 'event', url: '/event' },
					{ id: '3', name: 'festival', url: '/festival' },
				],
				author: {
                    img: '/images/avatar/2.jpg',
					name: 'Sofia Vergara',
					description: `Typi non habent claritatem insitam; est usus legentis in
                        iis qui facit eorum claritatem. Indemon strunt lectores
                        legere me lius quod ii legunt saepius. Claritas est
                        etiam processus dynamicus.`,
				},
				previous: `Communication Is Where a Film Lives and Dies”: Director
                    Zoe Lister-Jones`,
				after: `The Story of Ferguson through the Eyes of the People Who
                    Lived it`,
			},
		},
		{
			id: 2,
			cardData: {
				img: '/images/blog/blog2.jpg',
				url: '/',
				alt: 'Image-1',
				tag: 'News',
				tagUrl: '/',
				date: 'January 25, 2017',
				description:
					'“Communication Is Where a Film Lives and Dies”: Director Zoe Lister-Jones',
				views: '141',
				likes: '0',
			},
			pageData: {
				image: '/images/blog/blog_detail.jpg',
				altImageText: 'blog--image--text',
				title: `The Story of Ferguson through the Eyes of the People Who Livedit`,
				description: `react.md`,
				tags: [
					{ id: '1', name: 'film', url: '/film' },
					{ id: '2', name: 'event', url: '/event' },
					{ id: '3', name: 'festival', url: '/festival' },
				],
				author: {
					img: '/images/avatar/1.jpg',
					name: 'Alicia Vergara',
					description: `Typi non habent claritatem insitam; est usus legentis in
                        iis qui facit eorum claritatem. Indemon strunt lectores
                        legere me lius quod ii legunt saepius. Claritas est
                        etiam processus dynamicus.`,
				},
				previous: `Communication Is Where a Film Lives and Dies”: Director
                    Zoe Lister-Jones`,
				after: `The Story of Ferguson through the Eyes of the People Who
                    Lived it`,
			},
		},
		{
			id: 3,
			cardData: {
				img: '/images/blog/blog3sm.jpg',
				url: '/',
				alt: 'Image-1',
				tag: 'Video',
				tagUrl: '/',
				date: 'January 25, 2017',
				description:
					'Profound Communication Only Happens When There Is Persistence',
				views: '112',
				likes: '1',
			},
			pageData: {
				image: '/images/blog/blog_detail.jpg',
				altImageText: 'blog--image--text',
				title: `The Story of Ferguson through the Eyes of the People Who Livedit`,
				description: `axios.md`,
				tags: [
					{ id: '1', name: 'film', url: '/film' },
					{ id: '2', name: 'event', url: '/event' },
					{ id: '3', name: 'festival', url: '/festival' },
				],
				author: {
                    img: '/images/avatar/2.jpg',
					name: 'Sofia Vergara',
					description: `Typi non habent claritatem insitam; est usus legentis in
                        iis qui facit eorum claritatem. Indemon strunt lectores
                        legere me lius quod ii legunt saepius. Claritas est
                        etiam processus dynamicus.`,
				},
				previous: `Communication Is Where a Film Lives and Dies”: Director
                    Zoe Lister-Jones`,
				after: `The Story of Ferguson through the Eyes of the People Who
                    Lived it`,
			},
		},
		{
			id: 4,
			cardData: {
				img: '/images/blog/blog4.jpg',
				url: '/',
				alt: 'Image-1',
				tag: 'Quote',
				tagUrl: '/',
				date: 'January 25, 2017',
				description:
					'Tell Them We Are Rising: The Story of Black Colleges and Universities',
				views: '84',
				likes: '0',
			},
			pageData: {
				image: '/images/blog/blog_detail.jpg',
				altImageText: 'blog--image--text',
				title: `The Story of Ferguson through the Eyes of the People Who Livedit`,
				description: `axios.md`,
				tags: [
					{ id: '1', name: 'film', url: '/film' },
					{ id: '2', name: 'event', url: '/event' },
					{ id: '3', name: 'festival', url: '/festival' },
				],
				author: {
                    img: '/images/avatar/2.jpg',
					name: 'Sofia Vergara',
					description: `Typi non habent claritatem insitam; est usus legentis in
                        iis qui facit eorum claritatem. Indemon strunt lectores
                        legere me lius quod ii legunt saepius. Claritas est
                        etiam processus dynamicus.`,
				},
				previous: `Communication Is Where a Film Lives and Dies”: Director
                    Zoe Lister-Jones`,
				after: `The Story of Ferguson through the Eyes of the People Who
                    Lived it`,
			},
		},
		{
			id: 5,
			cardData: {
				img: '/images/blog/blog5.jpg',
				url: '/',
				alt: 'Image-1',
				tag: 'Gallery',
				tagUrl: '/',
				date: 'January 25, 2017',
				description:
					'“The Challenge Is Balancing Tone”: Director Mark Pellington',
				views: '96',
				likes: '1',
			},
			pageData: {
				image: '/images/blog/blog_detail.jpg',
				altImageText: 'blog--image--text',
				title: `The Story of Ferguson through the Eyes of the People Who Livedit`,
				description: `axios.md`,
				tags: [
					{ id: '1', name: 'film', url: '/film' },
					{ id: '2', name: 'event', url: '/event' },
					{ id: '3', name: 'festival', url: '/festival' },
				],
				author: {
                    img: '/images/avatar/2.jpg',
					name: 'Sofia Vergara',
					description: `Typi non habent claritatem insitam; est usus legentis in
                        iis qui facit eorum claritatem. Indemon strunt lectores
                        legere me lius quod ii legunt saepius. Claritas est
                        etiam processus dynamicus.`,
				},
				previous: `Communication Is Where a Film Lives and Dies”: Director
                    Zoe Lister-Jones`,
				after: `The Story of Ferguson through the Eyes of the People Who
                    Lived it`,
			},
		},
		{
			id: 6,
			cardData: {
				img: '/images/blog/blog6.jpg',
				url: '/',
				alt: 'Image-1',
				tag: 'News',
				tagUrl: '/',
				date: 'January 25, 2017',
				description:
					'“We Are Living through a Divisive Time”: Director Barbara Kopple',
				views: '146',
				likes: '2',
			},
			pageData: {
				image: '/images/blog/blog_detail.jpg',
				altImageText: 'blog--image--text',
				title: `The Story of Ferguson through the Eyes of the People Who Livedit`,
				description: `react.md`,
				tags: [
					{ id: '1', name: 'film', url: '/film' },
					{ id: '2', name: 'event', url: '/event' },
					{ id: '3', name: 'festival', url: '/festival' },
				],
				author: {
                    img: '/images/avatar/2.jpg',
					name: 'Sofia Vergara',
					description: `Typi non habent claritatem insitam; est usus legentis in
                        iis qui facit eorum claritatem. Indemon strunt lectores
                        legere me lius quod ii legunt saepius. Claritas est
                        etiam processus dynamicus.`,
				},
				previous: `Communication Is Where a Film Lives and Dies”: Director
                    Zoe Lister-Jones`,
				after: `The Story of Ferguson through the Eyes of the People Who
                    Lived it`,
			},
		},
		{
			id: 7,
			cardData: {
				img: '/images/blog/blog7.jpg',
				url: '/',
				alt: 'Image-1',
				tag: 'Video',
				tagUrl: '/',
				date: 'January 25, 2017',
				description:
					'I Stopped Talking and Started Making the True Great Film',
				views: '253',
				likes: '6',
			},
			pageData: {
				image: '/images/blog/blog_detail.jpg',
				altImageText: 'blog--image--text',
				title: `The Story of Ferguson through the Eyes of the People Who Livedit`,
				description: `axios.md`,
				tags: [
					{ id: '1', name: 'film', url: '/film' },
					{ id: '2', name: 'event', url: '/event' },
					{ id: '3', name: 'festival', url: '/festival' },
				],
				author: {
                    img: '/images/avatar/2.jpg',
					name: 'Sofia Vergara',
					description: `Typi non habent claritatem insitam; est usus legentis in
                        iis qui facit eorum claritatem. Indemon strunt lectores
                        legere me lius quod ii legunt saepius. Claritas est
                        etiam processus dynamicus.`,
				},
				previous: `Communication Is Where a Film Lives and Dies”: Director
                    Zoe Lister-Jones`,
				after: `The Story of Ferguson through the Eyes of the People Who
                    Lived it`,
			},
		},
		{
			id: 8,
			cardData: {
				img: '/images/blog/blog8.jpg',
				url: '/',
				alt: 'Image-1',
				tag: 'Tutorials',
				tagUrl: '/',
				date: 'January 25, 2017',
				description:
					'“We Don’t Use Words to Tell a Story”: Directors Lily Baldwin',
				views: '81',
				likes: '1',
			},
			pageData: {
				image: '/images/blog/blog_detail.jpg',
				altImageText: 'blog--image--text',
				title: `The Story of Ferguson through the Eyes of the People Who Livedit`,
				description: `react.md`,
				tags: [
					{ id: '1', name: 'film', url: '/film' },
					{ id: '2', name: 'event', url: '/event' },
					{ id: '3', name: 'festival', url: '/festival' },
				],
				author: {
                    img: '/images/avatar/2.jpg',
					name: 'Sofia Vergara',
					description: `Typi non habent claritatem insitam; est usus legentis in
                        iis qui facit eorum claritatem. Indemon strunt lectores
                        legere me lius quod ii legunt saepius. Claritas est
                        etiam processus dynamicus.`,
				},
				previous: `Communication Is Where a Film Lives and Dies”: Director
                    Zoe Lister-Jones`,
				after: `The Story of Ferguson through the Eyes of the People Who
                    Lived it`,
			},
		},
		{
			id: 9,
			cardData: {
				img: '/images/blog/blog9smm.jpg',
				url: '/',
				alt: 'Image-1',
				tag: 'Review',
				tagUrl: '/',
				date: 'January 25, 2017',
				description:
					'“Communicating with Respect and Openness”: Director José María Cabral',
				views: '65',
				likes: '2',
			},
			pageData: {
				image: '/images/blog/blog_detail.jpg',
				altImageText: 'blog--image--text',
				title: `The Story of Ferguson through the Eyes of the People Who Livedit`,
				description: `react.md`,
				tags: [
					{ id: '1', name: 'film', url: '/film' },
					{ id: '2', name: 'event', url: '/event' },
					{ id: '3', name: 'festival', url: '/festival' },
				],
				author: {
                    img: '/images/avatar/2.jpg',
					name: 'Sofia Vergara',
					description: `Typi non habent claritatem insitam; est usus legentis in
                        iis qui facit eorum claritatem. Indemon strunt lectores
                        legere me lius quod ii legunt saepius. Claritas est
                        etiam processus dynamicus.`,
				},
				previous: `Communication Is Where a Film Lives and Dies”: Director
                    Zoe Lister-Jones`,
				after: `The Story of Ferguson through the Eyes of the People Who
                    Lived it`,
			},
		},
		{
			id: 10,
			cardData: {
				img: '/images/blog/blog10.jpg',
				url: '/',
				alt: 'Image-1',
				tag: 'Uncategorized',
				tagUrl: '/',
				date: 'January 25, 2017',
				description:
					'I Want the Viewer to Feel Totally Immersed in My World',
				views: '76',
				likes: '0',
			},
			pageData: {
				image: '/images/blog/blog_detail.jpg',
				altImageText: 'blog--image--text',
				title: `The Story of Ferguson through the Eyes of the People Who Livedit`,
				description: `react.md`,
				tags: [
					{ id: '1', name: 'film', url: '/film' },
					{ id: '2', name: 'event', url: '/event' },
					{ id: '3', name: 'festival', url: '/festival' },
				],
				author: {
                    img: '/images/avatar/2.jpg',
					name: 'Sofia Vergara',
					description: `Typi non habent claritatem insitam; est usus legentis in
                        iis qui facit eorum claritatem. Indemon strunt lectores
                        legere me lius quod ii legunt saepius. Claritas est
                        etiam processus dynamicus.`,
				},
				previous: `Communication Is Where a Film Lives and Dies”: Director
                    Zoe Lister-Jones`,
				after: `The Story of Ferguson through the Eyes of the People Who
                    Lived it`,
			},
		},
		{
			id: 11,
			cardData: {
				img: '/images/blog/blog11sm.jpg',
				url: '/',
				alt: 'Image-1',
				tag: 'Uncategorized',
				tagUrl: '/',
				date: 'January 25, 2017',
				description:
					'I Want the Viewer to Feel Totally Immersed in My World',
				views: '76',
				likes: '0',
			},
			pageData: {
				image: '/images/blog/blog_detail.jpg',
				altImageText: 'blog--image--text',
				title: `The Story of Ferguson through the Eyes of the People Who Livedit`,
				description: `react.md`,
				tags: [
					{ id: '1', name: 'film', url: '/film' },
					{ id: '2', name: 'event', url: '/event' },
					{ id: '3', name: 'festival', url: '/festival' },
				],
				author: {
                    img: '/images/avatar/1.jpg',
					name: 'Alicia Vergara',
					description: `Typi non habent claritatem insitam; est usus legentis in
                        iis qui facit eorum claritatem. Indemon strunt lectores
                        legere me lius quod ii legunt saepius. Claritas est
                        etiam processus dynamicus.`,
				},
				previous: `Communication Is Where a Film Lives and Dies”: Director
                    Zoe Lister-Jones`,
				after: `The Story of Ferguson through the Eyes of the People Who
                    Lived it`,
			},
		},
		{
			id: 12,
			cardData: {
				img: '/images/blog/blog9.jpg',
				url: '/',
				alt: 'Image-1',
				tag: 'Uncategorized',
				tagUrl: '/',
				date: 'January 25, 2017',
				description:
					'I Want the Viewer to Feel Totally Immersed in My World',
				views: '76',
				likes: '0',
			},
			pageData: {
				image: '/images/blog/blog_detail.jpg',
				altImageText: 'blog--image--text',
				title: `The Story of Ferguson through the Eyes of the People Who Livedit`,
				description: `react.md`,
				tags: [
					{ id: '1', name: 'film', url: '/film' },
					{ id: '2', name: 'event', url: '/event' },
					{ id: '3', name: 'festival', url: '/festival' },
				],
				author: {
                    img: '/images/avatar/1.jpg',
					name: 'Alicia Vergara',
					description: `Typi non habent claritatem insitam; est usus legentis in
                        iis qui facit eorum claritatem. Indemon strunt lectores
                        legere me lius quod ii legunt saepius. Claritas est
                        etiam processus dynamicus.`,
				},
				previous: `Communication Is Where a Film Lives and Dies”: Director
                    Zoe Lister-Jones`,
				after: `The Story of Ferguson through the Eyes of the People Who
                    Lived it`,
			},
		},
	]);
};
