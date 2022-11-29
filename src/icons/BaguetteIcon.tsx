import React, { FC, memo } from 'react';
import BaguetteSvg from '../svg/baguette.svg';

export interface IBaguetteIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BaguetteIcon: FC<IBaguetteIconProps> = memo(props => {
  return <BaguetteSvg {...props} />;
});
