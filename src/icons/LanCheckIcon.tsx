import React, { FC, memo } from 'react';
import LanCheckSvg from '../svg/lan-check.svg';

export interface ILanCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LanCheckIcon: FC<ILanCheckIconProps> = memo(props => {
  return <LanCheckSvg {...props} />;
});
