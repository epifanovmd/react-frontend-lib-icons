import React, { FC, memo } from 'react';
import HeartPlusOutlineSvg from '../svg/heart-plus-outline.svg';

export interface IHeartPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartPlusOutlineIcon: FC<IHeartPlusOutlineIconProps> = memo(props => {
  return <HeartPlusOutlineSvg {...props} />;
});
