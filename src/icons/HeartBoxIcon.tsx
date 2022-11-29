import React, { FC, memo } from 'react';
import HeartBoxSvg from '../svg/heart-box.svg';

export interface IHeartBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartBoxIcon: FC<IHeartBoxIconProps> = memo(props => {
  return <HeartBoxSvg {...props} />;
});
