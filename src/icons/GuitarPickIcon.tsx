import React, { FC, memo } from 'react';
import GuitarPickSvg from '../svg/guitar-pick.svg';

export interface IGuitarPickIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GuitarPickIcon: FC<IGuitarPickIconProps> = memo(props => {
  return <GuitarPickSvg {...props} />;
});
