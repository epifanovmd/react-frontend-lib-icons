import React, { FC, memo } from 'react';
import StadiumOutlineSvg from '../svg/stadium-outline.svg';

export interface IStadiumOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StadiumOutlineIcon: FC<IStadiumOutlineIconProps> = memo(props => {
  return <StadiumOutlineSvg {...props} />;
});
