import React, { FC, memo } from 'react';
import CheckCircleOutlineSvg from '../svg/check-circle-outline.svg';

export interface ICheckCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckCircleOutlineIcon: FC<ICheckCircleOutlineIconProps> = memo(props => {
  return <CheckCircleOutlineSvg {...props} />;
});
