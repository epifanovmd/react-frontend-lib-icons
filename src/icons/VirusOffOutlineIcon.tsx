import React, { FC, memo } from 'react';
import VirusOffOutlineSvg from '../svg/virus-off-outline.svg';

export interface IVirusOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VirusOffOutlineIcon: FC<IVirusOffOutlineIconProps> = memo(props => {
  return <VirusOffOutlineSvg {...props} />;
});
