"// Composant Image compatible avec les props Next.js
export default function Image({ src, alt, fill, className, priority, ...props }) {
  const style = fill ? {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  } : {};
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      style={style}
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
}
"
