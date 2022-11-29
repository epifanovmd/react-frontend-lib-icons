import React, { FC, memo } from 'react';
import EyeArrowLeftSvg from '../svg/eye-arrow-left.svg';

export interface IEyeArrowLeftIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeArrowLeftIcon: FC<IEyeArrowLeftIconProps> = memo(props => {
  return <EyeArrowLeftSvg {...props} />;
});
