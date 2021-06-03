export interface ITextProps {
  family?: 'font-sans' | 'font-serif' | 'font-mono'
  size?: 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl'
  lh?: 'leading-1' | 'leading-1.5' | 'leading-2' | 'leading-2.5' | 'leading-3'
  weight: 'font-thin' | 'font-normal' | 'font-semibold' | 'font-extra-bold'
  transform: 'uppercase' | 'capitalize' | 'lowercase' | 'normal-case'
  tracking:
    | 'tracking-tighter'
    | 'tracking-tight'
    | 'tracking-normal'
    | 'tracking-wide'
    | 'tracking-wider'
    | 'tracking-widest'
  classes: string
  children: React.ReactNode
}

// Bad practice. Purge will not parse these used classes.
const Text = ({
  family,
  size = 'text-base',
  lh,
  weight,
  children,
  transform,
  tracking,
  classes,
}: ITextProps) => {
  return (
    <p
      className={`${family} ${size && size} ${tracking && tracking} ${lh && lh}
      ${weight && weight} ${transform && transform} ${classes}`}
    >
      {children}
    </p>
  )
}

export default Text
