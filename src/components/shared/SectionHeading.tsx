type Props = {
    title: string
    subtitle: string
}

export default function SectionHeading({
    title,
    subtitle
}: Props) {
    return (
        <div className="text-center mb-12">

            <p className="text-red-700 font-semibold uppercase tracking-wider">
                {subtitle}
            </p>

            <h2 className="text-4xl font-bold mt-2">
                {title}
            </h2>

        </div>
    )
}