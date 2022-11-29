import React, { FC, memo } from 'react';
import EarbudsOffSvg from '../svg/earbuds-off.svg';

export interface IEarbudsOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarbudsOffIcon: FC<IEarbudsOffIconProps> = memo(props => {
  return <EarbudsOffSvg {...props} />;
});
