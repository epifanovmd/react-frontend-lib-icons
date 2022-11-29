import React, { FC, memo } from 'react';
import CurrentAcSvg from '../svg/current-ac.svg';

export interface ICurrentAcIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CurrentAcIcon: FC<ICurrentAcIconProps> = memo(props => {
  return <CurrentAcSvg {...props} />;
});
