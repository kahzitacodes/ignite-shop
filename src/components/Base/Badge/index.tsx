import { BadgeContainer } from './styles';
import { BadgeProps } from './types';

export function Badge({ label, size = "md", color = "primary", className }: BadgeProps) {
  return (
    <BadgeContainer color={color} className={className} size={size}>
      {label}
    </BadgeContainer>
  );
}