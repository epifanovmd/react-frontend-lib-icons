import React, { FC, memo } from 'react';
import EyeArrowLeftOutlineSvg from '../svg/eye-arrow-left-outline.svg';

export interface IEyeArrowLeftOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EyeArrowLeftOutlineIcon: FC<IEyeArrowLeftOutlineIconProps> = memo(props => {
  return <EyeArrowLeftOutlineSvg {...props} />;
});
