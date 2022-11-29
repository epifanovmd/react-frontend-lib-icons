import React, { FC, memo } from 'react';
import DeskSvg from '../svg/desk.svg';

export interface IDeskIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DeskIcon: FC<IDeskIconProps> = memo(props => {
  return <DeskSvg {...props} />;
});
