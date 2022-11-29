import React, { FC, memo } from 'react';
import PenSvg from '../svg/pen.svg';

export interface IPenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PenIcon: FC<IPenIconProps> = memo(props => {
  return <PenSvg {...props} />;
});
