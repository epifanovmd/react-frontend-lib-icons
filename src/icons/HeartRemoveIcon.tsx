import React, { FC, memo } from 'react';
import HeartRemoveSvg from '../svg/heart-remove.svg';

export interface IHeartRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartRemoveIcon: FC<IHeartRemoveIconProps> = memo(props => {
  return <HeartRemoveSvg {...props} />;
});
