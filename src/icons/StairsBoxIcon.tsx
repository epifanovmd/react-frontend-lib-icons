import React, { FC, memo } from 'react';
import StairsBoxSvg from '../svg/stairs-box.svg';

export interface IStairsBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StairsBoxIcon: FC<IStairsBoxIconProps> = memo(props => {
  return <StairsBoxSvg {...props} />;
});
