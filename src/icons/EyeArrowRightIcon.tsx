import React, { FC, memo } from 'react';
import EyeArrowRightSvg from '../svg/eye-arrow-right.svg';

export interface IEyeArrowRightIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeArrowRightIcon: FC<IEyeArrowRightIconProps> = memo(props => {
  return <EyeArrowRightSvg {...props} />;
});
