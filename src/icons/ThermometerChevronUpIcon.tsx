import React, { FC, memo } from 'react';
import ThermometerChevronUpSvg from '../svg/thermometer-chevron-up.svg';

export interface IThermometerChevronUpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ThermometerChevronUpIcon: FC<IThermometerChevronUpIconProps> = memo(props => {
  return <ThermometerChevronUpSvg {...props} />;
});
