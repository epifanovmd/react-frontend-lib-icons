import React, { FC, memo } from 'react';
import HeartCogOutlineSvg from '../svg/heart-cog-outline.svg';

export interface IHeartCogOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeartCogOutlineIcon: FC<IHeartCogOutlineIconProps> = memo(props => {
  return <HeartCogOutlineSvg {...props} />;
});
