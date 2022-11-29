import React, { FC, memo } from 'react';
import HammerScrewdriverSvg from '../svg/hammer-screwdriver.svg';

export interface IHammerScrewdriverIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HammerScrewdriverIcon: FC<IHammerScrewdriverIconProps> = memo(props => {
  return <HammerScrewdriverSvg {...props} />;
});
