import React, { FC, memo } from 'react';
import WrenchCheckSvg from '../svg/wrench-check.svg';

export interface IWrenchCheckIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WrenchCheckIcon: FC<IWrenchCheckIconProps> = memo(props => {
  return <WrenchCheckSvg {...props} />;
});
