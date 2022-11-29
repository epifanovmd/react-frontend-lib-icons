import React, { FC, memo } from 'react';
import ThermometerChevronDownSvg from '../svg/thermometer-chevron-down.svg';

export interface IThermometerChevronDownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermometerChevronDownIcon: FC<IThermometerChevronDownIconProps> = memo(props => {
  return <ThermometerChevronDownSvg {...props} />;
});
