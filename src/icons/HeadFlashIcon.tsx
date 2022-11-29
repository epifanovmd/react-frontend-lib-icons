import React, { FC, memo } from 'react';
import HeadFlashSvg from '../svg/head-flash.svg';

export interface IHeadFlashIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HeadFlashIcon: FC<IHeadFlashIconProps> = memo(props => {
  return <HeadFlashSvg {...props} />;
});
