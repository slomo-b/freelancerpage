interface SectionHeaderProps {
  title: string
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 mx-auto rounded-full"></div>
    </div>
  )
}
