import React, { FC, memo } from 'react';
import EyeArrowRightOutlineSvg from '../svg/eye-arrow-right-outline.svg';

export interface IEyeArrowRightOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeArrowRightOutlineIcon: FC<IEyeArrowRightOutlineIconProps> = memo(props => {
  return <EyeArrowRightOutlineSvg {...props} />;
});
