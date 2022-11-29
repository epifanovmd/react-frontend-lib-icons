import React, { FC, memo } from 'react';
import DolbySvg from '../svg/dolby.svg';

export interface IDolbyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DolbyIcon: FC<IDolbyIconProps> = memo(props => {
  return <DolbySvg {...props} />;
});
