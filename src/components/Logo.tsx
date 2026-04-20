interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  variant?: 'light' | 'dark'
}

export function Logo({ size = 'md', showText = true, variant = 'dark' }: LogoProps) {
  const sizeClasses = {
    sm: { text: 'text-sm', container: 'h-8' },
    md: { text: 'text-base', container: 'h-9' },
    lg: { text: 'text-lg', container: 'h-12' },
    xl: { text: 'text-2xl', container: 'h-16' },
  }

  const currentSize = sizeClasses[size]

  return (
    <div className="flex items-center gap-2" style={{ minWidth: 'fit-content' }}>
      {/* Logo 图片 */}
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="大数据中心"
          className={`${currentSize.container} object-contain transition-all duration-300 hover:scale-105`}
          style={{ filter: variant === 'light' ? 'invert(1) brightness(2)' : 'none' }}
        />
      </div>

      {/* 平台名称 */}
      {showText && (
        <div className="flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
          <span
            className={`${currentSize.text} font-bold tracking-tight ${variant === 'light' ? 'text-white' : 'text-gray-900'}`}
            style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            云上 OPC 社区
          </span>
          <span className={`text-sm ${variant === 'light' ? 'text-gray-300' : 'text-gray-500'} tracking-wide`}>
            ONE PERSON COMPANY
          </span>
        </div>
      )}
    </div>
  )
}
