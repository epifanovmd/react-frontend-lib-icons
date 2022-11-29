import React, { FC, memo } from 'react';
import ScrewdriverSvg from '../svg/screwdriver.svg';

export interface IScrewdriverIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ScrewdriverIcon: FC<IScrewdriverIconProps> = memo(props => {
  return <ScrewdriverSvg {...props} />;
});
