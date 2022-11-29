import React, { FC, memo } from 'react';
import DivisionBoxSvg from '../svg/division-box.svg';

export interface IDivisionBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DivisionBoxIcon: FC<IDivisionBoxIconProps> = memo(props => {
  return <DivisionBoxSvg {...props} />;
});
