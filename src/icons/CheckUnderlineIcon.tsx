import React, { FC, memo } from 'react';
import CheckUnderlineSvg from '../svg/check-underline.svg';

export interface ICheckUnderlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckUnderlineIcon: FC<ICheckUnderlineIconProps> = memo(props => {
  return <CheckUnderlineSvg {...props} />;
});
