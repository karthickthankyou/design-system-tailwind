export interface ITextProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
}

const Text = ({ size = 'base' }: ITextProps) => {
  return (
    <div className={`text-${size}`}>🛬 Hello, This is Text component! 🛫</div>
  )
}

export default Text
