import React, { FC, memo } from 'react';
import VirusOutlineSvg from '../svg/virus-outline.svg';

export interface IVirusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const VirusOutlineIcon: FC<IVirusOutlineIconProps> = memo(props => {
  return <VirusOutlineSvg {...props} />;
});
