import React, { FC, memo } from 'react';
import PipeWrenchSvg from '../svg/pipe-wrench.svg';

export interface IPipeWrenchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PipeWrenchIcon: FC<IPipeWrenchIconProps> = memo(props => {
  return <PipeWrenchSvg {...props} />;
});
