import { tinaField, useTina } from "tinacms/dist/react";
import type { PageQuery, PageQueryVariables, PageTestimonial } from "../__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
	variables: PageQueryVariables;
	data: PageQuery;
	query: string;
}

const HomePage = (props: Props) => {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	})

	const page = data.page;

	return (
		<main className="container">
			<header className="header">

				<div className="header-text">
					<h1>WE MAKE KIDS CLUB</h1>
					<h2>Sustainable fashion & craft club</h2>
				</div>
			</header>
			<section className="activities" data-tina-field={tinaField(page, "testimonial")}>
				{page.testimonial?.map((testimonial) =>
					<div
						key={`${testimonial?.title}`}
						className="activity-card"
					>
						<div data-tina-field={tinaField(testimonial, "imgSrc")}></div>
						{testimonial?.imgSrc && <img src={testimonial.imgSrc} alt={`${testimonial.title}`} />}
						{<h3 data-tina-field={tinaField(testimonial, "title")}>{testimonial?.title}</h3>}
					</div>)}
			</section>

			<div data-tina-field={tinaField(page, "body")}>
				<TinaMarkdown content={page.body} />
			</div>
		</main>

	)
}

export default HomePage;
