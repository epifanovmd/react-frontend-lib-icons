import React, { FC, memo } from 'react';
import CommaCircleSvg from '../svg/comma-circle.svg';

export interface ICommaCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CommaCircleIcon: FC<ICommaCircleIconProps> = memo(props => {
  return <CommaCircleSvg {...props} />;
});
