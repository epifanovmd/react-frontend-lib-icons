import React, { FC, memo } from 'react';
import EarbudsSvg from '../svg/earbuds.svg';

export interface IEarbudsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EarbudsIcon: FC<IEarbudsIconProps> = memo(props => {
  return <EarbudsSvg {...props} />;
});
