import React, { FC, memo } from 'react';
import HeartRemoveOutlineSvg from '../svg/heart-remove-outline.svg';

export interface IHeartRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartRemoveOutlineIcon: FC<IHeartRemoveOutlineIconProps> = memo(props => {
  return <HeartRemoveOutlineSvg {...props} />;
});
