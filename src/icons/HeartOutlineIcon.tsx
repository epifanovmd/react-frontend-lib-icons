import React, { FC, memo } from 'react';
import HeartOutlineSvg from '../svg/heart-outline.svg';

export interface IHeartOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartOutlineIcon: FC<IHeartOutlineIconProps> = memo(props => {
  return <HeartOutlineSvg {...props} />;
});
