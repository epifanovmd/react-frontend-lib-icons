import React, { FC, memo } from 'react';
import DivisionSvg from '../svg/division.svg';

export interface IDivisionIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DivisionIcon: FC<IDivisionIconProps> = memo(props => {
  return <DivisionSvg {...props} />;
});
