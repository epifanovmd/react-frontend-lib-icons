import React, { FC, memo } from 'react';
import CheckUnderlineCircleOutlineSvg from '../svg/check-underline-circle-outline.svg';

export interface ICheckUnderlineCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckUnderlineCircleOutlineIcon: FC<ICheckUnderlineCircleOutlineIconProps> = memo(props => {
  return <CheckUnderlineCircleOutlineSvg {...props} />;
});
