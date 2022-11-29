import React, { FC, memo } from 'react';
import AirPurifierSvg from '../svg/air-purifier.svg';

export interface IAirPurifierIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AirPurifierIcon: FC<IAirPurifierIconProps> = memo(props => {
  return <AirPurifierSvg {...props} />;
});
