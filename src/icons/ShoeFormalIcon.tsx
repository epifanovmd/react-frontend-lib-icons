import React, { FC, memo } from 'react';
import ShoeFormalSvg from '../svg/shoe-formal.svg';

export interface IShoeFormalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShoeFormalIcon: FC<IShoeFormalIconProps> = memo(props => {
  return <ShoeFormalSvg {...props} />;
});
