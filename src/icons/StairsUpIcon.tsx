import React, { FC, memo } from 'react';
import StairsUpSvg from '../svg/stairs-up.svg';

export interface IStairsUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StairsUpIcon: FC<IStairsUpIconProps> = memo(props => {
  return <StairsUpSvg {...props} />;
});
