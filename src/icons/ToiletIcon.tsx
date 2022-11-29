import React, { FC, memo } from 'react';
import ToiletSvg from '../svg/toilet.svg';

export interface IToiletIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToiletIcon: FC<IToiletIconProps> = memo(props => {
  return <ToiletSvg {...props} />;
});
