import React, { FC, memo } from 'react';
import WrenchSvg from '../svg/wrench.svg';

export interface IWrenchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WrenchIcon: FC<IWrenchIconProps> = memo(props => {
  return <WrenchSvg {...props} />;
});
