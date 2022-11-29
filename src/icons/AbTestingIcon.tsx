import React, { FC, memo } from 'react';
import AbTestingSvg from '../svg/ab-testing.svg';

export interface IAbTestingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AbTestingIcon: FC<IAbTestingIconProps> = memo(props => {
  return <AbTestingSvg {...props} />;
});
