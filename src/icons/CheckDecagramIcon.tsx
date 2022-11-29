import React, { FC, memo } from 'react';
import CheckDecagramSvg from '../svg/check-decagram.svg';

export interface ICheckDecagramIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckDecagramIcon: FC<ICheckDecagramIconProps> = memo(props => {
  return <CheckDecagramSvg {...props} />;
});
