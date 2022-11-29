import React, { FC, memo } from 'react';
import DolphinSvg from '../svg/dolphin.svg';

export interface IDolphinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DolphinIcon: FC<IDolphinIconProps> = memo(props => {
  return <DolphinSvg {...props} />;
});
