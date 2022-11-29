import React, { FC, memo } from 'react';
import BlindsSvg from '../svg/blinds.svg';

export interface IBlindsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BlindsIcon: FC<IBlindsIconProps> = memo(props => {
  return <BlindsSvg {...props} />;
});
