import React, { FC, memo } from 'react';
import HeartOffOutlineSvg from '../svg/heart-off-outline.svg';

export interface IHeartOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartOffOutlineIcon: FC<IHeartOffOutlineIconProps> = memo(props => {
  return <HeartOffOutlineSvg {...props} />;
});
